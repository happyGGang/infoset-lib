import { create } from 'zustand';

interface OrientationState {
  isLandscape: boolean;
  toggleLandscape: (value?: boolean) => void;
}

export const useOrientationStore = create<OrientationState>((set) => ({
  isLandscape: false,
  toggleLandscape: (value) =>
    set((state) => ({ isLandscape: value !== undefined ? value : !state.isLandscape })),
}));
