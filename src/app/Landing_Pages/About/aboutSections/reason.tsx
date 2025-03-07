"use client";
import Image from "next/image";
export default function Reason() {
  const offerings = [
    {
      title: "Bridging the Experience Gap",
      description:
        "Many talents acquired theoretical knowledge and are rejected from jobs because they lack work experience and are not able to in actions what they acquired in the schools.",
      icon: "/icons/Briefcase.svg",
      className: "md:col-span-2", // This makes it span both columns on medium screens
    },
    {
      title: "Bridging Education and Employment",
      description:
        "Traditional education doesnt' always prepare talents for the demands of the tech and digital economy and we are providing in-demand skills through Skills Challenges.",
      icon: "/icons/Briefcase.svg",
      className: "",
    },
    {
      title: "Preparing Talents for Global Job Markets",
      description:
        "We are ensuring that African talents shine globally and that's why we are equipping them with global technical experience and standout globally. ",
      icon: "/icons/Briefcase.svg",
      className: "",
    },
  ];
  return (
    <section className="py-8 sm:py-16">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-4xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#03192E]">
          Why we are solving this problem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-12">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className={`${offering.className} bg-[#2B71F0] rounded-xl p-8 sm:p-12 space-y-6`}
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center">
                <Image
                  src={offering.icon || "/placeholder.svg"}
                  alt=""
                  width={28}
                  height={28}
                  className="text-[#2B71F0]"
                />
              </div>
              <h3 className="text-2xl font-bold text-white">
                {offering.title}
              </h3>
              <p className="text-white/90 text-lg font-normal leading-relaxed">
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
