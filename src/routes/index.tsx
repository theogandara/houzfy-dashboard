import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { CRM } from "../pages/CRM";
import { Imoveis } from "../pages/Imoveis";
import { NotFound } from "../pages/NotFound";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";

const AppRoutes = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/entrar" element={<Login />} />
        <Route path="/cadastro" element={<Signup />} />
        <Route path="/crm" element={<CRM />} />
        <Route path="/imoveis" element={<Imoveis />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
