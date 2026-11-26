import {Navigate, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import loginPage from './pages/loginPage';
import registerPage from './pages/registerPage';
import locationsPage from './pages/locationsPage';
import LocationDetailPage from './pages/LocationDetailPage';
import MiTicketsPage from './pages/MiTicketsPage';

import './App.css'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
        <main className="max-w-5xl mx-auto p-6">
          <Routes>
            <Route path="/" element={<Navigate to="/login"/>} />
            <Route path="/register" element={<registerPage />} />
            <Route path="/login" element={<loginPage />} />
            {/*Rutas protegidas: si no hay token -> /login*/}
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<locationsPage />} />
              <Route path="/locations/:id" element={<LocationDetailPage />} />
              <Route path="/my-tickets" element={<MiTicketsPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </main>
    </div>
  );
}

