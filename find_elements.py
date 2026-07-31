import re, sys
sys.stdout.reconfigure(encoding='utf-8')
html = open('../GenzSkill - 4000+ Premium Courses @ ₹87.html', 'r', encoding='utf-8').read()
top_bars = re.findall(r'<div[^>]*class="[^"]*(?:top|bar|urgency|countdown)[^"]*"[^>]*>.*?</div>', html, re.DOTALL | re.IGNORECASE)
fomo = re.findall(r'<div[^>]*class="[^"]*(?:fomo|popup|notification|toast)[^"]*"[^>]*>.*?</div>', html, re.DOTALL | re.IGNORECASE)
abandon = re.findall(r'<div[^>]*class="[^"]*(?:abandon)[^"]*"[^>]*>.*?</div>', html, re.DOTALL | re.IGNORECASE)

print(f"Top bars found: {len(top_bars)}")
for t in top_bars[:1]: print(t[:300])
print(f"\nFOMO found: {len(fomo)}")
for f in fomo[:1]: print(f[:300])
print(f"\nAbandon found: {len(abandon)}")
for a in abandon[:1]: print(a[:300])