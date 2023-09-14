import Image from 'next/image';
import BackBtn from '@/app/components/SVGS/BackBtn.svg';
import { Dialog } from '@headlessui/react';

interface TitleIcon {
  title: string;
  onClose?: () => void;
  activeStepper?: number;
  goToBack: () => void;
}

export default function TitleIcon({
  title,
  onClose,
  activeStepper,
  goToBack
}: TitleIcon) {
  const onFirstStep = activeStepper == 0;

  const goToHome = () => {
    goToBack();
  };

  return (
    <>
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
    </>
  );
}
