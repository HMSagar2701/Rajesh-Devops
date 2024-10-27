"use client"; // Mark this component as a client component if it contains interactivity

import React from "react";
import courseData from "../data";

const CourseDetail = ({ params }: { params: { id: string } }) => {
    // Find the course based on the ID from the params
    const course = courseData.find((c) => c.id === parseInt(params.id));

    // Handle the case where the course is not found
    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 pt-24">
            <h1 className="text-4xl font-bold mb-8 text-blue-600">{course.title}</h1>
            {/* Adjust the image size to be smaller like in the course component */}
            <img 
                src={course.image} 
                alt={course.title} 
                className="w-1/2 h-auto object-cover mb-4" // Make the width 50% and height auto to maintain aspect ratio
            />
            <p className="text-gray-600 mb-4">{course.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {course.videos && course.videos.map((video) => (
                    <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <iframe
                            width="100%"
                            height="200"
                            src={video.videoUrl}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={() => window.history.back()} // Use history API to go back
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 mt-8 mb-4" // Added mb-4 for margin below the button
            >
                Back to Courses
            </button>
        </div>
    );
};

export default CourseDetail;
