import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { ClinicBodyPage } from '../pages/ClinicBodyPage';
import { ClinicSymptomsPage } from '../pages/ClinicSymptomsPage';
import { ClinicRecommendationsPage } from '../pages/ClinicRecommendationsPage';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/clinic/body" element={<ClinicBodyPage />} />
      <Route path="/clinic/symptoms" element={<ClinicSymptomsPage />} />
      <Route path="/clinic/recommendations" element={<ClinicRecommendationsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
