function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Advanced Form</h1>

      <form>
        <div>
          <label>Name:</label><br />
          <input type="text" />
        </div>

        <br />

        <div>
          <label>Description:</label><br />
          <textarea />
        </div>

        <br />

        <div>
          <label>Gender:</label><br />
          <select>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;


