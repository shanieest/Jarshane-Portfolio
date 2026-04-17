import { NavLink } from 'react-router-dom';

export default function Header() {

    const linkStyles = ({ isActive }: { isActive: boolean }) => 
    `px-4 py-2 border-2 transition-all duration-200 uppercase text-xs font-black tracking-widest ${
        isActive 
        ? "bg-white text-slate-900 border-white" 
        : "border-transparent hover:border-white text-slate-400 hover:text-white"
    }`;

    return (
    <header className="text-white p-6 overscroll-behavior-none flex left-0 top-0 w-full z-50 animate-in fade-in slide-in-from-top duration-1000">
        <nav className="flex justify-between max-w-6xl mx-auto">

        <div className="flex gap-2">
            <NavLink to="/home" className={linkStyles}>
            Home
            </NavLink>
            <NavLink to="/about" className={linkStyles}>
                About
            </NavLink>
            <NavLink to="/contact" className={linkStyles}>
                Contact
            </NavLink>
            <NavLink to="/projects" className={linkStyles}>
                Projects
            </NavLink>
            <NavLink to="/resume" className={linkStyles}>
                Resume
            </NavLink>
            </div>
        </nav>
        </header>
    );
}
