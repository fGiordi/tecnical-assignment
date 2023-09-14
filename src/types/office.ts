export type StaffMember = {
  id: number;
  name: string;
  lastName: string;
  avatar: string;
};

export type Office = {
  id: number;
  officeName: string;
  physicalAddress: string;
  email: string;
  phoneNumber: string;
  maximumCapacity: number;
  officeColor: string;
  staff: StaffMember[];
};
