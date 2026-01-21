import { create } from "zustand";

const STORAGE_KEY = "advanced-form-data";

const getInitialData = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Invalid localStorage data", error);
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
};

export const useFormStore = create((set) => ({
  formData:
    getInitialData() || {
      name: "",
      description: "",
      gender: "",
      skills: [],
      country: "",
      date: "",
      image: null,
      video: null,
    },

  setFormData: (data) => set({ formData: data }),

  clearData: () => {
    localStorage.removeItem(STORAGE_KEY);
    document.cookie = "advancedForm=; max-age=0";
    set({
      formData: {
        name: "",
        description: "",
        gender: "",
        skills: [],
        country: "",
        date: "",
        image: null,
        video: null,
      },
    });
  },
}));

export const saveToStorage = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

  const expires = new Date();
  expires.setDate(expires.getDate() + 3);

  document.cookie = `advancedForm=true; expires=${expires.toUTCString()}`;
};

