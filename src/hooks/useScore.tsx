import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type GameScore = {
  teamAScore: number;
  teamBScore: number;
  teamAName: string;
  teamBName: string;
  addPointTeamA: (amount: number) => void;
  addPointTeamB: (amount: number) => void;
  subtractPointTeamA: (amount: number) => void;
  subtractPointTeamB: (amount: number) => void;
  resetPoints: () => void;
  renameTeamA: (renameValue: string) => void;
  renameTeamB: (renameValue: string) => void;
  isEditing: boolean;
  setIsEditingTrue: () => void;
  setIsEditingFalse: () => void;
};
export const useScoreStore = create<GameScore>()(
  persist(
    (set) => ({
      teamAScore: 0,
      teamBScore: 0,
      teamAName: "Team A",
      teamBName: "Team B",
      addPointTeamA: (amount: number) =>
        set((state) => ({ teamAScore: state.teamAScore + amount })),
      addPointTeamB: (amount: number) =>
        set((state) => ({ teamBScore: state.teamBScore + amount })),
      subtractPointTeamA: (amount: number) =>
        set((state) => ({ teamAScore: state.teamAScore - amount })),
      subtractPointTeamB: (amount: number) =>
        set((state) => ({ teamBScore: state.teamBScore - amount })),
      resetPoints: () => set({ teamAScore: 0, teamBScore: 0 }),
      renameTeamA(renameValue: string) {
        set(() => ({ teamAName: renameValue }));
      },
      renameTeamB(renameValue: string) {
        set(() => ({ teamBName: renameValue }));
      },
      isEditing: false,
      setIsEditingTrue: () => set({ isEditing: true }),
      setIsEditingFalse: () => set({ isEditing: false }),
    }),
    {
      name: "score-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
