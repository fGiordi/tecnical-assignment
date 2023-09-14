import Image from 'next/image';
import MoreIndicatorIcon from '@/app/components/SVGS/MoreIcon.svg';
import { StaffMember } from '@/types/office';

interface IStaffMember {
  avatar: string;
  firstName: string;
  lastName: string;
  editStaffAction: (staffMember: StaffMember | undefined) => void;
  staffMember?: StaffMember;
}

export default function OfficeStaffMember({
  avatar,
  firstName,
  lastName,
  staffMember,
  editStaffAction
}: IStaffMember) {
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
      <button onClick={() => editStaffAction(staffMember)}>
        <Image
          src={MoreIndicatorIcon}
          alt="More Indicator"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}
