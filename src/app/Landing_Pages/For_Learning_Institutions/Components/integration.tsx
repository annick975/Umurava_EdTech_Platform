import Image from "next/image";

export function Integration() {
  const steps = [
    "As Career Development and Job Readiness Program",
    "As Skills Assessments Method after a course or a term",
    "As extracurricular activities to complement academic courses",
    "As the portfolio of the Students",
    "As part of Capstone Projects or final-year assignments",
  ];

  return (
    <section className="py-8 sm:py-16 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#03192E]">
          How Skills Challenges Program can Be Integrated into your Learning
          Institution
        </h2>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#2C71F0] text-white font-semibold shrink-0 border border-[#0E225A] text-sm sm:text-base">
                  {index + 1}
                </div>
                <p className="text-gray-700 text-sm sm:text-base">{step}</p>
              </div>
            ))}
          </div>
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
            <Image
              src="/integrate.png"
              alt="Dashboard Preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
