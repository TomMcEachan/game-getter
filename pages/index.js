import HeaderContainer from "../components/Header/HeaderContainer.js";
import GamePreviewContainer from "../components/GamePreview/GamePreviewContainer.js";
import SearchContainer from "../components/Search/SearchContainer";
import Axios from "axios"



const axios = Axios.create({
  baseURL: 'https://api.igdb.com/v4', 
  timeout: 1000,
  header: {'t3pr0yto00jt4ar9cmoufek2ufu55m': '61v9dlkc7pd7ml6c9pza0lwhfj4arx'}
})

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <HeaderContainer />
      <SearchContainer />
      <GamePreviewContainer />
    </div>
  )
}

/*
export async function getServerSideProps() {

  const gamesRes = axios.get("/games")
  

  return {
    props: {
      games: gamesRes.data
    }
  }
}
*/

