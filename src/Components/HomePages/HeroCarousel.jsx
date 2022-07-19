import React from "react";
import { Carousel } from "flowbite-react";
const HeroCarousel = () => {
  return (
    <div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img
            src="https://th.bing.com/th/id/R.9679e7f6d0f7ef4a8da37b432cc253c1?rik=vbj3cxkrAlUuVQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-lhWVhiKg-5Y%2fT6d4IMh517I%2fAAAAAAAABAU%2fcDsT5jgwKO8%2fs640%2f380179_3725160404433_1138586789_3533964_1829705938_n.jpg&ehk=a15wlRjOtKP8ckTiBFTuodryZHmiP5lmsBnyfXf%2ftAY%3d&risl=&pid=ImgRaw&r=0"
            alt="..."
          />
          <img
            src="https://th.bing.com/th/id/R.09820c6ed205f54b82ed414ca47d90b9?rik=lMKK5wclEyveyQ&riu=http%3a%2f%2fbeingcovers.com%2fmedia%2ffacebook-cover%2fThe-Dark-Knight-Trilogy-Facebook-Covers-1602.jpeg&ehk=V%2bOEdz2jGWyH5X5hrTPTZsJCiCKmvQ1joK5vNC5LXR8%3d&risl=&pid=ImgRaw&r=0"
            alt="..."
          />
          <img
            src="https://th.bing.com/th/id/R.0eada2db1df8a01e495d63bf62b90568?rik=Vg3Au0YQof3EIQ&pid=ImgRaw&r=0"
            alt="..."
          />
          <img
            src="https://th.bing.com/th/id/R.8535121a7bf9113ce6a3aae99ae15e09?rik=pZVKmHrmdo2SKQ&pid=ImgRaw&r=0"
            alt="..."
          />
          <img
            src="https://th.bing.com/th/id/R.2064512b239637e7f4a94803451a62fe?rik=eS25jPBX1ER6Rw&pid=ImgRaw&r=0"
            alt="..."
          />
        </Carousel>
      </div>
    </div>
  );
};

export default HeroCarousel;
