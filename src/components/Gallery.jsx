import Image from "next/image";

const galleryItems = [
    {
        id: 1,
        title: "Winter Blanket Distribution",
        category: "Winter Relief",
        location: "Rangpur, Bangladesh",
        image:
            "https://www.bssnews.net/bangla/assets/news_photos/2025/01/02/image-169949-1735835102.jpg",
        size: "large",
    },
    {
        id: 2,
        title: "Food Distribution Drive",
        category: "Food Assistance",
        location: "Noakhali, Bangladesh",
        image:
            "https://static.wixstatic.com/media/ece451_76fee382458b4e929ea571316f9fbd02~mv2.jpg/v1/fill/w_800%2Ch_600%2Cal_c%2Cq_85%2Cenc_avif%2Cquality_auto/ece451_76fee382458b4e929ea571316f9fbd02~mv2.jpg",
        size: "normal",
    },
    {
        id: 3,
        title: "Plant a Tree, Grow a Future",
        category: "Environment",
        location: "Dhaka, Bangladesh",
        image:
            "https://s3sdghub-bucket.s3.eu-west-1.amazonaws.com/core-cms/public/styles/media_image_large/public/IMG_0040_copy_2930x1953.jpg?itok=675jcwtg",
        size: "normal",
    },
    {
        id: 4,
        title: "Flood Relief Assistance",
        category: "Emergency Relief",
        location: "Chattogram, Bangladesh",
        image:
            "https://dgikh81ssvyrj.cloudfront.net/media/images/PR-flood-response.format-jpeg.width-1174.avifquality-50.jpg",
        size: "normal",
    },
    {
        id: 5,
        title: "Supporting Flood-Affected Families",
        category: "Humanitarian Aid",
        location: "Khulna, Bangladesh",
        image:
            "https://cdn.zakat.org/public-assets/with-determination-and-compassion-your-support-reaches-flood-affected-families.jpg",
        size: "normal",
    },
    {
        id: 6,
        title: "Sharing Meals, Spreading Smiles",
        category: "Community Care",
        location: "Barishal, Bangladesh",
        image:
            "https://gdb.voanews.com/f697c473-0b10-4f0b-b724-a503e0e9f96e_w1080_h608_s.jpg",
        size: "large",
    },
];

const Gallery = () => {
    return (
        <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-300">
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#F4C542]/20 px-4 py-2 text-sm font-bold text-[#003366]">
                        <span className="h-2 w-2 rounded-full bg-[#F4C542]" />
                        OUR COMMUNITY IN ACTION
                    </span>
                    <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#003366] sm:text-4xl lg:text-5xl">
                        Moments That Make a{" "}
                        <span className="text-[#B88700]">
                            Difference
                        </span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                        Every photograph tells a story of kindness, compassion,
                        and people coming together. Explore community-service
                        activities that inspire us to build a better Bangladesh.
                    </p>
                    <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#F4C542]" />
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {galleryItems.map((item) => (
                        <article
                            key={item.id}
                            className={`group relative overflow-hidden rounded-2xl bg-[#003366] shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl ${item.size === "large" ? "lg:row-span-1" : ""
                                }`}
                        >
                            <div className="relative h-70 overflow-hidden sm:h-80">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    height={500}
                                    width={500}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-[#001A33] via-[#003366]/20 to-transparent opacity-90 transition duration-300 group-hover:opacity-100" />
                                <div className="absolute left-4 top-4">
                                    <span className="rounded-full bg-[#F4C542] px-3 py-1.5 text-xs font-bold text-[#003366] shadow-sm">
                                        {item.category}
                                    </span>
                                </div>
                                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                                    <div className="mb-2 flex items-center gap-2 text-sm text-blue-100">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            className="h-4 w-4 text-[#F4C542]"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                                            />
                                            <circle cx="12" cy="10" r="2.5" />
                                        </svg>
                                        {item.location}
                                    </div>
                                    <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">
                                        {item.title}
                                    </h3>
                                    <div className="mt-4 h-1 w-12 rounded-full bg-[#F4C542] transition-all duration-300 group-hover:w-20" />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Gallery;