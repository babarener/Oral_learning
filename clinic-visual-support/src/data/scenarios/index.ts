import { clinicScenario } from './clinic';
import { supermarketScenario } from './supermarket';

export const scenarios = [clinicScenario, supermarketScenario];

export const scenariosById = Object.fromEntries(
  scenarios.map((scenario) => [scenario.id, scenario])
);
