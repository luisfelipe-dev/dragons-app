import * as Yup from 'yup'

const ERROR = {
  REQUIRED: 'Campo Obrigatório',
}

export const schemaEdit = Yup.object().shape({
  name: Yup.string().required(ERROR.REQUIRED),
  type: Yup.string().required(ERROR.REQUIRED),
  histories: Yup.string().required(ERROR.REQUIRED),
})
