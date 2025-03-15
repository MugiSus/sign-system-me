import SignGinza from "./signs/ginza.svg"; // for G
import SignMarunouchi from "./signs/marunouchi.svg"; // for M
import SignHibiya from "./signs/hibiya.svg"; // for H
import SignTozai from "./signs/tozai.svg"; // for T
import SignChiyoda from "./signs/chiyoda.svg"; // for C
import SignYurakucho from "./signs/yurakucho.svg"; // for Y
import SignHanzomon from "./signs/hanzomon.svg"; // for Z
import SignNamboku from "./signs/namboku.svg"; // for N
import SignFukutoshin from "./signs/fukutoshin.svg"; // for F
import SignAsakusa from "./signs/asakusa.svg"; // for A
import SignOedo from "./signs/oedo.svg"; // for E
import SignMita from "./signs/mita.svg"; // for I
import SignShinjuku from "./signs/shinjuku.svg"; // for S

export default function Sign({ char, isAnimated }: { char: string, isAnimated?: boolean }) {
  switch (char) {
    case "g":
      return <SignGinza className={`${isAnimated && 'animate-slide-in-r'}`} />;
    case "m":
      return <SignMarunouchi className={`${isAnimated && 'animate-slide-in-r'}`} />;
    case "z":
      return <SignHanzomon className={`${isAnimated && 'animate-slide-in-r'}`} />;
    case "e":
      return <SignOedo className={`${isAnimated && 'animate-slide-in-r'}`} />;
    case "c":
      return <SignChiyoda className={`${isAnimated && 'animate-slide-in-r'}`} />;
    case "y":
      return <SignYurakucho className={`${isAnimated && 'animate-slide-in-r'}`} />;
    case "n":
      return <SignNamboku className={`${isAnimated && 'animate-slide-in-r'}`} />;
    case "f":
      return <SignFukutoshin className={`${isAnimated && 'animate-slide-in-r'}`} />;
    case "t":
      return <SignTozai className={`${isAnimated && 'animate-slide-in-r'}`} />;
    case "h":
      return <SignHibiya className={`${isAnimated && 'animate-slide-in-r'}`} />;
    case "i":
      return <SignMita className={`${isAnimated && 'animate-slide-in-r'}`} />;
    case "s":
      return <SignShinjuku className={`${isAnimated && 'animate-slide-in-r'}`} />;
    case "a":
      return <SignAsakusa className={`${isAnimated && 'animate-slide-in-r'}`} />;
    case " ":
      return <div style={{ width: "64px" }} />;
    default:
      return <div style={{ width: "64px" }} />;
  }
}
