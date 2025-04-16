import MenuContainer from "@/components/Ui/Navigation/MenuContainer";
import dynamic from "next/dynamic";
const Logo = dynamic(() => import("@/components/Ui/Logo"), { ssr: false });
const MenuBtn = dynamic(() => import("@/components/Ui/Navigation/MenuBtn"), {
  ssr: false,
});
const SearchBtn = dynamic(() => import("@/components/Ui/Search/SearchBtn"), {
  ssr: false,
});
const SearchContainer = dynamic(() => import("@/components/Ui/Search/SearchContainer"), {
  ssr: false,
});

import Link from "next/link";
import { useCallback, useState } from "react";
import useLenis from "@/Hooks/useLenis";

const Header = ({ menuData }) => {

  const [isMenu, setIsMenu] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const lenisRef = useLenis(); // Get Lenis instance

  const menuBtnClick = useCallback(() => {
    setIsMenu((prev) => {
      const newState = !prev;

      if (lenisRef.current) {
        if (newState) {
          lenisRef.current.stop();  // Disable scrolling when menu is open
        } else {
          lenisRef.current.start(); // Enable scrolling when menu is closed
        }
      }
      return newState;
    });
  }, [lenisRef]);

  const searchBtnClick = useCallback(() => {
    setIsSearch(!isSearch);
  }, [isSearch]);

  return (
    <>
      <header className="border-b border-solid border-[#CACACA] bg-white py-[10px] xl:py-[1.302vw] z-[999] sticky top-0">
        <div className="container xl:px-[4.688vw]">
          <div className="row relative justify-center">
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <MenuBtn
                customClass={isMenu ? "active" : ''}
                handleClick={menuBtnClick}
              />
            </div>
            <div className="w-[100px] sm:w-[120px] xl:w-[8.594vw]">
              <Logo />
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 row items-center gap-x-[15px] xl:gap-x-[2.604vw] xl:text-[1.25vw]">
              <Link href={'#'} className="uppercase !hidden sm:!flex text-black goldStar font-normal">Magazine</Link>
              <SearchBtn handleClick={searchBtnClick} />
            </div>
          </div>
        </div>
      </header>
      <MenuContainer customClass={isMenu && 'active'} menuData={menuData} menuBtnClick={menuBtnClick} />

      <SearchContainer customClass={isSearch && 'active'} />

    </>
  );
};

export default Header;


