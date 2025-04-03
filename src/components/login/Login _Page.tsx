// import { useState } from "react";
// import { useFormState } from 'react-dom'
// import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";
// import Register from "./Register";

function Login_Page() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    console.log("---------------login submit-----------");
    if (!email || !password) {
      console.log("no email and password found");
      return;
    }

    const loginData: any = {
      email: email || "",
      password: password || "",
    };

    localStorage.setItem("login_crendentials", JSON.stringify(loginData));

    const data = JSON.parse(localStorage.getItems("login_crendentials") || "{}");

    console.log(data.email, data.Password);}

    // alert("login successfully");
    // alert(data);
    // };

    // const handleSubmit = () => {
    //   console.log("---login submit---");

    //   if (!email || !password) {
    //     console.log("Email aur password required hai");
    //     return;
    //   }

    //   const loginData = {
    //     email: email || "",
    //     password: password || "",
    //   };

    //   try {
    //     localStorage.setItem("login_credentials", JSON.stringify(loginData));
    //     const data = JSON.parse(
    //       localStorage.getItem("login_credentials") || "{}"
    //     );
    //     console.log("Stored data:", data);
    //     alert("Login successful!\n" + JSON.stringify(data, null, 2));
    //   } catch (error) {
    //     console.error("LocalStorage error:", error);
    //     // alert("Login failed! Console check karo.");
    //   }
    // };

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
