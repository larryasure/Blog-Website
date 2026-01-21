import codingMan from '../assets/coding-man.jpg'
import programNight from '../assets/programmer-night.jpg'
import codingMan from '../assets/fashion.jpg'
import codingMan from '../assets/fashion2.jpg'
import codingMan from '../assets/food.jpg'
import codingMan from '../assets/travel.jpg'
import codingMan from '../assets/lifestyle.jpg'

export const posts = [
  {
    id: 1,
    title: "10 Tips to Learn React Fast",
    slug: "10-tips-to-learn-react-fast",
    excerpt: "Quick tips to speed up your React learning journey...",
    content: "Full content of React tips...",
    createdAt: "2026-01-20",
    type: [{ typeof: "Tech", color: "#0957e8" }],
    image: codingMan ,
  },
  {
    id: 2,
    title: "How to Use Three.js in React",
    slug: "how-to-use-threejs-in-react",
    excerpt: "A simple guide to get started with 3D in React...",
    content: "Full content of Three.js guide...",
    createdAt: "2026-01-19",
    type: [{ typeof: "Tech", color: "#0957e8" }],
    image: programNight,
  },
  {
    id: 3,
    title: "5 Fashion Trends for 2026",
    slug: "fashion-trends-2026",
    excerpt: "Stay ahead in style with these trends...",
    content: "Full content of fashion trends...",
    createdAt: "2026-01-18",
    type: [{ typeof: "Fashion", color: "#f04a29" }],
    image: "/assets/fashion.jpg",
  },
  {
    id: 4,
    title: "Top Travel Destinations This Year",
    slug: "top-travel-2026",
    excerpt: "Plan your trips with these hotspots...",
    content: "Full content of travel post...",
    createdAt: "2026-01-17",
    type: [{ typeof: "Travel", color: "#28a745" }],
    image: "/assets/travel.jpg",
  },
  {
    id: 5,
    title: "Healthy Cooking Made Easy",
    slug: "healthy-cooking",
    excerpt: "Simple recipes for a healthier lifestyle...",
    content: "Full content of healthy cooking...",
    createdAt: "2026-01-16",
    type: [{ typeof: "Food", color: "#ffa500" }],
    image: "/assets/food.jpg",
  },
  {
    id: 6,
    title: "Morning Yoga Routines",
    slug: "morning-yoga",
    excerpt: "Start your day energized with these yoga moves...",
    content: "Full content of yoga routines...",
    createdAt: "2026-01-15",
    type: [{ typeof: "Lifestyle", color: "#8a2be2" }],
    image: "/assets/yoga.jpg",
  },
  {
    id: 7,
    title: "Street Style Photography Tips",
    slug: "street-style-photography",
    excerpt: "Capture the city’s style like a pro photographer...",
    content: "Full content of photography tips...",
    createdAt: "2026-01-14",
    type: [{ typeof: "Fashion", color: "#f04a29" }],
    image: "/assets/street-style.jpg",
  },
];
