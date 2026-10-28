import React, { useState } from 'react';

export default function Registro({ alRegistrar }) {
  const [rol, setRol] = useState('pasajero');
  const [errorPassword, setErrorPassword] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const celular = e.target.celular.value;
    const vereda = e.target.vereda.value;
    const password = e.target.password.value;

    // Validación básica: la contraseña debe tener al menos 4 caracteres
    if (password.length < 4) {
      setErrorPassword('🔒 La contraseña debe tener al menos 4 dígitos para ser segura.');
      return;
    }

    setErrorPassword('');

    const datosUsuario = {
      nombre: nombre,
      celular: celular,
      vereda: vereda,
      rol: rol,
      password: password // Guardamos la clave de sesión en el frontend
    };
    
    localStorage.setItem('usuario_ruta_rural', JSON.stringify(datosUsuario));
    alRegistrar();
  };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '16px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)', maxWidth: '420px', width: '100%' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <span style={{ fontSize: '40px' }}>📝</span>
          <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b', margin: '12px 0 4px 0' }}>Crea tu Cuenta</h2>
          <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Únete a la red comunitaria de transporte rural.</p>
        </div>

        {errorPassword && (
          <div style={{ backgroundColor: '#fef2f2', color: '#ef4444', padding: '10px', borderRadius: '8px', marginBottom: '16px', fontSize: '13px', fontWeight: '600', border: '1px solid #fecaca' }}>
            {errorPassword}
          </div>
        )}

        <form onSubmit={manejarEnvio} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>👤 Nombre Completo</label>
            <input type="text" name="nombre" placeholder="Ej: Carolina Gómez" required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>📞 Número de Celular</label>
            <input type="tel" name="celular" placeholder="Ej: 312 345 6789" required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>🏡 Vereda / Residencia</label>
            <input type="text" name="vereda" placeholder="Ej: Vereda Guatancuy" required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} />
          </div>

          {/* 🚨 NUEVO CAMPO DE CONTRASEÑA SECRETA */}
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>🔒 Contraseña de Acceso</label>
            <input 
              type="password" 
              name="password" 
              placeholder="Crea una clave (Mínimo 4 números o letras)" 
              required 
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} 
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>🎭 ¿Cómo usarás la aplicación?</label>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button type="button" onClick={() => setRol('pasajero')} style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '2px solid', borderColor: rol === 'pasajero' ? '#2563eb' : '#cbd5e1', backgroundColor: rol === 'pasajero' ? '#eff6ff' : '#ffffff', color: rol === 'pasajero' ? '#2563eb' : '#475569', fontWeight: '600', cursor: 'pointer' }}>
                🎒 Pasajero
              </button>
              <button type="button" onClick={() => setRol('conductor')} style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '2px solid', borderColor: rol === 'conductor' ? '#2563eb' : '#cbd5e1', backgroundColor: rol === 'conductor' ? '#eff6ff' : '#ffffff', color: rol === 'conductor' ? '#2563eb' : '#475569', fontWeight: '600', cursor: 'pointer' }}>
                🛻 Conductor
              </button>
            </div>
          </div>

          <button type="submit" style={{ marginTop: '8px', padding: '14px', backgroundColor: '#2563eb', color: '#ffffff', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: 'pointer', boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)' }}>
            Registrarse y Entrar
          </button>
        </form>

      </div>
    </div>
  );
}