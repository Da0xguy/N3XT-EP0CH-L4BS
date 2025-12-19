import Navbar from "../components/navbar";

export default function LandingPage() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-28 pb-24 bg-white">
        <div className="absolute inset-x-0 top-0 h-[280px] bg-[url('/waves-bg.png')] bg-cover opacity-40 -z-10" />
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Pioneering the Future of Web3
          </h1>

          <p className="mt-4 text-gray-600 text-base md:text-lg">
            NextEpoch Labs is an innovation studio building the foundational
            technologies and applications that will define the next era of the
            decentralized web.
          </p>

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-md text-sm font-medium">
            Explore Our Work
          </button>
        </div>
      </section>


      {/* ABOUT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            About NextEpoch Labs
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We are a team of researchers, engineers, and designers passionate about
            decentralized systems. We build scalable, user-focused Web3 solutions
            and work with founders and enterprises to turn complex ideas into
            impactful decentralized products.
          </p>
        </div>
      </section>


      {/* WHAT WE BUILD */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-3xl font-bold text-gray-900">
            What We Build
          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600">
            Foundational layers and innovative applications empowering the next
            generation of the internet.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Decentralized Protocols",
              "DeFi & NFT Platforms",
              "Metaverse & Identity",
            ].map((title, i) => (
              <div
                key={i}
                className="bg-[#F5D8A0] p-6 rounded-xl text-left hover:-translate-y-1 transition"
              >
                <div className="w-10 h-10 bg-white rounded-lg mb-3" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className=" text-gray-700 text-sm">
                  Scalable systems designed for real-world Web3 adoption.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* PRODUCT HIGHLIGHTS */}
      <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Product Highlights
            </h2>

            <p className="mt-3 max-w-2xl mx-auto text-gray-600">
              A glimpse into the solutions we’re actively building.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { img: "/suiwall.png", title: "SuiWall Swap" },
                { img: "/medlock.png", title: "Med Lock" },
                { img: "/backstage.png", title: "Backstage" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-xl shadow-sm overflow-hidden text-left"
                >
                  <img src={item.img} className="h-44 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Learn how this product pushes Web3 forward.
                    </p>
                    <span className="inline-block mt-3 text-blue-600 font-medium cursor-pointer">
                      Learn More →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


      {/* WHY CHOOSE US */}
      <section className="px-[10%] py-24 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Why Choose NextEpoch Labs?
        </h2>

        <p className="mx-auto max-w-[750px] text-gray-600">
          Partner with us to leverage unparalleled expertise and a commitment to
          innovation.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-10 max-w-[1000px] mx-auto">
          {[
            "Expert Team",
            "Future-Proof Solutions",
            "Transparent & Secure",
            "Collaborative Partnership",
          ].map((title, i) => (
            <div key={i} className="w-[210px] text-center">
              <div className="w-11 h-11 mx-auto bg-gray-200 rounded-full mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">
                {title}
              </h4>
              <p className="text-gray-600 text-sm">
                High-impact expertise built for long-term success.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-[10%] py-20 bg-blue-100 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Build the Future with Us?
        </h2>

        <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-md font-medium">
          Get in Touch
        </button>
      </section>

      {/* FOOTER */}
      <footer className="px-[10%] py-6 bg-#1F2937-50 text-center text-sm text-gray-600">
        <p>© 2025 NextEpoch Labs — All Rights Reserved.</p>

        <div className="flex justify-center gap-6 mt-2">
          <span className="text-blue-600 cursor-pointer">Privacy Policy</span>
          <span className="text-blue-600 cursor-pointer">Terms of Service</span>
        </div>
      </footer>
    </>
  );
}
