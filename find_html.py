import re, sys
sys.stdout.reconfigure(encoding='utf-8')
html = open('../GenzSkill - 4000+ Premium Courses @ ₹87.html', 'r', encoding='utf-8').read()

top_bar = re.search(r'<div[^>]*class="[^"]*top-bar[^"]*"[^>]*>.*?</div>', html, re.DOTALL)
if top_bar: print("=== TOP BAR ===\n", top_bar.group(0))

floating = re.search(r'<div[^>]*id="floatingAbandon"[^>]*>.*?</div>', html, re.DOTALL)
if floating: print("\n=== FLOATING ABANDON ===\n", floating.group(0))
