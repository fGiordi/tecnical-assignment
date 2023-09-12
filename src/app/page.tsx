import Image from 'next/image';
import Fab from '@/components/SVGS/FAB.svg';
export default function Home() {
  return (
    <main className="flex flex-col justify-between h-[98vh] w-full  py-10">
      {/* Display all Offices here on landing page */}
      <div className="flex flex-col h-full">
        <h2 className="text-center font-semibold text-[28px] leading-[34px] tracking-[-2px]">
          There are currently no offices added to the application
        </h2>
        {/* display all the office spaces here */}
      </div>
      <div className="flex flex-col items-end ">
        <button>
          <Image src={Fab.src} width={50} height={50} alt="Action Icon" />
        </button>
      </div>
    </main>
  );
}
