import Header from "../components/Header/Header.js";
import GamePreview from "../components/GamePreview/GamePreview.js";
import SearchContainer from "../components/Search/SearchContainer";

export default function Home() {
  return (
    <div>
      <Header />
      <SearchContainer />
      <GamePreview />
    </div>
  )
}
