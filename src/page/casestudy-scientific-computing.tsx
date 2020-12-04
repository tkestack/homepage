import React from "react";
import PageLayout from "../layouts";

import image from "./sc-300x154.png";

export default () => {
	return (
		<PageLayout
			content={
				<>
					<section
						className="min-h-full py-24 px-16"
						style={{
							backgroundBlendMode: "overlay",
							backgroundImage: "linear-gradient(60deg,#8834fd 0%,#c756ec 100%)",
						}}>
						<div className="flex justify-center content-start items-start flex-col px-48">
							<h1 className="text-lg text-gray-100">案例研究</h1>
							<h1 className="text-5xl text-gray-100">科学计算</h1>
							<p className="text-base text-gray-100">
								科学计算之间面临着 Job
								完成时间长、公共存储较难实现、算法互相影响、资源难以充分调动、集群正泰使用率低等问题。通过对算法容器化、运行在
								Kubernetes 上、以及使用 TApp 之后整体得到了很大的提升。
							</p>
						</div>
					</section>
					<main className="font-sans text-gray-700 flex flex-col justify-center items-start content-start py-24 px-64">
						<h1 className="text-gray-700 text-4xl">业务痛点</h1>

						<p className="my-2">在单机上执行的H266视频编码算法，存在以下业务痛点：</p>

						{/* <img src={image} className="m-5" /> */}


						<ul className="leading-10 list-disc ml-4">
							<li>应用本地执行，需要登录各个计算节点执行程序</li>
							<li>串行执行，一个Job完成时间长</li>
							<li>单机无法实现更大Job</li>
							<li>
								存储分为公共存储和私人存储，没有分布式存储的情况下，公共存储较难实现
							</li>
							<li>团队的各个工程师的算法互相影响</li>
							<li>对集群千万上万的核难以充分调动，集群整体使用率低</li>
						</ul>

						<h1 className="text-gray-700 text-4xl mt-16">使用效果</h1>

						<p className="my-2">
							当通过对算法容器化，并运行在 Kubernetes 上，并利用 TApp 之后，可以实现：
						</p>
						<ul className="leading-10 list-disc ml-4">
							<li>将程序自动 Docker 化</li>
							<li>
								无需修改源码，在 TKEStack 上将 Job 的各个实例（单 App 可有 3000+实例）并行执行
							</li>
							<li>自动调度，让成千上万个核高效执行</li>
							<li>自动绑核，提升执行效率</li>
							<li>指定资源需求，不同容器互不影响</li>
							<li>利用多租户，不同成员互不影响</li>
							<li>消灭本地磁盘，全部使用共享存储，无需修改源码</li>
							<li>修改 Kubernetes，使得离线业务之间可以借用空闲资源</li>
							<li>
								离线业务 Pods 数居多，通过 TKEStack 的多种网络模式，可以避免使用 Floating IP 资源有限的限制，直接使用 Overlay 网络模式
							</li>
						</ul>
					</main>
				</>
			}
		/>
	);
};
