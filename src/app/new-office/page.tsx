'use client';

import { useState } from 'react';
import ActionTitle from '@/app/components/ActionTitle';
import Input from '@/app/components/Form/Input';
import OfficeColor from '@/app/components/OfficeColor';
import { OfficeColors } from '@/utils/officeColors';
import ActionBtn from '@/app/components/Form/ActionBtn';
import { useOfficeStore } from '@/store/offices.store';
import { useRouter } from 'next/navigation';

export default function NewOffice() {
  const router = useRouter();

  // TODO to add form state libray and state mangement and DB connection
  const [preselectedColor, setPreSelectedColor] = useState<string | null>(null);
  const [officeName, setOfficeName] = useState('');
  const [physicalAddress, setPhysicalAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [maximumCapacity, setMaximumCapacity] = useState('');

  // store info
  const { addOffice, offices } = useOfficeStore();

  const goHome = () => {
    router.push(`/`);
  };

  const submitOffice = () => {
    // TODO: to do form validation
    // TODO to submit new office form
    if (preselectedColor)
      addOffice({
        officeName: officeName,
        officeColor: preselectedColor,
        physicalAddress,
        email,
        phoneNumber,
        maximumCapacity: Number(maximumCapacity),
        staff: []
      });
    goHome();

    if (preselectedColor == null) {
      alert('Please select Office Color');
    }
    // TODO to add toast?
  };

  // TODO to setup the form schema and resolvers

  return (
    <div className="flex flex-col px-4">
      <ActionTitle title="New Office" />
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

        <div className="flex items-center justify-center mb-[78px]">
          <ActionBtn name="Add Office" action={submitOffice} fill={true} />
        </div>
      </form>
    </div>
  );
}
