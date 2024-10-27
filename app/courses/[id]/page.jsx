"use client";

import React, { useRef, useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation"; // Use the Next.js `useParams` hook
import courseData from "../data";

export default function CourseDetail() {
  const router = useRouter();
  const params = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (params?.id) {
      const courseId = parseInt(params.id, 10);
      const foundCourse = courseData.find((c) => c.id === courseId);
      setCourse(foundCourse);
    }
  }, [params]);

  if (!course) {
    return <div>Course not found</div>;
  }

  // Custom video player component for YouTube videos
  const YouTubePlayer = ({ videoUrl, title }) => {
    const iframeRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const playVideo = () => {
      if (iframeRef.current) {
        iframeRef.current.contentWindow.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          "*"
        );
        setIsPlaying(true);
      }
    };

    const pauseVideo = () => {
      if (iframeRef.current) {
        iframeRef.current.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
        setIsPlaying(false);
      }
    };

    return (
      <div className="bg-black rounded-lg overflow-hidden">
        <div className="relative w-full h-0" style={{ paddingBottom: "56.25%" }}>
          <iframe
            ref={iframeRef}
            src={`${videoUrl}?enablejsapi=1`}
            title={title}
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex items-center justify-between p-2 bg-gray-900 text-white">
          <button onClick={isPlaying ? pauseVideo : playVideo} className="text-lg">
            {isPlaying ? "Pause" : "Play"}
          </button>
          <span className="text-sm">{title}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 pt-24 pb-12">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">{course.title}</h1>
      <img src={course.image} alt={course.title} className="mb-4" />
      <p className="text-gray-600 mb-4">{course.description}</p>
      
      <div className="w-full max-w-4xl p-4">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Course Videos</h2>
        {course.videos.length > 0 ? (
          course.videos.map((video) => (
            <div key={video.id} className="mb-8">
              <h3 className="text-lg font-medium mb-2 text-gray-800">{video.title}</h3>
              {/* Using custom YouTube player */}
              <YouTubePlayer videoUrl={video.videoUrl} title={video.title} />
            </div>
          ))
        ) : (
          <p className="text-gray-600">No videos available for this course.</p>
        )}
      </div>

      <button
        onClick={() => router.back()}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 mt-4"
      >
        Go Back
      </button>
    </div>
  );
}
