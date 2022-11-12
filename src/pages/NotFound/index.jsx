import React, { useEffect } from "react";
import { useTitle } from "../../store";
import "./style.css";

export default function NotFound() {
  const { setTitle } = useTitle();
  useEffect(() => {
    setTitle("");
  }, []);
  return (
    <div className="not-found">
      <p className="warning-number">404</p>
      <p className="warning-text">Not Found</p>
    </div>
  );
}
