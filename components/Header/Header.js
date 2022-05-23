import Logo from "./Logo/Logo.js"

export default function Header() {
    return (
      <div className="grid grid-cols-5 gap-5 mt-5">
        <div></div>
        <div></div>
        <div>
          <Logo />
        </div>
        <div></div>
        <div></div>
      </div>
    )
  }
  