import Link from "next/link";
import { HeaderActions } from "./header-actions";

export function Header() {
  return (
    <header className="flex items-center justify-between pb-6">
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2 font-bold">
          🍕 PIZZA
        </Link>
      </div>
      <HeaderActions />
    </header>
  );
}
