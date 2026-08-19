export default function Header() {
    return (
        <header
            className="
                flex
                items-center
                justify-between
                px-8
                py-5
                bg-white/80
                backdrop-blur-md
                shadow-md
                border-b
                border-slate-200
            "
        >
            <h1
                className="
                    text-3xl
                    font-extrabold
                    text-sky-600
                    tracking-wide
                    cursor-pointer
                "
            >
                DevTrack
            </h1>

            <input
                type="text"
                placeholder="Search..."
                className="
                    w-96
                    rounded-xl
                    border
                    border-slate-300
                    bg-slate-100
                    px-4
                    py-2
                    focus:outline-none
                    focus:ring-2
                    focus:ring-sky-400
                    transition-all
                "
            />

            <div className="flex items-center gap-6 text-2xl">
                <button className="hover:scale-110 transition">
                    🔔
                </button>

                <button className="hover:scale-110 transition">
                    👤
                </button>
            </div>
        </header>
    );
}