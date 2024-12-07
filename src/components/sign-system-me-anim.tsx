import Sign from "./sign";

export default function SignSystemMeAnim({ text }: { text: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        overflow: "visible",
      }}
    >
      {text
        .trim()
        .split("\n")
        .map((line, i) => (
          <div key={i} style={{ display: "flex", overflow: "visible" }}>
            {line
              .trim()
              .toLowerCase()
              .split("")
              .map((char, j) => (
                <Sign char={char} key={j} />
              ))}
          </div>
        ))}
    </div>
  );
}
