const Footer = () => (
  <footer className="xl:h-1/8 h-32 bg-primary-black text-white text-body flex flex-col gap-6 justify-center px-4">
    <div className="flex flex-wrap justify-center md:justify-start">
      <a className="mx-2">Terms of Service</a> | <a className="mx-2">Privacy Policy</a> |
      <a className="mx-2">CA Privacy Policy</a> |<a className="mx-2">Cookie Policy</a> |
      <a className="mx-2">Contact Us</a>
    </div>
    <div className="flex justify-between">
      <a className="mx-2">Follow us</a>
      <a className="mx-2">&copy; Minerva Analytics {new Date().getFullYear()}</a>
    </div>
  </footer>
);

export default Footer;
