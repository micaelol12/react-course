import { useReducer, useCallback } from "react";

const HTTP_INITAL_STATE = {
  loading: false,
  error: null,
  data: null
};

const httpReducer = (state, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    case "RESPONSE":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "CLEAR":
      return HTTP_INITAL_STATE;
    default:
      return state;
  }
};

const useHttp = () => {
  const [httpState, httpDispatch] = useReducer(httpReducer, HTTP_INITAL_STATE);

  const sendRequest = useCallback(async (url, method, body, applyData) => {
    httpDispatch({ type: "SEND" });
    try {
      const request = await fetch(url, {
        method: method ? method : "GET",
        body: body,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!request.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await request.json();
      applyData(data)
      httpDispatch({ type: "RESPONSE", payload: data });
    } catch (error) {
      httpDispatch({ type: "ERROR", payload: error.message });
    }
  }, []);

  const clear = () => {
    httpDispatch({ type: "CLEAR"});
  }
    
  return {
    isLoading: httpState.loading,
    error: httpState.error,
    request: sendRequest,
    clear: clear
  };
};

export default useHttp;
