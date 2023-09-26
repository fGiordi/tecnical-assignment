export type StaffMember = {
  id: number;
  firstName: string;
  lastName: string;
  avatar: string;
};

export type Office = {
  id: any;
  officeName: string;
  physicalAddress: string;
  email: string;
  phoneNumber: string;
  maximumCapacity: number;
  officeColor: string;
  staff: StaffMember[];
  originalStaff: StaffMember[];
};

export type OfficeStore = {
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