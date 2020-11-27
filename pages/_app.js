// import App from 'next/app'
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layouts";
import { ApolloProvider } from "@apollo/react-hooks";
import AuthProvider from "../contexts/AuthProvider";
import apolloClient from "../apollo/apolloClient";
import cookie from "cookie";
import { QUERY_USER } from "../graphql/User";
import "../styles/global.scss";
// function MyApp({ Component, pageProps, apollo }) {
//   return (
//    <ApolloProvider client={apollo}>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//    </ApolloProvider>
//   )
// }

function MyApp({ Component, pageProps, apollo, user }) {
      return (
            <ApolloProvider client={apollo}>
                  <AuthProvider userData={user}>
                        <Layout>
                              <Component {...pageProps} />
                        </Layout>
                  </AuthProvider>
            </ApolloProvider>
      );
}

MyApp.getInitialProps = async ({ ctx, router }) => {
      // calls page's `getInitialProps` and fills `appProps.pageProps`
      if (process.browser) {
            return __NEXT_DATA__.props.pageProps;
      }

      //console.log('Router -->', router)

      const { headers } = ctx.req;
      const cookies = headers && cookie.parse(headers.cookie || "");
      const token = cookies && cookies.jwtToken;

      if (!token) {
            if (
                    router.pathname === "/dashboard" ||
                    router.pathname === "/carts" ||
                    router.pathname === "/manage" ||
                    router.pathname === "/manage/createProduct"||
                    router.pathname === "/profile"||
                    router.pathname === "/profile/create" ||
                    router.pathname === "/categories" ||
                    router.pathname ==="/brands" ||
                    router.pathname ==="/brands/createBrand" ||
                    router.pathname === "/banks" ||
                    router.pathname ==="/banks/CreateBankAc"
            ) {
                  //Use OR To Protected more Routers
                  ctx.res.writeHead(302, { Location: "/signin" }); //302 Redirect Route code
                  ctx.res.end();
            }
            //Add More Protected route here
            return null;
      }
      const response = await fetch("http://localhost:5000/graphql", {
            method: "post",
            headers: {
                  "Content-type": "application/json",
                  authorization: `Bearer ${token}` || "",
            },
            body: JSON.stringify(QUERY_USER),
      });
      //console.log("response data:", response);
      if (response.ok) {
            const result = await response.json();
            return { user: result.data.user };
            //console.log('User Info -->',  result)
      } else {
            if(router.pathname === "/carts") {
              ctx.res.writeHead(302, {Location: '/signin'}) //302 Redirect Route code
              ctx.res.end()
            }
            //Add More Protected route here
            return null;
      }
      console.log(ctx.req.headers)
};

export default apolloClient(MyApp);
