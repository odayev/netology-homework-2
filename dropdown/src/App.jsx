import { useState } from "react";
import "./App.css";

const bases = [
  "Profile Information",
  "Change Password",
  "Become PRO",
  "Help",
  "logout",
];

function App() {
  const [drop, setDrop] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setDrop(!drop);
  };
  return (
    <div className="container">
      <div className="dropdown-wrapper open">
        <button className="btn" onClick={handleClick}>
          <span>Account Settings {drop}</span>
          <i className="material-icons">public</i>
        </button>
        {drop && (
          <ul className="dropdown">
            {bases.map((base) => (
              <li className="active" key={base}>
                <a href="#">{base}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
