"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import ReactPlayer from "react-player";
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

  // Custom Video Player Component with Like/Dislike and Description
  const VideoPlayer = ({ videoUrl, title, description }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(100);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(false); // Track like status
    const [hasDisliked, setHasDisliked] = useState(false); // Track dislike status
    const playerRef = useRef(null);
    const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleFullScreen = () => {
      if (!isFullScreen) {
        if (playerRef.current) {
          playerRef.current.requestFullscreen();
          setIsFullScreen(true);
        }
      } else {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    };

    const handleLike = () => {
      if (!hasLiked) {
        setLikes(likes + 1);
        setHasLiked(true);
        if (hasDisliked) {
          setDislikes(dislikes - 1);
          setHasDisliked(false);
        }
      }
    };

    const handleDislike = () => {
      if (!hasDisliked) {
        setDislikes(dislikes + 1);
        setHasDisliked(true);
        if (hasLiked) {
          setLikes(likes - 1);
          setHasLiked(false);
        }
      }
    };

    return (
      <div className="relative rounded-lg overflow-hidden mb-6">
        {/* Video Wrapper */}
        <div className="player-wrapper" ref={playerRef}>
          <ReactPlayer
            url={videoUrl}
            playing={isPlaying}
            volume={volume / 100}
            muted={isMuted}
            controls={false}
            width="100%"
            height="100%"
            className="react-player"
          />
        </div>

        {/* Video Control Bar */}
        <div className="flex items-center justify-between p-2 bg-gray-900 text-white">
          <div className="flex space-x-2">
            <span onClick={() => setIsPlaying(!isPlaying)} className="cursor-pointer text-lg">
              {isPlaying ? "⏸️" : "▶️"}
            </span>
            <span onClick={() => setIsMuted(!isMuted)} className="cursor-pointer text-lg">
              {isMuted ? "🔇" : "🔊"}
            </span>
            <span onClick={toggleFullScreen} className="cursor-pointer text-lg">
              {isFullScreen ? "📴" : "📺"}
            </span>
          </div>

          {/* Volume Control */}
          <div className="flex items-center">
            <label htmlFor={`volume-${title}`} className="mr-2 text-sm">Volume:</label>
            <input
              id={`volume-${title}`}
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="slider"
            />
          </div>
        </div>

        {/* Like/Dislike Section */}
        <div className="flex items-center justify-start space-x-4 p-2 bg-gray-100 text-gray-800">
          <span
            onClick={handleLike}
            className={`cursor-pointer text-lg flex items-center space-x-1 ${hasLiked ? "text-blue-600" : ""}`}
          >
            👍 <span>{likes}</span>
          </span>
          <span
            onClick={handleDislike}
            className={`cursor-pointer text-lg flex items-center space-x-1 ${hasDisliked ? "text-red-600" : ""}`}
          >
            👎 <span>{dislikes}</span>
          </span>
        </div>

        {/* Video Title and Description */}
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
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
              <VideoPlayer
                videoUrl={video.videoUrl}
                title={video.title}
                description={video.description}
              />
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
