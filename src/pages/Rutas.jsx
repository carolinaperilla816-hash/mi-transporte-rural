import React, { useState } from 'react';

export default function Rutas({ alVolver }) {
  // Convertimos los datos fijos en un "estado" para poder modificarlos en vivo
  const [viajes, setViajes] = useState([
    { id: 1, conductor: 'Juana Amarillo', vehiculo: 'Camioneta 4x4', hora: '02:00 PM', cupos: 3, precio: '\$5.000', reservado: false },
    { id: 2, conductor: 'Roman Perez', vehiculo: 'Línea Tradicional', hora: '04:30 PM', cupos: 5, precio: '\$4.000', reservado: false },
  ]);

  // Función que maneja la lógica de hacer clic en el botón de reservar
  const manejarReserva = (idAnterior) => {
    setViajes(viajesAnteriores => 
      viajesAnteriores.map((viaje) => {
        if (viaje.id === idAnterior) {
          // Si ya estaba reservado, devolvemos el cupo. Si no, restamos uno.
          const yaReservado = viaje.reservado;
          return {
            ...viaje,
            cupos: yaReservado ? viaje.cupos + 1 : viaje.cupos - 1,
            reservado: !yaReservado
          };
        }
        return viaje;
      })
    );
  };

  return (
    <div style={{ 
      backgroundColor: '#f8fafc', 
      minHeight: '100vh', 
      padding: '24px 16px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <button 
          onClick={alVolver} 
          style={{ 
            color: '#64748b', 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer', 
            fontSize: '15px', 
            fontWeight: '500',
            padding: '8px 0',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          ← Volver a buscar
        </button>
        
        <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b', marginTop: '16px', marginBottom: '20px' }}>
          Viajes disponibles para hoy
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {viajes.map((viaje) => (
            <div 
              key={viaje.id} 
              style={{ 
                backgroundColor: '#ffffff', 
                padding: '20px', 
                borderRadius: '12px', 
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                border: '1px solid #f1f5f9',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: '600', color: '#0f172a' }}>
                    {viaje.conductor}
                  </h4>
                  <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>
                    🚘 {viaje.vehiculo}
                  </p>
                </div>
                <span style={{ 
                  backgroundColor: viaje.cupos === 0 ? '#fee2e2' : '#f0fdf4', 
                  color: viaje.cupos === 0 ? '#ef4444' : '#16a34a', 
                  padding: '4px 10px', 
                  borderRadius: '20px', 
                  fontSize: '13px', 
                  fontWeight: '600' 
                }}>
                  {viaje.cupos === 0 ? 'Lleno' : `${viaje.cupos} cupos`}
                </span>
              </div>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                marginTop: '16px', 
                paddingTop: '16px', 
                borderTop: '1px solid #f1f5f9' 
              }}>
                <div>
                  <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8' }}>Salida</p>
                  <p style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#334155' }}>⏰ {viaje.hora}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8' }}>Aporte</p>
                  <p style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: '#0f172a' }}>{viaje.precio}</p>
                </div>
              </div>

              {/* Botón dinámico que cambia de diseño y acción según el estado */}
              <button 
                onClick={() => manejarReserva(viaje.id)}
                disabled={viaje.cupos === 0 && !viaje.reservado}
                style={{ 
                  marginTop: '16px', 
                  width: '100%',
                  padding: '12px', 
                  backgroundColor: viaje.reservado ? '#64748b' : (viaje.cupos === 0 ? '#cbd5e1' : '#16a34a'), 
                  color: '#ffffff', 
                  border: 'none', 
                  borderRadius: '8px', 
                  fontWeight: '600',
                  fontSize: '15px',
                  cursor: viaje.cupos === 0 && !viaje.reservado ? 'not-allowed' : 'pointer',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
                }}
              >
                {viaje.reservado ? '✓ ¡Puesto Reservado! (Cancelar)' : (viaje.cupos === 0 ? 'Sin cupos disponibles' : 'Reservar Puesto')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}