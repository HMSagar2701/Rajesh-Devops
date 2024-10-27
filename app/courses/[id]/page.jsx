"use client";

import React from "react";
import { useRouter } from "next/navigation";
import courseData from "../data";

export default function CourseDetail({ params }) {
  const router = useRouter();
  const courseId = parseInt(params.id, 10);
  
  // Find the course based on ID
  const course = courseData.find((c) => c.id === courseId);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 pt-24">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">{course.title}</h1>
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover mb-4" />
      <p className="text-gray-600 mb-4">{course.description}</p>
      <button onClick={() => router.back()} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Go Back
      </button>
    </div>
  );
}
