import styled from "@emotion/styled";
import TagButton from "../Buttons/TagButton";

export const TagsContainer = styled.div`
  display: flex;
  overflow: auto;
  white-space: nowrap;
`;

export const TagWrapper = styled.div`
  margin: 0 8px 0 0;
`;

export const Tag = styled(TagButton)``;
