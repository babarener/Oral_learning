import { Navigate, useNavigate } from 'react-router-dom';
import { VisualCard } from '../components/common/VisualCard';
import { useAppStore } from '../app/store';
import { scenariosById } from '../data/scenarios';
import { getRecommendations } from '../services/recommendation/engine';
import { audioManager } from '../services/audio/audioManager';

export function ClinicRecommendationsPage() {
  const navigate = useNavigate();
  const scenarioId = useAppStore((state) => state.scenarioId);
  const selectedBodyPartId = useAppStore((state) => state.selectedBodyPartId);
  const selectedSymptomIds = useAppStore((state) => state.selectedSymptomIds);
  const setScenario = useAppStore((state) => state.setScenario);
  const resetClinicFlow = useAppStore((state) => state.resetClinicFlow);

  if (scenarioId !== 'clinic') {
    return <Navigate to="/" replace />;
  }

  if (!selectedBodyPartId) {
    return <Navigate to="/clinic/body" replace />;
  }

  if (selectedSymptomIds.length === 0) {
    return <Navigate to="/clinic/symptoms" replace />;
  }

  const clinic = scenariosById.clinic;
  const recommendations = getRecommendations({
    scenario: clinic,
    bodyPartId: selectedBodyPartId,
    symptoms: selectedSymptomIds,
  });

  return (
    <div className="page-flow">
      <section className="page-card">
        <header className="page-card__header">
          <h2>Supportive next steps</h2>
          <p>These cards can help you communicate with clinic staff.</p>
        </header>

        <div className="symptom-grid">
          {recommendations.map((item) => (
            <VisualCard
              key={item.id}
              label={item.label}
              asset={item.asset}
              onClick={() => {
                void audioManager.play(item.asset.audio);
              }}
            />
          ))}
        </div>
      </section>

      <div className="page-actions">
        <button type="button" className="btn-secondary" onClick={() => navigate('/')}>
          Home
        </button>
        <button
          type="button"
          className="btn-primary"
          onClick={() => {
            setScenario('clinic');
            resetClinicFlow();
            navigate('/clinic/body');
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
}
