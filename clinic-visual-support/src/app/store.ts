import { create } from 'zustand';

interface AppState {
  scenarioId: string | null;
  selectedBodyPartId: string | null;
  selectedSymptomIds: string[];
  setScenario: (scenarioId: string) => void;
  selectBodyPart: (bodyPartId: string) => void;
  toggleSymptom: (symptomId: string) => void;
  resetClinicFlow: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  scenarioId: null,
  selectedBodyPartId: null,
  selectedSymptomIds: [],
  setScenario: (scenarioId) =>
    set({
      scenarioId,
      selectedBodyPartId: null,
      selectedSymptomIds: [],
    }),
  selectBodyPart: (bodyPartId) => set({ selectedBodyPartId: bodyPartId }),
  toggleSymptom: (symptomId) =>
    set((state) => {
      const exists = state.selectedSymptomIds.includes(symptomId);
      return {
        selectedSymptomIds: exists
          ? state.selectedSymptomIds.filter((id) => id !== symptomId)
          : [...state.selectedSymptomIds, symptomId],
      };
    }),
  resetClinicFlow: () => set({ selectedBodyPartId: null, selectedSymptomIds: [] }),
}));
