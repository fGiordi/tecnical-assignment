'use client';

import Image from 'next/image';
import Fab from '@/app/components/SVGS/FAB.svg';
import { useRouter } from 'next/navigation';

type Pages = 'new-office';

interface IActionBtn {
  page?: Pages;
  action?: () => void;
}

export default function ActionFabBtn({ page, action }: IActionBtn) {
  const router = useRouter();

  const goToPage = () => {
    if (action) {
      action();
    } else {
      router.push(`/${page}`);
    }
  };

  return (
    <div className="flex items-end justify-end px-8 md:px-2 inset-0 fixed md:relative">
      <button onClick={goToPage}>
        <Image src={Fab.src} width={50} height={50} alt="Action Page" />
      </button>
    </div>
  );
}
