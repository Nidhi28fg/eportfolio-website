import img from "../../assets/aboutus.jpg";
import profile from "../../assets/purpose.jpg";


const BlogComp = () => {
  return (
    <>
      <div
        className="relative w-full h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold">Our Blog</h1>
          <p className="text-xl mt-2">
            Stay updated with our latest news and articles
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Post 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={profile}
              alt="Blog Post 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                The Future of AI in Education
              </h2>
              <p className="text-gray-600 mt-2">
                Explore how artificial intelligence is transforming theeducation
                landscape, offering personalized learning experiences and
                automating administrative tasks.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blog Post 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Unlocking Your Potential: A Guide to Career Development
              </h2>
              <p className="text-gray-600 mt-2">
                Discover practical strategies and tips to advance your career,
                set meaningful goals, and achieve professional success.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blog Post 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                The Importance of Lifelong Learning in a Changing World
              </h2>
              <p className="text-gray-600 mt-2">
                Understand why continuous learning is crucial for personal and
                professional growth in today's rapidly evolving global
                landscape.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Post 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blog Post 4"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Building a Strong Personal Brand Online
              </h2>
              <p className="text-gray-600 mt-2">
                Learn how to effectively build and manage your personal brand in
                the digital age to enhance your professional opportunities.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 5 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blog Post 5"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                The Role of Emotional Intelligence in Leadership
              </h2>
              <p className="text-gray-600 mt-2">
                Understand why emotional intelligence is a critical skill for
                effective leadership and how it can be developed.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 6 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blog Post 6"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Navigating the Gig Economy: Opportunities and Challenges
              </h2>
              <p className="text-gray-600 mt-2">
                Explore the rise of the gig economy, its benefits, and the
                potential challenges for freelancers and independent
                contractors.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Post 7 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blog Post 7"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                The Power of Networking in Professional Growth
              </h2>
              <p className="text-gray-600 mt-2">
                Discover how building and maintaining a strong professional
                network can open doors to new opportunities and collaborations.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 8 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fd248f53?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blog Post 8"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">
                The Impact of Technology on Modern Workplaces
              </h2>
              <p className="text-gray-600 mt-2">
                Examine how technological advancements are reshaping the modern
                work environment, influencing productivity, communication, and
                collaboration.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 9 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523287562-b2304d25247c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blog Post 9"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Achieving Work-Life Balance in a Demanding World
              </h2>
              <p className="text-gray-600 mt-2">
                Learn practical strategies to maintain a healthy work-life
                balance, reduce stress, and improve overall well-being.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
     
      
    </>
  );
};

export default BlogComp;
