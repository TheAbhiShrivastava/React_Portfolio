
import './App.css';
import Body from './components/Body';

import { NextUIProvider } from '@nextui-org/react';
import { createTheme } from "@nextui-org/react"
import {useEffect, useState} from 'react';

const lightTheme = createTheme({
  type: 'light',
  theme: {
   colors:{
   }
  },
  
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    
  }
})

function App() {
  const [isDark, setIsDark] = useState(true)
  const [containerStyle, setContainerStyle] = useState('')

  const handleChangeIsDark = () => {
    setIsDark(!isDark)
  }
  
  useEffect(() => {
    if(isDark){
      setContainerStyle('scrollable-container scrollable-container-dark')
    } else if (!isDark){
      setContainerStyle('scrollable-container scrollable-container-light')
    }
  },[isDark])

  return (
    <div className={containerStyle}>
      <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
        <Body onToggleTheme={handleChangeIsDark}/>
      </NextUIProvider>
    </div>
  );
}

export default App;
