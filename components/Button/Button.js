

export default function Button({Text, Color}) {
  return (
    <div>
        <button className="bg-pink-600 text-white 
                            drop-shadow-pop 
                            outline outline-black outline-2 outline-solid font-bebas">
            {Text}
        </button>
    </div>
  )
}
