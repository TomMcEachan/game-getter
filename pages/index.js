import Header from "../components/Header/Header.js";
import GamePreview from "../components/GamePreview/GamePreview.js";
import SearchBox from "../components/Search/SearchBox.js";

export default function Home() {
  return (
    <div>
      <Header />
      <SearchBox />
      <GamePreview />
    </div>
  )
}
