import Header from "../components/Header";
import Footer from "../components/Footer";
import Jumbo from "../components/dataDisplay/Jumbo";

const SingleBookLayout = ({ children }) => (
  <>
    <Header />

    <Jumbo>
      <h1>Single Book View</h1>
    </Jumbo>

    <div className="single-book-wrapper">
      <div className="single-book-content">{children}</div>

      <Footer></Footer>
    </div>
  </>
);

export default SingleBookLayout;
