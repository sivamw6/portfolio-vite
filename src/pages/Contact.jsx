import { useState } from 'react';

import { FaEnvelope, FaGithub, FaLinkedin, FaLocationArrow } from 'react-icons/fa';
import * as styles from './Contact.css';
import Form from 'react-bootstrap/Form';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from "firebase/firestore";

import Button from '../components/features/Button';
import GiphyPicker from '../components/features/GiphyPicker';



const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [ showMessage, setShowMessage ] = useState(false);
  const [name, setName] = useState('');
  const [confirmedGif, setConfirmedGif] = useState(null);


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addDoc(collection(db, "messages"), {
        name,
        email,
        message,
        giphy: confirmedGif || null,
        created: Timestamp.now()
      });
      setShowMessage(true);
      setName('');
      setEmail('');
      setMessage('');
      setConfirmedGif(null);
    } catch (e) {
      alert("送出失敗，請稍後再試！");
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div className={styles.contact}>
      <h1 className="ms-5 mb-5">Get in Touch</h1>
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
          <div className={styles.formWrapper}>
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
              <GiphyPicker
                value={confirmedGif}
                onChange={url => setConfirmedGif(url)}
                label="Emotion"
              />
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control 
                as="textarea"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}              
                />
                {confirmedGif && (
                  <div style={{ position: 'relative', margin: '1rem 0', display: 'inline-block' }}>
                    <img src={confirmedGif} alt="Selected GIF" style={{ width: 120, borderRadius: 8 }} />
                    <button
                      onClick={() => setConfirmedGif(null)}
                      style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        background: 'rgba(0,0,0,0.6)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '50%',
                        width: 24,
                        height: 24,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 16,
                        zIndex: 1,
                      }}
                      aria-label="取消選取貼圖"
                    >
                      ×
                    </button>
                  </div>
                )}
              </Form.Group>
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
    </div>
  );
};

export default Contact;
