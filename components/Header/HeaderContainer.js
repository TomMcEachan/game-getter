import Logo from "./Logo/Logo.js"
import BacklogButton from "./NavButtons/BacklogButton.js"
import ProfileButton from "./NavButtons/BacklogButton.js"

export default function HeaderContainer() {
    return (
      <nav className="flex items-center justify-center mb-10 mt-10">
        <div></div>
        <div>  
            <Logo className="shrink"/>    
        </div>
        <div>
            <BacklogButton />
            <ProfileButton />
        </div>
      </nav>
      
    )
  }
  