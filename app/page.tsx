"use client"; // Ensure this directive is present for client components

import Image from "next/image";
import Link from "next/link";
import courseData from "@/app/courses/data"; // Adjusted import for course data

export default function Home() {
  // Display a fallback message if there are no courses
  const featuredCourses = courseData.slice(0, 6);
  const hasCourses = featuredCourses.length > 0;

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

      {/* Featured Courses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hasCourses ? (
              featuredCourses.map((course) => (
                <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
                  <Image src={course.image} alt={course.title} width={400} height={300} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <div className="flex space-x-2">
                      <Link href={`/courses/${course.id}`} className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-200">
                        View Course
                      </Link>
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
                        Enroll Course
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No featured courses available at this time.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
