import { useState } from 'react';
import Button from './Button';
import * as styles from './GiphyPicker.css';
import { searchGiphy } from '../../api/giphy';

const emojis = [
  { label: 'happy', emoji: '😄' },
  { label: 'love', emoji: '😍' },
  { label: 'excited', emoji: '🤩' }, 
  { label: 'thinking', emoji: '🤔' },
  { label: 'grateful', emoji: '🙏' },   
  { label: 'confident', emoji: '💪' },  
];

const GIPHY_LIMIT = 8;

/**
 * GiphyPicker component allows users to search and select GIFs from Giphy API.
 * @param {function} onChange - Callback when a GIF is selected
 * @param {string} label - Label for the picker
 */
export default function GiphyPicker({ onChange, label = "Emotion" }) {
  const [giphyQuery, setGiphyQuery] = useState('');
  const [giphyResults, setGiphyResults] = useState([]);
  const [error, setError] = useState('');

  /**
   * Search Giphy API for GIFs based on the query string.
   * @param {string} query - The search keyword
   */
  const handleSearch = async (query) => {
    setGiphyQuery(query);
    setError('');
    try {
      const gifs = await searchGiphy(query, 0, GIPHY_LIMIT);
      setGiphyResults(gifs);
    } catch (err) {
      setError('Search failed. Please try again.');
      setGiphyResults([]);
    }
  };

  return (
    <div>
      <label className={styles.formLabel}>{label}</label>
      {error && (
        <div className={styles.errorMsg}>{error}</div>
      )}
      <div className={styles.giphyBox}>
        <div className={styles.giphyColLeft}>
          {emojis.map(({ label, emoji }) => (
            <Button
              key={label}
              type="button"
              className={styles.emojiBtn}
              onClick={() => handleSearch(label)}
            >
              <span role="img" aria-label={label}>{emoji}</span>
            </Button>
          ))}
        </div>
        <div className={styles.giphyColRight}>
          <input
            type="text"
            placeholder="Search GIF"
            value={giphyQuery}
            onChange={e => setGiphyQuery(e.target.value)}
            onKeyDown={async (e) => {
              if (e.key === 'Enter') {
                await handleSearch(giphyQuery);
              }
            }}
            className={styles.searchInput}
          />
          <Button
            type="button"
            onClick={() => handleSearch(giphyQuery)}
            className={styles.searchBtn}
          >
            Search
          </Button>
        </div>
        {giphyResults.length > 0 && (
          <div className={styles.giphyFloatBox}>
            <div className={styles.giphyResultBox}>
              {giphyResults.map(gif => (
                <img
                  key={gif.id}
                  src={gif.images.fixed_height_small.url}
                  alt={gif.title}
                  className={styles.giphyImg}
                  onClick={() => {
                    onChange(gif.images.fixed_height_small.url);
                    setGiphyResults([]);
                  }}
                />
              ))}
            </div>
            <button
              className={styles.giphyCloseBtn}
              onClick={() => setGiphyResults([])}
            >✕</button>
          </div>
        )}
      </div>
    </div>
  );
}
