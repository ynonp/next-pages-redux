import { createAction } from "@reduxjs/toolkit";

export const set = createAction<{key: string, value: any}>('set');