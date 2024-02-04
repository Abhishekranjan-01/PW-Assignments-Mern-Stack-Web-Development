function Header({ title }) {
  return (
    <header
      style={{
        fontFamily: "arial",
        fontWeight: "600",
        fontSize: "32px",
        padding: "16px",
        textAlign: "center",
        color: "#0652DD",
        backgroundColor: "#FFC312",
      }}
      title={title}
    >
      {title}
    </header>
  );
}

export default Header;
