export type KakaoFriendDataType = {
  id: number;
  friendUserId: number;
  kakaoUuid: string;
  kakaoFriendName: string;
  friendProfileImg: string;
  createdAt: string;
  updatedAt: string;
};

export type MyInfomation = {
  id: number;
  name: string;
  profileImg: string;
  remindOn: boolean;
  alertOn: boolean;
  welcomePopupView: boolean;
  allowFriendsList: boolean;
};
