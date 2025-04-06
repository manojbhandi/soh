import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const MenuContainer = ({ customClass, menuData, menuBtnClick }) => {
  return (
    <div data-lenis-prevent className={`menuContainer scroll ${customClass}`}>
      <div className="container xl:px-[4.688vw]">
        <div className="lg:hidden">
          <MobileMenu menuData={menuData} />
        </div>
        <div className="hidden lg:block">
          <DesktopMenu menuData={menuData} menuBtnClick={menuBtnClick} />
        </div>
      </div>
    </div>
  );
};

export default MenuContainer;
