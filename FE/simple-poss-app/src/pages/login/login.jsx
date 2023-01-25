import { useRef, useEffect, useState } from "react";
import axios from "axios";

import { Navigate } from 'react-router-dom';


function Login() {

    const [employee, setEmployee] = useState('')
    const [isRedirect, setIsRedirect] = useState(false)

    let username = useRef()
    let password = useRef()

    

    let onLogin = async() => {
        try {
            let inputUsername = username.current.value
            let inputPassword = password.current.value

            let response = await axios.get(`http://localhost:5020/users/login?username=${inputUsername}&password=${inputPassword}`)

            console.log(response)

            if(response.data.length === 0) throw{message: "Account not found"}


            console.log(response.data.data.token)

            localStorage.setItem('token', `${response.data.data.token}` )

            setEmployee('Login Success')
            
            setTimeout(() => {
              setIsRedirect(true)
            }, 3000)

        } catch (error) {
            console.log(error)
            setEmployee(error)
        }
    }

    if(isRedirect){
        return <Navigate to='/' />
    }

  return (
    <>
      <section class="h-screen">
        <div class="container px-6 py-12 h-full">
          <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
              {/* LEFT */}
            <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                class="w-full"
                alt="Login "
              />
            </div>

            {/* RIGHT */}
            <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
                <div className="text flex justify-center mb-5 my-fs-30 font-bold">
                    Employee login
                </div>
              <form>
                <div class="mb-6">
                  <input
                    type="text"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Username"
                    ref={username}
                  />
                </div>

                <div class="mb-6">
                  <input
                    type="password"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                    ref={password}
                  />
                </div>

                <div className="text-green-500">{employee}</div>
                <button
                  type="button"
                  class="inline-block px-7 py-3 bg-green-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  onClick={() => onLogin()}
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
