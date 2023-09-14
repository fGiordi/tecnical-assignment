'use client';

import { useState } from 'react';
import ActionTitle from '@/app/components/ActionTitle';
import Input from '@/app/components/Form/Input';
import OfficeColor from '@/app/components/Office/OfficeColor';
import { OfficeColors } from '@/utils/officeColors';
import ActionBtn from '@/app/components/Buttons/ActionBtn';
import Modal from '@/app/components/Modal';
import DeleteOfficeBtns from '@/app/components/Buttons/DeleteOfficeBtns';
import { useOfficeStore } from '@/store/offices.store';

export default function EditOffice({ params }: { params: { id: string } }) {
  const { findById, office, offices, searchStaffMembers, deleteStaffMember } =
    useOfficeStore();

  const currentOffice = offices.find(
    (office) => office.id === Number(params.id)
  );

  console.log('currentOffice', currentOffice);
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

  const [officeName, setOfficeName] = useState(currentOffice?.officeName);
  const [physicalAddress, setPhysicalAddress] = useState(
    currentOffice?.physicalAddress
  );
  const [email, setEmail] = useState(currentOffice?.email);
  const [phoneNumber, setPhoneNumber] = useState(currentOffice?.phoneNumber);
  const [maximumCapacity, setMaximumCapacity] = useState(
    currentOffice?.maximumCapacity
  );

  return (
    <div className="flex flex-col px-4">
      <ActionTitle title="Edit Office" />
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col py-4 gap-6">
          <Input
            type="text"
            placeholder="Office Name"
            value={officeName}
            onChange={(newValue) => setOfficeName(newValue)}
            required
          />

          <Input
            type="text"
            placeholder="Physical Address"
            value={physicalAddress}
            onChange={(newValue) => setPhysicalAddress(newValue)}
            required
          />
          <Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(newValue) => setEmail(newValue)}
            required
          />
          <Input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(newValue) => setPhoneNumber(newValue)}
            required
          />
          <Input
            type="number"
            placeholder="Maximum Capacity"
            value={maximumCapacity}
            onChange={(newValue) => setMaximumCapacity(newValue)}
            required
          />
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
    </div>
  );
}
