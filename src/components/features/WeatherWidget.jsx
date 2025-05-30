import { useEffect, useState } from 'react';
import * as styles from './WeatherWidget.css';

const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

function WeatherWidget() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('useEffect start');
    try {
      if (!navigator.geolocation) {
        setError('No geolocation');
        setLoading(false);
        return;
      }
      navigator.geolocation.getCurrentPosition(
        (pos) => { console.log('成功', pos); },
        (err) => { console.log('失敗', err); }
      );
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          console.log('定位成功', pos);
          const { latitude, longitude } = pos.coords;
          try {
            const res = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPENWEATHER_API_KEY}&units=metric`
            );
            if (!res.ok) throw new Error('API Request Failed');
            const data = await res.json();
            setWeatherData({
              icon: data.weather[0].icon,
              temp: Math.round(data.main.temp),
              desc: data.weather[0].main,
              location: data.name,
            });
          } catch (err) {
            setError('Weather data fetch failed');
          } finally {
            setLoading(false);
          }
        },
        (err) => {
          console.log('定位失敗', err);
          setError('User denied geolocation');
          setLoading(false);
        }
      );
    } catch (e) {
      console.log('useEffect error', e);
      setError('useEffect error');
      setLoading(false);
    }
  }, []);

  console.log('WeatherWidget rendered', { loading, error, weatherData });

  if (loading) return null;
  if (error) return <div style={{ textAlign: 'center', color: 'red', marginTop: '2rem' }}>{error}</div>;
  if (!weatherData) return null;

  return (
    <div className={styles.container}>
      <img
        src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
        alt={weatherData.desc}
        className={styles.icon}
      />
      <div>{weatherData.temp}°C {weatherData.desc}</div>
      <div className={styles.location}>{weatherData.location}</div>
    </div>
  );
}

export default WeatherWidget;
