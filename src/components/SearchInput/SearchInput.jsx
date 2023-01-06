export const SearchInput = ({ changeQuery }) => {
  const submitHandler = event => {
    event.preventDefault();
    if (!event.target.elements.input.value.trim()) {
      return;
    }
    changeQuery(event.target.elements.input.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input placeholder="Type your query" name="input" />
      <button>Search</button>
    </form>
  );
};
