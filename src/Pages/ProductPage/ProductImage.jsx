export default function ProductImage({ thumbnail, title }) {
  return (
    <div className="flex justify-center items-center w-full md:w-1/2 md:mb-20 mt-20">
      <img
        src={thumbnail}
        alt={title}
        className="w-full max-w-[300px] min-w-[250px] h-auto object-cover"
      />
    </div>
  );
}
