import styled from "@emotion/styled";
import TagButton from "@/src/components/common/Buttons/TagButton";

export const TagsContainer = styled.div`
  display: flex;
  overflow: auto;
  white-space: nowrap;
`;

export const TagWrapper = styled.div`
  margin: 0 8px 0 0;
`;

interface TagProps {
  isClicked: boolean;
}

export const RoundTag = styled(TagButton)<TagProps>`
  background-color: ${({ isClicked, theme }) => isClicked && "green"};
  /* 임시 스타일 적용 */
`;
