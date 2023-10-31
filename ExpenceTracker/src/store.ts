import { create } from "zustand";

export interface Expence {
  id?: number;
  description: string;
  amount: number;
  category: string;
}

interface ExpenceListStore {
  expences: Expence[];
  expenceFilter: (category: string) => void;
  expenceSubmit: (data: Expence) => void;
  expenceDelete: (id: number) => void;
}

const useExpenceStore = create<ExpenceListStore>((set) => ({
  expences: [],
  expenceFilter: (category) =>
    set((store) => ({
      expences: store.expences.filter((e) => e.category === category),
    })),
  expenceDelete: (id) =>
    set((store) => ({
      expences: store.expences.filter((e) => e.id !== id),
    })),
  expenceSubmit: (data) =>
    set((store) => ({
      expences: [...store.expences, { ...data, id: store.expences.length + 1 }],
    })),
}));

export default useExpenceStore;
