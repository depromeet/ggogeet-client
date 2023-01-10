import ListContainer from "../ListContainer";
import * as S from "./styled";
import { KakaoFriendType } from "@/src/types/users";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getKakaoFriends } from "@/src/apis/auth";
import { RemindWriteEmotionData } from "@/src/data/LetterRemind";

interface Props {
  selectedMenu: string;
}

export default function ListBottomSheet({ selectedMenu }: Props) {
  const [senderList, setSenderList] = useState<KakaoFriendType[]>();

  const { data: sendersData, isSuccess } = useQuery({
    queryKey: ["sendersData"],
    queryFn: getKakaoFriends,
  });

  useEffect(() => {
    setSenderList(sendersData);
  }, [isSuccess]);

  return (
    <S.ListsContainer>
      {selectedMenu === "보낸 사람" ? (
        <>
          {senderList?.map((item) => {
            return (
              <ListContainer
                name={item.kakaoFriendName}
                key={item.id}
                image={item.friendProfileImg}
              />
            );
          })}
        </>
      ) : (
        <>
          {RemindWriteEmotionData.map((item, index) => {
            return <ListContainer name={item} key={index} />;
          })}
        </>
      )}
    </S.ListsContainer>
  );
}

RemindWriteEmotionData;
