// import viteReact from "@vitejs/plugin-react";

export default function Footer() {
  return (
    <footer className="bg-stone-300 text-center p-4">
      <p className="text-stone-500 font-bold mb-1 mt-4">Contact:</p>
      <a
        href="mailto:fridzy@gmail.com"
        className="text-stone-600 hover:underline"
      >
        fridzy@gmail.com
      </a>

      <p className="text-stone-600 mt-6">
        &copy; {new Date().getFullYear()} La Castiella. All rights reserved.
      </p>
    </footer>
  );
}
