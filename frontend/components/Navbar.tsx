import Link from "next/link";

const Navbar = () => (
  <div>
    <Link className="" href="/">
      Alphdex
    </Link>
    <ul>
      <li>
        <Link href="/sets">Sets</Link>
      </li>
    </ul>
  </div>
);
export default Navbar;
