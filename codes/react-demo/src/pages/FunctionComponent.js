import React, { useState, useEffect } from 'react'
export default function FunctionComponent () {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    // 相当于componentDidMount、componentDidUpdate、componentWillUnmount声明周期的集合
    console.log('effect!!!')
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <div>
      <h3>function组件</h3>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  )
}