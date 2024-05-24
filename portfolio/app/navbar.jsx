"use client";

function Navbar() {
  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <p className="text-[#16f2b3] text-3xl font-bold">Munkherdene</p>
        </div>
        <ul
          className="md:flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100 transition-all duration-300"
          id="navbar-default"
        >
          <li>
            <a
              onClick={() => {
                smoothScrollTo("about");
              }}
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                ABOUT
              </div>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                smoothScrollTo("skills");
              }}
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                SKILLS
              </div>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                smoothScrollTo("projects");
              }}
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                PROJECTS
              </div>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                smoothScrollTo("contact");
              }}
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                CONTACT
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
