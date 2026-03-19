import "./App.css";

function App() {
  const name = "sathiya";

  const isMale = true;

  function getGrettings(user) {
    if (user) {
      return <h1>Hello {user}</h1>;
    } else {
      return <h1>Hello stranger</h1>;
    }
  }

  return (
    <div className="app">
      <h1>Hello {getGrettings("Jila")}</h1>
      <h1> I am {isMale ? "men" : "not a men"}</h1>
    </div>
  );
}

export default App;
