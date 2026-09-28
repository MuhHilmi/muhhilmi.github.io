import { GitCompareArrows, MailIcon, Download } from "lucide-react";

import Avatar from "./components/common/Avatar";
import SectionLabel from "./components/common/SectionLabel";
import ActionLink from "./components/common/ActionLink";

function App() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16">
      <SectionLabel index="01" title="Tentang" />
      <div className="rounded-lg border-slate-800 bg-slate-900 p-8">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <Avatar name="Muh. Hilmi Abdul Aziz" size={96} />
          <div>
            <h1 className="text-2xl font-bold">
              Muh. Hilmi Abdul Aziz
            </h1>
            <p className="mt-2 text-slate-400">
              Junior Web Developer
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <ActionLink href="mailto:muhhilmiabdulaziz@gmail.com" icon={MailIcon} variant="primary">Hubungi Saya</ActionLink>
          <ActionLink href="/cv.pdf" icon={Download} variant="teal" download>Download CV</ActionLink>
          <ActionLink href="https://github.com/muhhilmi" icon={GitCompareArrows} variant="outline" external>GitHub</ActionLink>
        </div>
      </div>
    </main>
  );
}

export default App;
