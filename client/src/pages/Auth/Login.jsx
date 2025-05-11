import Auth_image from "../../assets/Auth_image.png";
import company_logo from "../../assets/company_logo.png";

const Login = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="w-6/12 h-full">
        <img src={Auth_image} className="h-full w-full" alt="Auth_image" />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white relative">
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            background: " linear-gradient(135deg, #f3e5d4 0%, #ffffff 100%)",
          }}
        >
          <div className="absolute top-0 left-0 w-24 h-24 bg-red-400 rounded-full opacity-60 transform -translate-x-12 -translate-y-12"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-300 rounded-full opacity-40 transform translate-x-16 translate-y-16"></div>
        </div>

        <div className="w-full max-w-md px-8 py-12 relative z-10">
          <div className="mb-8 flex justify-center items-center">
            <img
              src={company_logo}
              className="mx-auto"
              style={{
                maxWidth: "200px",
                maxHeight: "60px",
                width: "auto",
                height: "auto",
              }}
            />
          </div>

          <h2 className="text-xl font-medium text-gray-800 mb-8 text-center">
            Login to your Account
          </h2>

          {/* Google Sign In Button */}
          <button
            className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 mb-6 hover:bg-gray-50 transition-colors"
            style={{ backgroundColor: "white", border: "1px solid gray" }}
          >
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-gray-700">Continue with Google</span>
          </button>

          <div className="text-center text-gray-400 mb-6 text-sm">
            or Sign in with Email
          </div>

          <form className="space-y-5">
            <div>
              <label for="email" className="block text-sm text-gray-600 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="user@iamneo.ai"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-maroon placeholder:text-gray-400"
              />
            </div>

            <div>
              <label
                for="password"
                className="block text-sm text-gray-600 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-maroon"
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between mb-5">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 rounded border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-600">Remember Me</span>
              </label>
              <a
                href="#"
                className="text-sm"
                style={{ color: "#8A2F5B" }}
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full text-white py-3 rounded-lg transition-colors font-medium mb-6"
              style={{ backgroundColor: "#7B2850" }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#6E2145")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#7B2850")}
            >
              Login
            </button>
          </form>

          <div className="text-center mt-6">
            <span className="text-gray-600 text-sm">Not Registered Yet? </span>
            <a
              href="/signup"
              className="font-medium text-sm"
              style={{ color: "#8A2F5B" }}
            >
              Create an account
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        input[type="checkbox"] {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          width: 16px;
          height: 16px;
          border: 1px solid #d1d5db;
          border-radius: 4px;
          background-color: white;
          position: relative;
          cursor: pointer;
        }

        input[type="checkbox"]:checked {
          background-color: #8a2f5b;
          border-color: #8a2f5b;
        }

        input[type="checkbox"]:checked::after {
          content: "✓";
          position: absolute;
          left: 2px;
          top: -2px;
          color: white;
          font-size: 12px;
          font-weight: bold;
        }

         {
          text-decoration: none;
          transition: text-decoration 0.2s ease;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Login;
