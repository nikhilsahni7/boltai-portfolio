"use client"

import { useState } from 'react';
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Your Name
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="hover:text-primary transition-colors">About</Link>
            <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
            <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
            <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
            <ModeToggle />
          </div>
          <div className="md:hidden flex items-center">
            <ModeToggle />
            <button onClick={toggleMenu} className="ml-4">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link href="#about" className="block hover:text-primary transition-colors" onClick={toggleMenu}>About</Link>
            <Link href="#skills" className="block hover:text-primary transition-colors" onClick={toggleMenu}>Skills</Link>
            <Link href="#projects" className="block hover:text-primary transition-colors" onClick={toggleMenu}>Projects</Link>
            <Link href="#contact" className="block hover:text-primary transition-colors" onClick={toggleMenu}>Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;