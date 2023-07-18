"use client"

import BasicCard from '@/components/BasicCard'
import BossCard from '@/components/BossCard'
import InfoCard from '@/components/InfoCard'
import ReviewCard from '@/components/ReviewCard'
import RouteButton from '@/components/RouteButton'
import Image from 'next/image'

export default function Home() {
  return (
    <main className={`container d-flex justify-content-center flex-column align-items-center`}>
      <h1 className={"fw-bold my-5"}>집들이하기</h1>
      <div className='d-flex justify-content-center'>
        <Image
          className={`col-6 styles.logo m-5`}
          src="/logo.png"
          alt="Truss Logo"
          width={400}
          height={400}
          priority
        />

        <Image
          className={`col-6 styles.logo m-5`}
          src="/logo.png"
          alt="Truss Logo"
          width={400}
          height={400}
          priority
        />
      </div>
      

      <div className={`py-4 align-self-end`}>
        <RouteButton url={'/next4'}>집들이 요청하기</RouteButton>
      </div>
      
    </main>
  )
}
