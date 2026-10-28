import React from 'react';

export default function Perfil({ alCerrarSesion }) {
  const datosGuardados = JSON.parse(localStorage.getItem('usuario_ruta_rural')) || {
    nombre: 'Invitado', celular: 'No registrado', vereda: 'No registrada', rol: 'pasajero', password: '****'
  };

  const manejarCierre = () => {
    localStorage.removeItem('usuario_ruta_rural');
    alCerrarSesion();
  };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', padding: '24px 16px', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', maxWidth: '420px', margin: '0 auto', textAlign: 'center' }}>
        
        <div style={{ 
          width: '88px', height: '88px', 
          backgroundColor: datosGuardados.rol === 'conductor' ? '#ecfdf5' : '#eff6ff', 
          borderRadius: '50%', margin: '0 auto 16px auto', 
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: datosGuardados.rol === 'conductor' ? '#10b981' : '#2563eb'
        }}>
          <svg xmlns="http://w3.org" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>

        <h3 style={{ margin: '0 0 4px 0', color: '#1e293b', fontSize: '20px', fontWeight: '700' }}>{datosGuardados.nombre}</h3>
        <p style={{ margin: '0 0 24px 0', color: '#64748b', fontSize: '14px', fontWeight: '500', textTransform: 'capitalize' }}>
          {datosGuardados.rol === 'conductor' ? '🛻 Conductor Rural' : '🎒 Pasajero Rural'} • {datosGuardados.vereda.replace('Vereda ', '')}
        </p>
        
        <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '14px', borderTop: '1px solid #f1f5f9', paddingTop: '16px', marginBottom: '20px' }}>
          <div>
            <span style={{ fontSize: '13px', color: '#94a3b8', display: 'block', marginBottom: '2px' }}>Celular</span>
            <strong style={{ color: '#334155', fontSize: '15px' }}>{datosGuardados.celular}</strong>
          </div>
          <div>
            <span style={{ fontSize: '13px', color: '#94a3b8', display: 'block', marginBottom: '2px' }}>Ubicación Base</span>
            <strong style={{ color: '#334155', fontSize: '15px' }}>{datosGuardados.vereda}</strong>
          </div>
          {/* 🚨 VISUALIZACIÓN DE SEGURIDAD EN EL PERFIL */}
          <div>
            <span style={{ fontSize: '13px', color: '#94a3b8', display: 'block', marginBottom: '2px' }}>Seguridad de la Cuenta</span>
            <strong style={{ color: '#64748b', fontSize: '15px', fontFamily: 'monospace' }}>•••••••• (Clave activa)</strong>
          </div>
        </div>

        <button onClick={manejarCierre} style={{ width: '100%', padding: '10px', backgroundColor: '#fee2e2', color: '#ef4444', border: 'none', borderRadius: '8px', fontWeight: '600', fontSize: '14px', cursor: 'pointer' }}>
          Cerrar Sesión
        </button>

      </div>
    </div>
  );
}