export default function StorySection() {
    return (
      <section className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
        {/* Text Section */}
        <div className="w-full lg:w-2/5 text-center lg:text-left">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-[#2B71F0]">
            Our Story
          </h2>
          <p className="mt-4 sm:mt-6 text-lg sm:text-[16px] lg:text-[17px] font-normal text-[#2B3338] leading-relaxed">
            With 3 years of experience matching African digital talents to local
            and global job markets, we still remain with a big number of jobs
            that remain unfilled due to the lack of experienced African Talents.
          </p>
          <p className="mt-4 sm:mt-6 text-lg sm:text-[16px] lg:text-[17px] font-normal text-[#2B3338] leading-relaxed">
            Driven by our mission to place skilled and professional digital
            talent, we created Skills Challenges as a project-based learning
            solution for talents to gain real-world experience, solve problems,
            and build portfolios so that they become ready for global job
            markets.
          </p>
        </div>

        {/* Video Section */}
        <div className="w-full lg:w-1/2 p-4 rounded-2xl">
          <video
            controls
            className="rounded-lg w-full h-auto max-h-[400px] object-cover"
          >
            <source src="/umurava.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    );
  }
  