import "./header.css";
const Header = () => {
  return (
    <div className="Header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://cdn.pixabay.com/photo/2022/04/03/09/04/bridge-7108432_1280.jpg"
        alt="Img"
      />
    </div>
  );
};

export default Header;
