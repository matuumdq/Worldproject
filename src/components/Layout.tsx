import Footer from "./Footer";
import Navbar from "./Navbar";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
export default function Layout({ children }) {
    return (
      <>
        <Navbar />
            <TransitionGroup>
                <CSSTransition timeout={300} classNames="page">
                    <main>{children}</main>
                </CSSTransition>
            </TransitionGroup>
        <Footer />
      </>
    );
  }