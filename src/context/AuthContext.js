import { createContext, useReducer, useEffect, useContext } from "react";
import { auth } from "../firebase/auth";
import { onAuthStateChanged } from "firebase/auth";


export const AuthContext = createContext();
 
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "AUTH_IS_READY":
      return { user: action.payload, authIsReady: true };
    default:
      return state;
  }
};
export const AuthContextProvider = ({ children }) => {
  // Initialize authentication state using a reducer
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  // Effect to determine initial authentication state and update context
  useEffect(() => {
    // Subscribe to authentication state changes
    const unsub = onAuthStateChanged(auth, (user) => {
      // Dispatch an action to update the state with the user information
      dispatch({ type: "AUTH_IS_READY", payload: user });

      // Unsubscribe to avoid further unnecessary updates
      unsub(); // Unsubscribe once the initial auth state is determined
    });
  }, []);

  // Provide authentication state and dispatch function to children components
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
export function useAuthContext() {
  
//  const { user } = useAuthContext();
//  useEffect(() => console.log(user), [user]);
  const context = useContext(AuthContext);
  if (!context) {
    throw Error("useAuthContext must be used inside an AuthContextProvider");
  }
  return context;
}