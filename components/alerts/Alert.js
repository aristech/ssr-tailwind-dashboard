import React from "react";
import Consumer from "../../configApp/AppProvider";

const Alert = () => {
  return (
    <Consumer>
      {(ctx) => {
        const { showAlert, setShowAlert, alert } = ctx;
        console.log(alert);
        return (
          <>
            {showAlert ? (
              <div className="relative flex justify-center">
                <div className="text-white px-6 py-4 border-0 rounded absolute mb-4 bg-gray-700 z-50">
                  <span className="text-xl inline-block mr-5 align-middle">
                    <i className="fas fa-bell" />
                  </span>
                  <span className="inline-block align-middle mr-8">
                    {alert}
                  </span>
                  <button
                    className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                    onClick={() => setShowAlert(false)}
                  >
                    <span>×</span>
                  </button>
                </div>
              </div>
            ) : null}
          </>
        );
      }}
    </Consumer>
  );
};

export default Alert;
