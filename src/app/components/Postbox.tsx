import Image from "next/image";

export default function BosPost() {
  return (
    <div className="w-full max-w-screen-xl mx-auto p-6">
      {/* Top separator line */}
      <hr className="border-t border-gray-300 mb-4" />

      <div className="flex flex-col space-y-4">
        {/* Avatar and Meta Info */}
        <div className="flex items-center space-x-2">
          <Image
            src="/images/profile.png" // Replace with your avatar image path
            alt="Avatar"
            width={40}
            height={32}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="font-bold text-sm">John Doe</span>
            <span className="text-gray-500 text-xs">Software Engineer</span>
          </div>
          <span className="text-gray-400 mb-4">•</span>
          <span className="text-gray-400 text-sm mb-4">August 27, 2024</span>
        </div>

        {/* Light-weight text below avatar and meta info */}
        <p className="text-gray-500 text-sm"></p>

        {/* Blog Post Title and Description */}
        <div className="flex flex-col space-y-2 relative">
          <h2 className="font-bold text-lg">
            The essential guide to Competitive Programming
            <br />
            Tab System On React : 3 ways to do it.
          </h2>

          {/* Image between header and paragraph */}
          <div className="absolute px-12 top-[0rem] right-1 w-45 h-48">
            {/* <Image
              src="/images/img.png" // Your image path
              alt="Blog post related image"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-md"
            /> */}
          </div>

          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br />
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, <br /> quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea
          </p>
        </div>

        {/* Chips */}
        <div className="flex space-x-2 mt-2">
          <div className="bg-gray-200 rounded-full px-3 py-1">
            <span className="text-xs text-gray-600 font-semibold">UI/UX</span>
          </div>
          <div className="bg-gray-200 rounded-full px-3 py-1">
            <span className="text-xs text-gray-600 font-semibold">
              Development
            </span>
          </div>
        </div>
      </div>

      {/* Bottom separator line */}
      <hr className="border-t border-gray-300 mt-4" />
    </div>
  );
}
