import { useRouter } from "next/router";

// if we have params and dynamic route under same index page
// then params route take precedence over catch-all for one param ----> if url is /notes/1/ ----> then [id].jsx render
// ----> if url is /notes/1/2/3 ----> then [...params].jsx render
export default () => {
  const router = useRouter();
  const params = router.query.params || [];

  console.log({ params });
  return <h1>I'm catch-all params route</h1>;
};
