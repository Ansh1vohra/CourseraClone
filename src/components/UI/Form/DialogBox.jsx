import Button from "./Button";
import { CgClose } from "react-icons/cg";
import logoImg from "../../assets/base/coursera.png"

const DialogBox = ({ dialog, children, size = "md", handleClose }) => {
	const sizes = {
		sm: "sm:max-w-lg",
		md: "sm:max-w-2xl",
		lg: "sm:max-w-4xl",
	};

	return (
		<>
			{dialog && (
				<>
					<div className="fixed top-0 left-0 w-screen h-screen z-40 bg-black opacity-50"></div>
					<div
						className={`${sizes[size]} h-screen fixed w-full sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:h-auto z-50 rounded bg-white`}
					>
						<div className="flex sm:flex-row-reverse text-neutral justify-center sm:justify-between w-full border-b-2 sm:border-b-0 p-5 drop-shadow sm:drop-shadow-none">
							<img className="flex sm:hidden object-contain h-4" src={logoImg} alt="Head" />
							<Button
								className="absolute flex top-1.5 right-1.5 font-medium gap-1 items-center"
								variant="primary"
								size="sm"
								type="ghost"
								onClick={handleClose}
							>
								<p className="hidden sm:block">Close</p>
								<CgClose className="size-6 sm:size-4" />
							</Button>
						</div>
						{children}
					</div>
				</>
			)}
		</>
	);
};

const DialogHeader = ({ children }) => {
	return <div className="mb-4 text-neutral px-10 py-5">{children}</div>;
};

const DialogBody = ({ children }) => {
	return <div className="flex flex-col gap-3 text-neutral px-10 pb-10">{children}</div>;
};

export { DialogBox, DialogHeader, DialogBody };
