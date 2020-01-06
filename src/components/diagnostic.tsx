import React, { useEffect, useRef, useState } from 'react'

import UAParser from 'ua-parser-js'

export default function Diagnostic({getEl}) {
  const canvasRef = useRef(null)
  const [platform, setPlatform] = useState('unknown platform')
  const [ua, setUA] = useState({})

  const [hasMediaSource, setHasMediaSource] = useState(false)
  const [hasCaptureStream, setHasCaptureStream] = useState(false)
  const [hasMediaRecorder, setHasMediaRecorder] = useState(false)



  useEffect(() => {
    const uaparser = new UAParser()
    const ua = uaparser.getResult()
    setUA(ua)

    setHasMediaSource(typeof MediaSource === 'function')

    const can = document.createElement('canvas')
    setHasCaptureStream(typeof can.captureStream === function)

    setHasMediaSource(typeof MediaRecorder === 'function')
  }, [])


  return (
    <>
      <p>
        You are running <b>{ua.browser?.name}</b> version <b>{ua.browser?.major}</b>&nbsp;
        on <b>{ua.os?.name}</b> version <b>{ua.os?.version}</b>.
        {ua.device?.model &&  ua.device?.vendor? (
          <>Your device is: <b>{ua.device?.model}</b> from vendor <b>{ua.device?.vendor}</b></>
        ) : null}
      </p>
      <ul>
        <li>Media Source Extension API is {hasMediaSource ? 'enabled' : 'disabled'}</li>
        <li>Canvas.captureStream API is {hasCaptureStream ? 'enabled' : 'disabled'}</li>
        <li>MediaRecorder API is {hasMediaRecorder ? 'enabled' : 'disabled'}</li>
      </ul>
      {hasMediaSource && hasCaptureStream && hasMediaRecorder ? (
        <p>Great, this should work, let's try out !</p>
      ) : (
        <p>This should not work, let's try anyway, ok ?</p>
      )}
    </>
  )
}
