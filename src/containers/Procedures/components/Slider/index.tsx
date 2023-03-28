import React, { useRef, useCallback, useState, useLayoutEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import { proceduresArray } from '@/assets';

import { SliderContainer, InnerSlider, SliderButton } from './styles';

const Slider: React.FC = () => {
  const [currentScrollX, setCurrentScrollX] = useState<number>(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = currentScrollX;
    }
  }, [currentScrollX]);

  useLayoutEffect(() => {
    handleScroll();
  }, [currentScrollX]);

  return (
    <SliderContainer>
      <SliderButton
        position="left"
        onClick={() =>
          setCurrentScrollX((prevState) =>
            prevState === 0 ? prevState + 1050 : prevState - 1050
          )
        }
      >
        <AiOutlineArrowLeft fill="#fff" />
      </SliderButton>
      <InnerSlider ref={sliderRef}>
        {proceduresArray.map((procedure, index) => (
          <img src={procedure} alt={`Procedimento ${index}`} key={index} />
        ))}
      </InnerSlider>
      <SliderButton
        position="right"
        onClick={() => setCurrentScrollX((prevState) => prevState + 1050)}
      >
        <AiOutlineArrowRight fill="#fff" />
      </SliderButton>
    </SliderContainer>
  );
};

export default Slider;
