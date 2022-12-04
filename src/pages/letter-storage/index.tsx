import LetterContainer from "@/src/components/features/letter-storage/LetterContainer";
import styled from "@emotion/styled";

const Layout = styled.div``;

const LetterContainerWrapper = styled.div`
  padding: 0 0 8px 0;
`;

const dummyData = [
  {
    sender: "김가은",
    content: "생일축하혀..",
    date: "2022.12.04",
    image: "https://via.placeholder.com/87",
    senderImage: "https://via.placeholder.com/20",
    id: "1",
  },
  {
    sender: "김가은",
    content: "생일축하혀..",
    date: "2022.12.04",
    image: "https://via.placeholder.com/87",
    senderImage: "https://via.placeholder.com/20",
    id: "2",
  },
  {
    sender: "김가은",
    content: "생일축하혀..",
    date: "2022.12.04",
    image: "https://via.placeholder.com/87",
    senderImage: "https://via.placeholder.com/20",
    id: "3",
  },
  {
    sender: "김가은",
    content: "생일축하혀..",
    date: "2022.12.04",
    image: "https://via.placeholder.com/87",
    senderImage: "https://via.placeholder.com/20",
    id: "4",
  },
  {
    sender: "김가은",
    content: "생일축하혀..",
    date: "2022.12.04",
    image: "https://via.placeholder.com/87",
    senderImage: "https://via.placeholder.com/20",
    id: "5",
  },
  {
    sender: "김가은",
    content: "생일축하혀..",
    date: "2022.12.04",
    image: "https://via.placeholder.com/87",
    senderImage: "https://via.placeholder.com/20",
    id: "6",
  },
];

const LetterStoragePage = () => {
  return (
    <>
      {dummyData.map((letter) => {
        return (
          <LetterContainerWrapper key={letter.id}>
            <LetterContainer letter={letter} />
          </LetterContainerWrapper>
        );
      })}
    </>
  );
};

export default LetterStoragePage;
