import { configureStore, createReducer } from '@reduxjs/toolkit'
import { set } from './actions';
import _ from 'lodash';

export function makeStore(initialState: any) {
  return configureStore({
    reducer: createReducer(initialState, builder => {
      builder.addCase(set, (state, action) => {
        // @ts-ignore        
        state[action.payload.key] = action.payload.value;
      })
    })
  })  
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type TState = ReturnType<typeof makeStore>;

export type RootState = ReturnType<TState['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = TState['dispatch']


