

export default function CompanyFeature({ icon, title, subtitle }) {
  return (
    <div className="flex items-start space-x-4">
      <img src={icon} alt={title} className="w-16 h-16 flex-shrink-0" />
      <div>
        <span className="inline-block px-3 py-1 mb-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">
          {title}
        </span>
        <p className="text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
}
