import React from 'react'
import { useDispatch } from 'react-redux';
import { useCounterSelector } from '@/redux/pages/counter'
import { set } from '../redux/actions';
import Link from 'next/link'

export function Counter() {
  const dispatch = useDispatch()
  const count = useCounterSelector(s => s.count);

  return (
    <div>
      <Link href="/names">Names</Link>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(set({key: 'count', value: 1}))}
        >
          Increment
        </button>
        <p>{count}</p>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(set({key: 'count', value: -1}))}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}