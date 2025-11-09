import React from "react";

export function Tarjeta({ children }: { children: React.ReactNode }) {
    return (
      <div
        style={{
          border: "1px solid #ccc",
          boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
          borderRadius: "10px",
          padding: "20px",
          maxWidth: "300px",
          margin: "20px auto",
          backgroundColor: "white",
        }}
      >{children}</div>
    );
}