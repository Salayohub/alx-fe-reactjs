function Card() {
  return (
    <div className="max-w-sm mx-auto mt-10 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Card Title
        </h2>
        <h3 className="text-lg text-red-500 mb-4">
          Card Subtitle
        </h3>
        <p className="text-gray-600 leading-relaxed">
          This is a sample paragraph inside the card. It’s here so you can
          see how Tailwind’s typography and spacing utilities look in action.
        </p>
      </div>
    </div>
  );
}

export default Card;
