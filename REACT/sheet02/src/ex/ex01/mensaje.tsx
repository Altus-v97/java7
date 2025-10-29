type MensajePersonalizadoProps = {
    texto: string;
    color: string;
};

export function MensajePersonalizado ({ texto, color }: MensajePersonalizadoProps) {
return (
    <div
    style={{
backgroundColor: color,
color: "white",
textAlign: "center",
padding: "10px",
borderRadius: "8px",
margin: "10px 0"

    }}
    >
{texto}

    </div>
);
}