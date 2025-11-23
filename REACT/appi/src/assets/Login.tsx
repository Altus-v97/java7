import "./Login.css"; 


const LoginScreen = ({onLogin }: { onLogin: () => void }) => {
const handleLoginClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault(); // CRITICAL: Stops the form from refreshing the page
  onLogin(); // Sets isAuthenticated to true in the parent
};

  
    return (
      <div className="login-container">
        <h2 className="login-title">Iniciar Sesión</h2>
        <div className="login-panel">

          
          <form action="Login">
            <div>
              {" "}
              <p>
                Usuario: <br />
                <input
                  type="text"
                  className="form-control-lg"
                  id="exampleInputUsuario1"
                  placeholder="Usuario"
                ></input>
              </p>
            </div>
            <div>
              <p>
                Contraseña: <br />
                <input
                  type="password"
                  className="form-control-lg"
                  id="exampleInputPassword1"
                  placeholder="Contraseña"
                ></input>
              </p>
            </div>
          </form>
          <div>
            <button
              className="btn btn-primary btn-lg"
              onClick={handleLoginClick}
            >
              Log in
            </button>
          </div>{" "}
          <br />
          <div>
            <button className="btn btn-primary btn-lg">Registrarse</button>
          </div>{" "}
          <br />
          <div>
            <button className="btn btn-primary btn-lg   ">
              Olvidé mi contraseña
            </button>{" "}
          </div>{" "}
          <br />
          <div>
            <button
              className="btn btn-success btn-lg"
              onClick={handleLoginClick}
            >
              Jugar como invitado
            </button>{" "}
          </div>{" "}
          <br />
        </div>
      </div>
    );
};






        export default LoginScreen;