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

  const VideoPlayer = ({ videoUrl, title, description, videoId }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(100);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);
    const [hasDisliked, setHasDisliked] = useState(false);
    const [played, setPlayed] = useState(0);
    const [duration, setDuration] = useState(0);
    const playerRef = useRef(null);
    const [isFullScreen, setIsFullScreen] = useState(false);

    useEffect(() => {
      const savedLikeStatus = JSON.parse(localStorage.getItem(`likeStatus-${videoId}`)) || {};
      setHasLiked(savedLikeStatus.liked || false);
      setHasDisliked(savedLikeStatus.disliked || false);
      setLikes(savedLikeStatus.likes || 0);
      setDislikes(savedLikeStatus.dislikes || 0);
    }, [videoId]);

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
        saveLikeStatus(true, false);
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
        saveLikeStatus(false, true);
      }
    };

    const saveLikeStatus = (liked, disliked) => {
      localStorage.setItem(
        `likeStatus-${videoId}`,
        JSON.stringify({ liked, disliked, likes, dislikes })
      );
    };

    const handleProgress = (state) => {
      setPlayed(state.played);
    };

    const handleSeek = (e) => {
      const seekTo = parseFloat(e.target.value);
      playerRef.current.seekTo(seekTo);
      setPlayed(seekTo);
    };

    const handleSkip = (seconds) => {
      const currentTime = playerRef.current.getCurrentTime();
      playerRef.current.seekTo(currentTime + seconds);
    };

    const formatTime = (seconds) => {
      const hrs = Math.floor(seconds / 3600);
      const mins = Math.floor((seconds % 3600) / 60);
      const secs = Math.floor(seconds % 60);
      return `${hrs > 0 ? `${hrs}:` : ""}${mins < 10 && hrs > 0 ? "0" : ""}${mins}:${
        secs < 10 ? "0" : ""
      }${secs}`;
    };

    return (
      <div className="relative rounded-lg overflow-hidden mb-6">
        <div className="player-wrapper" ref={playerRef}>
          <ReactPlayer
            ref={playerRef}
            url={videoUrl}
            playing={isPlaying}
            volume={volume / 100}
            muted={isMuted}
            controls={false}
            width="100%"
            height="100%"
            onProgress={handleProgress}
            onDuration={(duration) => setDuration(duration)}
            className="react-player"
          />
        </div>

        {/* Video Control Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-900 text-white text-lg">
          <div className="flex items-center space-x-3">
            <button onClick={() => setIsPlaying(!isPlaying)} className="cursor-pointer">
              {isPlaying ? "⏸️" : "▶️"}
            </button>
            <button onClick={() => setIsMuted(!isMuted)} className="cursor-pointer">
              {isMuted ? "🔇" : "🔊"}
            </button>
            <button onClick={() => handleSkip(-30)} className="cursor-pointer">
              ⏪
            </button>
            <button onClick={() => handleSkip(30)} className="cursor-pointer">
              ⏩
            </button>
            <button onClick={toggleFullScreen} className="cursor-pointer">
              {isFullScreen ? "📴" : "📺"}
            </button>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="w-20 slider ml-3"
            />
          </div>
        </div>

        {/* Progress Bar and Time Display */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white text-sm">
          <span>{formatTime(played * duration)}</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={played}
            onChange={handleSeek}
            className="w-full mx-4"
          />
          <span>{formatTime(duration)}</span>
        </div>

        {/* Like/Dislike Section */}
        <div className="flex items-center justify-start space-x-4 p-2 bg-gray-100 text-gray-800">
          <span
            onClick={handleLike}
            className={`cursor-pointer flex items-center space-x-1 ${hasLiked ? "text-blue-600" : ""}`}
          >
            👍 <span>{likes}</span>
          </span>
          <span
            onClick={handleDislike}
            className={`cursor-pointer flex items-center space-x-1 ${hasDisliked ? "text-red-600" : ""}`}
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
                videoId={video.id}
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
