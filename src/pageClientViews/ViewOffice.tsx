'use client';
import { useState, useEffect } from 'react';
import SearchIcon from '@/app/components/SVGS/SearchIcon.svg';
import SearchInput from '@/app/components/Form/SearchInput';
import OfficeCard from '@/app/components/Office/OfficeCard';
import Modal from '@/app/components/Modal';
import StaffStepper from '@/app/components/Form/StaffStepper';
import OfficeStaffMember from '@/app/components/Office/OfficeStaffMember';
import { useOfficeStore } from '@/store/offices.store';
import { StaffMember } from '@/types/office';
import { IActionBtn } from '@/types/actionbtn';
import ActionBtn from '@/app/components/Buttons/ActionBtn';

interface IViewOffice {
  id: string;
}

export default function Office({ id }: IViewOffice) {
  const {
    office,
    offices,
    searchStaffMembers,
    deleteStaffMember,
    fetchAllOffices
  } = useOfficeStore();

  const currentOffice = offices.find((office) => office.id === String(id));

  const [selectedStaffMember, setSeletedStaffMember] = useState<
    StaffMember | undefined
  >();

  const [isOpenEditStaff, setIsOpenEditStaff] = useState(false);

  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const [isOpenDeleteStaff, setIsOpenDeleteStaff] = useState(false);

  const closeModal = () => {
    setIsOpenEditStaff(false);
  };

  const openEditStaffModal = () => {
    setIsOpenEditStaff(true);
    closeInfoModal();
  };

  const openDeleteStaff = () => {
    setIsOpenDeleteStaff(true);
  };

  const closeDeleteStaff = () => {
    setIsOpenDeleteStaff(false);
  };

  const closeInfoModal = () => {
    setIsOpenInfo(false);
  };

  const openInfoModal = () => {
    setIsOpenInfo(true);
  };

  const editStaffAction = (staffMember: StaffMember | undefined) => {
    openInfoModal();
    setSeletedStaffMember(staffMember);
  };

  const handleInputChange = (value: string) => {
    searchStaffMembers(String(id), value);
  };

  const infoButtons: IActionBtn[] = [
    {
      name: 'Edit Staff Member',
      action: openEditStaffModal,
      fill: true,
      danger: false
    },
    {
      name: 'Delete Staff Member',
      action: openDeleteStaff,
      fill: false,
      danger: true
    }
  ];

  const handleDeleteStaffMember = () => {
    if (selectedStaffMember)
      deleteStaffMember(String(id), selectedStaffMember.id);
  };

  const deleteStaffbtns: IActionBtn[] = [
    {
      name: 'Delete Staff Member',
      action: handleDeleteStaffMember,
      fill: true,
      danger: true
    },
    {
      name: 'Keep Staff Member',
      action: closeDeleteStaff,
      fill: false,
      danger: true
    }
  ];

  useEffect(() => {
    fetchAllOffices();
  }, []);

  return (
    <div>
      <div className="flex gap-7 w-full">
        {currentOffice && (
          <OfficeCard
            office={currentOffice}
            id={currentOffice.id}
            view="office"
          />
        )}
      </div>
      <div className="w-full flex justify-end items-center relative">
        <SearchInput
          placeholder="Search"
          type="text"
          icon={SearchIcon}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="flex flex-col gap-[14px] mt-6">
        <div className="flex justify-between pr-3">
          <h2 className="font-semibold text-[24px] leading-[30px] tracking-[-0.02rem] ">
            Staff Members in Office
          </h2>
          <div>
            <h3 className="font-normal text-[18px] leading-[24px] text-bold-black">
              {office?.staff.length || 0}
            </h3>
          </div>
        </div>
        {currentOffice?.staff.map((staff) => {
          return (
            <OfficeStaffMember
              key={staff.id}
              avatar={staff.avatar}
              firstName={staff.firstName}
              lastName={staff.lastName}
              staffMember={staff}
              editStaffAction={editStaffAction}
            />
          );
        })}
      </div>
      <Modal
        isOpen={isOpenEditStaff}
        onClose={closeModal}
        title="Edit Staff Member"
        type="edit"
        body={
          <StaffStepper
            onClose={closeModal}
            officeId={id}
            staffMember={selectedStaffMember}
            staffId={selectedStaffMember?.id}
            type="edit"
          />
        }
      />
      <Modal
        isOpen={isOpenInfo}
        onClose={closeInfoModal}
        title=""
        type="info"
        body={
          <div className="flex flex-col items-center gap-[12px] justify-center mb-[78px]">
            {infoButtons.map((item, index) => {
              return <ActionBtn key={index} {...item} />;
            })}
          </div>
        }
      />

      <Modal
        isOpen={isOpenDeleteStaff}
        onClose={closeDeleteStaff}
        title="Are you sure you want to Staff Member?"
        type="delete"
        body={
          <div className="flex flex-col items-center gap-[12px] justify-center mb-[78px]">
            {deleteStaffbtns.map((item, index) => {
              return <ActionBtn key={index} {...item} />;
            })}
          </div>
        }
      />
    </div>
  );
}
