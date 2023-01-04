import { SituationIdType } from "./sentence";

export type ReminderDataType = {
  id: number;
  title: string;
  content: string;
  situationId: SituationIdType;
  eventAt: string;
  alertOn: boolean;
  alarmAt: string;
  isDone: boolean;
};
