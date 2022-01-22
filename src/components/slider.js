import SimpleImageSlider from "react-simple-image-slider";
import ImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://wallpaperaccess.com/full/958467.jpg" },
  { url: "https://previews.123rf.com/images/sylverarts/sylverarts1603/sylverarts160300526/53195886-bauhaus-retro-wallpaper-art-vector-blue-background-made-using-grid-circles-and-rhombuses-geometric-g.jpg" },
  { url: "https://previews.123rf.com/images/sylverarts/sylverarts1610/sylverarts161001005/63356630-bauhaus-retro-wallpaper-art-vector-blue-background-made-using-grid-and-circles-geometric-graphic-196.jpg" },
  { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbk4RoKOMs31kArVKBrAd78wKG4wBeWZqxyQ&usqp=CAU" },
  { url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaHxlbnwwfHwwfHw%3D&w=1000&q=80" },
  { url: "https://res.cloudinary.com/practicaldev/image/fetch/s--M-Aom4Fc--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/18p0dcluv02riownx3a6.jpg" },
  { url: "https://swall.teahub.io/photos/small/88-882876_code-wallpapers-mg862pe-front-end-code-background.jpg" },
];

const Slider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={1500}
        height={584}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      
    </div>
    
  );
}
export default Slider;