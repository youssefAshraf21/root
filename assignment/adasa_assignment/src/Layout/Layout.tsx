import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function Layout() {
  return (
    <>
    <div dir="rtl" className="min-h-screen flex flex-col bg-[#0a0a0a] text-white">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
    </>
  )
}
