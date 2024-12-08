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

export default function Sign({ char }: { char: string }) {
  switch (char) {
    case "g":
      return <Ginza className="animate-slide-in-r" />;
    case "m":
      return <Marunouchi className="animate-slide-in-rb" />;
    case "z":
      return <Hanzomon className="animate-slide-in-b" />;
    case "e":
      return <Oedo className="animate-slide-in-r" />;
    case "c":
      return <Chiyoda className="animate-slide-in-rb" />;
    case "y":
      return <Yurakucho className="animate-slide-in-b" />;
    case "n":
      return <Namboku className="animate-slide-in-r" />;
    case "f":
      return <Fukutoshin className="animate-slide-in-rb" />;
    case "t":
      return <Tozai className="animate-slide-in-b" />;
    case "h":
      return <Hibiya className="animate-slide-in-r" />;
    case "i":
      return <Mita className="animate-slide-in-rb" />;
    case "s":
      return <Shinjuku className="animate-slide-in-b" />;
    case "a":
      return <Asakusa className="animate-slide-in-r" />;
    case " ":
      return <div style={{ width: "64px" }} />;
    default:
      return <div style={{ width: "64px" }} />;
  }
}
