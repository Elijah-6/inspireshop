
const About = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-cover bg-center h-96" style={{ backgroundImage: "url('/images/about-hero.jpg')" }}>
        <div className="container mx-auto h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">About InspireShop</h2>
            <p className="text-xl mb-8">Learn more about our journey and values</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto py-12 flex-grow px-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
        <div className="text-gray-100 text-lg leading-relaxed">
          <p className="mb-4">
            Welcome to InspireShop, your number one source for all things fashion. We're dedicated to giving you the very best of products, with a focus on dependability, customer service, and uniqueness.
          </p>
          <p className="mb-4">
            Founded in 2023 by Elijah, InspireShop has come a long way from its beginnings in a home office. When Elijah first started out, his passion for eco-friendly fashion drove him to do intense research, quit his day job, and gave him the impetus to turn hard work and inspiration into a booming online store. We now serve customers all over the world and are thrilled to be a part of the eco-friendly wing of the fashion industry.
          </p>
          <p className="mb-4">
            We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
          </p>
          <p className="mb-4">
            Sincerely,
            <br />
            Elijah, Founder
          </p>
        </div>
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

export default About;