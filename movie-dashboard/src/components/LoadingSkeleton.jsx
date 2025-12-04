export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-pulse">
      {Array(8).fill(0).map((_, i) => (
        <div key={i} className="bg-gray-700 h-72 rounded-xl"></div>
      ))}
    </div>
  );
}
