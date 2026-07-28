"use client";
import { motion, fadeUpVar, staggerVar } from "./motion";

const features = [
  {
    icon: "Curricula",
    title: "Curriculum Mapping",
    desc: "Automatically align lesson plans to national standards. Supports competency mapping across Merdeka, Cambridge, and IB.",
  },
  {
    icon: "Sparkles",
    title: "AI Lesson Generator",
    desc: "Generate complete RPP and teaching modules from a topic. Includes activities, assessments, and differentiation strategies.",
  },
  {
    icon: "Clipboard",
    title: "Assessment Engine",
    desc: "Create diagnostic, formative, and summative assessments with auto-grading. Supports HOTS questions and rubrics.",
  },
  {
    icon: "Export",
    title: "Multi-Format Export",
    desc: "Export to PDF, Word, Google Docs, or share via LMS. Presentation mode for in-class use with one click.",
  },
  {
    icon: "Layout",
    title: "School Dashboard",
    desc: "Monitor lesson quality, teacher workload, and curriculum coverage across all subjects. Included with all paid plans.",
  },
  {
    icon: "Shield",
    title: "Data Privacy First",
    desc: "All data encrypted at rest and in transit. Compliant with UU PDP. On-premise deployment available.",
  },
];

// EduBI badge — shown in hero/pricing context
const eduBiBadge = {
  label: "EduBI",
  title: "Business Intelligence for Schools",
  sub: "Available with Ultimate plan",
  features: [
    "Student performance prediction across subjects and years",
    "Dinas Pendidikan standard report auto-generation",
    "Graduation rate & drop-out risk heatmaps",
    "Teacher effectiveness & resource allocation analytics",
  ],
};

export { eduBiBadge };
