import { Routes, Route } from "react-router-dom";
import { Header, Footer, ScrollManager } from "./components/Chrome";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectPage from "./pages/ProjectPage";
import ArticlePage from "./pages/ArticlePage";
import PoemPage from "./pages/PoemPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/article/:id" element={<ArticlePage kind="article" />} />
          <Route path="/faculty/:id" element={<ArticlePage kind="faculty" />} />
          <Route path="/poem/:id" element={<PoemPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
