import React from 'react'
// 通过context传递参数
/**
 * 1.创建context
 * 2.创建Provider
 */
export const ThemeConext = React.createContext()
export const ThemeProvider = ThemeConext.Provider;
