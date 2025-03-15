import Ginza from "./signs/ginza.svg"; // for G
import Marunouchi from "./signs/marunouchi.svg"; // for M
import Hibiya from "./signs/hibiya.svg"; // for H
import Tozai from "./signs/tozai.svg"; // for T
import Chiyoda from "./signs/chiyoda.svg"; // for C
import Yurakucho from "./signs/yurakucho.svg"; // for Y
import Hanzomon from "./signs/hanzomon.svg"; // for Z
import Namboku from "./signs/namboku.svg"; // for N
import Fukutoshin from "./signs/fukutoshin.svg"; // for F
import Asakusa from "./signs/asakusa.svg"; // for A
import Oedo from "./signs/oedo.svg"; // for E
import Mita from "./signs/mita.svg"; // for I
import Shinjuku from "./signs/shinjuku.svg"; // for S

export default function Sign({ char, isAnimated }: { char: string, isAnimated?: boolean }) {
  switch (char) {
    case "g":
      return <Ginza className={`${isAnimated && 'animate-slide-in-r'}`} />;
    case "m":
      return <Marunouchi className={`${isAnimated && 'animate-slide-in-r'}`} />;
    case "z":
      return <Hanzomon className={`${isAnimated && 'animate-slide-in-r'}`} />;
    case "e":
      return <Oedo className={`${isAnimated && 'animate-slide-in-r'}`} />;
    case "c":
      return <Chiyoda className={`${isAnimated && 'animate-slide-in-r'}`} />;
    case "y":
      return <Yurakucho className={`${isAnimated && 'animate-slide-in-r'}`} />;
    case "n":
      return <Namboku className={`${isAnimated && 'animate-slide-in-r'}`} />;
    case "f":
      return <Fukutoshin className={`${isAnimated && 'animate-slide-in-r'}`} />;
    case "t":
      return <Tozai className={`${isAnimated && 'animate-slide-in-r'}`} />;
    case "h":
      return <Hibiya className={`${isAnimated && 'animate-slide-in-r'}`} />;
    case "i":
      return <Mita className={`${isAnimated && 'animate-slide-in-r'}`} />;
    case "s":
      return <Shinjuku className={`${isAnimated && 'animate-slide-in-r'}`} />;
    case "a":
      return <Asakusa className={`${isAnimated && 'animate-slide-in-r'}`} />;
    case " ":
      return <div style={{ width: "64px" }} />;
    default:
      return <div style={{ width: "64px" }} />;
  }
}
