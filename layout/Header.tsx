const Header = () => (
  <>
    <header
      className="absolute md:fixed h-header bg-white z-40 w-full"
      data-testid="page.header"
    >
      <div className="relative flex justify-center max-w-full-content mx-auto gap-8 h-header items-center">
        <a
          href="/"
          target="_self"
          className="flex flex-col justify-between items-center min-w-[300px] ml-3"
        >
          <div className="font-lulo mb-3">Devo</div>
          <div className="text-xs tracking-widest">Devo is doing something</div>
        </a>
        <div className="flex-grow pb-5 pr-5">
          <NavBar />
        </div>
      </div>
    </header>
    <div className="h-header"></div>
  </>
);

export default Header;