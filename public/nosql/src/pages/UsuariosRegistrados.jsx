import React, { useState, useEffect } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

const UsuariosRegistrados = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [fotoPerfil, setFotoPerfil] = useState(null);

    useEffect(() => {
        // Hacer la solicitud GET al API para obtener la lista de usuarios
        fetch('http://localhost:4444/api/usuarios')
            .then(response => response.json())
            .then(data => setUsuarios(data))
            .catch(error => console.error(error));
    }, []);

    const handleSubirFoto = (correo, e) => {
        const file = e.target.files[0];
        if (file) {
            setFotoPerfil(file);
        }
    };

    const subirFotoPerfil = (correoDelUsuario) => {
        if (fotoPerfil) {
            const formData = new FormData();
            formData.append('fotoPerfil', fotoPerfil);
            formData.append('correo', correoDelUsuario); // Asegúrate de enviar el correo del usuario al backend

            // Agrega un mensaje de depuración para verificar si la imagen se está enviando correctamente
            console.log('Enviando imagen...');

            fetch('http://localhost:4444/api/subir-foto-perfil', {
                method: 'POST',
                body: formData,
            })
                .then(response => response.json())
                .then(data => {
                    // Agrega un mensaje de depuración para verificar la respuesta del servidor
                    console.log('Respuesta del servidor:', data);
                    console.log('Imagen subida exitosamente:', data.fotoPerfilURL);

                    // Actualizar la lista de usuarios o hacer cualquier otra acción necesaria
                    // Aquí actualizamos la foto de perfil del usuario con la nueva URL de la imagen
                    const usuariosActualizados = usuarios.map(usuario => {
                        if (usuario.correo === correoDelUsuario) {
                            return {
                                ...usuario,
                                fotoPerfil: data.fotoPerfilURL,
                            };
                        } else {
                            return usuario;
                        }
                    });
                    setUsuarios(usuariosActualizados);

                    // Agrega un mensaje de depuración para verificar si la lista de usuarios se actualiza correctamente
                    console.log('Usuarios actualizados:', usuariosActualizados);
                })
                .catch(error => {
                    console.error('Error al subir la imagen de perfil:', error);
                    // Agrega un mensaje de depuración para verificar el error
                    console.error('Error:', error);
                });
        }
    };

    return (
        <div className="vh-100 d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#9de2ff' }}>
            <MDBContainer fluid>
                <MDBRow className="row-cols-1 row-cols-md-3 g-4">
                    {usuarios.map(usuario => (
                        <MDBCol key={usuario.correo}>
                            <MDBCard style={{ borderRadius: '15px' }}>
                                <MDBCardBody className="p-4">
                                    <div className="d-flex text-black">
                                        <div className="flex-shrink-0">
                                            <MDBCardImage
                                                style={{ width: '180px', height: '180px', borderRadius: '10px' }}
                                                src={usuario.fotoPerfil ? `http://localhost:4444/${usuario.fotoPerfil}` : 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'}
                                                alt='Imagen de perfil'
                                                fluid
                                            />
                                            <input
                                                type="file"
                                                accept="image/*"
                                                style={{ display: 'none' }}
                                                onChange={(e) => handleSubirFoto(usuario.correo, e)}
                                            />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <MDBCardTitle>{usuario.nombre} {usuario.apellido}</MDBCardTitle>
                                            <MDBCardText>{usuario.correo}</MDBCardText>

                                            <div className="d-flex justify-content-start rounded-3 p-2 mb-2" style={{ backgroundColor: '#efefef' }}>
                                                <div>
                                                    <p className="small text-muted mb-1">Articles</p>
                                                    <p className="mb-0">41</p>
                                                </div>
                                                <div className="px-3">
                                                    <p className="small text-muted mb-1">Followers</p>
                                                    <p className="mb-0">976</p>
                                                </div>
                                                <div>
                                                    <p className="small text-muted mb-1">Rating</p>
                                                    <p className="mb-0">8.5</p>
                                                </div>
                                            </div>
                                            <div className="d-flex pt-1">
                                            <MDBBtn outline className="me-1 flex-grow-1">
                                                <label htmlFor={`file-input-${usuario.correo}`} className="me-1 flex-grow-1">
                                                    Subir Foto
                                                </label>
                                                </MDBBtn>
                                                <MDBBtn className="flex-grow-1" onClick={() => subirFotoPerfil(usuario.correo)}>
                                                    Actualizar
                                                </MDBBtn>
                                                <input
                                                    id={`file-input-${usuario.correo}`}
                                                    type="file"
                                                    accept="image/*"
                                                    style={{ display: 'none' }}
                                                    onChange={(e) => handleSubirFoto(usuario.correo, e)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    ))}
                </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default UsuariosRegistrados;




