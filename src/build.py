"""Build index.html from src/. Run from the repo root:  python3 src/build.py"""
import os
S=os.path.dirname(os.path.abspath(__file__)); R=os.path.dirname(S)
r=lambda f:open(os.path.join(S,f),encoding="utf-8").read()
out=r("shell.html").replace("/*DATA*/",r("data.js")).replace("/*APP*/",r("app.js"))
i=out.index("<style>"); j=out.index("</style>")+8
page=r("head.html")+out[i:j]+"\n</head>\n<body>\n"+out[j:]+"\n</body>\n</html>\n"
open(os.path.join(R,"index.html"),"w",encoding="utf-8").write(page)
print("built index.html",len(page))
