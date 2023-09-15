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
