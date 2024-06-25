/**
 * To specifically handle errors in root layout.js, 
 * use a variation of error.js called app/global-error.tsx
 * located in the root app directory.
 */

'use client'
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}