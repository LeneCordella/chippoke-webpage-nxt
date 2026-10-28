"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { account } from "./appwrite";
import { OAuthProvider } from "appwrite";

export default function LoginPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        const session = await account.getSession("current");
        console.log("SESSION:", session);

        const currentUser = await account.get();
        console.log("USER:", currentUser);
        setUser(currentUser);
      } catch (error) {
        console.error("AUTH ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  const loginSIWG = async () => {
    await account.createOAuth2Session(
      OAuthProvider.Google,
      "http://localhost:3000/",
      "http://localhost:3000/login",
    );
  };

  return (
    <main className={styles.page}>
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <h3>Hi {user.name || user.email} 👋</h3>
      ) : (
        <button type="button" onClick={loginSIWG}>
          Sign in with Google
        </button>
      )}
    </main>
  );
}
