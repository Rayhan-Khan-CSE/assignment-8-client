
import React from "react";
import Image from "next/image";
import Link from "next/link";
import EditEvent from "../../../components/EditEvent";
import JoinedEvents from "../../../components/JoinedEvents";
import { auth } from "../../../lib/auth";
import { headers } from "next/headers";

const EventsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const jwtToken = await auth.api.getToken({
        headers: await headers()
    })
    const token = jwtToken?.token

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/${id}`, {
        headers: {authorization: `Bearer ${token}`}
    });
    const event = await res.json();

    const formatDate = (date) => {
        return new Date(`${date}T00:00:00`).toLocaleDateString("en-BD", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <Link
                    href="/events"
                    className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#003366] transition hover:text-blue-700"
                >
                    <span className="text-lg">←</span>
                    Back to All Events
                </Link>
                <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-slate-200/60">
                    <div className="relative h-64 bg-gray-100 sm:h-80 lg:h-105">
                        {event.imageUrl ? (
                            <Image
                                src={event.imageUrl}
                                alt={event.title || "Event cover"}
                                width={1200}
                                height={600}
                                unoptimized
                                className="h-full w-full object-cover"
                                priority
                            />
                        ) : (
                            <div className="flex h-full items-center justify-center text-gray-400">
                                No Cover Image Available
                            </div>
                        )}
                        <div className="absolute left-5 top-5">
                            <span className="rounded-full bg-[#F4C542] px-4 py-2 text-sm font-bold text-[#003366] shadow-md">
                                {event.eventType}
                            </span>
                        </div>
                    </div>
                    <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-3 lg:p-10">
                        <div className="lg:col-span-2">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B68A00]">
                                Community Event
                            </p>
                            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-[#003366] sm:text-4xl">
                                {event.title}
                            </h1>
                            <p className="mt-4 max-w-2xl leading-7 text-gray-600">
                                Be part of a meaningful community initiative. Connect with
                                others, contribute your time, and help create a positive
                                impact through this event.
                            </p>
                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-2xl border border-gray-100 bg-slate-50 p-5">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl">
                                            📍
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                                Location
                                            </p>
                                            <p className="mt-1 font-bold text-[#003366]">
                                                {event.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-2xl border border-gray-100 bg-slate-50 p-5">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-xl">
                                            📅
                                        </div>

                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                                Event Date
                                            </p>

                                            <p className="mt-1 font-bold text-[#003366]">
                                                {formatDate(event.eventDate)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                                <h2 className="text-xl font-bold text-[#003366]">
                                    About This Event
                                </h2>
                                <div className="mt-4 h-1 w-14 rounded-full bg-[#F4C542]"></div>
                                <p className="mt-5 whitespace-pre-line text-base leading-8 text-gray-600">
                                    {event.description}
                                </p>
                            </div>
                        </div>
                        <aside>
                            <JoinedEvents event = {event}/>
                        </aside>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default EventsDetailsPage;