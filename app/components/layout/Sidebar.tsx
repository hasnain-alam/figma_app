const Sidebar = () => {
    const navItems = [
        "Home",
        "Stages & Checklist",
        "Upload Docs",
        "Preferred Vendors",
        "Tech Stack",
        "Targets",
        "Zee Sales Targets",
        "MAI Settings",
        "Pending Questions",
    ];

    return (
        <aside className="w-54 bg-gradient-to-b from-blue-950 to-blue-800 text-white pt-0 pb-4 pl-4 hidden md:flex flex-col justify-between">
            <nav className="space-y-1">
                {navItems.map((item) => (
                    <div key={item} className="hover:bg-blue-600 p-2 rounded cursor-pointer">
                        {item}
                    </div>
                ))}
            </nav>
            <div className="text-sm text-gray-100 mt-65">Logout</div>
        </aside>
    );
};

export default Sidebar;