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
// import Clients from "../views/clients/Clients";
// import CreateClient from "../views/clients/CreateClient";
// import EditClient from "../views/clients/EditClient";
// import ClientFiles from "../views/clients/ClientFiles";
// import Managers from "../views/managers/Managers";
// import CreateManagers from "../views/managers/CreateManagers";
// import Devices from "../views/devices/Devices";
// import CreateDevices from "../views/devices/CreateDevices";
// import Damages from "../views/damages/Damages";
// import CreateDamages from "../views/damages/CreateDamages";
// import DamageTypes from "../views/damages/DamageTypes";
// import Users from "../views/users/Users";
// import CreateUsers from "../views/users/CreateUsers";
// import EditUser from "../views/users/EditUser";
// import CreateNotes from "../views/notes/CreateNotes";
// import Services from "../views/services/Services";
// import CreateServices from "../views/services/CreateServices";
// import Settings from "../views/settings/Settings";

// import Menu from "../views/Menu";
// import EditPos from "../views/EditPos";

function Admin({ slug }) {
  // const [loading, setLoading] = useState(false);

  const components = {
    dashboard: Dashboard,
    settings: Setttings,
    tables: Tables,
    maps: Maps,
    // calendar: Calendar,
    // clients: Clients,
    // createClient: CreateClient,
    // editClient: EditClient,
    // clientFiles: ClientFiles,
    // managers: Managers,
    // createManagers: CreateManagers,
    // devices: Devices,
    // createDevices: CreateDevices,
    // damages: Damages,
    // createDamages: CreateDamages,
    // damagetypes: DamageTypes,
    // users: Users,
    // createUsers: CreateUsers,
    // editUser: EditUser,
    // createNotes: CreateNotes,
    // services: Services,
    // createServices: CreateServices,
    // settings: Settings,

    // menumanagement: Menu,
    // editPos: EditPos
  };
  // console.log(props);

  const Tagname = components[slug];

  //   if (!myToken) {
  //     return <Error statusCode={404} />;
  //   }

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

  const isSlug = Object.keys(components).includes(slug);
  if (!isSlug) return <Error statusCode={404} />;
  console.log(slug);
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
