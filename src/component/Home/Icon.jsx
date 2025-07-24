

export default function CollegeCard({ icon, title }) {
  return (
    <div className="flex flex-col items-center text-center p-4 border rounded-lg hover:shadow-lg transition">
      <img src={icon} alt={title} className="w-12 h-12 mb-2" />
      <span className="inline-block px-2 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium">
        {title}
      </span>
    </div>
  );
}
