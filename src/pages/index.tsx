import Image from 'next/image'
import { Counter } from '@/components/Counter';

export const getServerSideProps = (async () => {
  return { props: {count: Number(new Date())} };
});

export default function Home() {
  return (
    <main>
      <Counter />
    </main>
  )
}
