const generateRandomString = (num) => {
  const length = num;
  const chars = "0123456789abcd";
  let result = "";
  let i;
  for (i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};
// format seconds
// /////////////////////////////////////////////////////////////////////////////
const formatTime = (sec) => {
  const padTime = (num, size) => `000${num}`.slice(size * -1);
  const time = parseFloat(sec).toFixed(3);
  const minutes = Math.floor(time / 60) % 60;
  const seconds = Math.floor(time - minutes * 60);

  return `${padTime(minutes, 1)}:${padTime(seconds, 2)}`;
};

const validateFields = (fields) => {
  const isFilled = !Object.values(fields).some(
    (o) => o === null || o === "" || o === undefined
  );

  return isFilled;
};

const getApi = async (url, tkn) => {
  let getData;
  try {
    await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": tkn,
      },
    })
      .then((response) =>
        response.json().then((res) => ({ status: response.status, body: res }))
      )
      .then((myJson) => {
        getData = myJson;
      });
  } catch (error) {
    console.log("getApi", error);
    return error?.message;
  }
  return getData;
};
const postApi = async (url, data, tkn) => {
  let getData;
  try {
    await fetch(url, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": tkn,
      },
      body: JSON.stringify({ ...data }),
    })
      .then((response) =>
        response.json().then((res) => ({ status: response.status, body: res }))
      )
      .then((myJson) => {
        getData = myJson;
      });
  } catch (error) {
    console.log("getApi", error);
    return error?.message;
  }
  return getData;
};

export default {
  generateRandomString,
  formatTime,
  validateFields,
  getApi,
  postApi,
};
