import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineEventNote } from "react-icons/md";
import { LuView } from "react-icons/lu";
const RecentUpcomingEvents = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`, {
        cache: "no-store",
    });
    const data = await res.json();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const upcomingEvents = data
        .filter((event) => {
            if (!event.eventDate) return false;
            const eventDate = new Date(`${event.eventDate}T00:00:00`);
            return eventDate > today;
        })
        .sort((a, b) => a.eventDate.localeCompare(b.eventDate))
        .slice(0, 6);
    const formatDate = (date) => {
        return new Date(`${date}T00:00:00`).toLocaleDateString("en-BD", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    };
    return (
        <section className="min-h-screen bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-300">
                <div className="mb-12 text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B68A00]">
                        Discover What’s Next
                    </p>
                    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#003366] sm:text-4xl">
                        Recent Upcoming Events
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
                        Discover meaningful opportunities, connect with volunteers,
                        and help create a positive impact in communities across Bangladesh.
                    </p>
                    <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#F4C542]" />
                </div>
                {upcomingEvents.length > 0 ? (
                    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                        {upcomingEvents.map((event) => (
                            <article
                                key={event._id}
                                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="relative h-56 overflow-hidden bg-gray-100">
                                    {event.imageUrl ? (
                                        <Image
                                            src={event.imageUrl}
                                            alt={event.title || "Community event"}
                                            width={600}
                                            height={400}
                                            unoptimized
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="flex h-full items-center justify-center text-gray-400">
                                            No Image Available
                                        </div>
                                    )}
                                    {event.eventType && (
                                        <span className="absolute left-4 top-4 rounded-full bg-[#F4C542] px-3 py-1.5 text-xs font-bold text-[#003366] shadow-sm">
                                            {event.eventType}
                                        </span>
                                    )}
                                </div>
                                <div className="flex flex-1 flex-col p-5 sm:p-6">
                                    <h3 className="text-xl font-bold leading-snug text-[#003366] transition group-hover:text-blue-800">
                                        {event.title}
                                    </h3>
                                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                                        {event.description}
                                    </p>
                                    <div className="mt-5 flex items-start gap-3">
                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-lg">
                                            <SlLocationPin />
                                        </span>
                                        <div>
                                            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                                Location
                                            </p>
                                            <p className="mt-1 text-sm font-semibold text-gray-700">
                                                {event.location}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-start gap-3">
                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-lg">
                                            <MdOutlineEventNote />
                                        </span>
                                        <div>
                                            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                                Event Date
                                            </p>
                                            <p className="mt-1 text-sm font-semibold text-gray-700">
                                                {formatDate(event.eventDate)}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-auto pt-6">
                                        <Link
                                            href={`/events/${event._id}`}
                                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#003366] px-5 py-3.5 text-sm font-bold text-white transition duration-300 hover:bg-[#004080] focus:outline-none focus:ring-2 focus:ring-[#F4C542] focus:ring-offset-2"
                                        >
                                            View Event
                                            <span
                                                aria-hidden="true"
                                                className="text-lg text-[#F4C542] transition-transform group-hover:translate-x-1"
                                            >
                                                <LuView />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="rounded-3xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F4C542]/20 text-3xl">
                            📅
                        </div>
                        <h3 className="mt-5 text-2xl font-bold text-[#003366]">
                            No Upcoming Events
                        </h3>
                        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
                            There are no upcoming events right now. Please check back later.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};
export default RecentUpcomingEvents;