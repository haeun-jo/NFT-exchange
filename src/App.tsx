import { Route, Routes } from "react-router-dom";

import { ROOT } from "./constants/path";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Collections from "./components/Collections";
import All from "./components/All";
import Singles from "./components/Singles";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <div className="container">
        <Routes>
          <Route path={ROOT.ROOT} element={<Collections />} />
          <Route path={ROOT.ALL} element={<All />} />
          <Route path={ROOT.COLLECTIONS} element={<Collections />} />
          <Route path={ROOT.SINGLES} element={<Singles />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
