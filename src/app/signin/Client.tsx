"use client"

import { getProviders } from 'next-auth/react'
import SocialSigninButton from '@/components/auth/SocialSigninButton'

export default async function Client() {
  const providers = await getProviders();
  
  return (
    <div className={`d-flex flex-column align-items-center`}>
      <SocialSigninButton providers={providers}/>
    </div>
  )
}