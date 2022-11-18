import Link from "next/link";

const Navbar = () => (
  <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
    <div className="max-w-8xl mx-auto">
      <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
        <div className="relative flex items-center">
          <div className="text-xl font-extrabold text-slate-200">
            <Link className="mr-3 flex-none overflow-hidden" href="/">
              ALPHDEX
            </Link>
          </div>
          <div className="relative hidden lg:flex items-center ml-auto">
            <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
              <ul className="flex space-x-8">
                <li>
                  <Link
                    className="hover:text-sky-500 dark:hover:text-sky-400"
                    href="/sets"
                  >
                    Sets
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Navbar;
