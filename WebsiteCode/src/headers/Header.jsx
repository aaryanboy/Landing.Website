import "./header.css";
import BurgerMenu from "./BurgerMenu";

function Header({ homeRef, projectRef, educationRef }) {
  return (
    <>
      <div className="header1">
        <div className="place">
          <img src="./src/assets/logo.svg" alt="Icon" className="icon" />
          Bhaktaput Nepal
        </div>

        <div>
          <BurgerMenu
            homeRef={homeRef}
            projectRef={projectRef}
            educationRef={educationRef}
          />
        </div>
      </div>
      <hr />
    </>
  );
}

export default Header;
