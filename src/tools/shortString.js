const shortString = (str) => {
  return str.length > 20
    ? str.substring(0, 19) + '...'
    : str
}

export default shortString
