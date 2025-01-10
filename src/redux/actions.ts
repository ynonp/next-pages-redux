import { createAction } from "@reduxjs/toolkit";

export const set = createAction('set', (key: string, value: any) => ({
  payload: { key, value }
}));

