import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type StaffMember = {
  id: number;
  name: string;
  position: string;
};

type Office = {
  id: number;
  officeName: string;
  physicalAddress: string;
  email: string;
  phoneNumber: string;
  maximumCapacity: number;
  officeColor: string;
  staff: StaffMember[];
};

type OfficeStore = {
  offices: Office[];
  addOffice: (office: Omit<Office, 'id'>) => void;
  updateOffice: (id: number, officeData: Partial<Office>) => void;
  deleteOffice: (id: number) => void;
  addStaffMember: (
    officeId: number,
    staffMember: Omit<StaffMember, 'id'>
  ) => void;
  updateStaffMember: (
    officeId: number,
    staffMemberId: number,
    staffMemberData: Partial<StaffMember>
  ) => void;
  deleteStaffMember: (officeId: number, staffMemberId: number) => void;
};

export const useOfficeStore = create<OfficeStore>((set) => ({
  offices: [],

  addOffice: (newOffice) => {
    set((state) => ({
      offices: [
        ...state.offices,
        {
          id: state.offices.length + 1,
          // staff: [],
          ...newOffice
        }
      ]
    }));
  },

  updateOffice: (id, officeData) => {
    set((state) => ({
      offices: state.offices.map((office) =>
        office.id === id ? { ...office, ...officeData } : office
      )
    }));
  },

  deleteOffice: (id) => {
    set((state) => ({
      offices: state.offices.filter((office) => office.id !== id)
    }));
  },

  addStaffMember: (officeId, newStaffMember) => {
    set((state) => ({
      offices: state.offices.map((office) =>
        office.id === officeId
          ? {
              ...office,
              staff: [
                ...office.staff,
                {
                  id: office.staff.length + 1,
                  ...newStaffMember
                }
              ]
            }
          : office
      )
    }));
  },

  updateStaffMember: (officeId, staffMemberId, staffMemberData) => {
    set((state) => ({
      offices: state.offices.map((office) =>
        office.id === officeId
          ? {
              ...office,
              staff: office.staff.map((staffMember) =>
                staffMember.id === staffMemberId
                  ? { ...staffMember, ...staffMemberData }
                  : staffMember
              )
            }
          : office
      )
    }));
  },

  deleteStaffMember: (officeId, staffMemberId) => {
    set((state) => ({
      offices: state.offices.map((office) =>
        office.id === officeId
          ? {
              ...office,
              staff: office.staff.filter(
                (staffMember) => staffMember.id !== staffMemberId
              )
            }
          : office
      )
    }));
  },
  // Function to search and filter staff members within an office
  searchStaffMembers: (officeId: number, searchValue: string) => {
    set((state) => ({
      offices: state.offices.map((office) =>
        office.id === officeId
          ? {
              ...office,
              staff: office.staff.filter((staffMember) =>
                staffMember.name
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              )
            }
          : office
      )
    }));
  }
}));
