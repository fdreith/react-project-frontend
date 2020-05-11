export const updateLoginForm = formData => {
  return {
    type: "UPDATE_LOGIN_FORM",
    formData: formData
  }
}

export const restLoginForm = () => {
  return {
    type: "RESET_LOGIN_FORM"
  }
}