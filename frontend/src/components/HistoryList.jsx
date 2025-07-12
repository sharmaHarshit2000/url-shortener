import { getAnalytics } from "../api";
import { toast } from "react-toastify";
import {
    FiLink,
    FiScissors,
    FiBarChart2,
    FiClock
} from "react-icons/fi";

const HistoryList = ({ shortUrls }) => {
    const handleAnalytics = async (code) => {
        try {
            const res = await getAnalytics(code);
            const { original_url, short_code, click_count, created_at } = res.data;

            toast.info(
                <div className="space-y-1 text-sm text-gray-800">
                    <p className="flex items-center gap-2">
                        <FiLink className="text-blue-600" /> {original_url}
                    </p>
                    <p className="flex items-center gap-2">
                        <FiScissors className="text-green-600" /> {short_code}
                    </p>
                    <p className="flex items-center gap-2">
                        <FiBarChart2 className="text-purple-600" /> {click_count} clicks
                    </p>
                    <p className="flex items-center gap-2">
                        <FiClock className="text-gray-500" />{" "}
                        {new Date(created_at).toLocaleString()}
                    </p>
                </div>,
                {
                    icon: false,
                    autoClose: 5000,
                }
            );
        } catch (err) {
            console.error(err);
            toast.error("Error fetching analytics. Please try again.");
        }
    };

    if (!shortUrls?.length) {
        return (
            <p className="text-center text-gray-600 mt-6">
                No URLs shortened yet.
            </p>
        );
    }

    return (
        <div className="mt-8 max-w-xl mx-auto">
            <h2 className="text-xl font-semibold mb-4 text-center">
                Shortened URL History
            </h2>
            <ul className="space-y-4">
                {shortUrls.map((url, index) => {
                    if (!url?.short_url || !url?.original_url) return null;

                    const code = url.short_url.split("/").pop();

                    return (
                        <li
                            key={index}
                            className="bg-white p-4 rounded-lg shadow border border-gray-200"
                        >
                            <div className="text-sm text-gray-700 flex items-start gap-2">
                                <FiLink className="mt-0.5 text-blue-500" />
                                <div>
                                    <span className="font-medium">Original URL:</span>
                                    <a
                                        href={url.original_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-blue-600 underline break-all"
                                    >
                                        {url.original_url}
                                    </a>
                                </div>
                            </div>

                            <div className="text-sm text-gray-700 mt-2 flex items-start gap-2">
                                <FiScissors className="mt-0.5 text-green-500" />
                                <div>
                                    <span className="font-medium">Short URL:</span>
                                    <a
                                        href={url.short_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-green-600 underline break-all"
                                    >
                                        {url.short_url}
                                    </a>
                                </div>
                            </div>

                            <button
                                onClick={() => handleAnalytics(code)}
                                className="mt-3 flex items-center gap-2 bg-blue-600 text-white px-4 py-1.5 rounded text-sm hover:bg-blue-700 transition"
                            >
                                <FiBarChart2 />
                                View Clicks
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default HistoryList;
