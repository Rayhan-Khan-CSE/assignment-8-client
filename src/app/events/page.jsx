import React from "react";
import UpcomingEventSearchPage from "../../components/UpcomingEventSearch";

const AllEventsPage = async () => {

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
    .sort((a, b) => {
        return new Date(a.eventDate) - new Date(b.eventDate);
    });

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-300">

                <div className="mb-12 text-center">

                    <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-[#003366] sm:text-4xl lg:text-5xl">
                        Upcoming Community Events
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                        Discover meaningful opportunities, connect with volunteers, and
                        help create a positive impact in communities across Bangladesh.
                    </p>

                    <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#F4C542]"></div>

                </div>

                <UpcomingEventSearchPage events={upcomingEvents} />

            </div>

        </main>
    );
};

export default AllEventsPage;