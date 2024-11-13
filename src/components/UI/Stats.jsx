const Stats = ({ className, children }) => {
	return (
		<div className={`max-w-7xl rounded mx-auto flex flex-col sm:flex-row items-center justify-center bg-black text-white -mt-22 sm:px-0 py-5 px-5 sm:space-y-0 w-11/12 sm:*:w-1/3 sm:divide-x-2 *:p-5 ${className}`}>
			{children}
		</div>
	);
};

const Stat = ({ className, children }) => {
	return (
		<div className={`relative flex gap-2 mx-auto items-center px-5 sm:justify-center text-center w-full ${className}`}>
			{children}
		</div>
	);
};

const Head = ({ children }) => {
	return <h2 className="text-4xl font-bold">{children}</h2>;
};

const Body = ({ children }) => {
	return <p className="text-white ">{children}</p>;
};

const Divider = () => {
	<div className="block sm:hidden !p-0 h-[1px] w-full bg-gray-300"></div>;
};

export { Stats, Stat, Divider, Head, Body };
