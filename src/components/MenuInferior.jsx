import React from 'react';

export default function MenuInferior({ pestañaActiva, setPestañaActiva }) {
  // 1. Leemos el rol real del usuario desde la memoria del navegador
  const datosUsuario = JSON.parse(localStorage.getItem('usuario_ruta_rural')) || { rol: 'pasajero' };

  // 2. Creamos los botones básicos que ven todos
  const opciones = [
    { id: 'buscar', etiqueta: 'Buscar', icono: '🔍' }
  ];

  // 3. 🚨 Si el usuario es CONDUCTOR, le agregamos el botón de ofrecer viaje en el medio
  if (datosUsuario.rol === 'conductor') {
    opciones.push({ id: 'publicar', etiqueta: 'Ofrecer Viaje', icono: '➕' });
  }

  // 4. Agregamos el botón final de usuario
  opciones.push({ id: 'perfil', etiqueta: 'Usuario', icono: '👤' });

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#ffffff',
      borderTop: '1px solid #e2e8f0',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '10px 0 14px 0',
      boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.03)',
      zIndex: 1000,
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {opciones.map((opcion) => {
        const activa = pestañaActiva === opcion.id;
        return (
          <button
            key={opcion.id}
            onClick={() => setPestañaActiva(opcion.id)}
            style={{
              background: 'none',
              border: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer',
              color: activa ? '#2563eb' : '#64748b',
              fontWeight: activa ? '600' : '400',
              fontSize: '12px',
              transition: 'color 0.2s',
              width: '33%' // Se adapta el ancho visual al número de botones
            }}
          >
            <span style={{ fontSize: '20px' }}>{opcion.icono}</span>
            {opcion.etiqueta}
          </button>
        );
      })}
    </div>
  );
}