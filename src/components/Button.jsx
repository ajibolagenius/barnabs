export default function Button({ text, color, fontStyle }) {
    const buttonStyle = {
        backgroundColor: color,
        padding: "10px 20px",
        border: "none",
        fontFamily: fontStyle,
        fontWeight: 600,
        color: "white",
        cursor: "pointer",
        fontSize: "16px"
    };

    return (
        <button style={buttonStyle}>{ text }</button>
    )
}
