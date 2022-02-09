import Link from "next/link";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const notes = new Array(5)
    .fill(1)
    .map((e, i) => ({ id: i, title: `Note: ${i}` }));

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {notes.map(({ id, title }, index) => (
        <Link key={index} href={`/notes/${id}`}>
          {title}
        </Link>
      ))}

      {notes.map(({ id, title }) => (
        <button key={title} onClick={() => router.push("/notes/[id]", `/notes/${id}`)}>
          {title}
        </button>
      ))}
    </div>
  );
};
