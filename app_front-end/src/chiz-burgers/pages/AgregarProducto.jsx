import React from 'react'
import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import './agregarProducto.css'
import { createProduct } from '../helpers/createProduct'

export const AgregarProducto = () => {
  const [FormularioEnviado, cambiarFormEnviado] = useState(false);

  const submitData = (values) => {
    createProduct(values);
  }

  return (
    <>
      <div className='form'></div>
      <div className="container-sm contenedor-contacto mt-5 align-items-center">
        <div className='text-center'>
          <h3>Agregar nuevo producto</h3>
        </div>
        <Formik

          initialValues={{
            name: '',
            price: '',
            type: '',
            calories: '',
            imagen: null,
            ingredientes: ['']
          }}

          validate={(valores) => {
            let errores = {};

            if (!valores.name) {
              errores.name = "Por favor ingrese un nombre"
            }

            // if (!valores.correo) {
            //   errores.correo = "Por favor ingrese un correo electronico"
            // }

            // if (!valores.mensaje) {
            //   errores.mensaje = "Por favor ingrese un mensaje"
            // }

            return errores;
          }}

          onSubmit={(valores, { resetForm }) => {
            console.log(valores);
            submitData(valores);
            resetForm();
            cambiarFormEnviado(true);
            setTimeout(() => cambiarFormEnviado(false), 5000);
          }}
        >
          {({ errors, setFieldValue, values }) => (
            <>
              <div className='row'>
                <div className='col'>
                  <Form className='align-items-center'>

                    <div className='row justify-content-center flex-column'>
                      <div className='col align-self-start'>
                      <p>Nombre:</p>
                        <Field
                          className='w-100 input-image'
                          type="text"
                          id="name"
                          name='name'
                          placeholder='Nombre'
                        />
                      </div>
                      <div className='col align-self-start'>
                        <ErrorMessage name="name" component={() => (<span className='error'>{errors.name}</span>)} />
                      </div>
                    </div>

                    <div className='row justify-content-center flex-column'>
                      <div className='col'>
                      <p>Tipo:</p>
                        <Field
                          className='w-100 input-image'
                          type="text"
                          id="type"
                          name='type'
                          placeholder='Tipo de producto'
                        />
                      </div>
                      <div className='col align-self-start'>
                        <ErrorMessage name="nombre" component={() => (<span className='error'>{errors.name}</span>)} />
                      </div>
                    </div>

                    <div className='row justify-content-center flex-column'>
                      <div className='col align-self-start'>
                      <p>Precio:</p>
                        <Field
                          className='w-100 input-image'
                          type="number"
                          id="price"
                          name='price'
                          placeholder='Precio'
                        />
                      </div>
                      <div className='col align-self-start'>
                        <ErrorMessage name="nombre" component={() => (<span className='error'>{errors.name}</span>)} />
                      </div>
                    </div>

                    <div className='row justify-content-center flex-column'>
                      <div className='col align-self-start'>
                      <p>Calorias:</p>
                        <Field
                          className='w-100 input-image'
                          type="number"
                          id="calories"
                          name='calories'
                          placeholder='Calorias'
                        />
                      </div>
                      <div className='col align-self-start'>
                        <ErrorMessage name="nombre" component={() => (<span className='error'>{errors.name}</span>)} />
                      </div>
                    </div>

                    <div className='row justify-content-center flex-column'>
                      <div className='col align-self-start'>
                        <p>
                          Ingredientes:
                        </p>
                        <FieldArray
                          id="ingredientes"
                          name='ingredientes'>
                          {fieldArrayPROPS => {
                            const { push, remove, form } = fieldArrayPROPS
                            const { values } = form
                            const { ingredientes } = values
                            return (
                              <div>
                                {ingredientes.map((ingrediente, index) => (
                                  <div key={index}>
                                    <div className='row justify-content-center flex-column'>
                                      <div className='col'>
                                        <Field
                                          className='input-image'
                                          type="text"
                                          name={`ingredientes[${index}]`}
                                          placeholder='ingrediente'
                                        />
                                        <button className='button-ingredient-add' type='button' onClick={() => push('')}> {' '}
                                          +{' '} </button>
                                          {index > 0 &&
                                          <button className='button-ingredient-delete' type='button' onClick={() => remove(index)}>
                                            {' '}
                                            -{' '}
                                          </button>
                                        }
                                      </div>
                                      <div className='col align-self-start'>
                                        <ErrorMessage name="nombre" component={() => (<span className='error'>{errors.name}</span>)} />
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )
                          }}
                        </FieldArray>
                      </div>
                      <div className='col align-self-start'>
                        <ErrorMessage name="nombre" component={() => (<span className='error'>{errors.name}</span>)} />
                      </div>
                    </div>


                    <div className='row justify-content-center flex-column'>
                      <div className='col align-self-start'>
                        <p>
                          Agregar imagen:
                        </p>
                        <input
                          className='w-100 input-image'
                          type="file"
                          id="imagen"
                          name='imagen'
                          value={undefined}
                          onChange={event => {
                            const file = event.currentTarget.files[0];
                            const reader = new FileReader();
                            reader.readAsDataURL(file);
                            reader.onload = () => {
                              setFieldValue('imagen', reader.result);
                            }
                          }}
                        />
                      </div>
                      <div className='col align-self-start'>
                        <ErrorMessage name="nombre" component={() => (<span className='error'>{errors.name}</span>)} />
                      </div>
                    </div>

                    <div className='row justify-content-center flex-column'>
                      <div className='col d-flex justify-content-center'>
                        <button
                          type='submit'
                          className='boton-enviar'>
                          Crear producto
                        </button>
                      </div>

                      <div className='col d-flex justify-content-center mt-2'>
                        {FormularioEnviado && <span className='enviado'>Producto creado con éxito</span>}
                      </div>
                    </div>
                  </Form>
                </div>
                <div className='col'>
                {values.imagen &&
                      <img src={values.imagen} className="card-img-producto col d-flex justify-content-start" alt={values.name} />
                } 
                </div>
              </div>
            </>
          )}
        </Formik>
      </div>
    </>
  )
}