export default function HomeImg({ location }) {
  return (
    location.pathname === "/" && (
      <div className="flex justify-center">
        <img
          src="./img/homepage2.png"
          alt="Some cosmetics and a vase"
          className="w-full shadow-lg"
        />
      </div>
    )
  );
}
