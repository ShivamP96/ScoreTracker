import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type History = {
  id: number;
  teamA: string;
  teamAScore: number;
  teamB: string;
  teamBScore: number;
};

type GameScore = {
  teamAScore: number;
  teamBScore: number;
  teamAName: string;
  teamBName: string;
  gameHistory: History[];
  gameId: number;
  generateNextGameId: () => void;
  addPointTeamA: (amount: number) => void;
  addPointTeamB: (amount: number) => void;
  subtractPointTeamA: (amount: number) => void;
  subtractPointTeamB: (amount: number) => void;
  resetPoints: () => void;
  renameTeamA: (renameValue: string) => void;
  renameTeamB: (renameValue: string) => void;
  isEditing: string;
  setIsEditingTeamA: () => void;
  setIsEditingTeamB: () => void;
  setIsEditingTeamEmpty: () => void;
  saveGameHistory: () => void;
  deleteGameHistory: (id: number) => boolean;
};
export const useScoreStore = create<GameScore>()(
  persist(
    (set, get) => ({
      teamAScore: 0,
      teamBScore: 0,
      teamAName: "Team A",
      teamBName: "Team B",
      gameHistory: [],
      gameId: 0,
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
      isEditing: "",
      setIsEditingTeamA: () => set({ isEditing: "A" }),
      setIsEditingTeamB: () => set({ isEditing: "B" }),
      setIsEditingTeamEmpty: () => set({ isEditing: "" }),
      saveGameHistory() {
        const gameEntry: History = {
          id: get().gameId,
          teamA: this.teamAName,
          teamAScore: this.teamAScore,
          teamB: this.teamBName,
          teamBScore: this.teamBScore,
        };
        set((state) => ({ gameHistory: [...state.gameHistory, gameEntry] }));
        this.generateNextGameId();
      },
      deleteGameHistory(id) {
        let gameFound: boolean = false;
        for (let i = 0; i < this.gameHistory.length; i++) {
          if (this.gameHistory[i].id == id) {
            gameFound = true;
          }
        }
        if (gameFound) {
          set((state) => ({
            gameHistory: [
              ...state.gameHistory.filter((game) => game.id !== id),
            ],
          }));
          return true;
        } else {
          console.warn(`Game with ID ${id} not found`);
          return false;
        }
      },
      generateNextGameId: () => {
        const nextId: number = get().gameId + 1;
        set({ gameId: nextId });
      },
    }),
    {
      name: "score-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
function get() {
  throw new Error("Function not implemented.");
}
