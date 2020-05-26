import { API_START, API_END, API_ERROR, API_CLEAR } from "../types";

export const apiStart = label => ({
  type: API_START,
  label
});

export const apiEnd = label => ({
  type: API_END,
  label
});

export const apiError = (error, label) => ({
  type: API_ERROR,
  label,
  error
});

export const clearApi = (label) => ({
  type: API_CLEAR,
  label
})
