import validation from './validation';
const validatejs = require('validate.js');

export default function validate(fieldName, value) {
  const formValues = {}
  formValues[fieldName] = value

  const formFields = {}
  formFields[fieldName] = validation[fieldName]

  const result = validatejs(formValues, formFields)

  if (result) {
    return result[fieldName][0]
  }

  return null
}