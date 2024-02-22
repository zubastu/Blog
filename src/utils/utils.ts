import image1 from '../assets/images/Image1.png';
import image2 from '../assets/images/Image2.png';
import image3 from '../assets/images/Image3.png';
import image4 from '../assets/images/Image4.png';
import image5 from '../assets/images/Image5.png';

const images = [image1, image2, image3, image4, image5];

export const getRandomNumber = (min: number, max: number): number =>
  Math.floor(min + Math.random() * (max + 1 - min));

export const getRandomImage = () => images[getRandomNumber(0, 4)];
