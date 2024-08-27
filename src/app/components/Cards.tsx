import Image from "next/image";

export default function Card() {
  return (
    <div className="relative w-80 h-[400px] bg-white shadow-lg rounded-lg p-6">
      {/* Top Section: Image */}
      <div className="w-full h-1/2 mb-4">
        <Image
          src="/images/image.png" // Ensure this path is correct
          alt="Card Image"
          layout="responsive"
          width={320}
          height={160}
          className="object-cover rounded-t-lg"
        />
      </div>

      {/* Title Section */}
      <div className="mb-4">
        <h2
          className="text-xl font-medium leading-[30px] text-left"
          style={{ fontFamily: "Montserrat" }}
        >
          Design Liberalized Exchange Rate Management
        </h2>
        <div className="flex items-center mt-2">
          <Image
            src="/images/av.png" // Ensure this path is correct
            alt="Avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
          <div className="ml-3 flex flex-col">
            <span className="text-gray-500 text-sm">by</span>
            <span className="text-gray-500 text-sm">Author Name</span>{" "}
            {/* Replace with dynamic author name if needed */}
          </div>
        </div>
      </div>

      {/* Chips */}
      <div className="flex space-x-3 mb-4">
        <div className="bg-gray-200 rounded-full px-4 py-2">
          <span className="text-xs text-[#8E8E8E] font-semibold">Chip 1</span>
        </div>
        <div className="bg-gray-200 rounded-full px-4 py-2">
          <span className="text-xs text-[#8E8E8E] font-semibold">Chip 2</span>
        </div>
      </div>

      {/* Content Text */}
      <p className="text-gray-700 text-sm mb-4">
        Content text goes here. This is where you can provide details about the
        card content.
      </p>

      {/* Separator Line */}
      <hr className="border-t border-gray-300 mb-4" />

      {/* Comment Section and Button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/images/comment.svg" // Ensure this path is correct
            alt="Comment Icon"
            width={24}
            height={24}
            className="mr-2"
          />
          <span className="text-gray-700 text-sm">2.3k Likes</span>
        </div>
        <button className="bg-[#264FAD] text-white py-1 px-4 rounded-md text-sm">
          Read More
        </button>
      </div>
    </div>
  );
}
