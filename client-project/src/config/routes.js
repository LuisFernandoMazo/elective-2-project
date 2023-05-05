import { AdminHome } from "../pages/Admin/AdminHome";
import { SignIn } from "../pages/Admin/SignIn";
import { Contact } from "../pages/General/Contact";
import { Home } from "../pages/General/Home";
import { NotFound } from "../pages/General/NotFound/NotFound";
import { GeneralLayout } from "../layouts/GeneralLayout/GeneralLayout";
import { Service } from "../pages/General/Service";
import { NewService } from "../pages/General/NewService";
import { Clients } from "../pages/General/Clients";
import { NewClient } from "../pages/General/NewClient";

const AdminRoutes = [
  { path: "/admin", component: AdminHome, layout: GeneralLayout },
  { path: "/admin/sign-in", component: SignIn, layout: GeneralLayout },
];
const GeneralRoutes = [
  { path: "/", component: Home, layout: GeneralLayout },
  { path: "/contact", component: Contact, layout: GeneralLayout },
  { path: "*", component: NotFound, layout: GeneralLayout },
  { path: "services/list", component: Service, layout: GeneralLayout },
  { path: "services/new", component: NewService, layout: GeneralLayout },
  { path: "/clients/list", component: Clients, layout: GeneralLayout },
  { path: "/clients/new", component: NewClient, layout: GeneralLayout },
];
const AllRoutesProject = [...AdminRoutes, ...GeneralRoutes];

export default AllRoutesProject;
