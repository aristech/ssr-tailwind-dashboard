import React from "react";
import Error from "next/error";
import PageWrapper from "../configApp/PageWrapper.js";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import FooterSmall from "../components/Footers/FooterSmall";
import Navbar from "../components/Navbars/AuthNavbar";

function Auth({ slug }) {
  // const [loading, setLoading] = useState(false);

  const components = {
    login: Login,
    register: Register,
  };

  const Tagname = components[slug];

  //   if (!myToken) {
  //     return <Error statusCode={404} />;
  //   }

  if (!slug) {
    return (
      <>
        <Navbar transparent />
        <main>
          <section className="relative w-full h-full py-40 min-h-screen">
            <div
              className="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat bg-full"
              style={{
                backgroundImage: "url(/img/register_bg_2.png)",
              }}
            ></div>
            <Login slug={slug} />
            <FooterSmall absolute />
          </section>
        </main>
      </>
    );
  }

  const isSlug = Object.keys(components).includes(slug);
  if (!isSlug) return <Error statusCode={404} />;

  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat bg-full"
            style={{
              backgroundImage: "url(/img/register_bg_2.png)",
            }}
          ></div>
          <Tagname slug={slug} />
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}

Auth.getInitialProps = async (args) => {
  const { slug } = args.query;

  return { slug };
};

export default PageWrapper(Auth);
