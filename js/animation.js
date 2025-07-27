const item = document.querySelector(".img2");
const item1 = document.querySelector(".img2-1");
const item2 = document.querySelector(".cute-ghots");

item.animate(
  [{ transform: "translateX(0)" }, { transform: "translateY(-0.4rem)" }],
  {
    duration: 2000,
    easing: "ease-in-out",
    direction: "alternate",
    iterations: Infinity,
  }
);

item1.animate(
  [{ transform: "translateX(0)" }, { transform: "translateY(-0.4rem)" }],
  {
    duration: 2000,
    easing: "ease-in-out",
    direction: "alternate",
    iterations: Infinity,
  }
);

item2.animate(
  [{ transform: "translateX(0)" }, { transform: "translateY(-0.3rem)" }],
  {
    duration: 2000,
    easing: "ease-in-out",
    direction: "alternate",
    iterations: Infinity,
  }
);
