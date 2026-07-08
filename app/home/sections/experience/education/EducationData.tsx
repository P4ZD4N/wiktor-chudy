export type Education = {
  id: number;
  headline: string;
  school: string;
  period: string;
};

export const educationData: Education[] = [
  {
    id: 2,
    headline: "Engineer's Degree — Computer Science",
    school: 'Polish-Japanese Academy of Information Technology in Warsaw',
    period: 'Oct 2023 — Present',
  },
  {
    id: 1,
    headline: 'IT Technician — Computer Science',
    school: 'Techniczne Zakłady Naukowe in Częstochowa',
    period: 'Sep 2023 — Apr 2023',
  },
];
