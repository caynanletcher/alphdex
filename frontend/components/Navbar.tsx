import Image from "next/image";
import Link from "next/link";

const Navbar = () => (
  <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b bg-white/95 supports-backdrop-blur:bg-white/60">
    <div className="max-w-8xl mx-auto">
      <div className="py-4 border-b border-slate-900/10 lg:px-8 pr-2 lg:border-0 mx-4 lg:mx-0">
        <div className="relative flex items-center justify-between text-xl font-extrabold">
          <a href="/">
            <Image
              src="/logo.png"
              alt="Alphdex logo"
              width="40px"
              height="40px"
              className="rounded-lg bg-orange-100"
            />
          </a>
          <a href="/" className="mx-2 hidden lg:flex">
            ALPHDEX
          </a>
          <div className="relative items-center ml-auto">
            <nav className="text-sm lg:text-base leading-6 font-semibold">
              <ul className="flex space-x-8">
                <li>
                  <Link className="hover:text-sky-500" href="/sets">
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
