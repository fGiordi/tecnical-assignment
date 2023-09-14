import { create } from 'zustand';

interface HelpersStore {
  activeStepper: number;
}

export const useHelpersStore = create<HelpersStore>((set) => ({
  activeStepper: 0
}));
