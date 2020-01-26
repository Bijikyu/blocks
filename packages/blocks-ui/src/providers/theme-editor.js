import React, { useState, useContext } from 'react'
import { system as systemTheme } from '@theme-ui/presets'

import appTheme from '../theme.js'

const DEFAULT_THEME = {
  ...systemTheme,
  breakpoints: [360, 600, 1024],
  forms: appTheme.forms
}

const ThemeEditorContext = React.createContext({})

export const useThemeEditor = () => {
  const value = useContext(ThemeEditorContext)

  return value
}

export const ThemeEditorProvider = ({ theme = DEFAULT_THEME, children }) => {
  const [value, update] = useState(theme)

  return (
    <ThemeEditorContext.Provider value={{ ...value, update }}>
      {children}
    </ThemeEditorContext.Provider>
  )
}

export default ThemeEditorProvider
