import { useState } from "react";

// interface FormData {
//   name: string;
//   lastName: string;
//   mobile: string;
//   email: string;
//   password: string;
// }

function Register() {
  const [name, setName] = useState(" ");
  const [last, setLast] = useState(" ");
  const [mobile, setMobile] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setpassword] = useState(" ");

  function handleName(e: any) {
    setName(e.target.value);
  }
  function handleLastName(e: any) {
    setLast(e.target.value);
  }
  function handleMobile(e: any) {
    setMobile(e.target.value);
  }
  function handleEmail(e: any) {
    setEmail(e.target.value);
  }
  function handlePassword(e: any) {
    setpassword(e.target.value);
  }

  function onSubmmit() {
    console.log("--------------login submit-----------");
    if (!name || !last || !mobile || !email || !password) {
      console.log("every section is mendetory ");
      return;
    }

    const loginData = {
      name: name || "",
      last: last || "",
      mobile: mobile || "",
      email: email || "",
      password: password || "",
    };

    try {
      //data save
      localStorage.setItem("Local_creadetital", JSON.stringify(loginData));

      // Retriver data
      const getData = JSON.parse(
        localStorage.getItem("logic successfully") || "{}"
      );
      console.log("store data", getData);

      // alert("successfull\n"+ JSON.stringify(getData,null,2))
    } catch (error) {
      console.log("localStorage", error);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto bg-yellow-400">
        <div className="text-center font-medium text-xl">New Account</div>
        <div className="text-3xl font-bold text-gray-950 text-center">
          Register
        </div>
        <div className="max-w-md-full mx-auto mt-4 bg-white p-8 border border-gray-300">
          <form action="" className="space-6">
            <div>
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block"
              >
                Name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 eounded mt-2"
                onChange={(e) => handleName(e)}
                // value={name}
              ></input>
            </div>

            <div className="mt-5">
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block"
              >
                Last name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 eounded mt-2"
                onChange={(e) => handleLastName(e)}
              ></input>
            </div>

            <div className="mt-5">
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block"
              >
                Mobile no
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 eounded mt-2"
                onChange={(e) => handleMobile(e)}
              ></input>
            </div>

            <div className="mt-5">
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

            <div className="mt-5">
              <button
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm"
                onClick={onSubmmit}
              >
                Submit
              </button>
              <div className="mt-3">
                <p className="flex justify-center ">
                  Already you have a account{" "}
                  <a href="/login" className="text-blue-500 px-3">
                    login
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
