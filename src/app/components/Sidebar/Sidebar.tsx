"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdPerson } from "react-icons/md";
import { SidebarItme } from "../../../../next-type-d";

const Sidebar = () => {
  const pathName = usePathname();

  const isActiveLink = (path: string) => {
    if (pathName.split("/")[1].toString() === path) {
      return "!bg-primary-main";
    }
  };

  const sidebarItmes: SidebarItme[] = [
    { title: "products", path: "products", icon: <MdPerson /> },
    { title: "add product", path: "addproduct", icon: <MdPerson /> },
    { title: "add notification", path: "addnotification", icon: <MdPerson /> },
    { title: "steps", path: "steps", icon: <MdPerson /> },
    { title: "part 5", path: "part5", icon: <MdPerson /> },
    { title: "part 6", path: "part6", icon: <MdPerson /> },
    { title: "part 7", path: "part7", icon: <MdPerson /> },
    { title: "part 8", path: "part8", icon: <MdPerson /> },
    { title: "part 9", path: "part9", icon: <MdPerson /> },
    { title: "part 10", path: "part10", icon: <MdPerson /> },
  ];

  return (
    <aside className="fixed right-0 bg-primary-dark shadow-md text-light w-[200px] min-h-screen py-4 px-2 ">
      <nav>
        <ul>
          {sidebarItmes.map((item: SidebarItme, index: number) => {
            return (
              <li
                key={item.title}
                className={`mb-2 transition-all duration-150 hover:border-s-2 hover:border-white px-2 py-1.5 capitalize font-medium rounded-radius-large rounded-ee-none border-b-2 ${isActiveLink(
                  item.path
                )}`}
              >
                <Link
                  href={item.path}
                  className="flex items-center gap-2 text-lg "
                >
                  {item.icon}
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
