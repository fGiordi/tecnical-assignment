'use client';
import Image from 'next/image';
import CrossBtn from '@/app/components/SVGS/CrossBtn.svg';
import BackBtn from '@/app/components/SVGS/BackBtn.svg';
import { Dialog } from '@headlessui/react';
import { useHelpersStore } from '@/store/helpers.store';

interface EditTitle {
  title: string;
  onClose: () => void;
}

export default function EditTitle({ title, onClose }: EditTitle) {
  const { activeStepper } = useHelpersStore();

  const onFirstStep = activeStepper == 0;

  const goToHome = () => {};

  return (
    <section className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        {/* TODO: make this into component? */}
        {!onFirstStep && (
          <button onClick={goToHome}>
            <Image src={BackBtn.src} width={30} height={30} alt="Close" />
          </button>
        )}
        <Dialog.Title
          as="h3"
          className="font-extrabold leading-[29.05px] tracking-[-0.02rem] text-left text-[24px] text-bold-black"
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
        className="cursor-pointer"
      />
    </section>
  );
}
