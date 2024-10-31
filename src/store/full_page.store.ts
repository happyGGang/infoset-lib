import { create } from 'zustand';

interface FullPageState {
  isFullPage: boolean;
  toggleFullPage: () => void;
}

export const useFullPageStore = create<FullPageState>((set) => ({
  isFullPage: false,
  toggleFullPage: () => {
    set((state) => {
      if (!state.isFullPage) {
        document.documentElement.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
      return { isFullPage: !state.isFullPage };
    });
  },
}));
