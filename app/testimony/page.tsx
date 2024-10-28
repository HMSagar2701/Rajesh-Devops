"use client"; // Ensure this directive is present for client components

import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

interface FeedbackEntry {
    rating: number;
    feedback: string;
    name?: string;  // Optional name field
    email?: string; // Optional email field
}

export default function Testimony() {
    const [rating, setRating] = useState<number>(0); // Type for rating
    const [feedback, setFeedback] = useState<string>(''); // Type for feedback
    const [name, setName] = useState<string>(''); // Optional name
    const [email, setEmail] = useState<string>(''); // Optional email
    const [feedbackEntries, setFeedbackEntries] = useState<FeedbackEntry[]>([]); // State for feedback entries
    const [showThankYou, setShowThankYou] = useState<boolean>(false); // State to show thank-you message

    // Load feedback entries from localStorage when the component mounts
    useEffect(() => {
        const storedFeedbackEntries = localStorage.getItem('feedbackEntries');
        if (storedFeedbackEntries) {
            setFeedbackEntries(JSON.parse(storedFeedbackEntries));
        }
    }, []);

    // Save feedback entries to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('feedbackEntries', JSON.stringify(feedbackEntries));
    }, [feedbackEntries]);

    const handleRatingClick = (index: number) => {
        setRating(index + 1); // Set rating as a number
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Add the new feedback entry to the list
        setFeedbackEntries([...feedbackEntries, { rating, feedback, name, email }]);
        setFeedback(''); // Reset feedback
        setName(''); // Reset name
        setEmail(''); // Reset email
        setRating(0); // Reset rating
        setShowThankYou(true); // Show thank-you message
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 pt-24 px-4">
            <h1 className="text-4xl font-bold mb-8 text-blue-600 underline">User Feedback</h1>
            {showThankYou ? (
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                    <p className="mb-4">Your feedback has been submitted successfully.</p>
                    <button
                        onClick={() => setShowThankYou(false)} // Reset thank-you message
                        className="mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-200"
                    >
                        Submit Another Feedback
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="max-w-lg w-full bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Rate Us</h2>
                    <div className="flex mb-4">
                        {[...Array(5)].map((_, index) => (
                            <FaStar
                                key={index}
                                className={`cursor-pointer text-3xl ${index < rating ? 'text-yellow-500' : 'text-gray-400'}`}
                                onClick={() => handleRatingClick(index)} // Correctly call the function with index
                            />
                        ))}
                    </div>
                    <textarea
                        className="w-full border border-gray-300 rounded-md p-2 mb-4"
                        rows={4} // Set rows as a number
                        placeholder="Your feedback..."
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)} // Correctly handle feedback
                        required
                    />
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-2 mb-4"
                        placeholder="Your Name (optional)"
                        value={name}
                        onChange={(e) => setName(e.target.value)} // Handle name input
                    />
                    <input
                        type="email"
                        className="w-full border border-gray-300 rounded-md p-2 mb-4"
                        placeholder="Your Email (optional)"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Handle email input
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-500 transition duration-200"
                    >
                        Submit Feedback
                    </button>
                </form>
            )}
            
            {/* Display the feedback entries */}
            <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Feedback Entries</h2>
                {feedbackEntries.length === 0 ? (
                    <p className="text-gray-500">No feedback submitted yet.</p>
                ) : (
                    feedbackEntries.map((entry, index) => (
                        <div key={index} className="border-b border-gray-300 py-2">
                            <p className="font-bold">Rating: {entry.rating} ★</p>
                            <p>{entry.feedback}</p>
                            {entry.name && <p className="font-medium">Name: {entry.name}</p>} {/* Show name if provided */}
                            {entry.email && <p className="font-medium">Email: {entry.email}</p>} {/* Show email if provided */}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
