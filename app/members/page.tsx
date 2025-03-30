import { bitter } from "@styles/fonts";
import { cx } from "class-variance-authority";
import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faRocket, faBuilding, faGraduationCap, faCode, faScaleBalanced, faUsers, faBullhorn, faHandshake, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import Hero from "@components/Hero";

export const metadata: Metadata = {
  title: "TUM.ai - Members",
};

interface Step {
  step: string;
  name: string;
  gradient: string;
  description: string;
}

const steps: Step[] = [
  {
    step: "00",
    name: "Batch Introduction",
    gradient: "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200",
    description:
      "Kick off your journey with the Batch Introduction Program! Here, you'll get introduced to TUM.ai, meet other new members, and participate in social events, setting the foundation for your journey.",
  },
  {
    step: "01A",
    name: "Impact Projects",
    gradient: "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200",
    description:
      "Engage in impactful AI projects that tackle real-world problems. This track will build your practical skills and introduce you to TUM.ai's collaborative work environment.",
  },
  {
    step: "01B",
    name: "Leadership Track",
    gradient: "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200",
    description:
      "Focus on developing leadership skills by joining an initiative workgroup. You'll contribute to TUM.ai's strategic direction and gain experience in organizing and leading teams.",
  },
  {
    step: "02",
    name: "Mission-based Task Force",
    gradient: "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200",
    description:
      "In the second semester, shift towards contributing to a mission-based task force, applying your skills to strategic initiatives and preparing for further TUM.ai involvement.",
  },
  {
    step: "03",
    name: "Research Exchange (REX) Program",
    gradient: "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200",
    description:
      "After completing two semesters, you're eligible for the REX Program. This program allows you to engage in research at prestigious institutions like MIT, Harvard, or Berkeley.",
  },
  {
    step: "04",
    name: "Alumni Program",
    gradient: "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200",
    description:
      "Having been with TUM.ai for two or more semesters, you can join the Alumni Program, opening up opportunities for continued networking and collaboration.",
  },
];

interface Department {
  name: string;
  icon: IconDefinition;
  description: string;
  gradient: string;
}

const departments: Department[] = [
  {
    name: "Makeathon",
    icon: faRocket,
    description: "Organizing Munich's largest AI Makeathon - a 48-hour virtual challenge where teams develop real-world business cases with AI. Features workshops, talks, and expert mentorship.",
    gradient: "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200",
  },
  {
    name: "Venture",
    icon: faBuilding,
    description: "Bridging the gap between ideas and successful AI startups. We foster innovation and entrepreneurial spirit within TUM.ai.",
    gradient: "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200",
  },
  {
    name: "Industry",
    icon: faGraduationCap,
    description: "Connecting TUM.ai members with industry partners for real-world AI projects during lecture-free periods.",
    gradient: "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200",
  },
  {
    name: "Education",
    icon: faGraduationCap,
    description: "Creating and delivering AI educational content and events for all skill levels - from beginner to expert.",
    gradient: "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200",
  },
  {
    name: "Software Dev",
    icon: faCode,
    description: "Building and maintaining TUM.ai's digital infrastructure, from in-house tools to cloud services.",
    gradient: "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200",
  },
  {
    name: "Legal & Finance",
    icon: faScaleBalanced,
    description: "Ensuring TUM.ai's compliance and financial sustainability while maintaining our non-profit status.",
    gradient: "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200",
  },
  {
    name: "Community",
    icon: faUsers,
    description: "Building and nurturing our community through events, buddy programs, and recruitment.",
    gradient: "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200",
  },
  {
    name: "Marketing",
    icon: faBullhorn,
    description: "Shaping TUM.ai's public image and promoting our vision through strategic communication.",
    gradient: "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200",
  },
  {
    name: "Partners & Sponsors",
    icon: faHandshake,
    description: "Building strategic partnerships and securing sponsorships to enable ambitious events and projects.",
    gradient: "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200",
  },
];

const Arrow = ({ color = "slate-400" }: { color?: string }) => (
  <div 
    className="flex justify-center items-center my-8"
  >
    <FontAwesomeIcon icon={faArrowDown} className={`text-${color} text-lg opacity-40`} />
  </div>
);

const Card = ({ step, className = "" }: { step: Step; className?: string }) => (
  <div className={`relative ${className}`}>
    <div
      className={`relative min-h-[240px] w-full rounded-xl border border-slate-200 shadow-sm ${step.gradient} flex flex-col items-center justify-center text-slate-900 px-12 py-10 text-center`}
    >
      <div className="absolute top-8 left-8 text-xs font-medium text-slate-500 tracking-wide">
        {step.step}
      </div>
      <h3 className="text-2xl font-semibold mb-6 tracking-tight text-slate-900">{step.name}</h3>
      <p className="text-sm text-slate-600 leading-relaxed max-w-[85%]">{step.description}</p>
    </div>
  </div>
);

const DepartmentCard = ({ department }: { department: Department }) => (
    <div className={`h-full relative rounded-xl border border-slate-200 shadow-sm ${department.gradient} p-8`}>
      <div className="flex items-center gap-4 mb-5">
        <FontAwesomeIcon icon={department.icon} className="text-slate-600 text-xl" />
        <h3 className="text-lg font-semibold text-slate-900 tracking-tight">{department.name}</h3>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed">{department.description}</p>
    </div>
);

export default function Members() {
  return (
    <>
      <Hero
        imageSrc={"/assets/tu_cropped.jpg"}
        title="Innovative & Passionate"
        subtitle="Who is behind the success of our initiative?"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-24">
          <h2 className={cx("text-4xl font-bold text-slate-900 mb-6 tracking-tight", bitter.className)}>
            The TUM.ai Member Journey
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            All of our active members go through an exciting journey, involving project work, contributing to AI innovation, building of TUM.ai community, and more. There is always room for growth and development, and our community supports its members in every step of the way.
          </p>
        </div>

        <div className="space-y-24">
          {/* Journey Section */}
          <div>
            <div className="flex flex-col gap-8">
              <Card step={steps[0]!} className="w-full" />
              
              <Arrow color="slate-400" />

              <div className="flex gap-16 justify-center">
                {steps.slice(1, 3).map((step) => (
                  <Card key={step.name} step={step} className="flex-1"/>
                ))}
              </div>

              <div className="flex gap-32 justify-center">
                <Arrow color="slate-400" />
                <Arrow color="slate-400" />
              </div>

              <Card step={steps[3]!} className="w-full" />
              
              <Arrow color="slate-400" />
              
              <Card step={steps[4]!} className="w-full" />
              
              <Arrow color="slate-400" />
              
              <Card step={steps[5]!} className="w-full" />
            </div>
          </div>

          {/* Departments Section */}
          <div>
            <div className="text-center mb-20">
              <h2 className={cx("text-4xl font-bold text-slate-900 mb-6 tracking-tight", bitter.className)}>Our Departments</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Discover the diverse teams that make TUM.ai thrive. Each department plays a crucial role in our mission to shape the future of AI.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
              {departments.map((dept) => (
                <DepartmentCard key={dept.name} department={dept} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
