import BottomSheet from "@/src/components/common/BottomSheet";
import Select from "@/src/components/common/Select";
import TopNavigation from "@/src/components/common/TopNavigation";
import FilterButton from "@/src/components/features/letterStorage/main/FilterButton";
import { Caption1, Display2 } from "@/src/styles/commons";
import styled from "@emotion/styled";
import ListBottomSheet from "@/src/components/features/letterStorage/bottomSheet/ListBottomSheet";
import LetterContainer from "@/src/components/features/letterStorage/main/LetterContainer";
import { NavBack } from "@/src/components/common/TopNavigation/Atoms";
import PlusButton from "@/src/components/features/letterStorage/main/PlusButton";
import SortButton from "@/src/components/features/letterStorage/main/SortButton";
import BottomSheetHeader from "@/src/components/features/letterStorage/bottomSheet/BottomSheetHeader";
import BottomSheetFooter from "@/src/components/features/letterStorage/bottomSheet/BottomSheetFooter";
import { useEffect, useState } from "react";
import Calendar from "@/src/components/common/Calendar";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { getReceivedLetterList, getSentLetterList } from "@/src/apis/letter";
import dayjs from "dayjs";
import Router from "next/router";

const Layout = styled.div`
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.navy};
  height: 100vh;
  overflow: scroll;
`;

const MainLayout = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
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

const LetterContainerLayout = styled.div`
  flex: 1;
`;

const LetterContainerWrapper = styled.div`
  padding: 0 0 12px 0;
`;

const Space = styled.div`
  width: 10px;
`;

const EmptyContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.navy50};
  border-radius: 8px;
  height: 100%;
`;

interface FilterConditionTypes {
  senders: string[];
  tags: string[];
  startDate?: string;
  endDate?: string;
  order?: string;
}

const LetterStoragePage = () => {
  const [listFilter, setListFilter] = useState<"sent" | "receive">("sent");
  const [selectedMenu, setSelectedMenu] = useState<string>("보낸 사람");
  const [calendarValue, setCalendarValue] = useState<Date>(new Date());
  const [sortKind, setSortKind] = useState<string>("최근 받은 순");
  const [isFilterOn, setIsFilterOn] = useState<boolean>(false);

  const [filterCondition, setFilterCondition] = useState<FilterConditionTypes>({
    senders: [],
    tags: [],
    startDate: "1990-01-01 00:00:00",
    order: "DESC",
  });

  const onClose = () => {
    setIsFilterOn(false);
  };

  const { senders, tags, order } = filterCondition;

  const formatCalendarValue = dayjs(calendarValue).format(
    "YYYY-MM-DD HH:mm:ss"
  );

  let initialStartDate = "1990-01-01 00:00:00";

  const { data: receivedLetterList } = useQuery({
    queryKey: ["receivedLetterList", listFilter, senders, tags, order],
    queryFn: () => {
      if (listFilter === "receive")
        return getReceivedLetterList(
          senders,
          tags,
          initialStartDate,
          formatCalendarValue,
          order
        );

      if (listFilter === "sent")
        return getSentLetterList(
          senders,
          tags,
          initialStartDate,
          formatCalendarValue,
          order
        );
    },
  });

  const dataLength = receivedLetterList?.length;

  const onClickFilterApply = () => {
    setIsFilterOn(false);
  };

  const onClickSortButton = () => {
    setSortKind((prev) =>
      prev === "최근 받은 순" ? "오래된 순" : "최근 받은 순"
    );
    setFilterCondition((prev) => ({
      ...prev,
      order: sortKind === "최근 받은 순" ? "ASC" : "DESC",
    }));
  };

  const onClickLetterContainer = (id: number) => {
    Router.push({
      pathname: `/letters/received/saved/${id}`,
      query: { filter: listFilter },
    });
  };

  // const onClickInitializeButton = () => {
  //   setFilterCondition({ senders: [], tags: [] });
  // };

  const onClickFilterButton = () => {
    setIsFilterOn((prev) => !prev);
  };

  useEffect(() => {
    initialStartDate = formatCalendarValue;
  }, [calendarValue]);

  return (
    <Layout>
      <TopNavigation
        title={<TopNavigationTitle>꼬깃 보관함</TopNavigationTitle>}
        leftElem={<NavBack color="white" isHome />}
        // rightElem={<PlusButton />}
      />

      <MainLayout>
        <Header>
          <LetterKindSelect
            value={listFilter}
            onChange={(e) => setListFilter(e.target.value as any)}
            options={{
              sent: "보낸 꼬깃만",
              receive: "받은 꼬깃만",
            }}
            placeholder="전체 꼬깃"
          />

          <HeaderRight>
            <SortButton sortKind={sortKind} onClick={onClickSortButton} />
            <Space />
            <FilterButton onClick={onClickFilterButton} />
          </HeaderRight>
        </Header>

        <LetterContainerLayout>
          {dataLength ? (
            <>
              {receivedLetterList &&
                receivedLetterList.map((letter) => {
                  return (
                    <LetterContainerWrapper
                      key={letter.id}
                      onClick={() => onClickLetterContainer(letter.id)}
                    >
                      <LetterContainer
                        letter={{ ...letter, filter: listFilter }}
                      />
                    </LetterContainerWrapper>
                  );
                })}
            </>
          ) : (
            <EmptyContainer>
              <Image
                src="images/image__empty.svg"
                alt="빈화면이미지"
                width={95}
                height={95}
                priority
              />
            </EmptyContainer>
          )}
        </LetterContainerLayout>

        {isFilterOn && (
          <BottomSheet
            onClose={onClose}
            isOpened={isFilterOn}
            className="BottomSheet"
          >
            <div>
              <BottomSheetHeader
                selected={selectedMenu}
                setSelected={setSelectedMenu}
                filter={listFilter}
              />

              {selectedMenu === "날짜" ? (
                <Calendar
                  calendarValue={calendarValue}
                  setCalendarValue={setCalendarValue}
                />
              ) : (
                <ListBottomSheet
                  selectedMenu={
                    selectedMenu === "보낸 사람" ? "보낸 사람" : "태그"
                  }
                  setFilterCondition={setFilterCondition}
                />
              )}

              <BottomSheetFooter onClick={onClickFilterApply} />
            </div>
          </BottomSheet>
        )}
      </MainLayout>
    </Layout>
  );
};

export default LetterStoragePage;
