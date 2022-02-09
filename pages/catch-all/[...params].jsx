import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const params = router.query.params || [];
  console.log({ params });
  return <h1>Catch-all Params route</h1>;
};
