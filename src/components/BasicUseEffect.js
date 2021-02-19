import React, {useState, useEffect} from 'react'

const BasicUseEffect = () => {

  const [count, setCount] = useState(0)
  const [item, setItem] = useState('')

  useEffect(()=>{
    console.log('useEffect invoked')
  },[count])
  // 第二引数に[]を記載すると最初のレンダリング時だけ実行されるようになる。
  // 記載なしだとコンポーネントが読み込まれるたびに実行される。
  // 特定のstateに変更があったときだけ実行させたいときは第二引数で対象のstateを指定する。

  return (
    <div>
      <button onClick={()=>setCount(prevCount=>prevCount+1)}>Click {count}</button>
      <input type='text' value={item} onChange={e=>setItem(e.target.value)} />
    </div>
  )
}

export default BasicUseEffect
