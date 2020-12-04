import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import configs from "../configs";

import icon from "./icon.png"

const Logo = () => (
	<div className="lg:w-0 lg:flex-1">
		<a href="#" className="flex">
			<img
				className="h-8 w-auto sm:h-10"
				src={icon}
				alt="TKEStack Logo"
			/>
		</a>
	</div>
);

const Submenu = ({ items, open, onBlur }: any) => {
	const history = useHistory();
	return (
		<div
			onBlur={onBlur}
			className={`${open ? "" : "hidden"
				} absolute -ml-4 mt-3 transform px-2 w-screen max-w-xs sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 z-20`}>
			<div className="rounded-lg shadow-lg">
				<div className="rounded-lg shadow-xs overflow-hidden">
					<div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
						{(items ?? []).map((item) => {
							return (
								<Link
									key={item.name}
									to={item.to}
									className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
									<svg
										className="flex-shrink-0 h-6 w-6 text-indigo-600"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
										/>
									</svg>
									<div className="space-y-1">
										<p className="hover:text-gray-700 focus:text-gray-700 text-base leading-6 font-medium text-gray-500">
											{item.name}
										</p>
									</div>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ({
	openMenuName,
	setOpenMenuName,
}: {
	openMenuName: string | null;
	setOpenMenuName: (name: string | null) => void;
}) => {
	return (
		<header>
			<div className="relative bg-white text-gray-600">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
						<Logo />
						<div className="-mr-2 -my-2 md:hidden">
							<button
								type="button"
								className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
								<svg
									className="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</button>
						</div>
						<nav className="md:flex space-x-10 flex flexrow items-center contents-center">
							{configs.headerItems.map((item) => {
								if (item.submenu) {
									return (
										<div className="relative" key={item.name}>
											<button
												onClick={() =>
													setOpenMenuName(
														openMenuName === item.name ? null : item.name
													)
												}
												type="button"
												className="text-gray-500 group inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-700 focus:outline-none focus:text-gray-700 transition ease-in-out duration-150">
												<span>{item.name}</span>
												<svg
													className="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor">
													<path
														fillRule="evenodd"
														d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
														clipRule="evenodd"
													/>
												</svg>
											</button>
											<Submenu
												onClose={() => setOpenMenuName(null)}
												open={openMenuName === item.name}
												items={item.submenu}
											/>
										</div>
									);
								}

								if (item.isBigger) {
									return <button className="bg-blue-400 p-2 rounded-xl text-gray-100">
										<a
											href={item.to}
											target={item.target ?? "_self"}>
											{item.name}
										</a>
									</button>
								} else {

									return item.isOutSide ? (
										<a
											href={item.to}
											className="text-base leading-6 font-medium text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 transition ease-in-out duration-150"
											target={item.target ?? "_self"}>
											{item.name}
										</a>
									) : (
											<Link target={item.target} key={item.name} to={item.to ?? ""}>
												<a
													className="text-base leading-6 font-medium text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 transition ease-in-out duration-150"
													target={item.target ?? "_self"}>
													{item.name}
												</a>
											</Link>
										);
								}
							})}
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};
