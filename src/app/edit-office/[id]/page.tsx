'use client';

import { useState } from 'react';
import ActionTitle from '@/app/components/ActionTitle';
import Input from '@/app/components/Form/Input';
import OfficeColor from '@/app/components/OfficeColor';
import { officeColors } from '@/utils/officeColors';
import EntityActionBtn from '@/app/components/Form/EntityActionBtn';
import Modal from '@/app/components/Modal';
import DeleteOfficeBtns from '@/app/components/Form/DeleteOfficeBtns';

export default function EditOffice({ params }: { params: { id: string } }) {
  // TODO to add form state libray and state mangement and DB connection
  const [preselectedColor, setPreSelectedColor] = useState<string | null>(null);

  const [isOpen, setIsOpen] = useState(false);

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

  console.log('isOpen', isOpen);

  return (
    <div className="flex flex-col px-4">
      <ActionTitle title="New Office" />
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col py-4 gap-6">
          <Input type="text" placeholder="New Office" />
          <Input type="text" placeholder="Physical Address" />
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Phone Number" />
          <Input type="text" placeholder="Maximum Capacity" />
        </div>
        <h2 className="py-5 text-left font-semibold text-[28px] leading-[29px] tracking-[-2px] mb-6">
          Office Color
        </h2>

        <div className="grid grid-cols-6 gap-9 mb-9">
          {officeColors.map((color, index) => {
            return (
              <OfficeColor
                key={index}
                color={color.name}
                setPreselectedColor={setPreSelectedColor}
                preselectedColor={preselectedColor}
              />
            );
          })}
        </div>

        <div className="flex flex-col gap-7 items-center justify-center mb-[78px]">
          <EntityActionBtn
            name="Update Office"
            action={EditOffice}
            fill={true}
          />

          <EntityActionBtn
            name="Delete Office"
            action={() => setIsOpen(true)}
            fill={false}
          />
        </div>
      </form>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="Are you sure you want to Delete Office?"
        type="delete"
        body={<DeleteOfficeBtns onClose={closeModal} />}
      />
    </div>
  );
}
