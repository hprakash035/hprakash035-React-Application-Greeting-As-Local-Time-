import "./App.css";
let time = new Date().getHours();
const cssStyle={};
let greeting = " ";
if (time >= 5 && time <= 12) {
  greeting = "Good Morning 🌅";
  cssStyle.color="green";
} else if (time > 12 && time <= 16) {
  greeting = "Good AfterNoon 🌞";
  cssStyle.color="Yellow";
} else if (time > 16 && time <= 21) {
  greeting = "Good Evening 🌆";
  cssStyle.color="orange";
} else if (time >= 21 && time <= 24) {
  greeting = "Good Night 🌃";
  cssStyle.color="black";
} else if (time >= 0 && time <= 5) {
  greeting = "Good Night 🌃";
  cssStyle.color="black";
} else if (time >= 24) {
  greeting = " Wrong Time Formate";
} else {
  greeting = "Hello";
}

function App() {
  return (
    <>
      <div className="container">
        <h1 className="heading">
          Hello Sir/Mam,<span style={ cssStyle}>{greeting}</span>
        </h1>
      </div>
    </>
  );
}

export default App;

