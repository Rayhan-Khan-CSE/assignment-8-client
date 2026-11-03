import { auth } from '../../lib/auth';
import { headers } from 'next/headers';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EditEvent from '../../components/EditEvent';
import DeleteEvent from '../../components/DeleteEvent';

const ManageEventsPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;

    // If user is not logged in
    if (!user?.email) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h2 className="text-xl font-bold text-[#003366]">
                    Please login to manage your events.
                </h2>
            </div>
        );
    }

    // Get only events created by this user
    const res = await fetch(
        `http://localhost:5000/my-created-events/${encodeURIComponent(user.email)}`,
        {
            cache: 'no-store'
        }
    );

    const events = await res.json();

    return (
        <div className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-300">

                {/* Page Header */}
                <div className="mb-10 text-center">

                    <span className="inline-flex items-center gap-2 rounded-full bg-[#F4C542]/20 px-4 py-2 text-sm font-bold text-[#003366]">
                        <span className="h-2 w-2 rounded-full bg-[#F4C542]"></span>
                        EVENT MANAGEMENT
                    </span>

                    <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-[#003366] sm:text-4xl lg:text-5xl">
                        Manage Your Events
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
                        Manage, update, and organize your community events
                        from one place.
                    </p>

                </div>

                {/* Event Count */}
                <div className="mb-8 flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm">

                    <div>
                        <h2 className="text-lg font-bold text-[#003366]">
                            Your Created Events
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Manage events created by you
                        </p>
                    </div>

                    <div className="flex h-12 min-w-12 items-center justify-center rounded-xl bg-[#F4C542]/20 px-3 text-xl font-extrabold text-[#003366]">
                        {events.length}
                    </div>

                </div>

                {/* Events Grid */}
                {events.length > 0 ? (

                    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

                        {events.map((event, index) => (

                            <article
                                key={event._id || index}
                                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#F4C542] hover:shadow-xl"
                            >

                                {/* Event Image */}
                                <div className="relative h-56 overflow-hidden bg-slate-100">

                                    {event.imageUrl ? (
                                        <Image
                                            width={500}
                                            height={500}
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

                                {/* Event Information */}
                                <div className="p-6">

                                    <h2 className="line-clamp-1 text-xl font-extrabold text-[#003366] transition group-hover:text-[#B88700]">
                                        {event.title}
                                    </h2>

                                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                                        {event.description}
                                    </p>

                                    {/* Location */}
                                    <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
                                        <span className="text-lg text-[#003366]">📍</span>
                                        <span className="line-clamp-1">
                                            {event.location || "Location not specified"}
                                        </span>
                                    </div>

                                    {/* Date */}
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

                                    {/* Action Buttons */}
                                    <div className="mt-6 grid grid-cols-2 gap-3 border-t border-slate-100 pt-5">

                                        <EditEvent event={event} />

                                        <DeleteEvent eventId={event._id} />

                                    </div>

                                </div>

                                {/* Bottom Accent */}
                                <div className="h-1 w-0 bg-[#F4C542] transition-all duration-300 group-hover:w-full"></div>

                            </article>

                        ))}

                    </div>

                ) : (

                    /* Empty State */
                    <div className="rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">

                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F4C542]/20 text-4xl text-[#003366]">
                            ♡
                        </div>

                        <h2 className="mt-6 text-2xl font-extrabold text-[#003366]">
                            No Events to Manage
                        </h2>

                        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-500">
                            You have not created any events yet.
                            Start creating events and bring your community together.
                        </p>

                        <Link
                            href="/createEvent"
                            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#003366] px-7 py-3.5 font-bold text-white transition hover:bg-[#00264d]"
                        >
                            Create New Event
                            <span className="text-[#F4C542]">→</span>
                        </Link>

                    </div>

                )}

            </div>

        </div>
    );
};

export default ManageEventsPage;