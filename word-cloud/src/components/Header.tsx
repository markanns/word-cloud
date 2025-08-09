import wordImage from "../assets/wordImage.jpg";

export const Header = () => {
  return (
    <div className="header">
      <img className="header__image" src={wordImage} alt="Word Cloud" />
      <h1>My Topics Challenge</h1>
    </div>
  );
};
