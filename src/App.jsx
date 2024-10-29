import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./page/HomePage";
import { ViewPage } from "./page/ViewPage";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:postId" element={<ViewPage />} />
        </Routes>
      </Router>
      <Toaster
        toastOptions={{
          unstyled: true,
        }}
      />
    </div>
  );
}

export default App;
