import React, { useContext } from 'react'
import { ThemeConext } from './Context'

export default function UserPage() {
  // 在函数组件中，需要使用useContext
  const ctx = useContext(ThemeConext)
  return (
    <div>
      <h1 className={ctx.themeColor}>UserPage</h1>
    </div>
  )
}
