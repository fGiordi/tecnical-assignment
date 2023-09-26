import addData from '@/firebase/firestore/addData';
import getDocuments from '@/firebase/firestore/getDocs';
import getDocument from '@/firebase/firestore/getData';
import updateData from '@/firebase/firestore/updateData';
import deleteData from '@/firebase/firestore/deleteData';
import { Office, StaffMember } from '@/types/office';
import { create } from 'zustand';

type OfficeStore = {
  office: Office | null;
  offices: Office[];
  addOffice: (office: Omit<Office, 'id'>) => void;
  updateOffice: (id: number, officeData: Partial<Office>) => void;
  deleteOffice: (id: string) => void;
  addStaffMember: (officeId: string, staffMember: any) => void;
  updateStaffMember: (
    officeId: string,
    staffMemberId: string,
    staffMemberData: Partial<StaffMember>
  ) => void;
  deleteStaffMember: (officeId: string, staffMemberId: number) => void;
  findById: (id: string) => void;
  searchStaffMembers: (officeId: string, searchValue: string) => void;
  fetchAllOffices: () => void;
  isSearching: boolean
};

export const useOfficeStore = create<OfficeStore>((set, get) => ({
  offices: [],
  office: null,
  isSearching: false,
  addOffice: async (newOffice) => {
    await addData('offices', { ...newOffice });
  },
  findById: async (id: string) => {
    const office = await getDocument('offices', id)

    set({
      // @ts-ignore
      office: office.result
    });
  },
  updateOffice: async (id, officeData) => {
    try {
      await updateData('offices', String(id), { ...officeData }, true);
    } catch (error) {
      // @ts-ignore
      console.log('error updating', error.message);
    }
  },

  deleteOffice: async (id) => {
    try {
      await deleteData('offices', String(id));
    } catch (error) {
      // @ts-ignore
      console.log('error updating', error.message);
    }
  },

  addStaffMember: async (officeId, newStaffMember) => {
    set({
      isSearching: false
    })
    const office = get().office

    const updatedInfo = {
                ...office,
                staff: [
                  // @ts-ignore
                  ...office.staff,
                  {
                    // @ts-ignore
                    id: office.staff.length + 1,
                    ...newStaffMember
                  }
                ],
                originalStaff: [
                  // @ts-ignore
                  ...office.staff,
                  {
                    // @ts-ignore
                    id: office.staff.length + 1,
                    ...newStaffMember
                  }
                ]
              }

    
    try {
      await updateData('offices', String(officeId), updatedInfo, true);
      await get().findById(officeId)
    } catch (error) {
      // @ts-ignore
      console.log('error adding staff', error.message);
    }
  },

  updateStaffMember: async (officeId, staffMemberId, staffMemberData) => {
    set({
      isSearching: false
    })
    const office = await get().office

    const updatedStaff = office?.staff.map((staffMember) =>
    // @ts-ignore
    staffMember.id == staffMemberId
      ? { ...staffMember, ...staffMemberData }
      : staffMember
  );

  const updatedOffice = {
    ...office,
    staff: updatedStaff,
    originalStaff: updatedStaff
  }
    
    try {
      await updateData('offices', String(officeId), updatedOffice, true);
      await get().findById(officeId)

    } catch (error) {
      // @ts-ignore
      console.log('error updating staff', error.message);
    }
  },

  deleteStaffMember: async (officeId, staffMemberId) => {
    set({
      isSearching: false
    })
    const office = await get().office
    const updatedOffice = {
      ...office,
      staff: office?.staff.filter(
        (staffMember) => staffMember.id != staffMemberId
      ),
      originalStaff: office?.staff.filter(
        (staffMember) => staffMember.id != staffMemberId
      )
    }
  
    try {
      await updateData('offices', String(officeId), updatedOffice, true);
      await get().findById(officeId)

    } catch (error) {
      // @ts-ignore
      console.log('error updating staff', error.message);
    }
  },
  searchStaffMembers: (officeId: string, searchValue: string) => {
    const allOffices = get().offices.map((office) => {
      if (office.id == officeId) {
        console.log('found office', office)
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

        console.log('filteredStaff', filteredStaff, searchValue)

        return {
          ...office,
          staff: searchValue ? filteredStaff : originalStaff,
          originalStaff: originalStaff
        };
      }
      return office;
    });

    console.log('searching', allOffices);

    set({
      offices: allOffices,
      isSearching: true
    });
  },
  fetchAllOffices: async () => {
    try {
      // @ts-ignore
      let temptItems = [];
      const data = await getDocuments('offices');
      if (data.result) {
        data.result.forEach((item) => {
          const officeData = item.data();
          temptItems.push({ ...officeData, id: String(item.id) });
        });
      }
      set({
        // @ts-ignore
        offices: temptItems
      });
    } catch (err) {
      console.log('error fetching', err);
    }
  }
}));
