import { scrollToElementById } from "@/lib/utils";
import Nav from "./Nav";

export default function Header() {
	return (
		<header className="p-2 sm:p-4 flex items-center gap-2 sm:gap-4 bg-background border shadow-lg fixed top-2 left-1/2 transform -translate-x-1/2 rounded-full z-50 font-mono text-sm sm:text-base">
			<p className="text-lg sm:text-xl font-semibold">
				<button
					type="button"
					onClick={() => scrollToElementById("")}
					className="cursor-pointer"
				>
					gustavo
				</button>
			</p>
			<nav>
				<Nav />
			</nav>
		</header>
	);
}
