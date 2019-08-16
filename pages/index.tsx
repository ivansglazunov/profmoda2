import { Parallax } from "react-parallax";

import '../style.css';

export const WhiteSpace = () => {
  return <div style={{ height: 500 }}></div>;
};

export default () => {
  return <>
    <Parallax
      bgImage={'/static/1.jpg'}
      strength={200}
      renderLayer={percentage => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(255, 125, 0, ${percentage * 1})`,
              left: "50%",
              top: "50%",
              borderRadius: "50%",
              transform: "translate(-50%,-50%)",
              width: percentage * 500,
              height: percentage * 500
            }}
          />
        </div>
      )}
    >
      <div style={{ height: 500 }}>
      </div>
    </Parallax>
    <Parallax
      bgImage={'/static/0.jpg'}
      strength={300}
    >
      <div style={{ height: 500 }}>
      </div>
    </Parallax>
    <Parallax
      bgImage={'/static/0.jpg'}
      strength={300}
    >
      <div style={{ height: 500 }}>
      </div>
    </Parallax>
    <Parallax
      bgImage={'/static/1.jpg'}
      strength={200}
      renderLayer={percentage => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(255, 125, 0, ${percentage * 1})`,
              left: "50%",
              top: "50%",
              borderRadius: "50%",
              transform: "translate(-50%,-50%)",
              width: percentage * 500,
              height: percentage * 500
            }}
          />
        </div>
      )}
    >
      <div style={{ height: 500 }}>
      </div>
    </Parallax>
  </>;
};
