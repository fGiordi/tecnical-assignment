'use client';
import Image from 'next/image';
import SearchIcon from '@/app/components/svgs/SearchIcon.svg';
import SearchInput from '@/app/components/Form/SearchInput';

import OfficeCard from '@/app/components/OfficeCard';
import { useOfficeStore } from '@/store/offices.store';
import { useEffect, useState } from 'react';
import Input from '@/app/components/Form/Input';
import MoreIndicatorIcon from '@/app/components/svgs/MoreIcon.svg';
import Modal from '@/app/components/Modals';
import { StaffMember } from '@/types/office';

import StaffStepper from '@/app/components/Form/StaffStepper';
import Avatar from '@/app/components/Avatar';

interface IViewOffice {
  id: string;
}

interface IStaffMember {
  avatar: string;
  firstName: string;
  lastName: string;
  officeId: string;
}

const StaffMember = ({
  avatar,
  firstName,
  lastName,
  officeId
}: IStaffMember) => {
  return (
    <div className="flex items-center justify-between w-full mt-[13px]">
      <div className="flex gap-[30px] items-center">
        <Image
          src={avatar}
          width={52}
          height={52}
          alt={`Avatar ${firstName} ${lastName}}`}
          className="rounded-full"
        />
        <h2 className="leading-[24px] font-normal text-[16px] text-bold-black">
          {`${firstName} ${lastName}`}
        </h2>
      </div>
      <button>
        <Image
          src={MoreIndicatorIcon}
          alt="More Indicator"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};

export default function Office({ id }: IViewOffice) {
  // TODO to fetch from DB?
  const { findById, office, offices } = useOfficeStore();

  console.log('office in view', offices);
  console.log('office', office);

  const [staff, setStaff] = useState<StaffMember[] | null>([]);

  console.log('staff state', staff);

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    findById(Number(id));
  }, [id]);

  useEffect(() => {
    if (office) {
      setStaff(office.staff);
    }
  }, [JSON.stringify(office), JSON.stringify(offices)]);

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
        {office?.staff.map((staff) => {
          return (
            <StaffMember
              key={staff.id}
              avatar={staff.avatar}
              firstName={staff.firstName}
              lastName={staff.lastName}
              officeId={String(office.id)}
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
