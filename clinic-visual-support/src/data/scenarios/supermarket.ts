import type { Scenario } from '../../models/types';

export const supermarketScenario: Scenario = {
  id: 'supermarket',
  label: 'Supermarket',
  description: 'Coming soon',
  cover: {
    id: 'cover-supermarket',
    image: '🛒',
    audio: '/audio/mock/supermarket.mp3',
    alt: 'Supermarket',
  },
  stages: [],
  recommendations: [],
};
