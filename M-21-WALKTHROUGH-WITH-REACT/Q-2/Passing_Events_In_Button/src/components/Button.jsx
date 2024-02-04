function Button({ text, onclick }) {
  return (
    <button
      style={{ borderRadius: "25px", padding: "4px 8px" }}
      onClick={onclick}
    >
      {text}
    </button>
  );
}

export default Button;
