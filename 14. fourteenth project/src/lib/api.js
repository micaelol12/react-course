const KEY = "AIzaSyA6g_hP6y0fgVu-O-GwmRYJzYb9IPgBbeo";
const AUTH_URL= "https://identitytoolkit.googleapis.com/v1/accounts:"

export const loginAndRegister = async ({ isLogin, user }) => {
  let url;
  if (isLogin) {
    url = `${AUTH_URL}signInWithPassword?key=${KEY}`;
  } else {
    url = `${AUTH_URL}signUp?key=${KEY}`;
  }
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    let errorMessage = "Authentication failed!";
    if (data && data.error && data.error.message) {
      errorMessage = data.error.message;
    }
    throw new Error(errorMessage);
  }
};
export const changePassword = async (user) => {
  const response = await fetch(
    `${AUTH_URL}update?key=${KEY}`,
    {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    let errorMessage = "Authentication failed!";
    if (data && data.error && data.error.message) {
      errorMessage = data.error.message;
    }
    throw new Error(errorMessage);
  }
};
