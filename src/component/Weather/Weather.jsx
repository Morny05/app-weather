import React from 'react';
import { Card, Row } from "react-bootstrap";
import styles from './Weather.module.scss';
import { IoLocationSharp } from "react-icons/io5";
import Temperature from "../../assets/img/temperature.png";
import Icons8 from '../../assets/img/icons8.png';
import Summer from '../../assets/img/summer.png';
import Sunrise from '../../assets/img/sunrise.png';
import Wind from '../../assets/img/wind.png';
import humidity from '../../assets/img/humidity.png';
import pressure from '../../assets/img/pressure.png';
import '../../style.scss';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';



export const Weather = () => {
  const weather = useSelector( ({weather}) => weather )
  console.log(weather)

  return (
    <>
        <Card className={styles.container}>
        
            {weather.isLoaded ? 
            <Card.Body >
            <Card.Title className={styles.title}>
               {weather.name}, {weather.sys.country} <IoLocationSharp fill='#845EC2'/>
              <div className={styles.time}>
                <Moment format={'d MMMM YYYY, HH:mm'}  /> 
                <span> <img src={Icons8} alt='' width={'20px'} height={'8%'}/> </span>
              </div>
            </Card.Title>
            <Card.Text as={'div'} className={styles.weatherInfos}>
                <div className={styles.summer}>
                  <img src={Summer} alt='cloudImg' width={'20%'}/>
                </div>
                <div className={styles.temperature}>
                  <span>{weather.main.feels_like} °C</span>
                  <span>
                    <img src={Temperature} alt='' width={'40px'}/>
                  </span>
                </div>
                <h1 className={styles.good}>Good Moorning {weather.name}</h1>
                
                <div className={styles.infos}>
                  <Row>
                      <div className={styles.border_right}>
                        <div><img src={Sunrise} alt='' width={'30px'}/></div>
                        <div>Sunrise</div>
                        <div>
                          <Moment unix={true} format={'hh:mm:ss'}>
                            {weather.sys.sunrise}
                          </Moment>
                        </div>
                      </div>

                    <div className={styles.border_right}>
                    <div><img src={pressure} alt='' width={'25px'}/></div>
                      <div>Pressure</div>
                      <div>{weather.main.pressure} Pa</div>
                    </div>  

                    <div className={styles.border_right}>
                      <div><img src={Wind} alt='' width={'25px'}/></div>
                      <div>Wind</div>
                      <div>{weather.wind.speed}m/s</div>
                    </div>

                    <div className={styles.border_right}>
                    <div><img src={humidity} alt='' width={'25px'}/></div>
                      <div>Humidity</div>
                      <div>{weather.main.humidity} %</div>
                    </div>

                    <div className={styles.border_left}>
                      <div><img src={Temperature} alt='' width={'25px'} height={'25px'}/></div>
                      <div>Temperature</div>
                      <div>{weather.main.temp_max} C</div>
                    </div>
                  </Row>
                </div>
            </Card.Text>
        </Card.Body> : 
        <Card.Body>
          <Card.Title>Please Choose Your City</Card.Title>
        </Card.Body>}
        </Card>
    </>
  )
}

