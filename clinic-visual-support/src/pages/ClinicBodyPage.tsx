import { Navigate, useNavigate } from 'react-router-dom';
import { SingleSelectPanel } from '../components/selectors/SingleSelectPanel';
import { useAppStore } from '../app/store';
import { scenariosById } from '../data/scenarios';
import { audioManager } from '../services/audio/audioManager';

export function ClinicBodyPage() {
  const navigate = useNavigate();
  const scenarioId = useAppStore((state) => state.scenarioId);
  const selectedBodyPartId = useAppStore((state) => state.selectedBodyPartId);
  const selectBodyPart = useAppStore((state) => state.selectBodyPart);

  if (scenarioId !== 'clinic') {
    return <Navigate to="/" replace />;
  }

  const clinic = scenariosById.clinic;
  const stage = clinic.stages.find((item) => item.id === 'body-part');

  if (!stage || stage.type !== 'selector') {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="page-flow">
      <SingleSelectPanel
        title={stage.title}
        helperText={stage.helperText}
        bodyAsset="/images/clinic/body.png"
        items={stage.items}
        selectedId={selectedBodyPartId}
        onSelect={async (item) => {
          await audioManager.play(item.asset.audio);
          selectBodyPart(item.id);
        }}
      />

      <div className="page-actions">
        <button type="button" className="btn-secondary" aria-label="Home" onClick={() => navigate('/')}>
          🏠
        </button>
        <button
          type="button"
          className="btn-primary"
          aria-label="Next"
          disabled={!selectedBodyPartId}
          onClick={() => navigate('/clinic/symptoms')}
        >
          ➡️
        </button>
      </div>
    </div>
  );
}
