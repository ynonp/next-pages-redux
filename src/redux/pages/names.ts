import {useSelector, TypedUseSelectorHook} from 'react-redux';
import { createAction } from '@reduxjs/toolkit';
import type {SetFieldPayload} from './types';

export type Names = {
  firstName: string,
  lastName: string,
}

export const initialState: Names = {
  firstName: 'a',
  lastName: 'b',
}

export const useNamesSelector: TypedUseSelectorHook<Names> = useSelector;