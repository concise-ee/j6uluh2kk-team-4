import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "../images/christmasnyan.jpg" },
    { url: "../images/1.png" },
    { url: "../images/2.png" },
];

const imagesWithUrl = [
    { url: "https://wallpapercave.com/wp/wp688796.jpg" },
    { url: "https://images.unsplash.com/photo-1606509779095-de8fd5187049?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hyaXN0bWFzJTIwY2F0fGVufDB8fDB8fA%3D%3D&w=1000&q=80" },
    { url: "https://nypost.com/wp-content/uploads/sites/2/2019/12/christmas-cat-costume.jpg?quality=80&strip=all" },
];

export const Christmas = ({christmas}) => {
    return(
        <div className="container">
            <SimpleImageSlider
                width={1000}
                height={1000}
                images={imagesWithUrl}
                showNavs={false}
                showBullets={false}
                autoPlay={true}
                loop={true}
            />

            <iframe style={{visibility: "hidden"}} id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/embed/j5ceLMPlqnA?autoplay=1&origin=http://example.com" frameborder="0"></iframe>
        </div>
    )
}