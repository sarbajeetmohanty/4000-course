import sys
content = open('src/routes/index.tsx', 'r', encoding='utf-8').read()

imports_to_add = '''import { TopBar } from "@/components/TopBar";
import { FloatingFomo } from "@/components/FloatingFomo";
'''
content = content.replace('import chaiImg from "@/assets/chai.png";', 'import chaiImg from "@/assets/chai.png";\n' + imports_to_add)

page_replacement = '''export default function LandingPage() {
  return (
    <>
      <TopBar />
      <FloatingFomo />
      {renderPage()}
    </>
  );
}

function renderPage() {
'''
content = content.replace('export default function LandingPage() {', page_replacement)

open('src/routes/index.tsx', 'w', encoding='utf-8').write(content)
print("Updated successfully")