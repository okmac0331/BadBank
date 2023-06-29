
import React from "react";
import { useActions } from "./action";

export const Store = React.createContext();

const initialState = {
  users: [
    {
     
      name: "Abel",
      email: "abel@mit.edu",
      password: "secret",
      balance: 100,
      transactionHistory: []
    },
  
    {
      name: "Anaabia",
      email: "aas.29980@gmail.com",
      password: "secret",
      balance: 3000,
      transactionsHistory: []
    },
    {
      name: "Aarib",
      email: "aarib.mahmood@uthamanacademy.org",
      password: "asdfasdf",
      balance: 1000,
      transactionsHistory: []
    },
    {
      name: "Ateeb",
      email: "parasitology_80@yahoo.com",
      password: "Answer80@",
      balance: 6000,
      transactionsHistory: []
    },
    
  ],
  currentUser: null,
  success: false,
  showError: false,
};

const reducer = (state, action) => {
  return (
    {
      ADD_USER: { ...state, users: action.payload },
      LOGIN: { ...state, currentUser: action.payload },
      UPDATE_USERS: { ...state, users: action.payload },
      UPDATE_USER: { ...state, currentUser: action.payload },
      SET_SUCCESS: { ...state, success: action.payload },
      SET_ERROR: { ...state, error: action.payload },
    }[action.type] || state
  );
};

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);
  const value = { state, dispatch, actions };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}


