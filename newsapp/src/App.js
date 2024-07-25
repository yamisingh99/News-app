import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import NewsList from './components/NewsList';
import NewsHubLogo from './components/NewsLogo';
import Footer from './components/Footer';

const App = () => {
  const [category, setCategory] = useState('all-news');
  const [country, setCountry] = useState('');
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let url = '';

      if (category === 'all-news') {
        url = `https://news-server-1-ipss.onrender.com/all-news`;
      } else if (category === 'top-headlines') {
        url = `https://news-server-1-ipss.onrender.com/top-headlines?category=${category}`;
      } else if (category && !country) {
        url = `https://news-server-1-ipss.onrender.com/category/${category}`;
      } else if (country) {
        url = `https://news-server-1-ipss.onrender.com/${country}`;
      }

      try {
        const response = await axios.get(url);
        setNews(response.data.data.articles);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category, country]);

  return (
    <div>
    <NewsHubLogo/>
      <Header setCategory={setCategory} setCountry={setCountry} />
      {loading ? <p>Loading...</p> : <NewsList news={news} />}
      <Footer/>
    </div>
  );
};

export default App;