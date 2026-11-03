"use client";

import React from 'react';
import { toast } from 'react-toastify';

const DeleteEvent = ({ eventId }) => {

    const handleDeleteEvent = async () => {

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/events/${eventId}`,
                {
                    method: 'DELETE'
                }
            );

            const data = await res.json();

            console.log(data);

            if (res.ok) {
                toast.success("Event deleted successfully!");
                window.location.reload();
            } else {
                toast.error("Failed to delete event!");
            }

        } catch (error) {
            console.log(error);
            alert("Something went wrong!");
        }
    };

    return (
        <div>
            <button
                onClick={handleDeleteEvent}
                type="button"
                className="flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-3 py-3 text-sm font-bold text-red-600 transition duration-200 hover:bg-red-600 hover:text-white"
            >
                <span>🗑️</span>
                Delete
            </button>
        </div>
    );
};

export default DeleteEvent;