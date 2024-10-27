"use client"; // Ensure this is a client component

export default function ThankYou() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 pt-24 px-4">
            <h1 className="text-4xl font-bold mb-8 text-blue-600">Thank You!</h1>
            <p className="text-lg mb-4">We appreciate your feedback!</p>
            <p className="mb-4">Your thoughts help us improve our services.</p>
            <p className="mb-4">If you have any further questions, feel free to reach out to us.</p>
            <button
                onClick={() => window.history.back()} // Go back to the previous page
                className="mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-200"
            >
                Go Back
            </button>
        </div>
    );
}
