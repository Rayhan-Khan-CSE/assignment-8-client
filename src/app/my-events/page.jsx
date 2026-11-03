import { auth } from '../../lib/auth';
import { headers } from 'next/headers';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MyEventsPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;

    const res = await fetch(`http://localhost:5000/my-events/${user.email}`);
    const events = await res.json();

    return (
        <div className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-300">

                <div className="mb-10 text-center">

                    <span className="inline-flex items-center gap-2 rounded-full bg-[#F4C542]/20 px-4 py-2 text-sm font-bold text-[#003366]">
                        <span className="h-2 w-2 rounded-full bg-[#F4C542]"></span>
                        YOUR ACTIVITIES
                    </span>

                    <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-[#003366] sm:text-4xl lg:text-5xl">
                        My Joined Events
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
                        Explore the community events you have joined and
                        continue making a positive impact.
                    </p>

                </div>

                <div className="mb-8 flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm">

                    <div>
                        <h2 className="text-lg font-bold text-[#003366]">
                            Joined Events
                        </h2>
                        <p className="mt-1 text-sm text-slate-500">
                            Your community participation
                        </p>
                    </div>

                    <div className="flex h-12 min-w-12 items-center justify-center rounded-xl bg-[#F4C542]/20 px-3 text-xl font-extrabold text-[#003366]">
                        {events.length}
                    </div>

                </div>

                {events.length > 0 ? (

                    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

                        {events.map((event, index) => (

                            <article
                                key={event._id || index}
                                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#F4C542] hover:shadow-xl"
                            >

                                <div className="relative h-56 overflow-hidden bg-slate-100">

                                    {event.imageUrl ? (
                                        <Image
                                            width={100}
                                            height={100}
                                            src={event.imageUrl}
                                            alt={event.title}
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="flex h-full items-center justify-center text-5xl text-[#003366]">
                                            ♡
                                        </div>
                                    )}

                                    <span className="absolute left-4 top-4 rounded-full bg-[#F4C542] px-4 py-2 text-xs font-bold text-[#003366] shadow-sm">
                                        {event.eventType || "Community Event"}
                                    </span>

                                </div>

                                <div className="p-6">

                                    <h2 className="line-clamp-1 text-xl font-extrabold text-[#003366] transition group-hover:text-[#B88700]">
                                        {event.title}
                                    </h2>

                                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                                        {event.description}
                                    </p>

                                    <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
                                        <span className="text-lg text-[#003366]">📍</span>
                                        <span className="line-clamp-1">
                                            {event.location || "Location not specified"}
                                        </span>
                                    </div>

                                    <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                                        <span className="text-lg text-[#003366]">📅</span>
                                        <span>
                                            {event.eventDate
                                                ? new Date(`${event.eventDate}T00:00:00`).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric"
                                                })
                                                : "Date not specified"}
                                        </span>
                                    </div>

                                    <div className="mt-6 border-t border-slate-100 pt-5">

                                        <Link
                                            href={`/events/${event._id}`}
                                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#003366] px-5 py-3 font-bold text-white transition duration-200 hover:bg-[#00264d]"
                                        >
                                            View Event Details
                                            <span className="text-lg text-[#F4C542]">→</span>
                                        </Link>

                                    </div>

                                </div>

                                <div className="h-1 w-0 bg-[#F4C542] transition-all duration-300 group-hover:w-full"></div>

                            </article>

                        ))}

                    </div>

                ) : (

                    <div className="rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">

                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F4C542]/20 text-4xl text-[#003366]">
                            ♡
                        </div>

                        <h2 className="mt-6 text-2xl font-extrabold text-[#003366]">
                            No Joined Events Yet
                        </h2>

                        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-500">
                            You have not joined any community events yet.
                            Explore upcoming events and become part of
                            something meaningful.
                        </p>

                        <Link
                            href="/allEvents"
                            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#003366] px-7 py-3.5 font-bold text-white transition hover:bg-[#00264d]"
                        >
                            Explore Events
                            <span className="text-[#F4C542]">→</span>
                        </Link>

                    </div>

                )}

            </div>

        </div>
    );
};

export default MyEventsPage;