import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';


export default function InfoBox({ info }) {
  
  const HOT_URL =
    "https://media.istockphoto.com/id/1312596921/photo/summer-noon-sun.webp?s=2048x2048&w=is&k=20&c=nC_6bQjbz1u1tV_tWA57IM9XlVOVPWoFok987tIMa40=";
  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL =
    "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?s=2048x2048&w=is&k=20&c=oCeUC-IkL0PeNBE1KwDUHBWw692n3T4T6I-usYtX_Qc=";

  const getImageUrl = () => {
    if (info.humidity > 80) {
      return RAIN_URL;
    } else if (info.temp > 15) {
      return HOT_URL;
    } else {
      return COLD_URL;
    }
  };

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={getImageUrl()}
            title="Weather image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="div">
              <p>Temperature: {info.temp}°C</p>
              <p>Humidity: {info.humidity}%</p>
              <p>Min Temp: {info.tempMin}°C</p>
              <p>Max Temp: {info.tempMax}°C</p>
              <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}°C</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

InfoBox.propTypes = {
  info: PropTypes.shape({
    city: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    tempMin: PropTypes.number.isRequired,
    tempMax: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    feelslike: PropTypes.number.isRequired,
    weather: PropTypes.string.isRequired,
  }).isRequired,
};
