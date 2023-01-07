import { SituationIdType } from "./sentence";

export type ReminderType = {
  id: number;
  title: string;
  content: string;
  situationId: SituationIdType;
  eventAt: string;
  alertOn: boolean;
  alarmAt: string;
  isDone: boolean;
};

export type ReminderPayload = {
  title: string;
  content: string;
  situationId: number;
  eventAt: string;
  alertOn: boolean;
  alarmAt: string;
};

export type ReminderIsDone = {
  id: number;
  isDone: boolean;
};
