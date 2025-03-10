import { useState } from "react";
import Header from "./Header";
const Login = () => {
    const [isSignInForm , setIsSignInForm] = useState(true);
    

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return  <div>
        <Header/>

        <div className="absolute">
            <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_small.jpg"
            alt = "background"/>

        </div>
        <form className="w-3/12 absolute p-10 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
            <h1 className="font-bold text-3xl py-4 ml-4">{isSignInForm ? "Sign in" : "Sign Up"}  </h1>
            {!isSignInForm &&(<input type="text"
             placeholder="Full Name"
             className="p-4 m-4 w-full bg-gray-700"/>)}
             
            <input type="text"
             placeholder="Email or phone number"
             className="p-4 m-4 w-full bg-gray-700"/>

            <input tpye="password"
             placeholder = "Password"
             className="p-4 m-4 w-full bg-gray-700"/>

            <button className="p-4 m-4 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign in" : "Sign Up"}</button>
            <p className="py-2 ml-6 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already a user :) Sing In "}</p>
        </form>
    </div>;

    
};

export default Login;
