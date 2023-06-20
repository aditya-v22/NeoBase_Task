import { Header } from '@/components/Header';
import { SideNavbar } from '@/components/SideNavbar';

export default function Home() {
  return (
    <main className='bg-black h-screen text-white'>
      <div className='container mx-auto px-9 py-10'>
        <Header />

        <div className='pt-10'>
          <div className='flex gap-10'>
            <SideNavbar />
          </div>
        </div>
      </div>
    </main>
  );
}
