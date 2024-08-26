import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DailyQuote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get('https://api.quotable.io/random');
        setQuote(response.data.content);
        setAuthor(response.data.author);
      } catch (error) {
        console.error('Error fetching daily quote:', error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="max-w-xl bg-gradient-to-r from-[#b3c2f4] to-[#95acf8] dark:from-[#5b69c7] dark:to-[#4956af] text-white p-6 rounded-lg shadow-lg mb-6">
      <blockquote className="text-xl font-semibold italic mb-2">
        "{quote}"
      </blockquote>
      <p className="text-right text-lg font-medium">
        - {author}
      </p>
    </div>
  );
};

export default DailyQuote;
