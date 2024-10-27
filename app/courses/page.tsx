// app/courses/Courses.js
import React from "react";
import courseData from "./data";

export default function Courses() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 pt-24">
            <h1 className="text-4xl font-bold mb-8 text-blue-600">Our Courses</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {courseData.map((course) => (
                    <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
                        <img 
                            src={course.image} 
                            alt={course.title} 
                            className="w-full h-48 object-cover" 
                        />
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-2 text-blue-500">{course.title}</h2>
                            <p className="text-gray-600 mb-4">{course.description}</p>
                            <div className="flex justify-between">
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                                    View Course
                                </button>
                                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
                                    Enroll Course
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
