import { HTTP_METHOD } from "../constants/api";
import { ReminderType } from "../types/reminder";
import { requester } from "./requester";

export const getReminderList = async () => {
  const { data } = await requester<Array<ReminderType>>({
    method: HTTP_METHOD.GET,
    url: `/reminders`,
  });
  return data;
};
