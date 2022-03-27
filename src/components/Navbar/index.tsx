import Hamburger from 'components/Hamburger';
const Navbar = () => (
  <nav className="flex xl:h-1/8 w-full ">
    <div className="flex w-1/2 items-center justify-start pl-12 pt-4">
      <img
        className=" h-8 md:h-10 xl:h-16"
        src="./Minerva_Logo_FullColor.png"
        alt="Minerva's Logo"
      />
    </div>
    <div className="flex w-1/2 items-center justify-end xl:bg-primary-blue pr-12 text-xl xl:text-white text-primary-blue uppercase font-semibold font-header">
      <span className="pr-12 hidden md:block">About Us</span>
      <span className="hidden md:block">Articles</span>
      <Hamburger height="24px" width="24px" className="md:hidden" />
    </div>
  </nav>
);

export default Navbar;
