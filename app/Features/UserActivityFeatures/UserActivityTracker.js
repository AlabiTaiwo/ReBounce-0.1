"use client";
import { signOut } from "../../../auth";
import { useEffect } from "react";

export default function userActivityTracker() {
  useEffect(async () => {
    let timeout;

    const refreshSession = async () => {
      await fetch("/api/auth/session?update");
    };

    const resetTimeout = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        signOut();
      }, 20 * 60 * 1000);
    };

    window.addEventListener("mousemove", resetTimeout);
    window.addEventListener("keydown", resetTimeout);
    resetTimeout();

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", resetTimeout);
      window.removeEventListener("keydown", resetTimeout);
    };
  }, []);
}
