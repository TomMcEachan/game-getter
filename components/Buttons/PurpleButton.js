export default function PurpleButton({text}) {
    return (
          <button type="submit" 
                  className={`drop-shadow-pop bg-purple-600 text-white outline-black outline font-bebas text-lg outline-3 max-w-xs pl-2 pr-2 pt-2 pb-2 m-2`}>
              {text}
          </button>       
          )
      };