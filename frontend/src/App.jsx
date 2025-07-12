import { useEffect, useState } from 'react';
import ShortenerForm from './components/ShortenerForm';
import HistoryList from './components/HistoryList';

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
      alert(`This URL is already shortened:\n${exists.short_url}`);
      return;
    }

    const updated = [urlObj, ...shortUrls]
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
    </div>
  )
}

export default App;

