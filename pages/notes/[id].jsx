import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const { id } = router.query;
  return <h1>{id} note</h1>;
};
