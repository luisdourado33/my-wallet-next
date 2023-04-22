import useAuth from '@/core/hooks/useAuth'
import React, { useEffect } from 'react'

import HomeTemplate from '@/components/templates/Home';

export default function Home() {
  const authState = useAuth();

  useEffect(() => {
    console.log(authState.isAuthenticated)
  }, []);

  return (
    <div className="h-screen">
      <HomeTemplate />
    </div>
  )
}
