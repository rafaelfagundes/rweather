import Api from '@/services/Api';

export default {
  weather(query) {
    return Api().post('weather', query);
  },
};
