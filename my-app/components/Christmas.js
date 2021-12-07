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
            <iframe allow="autoplay" style={{visibility: "hidden"}} width="560" height="315" src="https://www.youtube.com/embed/pzK3_MA1Al4?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}