function DecrementButton({ count, setCount }) {
  return (
    <button
      style={{ padding: "8px 16px" }}
      type="button"
      onClick={() => {
        setCount(count - 1);
      }}
    >
      Decrement
    </button>
  );
}
export default DecrementButton;
