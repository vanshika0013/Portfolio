export const projects = [
  {
    id: "skillsync",
    name: "SkillSync",
    tagline: "A developer learning platform that keeps you consistent.",
    image: "/assets/skillsync-cover.png",
    overview:
      "SkillSync is a full-stack developer learning platform built to help students track their coding progress, manage weekly goals, and stay accountable — instead of bookmarking tutorials and never returning to them.",
    problem:
      "Most learning platforms are passive. You watch, you bookmark, you forget. There was no lightweight tool that let a student log daily progress, see it visualized, and stay accountable without the overhead of a full LMS.",
    solution:
      "We built a focused React + Vite app with Firebase authentication and UID-scoped local storage, so every user's progress, goals, and tasks are private and persist reliably — even across refreshes, which took real debugging work to get right.",
    features: [
      "Firebase authentication with persistent, race-condition-free sessions",
      "UID-scoped local storage so data never leaks between accounts",
      "Weekly goals and task manager for daily accountability",
      "Recharts-powered progress visualization",
      "Fully responsive dashboard across devices",
    ],
    techStack: ["React", "Vite", "Firebase", "Recharts", "CSS", "JavaScript"],
    challenges:
      "The hardest part was a Firebase authentication race condition — on refresh, the app would sometimes read local state before auth resolved, silently wiping user data. Fixing it meant restructuring the auth flow so no component trusted local data until Firebase confirmed the session.",
    learned:
      "I learned how easy it is for async timing bugs to hide behind something that 'mostly works,' and how much more resilient an app becomes once you design explicitly around loading and auth states instead of assuming they've already resolved.",
    github: "https://github.com/vanshika0013",
    demo: "https://skill-sync-five-sepia.vercel.app",
  },
];
