"use client";

import {
  BadgePlusIcon,
  GaugeIcon,
  GhostIcon,
  GithubIcon,
  MessageCircle,
  StoreIcon,
  TwitterIcon,
} from "lucide-react";

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
import { UserButton, useUser } from "@clerk/nextjs";

// Menu items.
const items = [
  {
    title: "Create",
    url: "/dashboard",
    icon: BadgePlusIcon,
  },

  {
    title: "Library",
    url: "/dashboard/library",
    icon: StoreIcon,
  },

  {
    title: "Membership",
    url: "/dashboard/membership",
    icon: GaugeIcon,
  },
  {
    title: "Feedback",
    url: "/dashboard/feedback",
    icon: MessageCircle,
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
  const { user } = useUser();
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
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
          <SidebarMenuItem className="flex gap-2 items-start justify-between ">
            <SidebarMenuButton asChild>
              <span>
                <UserButton />
                <div className="flex flex-col gap-0.5 leading-none">
                  <h1>{user?.fullName}</h1>
                  <p className="text-xs">
                    {user?.emailAddresses[0].emailAddress}
                  </p>
                </div>
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
