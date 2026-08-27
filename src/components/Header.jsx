import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">

        {/* Logo */}
        <a
          href="#home"
          className="logo"
          onClick={handleNavClick}
          aria-label="Shailesh Raut Home"
        >
          <span className="logo-mark">SR</span>
          <span>Shailesh Raut</span>
        </a>

        {/* Desktop / Mobile Navigation */}
        <nav
          className={`nav-links ${menuOpen ? "active" : ""}`}
          aria-label="Main Navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link"
              onClick={handleNavClick}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>
    </header>
  );
}

export default Header;
