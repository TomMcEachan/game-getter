export default function PurpleButton({text}) {
    return (
          <button type="submit" 
                  className={`drop-shadow-pop bg-purple-600 text-white outline-black outline font-bebas text-lg outline-3  pl-7 pr-7 pt-2 pb-2 m-2`}>
              {text}
          </button>       
          )
      };