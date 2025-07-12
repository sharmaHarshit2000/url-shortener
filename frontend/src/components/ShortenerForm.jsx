import { useState } from "react";
import { shortenUrl } from '../api';

const ShortenerForm = ({ onNewShortUrl }) => {

    const [input, setInput] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setShortUrl("");
        setLoading(true);

        try {
            const { data } = await shortenUrl(input);

            const urlObj = {
                original_url: input,
                short_url: data.short_url,
            };

            onNewShortUrl(urlObj);
            setShortUrl(data.short_url);
            setInput('');

        } catch (err) {
            console.error(err);
            setError('Failed to shorten the URL. Please try again.');

        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="bg-white p-6 rounded shadow-md max-w-xl mx-auto mt-10">

                {/* {Input Form} */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="url"
                    required
                    placeholder="Enter your long URL"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className={`py-2 px-4 rounded text-white transition 
                        ${loading ?
                            "bg-gray-400 cursor-not-allowed" :
                            "bg-blue-600 hover:bg-blue-700"}`}
                >
                    {loading ? "Shortening..." : "Shorten URL"}
                </button>
            </form>

            {/* {Error} */}
            {error && (
                <p className="text-red-600 text-sm mt-2 text-center">{error}</p>
            )}

              {/* {ShortUrl} */}
            {shortUrl && !error && (
                <div className="mt-4 text-center">
                    <p className="text-lg">
                        Short URL:{' '}
                        <a
                            href={shortUrl}
                            className="text-blue-600 underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {shortUrl}
                        </a>
                    </p>
                </div>
            )}
        </div>
    )

}

export default ShortenerForm;