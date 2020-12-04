import React from "react";
import { Link } from "react-router-dom";
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
							<h1 className="text-5xl text-gray-100">无状态服务支持</h1>
							<p className="text-base text-gray-100">
								TKEStack
								设计了全新的工作负载类型：TApp。支持同时部署Service和Batch类型的任务；支持原地升级；支持多种升级发布
							</p>
						</div>
					</section>
					<main className="font-sans text-gray-700 flex flex-col justify-center items-center content-center py-24 px-16">
						<h1 className="text-gray-700 text-4xl">为什么使用 TAPP？</h1>
						<table className="border-solid border-2 border-gray-300">
							<colgroup>
								<col style={{ width: 84 }}></col>
								<col style={{ width: 151 }}></col>
								<col style={{ width: 207 }}></col>
								<col style={{ width: 411 }}></col>
							</colgroup>
							<tbody>
								<tr>
									<td
										className="p-4 border-solid border-2 border-gray-300"
										width="84"
										colSpan={1}
										rowSpan={2}>
										<p>
											<span>运营场景</span>
										</p>
									</td>
									<td
										className="p-4 border-solid border-2 border-gray-300"
										width="769"
										colSpan={3}
										rowSpan={1}>
										<p>
											<span>Workload</span>
										</p>
									</td>
								</tr>
								<tr>
									<td
										className="p-4 border-solid border-2 border-gray-300"
										width="151"
										colSpan={1}
										rowSpan={1}>
										<p>
											<span>Deployment</span>
										</p>
									</td>
									<td
										className="p-4 border-solid border-2 border-gray-300"
										width="207"
										colSpan={1}
										rowSpan={1}>
										<p>
											<span>Statefulset</span>
										</p>
									</td>
									<td
										className="p-4 border-solid border-2 border-gray-300"
										width="411"
										colSpan={1}
										rowSpan={1}>
										<p>
											<span>Tapp</span>
										</p>
									</td>
								</tr>
								<tr>
									<td
										className="p-4 border-solid border-2 border-gray-300"
										width="84"
										colSpan={1}
										rowSpan={1}>
										<p>
											<span>发布</span>
										</p>
									</td>
									<td
										className="p-4 border-solid border-2 border-gray-300"
										width="151"
										colSpan={1}
										rowSpan={1}>
										<p>
											<span>并行创建</span>
										</p>
									</td>
									<td
										className="p-4 border-solid border-2 border-gray-300"
										width="207"
										colSpan={1}
										rowSpan={1}>
										<p>
											<span>顺序创建各个实例</span>
										</p>
									</td>
									<td
										className="p-4 border-solid border-2 border-gray-300"
										width="411"
										colSpan={1}
										rowSpan={1}>
										<p>
											<span>并行创建</span>
										</p>
									</td>
								</tr>
								<tr>
									<td
										className="p-4 border-solid border-2 border-gray-300"
										width="84"
										colSpan={1}
										rowSpan={1}>
										<p>
											<span>扩容/缩容</span>
										</p>
									</td>
									<td
										className="p-4 border-solid border-2 border-gray-300"
										width="151"
										colSpan={1}
										rowSpan={1}>
										<p>
											<span>
												通过修改实例个数实现扩缩容。但是新增和裁撤的实例无法控制，如无法实现对某个机器上的实例的缩容。
											</span>
										</p>
									</td>
									<td
										className="p-4 border-solid border-2 border-gray-300"
										width="207"
										colSpan={1}
										rowSpan={1}>
										<p>
											<span>只能顺序扩容或者缩容</span>
										</p>
									</td>
									<td
										className="p-4 border-solid border-2 border-gray-300"
										width="411"
										colSpan={1}
										rowSpan={1}>
										<p>
											<span>
												扩容时，可以预期新增的实例的Pod ID，并且可以并发扩容
											</span>
										</p>
										<p>
											<span>
												在缩容操作时，可以指定缩容后的实例数，也可以对实例做选择性的缩容操作，即可以任意指定某一个或者一批实例缩掉。
											</span>
										</p>
									</td>
								</tr>

								<tr>
									<td
										className="p-4 border-solid border-2 border-gray-300"
										width="84"
										colSpan={1}
										rowSpan={1}>
										<p>
											<span>升级/回退</span>
										</p>
									</td>
									<td
										className="p-4 border-solid border-2 border-gray-300"
										width="151"
										colSpan={1}
										rowSpan={1}>
										<p>
											<span>可以支持滚动升级</span>
										</p>
									</td>
									<td
										className="p-4 border-solid border-2 border-gray-300"
										width="207"
										colSpan={1}
										rowSpan={1}>
										<p>
											<span>
												可以实现灰度升级，但需要按照序号升级，同时，也可以支持分段更新，但不能对单个实例操作。
											</span>
										</p>
									</td>
									<td
										className="p-4 border-solid border-2 border-gray-300"
										width="411"
										colSpan={1}
										rowSpan={1}>
										<p>
											<span>
												除了支持Deployment和Statefulset类似的升级模式，还可以完全实现灰度升级/回退，即支持真正的灰度升级操作：即允许对个别实例（或者全部实例），指定目标版本的做升级操作，是否对其他实例继续升级或者升级到其他版本，可以由用户选择，
											</span>
										</p>
									</td>
								</tr>

								<tr>
									<td
										className="p-4 border-solid border-2 border-gray-300"
										width="84"
										colSpan={1}
										rowSpan={1}>
										<p>
											<span>负载均衡（容器平台直接操作）</span>
										</p>
									</td>
									<td
										className="p-4 border-solid border-2 border-gray-300"
										width="151"
										colSpan={1}
										rowSpan={1}>
										<p>
											<span>整体绑定或解绑</span>
										</p>
									</td>
									<td
										className="p-4 border-solid border-2 border-gray-300"
										width="207"
										colSpan={1}
										rowSpan={1}>
										<p>
											<span>
												整体绑定或解绑
											</span>
										</p>
									</td>
									<td
										className="p-4 border-solid border-2 border-gray-300"
										width="411"
										colSpan={1}
										rowSpan={1}>
										<p>
											<span>
												除了整体绑定和解绑之外，还可以针对一个或多个实例做绑定和解绑操作，方便与其它运维操作结合，实现更稳妥的升级，扩缩容等
											</span>
										</p>
									</td>
								</tr>

								<tr>
									<td
										className="p-4 border-solid border-2 border-gray-300"
										width="84"
										colSpan={1}
										rowSpan={1}>
										<p>
											<span>容灾</span>
										</p>
									</td>
									<td
										className="p-4 border-solid border-2 border-gray-300"
										width="151"
										colSpan={1}
										rowSpan={1}>
										<p>
											<span>保持实例数，但是无法确定'新旧'实例的对应关系</span>
										</p>
									</td>
									<td
										className="p-4 border-solid border-2 border-gray-300"
										width="207"
										colSpan={1}
										rowSpan={1}>
										<p>
											<span>
												可以保持实例ID的不变
											</span>
										</p>
									</td>
									<td
										className="p-4 border-solid border-2 border-gray-300"
										width="411"
										colSpan={1}
										rowSpan={1}>
										<p>
											<span>
												当由于本地重试或者迁移机器来实现容灾时，可以保证实例ID的不变，方便对应，以及对事件、监控等持续性跟踪
											</span>
										</p>
									</td>
								</tr>

							</tbody>
						</table>

						<section className="flex flex-row justify-center items-center">
							<a href="https://github.com/tkestack/tapp">
								<button className="mt-5 bg-blue-600 px-5 py-3 rounded-3xl text-gray-100">
									点击TApp获取更多内容
								</button>
							</a>
						</section>
					</main>
				</>
			}
		/>
	);
};
