'use client';
import Image from 'next/image';
import SearchIcon from '@/app/components/svgs/SearchIcon.svg';
import SearchInput from '@/app/components/form/SearchInput';

import OfficeCard from '@/app/components/OfficeCard';
import { useOfficeStore } from '@/store/offices.store';
import { useEffect } from 'react';
import Input from '@/app/components/form/Input';

interface IViewOffice {
  id: string;
}

export default function Office({ id }: IViewOffice) {
  // TODO to fetch from DB?
  const { findById, office } = useOfficeStore();

  useEffect(() => {
    findById(Number(id));
  }, [id]);

  return (
    <div>
      <div className="flex  gap-7 w-full">
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
      </div>
    </div>
  );
}
