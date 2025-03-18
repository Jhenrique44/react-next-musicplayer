import Index from './ui/pages'
// import { useState, useEffect } from 'react'
import styles from './App.module.css'

function App() {
  return (
    <>
      <header className={styles.header}>
        <h1><span className={styles.h1}>Music</span> Player</h1>
      </header>
      <Index></Index>
    </>
  )
}
export default App
