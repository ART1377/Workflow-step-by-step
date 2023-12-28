import Link from "next/link";
import { MdPerson } from "react-icons/md";

const Sidebar = () => {
  interface SidebarItme {
    title: string;
    path: string;
    icon: React.ReactNode;
  }

  const sidebarItmes: SidebarItme[] = [
    { title: "part 1", path: "part-one", icon: <MdPerson /> },
    { title: "part 2", path: "part-two", icon: <MdPerson /> },
    { title: "part 3", path: "part-three", icon: <MdPerson /> },
    { title: "part 4", path: "part-four", icon: <MdPerson /> },
    { title: "part 5", path: "part-five", icon: <MdPerson /> },
    { title: "part 6", path: "part-six", icon: <MdPerson /> },
    { title: "part 7", path: "part-seven", icon: <MdPerson /> },
    { title: "part 8", path: "part-eight", icon: <MdPerson /> },
    { title: "part 9", path: "part-nine", icon: <MdPerson /> },
    { title: "part 10", path: "part-ten", icon: <MdPerson /> },
  ];

  return (
    <aside className="fixed right-0 bg-primary-dark shadow-md text-light w-[200px] min-h-screen py-4 px-2">
      <nav>
        <ul>
          {sidebarItmes.map((item: SidebarItme) => {
            return (
              <li className="mb-2 transition-all duration-150 hover:border-s-4 hover:border-white rounded-radius-main">
                <Link
                  href={item.path}
                  className="flex items-center gap-2 text-lg bg-primary-main px-2 py-1.5 shadow rounded-radius-main capitalize font-medium"
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
