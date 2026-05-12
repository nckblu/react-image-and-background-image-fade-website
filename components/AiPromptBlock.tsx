'use client'

import { useCallback, useState } from 'react'
import { Check, Copy } from 'lucide-react'
import styles from './AiPromptBlock.module.css'

export function AiPromptBlock({ children }: { children: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(children).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    })
  }, [children])

  return (
    <div className={styles.wrap}>
      <div className={styles.bar}>
        <span className={styles.barLabel}>AI rules · copy into cursor / copilot / claude</span>
        <button
          className={styles.copyButton}
          onClick={handleCopy}
          type="button"
          aria-label="Copy AI rules to clipboard"
        >
          {copied ? (
            <><Check size={13} strokeWidth={3} /> Copied</>
          ) : (
            <><Copy size={13} strokeWidth={2.5} /> Copy</>
          )}
        </button>
      </div>
      <pre className={styles.pre}>{children}</pre>
    </div>
  )
}
