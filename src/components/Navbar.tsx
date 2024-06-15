const Navbar = () => {
  return (
    <>
      <nav className="flex w-full items-center justify-between border-b bg-slate-800 p-4 text-xl font-semibold">
        <div>Logo</div>
        <div className="flex items-center space-x-4">
          <div>Books</div>
          <div>SignIn</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
