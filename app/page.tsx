"use client"; // Ensure this directive is present for client components

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Unlock Your Potential with Our Courses</h1>
          <p className="text-lg mb-8">Join thousands of learners and start your journey today!</p>
          <Link href="/courses" className="bg-white text-gray-800 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-200 transition duration-200">
            Explore Courses
          </Link>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg mb-4">Hi, I'm Rajesh! I'm passionate about helping others navigate the world of DevOps and technology.</p>
          <p className="text-lg mb-8">Start your journey with me and unlock your potential!</p>
          <Link href="/about" className="bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-500 transition duration-200">
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* Motivational Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Learn DevOps?</h2>
          <p className="text-lg mb-4">"The greatest risk is not taking any risk. In a world that is changing really quickly, the only strategy that is guaranteed to fail is not taking risks." – Mark Zuckerberg</p>
          <p className="text-lg mb-8">DevOps empowers teams to deliver quality software faster and with greater reliability.</p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Benefits of Learning DevOps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">1. Improved Collaboration</h3>
              <p className="text-gray-600">DevOps fosters collaboration between development and operations teams, breaking down traditional silos. This culture of shared responsibility leads to better alignment on goals.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">2. Faster Time to Market</h3>
              <p className="text-gray-600">Automation allows teams to release features faster and more efficiently, enabling organizations to respond swiftly to market demands.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">3. Enhanced Quality</h3>
              <p className="text-gray-600">Continuous testing leads to higher quality products, with issues identified early in the development cycle.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">4. Increased Efficiency</h3>
              <p className="text-gray-600">Streamlined workflows and automation of repetitive tasks enhance overall productivity and allow teams to focus on strategic initiatives.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">5. Greater Customer Satisfaction</h3>
              <p className="text-gray-600">Rapid deployment of updates ensures user needs are promptly addressed, resulting in improved customer satisfaction.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">6. Enhanced Security</h3>
              <p className="text-gray-600">Integrating security practices into the DevOps process reduces vulnerabilities and enhances overall system security.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">7. Better Risk Management</h3>
              <p className="text-gray-600">Continuous monitoring allows teams to identify potential risks proactively, leading to more stable releases.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">8. Improved Job Opportunities</h3>
              <p className="text-gray-600">DevOps skills are in high demand, opening up new career opportunities and advancements in the tech industry.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">9. Access to New Tools and Technologies</h3>
              <p className="text-gray-600">DevOps encourages exploration of various tools, expanding your skill set and keeping you current with industry trends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Join Our Community</h2>
          <p className="text-lg mb-4">Connect with other learners and professionals in the DevOps field. Share knowledge, ask questions, and grow together.</p>
          <Link href="https://www.whatsapp.com/channel/0029Va9FEcW3gvWckXn0hV12" target="_blank" className="bg-green-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-green-500 transition duration-200">
            Join Now
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 bg-gray-800 text-white text-center">
        <p>© 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
