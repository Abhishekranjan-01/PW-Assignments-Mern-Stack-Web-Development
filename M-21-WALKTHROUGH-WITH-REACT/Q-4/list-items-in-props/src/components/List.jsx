function List({ listitems }) {
  return (
    <ul>
      {listitems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default List;
