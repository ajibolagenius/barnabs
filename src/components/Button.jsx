export default function Button({ text, color }) {
    const buttonStyle = {
        backgroundColor: color,
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        color: "white",
        cursor: "pointer",
        fontSize: "16px"
    };

    return (
        <button style={buttonStyle}>{ text }</button>
    )
}
