'use client'

import { useCallback, useState } from 'react'
import { Check, Copy } from 'lucide-react'
import styles from './CodeBlock.module.css'

export function CodeBlock({
  children,
  label = 'tsx'
}: {
  children: string
  label?: string
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(children).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [children])

  return (
    <div className={styles.wrap}>
      <div className={styles.bar}>
        <span>{label}</span>
        <button
          className={styles.copyButton}
          onClick={handleCopy}
          type="button"
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check size={13} strokeWidth={3} /> Copied
            </>
          ) : (
            <>
              <Copy size={13} strokeWidth={2.5} /> Copy
            </>
          )}
        </button>
      </div>
      <pre className={styles.pre}>
        <code className={styles.code}>{children}</code>
      </pre>
    </div>
  )
}
