import React, { useEffect, useRef, useState } from 'react'
import { useMouse, useRaf } from 'react-use'

import draw from '../lib/draw.ts'

import './canvas.styl'

// https://github.com/vnglst/react-hooks-canvas/blob/master/src/hooks/index.js

export default function Canvas {
  const canvasRef = useRef(null)
  const enlapsed = useRaf(5000, 1000);
  const {docX, docY, posX, posY, elX, elY, elW, elH} = useMouse(canvasRef);
  const [ctx, setCtx] = useState(null)
  const [dim, setDim] = useState({})

  useEffect(() => {
    console.log('mount', canvasRef)
    if (canvasRef?.current?.getContext) {
      const ctx = canvasRef.current.getContext('2d')
      setCtx(ctx)
      setDim({width: canvasRef.current.width, height: canvasRef.current.height})
    }
    return () => {
      console.log('unmount')
    }
  }, [canvasRef])

  if(ctx && dim.width) {
    draw({
      ctx,
      docX,
      docY,
      dim,
      time: enlapsed
    })
  }


  return (
    <>
      <div>Elapsed: {enlapsed}</div>
      <div>Mouse: {docX} x {docY}</div>
      <canvas ref={canvasRef} width={320} height={568} />
    </>
  )
}
