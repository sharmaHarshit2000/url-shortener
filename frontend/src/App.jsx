import { useEffect, useState } from 'react';
import ShortenerForm from './components/ShortenerForm';
import HistoryList from './components/HistoryList';
import { toast } from 'react-toastify';

const App = () => {
  const [shortUrls, setShortUrls] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('url_history')) || [];
    setShortUrls(stored);
  }, [])

  const handleNewShortUrl = (urlObj) => {
    const exists = shortUrls.find(
      (u) => u.original_url === urlObj.original_url
    );

    if (exists) {
      toast.info(`Already shortened:\n${exists.short_url}`, {
        style: { whiteSpace: 'pre-line' }
      });
      return;
    }

    const updated = [urlObj, ...shortUrls].slice(0, 5);
    setShortUrls(updated);
    localStorage.setItem("url_history", JSON.stringify(updated));
  };


  return (
    <div className='min-h-screen bg-gray-50'>
      <header className='bg-blue-600 text-white py-4 text-center text-xl font-bold shadow'>
        URL Shortener
      </header>
      <main className="p-4">
        <ShortenerForm onNewShortUrl={handleNewShortUrl} />
        <HistoryList shortUrls={shortUrls} />
      </main>
      <footer className="bg-gray-100 text-center text-sm text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} Harshit Sharma. Built with ❤️ using the MERN stack.
      </footer>
    </div>
  )
}

export default App;

