'use client'
 
import { create } from './actions'
 
export function Button() {
  return <button onClick={() => create()}>Submit</button>
}