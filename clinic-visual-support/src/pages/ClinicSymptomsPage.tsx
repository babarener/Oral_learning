import { Navigate, useNavigate } from 'react-router-dom';
import { MultiSelectGrid } from '../components/selectors/MultiSelectGrid';
import { useAppStore } from '../app/store';
import { scenariosById } from '../data/scenarios';
import { audioManager } from '../services/audio/audioManager';

export function ClinicSymptomsPage() {
  const navigate = useNavigate();
  const scenarioId = useAppStore((state) => state.scenarioId);
  const selectedBodyPartId = useAppStore((state) => state.selectedBodyPartId);
  const selectedSymptomIds = useAppStore((state) => state.selectedSymptomIds);
  const toggleSymptom = useAppStore((state) => state.toggleSymptom);

  if (scenarioId !== 'clinic') {
    return <Navigate to="/" replace />;
  }

  if (!selectedBodyPartId) {
    return <Navigate to="/clinic/body" replace />;
  }

  const clinic = scenariosById.clinic;
  const stage = clinic.stages.find((item) => item.id === 'symptoms');

  if (!stage || stage.type !== 'selector') {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="page-flow">
      <MultiSelectGrid
        title={stage.title}
        helperText={stage.helperText}
        items={stage.items}
        selectedIds={selectedSymptomIds}
        onToggle={async (item) => {
          await audioManager.play(item.asset.audio);
          toggleSymptom(item.id);
        }}
      />

      <div className="page-actions">
        <button type="button" className="btn-secondary" onClick={() => navigate('/clinic/body')}>
          Back
        </button>
        <button
          type="button"
          className="btn-primary"
          disabled={selectedSymptomIds.length === 0}
          onClick={() => navigate('/clinic/recommendations')}
        >
          Next
        </button>
      </div>
    </div>
  );
}
