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
    <div className="flex justify-between items-center ">
      <button onClick={goToHome}>
        <Image src={BackBtn.src} width={20} height={20} alt="Back btn" />
      </button>
      <h2 className="font-medium leading-[22px] tracking-[-2%] text-center">
        {title}
      </h2>
      <div />
    </div>
  );
}
