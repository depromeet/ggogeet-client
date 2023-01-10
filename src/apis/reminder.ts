import { HTTP_METHOD } from "../constants/api";
import {
  ReminderPayload,
  ReminderType,
  ReminderIsDone,
} from "../types/reminder";
import { requester } from "./requester";

export const getReminderList = async () => {
  const { data } = await requester<Array<ReminderType>>({
    method: HTTP_METHOD.GET,
    url: `/reminders`,
  });
  return data;
};

export const getReminderItem = async (reminderId: number) => {
  const { data } = await requester<ReminderType>({
    method: HTTP_METHOD.GET,
    url: `/reminders/${reminderId}`,
  });
  return data;
};

export const postReminder = async (payload: ReminderPayload) => {
  const { data } = await requester<ReminderType>({
    method: HTTP_METHOD.POST,
    url: `/reminders`,
    data: payload,
  });

  return data;
};

export const patchReminder = async (payload: ReminderPayload) => {
  const { data } = await requester<ReminderType>({
    method: HTTP_METHOD.PATCH,
    url: `/reminders/${payload.situationId}`,
    data: payload,
  });

  return data;
};

export const patchReminderDone = async (reminderId: number) => {
  const { data } = await requester<ReminderIsDone>({
    method: HTTP_METHOD.PATCH,
    url: `/reminders/done/${reminderId}`,
  });

  return data;
};

export const patchRemindUndone = async (reminderId: number) => {
  const { data } = await requester<ReminderIsDone>({
    method: HTTP_METHOD.PATCH,
    url: `/reminders/undone/${reminderId}`,
  });

  return data;
};

export const deleteReminder = async (reminderId: number) => {
  const data = await requester({
    method: HTTP_METHOD.DELETE,
    url: `/reminders/${reminderId}`,
  });

  return data;
};
