import { AnalysisCard, AnalysisStatus } from '@/components/AnalysisCard';
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

            <div>
              <div className='pt-5 text-4xl'>Session History</div>

              <div className='flex gap-5 pt-8'>
                <AnalysisCard
                  count='10 H'
                  countPercentage='12.21'
                  status={AnalysisStatus.INCREMENT}
                  title='Active Sessions'
                />
                <AnalysisCard
                  count='100 H'
                  countPercentage='2.21'
                  status={AnalysisStatus.DECREMENT}
                  title='Total Sessions'
                />
                <AnalysisCard
                  count='10 H'
                  countPercentage='12.21'
                  status={AnalysisStatus.INCREMENT}
                  title='Highest Active Sessions'
                />
                <AnalysisCard
                  count='12H : 31M : 2S'
                  countPercentage='2.21'
                  status={AnalysisStatus.DECREMENT}
                  title='Longest Sessions'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
