import { SITE_DOMAIN } from "../../utils/constants";
import AnnouncementCard from "../../components/AnnouncementCard";
import Head from "next/head";
import Link from "next/link";
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const Announcements = ({ announcements }) => {

  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState({});

  const handleUpdate = (open, data) => {
    setOpen(open)
    setDetails(data)
  }

  return (
    <div className="text-center container mx-auto text-gray-50 py-20 min-h-screen">
      <Head>
        <title>
          Announcements | Manipal Information Security Team
        </title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        />
        <meta
          name="description"
          content="A team of Information and Network Security enthusiasts with the aim to spread the knowledge to other students with an interest in this ever-growing field of Computer Science known as cybersecurity. Our goal is to ensure that students approach this field the right way by providing them with a platform to enhance and practice their skills."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Yash Aryan, yash.aryan@aol.com" />
        <meta
          name="keywords"
          content="cybersecurity, manipal, manipal institute of technology, clubs, student clubs, student, organization"
        />
        <meta name="url" content="https://wearemist.in/announcements" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://wearemist.in/announcements" />
        <meta name="reply-to" content="sudo@wearemist.in/announcements" />
        {/* OG meta tags */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Announcements | Manipal Information Security Team"
        />
        <meta
          property="og:description"
          content="A team of Information and Network Security enthusiasts with the aim to spread the knowledge to other students with an interest in this ever-growing field of Computer Science known as cybersecurity. Our goal is to ensure that students approach this field the right way by providing them with a platform to enhance and practice their skills."
        />
        <meta property="og:image" content="/images/mist_og.png" />
        <meta property="og:url" content="https://wearemist.in/announcements" />
        <meta
          property="og:site_name"
          content="Manipal Information Security Team"
        />
        <meta
          name="twitter:title"
          content="Announcements | Manipal Information Security Team"
        />
        <meta
          name="twitter:description"
          content="A team of Information and Network Security enthusiasts with the aim to spread the knowledge to other students with an interest in this ever-growing field of Computer Science known as cybersecurity. Our goal is to ensure that students approach this field the right way by providing them with a platform to enhance and practice their skills."
        />
        <meta name="twitter:image" content="/images/mist_og.png" />
        <meta name="twitter:site" content="@sudo_mist" />
        <meta name="twitter:creator" content="@sudo_mist" />
      </Head>
      {/* Logo section */}
      <div className="text-left w-100 pl-0 md:pl-10">
        <h1 className=" text-4xl emphasis-heading pl-5">Announcements.</h1>
        <p className="text-sm font-thin emphasis-heading text-gray-600 pl-6">
          Club activity from MIST
        </p>
      </div>
      <div className="mx-auto p-10 grid grid-cols-1 md:grid-cols-2">
      {
        announcements.data.map((data) => {
          return <AnnouncementCard 
                    key={data._id}
                    heading={data.heading}
                    date={data.dateString}
                    details={data.details}
                    image={data.image}
                    link={data.link}
                    handleUpdate={handleUpdate}
                 />
        })
      }
      <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" static className="fixed inset-0 overflow-hidden" open={open} onClose={setOpen}>
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-screen max-w-md">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-10 mt-5 md:left-0 right-0 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                    <button
                      className="rounded-md text-gray-300 hover:text-white -ml-12 focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => handleUpdate(false, {})}
                    >
                      <span className="sr-only">Close panel</span>
                      <div className="h-6 w-18 px-3" aria-hidden="true">CLOSE</div>
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-full flex flex-col py-6 bg-black shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6 mt-10 pt-5">
                    <Dialog.Title className="text-lg font-medium text-gray-900">
                      <div className="text-left text-xl font-semibold text-white">
                          <p>{details.date ? details.date : ""}</p>
                      </div>
                    </Dialog.Title>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    <div className="absolute inset-0 px-4 sm:px-6">

                      <div className="h-full" aria-hidden="true"> 
                        <h1 className="md:text-4xl text-left emphasis-heading blue-gradient-text text-3xl pb-5">{details.heading ? details.heading : ""}</h1>
                        <img className="h-1/2" src={details.image}></img>
                        <p className="text-white text-justify my-10"> 
                          {details.details ? details.details : ""}
                        </p>
                        {details.link && <Link href={details.link}>
                          <a className="text-blue-700 flex">
                            See related post
                            <span>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            </span>
                          </a>
                        </Link>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
      </div>
    </div>
  );
}

export default Announcements;

export const getStaticProps = async () => {
  const resAnn = await fetch(`${SITE_DOMAIN}/api/announcements`);
  const announcements = await resAnn.json();  
  return {
    props: {
      announcements
    },
    revalidate: 60,
  };
};