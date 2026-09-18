export default function Loading() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-white">
            <div className="flex flex-col items-center">

                {/* Spinner */}
                <div className="relative h-16 w-16">
                    <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>

                    <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#5C53FE] border-r-[#5C53FE]"></div>
                </div>

                {/* Brand */}
                <h2 className="mt-5 text-lg font-bold text-gray-800">
                    Tech Bazaar
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    Loading, please wait...
                </p>

            </div>
        </div>
    );
}