export interface Response<T> {
  code: number;
  message?: string;
  data: T;
}
export interface ApiStructure {
  get(value?: unknown);
  update(value?: unknown);
}
