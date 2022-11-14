import { props } from 'prop-types'
import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import './contacto.css'


export const ContactoPage = () => {
  const [FormularioEnviado, cambiarFormEnviado] = useState(false);

  return (
    <>
      <div className='form'></div>
      <div className="container-sm mt-5 align-items-center">
        <div className='text-center'>
          <h3>Contáctanos</h3>
          <p>
            Envíenos un mensaje y nos pondremos en contacto con usted lo antes posible. También puede comunicarse con nosotros llamando al teléfono 2222-2222. <br/>¡Esperamos saber de usted!
          </p>
        </div>
        <Formik

          initialValues={{
            nombre: '',
            correo: '',
            mensaje: ''
          }}

          validate={(valores) => {
            let errores = {};

            if (!valores.nombre) {
              errores.nombre = "Por favor ingrese un nombre"
            }

            if (!valores.correo) {
              errores.correo = "Por favor ingrese un correo electronico"
            }

            if (!valores.mensaje) {
              errores.mensaje = "Por favor ingrese un mensaje"
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
                <div className='col align-self-start'>
                  <Field
                    className='w-100 input'
                    type="text"
                    id="nombre"
                    name='nombre'
                    placeholder='Nombre'
                  />
                </div>
                <div className='col align-self-start'>
                  <ErrorMessage name="nombre" component={() => (<span className='error'>{errors.nombre}</span>)} />
                </div>
              </div>

              <div className='row justify-content-center flex-column'>
                <div className='col'>
                  <Field
                    className='w-100 input'
                    type="email"
                    id="correo"
                    name='correo'
                    placeholder='Correo electrónico'
                  />
                </div>
                <div className='col align-self-start'>
                  <ErrorMessage name="correo" component={() => (<span className='error'>{errors.correo}</span>)} />
                </div>
              </div>

              <div className='row justify-content-center flex-column'>
                <div className='col'>
                  <Field
                    name="mensaje"
                    as="textarea"
                    placeholder="Escriba su mensaje"
                    className='w-100 input'
                    rows="3"
                  />
                </div>
                <div className='col align-self-start'>
                  <ErrorMessage name="mensaje" component={() => (<span className='error'>{errors.mensaje}</span>)} />
                </div>
              </div>

              <div className='row justify-content-center flex-column'>
                <div className='col d-flex justify-content-center'>
                  <button
                    type='submit'
                    className='boton-enviar'>
                    Enviar mensaje
                  </button>
                </div>
                <div className='col d-flex justify-content-center mt-2'>
                  {FormularioEnviado && <span className='enviado'>Mensaje enviado con éxito</span>}
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}
