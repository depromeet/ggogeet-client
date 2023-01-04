import { HTTP_METHOD } from "../constants/api";
import { ReminderDataType } from "../types/reminder";
import { requester } from "./requester";

export const getReminderList = async () => {
  const { data } = await requester<Array<ReminderDataType>>({
    method: HTTP_METHOD.GET,
    url: `/reminders`,
  });
  return data;
};
