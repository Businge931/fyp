const baseUrl = "https://final-year-project-api-v1.herokuapp.com";

export const login = (email, password) => {
  return async () => {
    const options = {
      body: JSON.stringify({ email, password }),
      method: "POST",
      headers: { "Content-type": "application/json" },
    };
    try {
      const url = `${baseUrl}/api/v1/users/login`;
      console.log("On login");

      const res = await fetch(url, options);

      if (!res.ok) {
        const errorResponsedata = await res.json();
        const errorMessage = errorResponsedata.message;

        throw new Error(errorMessage);
      }

      const data = await res.json();
      console.log(data);

      console.log(data);
    } catch (errorMessage) {
      console.log(errorMessage);
    }
  };
};
export const signup = async (username, email, password) => {
  // console.log("data", username, email, password);
  const options = {
    body: JSON.stringify({ username, email, password }),
    method: "POST",
    headers: { "Content-type": "application/json" },
  };
  try {
    const url = `${baseUrl}/api/v1/users/signup`;
    console.log(url);

    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
