// Define the types for Course and Video
type Video = {
    id: number;
    title: string;
    videoUrl: string;
};

type Course = {
    id: number;
    title: string;
    description: string;
    image: string;
    videos: Video[]; // Ensure videos is always present as an array
};

const courseData: Course[] = [
    {
        id: 1,
        title: "Docker Essentials",
        description: "Learn the basics of Docker and how to create and manage containers.",
        image: "/docker.jpg",
        videos: [
            { id: 1, title: "Introduction to Docker", videoUrl: "https://www.youtube.com/embed/e1hcBigmRmc" },
            { id: 2, title: "Docker Installation", videoUrl: "https://www.youtube.com/embed/zOGUydFHR1w" },
            { id: 3, title: "Docker Commands", videoUrl: "https://www.youtube.com/embed/E9KK_GmvCkw" },
            { id: 4, title: "Creating Docker Images", videoUrl: "https://www.youtube.com/embed/dheF0uqBx1k" },
            { id: 5, title: "Docker Networking", videoUrl: "https://www.youtube.com/embed/AZnfj4JALUw" },
            { id: 6, title: "Docker Compose", videoUrl: "https://www.youtube.com/embed/-hgQ-xfLch4" },
            { id: 7, title: "Docker Volumes", videoUrl: "https://www.youtube.com/embed/DmpgqHsI3vI" },
            { id: 8, title: "Docker Swarm", videoUrl: "https://www.youtube.com/embed/3ZQ2v6M1J-4" },
            { id: 9, title: "Docker Best Practices", videoUrl: "https://www.youtube.com/embed/cV4qSVDFaqI" },
            { id: 10, title: "Docker Security", videoUrl: "https://www.youtube.com/embed/N8dIGDSd0VE" },
            { id: 11, title: "Docker CI/CD", videoUrl: "https://www.youtube.com/embed/BKzy9Ww5aAg" },
            { id: 12, title: "Deploying Docker Containers", videoUrl: "https://www.youtube.com/embed/CfGP415W_RY" },
            { id: 13, title: "Troubleshooting Docker", videoUrl: "https://www.youtube.com/embed/I4emNd-0MkU" },
        ],
    },
    {
        id: 2,
        title: "Kubernetes Fundamentals",
        description: "Master the concepts of Kubernetes and orchestration of containerized applications.",
        image: "/k8s.jpg",
        videos: [], // Can be filled later if needed
    },
    {
        id: 3,
        title: "Ansible for Configuration Management",
        description: "Automate your infrastructure with Ansible and manage configurations easily.",
        image: "/ansible.jpg",
        videos: [], // Can be filled later if needed
    },
    {
        id: 4,
        title: "Continuous Integration with Jenkins",
        description: "Implement CI/CD pipelines using Jenkins for effective software development.",
        image: "/jenkins.png",
        videos: [], // Can be filled later if needed
    },
    {
        id: 5,
        title: "Terraform for Infrastructure as Code",
        description: "Learn how to use Terraform to provision and manage cloud resources.",
        image: "/terraform.png",
        videos: [], // Can be filled later if needed
    },
    {
        id: 6,
        title: "Monitoring with Prometheus and Grafana",
        description: "Set up monitoring and alerting for your applications using Prometheus and Grafana.",
        image: "/prometheus.png",
        videos: [], // Can be filled later if needed
    },
    {
        id: 7,
        title: "Introduction to DevOps Culture",
        description: "Understand the principles of DevOps and how to foster a collaborative culture.",
        image: "/Devops.png",
        videos: [], // Can be filled later if needed
    },
    {
        id: 8,
        title: "AWS Cloud Practitioner",
        description: "Get started with AWS and understand cloud concepts, services, and solutions.",
        image: "/aws.jpg",
        videos: [], // Can be filled later if needed
    },
    {
        id: 9,
        title: "Git and GitHub for Beginners",
        description: "Learn version control with Git and how to use GitHub for collaboration.",
        image: "/git.png",
        videos: [], // Can be filled later if needed
    },
    {
        id: 10,
        title: "Site Reliability Engineering (SRE)",
        description: "Explore the principles and practices of Site Reliability Engineering.",
        image: "/sre.png",
        videos: [], // Can be filled later if needed
    },
];

export default courseData;