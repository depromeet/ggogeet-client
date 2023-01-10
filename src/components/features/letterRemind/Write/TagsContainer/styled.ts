import TagButton from "@/src/components/common/Buttons/TagButton";
import Tag from "@/src/components/common/Tag";
import { Body1 } from "@/src/styles/commons";
import styled from "@emotion/styled";
import SituationTag from "../../../LetterWrite/Common/SituationTag";

export const TagsContainer = styled.div`
  display: flex;
  overflow: auto;
  white-space: nowrap;
`;

export const TagWrapper = styled.div`
  margin: 0 8px 0 0;
  cursor: pointer;
`;

export const ShapedTag = styled(Tag)``;

interface RoundedTagProps {
  isSelected: boolean;
}

export const RoundedTag = styled(TagButton)<RoundedTagProps>`
  background-color: transparent;
  border: ${({ theme, isSelected }) =>
    `1px solid ${isSelected ? theme.colors.white : theme.colors.gray5}`};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.white : theme.colors.gray5};

  ${Body1}

  div {
    border: none;
  }
`;
