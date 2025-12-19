import Navbar from "../components/navbar";

export default function LandingPage() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-28 pb-24 bg-white">
        <div className="absolute inset-x-0 top-0 h-[280px] bg-[url('/waves-bg.png')] bg-cover opacity-40 -z-10" />
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="md:text-6xl font-bold text-gray-900 leading-tight">
            Pioneering the Future of Web3
          </h1>

          <p className="mt-4 text-gray-600 text-base md:text-lg">
            NextEpoch Labs is an innovation studio building the foundational
            technologies and applications that will define the next era of the
            decentralized web.
          </p>

          <button className="mt-6 bg-[#9EC8FF] hover:bg-blue-700 transition text-white px-6 py-3 rounded-md text-sm font-medium">
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
              <div className="bg-[#F5D8A0] p-8 rounded-xl text-left hover:-translate-y-1 transition">
                <img src="src/assets/item2.png" className="w-10 h-10" />
                <h3 className="text-3xl font-bold text[#000000] mb-2">Decentralized Protocols</h3>
                <p className=" text-gray-700">
                  Crafting robust and secure blockchain protocols that serve as the backbone for future decentralized applications.
                </p>
              </div>
              <div className="bg-[#F5D8A0] p-8 rounded-xl text-left hover:-translate-y-1 transition">
                <img src="src/assets/item1.png" className="w-10 h-10" />
                <h3 className="text-3xl font-bold text-[#000000] mb-2">DeFi & NFT Platforms</h3>
                <p className=" text-gray-700">
                  Developing innovative financial tools and unique digital asset marketplaces that redefine ownership and value.
                </p>
              </div>
              <div className="bg-[#F5D8A0] p-8 rounded-xl text-left hover:-translate-y-1 transition">
                <img src="src/assets/item3.png" className="w-10 h-10" />
                <h3 className="text-3xl font-bold text-[#000000] mb-2">Metaverse & Identity</h3>
                <p className=" text-[#374151]">
                  Building immersive virtual environments and secure digital identity solutions for the next evolution of human interaction.
                </p>
              </div>
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
                { img: "src/assets/suiswap.png", title: "SuiWall Swap", content: "" },
                { img: "src/assets/medlock.png", title: "Med Lock", content: "" },
                { img: "src/assets/backstage.png", title: "Backstage", content: "" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#E5E7EB] rounded-xl shadow-sm overflow-hidden text-left"
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
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Why Choose NextEpoch Labs?
        </h2>

        <p className="mx-auto max-w-[750px] text-gray-600">
          Partner with us to leverage unparalleled expertise and a commitment to
          innovation.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-13 max-w-[1000px] mx-auto">
          {[
            {image: "src/assets/item4.png", title: "Expert Team", content: "Seasoned professionals with deep expertise in blockchain technology and decentralized systems."},
            {image: "src/assets/item7.png", title: "Future-Proof Solutions", content: "Building scalable, secure, and sustainable platforms designed for tomorrow's digital landscape."},
            {image: "src/assets/item6.png", title: "Transparent & Secure", content: "Commitment to open development, rigorous security audits, and ethical practices in all our projects."},
            {image: "src/assets/item5.png", title: "Collaborative Partnership", content: "We work closely with clients, ensuring their vision is realized with meticulous attention to detail and shared success."},
          ].map((item, i) => (
            <div key={i} className="w-[210px] text-center">
              <img src={item.image} className="w-11 h-11" />
              <h4 className="font-bold text-2xl text-gray-900 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-m">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-[10%] py-25 bg-[#EFF6FF] text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Build the Future with Us?
        </h2>

        <button className="bg-[#9EC8FF] hover:bg-blue-700 transition text-white px-6 py-2.5 rounded-md font-medium">
          Get in Touch
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1F2937] px-[10%] py-6 bg-#1F2937-50 text-center text-sm text-[#374151]">
        <p>© 2025 NextEpoch Labs — All Rights Reserved.</p>

        <div className="flex justify-center gap-6 mt-2">
          <span className="text-[#EDEDED] cursor-pointer">Privacy Policy</span>
          <span className="text-[#EDEDED] cursor-pointer">Terms of Service</span>
        </div>
      </footer>
    </>
  );
}

