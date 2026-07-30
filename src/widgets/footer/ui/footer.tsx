import Link from "next/link";

const menuLinks = [
  { label: "Пиццы", href: "#" },
  { label: "Завтраки", href: "#" },
  { label: "Крылышки", href: "#" },
  { label: "Милкшейки", href: "#" },
];

const contactLinks = [
  { label: "Поддержка клиентов", href: "#" },
  { label: "Написать нам на почту", href: "#" },
  { label: "Обратная связь", href: "#" },
  { label: "Контакты", href: "#" },
];

const legalLinks = [
  { label: "Политика конфиденциальности", href: "#" },
  { label: "Пользовательское соглашение", href: "#" },
];

export function Footer() {
  return (
    <footer className="mt-6 rounded-3xl bg-orange-50 px-10 py-10">
      <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
        <div>
          <p className="font-bold">🍕 PIZZA</p>
          <p className="text-sm text-orange-900/70">Пиццерия</p>
        </div>

        <div>
          <p className="mb-2 font-semibold text-orange-950">Меню</p>
          <ul className="space-y-1 text-sm text-orange-800">
            {menuLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-2 font-semibold text-orange-950">Связаться с нами</p>
          <ul className="space-y-1 text-sm text-orange-800">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-orange-900/70">Доставка пиццы по всему миру</p>
        </div>
      </div>

      <div className="mt-8 flex justify-between text-sm text-orange-900/60">
        {legalLinks.map((link) => (
          <Link key={link.label} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
