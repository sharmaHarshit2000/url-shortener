import { getAnalytics } from "../api";
import { toast } from 'react-toastify';

const HistoryList = ({ shortUrls }) => {

    const handleAnalytics = async (code) => {
        try {
            const res = await getAnalytics(code);
            const { original_url, short_code, click_count, created_at } = res.data;
            toast.info(
                ` ${original_url}\n ${short_code}\n ${click_count} clicks\n ${new Date(created_at).toLocaleString()}`,
                { style: { whiteSpace: 'pre-line' } }
            );
        } catch (err) {
            console.error(err);
            alert(' Error fetching analytics. Please try again.');
        }
    }

    if (!shortUrls?.length) {
        return (
            <p className="text-center text-gray-600 mt-6"> No URLs shortened yet.</p>
        )
    }

    return (
        <div className="mt-8 max-w-xl mx-auto">
            <h2 className="text-xl font-semibold mb-4 text-center">
                Shortened URL History
            </h2>
            <ul className="space-y-4">
                {
                    shortUrls.map((url, index) => {
                        if (!url?.short_url || !url?.original_url) return null;

                        const code = url.short_url.split('/').pop();

                        return (
                            <li key={index}
                                className="bg-white p-4 rounded-lg shadow border border-gray-200"
                            >
                                <div className="text-sm text-gray-700">
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

                                <div className="text-sm text-gray-700 mt-2">
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

                                <button
                                    onClick={() => handleAnalytics(code)}
                                    className="mt-3 bg-blue-600 text-white px-4 py-1.5 rounded text-sm hover:bg-blue-700 transition"
                                >
                                    View Clicks
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )

}

export default HistoryList;