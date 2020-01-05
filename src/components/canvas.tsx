import React, { useEffect, useRef } from 'react'
import { useRaf } from 'react-use';

export default function Canvas {
  const can = useRef(null)
  const elapsed = useRaf(5000, 1000);
  useEffect(() => {
    console.log('mount', can)
    if (can?.current?.getContext) {
      const ctx = can.current.getContext('2d')

    }
    return () => {
      console.log('unmount')
    }
  }, [can])
  return (
    <>
      Elapsed: {elapsed}
      <canvas ref={can} />
    </>
  )
}
