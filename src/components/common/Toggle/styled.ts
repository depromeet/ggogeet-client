import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrap = styled(motion.button)`
  width: 52px;
  height: 32px;
  border-radius: 100px;
  padding: 2px;
  display: flex;
  cursor: pointer;
  transition: 0.3s ease;

  &.on {
    background-color: ${({ theme }) => theme.colors.green};
    justify-content: flex-end;
  }
  &.off {
    background-color: ${({ theme }) => theme.colors.gray3};
    justify-content: flex-start;
  }
`;

export const Switch = styled(motion.div)`
  width: 28px;
  height: 28px;
  background-color: #ffffff;
  border-radius: 200px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.02);
`;
