import Link from "next/link";

const Sidebar = () => {
  const sidebarItmes = [
    { title: "part 1", path: "part-one" },
    { title: "part 2", path: "part-two" },
    { title: "part 3", path: "part-three" },
    { title: "part 4", path: "part-four" },
    { title: "part 5", path: "part-five" },
    { title: "part 6", path: "part-six" },
    { title: "part 7", path: "part-seven" },
    { title: "part 8", path: "part-eight" },
    { title: "part 9", path: "part-nine" },
    { title: "part 10", path: "part-ten" },
  ];

  return (
    <aside className="fixed right-0 bg-primary-dark shadow-md text-light w-[200px] min-h-screen p-4">
      <div className="mb-4">
        <h2 className="text-xl font-bold">Sidebar Title</h2>
      </div>
      <nav>
        <ul>
          <li className="mb-2">
            <Link href="/">Part 1</Link>
          </li>
          <li className="mb-2">
            <Link href="/">Part 2</Link>
          </li>
          <li className="mb-2">
            <Link href="/">Part 3</Link>
          </li>

          {/* Add more links if needed */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
