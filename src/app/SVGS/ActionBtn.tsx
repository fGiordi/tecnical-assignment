import Image from 'next/image';
import Fab from '@/app/components/SVGS/FAB.svg';

export default function ActionBtn() {
  return (
    <div className="flex flex-col items-end">
      <button>
        <Image src={Fab.src} width={50} height={50} alt="Action Icon" />
      </button>
    </div>
  );
}
