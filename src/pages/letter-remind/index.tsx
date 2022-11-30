import Button from "@/src/components/common/Buttons/Button";
import TopNavigation from "@/src/components/common/TopNavigation";
import TodoContainer from "@/src/components/features/letter-remind/TodoContainer";
import styled from "@emotion/styled";

const Layout = styled.div`
  padding: 12px 16px 0 16px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 270px;
  padding: 0 0 28px 0;
  justify-content: space-between;
`;

const TodoContainerWrapper = styled.div`
  padding: 0 0 12px 0;
`;

const DummyData = [
  {
    title: "제목",
    date: "11월 29일",
    id: "1",
    situation: "축하해요",
    alarm: "2일 전 알림",
    isAlarm: true,
    content: "라면..버블티..불닭볶음면..치킨마요..참치캔..닭가슴살..등등..... ",
  },
  {
    title: "제목",
    date: "11월 29일",
    id: "2",
    situation: "축하해요",
    alarm: "2일 전 알림",
    isAlarm: true,
    content: "라면..버블티..불닭볶음면..치킨마요..참치캔..닭가슴살..등등..... ",
  },
  {
    title: "제목",
    date: "11월 29일",
    id: "3",
    situation: "축하해요",
    alarm: "2일 전 알림",
    isAlarm: false,
    content: "라면..버블티..불닭볶음면..치킨마요..참치캔..닭가슴살..등등..... ",
  },
  {
    title: "제목",
    date: "11월 29일",
    id: "4",
    situation: "축하해요",
    alarm: "2일 전 알림",
    isAlarm: true,
    content: "라면..버블티..불닭볶음면..치킨마요..참치캔..닭가슴살..등등..... ",
  },
  {
    title: "제목",
    date: "11월 29일",
    id: "5",
    situation: "축하해요",
    alarm: "2일 전 알림",
    isAlarm: false,
    content: "라면..버블티..불닭볶음면..치킨마요..참치캔..닭가슴살..등등..... ",
  },
  {
    title: "제목",
    date: "11월 29일",
    id: "6",
    situation: "축하해요",
    alarm: "2일 전 알림",
    isAlarm: true,
    content: "라면..버블티..불닭볶음면..치킨마요..참치캔..닭가슴살..등등..... ",
  },
  {
    title: "제목",
    date: "11월 29일",
    id: "7",
    situation: "축하해요",
    alarm: "2일 전 알림",
    isAlarm: false,
    content: "라면..버블티..불닭볶음면..치킨마요..참치캔..닭가슴살..등등..... ",
  },
  {
    title: "제목",
    date: "11월 29일",
    id: "8",
    situation: "축하해요",
    alarm: "2일 전 알림",
    isAlarm: true,
    content: "라면..버블티..불닭볶음면..치킨마요..참치캔..닭가슴살..등등..... ",
  },
  {
    title: "제목",
    date: "11월 29일",
    id: "9",
    situation: "축하해요",
    alarm: "2일 전 알림",
    isAlarm: true,
    content: "라면..버블티..불닭볶음면..치킨마요..참치캔..닭가슴살..등등..... ",
  },
  {
    title: "제목",
    date: "11월 29일",
    id: "10",
    situation: "축하해요",
    alarm: "2일 전 알림",
    isAlarm: false,
    content: "라면..버블티..불닭볶음면..치킨마요..참치캔..닭가슴살..등등..... ",
  },
];

const LetterRemindPage = () => {
  return (
    <>
      <TopNavigation title="꼬깃기억" />

      <Layout>
        <ButtonsContainer>
          <Button name="모든 꼬깃기억" fontStyle="bold" isDark={true} />
          <Button name="미완료" fontStyle="bold" isDark={true} />
          <Button name="완료" fontStyle="bold" isDark={true} />
        </ButtonsContainer>

        {DummyData.map((item) => {
          return (
            <TodoContainerWrapper key={item.id}>
              <TodoContainer todoObject={item} />
            </TodoContainerWrapper>
          );
        })}
      </Layout>
    </>
  );
};

export default LetterRemindPage;
