function valid(name: string, email: string, password: string) {
  if (!name || !email || !password) {
    return 'Please add all fiedl.';
  }

  if (!validateEmail(email)) return 'Invalid email';
}

function validateEmail(email: string) {
  // const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.)))

  return true;
}
