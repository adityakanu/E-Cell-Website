import ecellWhite from "../assets/Logo-White.png";

export default function Navbar() {
  return (
    <section
      id="navbar"
      className="font-Poppins font-light text-sm bg-transparent z-20 absolute"
    >
      <div className="">
        <ul className="flex justify-center items-center pt-4 px-5 ">
          <li className="ml-4 mr-auto">
            <a href="/">
              <img src={ecellWhite} className="w-10" alt="" />
            </a>
          </li>

          <li className="mr-6">
            <a className="text-white hover:text-cyan-300" href="/">
              Home
            </a>
          </li>

          <li className="mr-6">
            <a className="text-white hover:text-cyan-300" href="/">
              About Us
            </a>
          </li>

          <li className="mr-6">
            <a className="text-white hover:text-cyan-300" href="/">
              Initiatives
            </a>
          </li>

          <li className="mr-6">
            <a className="text-white hover:text-cyan-300" href="/">
              Gallery
            </a>
          </li>

          <li className="mr-4">
            <a className="text-white hover:text-cyan-300" href="/">
              Reach Out
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
