import "../app/globals.css";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <header id="side-header" className="side-header">
        <Link href="/">
          <span className="material-symbols-outlined header-item">
            check_circle
          </span>
        </Link>
        <Link href="/statistics">
          <span className="material-symbols-outlined header-item">
            monitoring
          </span>
        </Link>
        <Link href="/info">
          <span className="material-symbols-outlined header-item">help</span>
        </Link>
      </header>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main>{children}</main>
      </div>
    </>
  );
}
