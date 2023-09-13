'use client';

import { useState } from 'react';
import ActionTitle from '@/app/components/ActionTitle';
import Input from '@/app/components/form/Input';
import OfficeColor from '@/app/components/OfficeColor';
import { OfficeColors } from '@/utils/officeColors';
import ActionBtn from '@/app/components/form/ActionBtn';

export default function NewOffice() {
  // TODO to add form state libray and state mangement and DB connection
  const [preselectedColor, setPreSelectedColor] = useState<string | null>(null);
  const [officeName, setOfficeName] = useState('');
  const [physicalAddress, setPhysicalAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const submitOffice = () => {
    // TODO to submit new office form
  };

  // TODO to setup the form schema and resolvers

  return (
    <div className="flex flex-col px-4">
      <ActionTitle title="New Office" />
      <form>
        <div className="flex flex-col py-4 gap-6">
          <Input
            type="text"
            placeholder="Office Name"
            value={officeName}
            onChange={(newValue) => setOfficeName(newValue)}
          />

          <Input
            type="text"
            placeholder="Physical Address"
            value={physicalAddress}
            onChange={(newValue) => setPhysicalAddress(newValue)}
          />
          <Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(newValue) => setEmail(newValue)}
          />
          <Input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(newValue) => setPhoneNumber(newValue)}
          />
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

        <div className="flex items-center justify-center mb-[78px]">
          <ActionBtn name="Add Office" action={submitOffice} fill={true} />
        </div>
      </form>
    </div>
  );
}
