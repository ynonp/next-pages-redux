import Image from 'next/image'
import Names from '@/components/Names';

export const getServerSideProps = (async () => {
  return { props: {firstName: 'first', lastName: 'last'} };
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <Names />
    </main>
  )
}
