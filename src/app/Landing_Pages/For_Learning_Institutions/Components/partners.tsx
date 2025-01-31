import Image from "next/image";

export function Partners() {
  const partners = [
    { name: "TORI", logo: "/tori.png" },
    { name: "GDO Kigali", logo: "/gdg.png" },
    { name: "Education Collaboration", logo: "/EducationCollaborative.png" },
    { name: "Kepler", logo: "/kepler.png" },
    { name: "HIIL", logo: "/hiil.png" },
    { name: "CIBA", logo: "/ciba.png" },
    { name: "ARED", logo: "/ared.png" },
    { name: "IGIHE", logo: "/igihe.png" },
    { name: "VIAMO", logo: "/viamo.png" },
    { name: "Kepler", logo: "/kepler.png" },
    { name: "Laterite", logo: "/laterite.png" },
    { name: "Soko Fund", logo: "/sokofund.png" },
  ];

  return (
    <section className="py-8 sm:py-16">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-4xl text-[#03192E] sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          Join a few Educational Institutions using Skills Challenges by Umurava
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-2 sm:p-4"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={60}
                className="h-8 sm:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
