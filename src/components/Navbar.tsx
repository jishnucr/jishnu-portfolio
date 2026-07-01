const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '/Jishnu_CR_Resume.pdf', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#D4AF37]/10 bg-[#F7F3EB]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-lg font-semibold tracking-tight text-[#111111]">
          Jishnu C R
        </a>
        <nav className="hidden flex-wrap items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex items-center rounded-full border border-[#D4AF37]/15 bg-white/80 px-4 py-2 text-sm font-medium text-[#5A5248] transition hover:border-[#D4AF37] hover:text-[#111111]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
