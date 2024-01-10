import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import AnimatedLogo from '@/components/AnimatedLogo'
import { schemaLogin } from '@/helpers/schemaLogin'
import { Container } from '@/styles/Grid'

import * as Style from './style'

const LoginPage = () => {
  const navigate = useNavigate()

  const handleLogin = (value: { username: string }) => {
    const { username } = value

    if (username.toLocaleLowerCase() !== 'banguela') {
      toast.error('Senha incorreta', {
        theme: 'colored',
      })
      return
    }

    localStorage.setItem('@DragonsApp:token', 'banguela')
    toast.success('Login efetuado com sucesso', {
      theme: 'colored',
    })
    navigate('/list-dragons')
  }

  useEffect(() => {
    localStorage.removeItem('@DragonsApp:token')
  }, [])

  return (
    <Container>
      <Style.WrapperLoginPage>
        <div className="login-title">
          <AnimatedLogo />
          <h1>Dragons App</h1>
        </div>

        <div className="login-form">
          <Formik
            initialValues={{ username: '' }}
            validationSchema={schemaLogin}
            onSubmit={handleLogin}
          >
            <Form>
              <Field name="username">
                {({ field, meta }: any) => (
                  <>
                    <label>Username:</label>
                    <input
                      type="text"
                      placeholder="Username"
                      autoComplete="off"
                      className={meta.touched && meta.error ? 'error-id' : null}
                      {...field}
                    />
                  </>
                )}
              </Field>
              <ErrorMessage
                className="error-message"
                name="username"
                component="div"
              />

              <div className="login-form__right">
                <button type="submit">Entrar</button>
              </div>
            </Form>
          </Formik>
        </div>
      </Style.WrapperLoginPage>
    </Container>
  )
}

export default LoginPage
