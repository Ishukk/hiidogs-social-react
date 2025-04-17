// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login_Page() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleEmail = (e: any) => {
//     setEmail(e.target.value);
//   };

//   const handlePassword = (e: any) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault(); // Prevent form submission

//     console.log("---------------login submit-----------");

//     if (!email || !password) {
//       console.log("no email and password found");
//       return;
//     }

//     const registerData = JSON.parse(localStorage.getItem("local_credential") || "{}");


//     if(registerData.email === email && registerData.password === password){
//       console.log("login successfull")
//       // Navigate("/home")

//       const loginSession = {
//         email: email|| "",
//         password: password || "",
//       }

//       localStorage.setItem("local_credentials", JSON.stringify(loginSession))
//       console.log("login session", loginSession)
//       navigate("/dashboard")
//     }

//   };



import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login_Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate(); // useNavigate hook for redirection

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault(); // Prevent form submission

    console.log("---------------login submit-----------");

    if (!email || !password) {
      setError("Please enter both email and password!");
      console.log("no email and password found");
      return;
    }

    // Retrieve registered user data from localStorage
    const registerData = JSON.parse(
      localStorage.getItem("local_credential") || "{}"
    );

    // Check if the entered email and password match the registered data
    if (
      registerData.email === email &&
      registerData.password === password
    ) {
      console.log("login successful!");

      // Save login session in localStorage
      const loginSession = {
        email: email,
        isLoggedIn: true,
      };
      localStorage.setItem("login_session", JSON.stringify(loginSession));

      // Redirect to dashboard
      navigate("/dashboard");
    } else {
      setError("Invalid email or password!");
      console.log("Invalid email or password");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto bg-yellow-400">
          <div className="text-center font-medium text-xl">login</div>

          <div className="text-3xl font-bold text-gray-950 text-center">
            USER
          </div>
          <div className="max-w-md-full mx-auto mt-4 bg-white p-8 border border-gray-300">
            <form action="" className="space-6">
              <div>
                <label
                  htmlFor=""
                  className="text-sm font-bold text-gray-600 block"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 eounded mt-2"
                  onChange={(e) => handleEmail(e)}
                ></input>
              </div>
              <div className="mt-9">
                <label
                  htmlFor=""
                  className="text-sm font-bold text-gray-600 block"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 eounded mt-2"
                  onChange={(e) => handlePassword(e)}
                ></input>
              </div>

              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-300 rounded"
                  ></input>
                  <label htmlFor="" className="ml-2 text-sm text-gray-600">
                    Remember me
                  </label>
                </div>
              </div>
              <div className="my-3">
                <a href="" className="font-medium text-sm text-blue-500">
                  Forget Password
                </a>
              </div>
              <div>
              {error && (
                <div className="text-red-500 text-sm mt-2">
                  {error}
                </div>
              )}{error && (
                <div className="text-red-500 text-sm mt-2">
                  {error}
                </div>
              )}
                <button
                  className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
              <div>
                <p className="flex justify-center ">
                  Create a new account{" "}
                  <a href="/register" className="text-blue-500 px-3">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login_Page;
