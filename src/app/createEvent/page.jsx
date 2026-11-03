"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { authClient } from "../../lib/auth-client";

const CreateEventPage = () => {

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        eventType: "",
        imageUrl: "",
        location: "",
        eventDate: "",
    });

    const [message, setMessage] = useState("");

    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));

        setMessage("");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check login first
        if (!user?.email) {
            setMessage("Please login first to create an event.");
            return;
        }

        // Validate event date
        if (!formData.eventDate || formData.eventDate <= getTodayDate()) {
            setMessage("Please select a future date for your event.");
            return;
        }

        try {

            // Add logged-in user's email
            const eventData = {
                ...formData,
                email: user.email
            };

            const res = await fetch("http://localhost:5000/createEvent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(eventData)
            });

            if (!res.ok) {
                throw new Error("Failed to create event");
            }

            const data = await res.json();

            console.log(data);

            setMessage("A new event is created successfully!");

            console.log("Event form data:", eventData);

            // Clear form after successful creation
            setFormData({
                title: "",
                description: "",
                eventType: "",
                imageUrl: "",
                location: "",
                eventDate: "",
            });

        } catch (error) {
            console.error(error);
            setMessage("Something went wrong. Please try again.");
        }
    };

    const inputClass =
        "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#003366] focus:bg-white focus:ring-2 focus:ring-[#003366]/10";

    const labelClass =
        "mb-2 block text-sm font-semibold text-gray-700";

    return (
        <section className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-6xl">

                <div className="mb-10 text-center">

                    <h1 className="mt-5 text-3xl font-bold tracking-tight text-[#003366] sm:text-4xl lg:text-5xl">
                        Create a Community Event
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
                        Bring people together for a meaningful cause. Create a volunteer
                        event and inspire positive change in your community across Bangladesh.
                    </p>

                </div>

                <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl shadow-slate-200/60">

                    <div className="bg-[#003366] px-6 py-6 sm:px-10">

                        <h2 className="text-xl font-bold text-white sm:text-2xl">
                            Event Information
                        </h2>

                        <p className="mt-2 text-sm text-white/75">
                            Complete the details below to prepare your event listing.
                        </p>

                    </div>

                    <form onSubmit={handleSubmit} className="p-6 sm:p-10">

                        <div className="mb-8">

                            <h3 className="text-lg font-bold text-[#003366]">
                                Basic Details
                            </h3>

                            <p className="mt-1 text-sm text-gray-500">
                                Give your event a clear title and description.
                            </p>

                        </div>

                        <div className="grid gap-6 md:grid-cols-2">

                            <div className="md:col-span-2">

                                <label htmlFor="title" className={labelClass}>
                                    Event Title <span className="text-red-500">*</span>
                                </label>

                                <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    required
                                    maxLength={100}
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="e.g. Winter Clothes Distribution 2026"
                                    className={inputClass}
                                />

                                <p className="mt-2 text-xs text-gray-500">
                                    Choose a short, meaningful title.
                                </p>

                            </div>

                            <div>

                                <label htmlFor="eventType" className={labelClass}>
                                    Event Type <span className="text-red-500">*</span>
                                </label>

                                <select
                                    id="eventType"
                                    name="eventType"
                                    required
                                    value={formData.eventType}
                                    onChange={handleChange}
                                    className={`${inputClass} cursor-pointer`}
                                >
                                    <option value="">Select event type</option>
                                    <option value="Cleanup">Community Cleanup</option>
                                    <option value="Plantation">Tree Plantation</option>
                                    <option value="Donation">Donation Drive</option>
                                    <option value="Food Distribution">Food Distribution</option>
                                    <option value="Education">Educational Support</option>
                                    <option value="Healthcare">Health Awareness</option>
                                    <option value="Disaster Relief">Disaster Relief</option>
                                    <option value="Other">Other</option>
                                </select>

                            </div>

                            <div>

                                <label htmlFor="location" className={labelClass}>
                                    Event Location <span className="text-red-500">*</span>
                                </label>

                                <input
                                    id="location"
                                    name="location"
                                    type="text"
                                    required
                                    maxLength={150}
                                    value={formData.location}
                                    onChange={handleChange}
                                    placeholder="e.g. Mirpur 10, Dhaka"
                                    className={inputClass}
                                />

                            </div>

                            <div className="md:col-span-2">

                                <label htmlFor="description" className={labelClass}>
                                    Event Description <span className="text-red-500">*</span>
                                </label>

                                <textarea
                                    id="description"
                                    name="description"
                                    required
                                    minLength={20}
                                    maxLength={2000}
                                    rows={5}
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Describe the purpose of your event, activities, and how volunteers can contribute..."
                                    className={`${inputClass} resize-y`}
                                />

                                <div className="mt-2 flex justify-between gap-3 text-xs text-gray-500">

                                    <span>
                                        Explain the events purpose and activities.
                                    </span>

                                    <span>
                                        {formData.description.length}/2000
                                    </span>

                                </div>

                            </div>

                        </div>

                        <div className="mb-8 mt-10 border-t border-gray-100 pt-8">

                            <h3 className="text-lg font-bold text-[#003366]">
                                Schedule & Cover Image
                            </h3>

                            <p className="mt-1 text-sm text-gray-500">
                                Set a future date and add an image to represent your event.
                            </p>

                        </div>

                        <div className="grid gap-6 md:grid-cols-2">

                            <div>

                                <label htmlFor="eventDate" className={labelClass}>
                                    Event Date <span className="text-red-500">*</span>
                                </label>

                                <input
                                    id="eventDate"
                                    name="eventDate"
                                    type="date"
                                    required
                                    min={getTodayDate()}
                                    value={formData.eventDate}
                                    onChange={handleChange}
                                    className={inputClass}
                                />

                                <p className="mt-2 text-xs text-gray-500">
                                    Select a date after today. Past dates and today are not allowed.
                                </p>

                            </div>

                            <div>

                                <label htmlFor="imageUrl" className={labelClass}>
                                    Thumbnail Image URL <span className="text-red-500">*</span>
                                </label>

                                <input
                                    id="imageUrl"
                                    name="imageUrl"
                                    type="url"
                                    required
                                    value={formData.imageUrl}
                                    onChange={handleChange}
                                    placeholder="https://example.com/event-image.jpg"
                                    className={inputClass}
                                />

                                <p className="mt-2 text-xs text-gray-500">
                                    Paste a publicly accessible image URL.
                                </p>

                            </div>

                        </div>

                        {formData.imageUrl && (

                            <div className="mt-6">

                                <p className={labelClass}>
                                    Thumbnail Preview
                                </p>

                                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">

                                    <Image
                                        height={500}
                                        width={500}
                                        src={formData.imageUrl}
                                        alt="Event thumbnail preview"
                                        className="h-56 w-full object-cover"
                                        onError={(event) => {
                                            event.currentTarget.style.display = "none";
                                        }}
                                        onLoad={(event) => {
                                            event.currentTarget.style.display = "block";
                                        }}
                                    />

                                </div>

                            </div>

                        )}

                        {message && (

                            <div
                                role="status"
                                className={`mt-6 rounded-xl border p-4 text-sm ${
                                    message.startsWith("A new event")
                                        ? "border-green-200 bg-green-50 text-green-800"
                                        : "border-red-200 bg-red-50 text-red-700"
                                }`}
                            >
                                {message}
                            </div>

                        )}

                        <div className="mt-10 flex flex-col-reverse gap-4 border-t border-gray-100 pt-8 sm:flex-row sm:items-center sm:justify-between">

                            <p className="text-xs text-gray-500">
                                <span className="text-red-500">*</span> Required fields
                            </p>

                            <div className="flex gap-3 items-center">

                                <Link
                                    href="/"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-500 bg-white px-8 py-3.5 font-bold text-[#003366] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-red-400 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#003366] focus:ring-offset-2"
                                >
                                    Cancel
                                    <span aria-hidden="true">
                                        <MdOutlineCancel />
                                    </span>
                                </Link>

                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F4C542] px-8 py-3.5 font-bold text-[#003366] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#e8b92d] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#003366] focus:ring-offset-2"
                                >
                                    Create Event
                                    <span aria-hidden="true">→</span>
                                </button>

                            </div>

                        </div>

                    </form>

                </div>

            </div>

        </section>
    );
};

export default CreateEventPage;