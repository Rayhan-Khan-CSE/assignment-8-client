"use client";

import Image from 'next/image';
import React, { useState } from "react";
import { MdOutlineCancel } from 'react-icons/md';

const EditEvent = ({ event }) => {

    const modalId = `edit_modal_${event._id}`;

    const [formData, setFormData] = useState(event);
    const [message, setMessage] = useState("");

    // Get today's date in local time (YYYY-MM-DD).
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate event date first.
        if (!formData.eventDate || formData.eventDate <= getTodayDate()) {
            setMessage("Please select a future date for your event.");
            return;
        }

        try {
            const { _id, ...updatedData } = formData;

            const res = await fetch(`http://localhost:5000/events/${event._id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedData),
            });

            if (!res.ok) {
                throw new Error("Failed to update event");
            }

            setMessage("Event updated successfully!");

            setTimeout(() => {
                window.location.reload();
            }, 800);

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
        <div>

            {/* Open Edit Modal */}
            <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#003366] px-3 py-3 text-sm font-bold text-white transition hover:bg-[#00264d]"
                onClick={() => document.getElementById(modalId).showModal()}
            >
                ✏️ Edit Event
            </button>

            <dialog id={modalId} className="modal">

                <div className="modal-box max-h-[90vh] max-w-3xl overflow-y-auto">

                    <h3 className="text-center text-xl font-bold text-[#003366]">
                        Edit Event
                    </h3>

                    <form onSubmit={handleSubmit} className="p-6 sm:p-10">

                        {/* Basic Information */}
                        <div className="mb-8">

                            <h3 className="text-lg font-bold text-[#003366]">
                                Basic Details
                            </h3>

                            <p className="mt-1 text-sm text-gray-500">
                                Give your event a clear title and description.
                            </p>

                        </div>

                        <div className="grid gap-6 md:grid-cols-2">

                            {/* Event Title */}
                            <div className="md:col-span-2">

                                <label htmlFor={`title_${event._id}`} className={labelClass}>
                                    Event Title <span className="text-red-500">*</span>
                                </label>

                                <input
                                    id={`title_${event._id}`}
                                    name="title"
                                    type="text"
                                    required
                                    maxLength={100}
                                    value={formData.title || ""}
                                    onChange={handleChange}
                                    placeholder="e.g. Winter Clothes Distribution 2026"
                                    className={inputClass}
                                />

                                <p className="mt-2 text-xs text-gray-500">
                                    Choose a short, meaningful title.
                                </p>

                            </div>

                            {/* Event Type */}
                            <div>

                                <label htmlFor={`eventType_${event._id}`} className={labelClass}>
                                    Event Type <span className="text-red-500">*</span>
                                </label>

                                <select
                                    id={`eventType_${event._id}`}
                                    name="eventType"
                                    required
                                    value={formData.eventType || ""}
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

                            {/* Location */}
                            <div>

                                <label htmlFor={`location_${event._id}`} className={labelClass}>
                                    Event Location <span className="text-red-500">*</span>
                                </label>

                                <input
                                    id={`location_${event._id}`}
                                    name="location"
                                    type="text"
                                    required
                                    maxLength={150}
                                    value={formData.location || ""}
                                    onChange={handleChange}
                                    placeholder="e.g. Mirpur 10, Dhaka"
                                    className={inputClass}
                                />

                            </div>

                            {/* Description */}
                            <div className="md:col-span-2">

                                <label htmlFor={`description_${event._id}`} className={labelClass}>
                                    Event Description <span className="text-red-500">*</span>
                                </label>

                                <textarea
                                    id={`description_${event._id}`}
                                    name="description"
                                    required
                                    minLength={20}
                                    maxLength={2000}
                                    rows={5}
                                    value={formData.description || ""}
                                    onChange={handleChange}
                                    placeholder="Describe the purpose of your event, activities, and how volunteers can contribute..."
                                    className={`${inputClass} resize-y`}
                                />

                                <div className="mt-2 flex justify-between gap-3 text-xs text-gray-500">

                                    <span>Explain the events purpose and activities.</span>

                                    <span>{formData.description?.length || 0}/2000</span>

                                </div>

                            </div>

                        </div>

                        {/* Schedule & Image */}
                        <div className="mb-8 mt-10 border-t border-gray-100 pt-8">

                            <h3 className="text-lg font-bold text-[#003366]">
                                Schedule & Cover Image
                            </h3>

                            <p className="mt-1 text-sm text-gray-500">
                                Set a future date and add an image to represent your event.
                            </p>

                        </div>

                        <div className="grid gap-6 md:grid-cols-2">

                            {/* Event Date */}
                            <div>

                                <label htmlFor={`eventDate_${event._id}`} className={labelClass}>
                                    Event Date <span className="text-red-500">*</span>
                                </label>

                                <input
                                    id={`eventDate_${event._id}`}
                                    name="eventDate"
                                    type="date"
                                    required
                                    min={getTodayDate()}
                                    value={formData.eventDate || ""}
                                    onChange={handleChange}
                                    className={inputClass}
                                />

                                <p className="mt-2 text-xs text-gray-500">
                                    Select a date after today. Past dates and today are not allowed.
                                </p>

                            </div>

                            {/* Thumbnail URL */}
                            <div>

                                <label htmlFor={`imageUrl_${event._id}`} className={labelClass}>
                                    Thumbnail Image URL <span className="text-red-500">*</span>
                                </label>

                                <input
                                    id={`imageUrl_${event._id}`}
                                    name="imageUrl"
                                    type="url"
                                    required
                                    value={formData.imageUrl || ""}
                                    onChange={handleChange}
                                    placeholder="https://example.com/event-image.jpg"
                                    className={inputClass}
                                />

                                <p className="mt-2 text-xs text-gray-500">
                                    Paste a publicly accessible image URL.
                                </p>

                            </div>

                        </div>

                        {/* Image Preview */}
                        {formData.imageUrl && (

                            <div className="mt-6">

                                <p className={labelClass}>Thumbnail Preview</p>

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

                        {/* Feedback Message */}
                        {message && (

                            <div
                                role="status"
                                className={`mt-6 rounded-xl border p-4 text-sm ${
                                    message.startsWith("Event updated")
                                        ? "border-green-200 bg-green-50 text-green-800"
                                        : "border-red-200 bg-red-50 text-red-700"
                                }`}
                            >
                                {message}
                            </div>

                        )}

                        {/* Form Actions */}
                        <div className="mt-10 flex flex-col-reverse gap-4 border-t border-gray-100 pt-8 sm:flex-row sm:items-center sm:justify-between">

                            <p className="text-xs text-gray-500">
                                <span className="text-red-500">*</span> Required fields
                            </p>

                            <div className="flex items-center gap-3">

                                {/* Cancel Button */}
                                <button
                                    type="button"
                                    onClick={() => document.getElementById(modalId).close()}
                                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-500 bg-white px-8 py-3.5 font-bold text-[#003366] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-red-400 hover:shadow-md"
                                >
                                    Cancel
                                    <MdOutlineCancel />
                                </button>

                                {/* Update Button */}
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F4C542] px-8 py-3.5 font-bold text-[#003366] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#e8b92d] hover:shadow-md"
                                >
                                    Update Event
                                    <span aria-hidden="true">→</span>
                                </button>

                            </div>

                        </div>

                    </form>

                </div>

                {/* Close Modal by Clicking Outside */}
                <form method="dialog" className="modal-backdrop">
                    <button type="submit">close</button>
                </form>

            </dialog>

        </div>
    );
};

export default EditEvent;