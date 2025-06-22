const MenuCard = ({ name, description, price, image }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden w-full sm:w-64 mx-auto transition-transform hover:scale-105">
      <img src={image} alt={name} className="h-40 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-green-800">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <p className="text-green-700 font-bold mt-2">₹{price}</p>
      </div>
    </div>
  );
};

export default MenuCard;
