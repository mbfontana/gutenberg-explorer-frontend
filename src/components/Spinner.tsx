const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div
        className="animate-spin inline-block w-8 h-8 border-4 border-current border-t-transparent rounded-full"
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
