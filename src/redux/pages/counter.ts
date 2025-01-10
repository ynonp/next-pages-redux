import {useSelector, TypedUseSelectorHook} from 'react-redux';

export type Counter = {
  count: number;
}

export const initialState: Counter = {
  count: 0,
}

export const useCounterSelector: TypedUseSelectorHook<Counter> = useSelector;
