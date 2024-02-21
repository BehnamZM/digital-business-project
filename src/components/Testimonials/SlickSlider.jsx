import { testimonialsData } from "@/src/utils/data";
import Image from "next/image";
import Slider from "react-slick";

export default function SlickSlider() {
  var settings = {
    speed: 500,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    touchMove: true,
    useCSS: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {testimonialsData.map((item, i) => (
          <div className="comment" key={i}>
            <div className="comment-content">
              <Image alt="comment" src={"/apos.svg"} width={40} height={30} />
              <div className="comment-des">{item.comment}</div>
            </div>
            <div className="comment-info">
              <div className="first-avatar">{item.name[0]}</div>
              <div className="comment-name_and_profession">
                <div className="comment-name">{item.name}</div>
                <div className="comment-profession">{item.profession}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
