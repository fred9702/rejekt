import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
// import death from './death-eater-min.JPG';

const imageStyles = {
    height: "450px",
    width: "600px",
    backgroundColor: "white"
};

const fitToViewStyles = {
        maxHeight: "100%",
        maxWidth: "100%",
        display: "block", // centers image
        margin: "auto" // bis
}

const numberOfSlides = 13;
const imageURLs = [
    "https://i.ibb.co/nc5Rb7L/trash-min.jpg",
    "https://i.ibb.co/n7twpFL/two-portraits-min.jpg",
    "https://i.ibb.co/0YG4TPq/showcase-min.jpg",
    "https://i.ibb.co/tHrcbhW/Rejekt-Edits-32-min.jpg",
    "https://i.ibb.co/Z8T6H8w/Rejekt-Edits-1-min.jpg",
    "https://i.ibb.co/RvDWscH/highcompress-Rejekt-Unedited-278-min.jpg",
    "https://i.ibb.co/Ms76cPc/Rejekt-Edits-Secondary-20-min.jpg",
    "https://i.ibb.co/G93BtNs/highcompress-Rejekt-Edits-69-min-min.jpg",
    "https://i.ibb.co/Ybpst2y/highcompress-Rejekt-Edits-51-min-min.jpg",
    "https://i.ibb.co/qFWvXJ3/highcompress-Rejekt-Edits-48-min.jpg",
    "https://i.ibb.co/5BnPkdP/highcompress-Rejekt-Edits-Secondary-29-min.jpg",
    "https://i.ibb.co/Nx8yJbS/highcompress-Rejekt-Edits-Secondary-9-min.jpg",
    "https://i.ibb.co/M5qd6Cs/death-eater-min.jpg"]


const paneNodes = Array.apply(null, Array(numberOfSlides)).map((_, i) => {
    return (
        <div style={imageStyles}>
            <img style={fitToViewStyles} src={imageURLs[i]} alt={`Pane ${i}`} />
        </div>
    )
})

const Carousel = () => {
    let reactSwipeEl;

    return (
        <div>
            <ReactSwipe 
                className="mySwipe"
                
                swipeOptions={{ continuous: false }}
                ref={el => (reactSwipeEl = el)}
            >
                {paneNodes}
            </ReactSwipe>
            <div style={{ textAlign: "center" }}>
                <button onClick={() => reactSwipeEl.prev()}>Previous</button>
                <button onClick={() => reactSwipeEl.next()}>Next</button>
            </div>
        </div>
    )
}

ReactDOM.render(<Carousel />, document.getElementById('react-swipe-gallery'));

export default Carousel;