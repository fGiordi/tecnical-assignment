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
import { useOfficeStore } from '@/store/offices.store';

export default function Office({ params }: { params: { id: string } }) {
  // TODO to add form state libray and state mangement and DB connection
  const [preselectedColor, setPreSelectedColor] = useState<string | null>(null);

  const { office, findById } = useOfficeStore();

  console.log('office', office);

  findById(Number(params.id));

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
      <ActionTitle title="Office" />
      {/* <OfficeCard key={index} office={office} id={office.id} />; */}
    </div>
  );
}
