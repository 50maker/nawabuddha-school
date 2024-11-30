import "../index.css";

export default function Services({ src, title, subHeading }) {
  return (
    <div className="services-items">
      <img src={src} />
      <p className="services-items-title">{title}</p>
      <p className="services-items-paragraph ">{subHeading}</p>
    </div>
  );
}
