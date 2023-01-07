import { letterWriteInputState } from "@/src/store/LetterWrite";
import Image from "next/image";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { useSetRecoilState } from "recoil";
import { useBottomButton } from "../Hooks";
import * as S from "../styled";

// TODO: 카카오 친구 목록 불러오기 API
const ReceiverFriendsForm = (): ReactElement => {
  const router = useRouter();
  const setLetterWriteInputObjectState = useSetRecoilState(
    letterWriteInputState
  );
  const bottomButton = useBottomButton({ text: "친구목록에 없어요" });
  const onClickFriend = (receiverName: string) => {
    setLetterWriteInputObjectState((prev) => ({ ...prev, receiverName }));
    router.push("/letter-write?type=recipient-02");
  };
  return (
    <>
      <S.LetterWriteH1>누구에게 보낼 건가요?</S.LetterWriteH1>
      <S.LetterWriteProfileContainer>
        {/* {tempKakaoFriendsList.data.friends.map((friend) => (
          <li key={friend.id}>
            <button onClick={() => onClickFriend(friend.kakao_friend_name)}>
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
        ))} */}
      </S.LetterWriteProfileContainer>
      {bottomButton}
    </>
  );
};

export default ReceiverFriendsForm;
