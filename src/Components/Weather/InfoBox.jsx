import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import RAIN_URL from "./assets/rain.svg";
import HOT_URL from "./assets/clear.svg";
import COLD_URL from "./assets/cold.svg";

export default function InfoBox({info}){
  
    return (
        <div className="InfoBox">

            <div className="cardContainer">
              <Card style={{width : "900px"}}>
                  <Typography gutterBottom variant="h5" component="div" 
                      className="cityInfo">
                        {info.city}
                  </Typography>

                  <center><hr className='Line' /></center>
                <div className="top">
                  <div className="container-one">
               
                <CardMedia className="imgStyle"
                  image={info.humidity > 80
                         ? RAIN_URL
                         : info.temp > 15
                         ? HOT_URL 
                         : COLD_URL }
                  title="green iguana"/>
                  <div className="temp">{info.temp}&deg;C</div>
                <div className="weather">{info.weather}</div>
                </div>

                <div className="container-two">
                <CardContent>
                  <Typography variant="body2" color="text.secondary" component={"span"}>
      
                    <div className="tempVal">
                      <div className="col">
                          <div className="iconStyle">
                            {<i className="fa-solid fa-droplet"></i>}
                          </div>
                          <div>
                          Humidity <br /> {info.humidity}%
                          </div>
                      </div>

                      <div className="col">
                          <div className="iconStyle">
                          {<i className="fa-solid fa-temperature-low"></i>}
                          </div>
                          <div>
                            Min Temp <br />  {info.tempMin}&deg;C
                          </div>
                      </div>
                    
                    </div>
                    
                    <div className="tempVal">
                        <div className="col">
                          <div className="iconStyle">
                            {<i className="fa-solid fa-temperature-high"></i>}
                          </div>
                          <div>Max Temp <br />  {info.tempMax}&deg;C</div>
                        </div>
                      <div className="col">
                          <div className="iconStyle">
                            {<i className="fa-solid fa-snowflake"></i>}
                          </div>
                          <div>
                            Feels Like <br />{info.feelsLike}&deg;
                          </div>
                      </div>
                    </div>
                  </Typography>
                </CardContent>
                </div>
                </div>
                </Card>
            </div>
        </div>
    )
}