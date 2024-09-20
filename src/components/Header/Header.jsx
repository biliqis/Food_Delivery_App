import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Explore our diverse menu, showcasing a delightful selection of dishes
          made with the finest ingredients. Indulge your cravings and enhance
          your dining experience, one exquisite meal at a time.
        </p>
        <button>ViewMenu</button>
      </div>
    </div>
  );
};

export default Header;