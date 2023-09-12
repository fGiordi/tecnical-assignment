'use client';

import { useState } from 'react';
import ActionTitle from '@/app/components/ActionTitle';
import Input from '@/app/components/Form/Input';
import OfficeColor from '@/app/components/OfficeColor';
import { officeColors } from '@/utils/officeColors';
import EntityActionBtn from '@/app/components/Form/EntityActionBtn';

export default function NewOffice() {
  // TODO to add form state libray and state mangement and DB connection
  const [preselectedColor, setPreSelectedColor] = useState<string | null>(null);

  const submitOffice = () => {
    // TODO to submit new office form
  };

  return (
    <div className="flex flex-col px-4">
      <ActionTitle title="New Office" />
      <form>
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

        <div className="grid grid-cols-6 gap-9  mb-9">
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

        <div className="flex items-center justify-center ">
          <EntityActionBtn
            name="Add Office"
            action={submitOffice}
            fill={true}
          />
        </div>
      </form>
    </div>
  );
}
