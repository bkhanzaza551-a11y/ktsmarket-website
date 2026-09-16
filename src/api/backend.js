const BASE_URL = 'https://kts-backend-production.up.railway.app/api/v1';

export const api = {
  getMarketTicker: async () => {
    try {
      const res = await fetch(`${BASE_URL}/market/ticker`);
      const data = await res.json();
      return data.success ? data.data : null;
    } catch { return null; }
  },

  getMarketOverview: async () => {
    try {
      const res = await fetch(`${BASE_URL}/market/overview`);
      const data = await res.json();
      return data.success ? data.data : null;
    } catch { return null; }
  },

  getSignals: async () => {
    try {
      const res = await fetch(`${BASE_URL}/signals?per_page=5`);
      const data = await res.json();
      return data.success ? (data.data?.data || data.data || []) : [];
    } catch { return []; }
  },

  getBotStatus: async () => {
    try {
      const res = await fetch(`${BASE_URL}/bot`);
      const data = await res.json();
      return data.success ? data.data : null;
    } catch { return null; }
  },

  getCourses: async () => {
    try {
      const res = await fetch(`${BASE_URL}/education/courses?per_page=3`);
      const data = await res.json();
      return data.success ? (data.data?.data || data.data || []) : [];
    } catch { return []; }
  },

  getChatbotStatus: async () => {
    try {
      const res = await fetch(`${BASE_URL}/ai-chat/status`);
      const data = await res.json();
      return data;
    } catch { return { enabled: false }; }
  },
};
