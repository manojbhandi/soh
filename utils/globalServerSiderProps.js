import { wrapper } from "@/redux/store";

export const commonData = (getServerSidePropsFunc) => {
  return wrapper.getServerSideProps((store) => async (context) => {
    if (getServerSidePropsFunc) {
      const pageProps = await getServerSidePropsFunc(context);
      return { props: { ...pageProps.props } };
    }
  });
};
