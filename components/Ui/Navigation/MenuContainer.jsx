import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const MenuContainer = ({ customClass, menuData }) => {
  console.log(menuData, "Meny");

  return (
    <div data-lenis-prevent className={`menuContainer scroll ${customClass}`}>
      <div className="container xl:px-[4.688vw]">
        <div className="lg:hidden">
          <MobileMenu menuData={menuData} />
        </div>
        <div className="hidden lg:block">
          <DesktopMenu menuData={menuData} />
        </div>
      </div>
    </div>
  );
};

export default MenuContainer;
