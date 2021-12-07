import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import EventSnackbar from "./EventSnackbar";

const navigation = [
  { name: "Home", match: "", href: "/" },
  { name: "Team", match: "team", href: "/team" },
  { name: "Announcements", match: "announcements", href: "/announcements" },
  { name: "Alumni", match: "alumni", href: "/alumni" },
  { 
    name: "News", 
    match: "na", 
    href: "https://cybermanipal.wearemist.in"
  },
  {
    name: "Blogs",
    match: "na",
    href: "https://blogs.wearemist.in/",
  },
  {
    name: "Events",
    match: "na",
    href: "https://events.wearemist.in/",
  },
];

const Navbar = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(router.pathname.split("/")[1]);

  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    // Update the document title using the browser API
    const pageName = router.pathname.split("/")[1];
    setCurrentPage(pageName);
    
    const handleScroll = () => {
      setScroll(window.scrollY > 45);
    }
    window.addEventListener('scroll', handleScroll);
    return function cleanupListener() {
      window.removeEventListener('scroll', handleScroll);
    }
  });

  const closeNavbar = () => {
    document.getElementById("headlessui-disclosure-button-1").click();
  };

  return (
    <Fragment>
      {/* <EventSnackbar />  */}
      <Disclosure
        as="nav"
        className={`navbar ${scroll ? "fixed top-0" : "relative" } w-full`}
        id="nav"
        style={{ backgroundColor: "#121212", zIndex: "1000" }}
      >
        {({ open }) => (
          <>
            <nav className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <i className="fas fa-times"></i>
                    ) : (
                      <i className="fas fa-bars"></i>
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="w-screen md:w-20 text-center flex flex-col items-center justify-center">
                    <Image
                      src="/images/logoLight.png"
                      height="25"
                      width="60"
                      alt="MIST logo"
                      className="block lg:hidden mx-auto"
                    />
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => {
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            aria-current={item.current ? "page" : undefined}
                          >
                            <a
                              className={
                                currentPage === item.match
                                  ? "text-green-300 hover:text-white"
                                  : "text-gray-300 hover:text-white"
                              }
                            >
                              {item.name}
                            </a>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a
                        onClick={closeNavbar}
                        className={
                          currentPage === item.match
                            ? "text-green-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        }
                        aria-current="page"
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
                <style jsx>{`
                  a {
                    padding: 10px 20px;
                    cursor: pointer;
                  }

                  a:hover {
                    color: #fafafa;
                    transform: scale(1.02);
                  }
                `}</style>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </Fragment>
  );
};

export default Navbar;
