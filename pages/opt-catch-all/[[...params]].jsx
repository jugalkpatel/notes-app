import { useRouter } from "next/router";

// when you use optional routes you should not defind index page inside that page.
// wrong: /opt-catch-all/index.js 
/** 
 * why: you can not define route with same specificity as opt-catch-all route. 
 * because route without param is also matched.
 * in this case opt route matches:
 * /opt-catch-all/
 * /opt-catch-all/1
 * /opt-catch-all/1/2
*/

export default () => {
  const router = useRouter();

  console.log(router.query);

  return <h1>I'm optional catch all</h1>;
};
