import Image from 'next/image';
import Banner from './component/Banner';

export default function Home() {
  return (
    <div className="flex flex-row items-center gap-10 py-20">
      <div className="flex flex-col w-4/5 h-full gap-5">
        <Banner />
      </div>
      <div className="flex flex-col w-1/5 gap-10 ">
        <p>Side</p>
      </div>
    </div>
  );
}
