'use client';
import { useState } from 'react';

import ActionTitle from '@/app/components/ActionTitle';
import ViewOffice from '@/pageClientViews/ViewOffice';
import ActionFabBtn from '@/app/components/ActionFabBtn';
import ActionBtn from '@/app/components/form/ActionBtn';
import Modal from '@/app/components/modal';

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
      {/* Show All Staff here  */}
      {/* <OfficeCard key={index} office={office} id={office.id} />; */}

      <div className="flex items-end justify-end">
        <ActionFabBtn action={openModal} />
      </div>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="New Staff Member"
        type="edit"
        // body={<StaffStepper onClose={closeModal} />}
      />
    </div>
  );
}
