'use client';

import Image from 'next/image';
import Fab from '@/app/components/SVGS/FAB.svg';
import { useRouter } from 'next/navigation';

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
    <div className="\">
      <button onClick={goToPage}>
        <Image src={Fab.src} width={50} height={50} alt="Action Page" />
      </button>
    </div>
  );
}
