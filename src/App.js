import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Category } from "./pages/Category";
import { Recipe } from "./pages/Recipe";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/SPA-restaurant">
        <Header/>
        <main className="container content">
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/category/:name' element={<Category/>}/>
          <Route path='/meal/:id' element={<Recipe/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
