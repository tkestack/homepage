import React from "react";
import PageLayout from "./../layouts";

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
							<h1 className="text-5xl text-gray-100">私有化场景</h1>
							<p className="text-base text-gray-100">
								很多公司内的产品需要对外的私有化方案，对于各类产品的统一私有化，选择 TKEStack 是一个比较方便的方式。另外，产品在公司内部、外部均可以部署在 TKEStack 上，可以统一操作和管理不同平台的 Kubernetes 集群							</p>
						</div>
					</section>
					<main className="font-sans text-gray-700 flex flex-col justify-center items-start content-start py-24 px-64">

						<h1 className="text-gray-700 text-4xl">
							基于 TKEStack 的私有化产品
						</h1>

						<p className="leading-loose">
							基于 TKEStack
							可以搭建具有高可用、统一管控、行业合规的容器平台，为客户提供数字化转型所需的云化技术、大数据、AI
							等全面能力。TKEStack 可以将不同平台的 Kubernetes
							集群统一管理，实现统一部署、统一运维。
						</p>

						<h1 className="text-gray-700 text-4xl mt-16">业务场景</h1>

						<ul className="leading-10 list-disc ml-4">
							<li>
								容器化方式：建议各个业务使用 DockerFile 来实现容器化，以保留修改历史
							</li>
							<li>
								Kubernetes 提交方式：建议保存各个yaml，方便保留属性，以及操作方便
							</li>
							<li>
								网络模式：私有化场景中无法确定 Floating IP 等资源，因此会默认全部使用 Overlay 网络模式
							</li>
							<li>
								应用配置：使用 ConfigMap 来做统一的配置管理，即将配置也使用 YAML 来保存和维护
							</li>
							<li>
								Privileged 权限：尽量不开 Privileged 权限，避免多个业务共享集群和主机互相影响
							</li>
							<li>
								日志管理：使用 TKEStack 的日志管理方式，并且建议各个业务自己也做一定的日志管理，避免磁盘资源无法隔离
							</li>
							<li>
								业务 HA：建议业务都做 HA，如避免单实例 App，避免大 Size 镜像，要求所有业务设置健康检查，以及通过设置亲和性/非亲和性调度策略，避免机器异常等影响容灾策略
							</li>
							<li>
								监控告警：提供多种资源维度的资源监控，TKEStack 上各个业务可以方便查看资源使用情况
							</li>
							<li>
								监控告警：提供多种资源维度的资源监控，TKEStack 上各个业务可以方便查看资源使用情况
							</li>
						</ul>
					</main>
				</>
			}
		/>
	);
};
