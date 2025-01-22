import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
	<header className="bg-gray-900 shadow-md text-white p-4 rounded-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">InspireShop</h1>
          <nav>
            <Link to="/shop" className="px-4">Shop</Link>
            <Link to="/about" className="px-4">About</Link>
            <Link to="/contact" className="px-4">Contact</Link>
          </nav>
        </div>
      </header>
  )
}

export default NavBar