"use client";

import { useEffect, useState } from "react";
import client from "../../../appwrite";

export default function AppwritePing() {
  const [status, setStatus] = useState("Checking Appwrite connection...");

  useEffect(() => {
    let isMounted = true;

    client
      .ping()
      .then(() => {
        if (isMounted) {
          setStatus("Appwrite ping successful");
        }
        console.log("Appwrite ping successful");
      })
      .catch((error) => {
        if (isMounted) {
          setStatus("Appwrite ping failed");
        }
        console.error("Appwrite ping failed:", error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return <div aria-live="polite">{status}</div>;
}
