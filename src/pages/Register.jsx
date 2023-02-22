

const Register = () => {
  return (
    <div className="formContainer">
      <div className="form-wrapper">
        <span className="Logo">Lama Chat</span>
        <span className="title">Register</span>
        <form action="">
          <input type="text" placeholder="Display Name"/>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password"/>
          <button>Sign Up</button>
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  )
}

export default Register