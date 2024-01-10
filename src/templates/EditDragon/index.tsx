import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { ButtonBack } from '@/components/ButtonBack'
import { Header } from '@/components/Header'
import { LoadingDragon } from '@/components/LoadingDragon'
import { schemaEdit } from '@/helpers/schemaEdit'
import API from '@/services/api'
import { Container } from '@/styles/Grid'
import { EditDragonProps } from '@/types/edit-dragon'

import * as Style from './style'

export function EditDragon() {
  const [loading, setLoading] = useState(true)
  const [infosDragon, setInfosDragon] = useState<EditDragonProps>({
    name: '',
    type: '',
    histories: [],
    id: '',
  })

  const routeParams = useParams()
  const navigate = useNavigate()

  const handleBackPage = () => {
    navigate('/list-dragons')
  }

  const handleEditDragon = async (values: EditDragonProps) => {
    try {
      await API.put(`/dragon/${values.id}`, values)
      navigate('/list-dragons')
    } catch (err) {
      console.log(err)
    }
  }

  const getInfosDragon = async (id: string | undefined) => {
    try {
      const response = await API.get(`/dragon/${id}`)
      const { data } = response

      if (Array.isArray(data.histories)) {
        const modifiedData = { ...data, histories: '' }

        setInfosDragon(modifiedData)
      } else {
        setInfosDragon(data)
      }

      setTimeout(() => {
        setLoading(false)
      }, 1000)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const { id } = routeParams

    getInfosDragon(id)
  }, [routeParams])

  return (
    <>
      <Header />
      <Container>
        <ButtonBack onClick={handleBackPage} />

        {loading ? (
          <LoadingDragon />
        ) : (
          <>
            <h2>Editar Dragão</h2>

            <Style.WrapperEditDragon>
              <Formik
                initialValues={infosDragon}
                validationSchema={schemaEdit}
                onSubmit={(values, { setSubmitting }) => {
                  handleEditDragon(values)
                  setTimeout(() => {
                    setSubmitting(false)
                  }, 400)
                }}
                enableReinitialize
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="form-div">
                      <Field name="name">
                        {({ field, meta }: any) => (
                          <>
                            <label htmlFor="name">Nome:</label>
                            <input
                              type="text"
                              placeholder="Nome"
                              autoComplete="off"
                              className={
                                meta.touched && meta.error ? 'error-id' : null
                              }
                              {...field}
                            />
                          </>
                        )}
                      </Field>
                      <ErrorMessage
                        className="error-message"
                        name="name"
                        component="div"
                      />
                    </div>
                    <div className="form-div">
                      <Field name="type">
                        {({ field, meta }: any) => (
                          <>
                            <label htmlFor="type">Tipo:</label>
                            <input
                              type="text"
                              placeholder="Tipo"
                              autoComplete="off"
                              className={
                                meta.touched && meta.error ? 'error-id' : null
                              }
                              {...field}
                            />
                          </>
                        )}
                      </Field>
                      <ErrorMessage
                        className="error-message"
                        name="type"
                        component="div"
                      />
                    </div>
                    <div className="form-div">
                      <Field name="histories">
                        {({ field, meta }: any) => (
                          <>
                            <label htmlFor="histories">História:</label>
                            <input
                              type="text"
                              placeholder="História"
                              autoComplete="off"
                              className={
                                meta.touched && meta.error ? 'error-id' : null
                              }
                              {...field}
                            />
                          </>
                        )}
                      </Field>
                      <ErrorMessage
                        className="error-message"
                        name="histories"
                        component="div"
                      />
                    </div>

                    <div className="login-form__right">
                      <button type="submit" disabled={isSubmitting}>
                        Editar
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </Style.WrapperEditDragon>
          </>
        )}
      </Container>
    </>
  )
}
