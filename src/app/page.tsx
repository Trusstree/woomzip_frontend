import HorizontalScroll from '@/components/HorizontalScroll'
import Image from 'next/image'

export default function Home() {
  return (
    <main className={`container m-5 vh-75 d-flex justify-content-center flex-column align-items-center`}>
      <div className={`m-5`}>
        <Image
          className={`styles.logo`}
          src="/logo.png"
          alt="Truss Logo"
          width={180}
          height={50}
          priority
        />
      </div>

      <HorizontalScroll/>
    </main>
  )
}
