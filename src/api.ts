import axios from "axios";

const api = axios.create({baseURL: 'https://aulasoporte-api.aaron-navarro.workers.dev/api'});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response ?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export function errorMessage(err: unknown): string {
  if (axios.isAxiosError(err)) {
    return err.response?.data?.detail?? 'Error de conexión con el servidor';
  }
  return 'Error inesperado';
}
export default api;

