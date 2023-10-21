import Image from "next/image"
import Link from "next/link"

const navIcons = [
    'search',
    'heart',
    'user'
];

const Navbar = () => {
  return (
    <header className="w-full">
        <nav className="nav">
            <Link href="/" className="flex items-center gap-1">
                <p className="nav-logo">
                    Price<span className="text-primary">Scrape</span>
                </p>
            </Link>

            <div className="flex items-center gap-5">
                {navIcons.map((icon) => (
                    <div key={icon} className="p-1 cursor-pointer hover:border-b-2">{icon}</div>
                ))}
            </div>
        </nav>
    </header>
  )
}

export default Navbar