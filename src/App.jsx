import { Link } from "react-router-dom";

export default function App() {
  return (
    <main className="p-4">
      <div className="flex justify-center items-center h-[90vh]">
        <Link mt="sm" className="bg-[#1c7ed6] p-4 text-[#fff]" to="/job">
          Apply now
        </Link>
      </div>
    </main>
  );
}
