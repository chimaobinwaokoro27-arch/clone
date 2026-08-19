function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-[8%] py-5 border-b border-gray-300 bg-white">
      <div className="logo">
        <h1 className="font-serif text-3xl tracking-widest font-medium">
          ZAHRA FITS
        </h1>
      </div>

      <nav>
        <ul className="flex gap-6 list-none">
          <li>
            <a href="#" className="text-gray-800 text-sm no-underline hover:text-gray-600 transition-colors duration-300">
              HOME
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 text-sm no-underline hover:text-gray-600 transition-colors duration-300">
              SERVICES
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 text-sm no-underline hover:text-gray-600 transition-colors duration-300">
              FASHION
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 text-sm no-underline hover:text-gray-600 transition-colors duration-300">
              CLOTHING
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 text-sm no-underline hover:text-gray-600 transition-colors duration-300">
              TRENDING
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 text-sm no-underline hover:text-gray-600 transition-colors duration-300">
              STORE
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex gap-4 cursor-pointer">
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-4.34-4.34M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
          />
        </svg>


        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 21a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM19 21a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
          />
        </svg>
      </div>
    </header>
  );
}

export default Header;