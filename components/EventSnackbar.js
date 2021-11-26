const EventSnackbar = () => {
    return (
        <div className="w-screen md:h-12 py-2 bg-green-400 flex md:flex-row flex-col justify-center items-center">
            <p className="mx-1 md:block hidden font-bold text-green-900">Upcoming Event</p>
            <p className="font-bold text-grey-100">Cybersecurity for Everyone 2021</p>
            <div className="flex">
                <p className="hover:text-green-700 text-green-900">
                    <p className="ml-1 font-bold underline">Registrations opening soon</p>
                </p>
                {/* <a className="hover:text-green-700 text-green-900 cursor-pointer" target="_blank" rel="noreferrer">
                    <p className="ml-1 font-bold underline">Register here</p>
                </a> */}
                {/* <a className="text-green-800 cursor-pointer" target="_blank" rel="noreferrer">
                    <i className="fas fa-arrow-right ml-2 hover:bg-green-800 p-1 rounded-xl animate-bob"></i>
                </a> */}
            </div>
        </div>
    )
}

export default EventSnackbar;