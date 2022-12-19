import BottomSheet from "@/src/components/common/BottomSheet";
import TopNavigation from "@/src/components/common/TopNavigation";
import LetterContainer from "@/src/components/features/letter-storage/LetterContainer";
import LetterStorageTopNavigation from "@/src/components/features/letter-storage/LetterStorageTopNavigation";
import SenderListBottomSheet from "@/src/components/features/letter-storage/SenderListBottomSheet";
import styled from "@emotion/styled";

const Layout = styled.div`
  padding: 0 16px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

const LetterContainerWrapper = styled.div`
  padding: 0 0 8px 0;
`;

const LetterStorageBottomSheet = styled(BottomSheet)`
  padding: 28px 20px 20px 20px;
  background-color: red;
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

const TopNavigationRightElem = () => {
  return <>헤더오른쪽</>;
};

const LetterStoragePage = () => {
  const TopNavigations = ["받은 꼬깃", "보낸 꼬깃"];

  const onClose = () => {
    return;
  };

  return (
    <>
      <TopNavigation title="보관함" rightElem={<TopNavigationRightElem />} />

      <Layout>
        <LetterStorageTopNavigation navigations={TopNavigations} />

        <Header>
          <div>최근 받은 순</div>
          <div>상세 필터</div>
        </Header>

        {dummyData.map((letter) => {
          return (
            <LetterContainerWrapper key={letter.id}>
              <LetterContainer letter={letter} />
            </LetterContainerWrapper>
          );
        })}
      </Layout>

      <LetterStorageBottomSheet onClose={onClose} isOpened={true}>
        <SenderListBottomSheet />
      </LetterStorageBottomSheet>
    </>
  );
};

export default LetterStoragePage;
