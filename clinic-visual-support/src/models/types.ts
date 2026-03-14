export type SelectionMode = 'single' | 'multi';

export interface AssetRef {
  id: string;
  image?: string;
  animation?: string;
  audio?: string;
  alt?: string;
}

export interface Hotspot {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface SelectableItem {
  id: string;
  label: string;
  asset: AssetRef;
  hotspot?: Hotspot;
  tags?: string[];
}

export interface RecommendationItem {
  id: string;
  label: string;
  asset: AssetRef;
}

export interface SelectorStage {
  id: string;
  type: 'selector';
  title: string;
  helperText: string;
  selectionMode: SelectionMode;
  items: SelectableItem[];
  nextStageId?: string;
}

export interface ResultStage {
  id: string;
  type: 'result';
  title: string;
  helperText: string;
}

export type StageConfig = SelectorStage | ResultStage;

export interface Scenario {
  id: string;
  label: string;
  description: string;
  cover: AssetRef;
  stages: StageConfig[];
  recommendations: RecommendationItem[];
}

export interface RecommendationRule {
  id: string;
  scenarioId: string;
  bodyPartId?: string;
  symptomAny?: string[];
  symptomAll?: string[];
  recommendations: string[];
  priority: number;
}
