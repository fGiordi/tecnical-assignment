import { Office, StaffMember } from '@/types/office';
import { create } from 'zustand';

type OfficeStore = {
  office: Office | null;
  offices: Office[];
  addOffice: (office: Omit<Office, 'id'>) => void;
  updateOffice: (id: number, officeData: Partial<Office>) => void;
  deleteOffice: (id: number) => void;
  addStaffMember: (officeId: number, staffMember: StaffMember) => void;
  updateStaffMember: (
    officeId: number,
    staffMemberId: number,
    staffMemberData: Partial<StaffMember>
  ) => void;
  deleteStaffMember: (officeId: number, staffMemberId: number) => void;
  findById: (id: number) => void;
  searchStaffMembers: (officeId: number, searchValue: string) => void;
};

export const useOfficeStore = create<OfficeStore>((set, get) => ({
  offices: [],
  office: null,
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
  findById: (id: number) => {
    set((state) => ({
      office: state.offices.find((office) => office.id === id)
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
    const allOffices = get().offices.map((office) =>
      office.id === officeId
        ? {
            ...office,
            staff: [
              ...office.staff,
              {
                // @ts-ignore
                id: office.staff.length + 1,
                ...newStaffMember
              }
            ]
          }
        : office
    );
    set({ offices: allOffices });
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
  searchStaffMembers: (officeId: number, searchValue: string) => {
    const allOffices = get().offices.map((office) => {
      if (office.id === officeId) {
        const originalStaff = office.originalStaff || office.staff;
        const filteredStaff = originalStaff.filter((staffMember) => {
          const fullName = `${staffMember.firstName} ${staffMember.lastName}`;
          return (
            fullName.toLowerCase().includes(searchValue.toLowerCase()) ||
            staffMember.firstName
              .toLowerCase()
              .includes(searchValue.toLowerCase()) ||
            staffMember.lastName
              .toLowerCase()
              .includes(searchValue.toLowerCase())
          );
        });

        return {
          ...office,
          staff: searchValue ? filteredStaff : originalStaff,
          originalStaff: originalStaff
        };
      }
      return office;
    });
    set({
      offices: allOffices
    });
  }
}));
