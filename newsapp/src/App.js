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
        url = `http://localhost:5000/all-news`;
      } else if (category === 'top-headlines') {
        url = `http://localhost:5000/top-headlines?category=${category}`;
      } else if (category && !country) {
        url = `http://localhost:5000/category/${category}`;
      } else if (country) {
        url = `http://localhost:5000/country/${country}`;
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