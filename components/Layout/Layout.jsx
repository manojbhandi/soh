import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = (props) => {
  return (
    <>
      <Header menuData={props?.data?.data} />
      {props.children}
      <Footer categories={props?.categories?.data} />
    </>
  );
};

export default Layout;
