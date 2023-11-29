import React from 'react';
import walpaper from '../../assets/img/weather1.webp';

export const Wallpaper = () => {
  return (
    <>
        <div className="wallpaper-container position-fixed d-flex top-0 bottom-0 end-0 start-0">
            <img className='wallpaper' src={walpaper} alt=''/>
        </div>
    </>
  )
}
