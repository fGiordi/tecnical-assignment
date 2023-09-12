'use client';

import Image from 'next/image';
import Fab from '@/app/components/SVGS/FAB.svg';
import { useRouter } from 'next/navigation';

// create enum types

type Pages = 'new-office';

interface IActionBtn {
  page: Pages;
}

export default function ActionBtn({ page }: IActionBtn) {
  const router = useRouter();

  const goToPage = () => {
    router.push(`/${page}`);
  };

  return (
    <div className="flex flex-col items-end">
      <button onClick={goToPage}>
        <Image src={Fab.src} width={50} height={50} alt="Action Page" />
      </button>
    </div>
  );
}
