import type { RecommendationRule } from '../models/types';

export const recommendationRules: RecommendationRule[] = [
  {
    id: 'stomach-stomachache',
    scenarioId: 'clinic',
    bodyPartId: 'stomach',
    symptomAny: ['stomachache', 'diarrhea'],
    recommendations: ['medicine', 'drink_water', 'rest', 'wait', 'injection'],
    priority: 100,
  },
  {
    id: 'head-headache-fever',
    scenarioId: 'clinic',
    bodyPartId: 'head',
    symptomAny: ['headache', 'fever'],
    recommendations: ['medicine', 'drink_water', 'rest', 'wait', 'injection'],
    priority: 90,
  },
  {
    id: 'eyes-pain',
    scenarioId: 'clinic',
    bodyPartId: 'eyes',
    symptomAny: ['pain'],
    recommendations: ['medicine', 'drink_water', 'rest', 'wait', 'injection'],
    priority: 80,
  },
  {
    id: 'hand-pain',
    scenarioId: 'clinic',
    bodyPartId: 'hand',
    symptomAny: ['pain'],
    recommendations: ['medicine', 'drink_water', 'rest', 'wait', 'injection'],
    priority: 80,
  },
  {
    id: 'leg-pain',
    scenarioId: 'clinic',
    bodyPartId: 'leg',
    symptomAny: ['pain'],
    recommendations: ['medicine', 'drink_water', 'rest', 'wait', 'injection'],
    priority: 80,
  },
  {
    id: 'cough-fever',
    scenarioId: 'clinic',
    symptomAll: ['cough', 'fever'],
    recommendations: ['medicine', 'drink_water', 'rest', 'wait', 'injection'],
    priority: 70,
  },
  {
    id: 'fallback-general',
    scenarioId: 'clinic',
    recommendations: ['medicine', 'drink_water', 'rest', 'wait', 'injection'],
    priority: 1,
  },
];
