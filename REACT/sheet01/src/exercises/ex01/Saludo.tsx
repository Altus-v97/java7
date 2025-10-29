import React from 'react';

interface SaludoProps {
    nombre: string;
}

const Saludo: React.FC<SaludoProps> = ({ nombre }) => (

    <h2>Hola, {nombre}!</h2>
);

export default Saludo;