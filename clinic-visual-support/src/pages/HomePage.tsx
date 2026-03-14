import { useNavigate } from 'react-router-dom';
import { VisualCard } from '../components/common/VisualCard';
import { scenariosById } from '../data/scenarios';
import { useAppStore } from '../app/store';
import { audioManager } from '../services/audio/audioManager';

export function HomePage() {
  const navigate = useNavigate();
  const setScenario = useAppStore((state) => state.setScenario);
  const resetClinicFlow = useAppStore((state) => state.resetClinicFlow);

  const clinic = scenariosById.clinic;
  const supermarket = scenariosById.supermarket;

  const startClinic = async () => {
    await audioManager.play(clinic.cover.audio);
    setScenario(clinic.id);
    resetClinicFlow();
    navigate('/clinic/body');
  };

  const openSupermarketPlaceholder = async () => {
    await audioManager.play(supermarket.cover.audio);
  };

  return (
    <section className="page-card">
      <header className="page-card__header">
        <h2>Choose a scenario</h2>
        <p>Click one large card to continue</p>
      </header>

      <div className="scenario-grid">
        <VisualCard label={clinic.label} asset={clinic.cover} onClick={startClinic} />
        <VisualCard
          label={supermarket.label}
          asset={supermarket.cover}
          onClick={openSupermarketPlaceholder}
          subLabel="Coming soon"
        />
      </div>
    </section>
  );
}
