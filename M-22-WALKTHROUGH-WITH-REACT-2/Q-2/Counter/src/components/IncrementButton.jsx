function IncrementButton({ count, setCount }) {
  return (
    <button
      style={{ padding: "8px 16px" }}
      type="button"
      onClick={() => {
        setCount(count + 1);
      }}
    >
      Increment
    </button>
  );
}

export default IncrementButton;
