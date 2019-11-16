import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const DefaultLayout = ({ children }) => (
  <>
    <Header />
    <div className="page-content-wrapper">
      <div className="page-content">{children}</div>

      <Footer />
    </div>
  </>
);

export default DefaultLayout;
