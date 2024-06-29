import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { HouseDetails } from "../@modules/propertyDetails/Details";
import { Dashboard } from "../@modules/dashboard/Dashboard";
import { Login } from "../@modules/login/Login";
import { Signup } from "../@modules/signup/Signup";
import { CRM } from "../@modules/CRM/CRM";
import { NewProperty } from "../@modules/newProperty/NewProperty";
import { Properties } from "../@modules/properties/Properties";
import { Documents } from "../@modules/documents/documents";
import { Suport } from "../@modules/suport/suport";
import { ChangePassword } from "../@modules/changePassword/ChangePassword";

const AppRoutes = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes>
        {/* login - signup */}
        <Route path="/entrar" element={<Login />} />
        <Route path="/cadastro" element={<Signup />} />
        <Route path="/trocar-senha" element={<ChangePassword />} />
        {/* dashboard */}
        <Route path="/" element={<Dashboard />} />
        {/* crm */}
        <Route path="/crm" element={<CRM />} />
        {/* properties */}
        <Route path="/novo-imovel" element={<NewProperty />} />
        <Route path="/imoveis" element={<Properties />} />
        <Route path="/imoveis/detalhes" element={<HouseDetails />} />
        {/* suport */}
        <Route path="/suporte" element={<Suport />} />
        {/* documents */}
        <Route path="/documentos" element={<Documents />} />
        {/* others */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
