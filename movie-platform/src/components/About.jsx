const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-10">
      <h1 className="text-4xl font-bold mb-4 dark:text-white">
        About Movie Platform
      </h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
        Movie Platform is a React-based dashboard that allows users to browse,
        search, and explore movies using modern UI design and interactive
        features.
      </p>

      <ul className="mt-6 list-disc pl-6 text-gray-700 dark:text-gray-300">
        <li>Built with React + Vite</li>
        <li>Styled using Tailwind CSS</li>
        <li>Search, filter, and modal details</li>
        <li>Dark mode and routing</li>
      </ul>
    </div>
  );
};

export default About;
