import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const MenuContainer = ({ customClass }) => {
  return (
    <div className={`menuContainer scroll ${customClass}`}>
      <div className="container xl:px-[4.688vw]">
      <div className="lg:hidden">
          <MobileMenu />
        </div>
        <div className="hidden lg:block">
          <DesktopMenu />
        </div>
      </div>
    </div>
  );
};

export default MenuContainer;
