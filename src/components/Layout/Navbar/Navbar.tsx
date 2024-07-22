import  { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
<nav className="bg-primary text-white rounded">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">TwuiClass</Link>
        </div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="lg:flex lg:justify-between text-sm">
            <li className="lg:px-4 py-2">
              <Link to="/getting-started" className="block px-2 py-1 hover:bg-gray-700 rounded font-semibold">Getting Started</Link>
            </li>
            <li className="lg:px-4 py-2">
              <Link to="/components" className="block px-2 py-1 hover:bg-gray-700 rounded font-semibold">Components</Link>
            </li>
            <li className="lg:px-4 py-2">
              <Link to="/examples" className="block px-2 py-1 hover:bg-gray-700 rounded font-semibold">Examples</Link>
            </li>
            <li className="lg:px-4 py-2">
              <Link to="/contributing" className="block px-2 py-1 hover:bg-gray-700 rounded font-semibold">Contributing</Link>
            </li>
            <li className="lg:px-4 py-2">
              <Link to="/community" className="block px-2 py-1 hover:bg-gray-700 rounded font-semibold">Community</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar