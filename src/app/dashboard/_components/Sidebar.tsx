"use client";

import {
  BadgePlusIcon,
  ChevronsUpDown,
  GaugeIcon,
  GhostIcon,
  GithubIcon,
  LogOut,
  LogOutIcon,
  MessageCircle,
  StoreIcon,
  TwitterIcon,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useFeedback } from "@/hooks/use-feedback";
import FeedbackModal from "@/components/modals/feedback";
import { signOut, useSession } from "next-auth/react";

// Menu items.
const items = [
  {
    title: "Create",
    url: "/create",
    icon: BadgePlusIcon,
  },

  {
    title: "Library",
    url: "/dashboard/library",
    icon: StoreIcon,
  },

  {
    title: "Billing",
    url: "/dashboard/billing",
    icon: GaugeIcon,
  },
];

const socials = [
  {
    title: "Github",
    icon: GithubIcon,
    url: "https://github.com/Ak2407",
  },

  {
    title: "Twitter",
    icon: TwitterIcon,
    url: "https://x.com/DevAxit",
  },

  {
    title: "Portfolio",
    icon: GhostIcon,
    url: "https://www.akshit.app/",
  },
];

export function DashboardSidebar() {
  const { data: session } = useSession();
  console.log(session);

  const pathname = usePathname();

  const open = useFeedback((state) => state.isOpen);
  const onOpen = useFeedback((state) => state.onOpen);
  const onClose = useFeedback((state) => state.onClose);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <FeedbackModal open={open} onClose={onClose} />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/dashboard">
                <Image height={30} width={30} src="/icon.svg" alt="logo" />
                <div className="flex flex-col gap-0.5 leading-none">
                  <h1 className="text-xl font-extrabold text-sky-700 ">
                    QUIKI
                  </h1>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className={`${pathname === item.url ? "text-sky-700 font-bold" : ""} `}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <button onClick={onOpen}>
                    <MessageCircle />
                    <span>Feedback</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Socials</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {socials.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} target="_blank">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage
                      src={session?.user?.image ?? "/default-avatar.png"}
                      alt={session?.user?.name ?? "User"}
                    />
                    <AvatarFallback className="rounded-lg">Q</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                      {session?.user?.name}
                    </span>
                    <span className="truncate text-xs">
                      {session?.user?.email}
                    </span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="right"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage
                        src={session?.user?.image ?? "/default-avatar.png"}
                        alt={session?.user?.name ?? "User"}
                      />
                      <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {session?.user?.name}
                      </span>
                      <span className="truncate text-xs">
                        {session?.user?.email}
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => signOut()}
                  className="cursor-pointer text-red-500"
                >
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
