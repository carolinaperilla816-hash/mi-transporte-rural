import React from 'react';

export default function Home({ alBuscar }) {
  const manejarBusqueda = (e) => {
    e.preventDefault();
    alBuscar();
  };

  return (
    <div style={{ 
      backgroundColor: '#f8fafc', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ 
        backgroundColor: '#ffffff', 
        padding: '32px', 
        borderRadius: '16px', 
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)', 
        maxWidth: '420px', 
        width: '100%' 
      }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <span style={{ fontSize: '40px' }}>🚗</span>
          <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b', margin: '12px 0 8px 0' }}>
            CarroMach
          </h2>
          <p style={{ fontSize: '14px', color: '#64748b', margin: 0, lineHeight: '1.5' }}>
            Viaja acompañado y seguro hacia veredas y cabeceras municipales.
          </p>
        </div>
        
        <form onSubmit={manejarBusqueda} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>
              📍 Origen
            </label>
            <input 
              type="text" 
              placeholder="Ej: Plaza Principal Machetá" 
              required 
              style={{ 
                width: '100%', 
                padding: '12px 16px', 
                borderRadius: '8px', 
                border: '1px solid #cbd5e1', 
                fontSize: '15px',
                outline: 'none',
                boxSizing: 'border-box'
              }} 
            />
          </div>
          
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>
              🏁 Destino 
            </label>
            <input 
              type="text" 
              placeholder="Ej: Vereda Quebrada Honda" 
              required 
              style={{ 
                width: '100%', 
                padding: '12px 16px', 
                borderRadius: '8px', 
                border: '1px solid #cbd5e1', 
                fontSize: '15px',
                outline: 'none',
                boxSizing: 'border-box'
              }} 
            />
          </div>

          <button 
            type="submit" 
            style={{ 
              marginTop: '8px',
              padding: '14px', 
              backgroundColor: '#2563eb', 
              color: '#ffffff', 
              border: 'none', 
              borderRadius: '8px', 
              fontSize: '16px', 
              fontWeight: '600', 
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)'
            }}
          >
            Buscar Viajes Disponibles
          </button>
        </form>
      </div>
    </div>
  );
}