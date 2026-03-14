import { useEffect, useRef } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { VisualCard } from '../components/common/VisualCard';
import { useAppStore } from '../app/store';
import { scenariosById } from '../data/scenarios';
import { getRecommendations } from '../services/recommendation/engine';
import { audioManager } from '../services/audio/audioManager';

export function ClinicRecommendationsPage() {
  const hasPlayedSuggestionRef = useRef(false);
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

  useEffect(() => {
    if (hasPlayedSuggestionRef.current) {
      return;
    }

    hasPlayedSuggestionRef.current = true;
    void audioManager.play('/audio/mock/doctor_suggestion.mp3');
  }, []);

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
        <button type="button" className="btn-secondary" aria-label="Home" onClick={() => navigate('/')}>
          🏠
        </button>
        <button
          type="button"
          className="btn-primary"
          aria-label="Restart"
          onClick={() => {
            setScenario('clinic');
            resetClinicFlow();
            navigate('/clinic/body');
          }}
        >
          🔄
        </button>
      </div>
    </div>
  );
}
