import ResultGrid from "./components/ResultGrid";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";


const App = () => {
  return (
      <div className="min-h-screen w-full bg-gray-950 text-white">
          <SearchBar/>

          <Tabs/>

          <ResultGrid/>
      </div>
  );
}

export default App