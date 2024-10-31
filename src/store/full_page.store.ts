import { create } from 'zustand';

interface FullPageState {
  isFullPage: boolean;
  toggleFullPage: () => void;
}

export const useFullPageStore = create<FullPageState>((set) => ({
  isFullPage: false,
  toggleFullPage: () => set((state) => ({ isFullPage: !state.isFullPage })),
}));
