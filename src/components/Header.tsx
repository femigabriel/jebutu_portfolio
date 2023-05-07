import Link from "next/link";

export default function Headers() {
  return (
    <div className="p-10 px-20">
      <header className="flex justify-between">
        <div></div>
        <nav className="flex">
          <li className="">
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/about"> About me</Link>
          </li>
          <li>
            <Link href="/resume"> Resume</Link>
          </li>
          <li>
            <Link href="/contacts"> Contact</Link>
          </li>
        </nav>
      </header>
    </div>
  );
}

