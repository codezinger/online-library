const Signup = () => {
    return ( 
        <div className="signup">
            <h3>Sign up</h3>
            <form className="signupform">
                <input type="email" placeholder="Email"></input><br></br><br></br>
                <input type="text" placeholder="Username"></input><br></br><br></br>
                <input type="text" placeholder="Phone"></input><br></br><br></br>
                <input type="password" placeholder="password"></input><br></br><br></br>
                <input type="submit" value="Login"></input>
            </form>
        </div>
     );
}
 
export default Signup;