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
