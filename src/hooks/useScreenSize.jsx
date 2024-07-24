import { useState, useEffect } from 'react';

const useScreenSize = () => {
  // Define el estado inicial basado en el tamaño de la ventana actual
  const [isLarge, setIsLarge] = useState(window.innerWidth > 768);

  useEffect(() => {
	// Función para actualizar el estado basado en el tamaño de la ventana
	const handleResize = () => {
	  setIsLarge(window.innerWidth > 768);
	};

	// Añade el event listener
	window.addEventListener('resize', handleResize);

	// Limpieza al desmontar el componente
	return () => window.removeEventListener('resize', handleResize);
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar

  return isLarge;
};

export default useScreenSize;