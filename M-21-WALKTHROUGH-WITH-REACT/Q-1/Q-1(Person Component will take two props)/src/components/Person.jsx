function Person({ name, age }) {
  return (
    <p style={{ fontSize: "45px" }}>
      My Name Is <span style={{ fontWeight: "600" }}>{name}</span> And My Age Is{" "}
      <span style={{ fontWeight: "600" }}>{age}</span>.
    </p>
  );
}

export default Person;
