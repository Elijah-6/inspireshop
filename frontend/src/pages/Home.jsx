import { Link, useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../redux/api/productApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Header from "../components/Header";

const Home = () => {
  const { keyword } = useParams();
  const { data, isLoading, isError } = useGetProductsQuery({ keyword });

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      {/* Hero Section */}
      {!keyword && (
        <section className="bg-cover bg-center h-96 px-10">
          <div className="container mx-auto h-full flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">Welcome to InspireShop</h2>
              <p className="text-xl mb-8">Discover the best products at unbeatable prices</p>
              <Link to="/shop" className="bg-pink-600 text-white px-6 py-3 rounded-lg">Shop Now</Link>
            </div>
          </div>
        </section>
      )}

      {/* Featured Products */}
      <section className="container mx-auto py-12 px-20">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <Message variant="danger">
            {isError?.data.message || isError.error}
          </Message>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.products.slice(0, 8).map(product => (
              <div key={product._id} className="bg-white p-4 rounded-lg shadow-lg">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <p className="text-pink-600 font-bold mb-4">${product.price}</p>
                <Link to={`/product/${product._id}`} className="bg-pink-600 text-white px-4 py-2 rounded-lg">View Details</Link>
              </div>
            ))}
          </div>
        )}
      </section>
            <>
      {!keyword ? <Header /> : null}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {isError?.data.message || isError.error}
        </Message>
      ) : (
        <>
        </>
      )}
    </>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 InspireShop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;