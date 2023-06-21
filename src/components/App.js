import { useContext } from "react";
import Dates from "./Page/Dates";
import Footer from "./Page/Footer";
import Header from "./Page/Header";
import Center from "./Page/Center";
import ReactToPrint from "react-to-print";
import { State } from "../context/stateContext";
import HeaderPublic from "./Public/HeaderPublic";
import CenterPublic from "./Public/CenterPublic";

function App() {
  const {
    componentRef,
  } = useContext(State);

  return (
    <>
      <main
        className="m-5 p-5 xl:grid grid-cols-2 gap-10 xl:items-start"
        style={{
          maxWidth: "1920px",
          margin: "auto",
        }}
      >
        <section>
          <div className="bg-white p-5 rounded-2xl border-4 border-blue-800  shadow border-5 ">
            <div className="flex flex-col justify-center mx-5 ">
              <HeaderPublic />
              <CenterPublic />
            </div>
          </div>
        </section>
        <section>
          <div className="bg-white p-5 rounded-2xl border-4 border-blue-200  shadow border-5 ">
            <div className="flex flex-col justify-center mx-5 ">
            This website was created by Kritsada Sathon
            </div>
          </div>
        </section>

        <div className="invoice__preview bg-white p-5 rounded-2xl border-4 border-blue-200">
          <ReactToPrint
            trigger={() => (
              <button className="bg-blue-500 ml-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400">
                Print / Download
              </button>
            )}
            content={() => componentRef.current}
          />
          <div ref={componentRef} className="p-10 px-10 mx-5">
            <Header />
            <Dates />
            <Center />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
