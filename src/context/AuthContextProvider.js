// import { useEffect, useReducer } from "react";
// import { onAuthStateChanged } from "firebase/auth";

// // Authentication context provider component
// export const AuthContextProvider = ({ children }) => {
//   // Initialize authentication state using a reducer
//   const [state, dispatch] = useReducer(authReducer, {
//     user: null,
//     authIsReady: false,
//   });

//   // Effect to determine initial authentication state and update context
//   useEffect(() => {
//     // Subscribe to authentication state changes
//     const unsub = onAuthStateChanged(auth, (user) => {
//       // Dispatch an action to update the state with the user information
//       dispatch({ type: "AUTH_IS_READY", payload: user });

//       // Unsubscribe to avoid further unnecessary updates
//       unsub(); // Unsubscribe once the initial auth state is determined
//     });
//   }, []);

//   // Provide authentication state and dispatch function to children components
//   return (
//     <AuthContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
