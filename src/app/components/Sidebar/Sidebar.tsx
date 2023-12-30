import Link from "next/link";
import { MdPerson } from "react-icons/md";

const Sidebar = () => {
  interface SidebarItme {
    title: string;
    path: string;
    icon: React.ReactNode;
  }

  const sidebarItmes: SidebarItme[] = [
    { title: "part 1", path: "part1", icon: <MdPerson /> },
    { title: "part 2", path: "part2", icon: <MdPerson /> },
    { title: "part 3", path: "part3", icon: <MdPerson /> },
    { title: "part 4", path: "part4", icon: <MdPerson /> },
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
                className={`mb-2 transition-all duration-150 hover:border-s-2 hover:border-white px-2 py-1.5 capitalize font-medium rounded-radius-large rounded-ee-none border-b-2`}
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
