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



export const Weather = () => {
  return (
    <>
        <Card className={styles.container}>
            <Card.Body >
                <Card.Title className={styles.title}>
                  Casablanca , MA <IoLocationSharp fill='#845EC2'/>
                  <div className={styles.time}>
                    <span>11H22MIN </span>
                    <span><img src={Icons8} alt='' width={'8%'} height={'8%'}/> </span>
                  </div>
                </Card.Title>
                <Card.Text as={'div'} className={styles.weatherInfos}>
                    <div>
                      <img src={Summer} alt='cloudImg' width={'50%'}/>
                    </div>
                    <div className={styles.temperature}>
                      <span>35 C</span>
                      <span>
                        <img src={Temperature} alt='' width={'15%'}/>
                      </span>
                    </div>
                    <h1 className={styles.good}>Good Moorning Casablanca</h1>
                    <div className={styles.infos}>
                    <div>
                      <div><img src={Sunrise} alt='' width={'25px'}/></div>
                      <div>SUNRISE</div>
                      <div>08:00</div>
                    </div>
                    <div>
                      <div><img src={Wind} alt='' width={'25px'}/></div>
                      <div>WIND</div>
                      <div>08m/s</div>
                    </div>
                    <div>
                      <div><img src={Temperature} alt='' width={'25px'} color='dark'/></div>
                      <div>Temperature</div>
                      <div>35 C</div>
                    </div>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    </>
  )
}

