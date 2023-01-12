import styled from "@emotion/styled";

interface Props {
  color: string;
  label: string;
}

export default function Tag({ color, label }: Props) {
  return (
    <Wrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height="22"
        fill="none"
        viewBox="0 0 6 22"
      >
        <path
          fill={color}
          fillRule="evenodd"
          d="M.052 22H6V0H2.492l.427 1.707a4.81 4.81 0 0 1-1.012 4.306c-1.382 1.602-1.484 4-.24 5.725l.231.317a4.886 4.886 0 0 1-.195 4.747l-1.03 1.669a4.793 4.793 0 0 0-.667 2.695L.052 22Z"
          clipRule="evenodd"
        />
      </svg>
      <div
        style={{
          backgroundColor: color,
          padding: "4px 8px",
          fontSize: "12px",
        }}
      >
        {label}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height="22"
        fill="none"
        viewBox="0 0 6 22"
      >
        <path
          fill={color}
          fillRule="evenodd"
          d="M0 0v22h2.623l2.895-2.867-3.015-1.372L6 14.271l-4.582-1.622s3.979-2.742 3.979-3.116c0 0-3.831-1.794-4.415-2.12 0 0 4.211-1.995 5-2.08L0 3.5 2.948 0H0Z"
          clipRule="evenodd"
        />
      </svg>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  margin: "20px";
`;
