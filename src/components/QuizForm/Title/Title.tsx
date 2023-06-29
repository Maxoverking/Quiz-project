import { FC, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { H1 } from "./Title.styled";
gsap.registerPlugin(TextPlugin);

const Title: FC = () => {
  const ref = useRef(null);

  useEffect(() => {
    const h1Element = ref.current;

    gsap.to(h1Element, {
      duration: 2.5,
      delay: 2,
      text: "Start Quiz",
      rotation: 360,
      ease: "elastic.inOut",
    });
  }, []);

  return <H1 ref={ref}></H1>;
};

export default Title;
