import { getKakaoFriends } from "@/src/apis/auth";
import { queryKeys } from "@/src/react-query/constants";
import { letterWriteInputState } from "@/src/store/LetterWrite";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { useSetRecoilState } from "recoil";
import { useBottomButton } from "../Hooks";
import * as S from "../styled";

const ReceiverFriendsForm = (): ReactElement => {
  const router = useRouter();
  const setLetterWriteInputObjectState = useSetRecoilState(
    letterWriteInputState
  );
  const onClickFriend = (receiverUserId: number, receiverName: string) => {
    setLetterWriteInputObjectState((prev) => ({
      ...prev,
      receiverUserId,
      receiverName,
    }));
    router.push("/letter-write?type=recipient-02");
  };
  const { data: kakaoFriendsList = [], isSuccess } = useQuery(
    [queryKeys.kakaoFriends],
    getKakaoFriends
  );

  const kakaoFriendsListLength = kakaoFriendsList.length;

  const bottomButton = useBottomButton({
    text: kakaoFriendsListLength > 0 ? "친구목록에 없어요" : "직접 입력할래요",
  });

  if (!isSuccess) return <></>;

  return (
    <>
      <S.LetterWriteH1>누구에게 보낼 건가요?</S.LetterWriteH1>
      <S.LetterWriteProfileContainer>
        {kakaoFriendsListLength > 0 ? (
          kakaoFriendsList.map((friend) => (
            <li key={friend.id}>
              <button
                onClick={() =>
                  onClickFriend(friend.friendUserId, friend.kakaoFriendName)
                }
              >
                {friend.friendProfileImg ? (
                  <Image
                    src={friend.friendProfileImg}
                    alt="카카오 프로필 이미지"
                    width={36}
                    height={36}
                  />
                ) : (
                  <div className="profile-image-default">
                    <Image
                      src="/icons/icon__kakao-profile-image--default.svg"
                      alt="카카오 기본 프로필 이미지"
                      width={36}
                      height={36}
                    />
                  </div>
                )}
                <span>{friend.kakaoFriendName}</span>
              </button>
            </li>
          ))
        ) : (
          <S.EmptyKakaoFriends>
            <Image
              src="/images/image__empty.svg"
              alt="카카오 친구목록 비어있음"
              width={94.5}
              height={95.5}
            />
            <span>아직 꼬깃 친구가 없어요!</span>
          </S.EmptyKakaoFriends>
        )}
      </S.LetterWriteProfileContainer>
      {bottomButton}
    </>
  );
};

export default ReceiverFriendsForm;
