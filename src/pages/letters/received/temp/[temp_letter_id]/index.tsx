import { getReceivedLetterTemp } from "@/src/apis/letter";
import LetterReplyPage from "@/src/pages/letter-reply";
import { queryKeys } from "@/src/react-query/constants";
import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import { useRouter } from "next/router";

const LettersReceivedTempPage: NextPage = () => {
  const router = useRouter();
  const { temp_letter_id: tempLetterId } = router.query;
  const { data } = useQuery(
    [queryKeys.getLettersReceivedTemp],
    () => getReceivedLetterTemp(Number(tempLetterId)),
    {
      enabled: !!tempLetterId,
    }
  );

  return <LetterReplyPage />;
};

export default LettersReceivedTempPage;
