/**
 * TEDxTapmi Initial Seed Data Models & Chatbot FAQ
 */

export const INITIAL_CMS_DATA = {
  hero: {
    title: "BREAK THE MOLD",
    subtitle: "Ideas Worth Spreading at TAPMI",
    description: "Join us for an inspiring day of groundbreaking keynotes, disruptive innovations, and powerful stories from trailblazers shaping the future of technology, business, design, and humanity.",
    date: "October 24, 2026",
    time: "09:00 AM IST",
    location: "TAPMI Campus Auditorium, Manipal",
    themeTagline: "Independently Organized TED Event • 6th Edition"
  },
  speakers: [
    {
      id: "sp-1",
      name: "Dr. Ananya Roy",
      role: "AI & Neural Ethics Researcher",
      topic: "Conscious Machines & the Human Soul",
      bio: "Dr. Ananya Roy leads neural ethics research exploring the threshold between synthetic intelligence and human empathy. Featured in MIT Tech Review and global AI summits.",
      category: "Technology",
      image: "/assets/speaker_tech_1785676484953.png",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    {
      id: "sp-2",
      name: "Vikram Sengupta",
      role: "Global Creative Director & Futurist",
      topic: "Designing for the Next Billion Interfaces",
      bio: "Vikram is an award-winning design strategist who has spearheaded brand revolutions for Fortune 500 giants. He advocates for emotional architecture and human-first digital design.",
      category: "Design",
      image: "/assets/speaker_creative_1785676498085.png",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    {
      id: "sp-3",
      name: "Meera Krishnan",
      role: "CleanTech Venture Founder",
      topic: "Decarbonizing Earth's Supply Chains",
      bio: "Meera built one of Asia's fastest-growing zero-emission logistics platforms. She shares practical roadmaps for sustainable capital and resilient circular economies.",
      category: "Business",
      image: "/assets/speaker_entrepreneur_1785676510644.png",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    {
      id: "sp-4",
      name: "Karan Johar Sharma",
      role: "Behavioral Economist & Author",
      topic: "The Psychology of Irrational Choices",
      bio: "Author of 'Nudging Decisions', Karan examines how micro-incentives, cognitive biases, and social algorithms shape our everyday economic behavior.",
      category: "Entertainment",
      image: "/assets/tedx_hero_stage_1785676470447.png",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  ],
  gallery: [
    {
      id: "gal-1",
      title: "TEDx Keynote Stage 2025",
      category: "Keynotes",
      image: "/assets/tedx_hero_stage_1785676470447.png",
      caption: "Illuminated stage featuring our flagship red letter 'X' during opening ceremony."
    },
    {
      id: "gal-2",
      title: "Audience Standing Ovation",
      category: "Audience",
      image: "/assets/gallery_audience_1785676524016.png",
      caption: "500+ attendees filled the TAPMI Auditorium for an electric 8-hour session."
    },
    {
      id: "gal-3",
      title: "Speaker Prep Session",
      category: "Behind the Scenes",
      image: "/assets/speaker_creative_1785676498085.png",
      caption: "Behind the curtain backstage discussions with speakers prior to keynote delivery."
    },
    {
      id: "gal-4",
      title: "Executive Networking Lounge",
      category: "Networking",
      image: "/assets/speaker_entrepreneur_1785676510644.png",
      caption: "TAPMI students interacting with industry visionaries during high-tea."
    },
    {
      id: "gal-5",
      title: "Future of AI Panel",
      category: "Keynotes",
      image: "/assets/speaker_tech_1785676484953.png",
      caption: "Interactive Q&A panel exploring machine intelligence and human ethics."
    }
  ],
  timeline: [
    {
      year: "2025",
      theme: "Catalyst of Change",
      attendees: "650+",
      speakersCount: "8 Speakers",
      highlight: "Expanded to multi-track student workshops & live digital livestream across 12 countries."
    },
    {
      year: "2024",
      theme: "Uncharted Realms",
      attendees: "500+",
      speakersCount: "7 Speakers",
      highlight: "Introduced youth innovation showcase and immersive XR design exhibits."
    },
    {
      year: "2023",
      theme: "Quantum Leaps",
      attendees: "450+",
      speakersCount: "6 Speakers",
      highlight: "Featured groundbreaking talks on space tech, climate policy, and behavioral economics."
    },
    {
      year: "2022",
      theme: "Resilience & Beyond",
      attendees: "400+",
      speakersCount: "6 Speakers",
      highlight: "Hybrid edition connecting TAPMI alumni globally with physical delegates."
    },
    {
      year: "2021",
      theme: "Inaugural Edition: Sparking Ideas",
      attendees: "350+",
      speakersCount: "5 Speakers",
      highlight: "The foundation of TEDx at TAPMI Manipal, establishing our annual tradition of excellence."
    }
  ],
  registrations: [
    {
      id: "REG-8921",
      fullName: "Rohan Varma",
      email: "rohan.varma25@tapmi.edu.in",
      rollNo: "250102144",
      phone: "+91 98765 43210",
      cohort: "TAPMI MBA Student",
      registeredAt: "2026-08-01 14:32"
    },
    {
      id: "REG-8922",
      fullName: "Priya Sundaram",
      email: "priya.sundaram@gmail.com",
      rollNo: "N/A",
      phone: "+91 98123 76543",
      cohort: "External Delegate / Guest",
      registeredAt: "2026-08-01 16:45"
    }
  ]
};

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "When faced with a complex global challenge, what is your primary instinct?",
    options: [
      { label: "Build an algorithmic AI or technological system to solve it at scale.", category: "Technology" },
      { label: "Redesign the user experience and emotional connection to change habits.", category: "Design" },
      { label: "Establish a profitable business model and rally investor capital.", category: "Business" },
      { label: "Study human decision-making and craft compelling stories to influence behavior.", category: "Entertainment" }
    ]
  },
  {
    id: 2,
    question: "What topic makes your eyes light up in late-night conversations?",
    options: [
      { label: "The future of synthetic consciousness and quantum neural nets.", category: "Technology" },
      { label: "Minimalist aesthetics, architecture, and intuitive design interfaces.", category: "Design" },
      { label: "Venture funding, green energy economics, and scaling supply chains.", category: "Business" },
      { label: "Cognitive biases, pop psychology, and storytelling tricks.", category: "Entertainment" }
    ]
  },
  {
    id: 3,
    question: "How do you prefer to present your ideas to a crowded room?",
    options: [
      { label: "With data-driven charts, live prototypes, and technical rigor.", category: "Technology" },
      { label: "With stunning visual slides, bold typography, and interactive demos.", category: "Design" },
      { label: "With clear economic ROI, strategic growth roadmaps, and vision.", category: "Business" },
      { label: "With witty anecdotes, humor, and memorable personal stories.", category: "Entertainment" }
    ]
  },
  {
    id: 4,
    question: "Which quote resonates most with your personal philosophy?",
    options: [
      { label: "'The best way to predict the future is to invent it.'", category: "Technology" },
      { label: "'Simplicity is the ultimate sophistication.'", category: "Design" },
      { label: "'Capital follows vision, resilience builds legacies.'", category: "Business" },
      { label: "'The storytellers set the rules for the next generation.'", category: "Entertainment" }
    ]
  }
];
