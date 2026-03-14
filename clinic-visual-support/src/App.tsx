import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './app/router';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="app-header">
          <h1>Clinic Visual Support</h1>
          <p>Visual communication support in daily scenarios</p>
        </header>
        <main className="app-main">
          <AppRouter />
        </main>
      </div>
    </BrowserRouter>
  );
}
