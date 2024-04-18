import React, { useState } from "react";
import $ from "jquery";
import random from "random";
import "../styles/card.scss";

const Card = () => {
  const [position, setPosition] = useState([0, 0]);

  var x: NodeJS.Timeout;
  var $cards = $(".cover-card");
  var $style = $(".hover");

  const handleSparkles: React.MouseEventHandler<HTMLDivElement> = (
    event
  ): void => {
    setPosition([event.nativeEvent.offsetX, event.nativeEvent.offsetY]);
    event.preventDefault();
    var $card = $(event.currentTarget);
    var l = position[0];
    var t = position[1];
    var h = $card.height();
    var w = $card.width();

    var px = w ? Math.abs(Math.floor((100 / w) * l) - 100) : 0;
    var py = h ? Math.abs(Math.floor((100 / h) * t) - 100) : 0;

    var pa = 50 - px + (50 - py);
    var lp = 50 + (px - 50) / 1.5;
    var tp = 50 + (py - 50) / 1.5;
    var px_spark = 50 + (px - 50) / 7;
    var py_spark = 50 + (py - 50) / 7;
    var p_opc = 20 + Math.abs(pa) * 1.5;
    var ty = (tp - 50) / 2 - 1;
    var tx = ((lp - 50) / 1.5) * 0.5;
    var grad_pos = `background-position: ${lp}% ${tp}%;`;
    var spark_pos = `background-position: ${px_spark}% ${py_spark}`;
    var opc = `opacity: ${p_opc / 100}`;
    var tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg)`;
    var style = `.cover-card:hover:before { ${grad_pos} } .cover-card:hover:after { ${spark_pos} ${opc} }`;
    $cards.removeClass("active");
    $cards.removeClass("animated");
    $card.attr("style", tf);
    $style.html(style);
    clearTimeout(x);
  };

  const handleMouseOut: React.MouseEventHandler<HTMLDivElement> = (event) => {
    var $card = $(event.currentTarget);
    $style.html("");
    $card.removeAttr("style");
    x = setTimeout(function () {
      $card.addClass("animated");
    }, random.int(2500, 10000));
  };

  return (
    <>
      <div
        className="cover-card drop-shadow-md hover:drop-shadow-2xl animated cursor-pointer delay-100"
        onMouseMove={handleSparkles}
        onMouseOut={handleMouseOut}
      />
      <style className="hover"></style>
    </>
  );
};

export default Card;
