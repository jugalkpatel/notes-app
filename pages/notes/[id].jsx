import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      {id} note
      <button onClick={() => router.push("/notes")}> to note list</button>
    </>
  );
};
