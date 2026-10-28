import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Rutas from './pages/Rutas';
import Perfil from './pages/Perfil';
import PublicarViaje from './pages/PublicarViaje';
import Registro from './pages/Registro'; // 👈 Importamos la nueva pantalla
import MenuInferior from './components/MenuInferior';

export default function App() {
  const [pestañaActiva, setPestañaActiva] = useState('buscar');
  const [subPantalla, setSubPantalla] = useState('formulario');
  
  // Memoria del estado de login
  const [estaRegistrado, setEstaRegistrado] = useState(false);

  // useEffect comprueba si ya existía un usuario al cargar la página por primera vez
  useEffect(() => {
    const usuario = localStorage.getItem('usuario_ruta_rural');
    if (usuario) {
      setEstaRegistrado(true);
    }
  }, []);

  const renderizarPantallaPrincipal = () => {
    if (pestañaActiva === 'buscar') {
      if (subPantalla === 'formulario') {
        return <Home alBuscar={() => setSubPantalla('resultados')} />;
      }
      return <Rutas alVolver={() => setSubPantalla('formulario')} />;
    }
    
    if (pestañaActiva === 'publicar') {
      return <PublicarViaje />;
    }
    
    if (pestañaActiva === 'perfil') {
      return <Perfil alCerrarSesion={() => setEstaRegistrado(false)} />;
    }
  };

  // 🚨 SI NO ESTÁ REGISTRADO, RENDERIZA ÚNICAMENTE LA PANTALLA DE REGISTRO
  if (!estaRegistrado) {
    return <Registro alRegistrar={() => setEstaRegistrado(true)} />;
  }

  return (
  <div style={{ paddingBottom: '70px', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
    {renderizarPantallaPrincipal()}

    {/* 🚨 Agregamos la propiedad key para forzar la actualización del rol en vivo */}
    <MenuInferior 
      key={estaRegistrado ? 'logueado' : 'visitante'} 
      pestañaActiva={pestañaActiva} 
      setPestañaActiva={(pestaña) => {
        setPestañaActiva(pestaña);
        if (pestaña !== 'buscar') setSubPantalla('formulario');
      }} 
    />
  </div>
); 
}