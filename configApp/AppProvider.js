import React, { createContext, useState, useEffect } from "react";

const { Provider, Consumer } = createContext();
// Then create a provider Component
function AppProvider(props) {
  const slug = props.slug;
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState("hello");

  return (
    <Provider
      value={{
        showAlert,
        setShowAlert,
        setAlert,
        alert,
      }}
    >
      {props.children}
    </Provider>
  );
}
AppProvider.getInitialProps = async (args) => {
  const { slug } = args.query;
  // const token = nextCookie(args).token;
  return { slug };
};

export { AppProvider };
export default Consumer;
