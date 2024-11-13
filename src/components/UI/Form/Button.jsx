import React from "react";

const Button = ({
	type = "filled",
	variant = "light",
	size = "md",
	className,
	onClick,
	children,
}) => {
	const variants = {
		primary: `${
			type == "outlined"
				? "border-primary text-primary-dark hover:bg-primary/10"
				: `${
						type === "ghost"
							? "text-primary hover:bg-primary/10"
							: "bg-primary text-white hover:bg-primary-dark border-primary"
				  }`
		}`,
		secondary: `${
			type == "outlined"
				? "border-secondary text-secondary-dark hover:bg-secondary/10"
				: `${
						type === "ghost"
							? "text-secondary hover:bg-secondary/10"
							: "bg-secondary text-black border-secondary hover:bg-secondary-dark"
				  }`
		}`,
		tertiary: `${
			type == "outlined"
				? "border-tertiary text-tertiary-dark hover:bg-tertiary/10"
				: `${
						type === "ghost"
							? "text-tertiary hover:bg-tertiary/10"
							: "bg-tertiary text-white border-tertiary hover:bg-tertiary-dark"
				  }`
		}`,
		light: `${
			type == "outlined"
				? "border-black text-black hover:bg-black/20"
				: `${
						type === "ghost"
							? "text-black hover:bg-black/10"
							: "bg-black text-white border-black hover:bg-slate-900"
				  }`
		}`,
	};

	const types = {
		filled: "border-2",
		outlined: "border-2 bg-transparent",
		ghost: "border-2 border-transparent",
	};

	const sizes = {
		xs: "text-xs p-1.5",
		sm: "text-sm p-2",
		md: "p-4",
		lg: "text-lg p-5",
		xl: "text-2xl p-6",
	};

	return (
		<button
			className={`${className ? className : ""} ${variants[variant]} ${
				types[type]
			} ${sizes[size]} text-neutral rounded w-fit active:scale-95 cursor-pointer transition-all duration-150`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
