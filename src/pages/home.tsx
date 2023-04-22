import useAuth from '@/core/hooks/useAuth'
import React, { useEffect } from 'react'

export default function Home() {
  const authState = useAuth();

  useEffect(() => {
    console.log(authState.isAuthenticated)
  }, []);

  return (
    <div>
      <h1>Testing login mock.</h1>
      <button onClick={authState.signInMock}>Click here to generate mock user</button>
      <button onClick={authState.signOut}>Click here to sign out</button>
      <div>
        <h1>Result:</h1>
        <p>{JSON.stringify(authState?.user)}</p>
      </div>
    </div>
  )
}
