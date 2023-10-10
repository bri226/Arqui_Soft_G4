import React, { useState } from 'react';


const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validar los campos (puedes agregar más validaciones según tus necesidades)
    if (!nombre || !apellido || !email || !password || !confirmPassword) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Enviar la solicitud al servidor
    try {
      const response = await fetch('http://localhost:4444/api/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: nombre,
          apellido: apellido,
          correo: email,
          contraseña: password,
        }),
      });

      if (response.ok) {
        // Registro exitoso, puedes redirigir al usuario a otra página o mostrar un mensaje de éxito
        alert('Registro exitoso!');
        window.location.href = '/';

      } else {
        // Error en el registro, mostrar un mensaje de error al usuario
        alert('Error en el registro. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#B8E6E8' }}>
      <div className="card" style={{ width: '25rem', borderRadius: '1rem' }}>
        <div className="card-body p-4">
          <h2 className="text-center mb-4">Registro</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Confirmar Contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registro;
