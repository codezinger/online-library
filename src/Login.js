const Login = () => {
    return ( 
        <div className="login">
            <h3>Login</h3>
            <form className="loginform">
                <input type="text" placeholder="Username"></input><br></br><br></br>
                <input type="password" placeholder="password"></input><br></br><br></br>
                <input type="submit" value="Login"></input>
            </form>
        </div>
     );
}
 
export default Login;