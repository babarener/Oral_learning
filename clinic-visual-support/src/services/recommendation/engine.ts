import { recommendationRules } from '../../data/recommendationRules';
import type { RecommendationItem, RecommendationRule, Scenario } from '../../models/types';

function isRuleMatch(rule: RecommendationRule, bodyPartId: string | null, symptoms: string[]): boolean {
  const bodyMatch = !rule.bodyPartId || rule.bodyPartId === bodyPartId;
  const anyMatch = !rule.symptomAny || rule.symptomAny.some((item) => symptoms.includes(item));
  const allMatch = !rule.symptomAll || rule.symptomAll.every((item) => symptoms.includes(item));

  return bodyMatch && anyMatch && allMatch;
}

export function getRecommendations(params: {
  scenario: Scenario;
  bodyPartId: string | null;
  symptoms: string[];
}): RecommendationItem[] {
  const { scenario, bodyPartId, symptoms } = params;

  const sortedRules = recommendationRules
    .filter((rule) => rule.scenarioId === scenario.id)
    .sort((a, b) => b.priority - a.priority);

  const recommendationIds = new Set<string>();

  for (const rule of sortedRules) {
    if (!isRuleMatch(rule, bodyPartId, symptoms)) {
      continue;
    }

    for (const recommendationId of rule.recommendations) {
      recommendationIds.add(recommendationId);
    }
  }

  if (recommendationIds.size === 0) {
    recommendationIds.add('wait');
    recommendationIds.add('treatment');
    recommendationIds.add('drink_water');
  }

  return scenario.recommendations.filter((item) => recommendationIds.has(item.id));
}
