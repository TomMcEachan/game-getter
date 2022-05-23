import { faArrowRight} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function SearchBox() {
  return (
    <div>
        <div className="flex items-center justify-center ">
            <div className="flex outline outline-2 outline-black outline-solid drop-shadow-pop">
                <input type="text" className="px-4 py-2 w-80" placeholder="Search..."/>
            </div>
            <button className="
                px-4 py-2 ml-7 
                text-black
                bg-green-500 
                outline-black outline-solid outline-2 outline
                drop-shadow-pop">
                <FontAwesomeIcon className="fa-xl" icon={faArrowRight} />
            </button>
        </div>
    </div>
  )
}