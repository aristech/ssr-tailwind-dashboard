import React from "react";
import Error from "next/error";
import routes from "../../configApp/routes";
import PageWrapper from "../../configApp/PageWrapper.js";
import AdminNavbar from "../../components/Navbars/AdminNavbar";
import HeaderStats from "../../components/Headers/HeaderStats";
import FooterAdmin from "../../components/Footers/FooterAdmin";
import Sidebar from "../../components/Sidebar/Sidebar";
import Dashboard from "../../views/admin/Dashboard";
import Setttings from "../../views/admin/Settings";
import Tables from "../../views/admin/Tables";
import Maps from "../../views/admin/Maps";
import Calendar from "../../views/admin/Calendar/Calendar";

function Admin({ slug }) {
  // const [loading, setLoading] = useState(false);

  const components = {
    dashboard: Dashboard,
    calendar: Calendar,
    settings: Setttings,
    tables: Tables,
    maps: Maps,
  };

  const Tagname = components[slug];

  if (!slug) {
    return (
      <>
        <Sidebar slug={slug} routes={routes} />
        <div className="relative md:ml-64 bg-gray-200">
          <AdminNavbar slug={slug} />
          {/* Header */}
          <HeaderStats />
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <Dashboard slug={slug} />
            <FooterAdmin />
          </div>
        </div>
      </>
    );
  }
  console.log(slug);
  const isSlug = Object.keys(components).includes(slug);
  if (!isSlug) return <Error statusCode={404} />;

  return (
    <>
      <Sidebar slug={slug} routes={routes} />
      <div className="relative md:ml-64 bg-gray-200">
        <AdminNavbar slug={slug} />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Tagname slug={slug} />
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}

Admin.getInitialProps = async (args) => {
  const { slug } = args.query;

  return { slug };
};

export default PageWrapper(Admin);
