import React from "react";
import { User } from "@/src/apis";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";

const user = new User();

const UserPage = (
  Props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return <h1>Hello, Users</h1>;
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {},
  };
}

export default UserPage;
