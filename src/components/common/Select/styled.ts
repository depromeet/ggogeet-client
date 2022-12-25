import theme from "@/src/styles/theme";
import styled from "@emotion/styled";

export const Select = styled.select`
  -webkit-appearance: none;
  appearance: none;
  padding: 20px;
  padding-right: 36px;
  border-radius: ${theme.radius.md};
  border-color: #e4e7ef;

  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBmaWxsPSIjQTRBOUI4IiBkPSJtNS44OTUgOC41NS0uNDM3LS4zOTYtLjc5Ljg3NC40MzcuMzk1Ljc5LS44NzRabTUuMzA4IDUuNTkzLS4zOTUuNDM3LjM5NS4zNTcuMzk1LS4zNTctLjM5NS0uNDM3Wk0xNy42OCA5LjA4bC40MzctLjM5NS0uNzktLjg3NC0uNDM4LjM5NS43OS44NzRabS0xMi41NzYuMzQzIDUuNzAzIDUuMTU3Ljc5LS44NzQtNS43MDMtNS4xNTctLjc5Ljg3NFptNi40OTMgNS4xNTcgNi4wODMtNS41LS43OS0uODc0LTYuMDgzIDUuNS43OS44NzRaIi8+Cjwvc3ZnPgo=");
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: calc(100% - 8px) center;

  color: ${({ value }) => (value ? "#767c8d" : "#bcc1d0")};

  option[disabled] {
    display: none;
  }
`;
export const Item = styled.option``;
