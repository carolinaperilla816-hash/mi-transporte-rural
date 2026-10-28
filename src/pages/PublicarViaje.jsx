import React, { useState } from 'react';

export default function PublicarViaje() {
  const [mensajeExito, setMensajeExito] = useState(false);

  const manejarPublicacion = (e) => {
    e.preventDefault();
    setMensajeExito(true);
    // Ocultar el mensaje de éxito después de 4 segundos
    setTimeout(() => setMensajeExito(false), 4000);
    e.target.reset(); // Limpia los campos del formulario
  };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', padding: '24px 16px', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ backgroundColor: '#ffffff', padding: '28px', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', maxWidth: '440px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <span style={{ fontSize: '32px' }}>📋</span>
          <h3 style={{ margin: '8px 0 4px 0', color: '#1e293b', fontSize: '20px', fontWeight: '700' }}>Publicar Nuevo Viaje</h3>
          <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>Ofrece los cupos disponibles de tu vehículo a la comunidad rural.</p>
        </div>

        {mensajeExito && (
          <div style={{ backgroundColor: '#f0fdf4', color: '#16a34a', padding: '12px', borderRadius: '8px', marginBottom: '16px', fontSize: '14px', fontWeight: '600', textAlign: 'center', border: '1px solid #bbf7d0' }}>
            ✓ ¡Viaje publicado con éxito! Ya está disponible para los pasajeros.
          </div>
        )}

        <form onSubmit={manejarPublicacion} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '4px' }}>📍 Punto de Salida</label>
            <input type="text" placeholder="Ej: Plaza Principal Machetá" required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '4px' }}>🏁 Destino Final / Vereda</label>
            <input type="text" placeholder="Ej: Vereda Guina" required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} />
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '4px' }}>⏰ Hora de Salida</label>
              <input type="time" required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '4px' }}>💺 Cupos Libres</label>
              <input type="number" min="1" max="20" placeholder="Ej: 4" required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '4px' }}>💵 Valor Aporte (COP)</label>
              <input type="text" placeholder="Ej: $5.000" required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '4px' }}>🚘 Tipo de Vehículo</label>
              <input type="text" placeholder="Ej: Camioneta 4x4" required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} />
            </div>
          </div>

          <button type="submit" style={{ marginTop: '8px', padding: '12px', backgroundColor: '#2563eb', color: '#ffffff', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)' }}>
            Publicar Ruta de Transporte
          </button>
        </form>

      </div>
    </div>
  );
}
