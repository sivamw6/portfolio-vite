import { useState } from 'react';

import { FaEnvelope, FaGithub, FaLinkedin, FaLocationArrow } from 'react-icons/fa';
import * as styles from './Contact.css';
import Form from 'react-bootstrap/Form';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from "firebase/firestore";

import Button from '../components/features/Button';
import { searchGiphy } from '../api/giphy';

const emojis = [
  { label: 'happy', emoji: '😄' },
  { label: 'sad', emoji: '😢' },
  { label: 'angry', emoji: '😡' },
  { label: 'love', emoji: '😍' },
  { label: 'excited', emoji: '🤩' },
  { label: 'expect', emoji: '🤔' },
  // ...你可以再加更多
];

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [ showMessage, setShowMessage ] = useState(false);
  const [name, setName] = useState('');
  const [giphyQuery, setGiphyQuery] = useState('');
  const [giphyResults, setGiphyResults] = useState([]);
  const [selectedGif, setSelectedGif] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addDoc(collection(db, "messages"), {
        name,
        email,
        message,
        giphy: selectedGif || null,
        created: Timestamp.now()
      });
      setShowMessage(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (e) {
      alert("送出失敗，請稍後再試！");
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div className={styles.contact}>
      <h1 className="ms-5 mb-5">Contact Me</h1>
      <img src="/map.png" alt="Map" className={styles.mapImage} />
      <div className={styles.columns}>
        <div className={styles.leftCol}>
          <div className={styles.infoRow}>
            <FaLocationArrow className={styles.icon} />
            <span>Melbourne, Victoria, Australia</span>
          </div>
          <div className={styles.infoRow}>
            <FaEnvelope className={styles.icon} />
            <a
              href="maviswang.6@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              maviswang.6@gmail.com
            </a>
          </div>
          <div className={styles.infoRow}>
            <FaGithub className={styles.icon} />
            <a
              href="https://github.com/sivamw6"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              sivamw6
            </a>
          </div>
          <div className={styles.infoRow}>
            <FaLinkedin className={styles.icon} />
            <a
              href="https://linkedin.com/in/你的帳號"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              Mavis Wang
            </a>
          </div>
          {/* 你可以再加其他社群 */}
        </div>
        <div className={styles.rightCol}>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control 
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}              
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}              
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control 
              as="textarea"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}              
              />
            </Form.Group>
            <div className={styles.giphyBox}>
              <div className={styles.giphyColLeft}>
                {/* Emoji 按鈕 */}
                {emojis.map(({ label, emoji }) => (
                  <Button
                    key={label}
                    type="button"
                    className={styles.emojiBtn}
                    onClick={async () => {
                      setGiphyQuery(label);
                      const gifs = await searchGiphy(label);
                      setGiphyResults(gifs);
                    }}
                  >
                    <span role="img" aria-label={label}>{emoji}</span>
                  </Button>
                ))}
              </div>
              <div className={styles.giphyColRight}>
                {/* 搜尋欄 */}
                <Form.Control
                  type="text"
                  placeholder="Search GIF"
                  value={giphyQuery}
                  onChange={e => setGiphyQuery(e.target.value)}
                  onKeyDown={async (e) => {
                    if (e.key === 'Enter') {
                      const gifs = await searchGiphy(giphyQuery);
                      setGiphyResults(gifs);
                    }
                  }}
                />
                <Button
                  type="button"
                  onClick={async () => {
                    const gifs = await searchGiphy(giphyQuery);
                    setGiphyResults(gifs);
                  }}
                  style={{ marginLeft: '0.5rem' }}
                >
                  Search
                </Button>
              </div>
            </div>
            {/* GIF 結果區 */}
            {giphyResults.length > 0 && (
              <div className={styles.giphyResultBox}>
                {giphyResults.map(gif => (
                  <img
                    key={gif.id}
                    src={gif.images.fixed_height_small.url}
                    alt={gif.title}
                    style={{
                      border: selectedGif === gif.images.fixed_height_small.url ? '2px solid #6cf26c' : '2px solid transparent',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      width: '80px',
                      height: '80px',
                      objectFit: 'cover'
                    }}
                    onClick={() => setSelectedGif(gif.images.fixed_height_small.url)}
                  />
                ))}
              </div>
            )}
            <Button className={styles.button} onClick={(event) => handleSubmit(event)}>
              Submit
            </Button>
            {showMessage && (
              <div className={styles.messageBox}> 
                Your message has been submitted, I will reply you soon!
                <hr />
              </div>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
