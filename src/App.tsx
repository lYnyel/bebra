import axios from "axios";
import "./App.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

function App() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // POST request using axios inside useEffect React hook
    axios
      .get("https://lobster.1337.moe/api/auth/user", {
        withCredentials: true,
      })
      .then((response) => setUsername(response.data.name));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <header className="flex justify-between">
      <img
        className="logo h-16"
        src="https://arinalee.amelia.ec/android-chrome-256x256.png"
        alt="logo"
      />
      <nav>
        <ul className="flex gap-x-10 h-full items-center">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          {username && (
            <li>
              <Popover className="relative">
                <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                  <span>{username}</span>
                </PopoverButton>
                <PopoverPanel
                  transition
                  className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >asdasd</PopoverPanel>
              </Popover>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default App;
