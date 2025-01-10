import Image from 'next/image'
import Names from '@/components/Names';

export const getServerSideProps = (async () => {
  return { props: {firstName: 'first', lastName: 'last'} };
});

export default function Home() {
  return (
    <main>
      <Names />
    </main>
  )
}
