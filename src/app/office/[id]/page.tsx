'use client';
import { useState } from 'react';
import ActionTitle from '@/app/components/ActionTitle';
import ViewOffice from '@/pageClientViews/ViewOffice';
import ActionFabBtn from '@/app/components/Buttons/ActionFabBtn';
import Modal from '@/app/components/Modal';
import StaffStepper from '@/app/components/Form/StaffStepper';
import { useHelpersStore } from '@/store/helpers.store';

export default function Office({ params }: { params: { id: string } }) {
  const [isOpen, setIsOpen] = useState(false);

  const { activeStepper, increaseStepper, decreaseStepper, resetStepper } =
    useHelpersStore();

  const closeModal = () => {
    setIsOpen(false);
    resetStepper();
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col px-4 justify-between h-[90vh]">
      <div>
        <ActionTitle title="Office" />
        <ViewOffice id={params.id} />
      </div>

      <div className="flex items-end justify-end">
        <ActionFabBtn action={openModal} />
      </div>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="New Staff Member"
        type="edit"
        body={
          <StaffStepper onClose={closeModal} officeId={params.id} type="new" />
        }
      />
    </div>
  );
}
