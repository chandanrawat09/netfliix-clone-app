export  const checkValidData = (  email, password) => {

//const isFullnameValid = /^[a-zA-Z ]{2,30}$/.test(fullname);
const isEmailValid = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

//if(!isFullnameValid) return "Please enter a valid name";
if(!isEmailValid) return "Please enter a valid email address";
if(!isPasswordValid) return " Password is not valid";

return null;
};  