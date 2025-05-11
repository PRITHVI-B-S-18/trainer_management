import Auth_image from "../../assets/Auth_image.png";
import company_logo from "../../assets/company_logo.png";

const SignUp = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="w-6/12 h-full">
        <img src={Auth_image} className="h-full w-full" alt="Auth_image" />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white relative h-screen overflow-hidden">
        <div className="w-full max-w-md px-8 py-8 relative z-10">
          {/* Logo */}
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

          {/* Sign Up Title */}
          <h2 className="text-xl font-medium text-gray-800 mb-6 text-center">
            Sign up
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

          {/* Divider */}
          <div className="text-center text-gray-400 mb-5 text-sm">
            or Sign in with Email
          </div>

          {/* Sign Up Form */}
          <div className="space-y-4">
            {/* Username Input */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm text-gray-600 mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                onFocus={(e) => (e.target.style.borderColor = "#8A2F5B")}
                onBlur={(e) => (e.target.style.borderColor = "")}
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-600 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                onFocus={(e) => (e.target.style.borderColor = "#8A2F5B")}
                onBlur={(e) => (e.target.style.borderColor = "")}
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm text-gray-600 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                onFocus={(e) => (e.target.style.borderColor = "#8A2F5B")}
                onBlur={(e) => (e.target.style.borderColor = "")}
              />
            </div>

            {/* Confirm Password Input */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm text-gray-600 mb-1"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                onFocus={(e) => (e.target.style.borderColor = "#8A2F5B")}
                onBlur={(e) => (e.target.style.borderColor = "")}
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full text-white my-4 py-3 rounded-lg transition-colors font-medium"
              style={{ backgroundColor: "#8A2F5B" }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#7B2850")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#8A2F5B")}
            >
              Register
            </button>

            {/* Login Link */}
            <div className="text-center pt-2">
              <span className="text-gray-600 text-sm">
                Already have an Account?{" "}
              </span>
              <a
                href="/"
                className="font-medium text-sm"
                style={{ color: "#8A2F5B" }}
              >
                Login here...
              </a>
            </div>
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
          margin-right: 8px;
        }

        input[type="checkbox"]:checked {
          background-color: #8a2f5b;
          border-color: #8a2f5b;
        }

        input[type="checkbox"]:checked::after {
          content: "✓";
          position: absolute;
          left: 3px;
          top: -2px;
          color: white;
          font-size: 12px;
          font-weight: bold;
        }

        input[type="checkbox"]:focus {
          outline: 2px solid rgba(138, 47, 91, 0.3);
          outline-offset: 2px;
        }

        a {
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

export default SignUp;
