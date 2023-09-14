'use client';
import { useState } from 'react';
import SearchIcon from '@/app/components/SVGS/SearchIcon.svg';
import SearchInput from '@/app/components/Form/SearchInput';
import OfficeCard from '@/app/components/Office/OfficeCard';
import Modal from '@/app/components/Modal';
import StaffStepper from '@/app/components/Form/StaffStepper';
import OfficeStaffMember from '@/app/components/Office/OfficeStaffMember';
import { useOfficeStore } from '@/store/offices.store';

interface IViewOffice {
  id: string;
}

export default function Office({ id }: IViewOffice) {
  // TODO to fetch from DB?
  const { findById, office, offices } = useOfficeStore();

  const updatedOffice = offices.find((office) => office.id === Number(id));

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const editStaffAction = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <div className="flex gap-7 w-full">
        {office && <OfficeCard office={office} id={office.id} view="office" />}
      </div>
      <div className="w-full flex justify-end items-center relative">
        <SearchInput placeholder="Search" type="text" icon={SearchIcon} />
      </div>
      <div className="flex flex-col gap-[14px] mt-6">
        <div className="flex justify-between">
          <h2 className="font-semibold text-[24px] leading-[30px] tracking-[-0.02rem] ">
            Staff Members in Office
          </h2>
          <h3 className="font-normal text-[18px] leading-[24px] text-bold-black">
            {office?.maximumCapacity || 0}
          </h3>
        </div>
        {updatedOffice?.staff.map((staff) => {
          return (
            <OfficeStaffMember
              key={staff.id}
              avatar={staff.avatar}
              firstName={staff.firstName}
              lastName={staff.lastName}
              officeId={String(id)}
              editStaffAction={editStaffAction}
            />
          );
        })}
      </div>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="Edit Staff Member"
        type="edit"
        body={<StaffStepper onClose={closeModal} officeId={id} />}
      />
    </div>
  );
}
