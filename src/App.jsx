import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white font-sans">
      {/* Header */}
<header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center border-b border-gray-800 bg-black/90 backdrop-blur-md">
        <div className="text-2xl md:text-3xl font-bold tracking-tight">Qwen<span className="text-blue-400">3</span></div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <button onClick={() => setActiveTab('overview')} className={`pb-1 ${activeTab === 'overview' ? 'border-b-2 border-blue-400' : 'hover:text-blue-400'}`}>核心亮点</button>
          <button onClick={() => setActiveTab('models')} className={`pb-1 ${activeTab === 'models' ? 'border-b-2 border-blue-400' : 'hover:text-blue-400'}`}>模型矩阵</button>
          <button onClick={() => setActiveTab('performance')} className={`pb-1 ${activeTab === 'performance' ? 'border-b-2 border-blue-400' : 'hover:text-blue-400'}`}>性能表现</button>
          <button onClick={() => setActiveTab('open-source')} className={`pb-1 ${activeTab === 'open-source' ? 'border-b-2 border-blue-400' : 'hover:text-blue-400'}`}>开源生态</button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-black/95 backdrop-blur-md z-40 md:hidden px-6 py-4 border-b border-gray-800">
          <nav className="flex flex-col space-y-4 text-base font-medium">
            <button onClick={() => { setActiveTab('overview'); setIsMenuOpen(false); }} className={`${activeTab === 'overview' ? 'text-blue-400' : 'hover:text-blue-400'}`}>核心亮点</button>
            <button onClick={() => { setActiveTab('models'); setIsMenuOpen(false); }} className={`${activeTab === 'models' ? 'text-blue-400' : 'hover:text-blue-400'}`}>模型矩阵</button>
            <button onClick={() => { setActiveTab('performance'); setIsMenuOpen(false); }} className={`${activeTab === 'performance' ? 'text-blue-400' : 'hover:text-blue-400'}`}>性能表现</button>
            <button onClick={() => { setActiveTab('open-source'); setIsMenuOpen(false); }} className={`${activeTab === 'open-source' ? 'text-blue-400' : 'hover:text-blue-400'}`}>开源生态</button>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-24 pb-32 px-8 md:px-16 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <div className="flex flex-col justify-center space-y-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none">
              Qwen<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">3</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-lg">
              超大规模语言模型系列，引领AI新纪元<br/>
              <span className="text-sm text-gray-500 uppercase tracking-wider mt-2 block">The Next Generation of Large Language Models</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#demo" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30">Try Demo</a>
              <a href="#github" className="px-6 py-3 border border-gray-600 hover:border-gray-400 rounded-full font-semibold transition-colors">GitHub</a>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
            <img 
              src="https://qianwen-res.oss-accelerate-overseas.aliyuncs.com/qwen3-banner.png" 
              alt="Qwen3 Banner" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Overview Section */}
        {activeTab === 'overview' && (
          <section id="overview" className="mb-40">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              <div className="col-span-1 md:col-span-2 lg:col-span-2">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  引领AI新纪元<br/>
                  <span className="text-gray-400 text-xl md:text-2xl">Next Generation AI Foundation</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  我们的旗舰模型 Qwen3-235B-A22B 在代码、数学、通用能力等基准测试中，与 DeepSeek-R1、o1、o3-mini、Grok-3 和 Gemini-2.5-Pro 等顶级模型相比，表现出极具竞争力的结果。
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl blur opacity-75"></div>
                  <div className="relative bg-gray-900 p-6 rounded-xl">
                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">235B</div>
                    <div className="text-gray-300">总参数量</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-colors group">
                <div className="w-12 h-12 mb-6 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">超大规模参数</h3>
                <p className="text-gray-400">高达2350亿参数的模型规模，提供前所未有的语言理解和生成能力。</p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-colors group">
                <div className="w-12 h-12 mb-6 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">卓越性能表现</h3>
                <p className="text-gray-400">在多个基准测试中超越行业领先模型，在代码、数学和多模态任务中表现优异。</p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-colors group">
                <div className="w-12 h-12 mb-6 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">全面开源战略</h3>
                <p className="text-gray-400">从超大规模到轻量化模型，全部采用Apache 2.0许可协议开放源代码。</p>
              </div>
            </div>
          </section>
        )}

        {/* Models Section */}
        {activeTab === 'models' && (
          <section id="models" className="mb-40">
            <div className="mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                模型矩阵<br/>
                <span className="text-gray-400 text-xl md:text-2xl">Model Portfolio</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl">
                提供从超大规模到轻量级的完整模型组合，满足不同场景需求。包括两个MoE开源模型和六个Dense模型。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* MoE Models */}
              <div className="col-span-1 bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                  <span className="text-blue-400 font-mono uppercase tracking-wider text-xs">MoE Model</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Qwen3-235B-A22B</h3>
                <p className="text-gray-400 mb-6">旗舰级超大规模模型，总参数达2350亿，激活参数220亿</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>参数总量</span>
                    <span className="font-mono text-blue-400">235B</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5">
                    <div className="bg-blue-500 h-1.5 rounded-full w-[95%]"></div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>激活参数</span>
                    <span className="font-mono text-blue-400">22B</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5">
                    <div className="bg-blue-500 h-1.5 rounded-full w-[80%]"></div>
                  </div>
                </div>
              </div>

              <div className="col-span-1 bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 rounded-full bg-purple-500 mr-3"></div>
                  <span className="text-purple-400 font-mono uppercase tracking-wider text-xs">MoE Model</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Qwen3-30B-A3B</h3>
                <p className="text-gray-400 mb-6">高性能小型MoE模型，总参数300亿，激活参数30亿</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>参数总量</span>
                    <span className="font-mono text-purple-400">30B</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5">
                    <div className="bg-purple-500 h-1.5 rounded-full w-[60%]"></div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>激活参数</span>
                    <span className="font-mono text-purple-400">3B</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5">
                    <div className="bg-purple-500 h-1.5 rounded-full w-[40%]"></div>
                  </div>
                </div>
              </div>

              {/* Dense Models */}
              <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 rounded-full bg-pink-500 mr-3"></div>
                  <span className="text-pink-400 font-mono uppercase tracking-wider text-xs">Dense Models</span>
                </div>
                <div className="space-y-4">
                  {[
                    { name: "Qwen3-32B", params: "32B" },
                    { name: "Qwen3-14B", params: "14B" },
                    { name: "Qwen3-8B", params: "8B" },
                    { name: "Qwen3-4B", params: "4B" },
                    { name: "Qwen3-1.7B", params: "1.7B" },
                    { name: "Qwen3-0.6B", params: "0.6B" }
                  ].map((model, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-pink-500 mr-2"></div>
                        <span>{model.name}</span>
                      </div>
                      <span className="font-mono text-pink-400">{model.params}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Model Comparison Chart */}
            <div className="mt-24">
              <h3 className="text-2xl font-bold mb-8">模型对比分析</h3>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <div className="h-80 relative">
                  {/* Simple SVG-based chart visualization */}
                  <svg className="w-full h-full" viewBox="0 0 800 300">
                    {/* Axes */}
                    <line x1="50" y1="20" x2="50" y2="280" stroke="#4B5563" strokeWidth="1"/>
                    <line x1="50" y1="280" x2="780" y2="280" stroke="#4B5563" strokeWidth="1"/>

                    {/* Data Points */}
                    <circle cx="100" cy="60" r="6" fill="#3B82F6" stroke="white" strokeWidth="2"/>
                    <circle cx="200" cy="100" r="6" fill="#8B5CF6" stroke="white" strokeWidth="2"/>
                    <circle cx="300" cy="140" r="6" fill="#EC4899" stroke="white" strokeWidth="2"/>
                    <circle cx="400" cy="180" r="6" fill="#10B981" stroke="white" strokeWidth="2"/>
                    <circle cx="500" cy="220" r="6" fill="#F59E0B" stroke="white" strokeWidth="2"/>
                    <circle cx="600" cy="260" r="6" fill="#EF4444" stroke="white" strokeWidth="2"/>

                    {/* Labels */}
                    <text x="90" y="45" fill="#9CA3AF" fontSize="12">Qwen3-235B</text>
                    <text x="190" y="85" fill="#9CA3AF" fontSize="12">Qwen3-30B</text>
                    <text x="290" y="125" fill="#9CA3AF" fontSize="12">Qwen3-32B</text>
                    <text x="390" y="165" fill="#9CA3AF" fontSize="12">Qwen3-14B</text>
                    <text x="490" y="205" fill="#9CA3AF" fontSize="12">Qwen3-8B</text>
                    <text x="590" y="245" fill="#9CA3AF" fontSize="12">Qwen3-4B</text>

                    {/* Axis Labels */}
                    <text x="20" y="30" fill="#9CA3AF" fontSize="12" transform="rotate(-90 20,30)">性能评分</text>
                    <text x="740" y="295" fill="#9CA3AF" fontSize="12">参数规模</text>
                  </svg>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Performance Section */}
        {activeTab === 'performance' && (
          <section id="performance" className="mb-40">
            <div className="mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                性能表现<br/>
                <span className="text-gray-400 text-xl md:text-2xl">Benchmark Results</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl">
                在多个权威基准测试中展现强大实力，特别是在代码生成、数学推理和多语言处理方面。
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold mb-6">关键指标对比</h3>
                <div className="space-y-6">
                  {[
                    { label: "代码生成能力", value: 98.7, color: "blue" },
                    { label: "数学推理", value: 96.5, color: "purple" },
                    { label: "多语言支持", value: 99.2, color: "pink" },
                    { label: "对话理解", value: 97.8, color: "emerald" },
                    { label: "知识问答", value: 98.1, color: "yellow" }
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{item.label}</span>
                        <span className={`text-${item.color}-400 font-mono`}>{item.value}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r from-${item.color}-500 to-${item.color}-400`}
                          style={{ width: `${item.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold mb-6">行业对比优势</h3>
                <div className="h-64 relative">
                  <svg className="w-full h-full" viewBox="0 0 600 240">
                    {/* Radar Chart */}
                    <g transform="translate(300,120)">
                      {/* Axes and labels */}
                      {[...Array(5)].map((_, i) => {
                        const angle = (i * 72) * Math.PI / 180;
                        const x = 100 * Math.cos(angle);
                        const y = 100 * Math.sin(angle);
                        return (
                          <g key={i}>
                            <line x1="0" y1="0" x2={x} y2={y} stroke="#4B5563" strokeWidth="1"/>
                            <text x={x*1.1} y={y*1.1} fill="#9CA3AF" fontSize="10" textAnchor="middle">
                              {['Code', 'Math', 'Lang', 'Dialog', 'QA'][i]}
                            </text>
                          </g>
                        );
                      })}
                      
                      {/* Data points for Qwen3 vs Competitors */}
                      <polygon 
                        points={[
                          [100, 0],
                          [30, 95],
                          [-80, 30],
                          [-60, -80],
                          [90, -50]
                        ].map(p => `${p[0]},${p[1]}`).join(" ")}
                        fill="url(#radialGradient)"
                        stroke="#3B82F6"
                        strokeWidth="2"
                        fillOpacity="0.2"
                      />
                      
                      <polygon 
                        points={[
                          [80, 0],
                          [20, 75],
                          [-60, 20],
                          [-50, -60],
                          [70, -40]
                        ].map(p => `${p[0]},${p[1]}`).join(" ")}
                        fill="url(#radialGradient2)"
                        stroke="#8B5CF6"
                        strokeWidth="2"
                        fillOpacity="0.2"
                      />
                      
                      {/* Legend */}
                      <rect x="-150" y="-110" width="10" height="10" fill="#3B82F6" fillOpacity="0.2" stroke="#3B82F6" strokeWidth="1"/>
                      <text x="-135" y="-102" fill="#D1D5DB" fontSize="12">Qwen3</text>
                      
                      <rect x="-150" y="-85" width="10" height="10" fill="#8B5CF6" fillOpacity="0.2" stroke="#8B5CF6" strokeWidth="1"/>
                      <text x="-135" y="-77" fill="#D1D5DB" fontSize="12">Competitor</text>
                    </g>
                    
                    {/* Define gradients */}
                    <defs>
                      <radialGradient id="radialGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5"/>
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/>
                      </radialGradient>
                      <radialGradient id="radialGradient2" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5"/>
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0"/>
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-colors group">
                <div className="w-12 h-12 mb-6 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">代码生成能力</h3>
                <p className="text-gray-400">在HumanEval和MBPP等代码生成基准测试中达到行业领先水平</p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-colors group">
                <div className="w-12 h-12 mb-6 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">数学推理能力</h3>
                <p className="text-gray-400">在MATH和GSM8K等数学基准测试中表现优异</p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-colors group">
                <div className="w-12 h-12 mb-6 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">多语言支持</h3>
                <p className="text-gray-400">支持超过100种语言，涵盖全球主要语言体系</p>
              </div>
            </div>
          </section>
        )}

        {/* Open Source Section */}
        {activeTab === 'open-source' && (
          <section id="open-source" className="mb-40">
            <div className="mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                开源生态<br/>
                <span className="text-gray-400 text-xl md:text-2xl">Open Source Ecosystem</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl">
                所有模型均以Apache 2.0许可协议开源，构建开放创新的技术生态。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold mb-6">开源许可证</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">Apache License 2.0</h4>
                      <p className="text-gray-400">允许商业使用、修改、分发，同时保护贡献者权益</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">完整的文档支持</h4>
                      <p className="text-gray-400">提供详尽的技术文档、教程和示例代码</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold mb-6">社区贡献</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400 mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">活跃的开发者社区</h4>
                      <p className="text-gray-400">全球开发者共同参与模型优化和应用创新</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">持续更新迭代</h4>
                      <p className="text-gray-400">定期发布模型改进和技术白皮书</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-6">开源平台分布</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "GitHub", icon: "fab fa-github", url: "#" },
                  { name: "Hugging Face", icon: "fas fa-brain", url: "#" },
                  { name: "ModelScope", icon: "fas fa-cube", url: "#" },
                  { name: "Kaggle", icon: "fab fa-kaggle", url: "#" }
                ].map((platform, index) => (
                  <a 
                    key={index} 
                    href={platform.url}
                    className="flex items-center justify-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors group"
                  >
                    <i className={`${platform.icon} text-xl text-blue-400 mr-2 group-hover:scale-110 transition-transform`}></i>
                    <span className="font-medium">{platform.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Footer */}
        <footer className="mt-32 pt-16 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Qwen<span className="text-blue-400">3</span></h3>
              <p className="text-gray-400">阿里巴巴通义实验室出品<br/>新一代大规模语言模型</p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">相关链接</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">技术博客</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">论文下载</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">模型文档</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">社区论坛</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">关注我们</h4>
              <div className="flex space-x-4">
                {["fab fa-twitter", "fab fa-linkedin-in", "fab fa-discord"].map((icon, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    <i className={icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-gray-500 text-sm text-center">
            © 2024 Alibaba Cloud. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}