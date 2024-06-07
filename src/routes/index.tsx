import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { HouseDetails } from "../@modules/propertyDetails/Details";
import { Dashboard } from "../@modules/dashboard/Dashboard";
import { Login } from "../@modules/login/Login";
import { Signup } from "../@modules/signup/Signup";
import { CRM } from "../@modules/CRM/CRM";
import { NewProperty } from "../@modules/newProperty/NewProperty";

const AppRoutes = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/entrar" element={<Login />} />
        <Route path="/cadastro" element={<Signup />} />
        <Route path="/crm" element={<CRM />} />
        <Route path="/novo-imovel" element={<NewProperty />} />
        <Route path="/casa/detalhes" element={<HouseDetails />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
