import SearchBox from "./SearchBox";
import PinkButton from "../Buttons/PinkButton"
import PurpleButton from "../Buttons/PurpleButton"
import SearchButton from "./SearchButton"

export default function SearchContainer() {
  return (
    
    <div>
        <div className="flex items-center justify-center">
            <SearchBox />
            <SearchButton />
        </div>
        <div className="">
            <div></div>
            <div className="flex items-center justify-center">
                <PinkButton text="Get Random" />
                <PurpleButton text= "Get Popular" />
            </div>
            <div></div>    
        </div>
    </div>
    
  )
}
