import { create } from 'zustand';

interface HelpersStore {
  activeStepper: number;
  increaseStepper: () => void;
  decreaseStepper: () => void;
  resetStepper: () => void;
}

export const useHelpersStore = create<HelpersStore>((set) => ({
  activeStepper: 0,
  increaseStepper: () => {
    set((state) => ({
      activeStepper: state.activeStepper + 1
    }));
  },

  decreaseStepper: () => {
    set((state) => ({
      activeStepper: state.activeStepper - 1
    }));
  },
  resetStepper: () => {
    set((state) => ({
      activeStepper: 0
    }));
  }
}));
