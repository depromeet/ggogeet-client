import { NextPage } from "next";
import {useMutation, useQuery} from '@tanstack/react-query'
import { queryKeys } from "../react-query/constats";
import { authAPI } from "../apis/Auth";
import { INITIAL_USER_INFO } from "../apis/models/AuthModel";

const Home: NextPage = () => {
  const { data: userInfoData = INITIAL_USER_INFO, isLoading } = useQuery(
    [queryKeys.userInfo],
    authAPI.getUserInfo.bind(authAPI),
  )
  const signOutMutation = useMutation(authAPI.signOut.bind(authAPI))
  return (
    <div>Home</div>
  )
};

export default Home;