import React, { MouseEvent, MutableRefObject, useRef } from "react";
import logo from "../../assets/images/adidas.png";
import "./index.scss";

const App = (): JSX.Element => {
  const card = useRef() as MutableRefObject<HTMLDivElement>;
  const sneaker = useRef() as MutableRefObject<HTMLImageElement>;
  const title = useRef() as MutableRefObject<HTMLDivElement>;
  const description = useRef() as MutableRefObject<HTMLDivElement>;
  const sizes = useRef() as MutableRefObject<HTMLDivElement>;
  const purchase = useRef() as MutableRefObject<HTMLDivElement>;

  const onContainerMove = (e: MouseEvent<HTMLInputElement>) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
    const yAxis = (window.innerWidth / 2 - e.pageY) / 40;
    card.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  };

  const onContainerEnter = () => {
    card.current.style.transition = `none`;
    // Popout
    sneaker.current.style.transform = "translateZ(200px) rotateZ(-45deg)";
    title.current.style.transform = "translateZ(150px)";
    description.current.style.transform = "translateZ(125px)";
    sizes.current.style.transform = "translateZ(100px)";
    purchase.current.style.transform = "translateZ(75px)";
  };

  const onContainerLeave = () => {
    card.current.style.transition = `all 0.5s ease`;
    card.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // Popback
    sneaker.current.style.transform = "translateZ(0px) rotateZ(0deg)";
    title.current.style.transform = "translateZ(0px)";
    description.current.style.transform = "translateZ(0px)";
    sizes.current.style.transform = "translateZ(0px)";
    purchase.current.style.transform = "translateZ(0px)";
  };

  return (
    <div
      className="container"
      onMouseMove={onContainerMove}
      onMouseEnter={onContainerEnter}
      onMouseLeave={onContainerLeave}
    >
      <div className="card" ref={card}>
        <div className="sneaker">
          <div className="circle"></div>
          <img src={logo} alt="sneaker logo" ref={sneaker} />
        </div>
        <div className="info">
          <h1 className="title" ref={title}>
            Adidas ZX
          </h1>
          <h3 ref={description}>
            FUTURE-READY TRANERS WITH WRAPPED BOOST FOR EXCEPTIION COMFORT.
          </h3>
          <div className="sizes" ref={sizes}>
            <button>39</button>
            <button>40</button>
            <button className="active">42</button>
            <button>44</button>
          </div>
          <div className="purchase" ref={purchase}>
            <button>Purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
