import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Test = () => {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(null);
  const [show, setShow] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    correo: ''
  });

  const handleClose = () => {
    setShow(false);
    setShowEditModal(false);
    setFormData({
      nombre: '',
      apellido: '',
      edad: '',
      correo: ''
    }); // Limpiar el formulario al cerrar el modal
  };

  const handleShow = () => setShow(true);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4444/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEditModalOpen = (user) => {
    setUserId(user.id);
    setFormData({
      nombre: user.nombre,
      apellido: user.apellido,
      edad: user.edad,
      correo: user.correo
    });
    setShowEditModal(true);
  };

  const handleEditClick = async () => {
    if (!userId) {
      console.error('Invalid user ID:', userId);
      // Lógica adicional si el ID de usuario no es válido
      return;
    }
    
  
    try {
      const requestData = {
        id: userId,
        nombre: formData.nombre,
        apellido: formData.apellido,
        edad: formData.edad,
        correo: formData.correo
      };
  
      const response = await fetch(`http://localhost:4444/api/editar/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      });
  
      if (response.ok) {
        fetchData(); // Actualizar datos después de editar
        setShowEditModal(false); // Cerrar el modal de edición
      } else {
        console.error('Error editing user:', response.statusText);
      }
    } catch (error) {
      console.error('Error editing user:', error);
    }
  };

  const handleDeleteClick = async (userId) => {
    try {
      const response = await fetch(`http://localhost:4444/api/eliminar?id=${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        fetchData();
      } else {
        console.error('Error deleting user:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4444/api/agregar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        fetchData();
        handleClose();
      } else {
        console.error('Error adding user:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div className="container mt-5">
       <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div className="row">
          <div className="col-sm-3 mt-5 mb-4 text-gred">
            <div className="search">
              <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Buscar Alumno" aria-label="Search" />
              </form>
            </div>
          </div>
          <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{ color: "green" }}>
            <h2><b>Detalles de alumno</b></h2>
          </div>
          <div className="col-sm-3 offset-sm-1 mt-5 mb-4 text-gred">
            <Button variant="primary" onClick={handleShow}>
              Agregar Nuevo Alumno
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Edad</th>
                  <th>Correo</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.nombre}</td>
                    <td>{user.apellido}</td>
                    <td>{user.edad}</td>
                    <td>{user.correo}</td>
                    <td>
                      <a href="#" className="view" title="Ver" data-toggle="tooltip" style={{ color: "#10ab80" }}>
                        <i className="material-icons">&#xE417;</i>
                      </a>
                      <a
                        href="#"
                        className="edit"
                        title="Editar"
                        data-toggle="tooltip"
                        onClick={() => {
                          handleEditModalOpen(user)
                          setUserId(user.id); // Establecer userId antes de abrir el modal de edición
                          setShowEditModal(true);
                        }}
                      >
                        <i className="material-icons">&#xE254;</i>
                      </a>
                      <a
                        href="#"
                        className="delete"
                        title="Eliminar"
                        data-toggle="tooltip"
                        style={{ color: "red" }}
                        onClick={() => handleDeleteClick(user.id)}
                      >
                        <i className="material-icons">&#xE872;</i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
  <Modal.Header closeButton>
    <Modal.Title>Agregar Registro</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Ingresa Nombre"
          value={formData.nombre}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Ingresa Apellido"
          value={formData.apellido}
          onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Ingresa Edad"
          value={formData.edad}
          onChange={(e) => setFormData({ ...formData, edad: e.target.value })}
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Ingresa Correo"
          value={formData.correo}
          onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
        />
      </div>
      <button type="submit" className="btn btn-success mt-4">
        Agregar
      </button>
    </form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Cerrar
    </Button>
  </Modal.Footer>
</Modal>

<Modal show={showEditModal} onHide={handleClose} backdrop="static" keyboard={false}>
  <Modal.Header closeButton>
    <Modal.Title>Editar Registro</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <form onSubmit={(e) => {
      e.preventDefault();
      handleEditClick();
    }}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Ingresa Nombre"
          value={formData.nombre}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Ingresa Apellido"
          value={formData.apellido}
          onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Ingresa Edad"
          value={formData.edad}
          onChange={(e) => setFormData({ ...formData, edad: e.target.value })}
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Ingresa Correo"
          value={formData.correo}
          onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
        />
      </div>
      <button type="submit" className="btn btn-success mt-4">
        Guardar Cambios
      </button>
    </form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Cerrar
    </Button>
  </Modal.Footer>
</Modal>
    </div>
  );
};

export default Test;




