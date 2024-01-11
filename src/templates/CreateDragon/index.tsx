import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'

import { ButtonBack } from '@/components/ButtonBack'
import { Header } from '@/components/Header'
import { schemaEdit } from '@/helpers/schemaEdit'
import API from '@/services/api'
import { Container } from '@/styles/Grid'

import * as Style from './style'

export function CreateDragon() {
  const navigate = useNavigate()

  const handleBackPage = () => {
    navigate('/list-dragons')
  }

  const handleCreateDragon = async (value: {
    name: string
    type: string
    histories: string
  }) => {
    try {
      const response = await API.post('/dragon', value)

      navigate('/list-dragons')
      return response
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Header />
      <Container>
        <ButtonBack onClick={handleBackPage} />

        <h2>Criar Dragão</h2>

        <Style.WrapperCreateDragon>
          <Formik
            initialValues={{
              name: '',
              type: '',
              histories: '',
            }}
            validationSchema={schemaEdit}
            onSubmit={(values, { setSubmitting }) => {
              handleCreateDragon(values)
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
                    Criar
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </Style.WrapperCreateDragon>
      </Container>
    </>
  )
}
