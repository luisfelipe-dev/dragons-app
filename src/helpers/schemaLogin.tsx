import * as Yup from 'yup'

const ERROR = {
  REQUIRED: 'Campo Obrigatório',
}

export const schemaLogin = Yup.object().shape({
  username: Yup.string().required(ERROR.REQUIRED),
})
