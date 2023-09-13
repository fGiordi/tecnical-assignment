'use client';

import { useRouter } from 'next/navigation';
import BackBtn from '@/app/components/SVGS/BackBtn.svg';
import Image from 'next/image';

type Title = 'New Office';

interface IActionTitle {
  action?: () => void;
  title: Title;
}

export default function ActionTitle({ action, title }: IActionTitle) {
  const router = useRouter();

  const goToHome = () => {
    router.push(`/`);
    // Todo to go back?
  };

  return (
    <div className="flex justify-between items-center">
      <button onClick={goToHome}>
        <Image src={BackBtn.src} width={20} height={20} alt="Back Button" />
      </button>
      <h2 className="font-semibold leading-[21.78px] tracking-[-0.02rem] text-center text-[1.25rem] text-bold-black">
        {title}
      </h2>
      <div />
    </div>
  );
}
