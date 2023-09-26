'use client';
import { useState } from 'react';
import Input from '@/app/components/Form/Input';
import { AVATARS } from '@/utils/avatars';
import ActionBtn from '@/app/components/Buttons/ActionBtn';
import Avatar from '@/app/components/Avatar';
import { useHelpersStore } from '@/store/helpers.store';
import { useOfficeStore } from '@/store/offices.store';
import { StaffMember } from '@/types/office';

enum Steps {
  Names,
  Avatar
}

interface IStaffStepper {
  onClose: () => void;
  officeId: string;
  staffId?: number | null;
  staffMember?: StaffMember;
  type: 'new' | 'edit';
}

export default function StaffStepper({
  onClose,
  officeId,
  staffId,
  staffMember,
  type
}: IStaffStepper) {
  const { activeStepper, increaseStepper, decreaseStepper, resetStepper } =
    useHelpersStore();

  const { addStaffMember, office, updateStaffMember, offices } =
    useOfficeStore();

  const currentOffice = offices.find(
    (office) => String(office.id) === officeId
  );

  const [firstName, setFirstName] = useState(staffMember?.firstName || '');
  const [lastName, setLastName] = useState(staffMember?.lastName || '');

  const [preselectedAvatar, setPreSelectedAvatar] = useState<
    string | undefined | null
  >(staffMember?.avatar);

  const nextStep = () => {
    increaseStepper();
  };

  const prevStep = () => {
    decreaseStepper();
  };

  const updateStaff = () => {
    if (preselectedAvatar && staffId)
      updateStaffMember(String(officeId), String(staffId), {
        id: staffId,
        firstName,
        lastName,
        avatar: preselectedAvatar
      });
    resetStepper();
    onClose();
  };

  const addStaff = () => {
    if (currentOffice && preselectedAvatar)
      addStaffMember(String(officeId), {
        firstName,
        lastName,
        avatar: preselectedAvatar,
      });
    resetStepper();

    onClose();
  };

  const firstStep = activeStepper == Steps.Names;
  const secondStep = activeStepper == Steps.Avatar;

  return (
    <div className="flex flex-col items-center gap-[12px] justify-center  mt-7">
      <form className="flex flex-col gap-3  w-full">
        {firstStep && (
          <>
            <Input
              type="text"
              placeholder="Jacques"
              value={firstName}
              onChange={(newValue) => setFirstName(newValue)}
            />
            <Input
              type="text"
              placeholder="Jordan"
              value={lastName}
              onChange={(newValue) => setLastName(newValue)}
            />
          </>
        )}
        {secondStep && (
          <div className="flex flex-col">
            <div className="flex flex-col gap-6">
              <h2 className="font-semibold leading-[19.05px] text-[24px] text-bold-black">
                Avatar
              </h2>
              <div className="grid grid-cols-4 gap-6 ">
                {AVATARS.map((avatar, index) => {
                  return (
                    <Avatar
                      key={index}
                      avatar={avatar}
                      setPreselectedAvatar={setPreSelectedAvatar}
                      preselectedAvatar={preselectedAvatar}
                      index={index + 1}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </form>
      <ul className="flex gap-2 mt-7">
        <li
          onClick={prevStep}
          className={`w-2 h-2  rounded-full ${
            firstStep
              ? 'bg-office-blue-normal'
              : 'bg-white border-2 border-office-blue-normal'
          }`}
        ></li>
        <li
          className={`w-2 h-2  rounded-full ${
            secondStep
              ? 'bg-office-blue-normal'
              : ' bg-white border-2 border-office-blue-normal '
          }`}
        ></li>
      </ul>

      <div className="mt-7">
        {firstStep && (
          <ActionBtn
            name="Next"
            action={nextStep}
            fill={true}
            disabled={firstStep && (firstName == '' || lastName == '')}
          />
        )}
        {secondStep && (
          <ActionBtn
            name={type == 'new' ? 'Add New Member' : 'Update Staff Member'}
            action={type == 'new' ? addStaff : updateStaff}
            fill={true}
          />
        )}
      </div>
    </div>
  );
}
