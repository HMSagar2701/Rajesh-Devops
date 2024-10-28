import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube, FaGithub } from "react-icons/fa";

export default function Social() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
            <h1 className="text-5xl font-bold mb-8 text-center drop-shadow-lg">Connect with Us</h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 px-4">
                {[ 
                    { icon: <FaFacebook size={40} />, name: "Facebook", color: "bg-blue-600", link: "https://www.facebook.com" }, // Placeholder link
                    { icon: <FaInstagram size={40} />, name: "Instagram", color: "bg-pink-500", link: "https://www.instagram.com" }, // Placeholder link
                    { icon: <FaLinkedin size={40} />, name: "LinkedIn", color: "bg-blue-700", link: "https://www.linkedin.com/in/rajesh-singh-6a304a1ab/" }, // Updated LinkedIn link
                    { icon: <FaWhatsapp size={40} />, name: "WhatsApp", color: "bg-green-500", link: "https://www.whatsapp.com/channel/0029Va9FEcW3gvWckXn0hV12" }, // Updated WhatsApp link
                    { icon: <FaYoutube size={40} />, name: "YouTube", color: "bg-red-600", link: "https://www.youtube.com/@rajesh-devops" }, // Updated YouTube link
                    { icon: <FaGithub size={40} />, name: "GitHub", color: "bg-gray-800", link: "https://github.com" }, // Placeholder link
                ].map((social) => (
                    <a 
                        key={social.name}
                        href={social.link}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`${social.color} flex flex-col items-center justify-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1`}
                    >
                        {social.icon}
                        <span className="mt-2 font-semibold text-lg">{social.name}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}
