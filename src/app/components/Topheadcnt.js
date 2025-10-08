// components/TopHeadCnt.jsx
import "../globals.scss";
import "../../styles/_common.scss";

export default function TopHeadCnt({ items = [] }) {
  return (
    <div className="content-blk ">
      {items.map((item, index) => (
        <div key={index} className="content-section">
          <div className="head" data-aos="fade-right">
            {item.heading && <h5>{item.heading}</h5>}
            {item.subHeading && <h2>{item.subHeading}</h2>}
          </div>
          <div className="cnt" data-aos="fade-left">
            {item.content && <p>{item.content}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
