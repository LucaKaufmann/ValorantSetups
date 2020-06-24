import { ResourceStore } from '@reststate/mobx';
import api from './api.js';

const topicsStore = new ResourceStore({
  name: 'restaurants',
  httpClient: api,
});

export {
  topicsStore
};