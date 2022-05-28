import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import img1 from '../assets/Nurtri/1.jpg'
import img2 from '../assets/Nurtri/2.webp'
import img3 from '../assets/Nurtri/3.png'
import img4 from '../assets/Nurtri/4.png'
import img5 from '../assets/Nurtri/5.jpg'
import img6 from '../assets/Nurtri/6.jpg'
export default function Nutritionists() {
  return (
    <ImageList sx={{  height: 550 }} variant="woven" cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: img1,
    title: 'Bed',
  },
  {
    img: img2,
    title: 'Kitchen',
  },
  {
    img: img3,
    title: 'Sink',
  },
  {
    img: img4,
    title: 'Books',
  },
  {
    img: img5,
    title: 'Chairs',
  },
  {
    img: img6,
    title: 'Candle',
  },
 
];
