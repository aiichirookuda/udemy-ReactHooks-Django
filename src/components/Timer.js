import React, { useState, useEffect } from 'react'

const Timer = () => {
  const [count, setCount] = useState(0)

  const time = () => {
    setCount(prevCount => prevCount + 1)
  }

  useEffect(() => {
    const interval = setInterval(time, 1000)
    return () => {
      clearInterval(interval)
      console.log('cleared')
    }
    /* cleanup
    useEffectの機能
    コンポーネントが破棄されたときにreturnの中身が実行される。 */
  }, [])

  return (
    <div>
      {count}
    </div>
  )
}

export default Timer
