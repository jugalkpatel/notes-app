import Link from "next/link";

export default () => {
  const notes = new Array(5)
    .fill(1)
    .map((e, i) => ({ id: i, title: `Note: ${i}` }));
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {notes.map(({ id, title }, index) => (
        <Link key={index} href={`/notes/${id}`}>{title}</Link>
      ))}
    </div>
  );
};
