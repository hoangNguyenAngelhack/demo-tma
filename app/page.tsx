import { ArrowUpIcon, PlusIcon, ArrowLeftRight, StoreIcon, LockIcon } from "lucide-react";
import Image from "next/image";

export default function Component() {
	return (
		<div className="bg-black text-white min-h-screen p-6 font-sans">
			<div className="mb-8">
				<h2 className="text-xl mb-2">Total balance</h2>
				<p className="text-6xl font-bold">
					<span className="text-gray-400">$</span>0<span className="text-4xl">.00</span>
				</p>
			</div>

			<div className="flex justify-between mb-8">
				<div className="flex flex-col items-center">
					<div className="bg-blue-500 rounded-full p-2 mb-2">
						<ArrowUpIcon className="w-6 h-6" />
					</div>
					<span className="text-sm text-blue-500">Send</span>
				</div>
				<div className="flex flex-col items-center">
					<div className="bg-blue-500 rounded-full p-2 mb-2">
						<PlusIcon className="w-6 h-6" />
					</div>
					<span className="text-sm text-blue-500">Add Crypto</span>
				</div>
				<div className="flex flex-col items-center">
					<div className="bg-blue-500 rounded-full p-2 mb-2">
						<ArrowLeftRight className="w-6 h-6" />
					</div>
					<span className="text-sm text-blue-500">Exchange</span>
				</div>
				<div className="flex flex-col items-center">
					<div className="bg-blue-500 rounded-full p-2 mb-2">
						<StoreIcon className="w-6 h-6" />
					</div>
					<span className="text-sm text-blue-500">P2P Market</span>
				</div>
			</div>

			<div className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl p-4 mb-6">
				<div className="flex items-center justify-between">
					<div>
						<h3 className="text-xl font-bold mb-1">Add extra protection to your Wallet</h3>
						<p className="text-sm">Set up passcode &gt;</p>
					</div>
					<div className="bg-white bg-opacity-20 rounded-lg p-2">
						<LockIcon className="w-6 h-6 text-white" />
					</div>
				</div>
			</div>

			<div className="space-y-4">
				<div className="bg-gray-800 rounded-xl p-4 flex items-center justify-between">
					<div className="flex items-center">
						<Image
							src="/image/wusd.svg"
							alt="TON Space"
							className="w-10 h-10 rounded-full mr-3"
							width={40}
							height={40}
						/>
						<div>
							<h4 className="font-bold">TON Space Beta</h4>
							<p className="text-xs text-gray-400">UQB0...DcxF</p>
						</div>
					</div>
					<span className="font-bold">$0.00</span>
				</div>

				<div className="bg-gray-800 rounded-xl p-4 flex items-center justify-between">
					<div className="flex items-center">
						<div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mr-3">
							<span className="text-2xl">$</span>
						</div>
						<h4 className="font-bold">Dollars</h4>
					</div>
					<div className="text-right">
						<span className="font-bold">$0.00</span>
						<p className="text-xs text-gray-400">0 USDT</p>
					</div>
				</div>

				<div className="bg-gray-800 rounded-xl p-4 flex items-center justify-between">
					<div className="flex items-center">
						<div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
							<span className="text-2xl">◊</span>
						</div>
						<h4 className="font-bold">More assets</h4>
					</div>
					<span className="font-bold">$0.00</span>
				</div>
			</div>
		</div>
	);
}
