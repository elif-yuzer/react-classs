import React from "react";

export default function Hover() {
  return (
    <section className="section-container  ">
      <div className="section-title">
        <h2 className="text-neutral-700 dark:text-amber-400">hover effect</h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 mt-4">
          Make your UI interactive with state variants
        </p>
      </div>

      <div className="space-y-12">
        {/* Hover Effects */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-neutral-800 dark:text-neutral-200">
            Hover Effects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Hover Color */}
            <div className="p-6 bg-blue-500 hover:bg-blue-600 text-white rounded-lg cursor-pointer transition-colors duration-300">
              <p className="font-semibold">Hover Color Change</p>
              <p className="text-sm opacity-90">
                Watch the background change on hover
              </p>
            </div>

            {/* Hover Scale */}
            <div className="p-6 bg-purple-500 text-white rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300">
              <p className="font-semibold">Hover Scale</p>
              <p className="text-sm opacity-90">Scales up to 105% on hover</p>
            </div>

            {/* Hover Shadow */}
            <div className="p-6 bg-pink-500 text-white rounded-lg cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-300">
              <p className="font-semibold">Hover Shadow</p>
              <p className="text-sm opacity-90">Shadow grows larger on hover</p>
            </div>

            {/* Hover Translate */}
            <div className="p-6 bg-orange-500 text-white rounded-lg cursor-pointer hover:-translate-y-1 transition-transform duration-300">
              <p className="font-semibold">Hover Translate</p>
              <p className="text-sm opacity-90">Moves up 4px on hover</p>
            </div>

            {/* Hover Background Opacity */}
            <div className="p-6 bg-cyan-500/70 hover:bg-cyan-500 text-white rounded-lg cursor-pointer transition-colors duration-300">
              <p className="font-semibold">Hover Opacity</p>
              <p className="text-sm opacity-90">Opacity changes on hover</p>
            </div>

            {/* Hover Rotate */}
            <div className="p-6 bg-red-500 text-white rounded-lg cursor-pointer hover:rotate-1 transition-transform duration-300">
              <p className="font-semibold">Hover Rotate</p>
              <p className="text-sm opacity-90">Rotates 1 degree on hover</p>
            </div>
          </div>
        </div>

        {/* Focus Effects */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-neutral-800 dark:text-neutral-200">
            Focus States for Forms
          </h3>
          <div className="space-y-6 max-w-md">
            <div>
              <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                Focus with Ring (Outline)
              </label>
              <input
                type="text"
                placeholder="Click to focus"
                className="w-full px-4 py-2 border-2 border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-neutral-800 dark:text-white transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                Focus with Border Color
              </label>
              <input
                type="text"
                placeholder="Click to focus"
                className="w-full px-4 py-2 border-2 border-neutral-300 dark:border-neutral-600 rounded-lg focus:border-purple-500 dark:bg-neutral-800 dark:text-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                Focus with Background Color
              </label>
              <input
                type="text"
                placeholder="Click to focus"
                className="w-full px-4 py-2 border-2 border-neutral-300 dark:border-neutral-600 rounded-lg focus:bg-yellow-50 dark:focus:bg-yellow-900/20 dark:bg-neutral-800 dark:text-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                Textarea with Focus
              </label>
              <textarea
                placeholder="Click to focus"
                className="w-full px-4 py-2 border-2 border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none dark:bg-neutral-800 dark:text-white transition-all"
                rows="3"
              />
            </div>
          </div>
        </div>

        {/* Active States */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-neutral-800 dark:text-neutral-200">
            Active Button States
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:scale-95 active:shadow-inner transition-all">
              Active: Scale Down
            </button>

            <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 active:brightness-75 transition-all">
              Active: Darker
            </button>

            <button className="px-6 py-3 border-2 border-green-600 text-green-600 dark:text-green-400 font-semibold rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 active:bg-green-100 dark:active:bg-green-900/40 transition-colors">
              Active: Background
            </button>

            <button className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 active:ring-4 active:ring-orange-300 transition-all">
              Active: Ring
            </button>
          </div>
        </div>

        {/* Group Hover */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-neutral-800 dark:text-neutral-200">
            Group Hover (Hover Parent)
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6 text-sm">
            Hover over the entire card to see children elements respond
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="group p-6 bg-white dark:bg-neutral-800 rounded-lg border-2 border-neutral-200 dark:border-neutral-700 hover:border-blue-500 cursor-pointer transition-all"
              >
                <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {item === 1 && "🚀"}
                  {item === 2 && "⚡"}
                  {item === 3 && "🎨"}
                  {item === 4 && "✨"}
                </div>
                <h4 className="font-semibold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item === 1 && "Feature One"}
                  {item === 2 && "Feature Two"}
                  {item === 3 && "Feature Three"}
                  {item === 4 && "Feature Four"}
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                  Description for feature {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Disabled State */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-neutral-800 dark:text-neutral-200">
            Disabled States
          </h3>
          <div className="space-y-4 max-w-md">
            <button className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Enabled Button
            </button>
            <button
              disabled
              className="w-full px-4 py-2 bg-neutral-400 text-neutral-600 font-semibold rounded-lg cursor-not-allowed opacity-60"
            >
              Disabled Button
            </button>

            <div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 cursor-pointer" />
                <span className="text-neutral-900 dark:text-white">
                  Enabled Checkbox
                </span>
              </label>
            </div>
            <div>
              <label className="flex items-center gap-3 cursor-not-allowed opacity-60">
                <input type="checkbox" disabled className="w-5 h-5" />
                <span className="text-neutral-900 dark:text-white">
                  Disabled Checkbox
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Smooth Transitions Example */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-neutral-800 dark:text-neutral-200">
            Smooth Transitions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-right from-pink-500 to-purple-500 text-white rounded-lg cursor-pointer hover:from-pink-600 hover:to-purple-600 transition-all duration-300">
              <p className="font-semibold">Gradient Transition</p>
              <p className="text-sm opacity-90">
                Smooth color gradient on hover
              </p>
            </div>

            <div className="p-6 bg-neutral-100 dark:bg-neutral-800 rounded-lg cursor-pointer hover:rounded-2xl transition-all duration-500">
              <p className="font-semibold text-neutral-900 dark:text-white">
                Border Radius
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Radius changes smoothly on hover
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
