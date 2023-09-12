import React from 'react';
import ActionTitle from '@/app/components/ActionTitle';
import Input from '@/app/components/Form/Input';

export default function NewOffice() {
  // TODO to add form state libray and state mangement and DB connection
  return (
    <div className="flex flex-col">
      <ActionTitle title="New Office" />
      <form>
        <div className="flex flex-col py-4 gap-6 px-10">
          <Input type="text" placeholder="New Office" />
          <Input type="text" placeholder="Physical Address" />
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Phone Number" />
          <Input type="text" placeholder="Maximum Capacity" />
        </div>
      </form>
    </div>
  );
}
