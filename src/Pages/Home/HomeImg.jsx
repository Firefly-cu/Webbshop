export default function HomeImg({ location }) {
  const baseUrl = import.meta.env.BASE_URL; // Dynamisk bas-URL

  return (
    location.pathname === "/" && (
      <div className="flex justify-center">
        <img
        src={`${baseUrl}img/homepage2.png`} // Dynamisk sökväg

        alt="Some cosmetics and a vase"
          className="w-full shadow-lg"
        />
      </div>
    )
  );
}
