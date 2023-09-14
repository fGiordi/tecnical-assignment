'use client';
import { useState } from 'react';
import ActionTitle from '@/app/components/ActionTitle';
import ViewOffice from '@/pageClientViews/ViewOffice';
import ActionFabBtn from '@/app/components/ActionFabBtn';
import Modal from '@/app/components/Modals';
import StaffStepper from '@/app/components/Form/StaffStepper';

export default function Office({ params }: { params: { id: string } }) {
  const [isOpen, setIsOpen] = useState(false);

  // TODO to add form state libray and state mangement and DB connection

  // TODO to pull data from DB here

  const EditOffice = () => {
    // TODO to submit new office
  };

  const deleteOffice = () => {
    // TODO: to delete office
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const addStaffMember = () => {};

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
        body={<StaffStepper onClose={closeModal} officeId={params.id} />}
      />
    </div>
  );
}
