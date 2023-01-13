import ListContainer from "../ListContainer";
import * as S from "./styled";
import { KakaoFriendType } from "@/src/types/users";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getKakaoFriends } from "@/src/apis/auth";
import { RemindWriteEmotionData } from "@/src/data/LetterRemind";
import { situationTemplatesData } from "@/src/data/LetterWrite";

interface FilterConditionTypes {
  senders: string[];
  tags: string[];
  startDate?: string;
  endDate?: string;
  order?: string;
}
interface Props {
  selectedMenu: string;
  setFilterCondition: Dispatch<SetStateAction<FilterConditionTypes>>;
}

export default function ListBottomSheet({
  selectedMenu,
  setFilterCondition,
}: Props) {
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
                id={"" + item.friendUserId}
                image={item.friendProfileImg}
                isSender={true}
                setFilterCondition={setFilterCondition}
              />
            );
          })}
        </>
      ) : (
        <>
          {RemindWriteEmotionData.map((item, index) => {
            return (
              <ListContainer
                name={item}
                key={index}
                setFilterCondition={setFilterCondition}
                id={"" + situationTemplatesData[index].situationId}
              />
            );
          })}
        </>
      )}
    </S.ListsContainer>
  );
}

RemindWriteEmotionData;
