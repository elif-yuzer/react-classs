export default function Sizing() {
  return (
    <section className="section-container">
      <div className="mb-12 text-center text-2xl font-bold sm:mb-16">
        <h2>Sizing & Spacing</h2>
      </div>

      <div className="space-y-12">
        {/* Width */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Width Examples</h3>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-16 items-center justify-center rounded bg-amber-600 text-sm font-semibold">
                w-16
              </div>
              <span className="text-neutral-200">64px (w-16)</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-32 items-center justify-center rounded bg-amber-600 text-sm font-semibold">
                w-32
              </div>
              <span className="text-neutral-200">128px (w-32)</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-48 items-center justify-center rounded bg-amber-600 text-sm font-semibold">
                w-48
              </div>
              <span className="text-neutral-200">192px (w-48)</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-full items-center justify-center rounded bg-amber-600 text-sm font-semibold">
                w-full
              </div>
              <span className="text-neutral-200">100% (w-full)</span>
            </div>
          </div>
        </div>
        /* -------------------------------------------------------------------------- */
        <div>
          <h3 className="mb-4 text-lg font-semibold">Height Examples</h3>

          <div className="flex items-end gap-6">
            <div className="text-center">
              <div className="mb-2 h-12 w-12 rounded bg-purple-400" />
              <span className="text-sm text-neutral-200">h-12</span>
            </div>

            <div className="text-center">
              <div className="mb-2 h-24 w-12 rounded bg-purple-400" />
              <span className="text-sm text-neutral-200">h-24</span>
            </div>

            <div className="text-center">
              <div className="mb-2 h-40 w-12 rounded bg-purple-400" />
              <span className="text-sm text-neutral-200">h-40</span>
            </div>
          </div>
        </div>
        Padding
        <div>
        /* -------------------------------------------------------------------------- */

          <h3 className="mb-4 text-lg font-semibold">Padding Examples</h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded bg-neutral-900 p-3">
              <div className="rounded bg-green-400 p-2 text-sm font-semibold text-black">
                p-2 (8px)
              </div>
            </div>

            <div className="rounded bg-neutral-900 p-3">
              <div className="rounded bg-green-500 p-6 font-semibold text-black">
                p-6 (24px)
              </div>
            </div>

            <div className="rounded bg-neutral-900 p-3">
              <div className="rounded bg-green-500 p-10 font-semibold text-black">
                p-10 (40px)
              </div>
            </div>
          </div>
        </div>
        Gap
        <div>
          <h3 className="mb-4 text-lg font-semibold">
            Gap (Spacing between items)
          </h3>

          <div className="space-y-6">
            <div>
              <p className="mb-3 text-sm text-neutral-400">gap-2 (8px)</p>
              <div className="flex gap-2">
                <div className="h-12 w-12 rounded bg-orange-500" />
                <div className="h-12 w-12 rounded bg-orange-500" />
                <div className="h-12 w-12 rounded bg-orange-500" />
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm text-neutral-400">gap-6 (24px)</p>
              <div className="flex gap-6">
                <div className="h-12 w-12 rounded bg-orange-500" />
                <div className="h-12 w-12 rounded bg-orange-500" />
                <div className="h-12 w-12 rounded bg-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
