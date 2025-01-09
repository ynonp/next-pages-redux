import {useSelector, TypedUseSelectorHook} from 'react-redux';
import { createAction } from '@reduxjs/toolkit';
import type {SetFieldPayload} from './types';

export type Counter = {
  count: number;
}

export const initialState: Counter = {
  count: 0,
}

export const useCounterSelector: TypedUseSelectorHook<Counter> = useSelector;
