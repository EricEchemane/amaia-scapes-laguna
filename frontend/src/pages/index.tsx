import Header from '@/components/Header';
import PropertyCard, { Property } from '@/components/PropertyCard';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

const data: Property = {
  type: 'amaia laguna',
  model: 'amaia lands',
  location: 'laguna',
  area: '50sqm',
  price: '2.2 M',
  availability: 'Ready for occupancy',
};

const mockData: Property[] = [data, data, data, data, data];

export default function Home() {
  return (
    <main className={montserrat.className}>
      <Header />

      <section className='bg-primary p-7'>
        <div
          aria-label='main container'
          className='m-auto max-w-6xl lg:p-7 grid gap-10'
        >
          {mockData.map((property) => (
            <PropertyCard key={property.model} {...property} />
          ))}
        </div>
      </section>
    </main>
  );
}
