import BottomSheet from "@/src/components/common/BottomSheet";
import Select from "@/src/components/common/Select";
import TopNavigation from "@/src/components/common/TopNavigation";
import { NavBack } from "@/src/components/common/TopNavigation/atoms";
import FilterButton from "@/src/components/features/letter-storage/FilterButton";
import PlusButton from "@/src/components/features/letter-storage/PlusButton";
import LetterContainer from "@/src/components/features/letter-storage/LetterContainer";
import { Caption1, Display2 } from "@/src/styles/commons";
import styled from "@emotion/styled";
import ListBottomSheet from "@/src/components/features/letterStorage/bottomSheet/ListBottomSheet";
import { SenderData } from "@/src/data/LetterStorage";
import SortButton from "@/src/components/features/letter-storage/SortButton";

const Layout = styled.div`
  background-color: ${({ theme }) => theme.colors.navy};
  height: 100vh;
`;

const MainLayout = styled.div`
  padding: 16px 20px;
`;

const TopNavigationTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${Display2}
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 8px 0;
  align-items: center;
`;

const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LetterKindSelect = styled(Select)`
  background-color: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 7px 28px 7px 12px;
  ${Caption1}
`;

const LetterContainerWrapper = styled.div`
  padding: 0 0 8px 0;
`;

const Space = styled.div`
  width: 10px;
`;

const dummyData = [
  {
    sender: "김가은",
    content: "생일축하혀..",
    date: "2022년 12월 04일",
    status: "응원하는 개",
    color: "yellow",
    id: "1",
  },
  {
    sender: "김가은",
    content: "생일축하혀..",
    date: "2022년 12월 04일",
    status: "응원하는 개",
    color: "yellow",
    id: "2",
  },
  {
    sender: "김가은",
    content: "생일축하혀..",
    date: "2022년 12월 04일",
    status: "응원하는 개",
    color: "yellow",
    id: "3",
  },
  {
    sender: "김가은",
    content: "생일축하혀..",
    date: "2022년 12월 04일",
    status: "응원하는 개",
    color: "yellow",
    id: "4",
  },
  {
    sender: "김가은",
    content: "생일축하혀..",
    date: "2022년 12월 04일",
    status: "응원하는 개",
    color: "yellow",
    id: "5",
  },
  {
    sender: "김가은",
    content: "생일축하혀..",
    date: "2022년 12월 04일",
    status: "응원하는 개",
    color: "yellow",
    id: "6",
  },
];

const LetterStoragePage = () => {
  const TopNavigations = ["받은 꼬깃", "보낸 꼬깃"];

  const onClose = () => {
    return;
  };

  return (
    <Layout>
      <TopNavigation
        title={<TopNavigationTitle>꼬깃 보관함</TopNavigationTitle>}
        leftElem={<NavBack color="white" />}
        rightElem={<PlusButton />}
      />

      <MainLayout>
        <Header>
          <LetterKindSelect
            options={{
              "전체 꼬깃": "전체 꼬깃",
              "보낸 꼬깃만": "보낸 꼬깃만",
              "받은 꼬깃만": "받은 꼬깃만",
            }}
            placeholder="전체 꼬깃"
          />

          <HeaderRight>
            <SortButton sortKind="최근 받은 순" />
            <Space />
            <FilterButton />
          </HeaderRight>
        </Header>

        {dummyData.map((letter) => {
          return (
            <LetterContainerWrapper key={letter.id}>
              <LetterContainer letter={letter} />
            </LetterContainerWrapper>
          );
        })}

        <BottomSheet onClose={onClose} isOpened={true} className="BottomSheet">
          <ListBottomSheet listArray={SenderData} />
        </BottomSheet>

        <BottomSheet onClose={onClose} isOpened={true} className="BottomSheet">
          <ListBottomSheet listArray={SenderData} />
        </BottomSheet>
      </MainLayout>
    </Layout>
  );
};

export default LetterStoragePage;
