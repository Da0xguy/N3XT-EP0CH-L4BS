export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-[75px] py-[15px] z-[1000]">
      {/* Logo */}
      <div className="flex items-center gap-[5px]">
        <img
          src=""
          alt="Next Epoch Labs Logo"
          className="w-[50px] h-[30px]"
        />
        <p className="font-bold text-[1.2rem] mt-[9px] mb-[1px]">
          NEXT EP0CH L4BS
        </p>
      </div>

      {/* Nav links */}
      <nav className="flex">
        {["About", "Works", "Projects", "Why Us", "Contact"].map((item) => (
          <a
            key={item}
            href=""
            className="px-4 py-2 text-gray-600 font-medium border-b-2 border-transparent transition-all duration-200 hover:text-[#FFD700]"
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  );
}
