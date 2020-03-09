import React, { useRef, useEffect } from "react";
import "./App.scss";
import People from "./images/japan.jpg";
import { TimelineLite, Power2 } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

const App = () => {
  let image = useRef(null);
  let container = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");
  let title = useRef(null);

  let tl = new TimelineLite();

  useEffect(() => {
    console.log(title.childNodes[0].childNodes[0]);
    tl.to(container, 0, { css: { visibility: "visible" } });
    tl.to(imageReveal, 1.4, { height: "0%", ease: Power2.easeInOut }, 0);
    tl.from(image, 1.4, {
      scale: 1.6,
      ease: Power2.easeInOut,
      delay: -1.4
    });
    tl.staggerFrom(
      [title.childNodes[0].childNodes[0], title.childNodes[1].childNodes[0]],
      1.2,
      {
        y: "100%",
        ease: Power2.easeInOut
      },
      0.1,
      0.75
    );
  });

  return (
    <section className="main">
      <div className="container" ref={el => (container = el)}>
        <div className="title-container" ref={el => (title = el)}>
          <div className="title-line-1">
            <span>Big in</span>
          </div>

          <div className="title-line-2">
            <span>Japan</span>
          </div>
        </div>
        <>
          <div className="img-container">
            <img
              ref={el => {
                image = el;
              }}
              src={People}
            />
          </div>
        </>
      </div>
    </section>
  );
};

export default App;
