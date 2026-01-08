import { School } from './types';

export const SCHOOLS: School[] = [
  {
    id: '1',
    rank: 1,
    name: "Ecole Globale International Girls' School",
    location: "Sahaspur Road, Horawala, Dehradun",
    description: "A fully residential girls' school that blends Indian traditions with modern education. Recognized among the top boarding schools in India, offering world-class sports facilities and academic excellence.",
    rating: 4.8,
    reviewCount: 842,
    image: "https://picsum.photos/id/16/800/600",
    fees: "₹ 7.5L - 10L",
    board: "CBSE & CIE",
    ratio: "1:10",
    tags: ["Girls Only", "Fully Residential", "World Class Sports"],
    isFeatured: true
  },
  {
    id: '2',
    rank: 2,
    name: "The Doon School",
    location: "Mall Road, Dehradun",
    description: "Specializing in all-boys boarding education, The Doon School has a strong legacy of producing leaders in various fields. Known for its vast campus and holistic development approach.",
    rating: 4.6,
    reviewCount: 655,
    image: "https://picsum.photos/id/49/800/600",
    fees: "₹ 10L - 12L",
    board: "IB & ISC",
    ratio: "1:9",
    tags: ["Boys Only", "Legacy School", "IB Curriculum"],
    isFeatured: false
  },
  {
    id: '3',
    rank: 3,
    name: "Welham Boys' School",
    location: "Acharya Narender Dev Marg, Dehradun",
    description: "Founded in 1937, Welham Boys' aims to provide a positive learning environment that encourages academic excellence and character building through a rich co-curricular program.",
    rating: 4.5,
    reviewCount: 420,
    image: "https://picsum.photos/id/20/800/600",
    fees: "₹ 8L - 10.5L",
    board: "CBSE",
    ratio: "1:12",
    tags: ["Boys Only", "Traditional", "Sports Focus"],
    isFeatured: false
  },
  {
    id: '4',
    rank: 4,
    name: "Woodstock School",
    location: "Mussoorie, Dehradun District",
    description: "One of the oldest residential schools in Asia, Woodstock offers a multicultural environment with students from over 30 nations, set in the serene foothills of the Himalayas.",
    rating: 4.7,
    reviewCount: 380,
    image: "https://picsum.photos/id/29/800/600",
    fees: "₹ 16L - 18L",
    board: "IB World",
    ratio: "1:6",
    tags: ["Co-Ed", "International", "Mussoorie"],
    isFeatured: false
  }
];