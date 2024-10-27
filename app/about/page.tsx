import { FaCode, FaCloud, FaCertificate, FaUserCheck } from 'react-icons/fa';
import { SiJenkins, SiDocker, SiKubernetes, SiTerraform } from 'react-icons/si';

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 pt-24 px-4">
            <h1 className="text-5xl font-bold mb-8 text-blue-600 underline decoration-4">About Me</h1>

            <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8 transition-transform duration-200 hover:scale-105">
                <h2 className="text-3xl font-semibold mb-4 flex items-center">
                    <FaUserCheck className="mr-2 text-blue-600" /> Professional Summary
                </h2>
                <p className="mb-4">
                    Senior Information System Consultant II at Lumen Technologies with extensive experience in DevOps and Cloud Computing. 
                    Skilled in continuous improvement, automation, and infrastructure management.
                </p>

                <h2 className="text-3xl font-semibold mb-4 flex items-center">
                    <FaCode className="mr-2 text-blue-600" /> Skills
                </h2>
                <ul className="list-disc list-inside mb-4 space-y-2">
                    <li className="flex items-center"><FaCode className="mr-2 text-gray-600"/> Bash</li>
                    <li className="flex items-center"><FaCode className="mr-2 text-gray-600"/> Python</li>
                    <li className="flex items-center"><SiDocker className="mr-2 text-gray-600"/> GitHub</li>
                    <li className="flex items-center"><SiTerraform className="mr-2 text-gray-600"/> Terraform</li>
                    <li className="flex items-center"><SiJenkins className="mr-2 text-gray-600"/> Jenkins</li>
                    <li className="flex items-center"><SiDocker className="mr-2 text-gray-600"/> Docker</li>
                    <li className="flex items-center"><SiKubernetes className="mr-2 text-gray-600"/> Kubernetes</li>
                    <li className="flex items-center"><FaCloud className="mr-2 text-gray-600"/> Ansible</li>
                    <li className="flex items-center"><FaCloud className="mr-2 text-gray-600"/> Cloud Computing (AWS, Azure)</li>
                    <li className="flex items-center"><FaCloud className="mr-2 text-gray-600"/> CI/CD</li>
                    <li className="flex items-center"><FaCloud className="mr-2 text-gray-600"/> Linux System Administration</li>
                    <li className="flex items-center"><FaCloud className="mr-2 text-gray-600"/> Containerization</li>
                </ul>

                <h2 className="text-3xl font-semibold mb-4 flex items-center">
                    <FaUserCheck className="mr-2 text-blue-600" /> Professional Experience
                </h2>
                <div className="mb-4 border-b pb-4">
                    <h3 className="font-semibold">Senior Information System Consultant II</h3>
                    <p>Lumen Technologies</p>
                    <p className="text-gray-600">June 2013 - April 2023</p>
                    <p className="mt-2">
                        • Developed and implemented continuous improvements for existing infrastructure, tools, and processes. 
                        • Managed AWS assets and integrated multiple AWS resources into solutions using Terraform.
                        • Automated CI build and deployment processes using Jenkins and Docker.
                        • Collaborated with developers to establish and maintain development environments.
                    </p>
                </div>
                
                <div className="mb-4 border-b pb-4">
                    <h3 className="font-semibold">Senior DevOps Engineer</h3>
                    <p>DXC Technology</p>
                    <p className="text-gray-600">April 2023 - February 2024</p>
                </div>
                
                <div className="mb-4 border-b pb-4">
                    <h3 className="font-semibold">Senior Manager in DevOps & Cloud</h3>
                    <p>Capgemini</p>
                    <p className="text-gray-600">March 2024 - Present</p>
                </div>

                <h2 className="text-3xl font-semibold mb-4 flex items-center">
                    <FaCertificate className="mr-2 text-blue-600" /> Education
                </h2>
                <p className="font-semibold">Master of Technology (MTech), Computer Science</p>
                <p>Jawaharlal Nehru Technological University, Kakinada</p>
                
                <p className="font-semibold mt-2">Bachelor of Technology (BTech), Mechanical Engineering</p>
                <p>Bangalore University</p>

                <h2 className="text-3xl font-semibold mb-4 flex items-center">
                    <FaCertificate className="mr-2 text-blue-600" /> Certifications
                </h2>
                <p className="font-semibold">AWS Certified Solutions Architect - Associate</p>
                <p>Issued August 2022 - Expires August 2025</p>

                <h2 className="text-3xl font-semibold mb-4 flex items-center">
                    <FaCertificate className="mr-2 text-blue-600" /> Endorsements
                </h2>
                <ul className="list-disc list-inside">
                    <li>CI/CD: 2 endorsements</li>
                    <li>Cloud Computing: 3 endorsements</li>
                    <li>Linux: 4 endorsements</li>
                    <li>Jenkins: 4 endorsements</li>
                    <li>Docker: 4 endorsements</li>
                    <li>Kubernetes: 4 endorsements</li>
                    <li>Terraform: 4 endorsements</li>
                    <li>Git: 4 endorsements</li>
                </ul>
            </div>
        </div>
    );
}
