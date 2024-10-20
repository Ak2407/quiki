import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./_components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="w-full p-8 relative ">
        <SidebarTrigger className="h-5 w-5 absolute top-2 left-2" />
        {children}
      </main>
    </SidebarProvider>
  );
}
