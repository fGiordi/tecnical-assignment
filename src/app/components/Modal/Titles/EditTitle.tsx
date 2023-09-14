'use client';
import Image from 'next/image';
import CrossBtn from '@/app/components/SVGS/CrossBtn.svg';
import { useHelpersStore } from '@/store/helpers.store';
import TitleIcon from './TitleIcon';

interface EditTitle {
  title: string;
  onClose: () => void;
}

export default function EditTitle({ title, onClose }: EditTitle) {
  const { activeStepper, decreaseStepper } = useHelpersStore();

  const onFirstStep = activeStepper == 0;

  const goToHome = () => {
    if (onFirstStep) {
      onClose();
    } else {
      decreaseStepper();
    }
  };

  return (
    <section className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <TitleIcon title={title} goToBack={goToHome} />
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
