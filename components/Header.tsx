import Link from "next/link";
import { useRouter } from "next/router";

export function Header() {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <div>
      <header className={"max-w-md mx-auto w-full text-amber-50"}>
        <nav className={"bg-gray-900 px-4 py-2"}>
          <Link href="/" className={`${currentRoute === "/" && "selected"}`}>
            Home
          </Link>
          <Link
            href="/details"
            className={`${currentRoute === "/details" && "selected"}`}
          >
            details
          </Link>
          <Link
            href="tasks"
            className={`${currentRoute === "/tasks" && "selected"}`}
          >
            tasks
          </Link>
        </nav>
      </header>
    </div>
  );
}
