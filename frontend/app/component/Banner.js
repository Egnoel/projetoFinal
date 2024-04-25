import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  const user = false;
  return (
    <div className="flex flex-col gap-4 h-60 ">
      <div className="flex items-center justify-between w-full px-10 bg-red-400 rounded-xl h-3/4">
        <div>
          <p className="text-xl font-semibold text-white">
            Encontre os produtos mais baratos
          </p>
          <p className="text-xl font-semibold text-white">A sua disposição</p>
          {!user ? (
            <Link href="/sign-up">
              <button className="w-24 h-8 mt-2 text-red-400 bg-white rounded-xl">
                Join Now
              </button>
            </Link>
          ) : (
            <Link href="/stores">
              <button className="w-32 mt-2 text-center text-red-400 bg-white h-11 rounded-xl">
                Explore Products
              </button>
            </Link>
          )}
        </div>
        <div>
          <Image
            src={'/Marketbasket.png'}
            alt="event"
            className="object-cover rounded-md"
            width={170}
            height={80}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
