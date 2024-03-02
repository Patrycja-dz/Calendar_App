const Timeline = () => {
  const hours = Array.from({ length: 18 }, (_, i) => i + 7);

  return (
    <div className="flex">
      {hours.map((hour) => (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            {hour}:00
          </p>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
