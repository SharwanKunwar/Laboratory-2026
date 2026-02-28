import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

export const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
  timeout: 15000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = 'Bearer ' + token;
  return config;
});

api.interceptors.response.use(
  (r) => r,
  (err) => {
    if (err.response && err.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.dispatchEvent(new Event('auth-logout'));
    }
    if (err.code === 'ERR_NETWORK' || !err.response) {
      err.message = 'Cannot reach the server. Is the backend running at ' + API_BASE.replace(/\/api\/?$/, '') + '?';
    }
    return Promise.reject(err);
  }
);

export const auth = {
  login: (data) => api.post('/auth/login', data),
  register: (data) => api.post('/auth/register', data),
  google: (idToken) => api.post('/auth/google', { idToken }),
  facebook: (accessToken) => api.post('/auth/facebook', { accessToken }),
  phoneRequest: (phone) => api.post('/auth/phone/request', { phone }),
  phoneVerify: (phone, code) => api.post('/auth/phone/verify', { phone, code }),
};

export const rooms = {
  listPublic: (city) => api.get('/rooms/public', { params: city ? { city } : {} }),
  getPublic: (id) => api.get('/rooms/public/' + id),
  getMy: () => api.get('/rooms/my'),
  get: (id) => api.get('/rooms/' + id),
  create: (data) => api.post('/rooms', data),
  update: (id, data) => api.put('/rooms/' + id, data),
  delete: (id) => api.delete('/rooms/' + id),
};

export const requests = {
  create: (data) => api.post('/requests', data),
  my: () => api.get('/requests/my'),
  incoming: () => api.get('/requests/incoming'),
  respond: (id, status) => api.patch('/requests/' + id + '/respond', { status }),
};

export const billings = {
  list: () => api.get('/billings'),
  byRoom: (roomId) => api.get('/billings/room/' + roomId),
  get: (id) => api.get('/billings/' + id),
  create: (data) => api.post('/billings', data),
};

export const payments = {
  create: (data) => api.post('/payments', data),
  byBilling: (billingId) => api.get('/payments/billing/' + billingId),
};

export const notifications = {
  list: () => api.get('/notifications'),
  unreadCount: () => api.get('/notifications/unread-count'),
  markRead: (id) => api.patch('/notifications/' + id + '/read'),
  markAllRead: () => api.post('/notifications/read-all'),
};
