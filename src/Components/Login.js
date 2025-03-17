import { useState,useRef } from "react";
import Header from "./Header";
import{checkValidData} from "../utils/validate.js";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/Firebase.js";
const Login = () => {
    const [isSignInForm , setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    //const fullname = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        //Validation of form data
        //checkValidData("email", "password");

        

        const message = checkValidData( email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        if(!isSignInForm) {
            createUserWithEmailAndPassword(
                auth,
             email.current.value,
             password.current.value
            )
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              console.log(user)
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorMessage + " " + errorCode);
            }); 
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage + " " + errorCode);
  });
           
        }

    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
    return  <div>
        <Header/>

        <div className="absolute">
            <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_small.jpg"
            alt = "background"/>

        </div>
        <form 
         onSubmit={(e) => e.preventDefault()}className="w-3/12 absolute p-10 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
            <h1 className="font-bold text-3xl py-4 ml-4">{isSignInForm ? "Sign in" : "Sign Up"}  </h1>

            {!isSignInForm &&
            (<input
            
             type="text"
             placeholder="Full Name"
             className="p-4 m-4 w-full bg-gray-700"/>)}
             
            <input
            ref={email}
            type="text"
             placeholder="Email or phone number"
             className="p-4 m-4 w-full bg-gray-700"/>

            <input
            ref={password}
            tpye="password"
             placeholder = "Password"
             className="p-4 m-4 w-full bg-gray-700"/>

             <p className="text-red-500 ml-4 font-bold py-2">{errorMessage}</p>

            <button className="p-4 m-4 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm ? "Sign in" : "Sign Up"}</button>
            <p className="py-2 ml-6 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already a user :) Sing In "}</p>
        </form>
    </div>;

    
};

export default Login;
