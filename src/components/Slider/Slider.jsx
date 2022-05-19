import React, { useState, useMemo } from "react";
import BtnSwipe from "../BtnSwipe/BtnSwipe";
import DotCount from "../DotCount/DotCount";
import cl from './Slider.module.scss';

const Slider = ({images}) => {
  let [pageWidth, setPageWidth] = useState(window.innerWidth);
  let [sliderWidth, setSliderWidth] = useState(1200);
  let [translateWidth, setTranslateWidth] = useState(0);
  let [activeId, setActiveId] = useState(0);

  useMemo(() => {
    if (pageWidth > 1300) setSliderWidth(1200)
    else if (900 < pageWidth && pageWidth <= 1300) setSliderWidth(700)
    else if (600 < pageWidth && pageWidth <= 900) setSliderWidth(500)
    else if (pageWidth <= 600) setSliderWidth(300);
  }, [pageWidth])

  window.addEventListener('resize', () => setPageWidth(window.innerWidth));

  const swipeToLeft = () => {
    if (activeId === 0) {
      setTranslateWidth((images.length - 1) * sliderWidth * (-1));
      setActiveId(images.length - 1);
    } else {
      setTranslateWidth(translateWidth + sliderWidth);
      setActiveId(activeId - 1);
    }
  };
  const swipeToRight = () => {
    if (activeId === images.length - 1) {
      setTranslateWidth(0);
      setActiveId(0);
    } else {
      setTranslateWidth(translateWidth - sliderWidth);
      setActiveId(activeId + 1);
    }
  };

  return (
    <div className={cl.root}>
      <div className={cl.window}>
        <div
        className={cl.imagesBlock}
        style={{transform: `translateX(${translateWidth}px)`}}>
          {
            images.map((item, index) =>
              <div className={cl.imageBlock} key={index + Date.now()}>
                <img src={item} alt="" className={cl.img}/>
              </div>
            )
          }
        </div>
        <div className={cl.btnsBlock}>
          <div className={cl.btnsBlock__content}>
            <BtnSwipe 
            side={'left'}
            onClick={swipeToLeft}
            />
            <BtnSwipe 
            side={'right'}
            onClick={swipeToRight}
            />
          </div>
        </div>
      </div>
      <div className={cl.dotsBlock}>
        {
          images.map((item, index) => 
            <DotCount id={index} activeId={activeId} key={Date.now() % 2 + index}/>
          )
        }
      </div>
    </div>
  );
};
export default Slider;