// components/Sidebar.tsx

import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="fixed right-0 bg-primary-dark shadow-md text-light w-[180px] min-h-screen p-4">
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
