import { tempKakaoFriendsList } from "@/src/data/LetterWrite";
import Image from "next/image";
import { ReactElement } from "react";
import { useBottomButton } from "../Hooks";
import * as S from "../styled";

const ReceiverFriendsForm = (): ReactElement => {
  const bottomButton = useBottomButton({ text: "친구목록에 없어요" });
  return (
    <>
      <S.LetterWriteH1>누구에게 보낼 건가요?</S.LetterWriteH1>
      <S.LetterWriteProfileContainer>
        {tempKakaoFriendsList.data.friends.map((friend) => (
          <li key={friend.id}>
            <button>
              {friend.profile_img ? (
                <Image
                  src={friend.profile_img}
                  alt="카카오 프로필 이미지"
                  width={36}
                  height={36}
                />
              ) : (
                <div className="profile-image-default"></div>
              )}
              <span>{friend.kakao_friend_name}</span>
            </button>
          </li>
        ))}
      </S.LetterWriteProfileContainer>
      {bottomButton}
    </>
  );
};

export default ReceiverFriendsForm;
