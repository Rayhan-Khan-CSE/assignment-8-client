import Image from "next/image";
import Link from "next/link";
import {
    FaHandsHelping,
    FaBullseye,
    FaEye,
    FaHeart,
    FaUsers,
    FaLeaf,
    FaGraduationCap,
    FaArrowRight,
} from "react-icons/fa";

const AboutPage = () => {
    const values = [
        {
            icon: <FaHeart />,
            title: "Compassion",
            description:
                "We believe every act of kindness can make a meaningful difference in someone's life.",
        },
        {
            icon: <FaUsers />,
            title: "Community",
            description:
                "We bring people together to build stronger, more supportive communities.",
        },
        {
            icon: <FaHandsHelping />,
            title: "Volunteerism",
            description:
                "We encourage people to share their time, skills, and resources for good causes.",
        },
        {
            icon: <FaLeaf />,
            title: "Positive Impact",
            description:
                "We promote sustainable initiatives that create lasting positive change.",
        },
    ];

    const activities = [
        {
            icon: <FaHandsHelping />,
            title: "Donation Campaigns",
            description:
                "Supporting underprivileged families through clothes, blankets, and essential item distribution.",
        },
        {
            icon: <FaLeaf />,
            title: "Environmental Care",
            description:
                "Encouraging tree plantation, community cleanups, and environmental awareness.",
        },
        {
            icon: <FaGraduationCap />,
            title: "Educational Support",
            description:
                "Promoting educational opportunities and learning support for children in need.",
        },
    ];

    return (
        <main className="min-h-screen bg-slate-50">

            <section className="px-4 py-20 sm:px-6 lg:py-24">
                <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

                    <div>
                        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#c18d00]">
                            Who We Are
                        </p>

                        <h2 className="text-3xl font-extrabold leading-tight text-[#003366] sm:text-4xl">
                            Connecting People With Purpose
                        </h2>

                        <p className="mt-6 leading-8 text-gray-600">
                            Hermione is designed to make community service
                            more accessible, organized, and impactful. We
                            provide a platform where individuals can discover
                            local social development events, participate in
                            meaningful activities, and contribute to their
                            communities.
                        </p>

                        <p className="mt-4 leading-8 text-gray-600">
                            From distributing winter clothes and blankets to
                            supporting education and protecting the
                            environment, we believe collective efforts can
                            build a better future for everyone.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl sm:p-10">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#003366] text-2xl text-[#F4C542]">
                            <FaHandsHelping />
                        </div>

                        <h3 className="text-2xl font-bold text-[#003366]">
                            Our Commitment
                        </h3>

                        <p className="mt-4 leading-8 text-gray-600">
                            We aim to create an inclusive space where people
                            from different backgrounds can come together,
                            support one another, and take meaningful action
                            toward social development.
                        </p>

                        <div className="mt-8 h-1.5 w-24 rounded-full bg-[#F4C542]"></div>
                    </div>

                </div>
            </section>
            <section className="bg-white px-4 py-20 sm:px-6 lg:py-24">
                <div className="mx-auto max-w-6xl">

                    <div className="mb-14 text-center">
                        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#c18d00]">
                            Our Purpose
                        </p>

                        <h2 className="text-3xl font-extrabold text-[#003366] sm:text-4xl">
                            Mission & Vision
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-500">
                            Building a culture of kindness, collaboration,
                            and positive social change.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">

                        <div className="rounded-3xl bg-[#003366] p-8 text-white shadow-lg sm:p-10">
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4C542] text-2xl text-[#003366]">
                                <FaBullseye />
                            </div>

                            <h3 className="text-2xl font-bold">
                                Our Mission
                            </h3>

                            <p className="mt-5 leading-8 text-white/80">
                                To connect volunteers with social development
                                opportunities, simplify community event
                                participation, and encourage individuals to
                                take action for people and communities in need.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-gray-100 bg-slate-50 p-8 shadow-lg sm:p-10">
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4C542] text-2xl text-[#003366]">
                                <FaEye />
                            </div>

                            <h3 className="text-2xl font-bold text-[#003366]">
                                Our Vision
                            </h3>

                            <p className="mt-5 leading-8 text-gray-600">
                                To build a society where helping others becomes
                                a shared responsibility and every individual
                                has the opportunity to contribute to a
                                compassionate, sustainable, and inclusive
                                community.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="px-4 py-20 sm:px-6 lg:py-24">
                <div className="mx-auto max-w-6xl">

                    <div className="mb-14 text-center">
                        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#c18d00]">
                            What Guides Us
                        </p>

                        <h2 className="text-3xl font-extrabold text-[#003366] sm:text-4xl">
                            Our Core Values
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-gray-500">
                            The principles that inspire everything we do.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#003366] text-2xl text-[#F4C542] transition group-hover:bg-[#F4C542] group-hover:text-[#003366]">
                                    {value.icon}
                                </div>

                                <h3 className="text-xl font-bold text-[#003366]">
                                    {value.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-gray-600">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            
            <section className="bg-white px-4 py-20 sm:px-6 lg:py-24">
                <div className="mx-auto max-w-6xl">

                    <div className="mb-14 text-center">
                        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#c18d00]">
                            Our Activities
                        </p>

                        <h2 className="text-3xl font-extrabold text-[#003366] sm:text-4xl">
                            How We Create Impact
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-500">
                            We support meaningful initiatives that help
                            communities grow and thrive.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {activities.map((activity, index) => (
                            <div
                                key={index}
                                className="rounded-3xl border border-gray-100 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4C542] text-2xl text-[#003366]">
                                    {activity.icon}
                                </div>

                                <h3 className="text-xl font-bold text-[#003366]">
                                    {activity.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-gray-600">
                                    {activity.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </main>
    );
};

export default AboutPage;