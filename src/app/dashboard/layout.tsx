import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./_components/Sidebar";
import SidebarMenu from "./billing/_components/sidebarMenu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="w-full  ">
        <div className="sticky ml-2 top-2 hidden sm:block ">
          <SidebarTrigger className="h-5 w-5  " />
        </div>
        <SidebarMenu />

        {children}
      </main>
    </SidebarProvider>
  );
}
