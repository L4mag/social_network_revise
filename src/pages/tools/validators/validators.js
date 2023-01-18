export const required = (fieldName) => (value) => {
  const errors = {}
  if (!value) {
    return `${fieldName}` + ` is required`
  }
}
