import Image from 'next/image';
import CrossBtn from '@/app/components/SVGS/CrossBtn.svg';
import BackBtn from '@/app/components/SVGS/BackBtn.svg';
import { Dialog } from '@headlessui/react';

interface EditTitle {
  title: string;
  onClose: () => void;
}

export default function EditTitle({ title, onClose }: EditTitle) {
  const goToHome = () => {};

  return (
    <section className="flex items-center justify-between">
      <div className="flex">
        {/* TODO: make this into component? */}
        <button onClick={goToHome}>
          <Image src={BackBtn.src} width={30} height={30} alt="Close" />
        </button>
        <Dialog.Title
          as="h2"
          className="font-bold leading-[24.2px] tracking-[-0.02rem] text-center text-[1.25rem] text-bold-black"
        >
          {title}
        </Dialog.Title>
      </div>
      <Image
        src={CrossBtn.src}
        width={24}
        height={24}
        alt="Cross Icon"
        onClick={onClose}
      />
    </section>
  );
}
