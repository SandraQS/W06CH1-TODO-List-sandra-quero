const Form = () => {
  const createClick = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form onSubmit={createClick}>
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          autoComplete="off"
        />
        <button type="submit" className="btn btn-primary mb-3">
          Create
        </button>
      </form>
    </>
  );
};
export default Form;
