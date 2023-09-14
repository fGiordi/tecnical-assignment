import { Office, StaffMember } from '@/types/office';
import { create } from 'zustand';

type OfficeStore = {
  office: Office | null;
  offices: Office[];
  addOffice: (office: Omit<Office, 'id'>) => void;
  updateOffice: (id: number, officeData: Partial<Office>) => void;
  deleteOffice: (id: number) => void;
  addStaffMember: (officeId: number, staffMember: any) => void;
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
    const office = get().offices.find((office) => office.id === id);
    set({
      office: office
    });
  },
  updateOffice: (id, officeData) => {
    const allOffices = get().offices.map((office) =>
      office.id === id ? { ...office, ...officeData } : office
    );
    set({
      offices: allOffices
    });
  },

  deleteOffice: (id) => {
    const allOffices = get().offices.filter((office) => office.id !== id);

    set({
      offices: allOffices
    });
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
            ],
            originalStaff: [
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
    const allOffices = get().offices.map((office) => {
      if (office.id == officeId) {
        const updatedStaff = office.staff.map((staffMember) =>
          staffMember.id === staffMemberId
            ? { ...staffMember, ...staffMemberData }
            : staffMember
        );

        return {
          ...office,
          staff: updatedStaff,
          originalStaff: updatedStaff
        };
      }
      return office;
    });
    set({
      offices: allOffices
    });
  },

  deleteStaffMember: (officeId, staffMemberId) => {
    const allOffices = get().offices.map((office) =>
      office.id === officeId
        ? {
            ...office,
            staff: office.staff.filter(
              (staffMember) => staffMember.id !== staffMemberId
            ),
            originalStaff: office.staff.filter(
              (staffMember) => staffMember.id !== staffMemberId
            )
          }
        : office
    );

    set({ offices: allOffices });
  },
  searchStaffMembers: (officeId: number, searchValue: string) => {
    const allOffices = get().offices.map((office) => {
      if (office.id === officeId) {
        // @ts-ignore
        const originalStaff = office.originalStaff || office.staff;
        // @ts-ignore
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

    console.log('searching staff', allOffices);
    set({
      offices: allOffices
    });
  }
}));
