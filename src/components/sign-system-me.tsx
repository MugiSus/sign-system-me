import Ginza from "./signs/ginza.svg"; // G
import Marunouchi from "./signs/marunouchi.svg"; // M
import Hibiya from "./signs/hibiya.svg"; // H
import Tozai from "./signs/tozai.svg"; // T
import Chiyoda from "./signs/chiyoda.svg"; // C
import Yurakucho from "./signs/yurakucho.svg"; // Y
import Hanzomon from "./signs/hanzomon.svg"; // Z
import Namboku from "./signs/namboku.svg"; // N
import Fukutoshin from "./signs/fukutoshin.svg"; // F
import Asakusa from "./signs/asakusa.svg"; // A
import Oedo from "./signs/oedo.svg"; // E
import Mita from "./signs/mita.svg"; // I
import Shinjuku from "./signs/shinjuku.svg"; // S

export default function SignSystemMe({ text }: { text: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "auto" }}>
      {text
        .trim()
        .split("\n")
        .map((line, i) => (
          <div key={i} style={{ display: "flex" }}>
            {line
              .trim()
              .toLowerCase()
              .split("")
              .map((char, j) => {
                switch (char) {
                  case "g":
                    return <Ginza key={j} />;
                  case "m":
                    return <Marunouchi key={j} />;
                  case "z":
                    return <Hanzomon key={j} />;
                  case "e":
                    return <Oedo key={j} />;
                  case "c":
                    return <Chiyoda key={j} />;
                  case "y":
                    return <Yurakucho key={j} />;
                  case "n":
                    return <Namboku key={j} />;
                  case "f":
                    return <Fukutoshin key={j} />;
                  case "t":
                    return <Tozai key={j} />;
                  case "h":
                    return <Hibiya key={j} />;
                  case "i":
                    return <Mita key={j} />;
                  case "s":
                    return <Shinjuku key={j} />;
                  case "a":
                    return <Asakusa key={j} />;
                  case " ":
                    return <div key={j} style={{ width: "4rem" }} />;
                  default:
                    return <div key={j} style={{ width: "4rem" }} />;
                }
              })}
          </div>
        ))}
    </div>
  );
}
