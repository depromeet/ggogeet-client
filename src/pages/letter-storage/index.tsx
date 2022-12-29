import BottomSheet from "@/src/components/common/BottomSheet";
import TopNavigation from "@/src/components/common/TopNavigation";
import LetterContainer from "@/src/components/features/letterStorage/main/LetterContainer";
import LetterStorageTopNavigation from "@/src/components/features/letterStorage/main/LetterStorageTopNavigation";
import styled from "@emotion/styled";
import ListBottomSheet from "@/src/components/features/letterStorage/bottomSheet/ListBottomSheet";
import { SenderData } from "@/src/data/LetterStorage";

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

      <BottomSheet onClose={onClose} isOpened={true} className="BottomSheet">
        <ListBottomSheet listArray={SenderData} />
      </BottomSheet>
    </>
  );
};

export default LetterStoragePage;
