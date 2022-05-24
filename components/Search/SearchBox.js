import { faArrowRight} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function SearchBox() {
  return (
    <>
        <div className="flex items-center justify-center shrink">     
            <div className="outline outline-3 outline-black outline-solid drop-shadow-pop mb-3 mt-3 ">
                <input type="text" className="pt-3 pb-3 pr-5 pl-5 w-search" placeholder="e.g, spyro, call of duty 4, golden eye..."/>        
            </div>     
            <button type="submit" value="submit" 
                                className="w-12 h-12 ml-8 text-black bg-green-400  outline-black outline-solid outline-3 outline drop-shadow-pop" ToolTip="Search">
                <FontAwesomeIcon className="fa-xl" icon={faArrowRight} /> 
            </button>   
        </div>   
    </>
  )
}
