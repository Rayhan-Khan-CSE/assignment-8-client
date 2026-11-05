"use client";
import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";
const ThemeToggle = () => {
    const [dark, setDark] = useState(false);
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
        }
    }, []);
    const handleTheme = () => {
        if (dark) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setDark(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setDark(true);
        }
    };
    return (
        <button
            onClick={handleTheme}
            type="button"
            aria-label="Toggle theme"
            title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-xl text-[#003366] shadow-sm transition hover:border-[#F4C542] hover:bg-[#F4C542]/20"
        >
            {dark ? <LuSun /> : <LuMoon />}
        </button>
    );
};
export default ThemeToggle;