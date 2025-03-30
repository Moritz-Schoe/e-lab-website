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
        "Kick off your journey with the Batch Introduction! During the onboarding weekend, you'll get introduced to TUM.ai, meet current and new members, and take part in social events - setting the foundation for your journey. The experience continues with a getaway trip designed to deepen connections with both previous and new members in an unforgettable setting."
    },
    {
      step: "01A",
      name: "Research Track",
      gradient: "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200",
      description:
        "Join a dedicated team working on an Impact Project aligned with your skills and interests, applying AI to address real-world challenges in a collaborative environment. These projects are designed to contribute to the broader research and technology community through tangible outcomes such as academic publications or open-source contributions. Along the way, you'll have the opportunity to engage deeply with our vibrant community, develop new skills, and take part in learning opportunities, trips, and special events—all while experiencing the hands-on, team-oriented culture that defines TUM.ai.",
    },
    {
      step: "01B",
      name: "Initiative Track",
      gradient: "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200",
      description:
        "Join one of our core departments and become a driving force behind everything that makes TUM.ai stand out. In this track, you'll dive into exciting projects, collaborate with motivated peers, and help shape the future of our community. Whether it's launching new ideas, strengthening our network, or making the day-to-day magic happen - you'll be at the heart of it all, growing your skills while making TUM.ai better for everyone. Alongside your work, you'll have the chance to engage deeply with our vibrant network, develop new skills, and take part in learning opportunities, trips, and special events.",
    },
    {
      step: "02",
      name: "Growth Opportunities",
      gradient: "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200",
      description:
        "After your first semester, your journey at TUM.ai doesn't end with your initial project. You'll have the opportunity to further shape the initiative by founding a strategic task force, joining a department or task force that's new to you or continuing in your current department, potentially taking on a Team Lead role.",
    },
    {
      step: "03",
      name: "Research Exchange (REX) Program",
      gradient: "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200",
      description:
        "After completing two semesters, you become eligible for the REX Program-your gateway to conducting research at world-renowned institutions like MIT, Harvard, or Berkeley. Through our strong alumni network, we'll help you find the right research topic, navigate the application process, and support you every step of the way. It's a unique chance to take your AI journey global and contribute to cutting-edge research on an international stage.",
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
            All of our active members embark on an exciting journey - working on projects, driving AI innovation, and helping shape the TUM.ai community. At the heart of it all is our community, which empowers every member to grow, take initiative, and turn bold ideas into reality. No matter your ambition, TUM.ai is here to help you pursue it and make a meaningful impact - together.
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
              <h2 className={cx("text-4xl font-bold text-slate-900 mb-6 tracking-tight", bitter.className)}>Our Core Departments</h2>
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
