import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/budget';

export const budgetAPI = {
  addEntry: (entry) => axios.post(API_BASE_URL, entry),
  getAllEntries: () => axios.get(API_BASE_URL),
  getEntryById: (id) => axios.get(`${API_BASE_URL}/${id}`),
  getEntriesByCategory: (category) => axios.get(`${API_BASE_URL}/category/${category}`),
  updateEntry: (id, entry) => axios.put(`${API_BASE_URL}/${id}`, entry),
  deleteEntry: (id) => axios.delete(`${API_BASE_URL}/${id}`)
};