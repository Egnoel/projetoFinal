import Image from 'next/image';

const Banner = () => {
  return (
    <div className="flex flex-col gap-4 h-60 ">
      <div className="flex items-center justify-between w-full px-10 bg-red-400 rounded-xl h-3/4">
        <div>
          <p className="text-xl font-semibold text-white">
            Encontre os produtos mais baratos
          </p>
          <p className="text-xl font-semibold text-white">A sua disposição</p>
          <button className="w-24 h-8 mt-2 text-red-400 bg-white rounded-xl">
            Join Now
          </button>
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
