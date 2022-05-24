import Header from "../components/Header/Header.js";
import GamePreview from "../components/GamePreview/GamePreview.js";
import SearchContainer from "../components/Search/SearchContainer";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <SearchContainer />
      <GamePreview />
    </div>
  )
}
