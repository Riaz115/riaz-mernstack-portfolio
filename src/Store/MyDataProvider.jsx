const { createContext, useContext, useState, useEffect } = require("react");

const ForDataPorviding = createContext();

export const MyDataProvider = ({ children }) => {
  //this is for states
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  let LoggedIn = !!token;

  //this is function for the store token in the
  const forStoreToken = async (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  //this is for the remove token
  const forRemoveToken = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  //this is for the get value of user
  const forGetUserAllData = async () => {
    const url = "http://localhost:5000/authUser";
    const myOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      //this is for fetching
      const response = await fetch(url, myOptions);
      const data = await response.json();

      if (response.ok) {
        setUser(data.AuthUser);
      } else {
        console.log(data, "error data");
      }
    } catch (err) {
      console.log("there is error in  user function in store file", err);
    }
  };

  //this is for getting
  useEffect(() => {
    forGetUserAllData();
  }, []);

  return (
    <>
      <ForDataPorviding.Provider
        value={{ forStoreToken, forRemoveToken, LoggedIn, user, token }}
      >
        {children}
      </ForDataPorviding.Provider>
    </>
  );
};

export const UseCustomeHook = () => {
  const myAllData = useContext(ForDataPorviding);

  if (!myAllData) {
    console.log(
      "component not wrap properly and not using in right way usecontext hook"
    );
  }

  return myAllData;
};
