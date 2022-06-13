

export default function PinkButton({text, path}) {
  return (
        <button type="submit" 
                className={`drop-shadow-pop bg-pink-600 text-white outline-black outline outline-3 text-lg font-bebas pl-7 pr-7 pt-2 pb-2 m-2`}
                onClick={ButtonClicked}            
                >
            {text}
        </button>       
        )
    };

//The Onclick event for the button
export function ButtonClicked ({path}) {
    

    
}




  
