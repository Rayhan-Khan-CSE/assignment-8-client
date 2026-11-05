const features = [
    {
        number: "01",
        icon: "⌕",
        title: "Discover Events",
        description:
            "Explore upcoming social service events near you and find meaningful ways to support your local community.",
        tag: "Explore Opportunities",
    },
    {
        number: "02",
        icon: "+",
        title: "Create Events",
        description:
            "Organize donation drives, winter clothing distributions, and community initiatives that make a real difference.",
        tag: "Lead With Purpose",
    },
    {
        number: "03",
        icon: "♡",
        title: "Join Events",
        description:
            "Participate in community activities, connect with volunteers, and turn your willingness to help into action.",
        tag: "Be a Volunteer",
    },
    {
        number: "04",
        icon: "✎",
        title: "Update Event Details",
        description:
            "Easily update your event information, change schedules, and keep volunteers informed about the latest event details.",
        tag: "Keep Everyone Updated",
    },
    {
        number: "05",
        icon: "▤",
        title: "Manage Your Events",
        description:
            "View your organized events, update event information, and keep your community initiatives organized.",
        tag: "Your Dashboard",
    },
    {
        number: "06",
        icon: "♧",
        title: "Build Community",
        description:
            "Bring people together around shared causes and help create a more caring, connected, and supportive society.",
        tag: "Make an Impact",
    },
];
const Features = () => {
    return (
        <section className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-300">
                <div className="mx-auto mb-14 max-w-2xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#F4C542]/20 px-4 py-2 text-sm font-bold text-[#003366]">
                        <span className="h-2 w-2 rounded-full bg-[#F4C542]"></span>
                        WHAT MAKES US DIFFERENT
                    </span>
                    <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#003366] sm:text-4xl lg:text-5xl">
                        Everything You Need to{" "}
                        <span className="text-[#B88700]">
                            Make a Difference
                        </span>
                    </h2>
                    <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                        Hermione makes it easier to discover social service
                        opportunities, organize community events, and work
                        together toward a better tomorrow.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <article
                            key={feature.number}
                            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#F4C542] hover:shadow-xl sm:p-8"
                        >
                            <span className="absolute right-6 top-5 text-5xl font-extrabold text-slate-100 transition group-hover:text-[#F4C542]/20">
                                {feature.number}
                            </span>
                            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#003366] text-3xl font-semibold text-[#F4C542] transition duration-300 group-hover:bg-[#F4C542] group-hover:text-[#003366]">
                                {feature.icon}
                            </div>
                            <h3 className="mt-7 text-xl font-bold text-[#003366] sm:text-2xl">
                                {feature.title}
                            </h3>
                            <p className="mt-3 min-h-21 text-sm leading-7 text-slate-600 sm:text-base">
                                {feature.description}
                            </p>
                            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                    {feature.tag}
                                </span>
                                <span className="text-xl font-bold text-[#003366] transition duration-300 group-hover:translate-x-1 group-hover:text-[#B88700]">
                                    →
                                </span>
                            </div>
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F4C542] transition-all duration-300 group-hover:w-full"></div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Features;