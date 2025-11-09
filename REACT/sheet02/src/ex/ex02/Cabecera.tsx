import React from "react";

export function Cabecera({ children }: { children: React.ReactNode }) {
return ( 
    <h2 style ={{
        textAlign: "center",
        color: "#333",
        marginBottom: "10px",

    }}>{children}</h2>
);
}