const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-10">
      <h3 className="text-4xl font-bold mb-4 dark:text-white">
        About Movie Platform
      </h3>

      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
       You can watch free movies and TV shows on the MovieBox website without downloading the app. 
       However, since it is streaming online, the video speed may be slow if your internet connection is slow. 
       The Movie platform app lets you download movies and TV shows, so you can watch them offline without internet. 
       It also gives you extra features, such as more movies and TV shows, a community, and friend tasks to earn points. Most importantly, 
       the Movie platform website may close anytime, so we suggest you download the Movie platform app to make sure you can always access Movie platform.
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
