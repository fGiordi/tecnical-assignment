'use client';

import { useState } from 'react';
import ActionTitle from '@/app/components/ActionTitle';
import Input from '@/app/components/form/Input';
import OfficeColor from '@/app/components/OfficeColor';
import { OfficeColors } from '@/utils/officeColors';
import ActionBtn from '@/app/components/form/ActionBtn';
import Modal from '@/app/components/modal';
import DeleteOfficeBtns from '@/app/components/form/DeleteOfficeBtns';
import StaffStepper from '@/app/components/form/StaffStepper';

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

  return (
    <div className="flex flex-col px-4">
      <ActionTitle title="Edit Office" />
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
          {OfficeColors.map((color, index) => {
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
          <ActionBtn name="Update Office" action={EditOffice} fill={true} />
          <ActionBtn
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
      {/* <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="Edit Staff Member"
        type="edit"
        body={<StaffStepper onClose={closeModal} />}
      /> */}
    </div>
  );
}
