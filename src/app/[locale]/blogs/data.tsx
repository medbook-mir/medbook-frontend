import blog1 from "@/assets/images/blog_1.webp"

export interface BlogData {
  id: number
  title: string
  description: string
  image: any
  date: string
  category: string
  author: string
  content?: string
}

export const blogsData: BlogData[] = [
  {
    id: 1,
    title: 'The Importance of Preventive Care: Screenings You Shouldn\'t Skip',
    description: 'Ignoring these tests could cost you years. Check now!',
    image: blog1,
    date: '2024-01-15',
    category: 'Preventive Care',
    author: 'Kathrin Schenk-Losse',
    content: `Preventive care is one of the most effective ways to maintain long-term health, yet many people only visit the doctor when they're already sick. Regular health screenings can detect potential issues early—when they're most treatable—saving lives, reducing healthcare costs, and improving quality of life.

In this article, we'll explore:

✅ Why preventive screenings matter
✅ Key screenings by age and gender
✅ How often you should get checked
✅ Overcoming common barriers to preventive care

Why Preventive Screenings Matter

Many serious conditions (like high blood pressure, diabetes, and certain cancers) develop silently, showing no symptoms only at advanced stages. Early detection through screenings can:

• Prevent disease progression (e.g., catching prediabetes before it becomes diabetes).
• Increase treatment success rates (e.g., early-stage cancer has much higher survival rates).
• Save money by avoiding costly emergency treatments.
• Improve longevity and quality of life.

Essential Screenings You Shouldn't Skip

Many serious conditions (like high blood pressure, diabetes, and certain cancers) develop silently, showing no symptoms only at advanced stages. Early detection through screenings can:

• Prevent disease progression (e.g., catching prediabetes before it becomes diabetes).
• Increase treatment success rates (e.g., early-stage cancer has much higher survival rates).
• Save money by avoiding costly emergency treatments.
• Improve longevity and quality of life.`
  },
  {
    id: 2,
    title: 'Understanding Heart Health: Prevention and Care',
    description: 'Learn about the essential steps to maintain a healthy heart and prevent cardiovascular diseases through proper lifestyle choices.',
    image: blog1,
    date: '2024-01-10',
    category: 'Heart Health',
    author: 'Kathrin Schenk-Losse'
  },
  {
    id: 3,
    title: 'Mental Health Matters: Breaking the Stigma',
    description: 'Why mental health care is as important as physical health and how we can support each other in our wellness journey.',
    image: blog1,
    date: '2024-01-05',
    category: 'Mental Health',
    author: 'Dr. Michael Chen'
  },
  {
    id: 4,
    title: 'On the topic of "The compliance system against corruption and monopoly, its',
    description: 'The number of benefits in the youth notebook will be increased to 25, and a subsidy of 1.2 million soums will be allocated for young people to learn IT and foreign languages.',
    image: blog1,
    date: '2023-08-02',
    category: 'Healthcare Policy',
    author: 'Kathrin Schenk-Losse'
  },
  {
    id: 5,
    title: "Digital Transformation in Healthcare: What’s Next?",
    description:
      "From electronic health records to AI diagnosis, healthcare’s digital journey is just beginning.",
    image: blog1,
    date: "2024-02-12",
    category: "Digital Health",
    author: "Markus Feldmann"
  },
  {
    id: 6,
    title: "Nutrition Myths Busted: What Science Really Says",
    description:
      "Separating fact from fiction when it comes to diets, supplements, and healthy eating trends.",
    image: blog1,
    date: "2024-02-05",
    category: "Nutrition",
    author: "Clara Weber"
  },
  {
    id: 7,
    title: "The Role of Technology in Modern Public Health",
    description:
      "How data analytics, IoT, and digital tools are reshaping public health responses.",
    image: blog1,
    date: "2024-03-01",
    category: "Public Health",
    author: "Dr. Fabian Krause"
  },
  {
    id: 8,
    title: "Work-Life Balance: The Key to Long-Term Mental Wellness",
    description:
      "Simple, science-backed methods to maintain balance and avoid burnout.",
    image: blog1,
    date: "2024-03-15",
    category: "Lifestyle & Wellness",
    author: "Nina Schmidt"
  },
  {
    id: 9,
    title: "AI and the Future of Medical Diagnostics",
    description:
      "Artificial intelligence is set to revolutionize early detection and personalized medicine.",
    image: blog1,
    date: "2024-04-02",
    category: "Health Technology",
    author: "Dr. Stefan Keller"
  },
  {
    id: 10,
    title: "The Power of Preventive Policies in Community Health",
    description:
      "Why prevention, not cure, is the smartest investment governments can make.",
    image: blog1,
    date: "2024-04-20",
    category: "Health Policy",
    author: "Elena Fischer"
  },
  {
    id: 11,
    title: "How Mindfulness Can Transform Workplace Culture",
    description:
      "Mindfulness programs are improving productivity and mental clarity across organizations.",
    image: blog1,
    date: "2024-05-10",
    category: "Wellbeing",
    author: "Jonas Mayer"
  },
  {
    id: 12,
    title: "Aging Gracefully: Healthcare Innovations for Seniors",
    description:
      "From wearable tech to digital care assistants, innovation is redefining elderly care.",
    image: blog1,
    date: "2024-06-01",
    category: "Elderly Care",
    author: "Prof. Laura Neumann"
  },
  {
    id: 13,
    title: "Climate Change and Public Health: The Hidden Connection",
    description:
      "How global warming impacts respiratory diseases, vector-borne illnesses, and nutrition.",
    image: blog1,
    date: "2024-06-25",
    category: "Environmental Health",
    author: "Simon Berger"
  },
  {
    id: 14,
    title: "The Rise of Telemedicine: Opportunities and Challenges",
    description:
      "Telehealth is transforming care delivery but faces data privacy and accessibility hurdles.",
    image: blog1,
    date: "2024-07-12",
    category: "Digital Health",
    author: "Mira Vogel"
  },
  {
    id: 15,
    title: "Empowering Youth Through Health Education",
    description:
      "How early education on nutrition, hygiene, and wellness shapes healthier generations.",
    image: blog1,
    date: "2024-08-05",
    category: "Education & Health",
    author: "Dr. Natalie Braun"
  }
]
