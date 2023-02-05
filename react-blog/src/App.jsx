import { useState } from "react";
import axios from "axios";
import { DisplayPosts, Header } from "./components";

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 flex flex-col sm:flex-row">
        <DisplayPosts />
        <nav class="order-first md:w-32 bg-purple-200 p-2">Navigation</nav>

        <aside class="md:w-32 bg-yellow-100 p-2">Right Sidebar</aside>
      </div>

      <footer class="bg-gray-100 p-2">Footer</footer>
    </div>
  );
}

export default App;
