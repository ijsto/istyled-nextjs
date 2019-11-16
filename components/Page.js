import Meta from "./Meta";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const Page = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Page;
