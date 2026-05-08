'use client'

import { useState, useEffect } from 'react'
import styles from './MockWindowBar.module.css'

export function MockWindowBar() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3500)
      return () => clearTimeout(timer)
    }
  }, [showToast])

  return (
    <div className={styles.windowBar}>
      <div className={styles.dots}>
        <button className={styles.dot} onClick={() => setShowToast(true)} type="button" aria-label="Close" />
        <button className={styles.dot} onClick={() => setShowToast(true)} type="button" aria-label="Minimize" />
        <button className={styles.dot} onClick={() => setShowToast(true)} type="button" aria-label="Maximize" />
      </div>

      {showToast && (
        <div className={styles.toast}>
          these buttons don't do anything, just install the package and stop clicking
        </div>
      )}
    </div>
  )
}
