const validation = {
  email: {
    presence: {
      message: '^Please enter an email address'
    },
    email: {
      message: '^Please enter a valid email address'
    }
  },
  
  password: {
    presence: {
      message: '^Please enter a password'
    },
    length: {
      minimum: 5,
      message: '^Your password must be at least 5 characters'
    }
  },

  name: {
    presence: {
      message: '^Please enter your name'
    }
  },
  surname: {
    presence: {
      message: '^Please enter your surname'
    },
  }
}

export default validation