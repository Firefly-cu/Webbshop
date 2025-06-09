export default function Burger({ isOpen, setIsOpen }) {
  return (
    <div className="w-full bg-stone-300">
      <div
        className="flex justify-between items-center p-4 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className="text-xl font-bold text-stone-600  hover:text-stone-400 transition duration-300">
          Menu
        </h1>
        <button className="text-stone-600 focus:outline-none">
          {/* Hamburger Icon */}
          {isOpen ? (
            <span className="text-2xl">&#x2715;</span> // Close icon (X)
          ) : (
            <span className="text-2xl p-2">&#9776;</span> // Hamburger icon (☰)
          )}
        </button>
      </div>
    </div>
  );
}
