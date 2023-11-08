import Image from 'next/image';
import Amaia from '../../public/amaia.jpg';

export default function Header() {
  return (
    <header className='h-[35dvh] overflow-hidden relative'>
      <div className='m-auto max-w-6xl h-full px-7 flex flex-col justify-center'>
        <h1 className='text-primary text-2xl sm:text-3xl md:text-5xl mb-1 md:mb-4'>
          Amaia Scapes Laguna
        </h1>
        <h2 className='uppercase m-0 text-secondary text-xl sm:text-2xl md:text-4xl tracking-widest'>
          property list
        </h2>
      </div>
      <div className='absolute top-0  md:-top-40 left-0 -z-10 w-full bg-neutral-50'>
        <Image
          src={Amaia}
          alt='amaia scapes laguna'
          className='m-0 w-full object-cover scale-x-[-1] opacity-50'
        />
      </div>
    </header>
  );
}
