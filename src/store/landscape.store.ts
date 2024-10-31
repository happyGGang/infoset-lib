import { create } from 'zustand';

interface OrientationState {
  isLandscape: boolean;
  toggleLandscape: () => void;
}

export const useOrientationStore = create<OrientationState>((set) => ({
  isLandscape: false,
  toggleLandscape: () => set((state) => ({ isLandscape: !state.isLandscape })),
}));
