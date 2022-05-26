import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ProfileButton() {
  return (
    <button aria-label="get backlog" name="get backlog" type="submit" 
    value="submit" 
    className="w-12 h-12 ml-4 text-black bg-green-400  outline-black outline-solid outline-3 outline drop-shadow-pop">
        <FontAwesomeIcon className="fa-xl item-center" icon={faArrowRight} />
    </button>
  )
}
