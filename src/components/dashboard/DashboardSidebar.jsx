
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { Bars, Bell, Envelope, Gear, House, Magnifier, Person } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import { ChartArea } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import { BiMoney } from "react-icons/bi";
import { TbAsset } from "react-icons/tb";

export default async function DashboardSidebar() {

    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const user = session?.user;
    const role = user?.role || "buyer";
    // console.log("user",user);


    const dashboardItems ={
        seller:[
            { icon: ChartArea, label: "Home",link: "/dashboard/seller" },
            { icon: TbAsset, label: "Products", link: "/dashboard/seller/products" },
            { icon: BiMoney, label: "Transaction", link: "/dashboard/seller/transaction" },

        ],
        buyer:[
            { icon: ChartArea, label: "Home",link: "/dashboard/buyer" },
            { icon: TbAsset, label: "Products", link: "/dashboard/buyer/products" },
            { icon: BiMoney, label: "Transaction", link: "/dashboard/buyer/transaction" },

        ],
        admin:[
            { icon: ChartArea, label: "Home",link: "/dashboard/admin" },
            { icon: TbAsset, label: "Products", link: "/dashboard/admin/products" },
            { icon: BiMoney, label: "Transaction", link: "/dashboard/admin/transaction" },

        ],
    }

    const navItems = dashboardItems[role];


    // const navItems= [
    //     { icon: House, label: "Home" },
    //     { icon: Magnifier, label: "Search" },
    //     { icon: Bell, label: "Notifications" },
    //     { icon: Envelope, label: "Messages" },
    //     { icon: Person, label: "Profile" },
    //     { icon: Gear, label: "Settings" },
    // ];

    return (
        <Drawer>
            <Button className="hidden" variant="secondary">
                <Bars />
                Menu
            </Button>
            <div className ="w-full p-b-2">
                <Image
                    src={"/logo-xl.png"}
                    alt="logo"
                    width={150}
                    height={100}
                    className="rounded-full"
                />
            </div>

            <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                    <button
                        key={item.label}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                        type="button"
                    >
                        <item.icon className="size-5 text-muted" />
                        {item.label}
                    </button>
                ))}
            </nav>
            <Drawer.Backdrop>
                <Drawer.Content placement="left">
                    <Drawer.Dialog>
                        <Drawer.CloseTrigger />
                        <Drawer.Header>
                            <Drawer.Heading>Navigation</Drawer.Heading>
                        </Drawer.Header>
                        <Drawer.Body>
                            <nav className="flex flex-col gap-1">
                                {navItems.map((item) => (
                                    <button
                                        key={item.label}
                                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                                        type="button"
                                    >
                                        <item.icon className="size-5 text-muted" />
                                        {item.label}
                                    </button>
                                ))}
                            </nav>
                        </Drawer.Body>
                    </Drawer.Dialog>
                </Drawer.Content>
            </Drawer.Backdrop>
        </Drawer>
    );
}