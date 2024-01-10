import { ErrorMessage, Field, Form, Formik } from 'formik'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import AnimatedLogo from '@/components/AnimatedLogo'
import { Container } from '@/styles/Grid'

import * as Style from './style'

const LoginPage = () => {
  // const [username, setUsername] = useState('')

  const handleLogin = (value: { username: string }) => {
    const { username } = value

    if (username !== 'banguela') {
      toast.error('Senha incorreta', {
        theme: 'colored',
      })
    }
  }

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
            validationSchema={Yup.object({
              username: Yup.string().required('Campo Obrigatório'),
            })}
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
                <button type="submit">Submit</button>
              </div>
            </Form>
          </Formik>
        </div>
      </Style.WrapperLoginPage>
    </Container>
  )
}

export default LoginPage
