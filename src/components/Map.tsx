import Image from 'next/image'

export default function Map() {
  return (
    <div>
      <Image
        className={`col-6 styles.logo m-5`}
        src="/logo.png"
        alt="Truss Logo"
        width={400}
        height={400}
        priority
      />
    </div>
  );
}