import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export function useAuth() {
  const [authUser, isLoading, error] = useAuthState(auth);

  return { user: authUser, isLoading, error };
}

export function useLogin() {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function login({ email, password, redirectTo = "/" }) {
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate(redirectTo);
    } catch (e) {
      setError(e.message);
      // console.log(error.message);
      setLoading(false);
      return false; // Return false if login failed
    }
    setError("");
    setLoading(false);
    return true; // Return true if login succeeded
  }

  return { login, isLoading, error };
}
