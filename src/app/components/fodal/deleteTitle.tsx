import Image from 'next/image';
import BackBtn from '@/app/components/svgs/BackBtn.svg';
import { Dialog } from '@headlessui/react';

interface DeleteTitle {
  title: string;
  onClose: () => void;
}

export default function DeleteTitle({ title, onClose }: DeleteTitle) {
  return (
    <section className="flex items-start justify-start">
      {/* TODO: make this into component? */}
      <button onClick={onClose}>
        <Image src={BackBtn.src} width={30} height={30} alt="Back Button" />
      </button>
      <Dialog.Title
        as="h2"
        className="font-bold leading-[24.2px] tracking-[-0.02rem] text-center text-[1.25rem] text-bold-black"
      >
        {title}
      </Dialog.Title>
    </section>
  );
}
