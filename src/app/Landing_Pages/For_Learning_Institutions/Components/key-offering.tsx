import Image from "next/image";

export function KeyOfferings() {
  const offerings = [
    {
      title: "Employability and Career Development Opportunities",
      description:
        "Students gain hands-on experience working on real-world challenges and help them build professional networks that increase their chances and readiness of landing job opportunities and this lead to career advancement and long-term succes..",
      icon: "/icons/Briefcase.svg",
      className: "col-span-3 sm:col-span-1",
    },
    {
      title: "Practical Application of Classroom Knowledge",
      description:
        "The Skills Challenges bridge the gap between theoretical learning and practical application, reinforcing what students learn in their academic courses.",
      icon: "/icons/Briefcase.svg",
      className: "col-span-3 sm:col-span-1",
    },
    {
      title: "Students & Trainees Engagement",
      description:
        "Embed and incorporate Skills Challenges into your courses to give students and trainees hands-on projects and practices that enhance their learning experience and skills mastery. Competitive and project-based challenges keep students motivated and actively engaged in their learning journey.",
      icon: "/icons/Briefcase.svg",
      className: "col-span-3 sm:col-span-1",
    },
    {
      title: "Access to the Industry Experts & Mentors",
      description:
        "Skills Challenges expose students to industry experts and mentors who offer guidance, support, and insights on the trends of digital careers. This can help students gain a deep understanding of their chosen field.",
      icon: "/icons/Briefcase.svg",
      className: "col-span-3 sm:col-span-2",
    },
    {
      title: "Skills Assessments",
      description:
        "Embed our projects based tests and skills assessments directly into your curriculum.",
      icon: "/icons/Briefcase.svg",
      className: "col-span-3 sm:col-span-1",
    },
  ];

  return (
    <section className="py-8 sm:py-16">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-[#03192E]">
          Key Offerings & Benefits:
        </h2>
        <div className="grid grid-cols-3 gap-4 sm:gap-6">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className={`${offering.className} bg-[#2C71F0] rounded-xl p-4 sm:p-8 space-y-4 sm:space-y-6`}
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center">
                <Image
                  src={offering.icon || "/placeholder.svg"}
                  alt=""
                  width={24}
                  height={24}
                  className="text-[#2C71F0] w-4 h-4 sm:w-6 sm:h-6"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {offering.title}
              </h3>
              <p className="text-white text-xs sm:text-sm leading-relaxed">
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
