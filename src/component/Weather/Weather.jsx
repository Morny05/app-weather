import React from 'react';
import { Card } from "react-bootstrap";
import styles from './Weather.module.scss';
import { IoLocationSharp } from "react-icons/io5";
import Temperature from "../../assets/img/temperature.png";
import Icons8 from '../../assets/img/icons8.png';
import Summer from '../../assets/img/summer.png';
import Sunrise from '../../assets/img/sunrise.png';
import Wind from '../../assets/img/wind.png';
import '../../style.scss';
import { useSelector } from 'react-redux';



export const Weather = () => {
  const weather = useSelector( ({weather}) => weather )
  console.log(weather)

  return (
    <>
        <Card className={styles.container}>
            <Card.Body >
                <Card.Title className={styles.title}>
                   {weather.name} , MA <IoLocationSharp fill='#845EC2'/>
                  <div className={styles.time}>
                    <span>Tuesday, 15:00 AM </span>
                    <span><img src={Icons8} alt='' width={'7%'} height={'8%'}/> </span>
                  </div>
                </Card.Title>
                <Card.Text as={'div'} className={styles.weatherInfos}>
                    <div className={styles.summer}>
                      <img src={Summer} alt='cloudImg' width={'40%'}/>
                    </div>
                    <div className={styles.temperature}>
                      <span>35° C</span>
                      <span>
                        <img src={Temperature} alt='' width={'40px'}/>
                      </span>
                    </div>
                    <h1 className={styles.good}>Good Moorning Casablanca</h1>
                    <div className={styles.infos}>
                      <div className={styles.border_right}>
                        <div><img src={Sunrise} alt='' width={'25px'}/></div>
                        <div>SUNRISE</div>
                        <div>08:00</div>
                      </div>
                      <div className={styles.border_right}>
                        <div><img src={Wind} alt='' width={'25px'}/></div>
                        <div>WIND</div>
                        <div>08m/s</div>
                      </div>
                      <div className={styles.border_left}>
                        <div><img src={Temperature} alt='' width={'25px'} height={'25px'}/></div>
                        <div>TEMPERATURE</div>
                        <div>35° C</div>
                      </div>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    </>
  )
}

