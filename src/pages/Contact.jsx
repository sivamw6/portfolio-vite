import { useRef, useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.smooth_marker_bouncing';
import * as styles from './Contact.css';
import Form from 'react-bootstrap/Form';
import markerIconPng from '../images/marker-icon.png';
import markerIconShadowPng from '../images/marker-shadow.png';

const Contact = () => {
  const mapRef = useRef(null);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [ showMessage, setShowMessage ] = useState(false);

  const handleSubmit = () => {
    event.preventDefault();
    setShowMessage(true);
    setEmail('');
    setMessage('');
  }

  useEffect(() => {
    const map = L.map(mapRef.current, {
      iconUrl: '../../node_modules/leaflet/dist/images/marker-icon.png' ,
      center: [-37.814, 144.96332], // Melbourne coordinates
      zoom: 13,
      scrollWheelZoom: false
    });

    // Add tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const markerIcon = L.icon({
      iconUrl: markerIconPng,
      shadowUrl: markerIconShadowPng,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [0, -41],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });

    // Add marker to the map 
    const marker = L.marker([-37.814, 144.96332],{ 
      icon: markerIcon,       
      bounceHeight : 100,    // height of the bouncing
      bounceSpeed  : 54,    // bouncing speed coefficient
      exclusive    : false, 
    }).addTo(map).bounce();

    // Trigger dropping down pin animation
    setTimeout(() => {
      marker.setOpacity(1);
      marker.setLatLng([-37.814, 144.96332]).bounce({ duration: 800, height: 100 });
    }, 1000);

    // Cleanup function
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className={styles.contact}>
      <div className={styles.content}>
        <div className={styles.formBox}>
          <h1 className={styles.h1}>Contact Me</h1>
          <Form>
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
            <button className={styles.button} onClick={(event) => handleSubmit(event)}>Submit</button>
            {showMessage && (
              <div className={styles.messageBox}> 
                Your message has been submitted, I will reply you soon!
                <hr />
              </div>
            )}
          </Form>
        </div>
        <div className={styles.mapBox} ref={mapRef} >
        </div>

      </div>
    </div>
  );
};

export default Contact;
