// components/footer.tsx

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-black">
      {/* Top separator line */}
      <hr className="border-t border-gray-200 mb-4 px-24" />

      <div className="container mx-auto px-4">
        <div className="flex items-start mb-3">
          {/* Image Section */}
          <div className="mr-8">
            <Image
              src="/images/help.svg" // Replace with your image path
              alt="Footer Image"
              width={250}
              height={250}
            />
          </div>

          {/* Content to the right of the image */}
          <div className="flex flex-row  space-y-1 gap-64">
            {/* Header Text and Box Button */}
            <div className="flex flex-col space-y-4">
              <h2 className="text-xl font-semibold">
                Get involved in improving tech <br /> education in Africa!
              </h2>
              <button className="bg-[#264FAD] text-white px-4 py-2 w-48 rounded">
                Support Us
              </button>
            </div>

            {/* Links Section */}
            <div className="flex space-x-12 gap-32">
              {/* Column 1 */}
              <div>
                <span className="font-semibold text-lg">Links</span>
                <div className="flex flex-col space-y-2 mt-2 gap-1">
                  <a
                    href="#"
                    className="font-montserrat text-[16px] font-light leading-[26.82px] text-black"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="font-montserrat text-[16px] font-light leading-[26.82px] text-black"
                  >
                    Success Stories
                  </a>
                  <a
                    href="#"
                    className="font-montserrat text-[16px] font-light leading-[26.82px] text-black"
                  >
                    About Us
                  </a>
                  <a
                    href="#"
                    className="font-montserrat text-[16px] font-light leading-[26.82px] text-black"
                  >
                    Get Involved
                  </a>
                </div>
              </div>

              {/* Column 2 */}
              <div>
                <span className="font-semibold text-lg">Teams</span>
                <div className="flex flex-col space-y-2 mt-2">
                  <a
                    href="#"
                    className="font-montserrat text-[16px] font-light leading-[26.82px] text-black"
                  >
                    Board Members
                  </a>
                  <a
                    href="#"
                    className="font-montserrat text-[16px] font-light leading-[26.82px] text-black"
                  >
                    Advisors/Mentors
                  </a>
                  <a
                    href="#"
                    className="font-montserrat text-[16px] font-light leading-[26.82px] text-black"
                  >
                    Executives
                  </a>
                  <a
                    href="#"
                    className="font-montserrat text-[16px] font-light leading-[26.82px] text-black"
                  >
                    Staffs
                  </a>
                </div>
              </div>

              {/* Column 3 */}
              <div>
                <span className="font-semibold text-lg">Blogs</span>
                <div className="flex flex-col space-y-2 mt-2">
                  <a
                    href="#"
                    className="font-montserrat text-[16px] font-light leading-[26.82px] text-black"
                  >
                    Recent Blogs
                  </a>
                  <a
                    href="#"
                    className="font-montserrat text-[16px] font-light leading-[26.82px] text-black"
                  >
                    New Blog
                  </a>
                  <a
                    href="#"
                    className="font-montserrat text-[16px] font-light leading-[26.82px] text-black"
                  ></a>
                  <a
                    href="#"
                    className="font-montserrat text-[16px] font-light leading-[26.82px] text-black"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom separator line */}
        <div className="flex flex-col items-center container mx-auto px-6 py-4 text-center text-sm relative">
          <hr className="border-t border-gray-200 mt-6 w-full" />

          {/* Footer Text and Icons */}
          <div className="flex flex-row justify-between items-center w-full mt-4">
            <p>2020 Africa to Silicon Valley, Inc. All rights reserved.</p>
            <div className="flex flex-row space-x-8">
              <Image
                src="/images/facebook.png" // Replace with your image path
                alt="Facebook Icon"
                width={24}
                height={24}
              />
              <Image
                src="/images/twitter.svg" // Replace with your image path
                alt="Twitter Icon"
                width={24}
                height={24}
              />
              <Image
                src="/images/linkedin.svg" // Replace with your image path
                alt="LinkedIn Icon"
                width={24}
                height={24}
              />
              <Image
                src="/images/instagram.png" // Replace with your image path
                alt="Instagram Icon"
                width={24}
                height={24}
              />
              <Image
                src="/images/youtube.jpg" // Replace with your image path
                alt="Instagram Icon"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
