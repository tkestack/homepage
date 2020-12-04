import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../layouts";

import image1 from "./TKEStackConsole-2048x821.png";
import image2 from "./VCG41N1069771644.jpg";
import image3 from "./VCG41617585588.jpg";
import image4 from "./VCG41N1148195784.jpg";

const HeaderSection = () => (
	<section
		className="min-h-full relative"
		style={{
			backgroundBlendMode: "overlay",
			backgroundImage:
				"url('/geometric-bg-overlay-01.jpg'), linear-gradient(135deg, #53a0fd 0%, #4161d4 100%)",
		}}>
		<div className="pt-8 relative" style={{ top: 50 }}>
			<div className="flex justify-center content-center items-center flex-col px-48">
				<h1 className="text-5xl text-gray-100">TKEStack容器平台</h1>
				<p className="text-lg text-center leading-loose text-gray-100 px-12 pb-6">
					帮助用户在私有云和混合云环境中，敏捷、高效地构建和发布应用程序。满足IT运维要求，并增强DevOps能力。是一款集易用性和扩展性于一身的开源多集群容器平台
				</p>
			</div>
			<div className="relative w-full flex justify-center content-center">
				<img src={image1} height="60%" className="w-5/6 shadow-lg max-w-6xl" />
			</div>
		</div>
	</section>
);

const SolutionCard = ({ title, description }) => (
	<div className="bg-white bg-opacity-75 hover:shadow focus:shadow active:shadow border-none h-full p-10">
		<div className="flex flex-col justify-center content-center">
			<h3 className="w-full text-center text-gray-700 text-xl py-4">{title}</h3>
			<p className="text-gray-600 text-center">{description}</p>
		</div>
	</div>
);

const SolutionSection = () => (
	<section className="bg-gray-100 py-24 px-16">
		<div className="flex justify-center content-center items-center flex-col px-48">
			<h1 className="text-4xl text-gray-700">
				内部IDC、私有云、混合云统一容器解决方案
			</h1>

			<p className="text-lg text-center text-gray-500 px-32 leading-loose">
				多年专注容器相关的技术开发和业务支持，在大数据、游戏、支持、金融、新零售、广告等各领域均有丰富的实践和宝贵的经验。
			</p>
		</div>

		<div className="grid grid-cols-4 gap-12 pt-6">
			<SolutionCard
				title="TAPP"
				description="同时支持Service和Batch类型作业，满足绝大部份应用场景，能让用户更好的将应用迁移到Kubernetes集群"
			/>
			<SolutionCard
				title="Galaxy"
				description="提供了低延时Overlay网络、IP保留、IP分配、使用主机网络等特性，大幅拓展了容器应用场景"
			/>
			<SolutionCard
				title="GPUManager"
				description="TKEStack专为Kubernetes平台设计的通用GPU虚拟化插件，支持给容器绑卡，支持给容器分配非整数张卡"
			/>
			<SolutionCard title="Helm" description="支持使用Helm V3进行应用编排" />
		</div>
		<div className="flex flex-row justify-center pt-16">
			<button className="bg-blue-600 px-5 py-3 rounded-3xl text-gray-100">
				<a href="https://github.com/tkestack/tke/tree/master/hack/addon/readme" target="_self">
					更多特性
				</a>
			</button>
		</div>
	</section>
);

const SceneTextContent = ({ title, description, to }) => (
	<div className="flex-1">
		<h3 className="text-2xl text-gray-700">{title}</h3>
		<p className="text-gray-600">{description}</p>
		<Link to={to}>
			<button className="mt-5 bg-blue-600 px-5 py-3 rounded-3xl text-gray-100">
				了解更多
			</button>
		</Link>
	</div>
);

const SceneCard = ({ title, description, imgSrc, textLeft, to }) => (
	<div className="w-full flex flex-row items-center justify-center px-32 pb-20">
		{textLeft && (
			<SceneTextContent to={to} title={title} description={description} />
		)}
		<div className={`flex-1 ${textLeft ? "pl-16" : "pr-16"}`}>
			<img src={imgSrc} width="100%" />
		</div>
		{!textLeft && (
			<SceneTextContent to={to} title={title} description={description} />
		)}
	</div>
);

const ScenesSection = () => (
	<section className="py-24 px-16">
		<div className="flex flex-col justify-center items-center">
			<SceneCard
				textLeft={true}
				title="多种业务支持"
				description="TKEStack设计了全新的工作负载类型：TApp。支持同时部署Service和Batch类型任务；支持原地升级；支持多种升级发布"
				imgSrc={image2}
				to="/casestudy-multiple-business-support"
			/>

			<SceneCard
				textLeft={false}
				title="科学计算"
				description="科学计算之前面临着Job完成时间长、公共存储较难实现、算法互相影响、资源难以充分调动、集群整体使用率低等问题。通过对算法容器化、运行在Kubernetes，以及使用TApp之后整体得到了很大的提升"
				imgSrc={image3}
				to="/casestudy-scientific-computing"
			/>

			<SceneCard
				textLeft={true}
				title="私有化场景"
				description="很多公司内的产品需要对外的私有化方案，对于各类产品的统一私有化，选择TkeStack是一个比较方便的方式。另外，产品在公司内部、外部均可以部署在TKEStack上，可以统一操作和管理不同平台的Kubernetes集群"
				imgSrc={image4}
				to="/casestudy-private-cloud"
			/>
		</div>
	</section>
);

export default function Home() {

	console.log(process.env)

	return (
		<PageLayout
			content={
				<>
					<HeaderSection />

					<SolutionSection />

					<ScenesSection />

					<section
						className="min-h-full p-48 flex-col flex justify-center items-center"
						style={{
							backgroundBlendMode: "overlay",
							background:
								"url('/geometric-bg-overlay-02.jpg'), linear-gradient(135deg,#53a0fd 0%,#4161d4 100%)",
						}}>
						<h2 className="text-gray-100 text-5xl">
							TKEStack加入开放原子开源基金会
						</h2>
						<p className="text-gray-100 text-xl mt-4">
							2020年10月15日
							TKEStack正式捐赠给开放原子基金会，成为基金会的首发孵化项目
						</p>
					</section>

					<section className="min-h-full p-48 flex-col flex justify-center items-center">
						<h3 className="text-blue-900 text-3xl text-center">
							"TKEStack助力落实公司自研业务上云战略整合资源使用、推动架构能力互补"
						</h3>
					</section>
				</>
			}
		/>
	);
}
