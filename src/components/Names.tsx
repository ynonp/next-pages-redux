import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { set } from '../redux/actions';
import Link from 'next/link'

import { useNamesSelector } from '@/redux/pages/names';

export default function() {
  const dispatch = useDispatch();
  
  const firstName = useNamesSelector(s => s.firstName);
  const lastName = useNamesSelector(s => s.lastName);

  function swap() {
    dispatch(set({key: 'firstName', value: lastName}))
    dispatch(set({key: 'lastName', value: firstName}))
  }

  return (
    <div>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <button onClick={swap}>Swap</button>
      <Link href="/">Counter</Link>
    </div>
  )
}