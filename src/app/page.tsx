import { FactDisplay } from "@/components/FactDisplay";
import { TextContent } from "@/components/TextContent";

export default function Home() {
  return (
    <div className="full-height">
      <header>
        <div className="content-padded center">
          <div className="box">
            <TextContent size="large">Factitious</TextContent>
          </div>
        </div>
      </header>
      <main>
        <div className="content-padded center">
          <div className="box">
            <FactDisplay />
          </div>
        </div>
      </main>
      <div style={{ flex: 1 }}></div>
      <footer className="footer">
        <a href="https://trustleast.com" className="link">
          <TextContent>© Trustleast LLC</TextContent>
        </a>
      </footer>
    </div>
  );
}
