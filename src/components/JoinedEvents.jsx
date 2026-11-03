"use client";
import { authClient } from '../lib/auth-client';
import React from 'react';

const JoinedEvents = ({event}) => {
    const { data: session } = authClient.useSession();
        const user = session?.user;
    const onSubmit = async (e) =>{
        e.preventDefault();
        const data = {
            username: user?.name,
            email: user?.email,
            image: user?.image,
            ...event
        }
        const res = await fetch('http://localhost:5000/joined', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const joinedRes = await res.json();
        console.log(joinedRes)

    }
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-8">
                                <p className="text-sm font-semibold text-gray-500">
                                    Become a Volunteer
                                </p>
                                <h2 className="mt-2 text-2xl font-extrabold text-[#003366]">
                                    Make an Impact
                                </h2>
                                <p className="mt-3 text-sm leading-6 text-gray-500">
                                    Join this initiative and help make a positive difference
                                    in your community.
                                </p>
                                <form onSubmit={onSubmit}>
                                <button
                                    type="submit"
                                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#F4C542] px-5 py-4 font-bold text-[#003366] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#E8B92D] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#003366] focus:ring-offset-2"
                                >
                                    Join Event
                                    <span className="text-lg">→</span>
                                </button>
                                </form>
                                <p className="mt-4 text-center text-xs leading-5 text-gray-400">
                                    Together, we can create meaningful change.
                                </p>
                            </div>
    );
};

export default JoinedEvents;