import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type GameScore = {
  teamAScore: number;
  teamBScore: number;
  addPointTeamA: (amount: number) => void;
  addPointTeamB: (amount: number) => void;
  subtractPointTeamA: (amount: number) => void;
  subtractPointTeamB: (amount: number) => void;
  resetPoints: () => void;
};
export const useScoreStore = create<GameScore>()(
  persist(
    (set) => ({
      teamAScore: 0,
      teamBScore: 0,
      addPointTeamA: (amount: number) =>
        set((state) => ({ teamAScore: state.teamAScore + amount })),
      addPointTeamB: (amount: number) =>
        set((state) => ({ teamBScore: state.teamBScore + amount })),
      subtractPointTeamA: (amount: number) =>
        set((state) => ({ teamAScore: state.teamAScore - amount })),
      subtractPointTeamB: (amount: number) =>
        set((state) => ({ teamBScore: state.teamBScore - amount })),
      resetPoints: () => set({ teamAScore: 0, teamBScore: 0 }),
    }),
    {
      name: "score-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
