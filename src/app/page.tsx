"use client";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex bg-white text-black font-sans">
      {/* Sidebar Navigation */}
      <aside className="hidden md:flex flex-col w-64 min-h-screen px-8 py-12 bg-white text-sm border-r border-gray-200 sticky top-0 h-screen">
        <nav className="flex flex-col gap-2 mb-10">
          <a href="#" className="font-medium text-black hover:underline">Home</a>
          <a href="/writing" className="text-gray-500 hover:underline">Writing</a>
        </nav>
        <div className="font-bold mb-2 text-xs uppercase text-gray-700">Find me on</div>
        <nav className="flex flex-col gap-2">
          <a href="mailto:saketh@nyu.edu" className="text-gray-500 hover:underline">Email</a>
          <a href="https://www.instagram.com/jahsaonketh" className="text-gray-500 hover:underline">Instagram</a>
          <a href="https://github.com/sakethkesiraju26" className="text-gray-500 hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/saketh-kesiraju-0a945617b/" className="text-gray-500 hover:underline">LinkedIn</a>
          <a href="https://augierart.notion.site/Saketh-Kesiraju-1f1a07090435455b9b0e8e9f58b1ee8e?source=copy_link" className="text-gray-500 hover:underline">Design Portfolio</a>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-6 py-16 text-left">
        <h1 className="font-bold text-4xl mb-2 font-serif text-black/90 tracking-tight leading-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>
          Saketh Kesiraju
        </h1>
        <p className="text-lg mb-4">building tools for empowering individual agency</p>
        <ul className="list-disc list-inside space-y-3 text-base mb-8">
          <li>based in nyc. hobbies: photojournalism and playing poker. some of my fav people include: kanye west, quentin tarantino, maison margiela, dieter rams, marco pierre white and masayoshi son.</li>
          <li className="mt-0">founded <a href="https://www.tryswiftlaw.com" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">SwiftLaw</a> and <a href="https://www.carbonpaper.ai" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">CarbonPaper</a> → started as flat-fee fund formation service, pivoted to AI drafting copilot used by 15+ law firms; bootstrapped to mid–5 figs ARR in 3 months</li>
          <li>visiting researcher at <a href="https://www.youtube.com/watch?v=qdljfmv_tcw&t=1687s" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">Stanford CodeX</a>, advised by Roland Vogl; presented research and prototypes on legal decision modeling with LLMs</li>
          <li>built <a href="https://www.augier.xyz/" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">Augier AI Labs</a> → recruited researchers 5–7 years senior who are now YC founders, signed $500K contract, shipped tools for eviction defense + litigation prediction</li>
          <li>
            founded NYU EEG&apos;s Entrepreneurs in Residence program. helped the best NYU startups launch and fundraise with 10 weeks of programming from General Catalyst, a16z, and top operators in AI.
            <details className="ml-4 mt-2">
              <summary className="cursor-pointer font-semibold text-gray-800">portfolio companies</summary>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li><a href="https://www.flite.city/" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">flite.city</a></li>
                <li><a href="https://www.synaptrix-labs.com/" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">synaptrix-labs.com</a></li>
                <li><a href="https://blockhouse.app/" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">blockhouse.app</a></li>
                <li><a href="https://www.useterra.com/" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">useterra.com</a></li>
                <li><a href="https://www.playslap.com/" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">playslap.com</a></li>
                <li><span className="text-gray-700">PE due diligence software</span></li>
              </ul>
            </details>
          </li>
          <li>prev. founded <a href="https://www.notion.so/augierart/Augier-f320ff83c6eb4646994d66a854185364?source=copy_link" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">art tech startup</a> backed by Sotheby’s execs, built 3D sites for <a href="https://www.muse.place/gallardo" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">A$AP Rocky’s creative director</a>, founding designer at <a href="https://vienna.earth/meta" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">Vienna Earth</a> (now Aqua Voice, YC W24), turned down $250K total in VC for lack of the right cofounders</li>
        </ul>
      </main>
    </div>
  );
}
