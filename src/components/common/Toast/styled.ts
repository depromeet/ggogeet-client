import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Body3 } from "@/src/styles/commons";

export const Wrap = styled.div`
  pointer-events: none;
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  bottom: 10%;
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const Container = styled(motion.button)`
  pointer-events: all;
  width: 320px;

  ${Body3}
  color: ${({ theme }) => theme.colors.white};
  text-align: center;

  background-color: ${({ theme }) => theme.colors.gray5};
  border-radius: 8px;

  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
  padding: 16px 0;
`;
