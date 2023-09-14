import Link from 'next/link';
import { useState } from 'react';
import EditBtn from '@/app/components/SVGS/EditBtn.svg';
import PeopleIcon from '@/app/components/SVGS/PeopleIcon.svg';
import PeopleIconBlue from '@/app/components/SVGS/PeopleIconBlue.svg';
import ChevronDown from '@/app/components/SVGS/ChevronDownIcon.svg';
import ChevronUp from '@/app/components/SVGS/ChevronUpIcon.svg';
import PhoneIcon from '@/app/components/SVGS/PhoneIcon.svg';
import EmailIcon from '@/app/components/SVGS/EmailIcon.svg';
import LocationIcon from '@/app/components/SVGS/LocationIcon.svg';
import IconText from '@/app/components/IconText';
import Image from 'next/image';
import { Office } from '@/types/office';

interface IOfficeCard {
  office: Office;
  id: number;
  view: 'office' | 'all-offices';
}

export default function OfficeCard({ office, id, view }: IOfficeCard) {
  const goToOfficeView = () => {};

  const [moreInfo, setShowMoreInfo] = useState(false);

  // questions some px I did round eg, 11.6 in specno card heading I made it 12px?
  // same with 9.3 margin bottom of 5 staff members , making it 9

  const collapse = () => {
    setShowMoreInfo((preve) => !preve);
  };

  const toggledOffice = id === office.id;
  const isOnViewOffice = view === 'office';
  const isOnLandingPage = view === 'all-offices';

  return (
    <div
      className={`flex flex-col bg-white border-specno-light-blue rounded-[8px] ${
        isOnViewOffice ? 'mt-6 ' : isOnLandingPage ? 'max-w-[342px] ' : ''
      } w-full`}
    >
      <div className="flex items-start gap-[22px]">
        <div
          className="flex h-full w-[12px] bg-specno-blue-gradient "
          style={{
            borderRadius: '8px 0px 0px 8px'
          }}
        />
        <div className="flex flex-col w-full justify-start items-start py-[18px] pr-4 ">
          <Link href={`/office/${office.id}`} className="w-full">
            <div className="flex justify-between w-full ">
              <h2 className="text-specno-gray-text tracking-[-0.02rem] leading-[30px] text-[24px] font-extrabold">
                {office.officeName}
              </h2>
              <Link href={`/edit-office/${office.id}`}>
                <Image src={EditBtn.src} width={24} height={24} alt="Phone" />
              </Link>
            </div>
            <div className="mt-3 flex items-start justify-start gap-3 border-b-[0.4px]  border-specno-dust-blue w-full pb-[9px]">
              <Image
                src={PeopleIcon.src}
                width={24}
                height={24}
                alt="People Icon"
              />
              <h3 className="text-specno-gray-text font-normal text-[12px]">
                <span className="font-bold">{office.maximumCapacity}</span>{' '}
                Staff Members in Office
              </h3>
            </div>
          </Link>
          <div className="flex gap-2.5 items-center justify-center w-full mt-[10px]">
            <h2 className="text-specno-gray-text text-[12px] leading-[22px] font-normal">
              More Info
            </h2>
            <button onClick={collapse}>
              <Image
                src={moreInfo ? ChevronUp.src : ChevronDown.src}
                width={24}
                height={24}
                alt="View More Icon"
              />
            </button>
          </div>
          {moreInfo && (
            <div className="flex flex-col gap-3 items-start">
              <IconText
                imgName="Phone Icon"
                text={office.phoneNumber}
                icon={PhoneIcon.src}
              />
              <IconText
                imgName="Email Icon"
                text={office.email}
                icon={EmailIcon.src}
              />
              <IconText
                imgName="People Icon"
                text={`Office Capacity: ${office.maximumCapacity}`}
                icon={PeopleIconBlue.src}
              />
              <IconText
                imgName="People Icon"
                text={office.physicalAddress}
                icon={LocationIcon.src}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
