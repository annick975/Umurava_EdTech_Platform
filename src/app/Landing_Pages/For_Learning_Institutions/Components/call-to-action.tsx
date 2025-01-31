import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="px-4 py-8 sm:py-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="relative bg-[#2C71F0] rounded-[32px] px-4 sm:px-6 py-12 sm:py-24 overflow-hidden">
          {/* Background curves */}
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] border-[80px] border-[#FFFFFF]/10 rounded-full transform translate-y-1/2 -translate-x-1/2"
            aria-hidden="true"
          />
          <div
            className="absolute -top-[20%] -right-[10%] w-[300px] h-[300px] border-[60px] border-[#FFFFFF]/10 rounded-full"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to transform your learning institution?
            </h2>
            <Button className="bg-white hover:bg-white/95 text-[#2C71F0] hover:text-[#2C71F0]/90 font-semibold px-8 py-3 h-auto text-base rounded-lg">
              Let's Partner
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
