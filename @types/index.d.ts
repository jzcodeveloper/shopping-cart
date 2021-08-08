export type EmptyObject = Record<string, never>;

export type Nullable<T> = T | null;

export interface Action {
  type: string;
}

export interface ActionPayload<T = any> extends Action {
  payload: T;
}
