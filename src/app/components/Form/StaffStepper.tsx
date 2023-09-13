import { useState } from 'react';
import Input from '@/app/components/form/Input';
import { AVATARS } from '@/utils/avatars';
import ActionBtn from '@/app/components/form/ActionBtn';
import Avatar from '@/app/components/Avatar';

enum Steps {
  Names,
  Avatar
}

export default function StaffStepper() {
  const [step, setSteps] = useState(Steps.Names);

  const [preselectedAvatar, setPreSelectedAvatar] = useState<string | null>(
    null
  );

  // TODO: store state of buttons with actions

  // TODO: fetch actions from store -> db

  // TODO: have active step state toggle

  // next step function
  const nextStep = () => {
    setSteps(step + 1);
  };

  // prev step function
  const prevStep = () => {
    setSteps(step - 1);
  };

  // check if we are on final step
  const isFinalStep = () => {
    return step === Steps.Avatar;
  };

  const StepView = () => {
    switch (step) {
      case 0:
        return (
          <>
            <Input type="text" placeholder="Jacques" />
            <Input type="text" placeholder="Jordan" />
          </>
        );
      case 1:
        return;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center gap-[12px] justify-center  mt-7">
      <form className="flex flex-col gap-3  w-full">
        {step === Steps.Names && (
          <>
            <Input type="text" placeholder="Jacques" />
            <Input type="text" placeholder="Jordan" />
          </>
        )}
        {step === Steps.Avatar && (
          <div className="flex flex-col">
            <div className="flex flex-col gap-6">
              <h2 className="font-semibold leading-[19.05px] text-[24px] text-bold-black">
                Avatar
              </h2>
              <div className="grid grid-cols-4 gap-9 mb-9">
                {AVATARS.map((avatar, index) => {
                  return (
                    <Avatar
                      key={index}
                      avatar={avatar}
                      setPreselectedAvatar={setPreSelectedAvatar}
                      preselectedAvatar={preselectedAvatar}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </form>
      <ul className="flex gap-2 mt-7">
        <li className="w-2 h-2 bg-office-blue-normal rounded-full"></li>
        <li className="w-2 h-2 white border-2 border-office-blue-normal rounded-full"></li>
      </ul>

      <div className="mt-7">
        {step === 0 && <ActionBtn name="Next" action={nextStep} fill={true} />}
        {step === 1 && (
          <ActionBtn name="Update Staff Member" action={nextStep} fill={true} />
        )}
      </div>
    </div>
  );
}
