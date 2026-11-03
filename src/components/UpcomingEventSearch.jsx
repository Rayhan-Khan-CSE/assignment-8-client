"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineEventNote } from "react-icons/md";
import { LuView } from "react-icons/lu";

const UpcomingEventSearchPage = ({ events }) => {

    const [selectedType, setSelectedType] = useState("All");
    const eventTypes = [
        ...new Set(events.map((event) => event.eventType).filter(Boolean))
    ];
    const filteredEvents =
        selectedType === "All"
            ? events
            : events.filter((event) => event.eventType === selectedType);

    const formatDate = (date) => {
        return new Date(`${date}T00:00:00`).toLocaleDateString("en-BD", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    };

    return (
        <>
            <div className="mb-7 flex flex-wrap items-center justify-between gap-4">

                <div>
                    <h2 className="text-xl font-bold text-[#003366]">
                        Explore Events
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        Find an opportunity that inspires you.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <select
                        value={selectedType}
                        onChange={(event) => setSelectedType(event.target.value)}
                        className="rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#003366] shadow-sm outline-none transition focus:border-[#F4C542] focus:ring-2 focus:ring-[#F4C542]/30 cursor-pointer"
                    >

                        <option value="All">
                            All Event Types
                        </option>

                        {eventTypes.map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}

                    </select>
                    <span className="rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#003366] shadow-sm">
                        {filteredEvents.length} Upcoming{" "}
                        {filteredEvents.length === 1 ? "Event" : "Events"}
                    </span>

                </div>

            </div>

            {filteredEvents.length > 0 ? (

                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

                    {filteredEvents.map((event) => (

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

                                <span className="absolute left-4 top-4 rounded-full bg-[#F4C542] px-3 py-1.5 text-xs font-bold text-[#003366] shadow-sm">
                                    {event.eventType}
                                </span>

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

                <div className="rounded-3xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center sm:px-12">

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F4C542]/20 text-3xl">
                        📅
                    </div>

                    <h3 className="mt-5 text-2xl font-bold text-[#003366]">
                        No Upcoming Events
                    </h3>

                    <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
                        There are no upcoming events for this category right now.
                        Please select another event type or check back later.
                    </p>

                </div>

            )}

        </>

    );
};

export default UpcomingEventSearchPage;