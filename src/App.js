import React from "react";
import image_1 from "./assets/images/image_1.png";
import image_2 from "./assets/images/image_2.png";
import image_3 from "./assets/images/image_3.png";
import quote from "./assets/images/quote.png";

import "./App.scss";

const Header = () => {
  return (
    <div className="container_header">
      <div className="container_header_title" style={{color: '#38885C'}}>Planet Plus</div>
      <div className="container_header_description">
        <span className="small-text">
          Co-working, caregiver spaces and a cafe. Be productive; make friends;
          become a part of the Healthy Planet community.
        </span>
        <span className="action">
          <img src={quote} alt="quote" />
          <span>PLANET PLUS {` `}&#8594;</span>
        </span>
      </div>
    </div>
  );
};

const Card = ({ bgColor, img, title, body }) => {
  return (
    <div className="card">
      <div className="card_img">
        <img src={img} alt="img" />
      </div>
      <div className={`card_body ${bgColor}`}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

class App extends React.Component {
  render() {
    const cardDetails = [
      {
        bgColor: "red",
        img: image_1,
        title: `Co-working space/ cafe`,
        body: "Parents/ guardians can work from a desk in school while enjoying a cup of coffee.",
      },
      {
        bgColor: "blue",
        img: image_2,
        title: "Enrichment Programme",
        body: "Builds on students’ innate capabilities and interests in academics and the arts.",
      },
      {
        bgColor: "yellow",
        img: image_3,
        title: "Library Programme",
        body: "Building the reading habit—for pleasure and performance.",
      },
      {
        bgColor: "red",
        img: image_1,
        title: `Co-working space/ cafe`,
        body: "Parents/ guardians can work from a desk in school while enjoying a cup of coffee.",
      },
    ];
    return (
      <div className="container">
        <Header />
        <div className="container_body">
          {cardDetails?.map((details, index) => (
            <Card key={index} {...details} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
