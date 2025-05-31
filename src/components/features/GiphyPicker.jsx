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

export default function GiphyPicker({ onChange, label = "Emotion" }) {
  const [giphyQuery, setGiphyQuery] = useState('');
  const [giphyResults, setGiphyResults] = useState([]);

  // 搜尋/emoji 點擊
  const handleSearch = async (query) => {
    setGiphyQuery(query);
    const gifs = await searchGiphy(query, 0, GIPHY_LIMIT);
    setGiphyResults(gifs);
  };

  return (
    <div>
      <label className="form-label" style={{ marginBottom: 4 }}>{label}</label>
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
            className="form-control"
            style={{ width: 120 }}
          />
          <Button
            type="button"
            onClick={() => handleSearch(giphyQuery)}
            style={{ marginLeft: '0.5rem' }}
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
