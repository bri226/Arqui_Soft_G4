import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch('http://localhost:4444/api/login', { // Corregido el puerto en la URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo: email, contraseña: password }), // Corregido el formato del cuerpo de la solicitud
      });
      const data = await resp.json();
      if (resp.ok) {
        // Ingreso exitoso, redireccionar a la página de TEST
        alert('¡Ingreso exitoso!');
        localStorage.setItem('Usuario_correo', email);
        window.location.href = '/usuariosregistrados'; // Redirigir a la ruta '/TEST'
      } else {
        // Usuario no existe o contraseña incorrecta, mostrar error
        alert('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      // Error al realizar la solicitud
      setError(true);
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: '#B8E6E8' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem' }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: '1rem 0 0 1rem' }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">

                    <form onSubmit={handleSubmit}>

                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3" style={{ color: 'black' }}></i>
                        <span className="h1 fw-bold mb-0">BookSwap</span>
                      </div>

                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example17">Email address</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example27">Password</label>
                      </div>

                      <button className="btn btn-dark btn-lg btn-block" type="submit" style={{ backgroundColor: '#B8E6E8' }}>
                        Login
                      </button>

                      <a className="small text-muted" href="#!">Forgot password?</a>
                      <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="Registro"
                        style={{ color: '#393f81' }}>Register here</a></p>
                      <a href="#!" className="small text-muted">Terms of use.</a>
                      <a href="#!" className="small text-muted">Privacy policy</a>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {error && <div className="error-message">Error: Usuario o contraseña incorrectos</div>}
    </section>
  );
};

export default Login;

