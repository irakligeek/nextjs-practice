'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Error:",error);
  }, [error])
 
  return (
    <div>
      <h3>Something went wrong!</h3>
    </div>
  )
}