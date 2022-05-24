import SearchBox from "./SearchBox";
import PinkButton from "../Buttons/PinkButton"
import PurpleButton from "../Buttons/PurpleButton"

export default function SearchContainer() {
  return (
    
    <div>
        <div className="flex items-center justify-center">
            <p>Type some of your favourite games to generate some suggestions...</p>
        </div>
        <div>
            <SearchBox />
        </div>
        <div className="grid grid-cols-5">
            <div></div>
            <PinkButton text="Get Random"/>
            <PurpleButton text= "Get Popular" />
        </div>
    </div>
    
  )
}
