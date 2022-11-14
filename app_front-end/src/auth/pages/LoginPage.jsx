import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import './login.css'

export const LoginPage = () => {
  const [FormularioEnviado, cambiarFormEnviado] = useState(false);
  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/', {
      replace: true
    });
  }

  return (
    <>
      <div className='form'></div>
      <div className="container-sm contenedor-login mt-5 align-items-center ">
        <div className='row'>
          <div className='col col-login d-flex flex-column justify-content-center'>
            <div className='text-center'>
              <h2 className='mb-5'>Bienvenido</h2>
            </div>
            <Formik

              initialValues={{
                pass: '',
                correo: '',
                mensaje: ''
              }}

              validate={(valores) => {
                let errores = {};

                if (!valores.pass) {
                  errores.pass = "Por favor ingrese su contraseña"
                }

                if (!valores.correo) {
                  errores.correo = "Por favor ingrese un correo electronico"
                }

                return errores;
              }}

              onSubmit={(valores, { resetForm }) => {
                console.log(valores)
                resetForm();
                cambiarFormEnviado(true);
                setTimeout(() => cambiarFormEnviado(false), 5000);
              }}
            >
              {({ errors }) => (
                <Form className='align-items-center'>

                  <div className='row justify-content-center flex-column'>
                    <div className='col'>
                    <label className='label-input' htmlFor='correo'>Correo electrónico</label>
                      <Field
                        className='w-100 input-login effect-18'
                        type="email"
                        id="correo"
                        name='correo'
                        placeholder='ejemplo@gmail.com'
                      />
                    </div>
                    <div className='col align-self-start'>
                      <ErrorMessage name="correo" component={() => (<span className='error'>{errors.correo}</span>)} />
                    </div>
                  </div>

                  <div className='row justify-content-center flex-column'>
                    <div className='col'>
                    <label className='label-input' htmlFor='pass'>Contraseña</label>
                      <Field
                        className='w-100 input-login'
                        type="password"
                        id="pass"
                        name='pass'
                        placeholder='Password.Z234'
                      />
                    </div>
                    <div className='col align-self-start'>
                      <ErrorMessage name="pass" component={() => (<span className='error'>{errors.pass}</span>)} />
                    </div>
                  </div>

                  <div className='row justify-content-center flex-column'>
                    <div className='col d-flex justify-content-center'>
                      <button
                        type='submit'
                        className='boton-enviar'>
                        Iniciar sesión
                      </button>
                    </div>
                  </div>
                </Form>

              )}
            </Formik>
            <div className='row justify-content-center flex-column'>
              <div className='col d-flex justify-content-center'>
                <p className='mt-3 mb-0'>
                  Aún no tienes una cuenta?
                </p>

              </div>
              <div className='col d-flex justify-content-center'>
                <a href=''>
                  Crear cuenta
                </a>
              </div>
            </div>
          </div>

          <div className='col d-none d-lg-block p-0'>
            <img className='img-login' src='src/assets/Images/login-image.svg'></img>
          </div>
        </div>
      </div>
    </>
  )
}
