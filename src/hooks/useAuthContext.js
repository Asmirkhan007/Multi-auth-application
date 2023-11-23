import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
// Custom hook to access the authentication context
export function useAuthContext() {
  // Get the authentication context from the nearest AuthContextProvider
  const context = useContext(AuthContext);

  // Check if the context was successfully obtained
  if (!context) {
    throw Error("useAuthContext must be used inside an AuthContextProvider");
  }

  // Return the authentication context object for use in components
  return context;
}
