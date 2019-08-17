import { Parallax } from "react-parallax";

import '../style.css';

export const WhiteSpace = () => {
  return <div style={{ height: 500 }}></div>;
};

export default () => {
  return <>
    <Parallax
      bgImage={'/static/6.jpeg'}
      strength={200}
    >
      <div style={{ height: 500 }}>
      </div>
    </Parallax>
    <Parallax
      bgImage={'/static/1.jpeg'}
      strength={200}
    >
      <div style={{ height: 500 }}>
      </div>
    </Parallax>
    <Parallax
      bgImage={'/static/5.jpeg'}
      strength={200}
    >
      <div style={{ height: 500 }}>
      </div>
    </Parallax>
    <Parallax
      bgImage={'/static/2.jpeg'}
      strength={200}
    >
      <div style={{ height: 500 }}>
      </div>
    </Parallax>
    <Parallax
      bgImage={'/static/4.jpeg'}
      strength={200}
    >
      <div style={{ height: 500 }}>
      </div>
    </Parallax>
    <Parallax
      bgImage={'/static/3.jpeg'}
      strength={200}
    >
      <div style={{ height: 500 }}>
      </div>
    </Parallax>
  </>;
};
