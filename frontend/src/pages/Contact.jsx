import NavBar from '../components/NavBar';

const Contact = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      {/* Header */}
      <NavBar/>

      {/* Hero Section */}
      <section className="bg-cover bg-center h-96" style={{ backgroundImage: "url('/images/contact-hero.jpg')" }}>
        <div className="container mx-auto h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-xl mb-8">We'd love to hear from you</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto py-12 flex-grow">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-pink-300"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-pink-300"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-pink-300"
              placeholder="Your message"
              rows="5"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-600 text-white px-6 py-3 rounded-lg font-bold"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 InspireShop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;