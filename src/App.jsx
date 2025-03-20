import Index from './ui/pages'
import styles from './App.module.css'
import {useApp} from './data/hooks/useApp.page'
import { createContext } from 'react'

export const AppContext = createContext({})
function App() {
  const useAppValues = useApp();
  return (
    <>
      <header className={styles.header}>
        <h1><span className={styles.h1}>Music</span> Player</h1>
      </header>
      <AppContext.Provider value={useAppValues}>
        <Index></Index>
      </AppContext.Provider>
    </>
  )
}
export default App
 