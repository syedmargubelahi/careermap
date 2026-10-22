/* ===== BCGO Career Map — app ===== */
const T = {
  brand:["BCGO Career Map","বিসিজিও ক্যারিয়ার ম্যাপ"],joinG:["Join our Facebook group", "আমাদের ফেসবুক গ্রুপে যোগ দিন"],joinH:["You're not alone in this. Join the BCGO community", "এই পথে আপনি একা নন। BCGO কমিউনিটিতে যোগ দিন"],joinP:["Ask questions, find job circulars, and get advice from students and professionals across Bangladesh who've been where you are.", "প্রশ্ন করুন, চাকরির বিজ্ঞপ্তি পান, আর পরামর্শ নিন সারা দেশের সেই শিক্ষার্থী ও পেশাজীবীদের কাছ থেকে, যারা একসময় ঠিক আপনার জায়গাতেই ছিলেন।"],slogan:["Connecting Bangladeshis Worldwide","বিশ্বজুড়ে বাংলাদেশিদের সংযোগ"],tags:[["Every subject","Every career path","Public & private jobs","In Bangladesh and abroad"],["সব বিষয়","সব ক্যারিয়ার পথ","সরকারি ও বেসরকারি চাকরি","দেশে ও বিদেশে"]],
  h1:["Confused about your career? Let's figure it out together.", "ক্যারিয়ার নিয়ে দুশ্চিন্তায় আছেন? চলুন, একসাথে পথটা খুঁজে বের করি!"],
  sub:["You don't have to keep asking everyone around you. Tell us a little about yourself, and we'll show you what to study, which jobs suit your results, and how to move ahead, in Bangladesh or abroad.", "এর-ওর কাছে আর ঘুরে ঘুরে জিজ্ঞেস করতে হবে না। নিজের সম্পর্কে একটু জানান, আমরা দেখিয়ে দেব কী পড়বেন, আপনার রেজাল্টে কোন চাকরি মানায়, আর দেশে বা বিদেশে কীভাবে সামনে এগোবেন।"],
  stat:["of university graduates were unemployed in 2024 (Labour Force Survey 2024), the highest of any education level. About 885,000 people.","বিশ্ববিদ্যালয় পাস করাদের মধ্যে বেকারত্ব ২০২৪ সালে (শ্রমশক্তি জরিপ ২০২৪), যা সব শিক্ষাস্তরের মধ্যে সর্বোচ্চ। প্রায় ৮ লাখ ৮৫ হাজার মানুষ।"],
  statSrc:["BBS Labour Force Survey","বিবিএস শ্রমশক্তি জরিপ"],
  where:["Tell us where you are right now", "আপনি এখন কোন পর্যায়ে আছেন, একটু জানান তো"],
  level:["Your highest level (finished or still studying)", "আপনার সর্বশেষ পড়াশোনা (শেষ হয়েছে বা চলছে)"],
  uni:["University (optional)","বিশ্ববিদ্যালয় (ঐচ্ছিক)"],uniAny:["Any / not at university","যেকোনো / বিশ্ববিদ্যালয়ে নয়"],
  uniHint:["The degree list now shows the degrees this type of university usually offers. Programmes differ by university, so confirm on its website.","ডিগ্রির তালিকায় এখন এ ধরনের বিশ্ববিদ্যালয় সাধারণত যেসব ডিগ্রি দেয়, সেগুলো দেখানো হচ্ছে। বিশ্ববিদ্যালয়ভেদে প্রোগ্রাম আলাদা, তাই তাদের ওয়েবসাইটে মিলিয়ে নিন।"],
  group:["Group / stream","বিভাগ / শাখা"],
  subjectsPick:["Your subjects (tap to add or remove)","আপনার বিষয় (যোগ বা বাদ দিতে চাপ দিন)"],
  more:["Other subjects","অন্যান্য বিষয়"],
  subject:["Your subject","আপনার বিষয়"],
  results:["Your results", "আপনার রেজাল্ট"],
  sscG:["SSC / Dakhil / O Level GPA (out of 5)","এসএসসি / দাখিল / ও লেভেল জিপিএ (৫-এর মধ্যে)"],
  hscG:["HSC / Alim / A Level GPA (out of 5)","এইচএসসি / আলিম / এ লেভেল জিপিএ (৫-এর মধ্যে)"],
  cg:["Bachelor's or Diploma CGPA (out of 4)","স্নাতক বা ডিপ্লোমা সিজিপিএ (৪-এর মধ্যে)"],
  mcg:["Master's CGPA (out of 4, optional)","মাস্টার্স সিজিপিএ (৪-এর মধ্যে, ঐচ্ছিক)"],
  olHint:["Cambridge or Edexcel: enter the GPA on your Education Board equivalence certificate. Public universities and job circulars use that GPA; some universities also set minimum O/A Level grades, so check their admission notice.","ক্যামব্রিজ বা এডেক্সেল: শিক্ষা বোর্ডের সমতা সনদে দেওয়া জিপিএ লিখুন। সরকারি বিশ্ববিদ্যালয় ও চাকরির বিজ্ঞপ্তিতে ওই জিপিএই দেখা হয়; কিছু বিশ্ববিদ্যালয় ও/এ লেভেলের ন্যূনতম গ্রেডও ঠিক করে দেয়, তাই ভর্তি বিজ্ঞপ্তি দেখুন।"],
  div1:["First division","প্রথম বিভাগ"],div2:["Second division","দ্বিতীয় বিভাগ"],div3:["Third division","তৃতীয় বিভাগ"],
  cl1:["First class","প্রথম শ্রেণি"],cl2:["Second class","দ্বিতীয় শ্রেণি"],cl3:["Third class","তৃতীয় শ্রেণি"],clF:["Below pass","পাস নম্বরের নিচে"],clNot:["Below first class","প্রথম শ্রেণির নিচে"],
  mapH:["Jobs that can be yours", "যে চাকরিগুলো আপনার হতে পারে"],
  mapHint:["Tap any job to see the pay, the rules and what you need to learn.", "যেকোনো চাকরিতে চাপ দিন, দেখুন বেতন কত, শর্ত কী, আর কী কী শিখতে হবে।"],
  preH:["Where can your subjects take you next?", "আপনার বিষয়গুলো আপনাকে কোথায় নিয়ে যেতে পারে?"],
  preHint:["Each line is a degree. Green lines fit your subjects now. Tap one to see what it leads to.","প্রতিটি লাইন একটি ডিগ্রি। সবুজ লাইনগুলো এখনই আপনার বিষয়ের সঙ্গে মেলে। চাপ দিয়ে দেখুন কোথায় নিয়ে যায়।"],
  showBridge:["Also show jobs that need extra skills","বাড়তি দক্ষতা লাগে এমন চাকরিও দেখান"],
  all:["All","সব"],pub:["Public","সরকারি"],priv:["Private","বেসরকারি"],both:["Public & private","সরকারি ও বেসরকারি"],
  you:["You","আপনি"],
  empty:["Pick a line on the map, and we'll explain it here.", "ম্যাপ থেকে একটি লাইন বেছে নিন, এখানে বুঝিয়ে বলছি।"],
  route:["Route","রুট"],pay:["Starting pay","শুরুর বেতন"],skills:["Skills to build","যে দক্ষতা গড়বেন"],rules:["Eligibility","যোগ্যতা"],resRule:["Results rule","ফলাফলের শর্ত"],
  whereC:["Where circulars appear","কোথায় বিজ্ঞপ্তি পাবেন"],src:["Source","সূত্র"],
  direct:["Direct match","সরাসরি মিল"],open:["Open to any subject","যেকোনো বিষয়ে আবেদনযোগ্য"],bridge:["Possible with extra skills","বাড়তি দক্ষতায় সম্ভব"],
  cond:["Conditional","শর্তসাপেক্ষ"],gpa:["Results below the cut-off","ফলাফল শর্তের নিচে"],blocked:["Not eligible","আবেদনযোগ্য নয়"],
  ready:["Your subjects fit","আপনার বিষয়ের সঙ্গে মেলে"],anyg:["Open to any group","যেকোনো বিভাগ থেকে সম্ভব"],missing:["Missing subjects","বিষয় ঘাটতি আছে"],
  r_direct:["Your subject is what this role asks for.","এই পদে আপনার বিষয়টিই চাওয়া হয়।"],
  r_open:["Circulars for this role accept a degree in any subject.","এই পদের বিজ্ঞপ্তিতে যেকোনো বিষয়ের ডিগ্রি গ্রহণযোগ্য।"],
  r_bridge:["Your degree isn't the usual one for this job, but employers do hire people who can prove their skills. Build the skills below and show them with a portfolio or certificate.", "এই চাকরির জন্য আপনার বিষয় সাধারণত চাওয়া হয় না, তবে দক্ষতা প্রমাণ করতে পারলে প্রতিষ্ঠান নিয়োগ দেয়। নিচের দক্ষতাগুলো গড়ে তুলুন, আর পোর্টফোলিও বা সার্টিফিকেট দিয়ে দেখিয়ে দিন।"],
  r_blocked:["This role requires a specific degree or a professional licence you do not have.","এই পদে নির্দিষ্ট ডিগ্রি বা পেশাগত লাইসেন্স লাগে, যা আপনার নেই।"],
  r_pass:["These circulars usually need a 4-year Honours or a Master's. With a 3-year Pass degree, complete a Master's first.","এসব বিজ্ঞপ্তিতে সাধারণত ৪ বছরের অনার্স বা মাস্টার্স লাগে। ৩ বছরের পাস ডিগ্রি থাকলে আগে মাস্টার্স সম্পন্ন করুন।"],
  r_dip:["Diploma engineers usually enter as Sub-Assistant Engineer. Engineer posts need a BSc.","ডিপ্লোমা প্রকৌশলীরা সাধারণত উপসহকারী প্রকৌশলী হিসেবে যোগ দেন। প্রকৌশলী পদে বিএসসি লাগে।"],
  r_dipB:["This role needs a bachelor's degree.","এই পদে স্নাতক ডিগ্রি লাগে।"],
  r_gpa:["Your subject is the right one, but your results fall short of this recruiter's cut-off. Don't lose heart; look at the other routes below.", "আপনার বিষয় ঠিকই আছে, তবে রেজাল্ট এই নিয়োগের শর্তে পৌঁছায়নি। মন খারাপ করবেন না; নিচের অন্য পথগুলো দেখুন।"],
  checkH:["Can I apply for this job?", "এই চাকরিতে কি আমি আবেদন করতে পারব?"],
  checkSub:["Pick any job, and we'll check it against your degree and results.", "যেকোনো চাকরি বেছে নিন, আমরা আপনার ডিগ্রি আর রেজাল্টের সঙ্গে মিলিয়ে বলে দেব।"],
  job:["Job","চাকরি"],
  needDeg:["To check job eligibility, pick a diploma, degree or higher level above.", "চাকরির যোগ্যতা যাচাই করতে ওপরে ডিপ্লোমা, স্নাতক বা তার ওপরের কোনো স্তর বেছে নিন।"],
  compH:["Not sure what you'd enjoy? Take the quiz", "কোন কাজটা আপনার ভালো লাগবে, বুঝতে পারছেন না? কুইজটা দিয়ে দেখুন!"],
  qOf:["Question {a} of {b}","প্রশ্ন {a} / {b}"],back:["Back","পেছনে"],retake:["Try the quiz again", "আরেকবার কুইজ দিন"],start:["Let's start the quiz", "চলুন, কুইজ শুরু করি"],
  topInt:["What you lean towards","আপনার ঝোঁক যেদিকে"],yourMatches:["Careers that suit you best", "যে ক্যারিয়ারগুলো আপনার সঙ্গে সবচেয়ে বেশি মেলে"],fitPct:["fit","মিল"],
  quizIntro:["Eight quick questions about what you enjoy and how you like to work. There are no right answers, just be honest with yourself. At the end you'll see which careers fit you best, and how close each one is to what you've studied.", "আপনি কী করতে ভালোবাসেন আর কীভাবে কাজ করতে পছন্দ করেন, এ নিয়ে আটটি ছোট প্রশ্ন। কোনো উত্তরই ভুল নয়, শুধু নিজের কাছে সৎ থাকুন। শেষে দেখবেন কোন ক্যারিয়ার আপনার সঙ্গে সবচেয়ে বেশি মেলে, আর সেটা আপনার পড়াশোনা থেকে কতটা কাছে।"],
  viewMind:["Map","ম্যাপ"],viewLines:["List","তালিকা"],
  afterHsc:["Jobs right after HSC","এইচএসসির পরই চাকরি"],dipRoutes:["Diploma routes","ডিপ্লোমা রুট"],
  tapUnfold:["Tap a career to unfold its road. Tap a branch to fold it.","ক্যারিয়ারে চাপ দিলে পুরো পথ খুলে যাবে। শাখায় চাপ দিলে গুটিয়ে যাবে।"],
  openH:["Jobs where any subject is welcome", "যেসব চাকরিতে যেকোনো বিষয় থেকে আবেদন করা যায়"],
  nav1:["About you", "আপনার তথ্য"],nav2:["Your jobs", "আপনার চাকরি"],nav3:["Higher study", "উচ্চশিক্ষা"],nav4:["Low CGPA?", "সিজিপিএ কম?"],nav5:["Private jobs", "বেসরকারি চাকরি"],nav6:["Quiz", "কুইজ"],nav7:["GPA guide", "জিপিএ বুঝুন"],
  wzH:["Let's start: just 3 quick questions", "চলুন শুরু করি: মাত্র ৩টি ছোট প্রশ্ন"],
  wzSub:["Just tap your answer. There's no right or wrong here.", "শুধু আপনার উত্তরে চাপ দিন। এখানে ভুল-ঠিক বলে কিছু নেই।"],
  moreH:["Want to go deeper? Everything is waiting for you below", "আরও গভীরে জানতে চান? সব তথ্য নিচে আপনার জন্য সাজানো আছে"],
  moreSub:["Put in your results, and we'll show you exactly which jobs you can apply for, with the rules, the pay and where the information comes from.", "আপনার রেজাল্ট দিন, আমরা দেখিয়ে দেব ঠিক কোন কোন চাকরিতে আবেদন করতে পারবেন, সঙ্গে শর্ত, বেতন আর তথ্যের উৎস।"],
  navSk:["Your skills", "আপনার দক্ষতা"],
  skH:["What can you already do? Let's narrow it down", "আপনি কী কী পারেন? চলুন, পথটা আরও নির্দিষ্ট করি"],skSub:["These are the skills Bangladeshi employers ask for most. Tap the ones you already have, even a little.", "বাংলাদেশের প্রতিষ্ঠানগুলো এই দক্ষতাগুলোই সবচেয়ে বেশি চায়। যেগুলো আপনি পারেন, একটু হলেও, সেগুলোতে চাপ দিন।"],mH:["Jobs that fit you best", "যে চাকরিগুলো আপনার সঙ্গে সবচেয়ে বেশি মেলে"],
  navF:["Forum", "ফোরাম"],
  fH:["Have something to say? We're listening", "কিছু বলতে চান? আমরা শুনছি"],
  fSub:["Found a mistake? Something missing? Or want to share your own career story? Tell us. We read every post and update the site every month.", "কোনো ভুল চোখে পড়েছে? কিছু বাদ পড়েছে? নাকি নিজের ক্যারিয়ারের গল্পটা শেয়ার করতে চান? আমাদের জানান। প্রতিটি পোস্ট আমরা পড়ি, আর প্রতি মাসে সাইট আপডেট করি।"],
  fFb:["Write to us in our Facebook group", "আমাদের ফেসবুক গ্রুপে লিখুন"],
  fFbSub:["Share your thoughts, ask questions, or tell your story", "মতামত দিন, প্রশ্ন করুন, বা আপনার গল্পটা বলুন"],
  fRules:["Please be kind to each other. No ads, no phone numbers, no agent offers.", "একে অপরের প্রতি সম্মান রাখুন। বিজ্ঞাপন, ফোন নম্বর বা এজেন্টের অফার দেবেন না।"],
  thDark:["🌙 Dark","🌙 ডার্ক"],thLight:["☀️ Light","☀️ লাইট"],
  navU:["Public vs private","সরকারি বনাম বেসরকারি"],
  uH:["Public or private university? Let's compare honestly","সরকারি নাকি বেসরকারি বিশ্ববিদ্যালয়? চলুন, খোলামেলা তুলনা করি"],
  uSub:["Money is a real worry for most families, so here are the actual numbers, straight from university fee pages and national newspapers.","বেশিরভাগ পরিবারের কাছে খরচটা আসল দুশ্চিন্তা। তাই এখানে আসল হিসাবটা দিলাম, সরাসরি বিশ্ববিদ্যালয়ের ফি পেজ আর জাতীয় পত্রিকা থেকে।"],
  uTabC:["Cost comparison","খরচের তুলনা"],uTabP:["Public universities","সরকারি বিশ্ববিদ্যালয়"],uTabV:["Private universities","বেসরকারি বিশ্ববিদ্যালয়"],
  navK:["Skills & work abroad","দক্ষতা ও বিদেশে কাজ"],
  kH:["Studies not your thing? Your skills can still take you far","পড়াশোনায় মন বসে না? হাতের দক্ষতাও আপনাকে অনেক দূর নিয়ে যেতে পারে"],
  kSub:["Not everyone is made for exams, and that's okay. With the right training and a recognised certificate, you can build a good income in Bangladesh or abroad.","সবাই পরীক্ষার জন্য তৈরি নয়, আর তাতে দোষের কিছু নেই। সঠিক প্রশিক্ষণ আর স্বীকৃত সনদ থাকলে দেশে বা বিদেশে ভালো আয় করা যায়।"],
  navJ:["Questions & help","প্রশ্ন ও সহায়তা"],
  jH:["Questions people ask, and where official notices are published","সবাই যা জানতে চায়, আর অফিসিয়াল বিজ্ঞপ্তি কোথায় প্রকাশ হয়"],
  jSub:["We don't post circulars here; this is your guide. When you're ready to apply, use only the official sites below.","এখানে আমরা বিজ্ঞপ্তি দিই না; এটা আপনার গাইড। আবেদনের জন্য তৈরি হলে শুধু নিচের অফিসিয়াল সাইটগুলো ব্যবহার করুন।"],
  own:["© 2026 Syed Margub Elahi. All rights reserved. Built, researched and maintained by Syed Margub Elahi.","© ২০২৬ সৈয়দ মারগুব এলাহী। সর্বস্বত্ব সংরক্ষিত। তৈরি, গবেষণা ও রক্ষণাবেক্ষণ: সৈয়দ মারগুব এলাহী।"],
  navW:["Change career","ক্যারিয়ার বদল"],
  swH:["Already working, but thinking of a change?","চাকরি করছেন, কিন্তু বদলের কথা ভাবছেন?"],
  swSub:["Changing career is a big decision, and it's normal to feel unsure. Answer five quick questions, and I'll map the routes that fit your life right now.","ক্যারিয়ার বদলানো বড় সিদ্ধান্ত, দ্বিধা লাগাটা স্বাভাবিক। পাঁচটি ছোট প্রশ্নের উত্তর দিন, আমি আপনার এখনকার জীবনের সঙ্গে মানানসই পথগুলো ম্যাপ করে দেখাচ্ছি।"],
  navI:["Be your own boss","নিজেই নিজের বস"],
  iH:["Don't want a 9-to-5? Be your own boss: startup ideas for Bangladesh","৯টা-৫টার চাকরি চান না? নিজেই নিজের বস হোন: বাংলাদেশের জন্য স্টার্টআপ আইডিয়া"],
  iSub:["Independence is a real path, not a backup plan. Pick how much you can invest and what you enjoy, and see ideas people actually run in Bangladesh, what each needs, and the funding available.","স্বাধীনভাবে কাজ করাটা বিকল্প নয়, একটা আসল পথ। কতটা বিনিয়োগ করতে পারবেন আর কী ভালো লাগে বেছে নিন, দেখুন বাংলাদেশে মানুষ বাস্তবে যেসব ব্যবসা চালায়, প্রতিটিতে কী লাগে, আর কোথায় অর্থায়ন পাবেন।"],
  grH:["How sure is this map? The grey areas","এই ম্যাপ কতটা নিশ্চিত? অস্পষ্ট জায়গাগুলো"],
  navS:["Start here", "এখান থেকে শুরু"],
  navG:["Feeling lost?", "দিশেহারা লাগছে?"],navT:["All careers", "সব ক্যারিয়ার"],navA:["Scholarships abroad", "বিদেশে স্কলারশিপ"],
  gH:["Feeling lost? Let's start from your results", "দিশেহারা লাগছে? চলুন, আপনার রেজাল্ট থেকেই শুরু করি"],
  gSub:["In Bangladesh, results open some doors and close others. So let's see where you stand first, then choose what you love.", "বাংলাদেশে রেজাল্ট কিছু দরজা খুলে দেয়, আবার কিছু বন্ধও করে। তাই আগে দেখি আপনি কোথায় দাঁড়িয়ে আছেন, তারপর বেছে নিন যা আপনার ভালো লাগে।"],
  trH:["Explore every career in Bangladesh", "বাংলাদেশের সব ক্যারিয়ার ঘুরে দেখুন"],
  trSub:["Pick a field that interests you. Tap a blue branch to open it, then tap any box to see what it takes and what it pays.", "যে ক্ষেত্রটা আপনাকে টানে, সেটা বেছে নিন। নীল শাখায় চাপ দিয়ে খুলুন, তারপর যেকোনো বাক্সে চাপ দিয়ে দেখুন কী লাগবে আর বেতন কেমন।"],
  abH:["Dreaming of studying abroad? Fully funded scholarships", "বিদেশে পড়ার স্বপ্ন দেখছেন? সম্পূর্ণ অর্থায়িত স্কলারশিপ"],
  openTr:["Show me this career", "এই ক্যারিয়ারটা দেখান"],
  byH:["Finished your degree? Here's what comes next", "পড়াশোনা শেষ? এবার সামনে কী?"],
  bySub:["Tap any box to see what you'll need and what it pays.", "যেকোনো বাক্সে চাপ দিন, দেখুন কী লাগবে আর বেতন কেমন।"],
  tabHigher:["After bachelor's", "স্নাতকের পর"], tabProf:["Doctor, lawyer, CA, teacher","ডাক্তার, আইনজীবী, সিএ, শিক্ষক"], navP:["Doctor/Lawyer/CA/Teacher","ডাক্তার/আইনজীবী/সিএ/শিক্ষক"], tabDip:["Diploma & technical", "ডিপ্লোমা ও কারিগরি"],
  byLow:["Low CGPA?", "সিজিপিএ কম?"],
  req:["Requirement","শর্ত"], payL:["Pay / cost","বেতন / খরচ"], tapBox:["Tap any box on the map, and the details will show up here.", "ম্যাপের যেকোনো বাক্সে চাপ দিন, বিস্তারিত এখানে দেখা যাবে।"],
  findPh:["Search jobs, e.g. bank, nurse, engineer","চাকরি খুঁজুন, যেমন ব্যাংক, নার্স, ইঞ্জিনিয়ার"], checked:["Last checked against sources: 21 Oct 2026. Rules change; always confirm with the latest circular.","সর্বশেষ উৎস যাচাই: ২১ অক্টোবর ২০২৬। নিয়ম বদলায়; সবসময় সর্বশেষ বিজ্ঞপ্তি দেখে নিন।"],
  pvtH:["Jobs in the private sector", "বেসরকারি খাতের চাকরি"],
  pvtSub:["Every private-sector role on the map, grouped by industry. Tap one to see its road, skills and year-by-year plan. With a degree selected, each shows whether it fits you.","ম্যাপের সব বেসরকারি খাতের পদ, শিল্পখাত অনুযায়ী সাজানো। পথ, দক্ষতা ও বছরভিত্তিক পরিকল্পনা দেখতে চাপ দিন। ডিগ্রি বাছাই করা থাকলে প্রতিটি পদ আপনার সঙ্গে মেলে কিনা তা-ও দেখাবে।"],
  openSub:["These recruitments do not ask for a specific subject. Competition is heavy and result cut-offs apply, so preparation matters more than your major.","এসব নিয়োগে নির্দিষ্ট বিষয় চাওয়া হয় না। প্রতিযোগিতা অনেক বেশি এবং ফলাফলের শর্ত আছে, তাই বিষয়ের চেয়ে প্রস্তুতি বেশি গুরুত্বপূর্ণ।"],
  gradeH:["GPA and CGPA, made simple", "জিপিএ আর সিজিপিএ, সহজ করে বলি"],
  gradeSub:["Government circulars still ask for 'division' and 'class'. These are the official conversions.","সরকারি বিজ্ঞপ্তিতে এখনো 'বিভাগ' ও 'শ্রেণি' চাওয়া হয়। নিচে আনুষ্ঠানিক রূপান্তর দেওয়া হলো।"],
  srcH:["Sources and how to read this map","সূত্র ও ম্যাপটি যেভাবে পড়বেন"],
  disc:["This is a guide, not a recruitment notice. Eligibility rules and cut-offs change with every circular, so always read the official notice before applying. University admission rules also differ by university and unit. Every salary figure is cited; sector averages cover all experience levels and are not entry pay. Nothing you enter here is stored or sent anywhere.",
        "এটি একটি নির্দেশিকা, নিয়োগ বিজ্ঞপ্তি নয়। প্রতিটি বিজ্ঞপ্তিতে যোগ্যতা ও ফলাফলের শর্ত বদলাতে পারে, তাই আবেদনের আগে অবশ্যই আনুষ্ঠানিক বিজ্ঞপ্তি পড়ুন। বিশ্ববিদ্যালয় ও ইউনিটভেদে ভর্তির নিয়মও আলাদা। বেতনের প্রতিটি তথ্যের সূত্র দেওয়া আছে; খাতভিত্তিক গড় সব অভিজ্ঞতার স্তর মিলিয়ে, এটি শুরুর বেতন নয়। আপনি এখানে যা লেখেন, তা কোথাও সংরক্ষিত বা পাঠানো হয় না।"],
  routes:["routes","টি রুট"],
  openDeg:["Open this degree's career map","এই ডিগ্রির ক্যারিয়ার ম্যাপ খুলুন"],
  needs:["Usually needs","সাধারণত লাগে"],have:["You have","আপনার আছে"],add:["Add","যোগ করুন"],helps:["Helps","সহায়ক"],
  careers:["Careers it leads to","যে ক্যারিয়ারে নিয়ে যায়"],
  noReq:["No specific school subjects required; any group can apply.","নির্দিষ্ট কোনো বিষয় লাগে না; যেকোনো বিভাগ থেকে আবেদন করা যায়।"],
  adNote:["University admission rules vary. Science students can usually apply to business and arts units too; the reverse is rare.","বিশ্ববিদ্যালয়ভেদে ভর্তির নিয়ম আলাদা। বিজ্ঞানের শিক্ষার্থীরা সাধারণত ব্যবসায় ও কলা ইউনিটেও আবেদন করতে পারেন; উল্টোটা কম হয়।"],
  viaDip:["via Diploma (polytechnic)","ডিপ্লোমা (পলিটেকনিক) হয়ে"],
  dipNote:["Polytechnic diploma admission is open after SSC. GPA and group criteria are set each year by the Technical Education Board.","এসএসসির পর পলিটেকনিক ডিপ্লোমায় ভর্তি হওয়া যায়। জিপিএ ও বিভাগের শর্ত প্রতিবছর কারিগরি শিক্ষা বোর্ড নির্ধারণ করে।"],
  dipLine:["Diploma","ডিপ্লোমা"],sae:["Sub-Assistant Engineer / Technologist","উপসহকারী প্রকৌশলী / টেকনোলজিস্ট"],
  madNote:["Fazil and Kamil are treated as degree and master's equivalents. Check each circular for how it lists madrasa qualifications.","ফাজিল ও কামিল যথাক্রমে স্নাতক ও স্নাতকোত্তরের সমমান হিসেবে গণ্য। প্রতিটি বিজ্ঞপ্তিতে মাদ্রাসার যোগ্যতা কীভাবে লেখা আছে, তা দেখে নিন।"],
  resNA:["Put in your results above, and we'll check this for you.", "ওপরে আপনার রেজাল্ট দিন, আমরা যাচাই করে দিচ্ছি।"],
  resNone:["No verified common cut-off. Check the result rules in each circular.","যাচাইকৃত কোনো সাধারণ শর্ত নেই। প্রতিটি বিজ্ঞপ্তিতে ফলাফলের শর্ত দেখে নিন।"],
  meets:["Meets","পূরণ করে"],fails:["Does not meet","পূরণ করে না"],
  footer:["Bangladesh Career & Global Opportunities","বাংলাদেশ ক্যারিয়ার অ্যান্ড গ্লোবাল অপরচুনিটিজ"],
  proto:["Last updated: October 2026","সর্বশেষ হালনাগাদ: অক্টোবর ২০২৬"]
};

const st = {lang:"bn",uni:"",level:"bss",group:"science",subjects:new Set(),subject:"econ",ssc:"",hsc:"",cg:"",mcg:"",showBridge:true,sector:"all",sel:null,check:"bb_ad",view:"mind",fold:new Set(),qi:-1,ans:[]};
try{ if(matchMedia("(max-width: 600px)").matches) st.view="mind"; }catch(e){}
try{ const l=localStorage.getItem("bcgo-lang"); if(l==="en"||l==="bn") st.lang=l; }catch(e){}

const L = a => a ? (st.lang==="bn" ? a[1] : a[0]) : "";
const t = k => L(T[k]);
const BND = "০১২৩৪৫৬৭৮৯";
const N = s => st.lang==="bn" ? String(s).replace(/[0-9]/g,d=>BND[d]) : String(s);
const esc = s => String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const $ = s => document.querySelector(s);
const lvl = () => LEVELS.find(l=>l.id===st.level);
const nm = o => st.lang==="bn" ? o.bn : o.en;

/* ---- results ---- */
const num = v => { const x=parseFloat(v); return isNaN(x)?null:x; };
function divOf(g){ if(g==null) return null; if(g>=4) return 1; if(g>=3) return 2; if(g>=1) return 3; return 0; }   // S10 (2004 onward)
function clsOf(c){ if(c==null) return null; if(c>=3) return 1; return 2; }  // CGPA 3.00 on a 4-point scale = first class (S10); lower bands vary by university
function exams(){
  const L0=lvl(), out=[];
  const s=num(st.ssc); if(s!=null) out.push({k:"ssc",lvl:divOf(s),v:s});
  if(L0.cat!=="sec" && L0.mode!=="diploma"){ const h=num(st.hsc); if(h!=null) out.push({k:"hsc",lvl:divOf(h),v:h}); }
  if(L0.cat==="deg"){ const c=num(st.cg); if(c!=null) out.push({k:"cg",lvl:clsOf(c),v:c});
    if(L0.mode==="masters"){ const m=num(st.mcg); if(m!=null) out.push({k:"mcg",lvl:clsOf(m),v:m}); } }
  return out;
}
function expectedExams(){ const L0=lvl(); let n=1; if(L0.mode!=="diploma") n++; return n+1; } // ssc, hsc, bachelor
const RES = {
  bcs:{txt:["No more than one third division or class across your exams.","সব পরীক্ষা মিলিয়ে একাধিক তৃতীয় বিভাগ/শ্রেণি থাকলে অযোগ্য।"],s:"S7",
       f:ex=>ex.filter(e=>e.lvl===3||e.lvl===0).length<=1},
  bbad:{txt:["First division or class in at least two exams from SSC upward; no third division anywhere.","এসএসসি থেকে অন্তত দুটি পরীক্ষায় প্রথম বিভাগ/শ্রেণি; কোথাও তৃতীয় বিভাগ চলবে না।"],s:"S5",
       f:ex=>ex.filter(e=>e.lvl===1).length>=2 && !ex.some(e=>e.lvl===3||e.lvl===0), need:2},
  statebank:{txt:["No third division or class. At least one first division or class (cash officer) or two (general officer), depending on the circular. Checked here against the one-first rule.","তৃতীয় বিভাগ/শ্রেণি চলবে না। বিজ্ঞপ্তিভেদে অন্তত একটি (ক্যাশ অফিসার) বা দুটি (সাধারণ অফিসার) প্রথম বিভাগ/শ্রেণি। এখানে একটি প্রথম বিভাগের শর্তে যাচাই করা হয়েছে।"],s:"S21",
       f:ex=>ex.some(e=>e.lvl===1) && !ex.some(e=>e.lvl===3||e.lvl===0)},
  pvtbank:{txt:["Example from a 2024 private bank MTO circular: CGPA 3.00 (or first class) plus GPA 4.00 in SSC and HSC. Some banks ask for 4.50 or even 5.00.","২০২৪ সালের একটি বেসরকারি ব্যাংকের এমটিও বিজ্ঞপ্তির উদাহরণ: সিজিপিএ ৩.০০ (বা প্রথম শ্রেণি) এবং এসএসসি ও এইচএসসিতে জিপিএ ৪.০০। কিছু ব্যাংক ৪.৫০ বা ৫.০০-ও চায়।"],s:"S9",
       f:ex=>{const g=k=>ex.find(e=>e.k===k); const a=g("ssc"),b=g("hsc"),c=g("cg"); return (!a||a.v>=4)&&(!b||b.v>=4)&&(!c||c.v>=3);}},
  lecturer:{txt:["No fixed national cut-off, but universities shortlist on CGPA and usually expect first class.","জাতীয়ভাবে নির্দিষ্ট শর্ত নেই, তবে বিশ্ববিদ্যালয় সিজিপিএ দেখে বাছাই করে এবং সাধারণত প্রথম শ্রেণি প্রত্যাশা করে।"],s:null,
       f:ex=>{const c=ex.find(e=>e.k==="cg"); return !c||c.lvl===1;}}
};
function resCheck(role){
  if(!role.res) return {ok:null,none:true};
  const r=RES[role.res], ex=exams();
  if(ex.length===0) return {ok:null,r};
  return {ok:r.f(ex),r,partial:ex.length<expectedExams()};
}

/* ---- eligibility ---- */
function status(id){
  const r=ROLES[id], L0=lvl(), d=st.subject;
  if(L0.cat!=="deg") return {s:"na"};
  let s; if(r.direct.includes(d)) s="direct"; else if(r.rule==="any") s="open"; else if(r.rule==="skills"||r.bridge.includes(d)) s="bridge"; else s="blocked";
  let why=s==="direct"?"r_direct":s==="open"?"r_open":s==="bridge"?"r_bridge":"r_blocked";
  if(L0.mode==="diploma"){
    if(s==="direct"){ if(r.dip){ /* diploma accepted */ } else if(r.engr||r.req4){ s="cond"; why="r_dip"; } else { s="bridge"; why="r_bridge"; } }
    else if(s==="open"){ s="blocked"; why="r_dipB"; }
    if(r.req4 && s!=="blocked" && !r.engr){ s="blocked"; why="r_dipB"; }
  } else if(L0.mode==="pass"){ if(r.req4 && s!=="blocked"){ s="cond"; why="r_pass"; } }
  const rc=resCheck(r);
  if(s!=="blocked" && rc.ok===false){ s="gpa"; why="r_gpa"; }
  return {s,why,rc};
}
const ORDER = ["direct","open","cond","bridge","gpa"];
function roleList(){
  return Object.keys(ROLES).filter(id=>ROLES[id].grad!==0).map(id=>({id,...status(id)}))
    .filter(x=>x.s!=="blocked" && (st.showBridge||x.s!=="bridge"))
    .filter(x=>st.sector==="all" || ROLES[x.id].t===st.sector || ROLES[x.id].t==="both")
    .sort((a,b)=>ORDER.indexOf(a.s)-ORDER.indexOf(b.s));
}

/* ---- pre-university readiness ---- */
function tags(){ const s=new Set(); st.subjects.forEach(k=>(SUBJ[k]?.[2]||[]).forEach(x=>s.add(x))); return s; }
function readiness(d){
  const tg=tags(), D=DISC[d];
  if(!D.req.length) return {s:"anyg",miss:[],have:D.good.filter(x=>tg.has(x))};
  const miss=D.req.filter(x=>!tg.has(x));
  return {s:miss.length?"missing":"ready",miss,have:D.req.filter(x=>tg.has(x))};
}
const TAGN = {phy:["Physics","পদার্থবিজ্ঞান"],chem:["Chemistry","রসায়ন"],bio:["Biology","জীববিজ্ঞান"],math:["Higher / Further Maths","উচ্চতর গণিত"],acc:["Accounting","হিসাববিজ্ঞান"],bus:["Business subjects","ব্যবসায় বিষয়"],econ:["Economics","অর্থনীতি"],eng:["English","ইংরেজি"],lit:["Literature","সাহিত্য"],soc:["Social sciences / history","সমাজবিজ্ঞান / ইতিহাস"],psych:["Psychology","মনোবিজ্ঞান"],law:["Law","আইন"],art:["Art & Design","আর্ট অ্যান্ড ডিজাইন"],cs:["Computer Science / ICT","কম্পিউটার সায়েন্স / আইসিটি"],isl:["Islamic studies / Arabic","ইসলামি শিক্ষা / আরবি"],agri:["Agriculture","কৃষি"]};
function preLines(){
  const L0=lvl(), tg=tags();
  const lines=ALLD.map(d=>({d,...readiness(d)}));
  const rank={ready:0,anyg:1,missing:2};
  lines.sort((a,b)=>rank[a.s]-rank[b.s]);
  // diploma lines for SSC stage, using vocational trade tags or science
  const dips=[];
  if(L0.stage==="ssc"){ ["cse","eee","civil","me","textile"].forEach(d=>dips.push({d,dip:1,s:tg.has("t_"+d)?"ready":"anyg",miss:[],have:[]})); dips.sort((a,b)=>rank[a.s]-rank[b.s]); }
  if(L0.id==="hsc_voc"){ ["cse","eee","civil","me","textile"].forEach(d=>{ if(tg.has("t_"+d)) dips.push({d,dip:1,s:"ready",miss:[],have:[]}); }); }
  return dips.length && (L0.id==="ssc_voc"||L0.id==="hsc_voc") ? dips.concat(lines) : lines.concat(dips);
}
function topRoles(d,n){ const a=Object.keys(ROLES).filter(id=>ROLES[id].direct.includes(d) && ROLES[id].direct.length<15);
  a.sort((x,y)=>(ROLES[x].sec==="gov")-(ROLES[y].sec==="gov")); return a.slice(0,n); }
function afterHscLines(){ const tg=tags(); return Object.keys(ROLES).filter(id=>ROLES[id].after==="hsc").map(id=>{const miss=(ROLES[id].req||[]).filter(x=>!tg.has(x)); return {id,s:(ROLES[id].req||[]).length?(miss.length?"missing":"ready"):"anyg",miss};}); }

/* ---- render helpers ---- */
const sc = id => `var(${SECTORS[ROLES[id].sec].c})`;
const pill = s => `<span class="pill p-${s}">${t(s)}</span>`;
const typeLbl = ty => ty==="both"?t("both"):ty==="pub"?t("pub"):t("priv");

function renderStatic(){
  $("#tagline").innerHTML=(st.lang==="bn"?T.tags[1]:T.tags[0]).map(x=>`<span>${esc(x)}</span>`).join("");
  document.documentElement.lang = st.lang==="bn"?"bn":"en";
  document.querySelectorAll("[data-t]").forEach(el=>el.textContent=t(el.dataset.t));
  document.querySelectorAll(".lang button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.l===st.lang));
  $("#stat-n").textContent = N("13.54%");
}

function renderPicker(){
  const L0=lvl();
  // university select
  const U=st.uni!==""?UNIS[+st.uni]:null, allow=U?new Set(UTYPE[U.ty].d):null;
  const kinds=[["pub",["Public universities (UGC)","সরকারি বিশ্ববিদ্যালয় (ইউজিসি)"]],["pvt",["Private universities","বেসরকারি বিশ্ববিদ্যালয়"]],["intl",["International universities","আন্তর্জাতিক বিশ্ববিদ্যালয়"]]];
  $("#f-uni").innerHTML=`<option value="">${t("uniAny")}</option>`+kinds.map(([k,lb])=>`<optgroup label="${esc(L(lb))} (${N(UNIS.filter(u=>u.k===k).length)})">`+UNIS.map((u,i)=>u.k===k?`<option value="${i}"${String(i)===st.uni?" selected":""}>${esc(u.n)}</option>`:"").join("")+"</optgroup>").join("");
  $("#uni-hint").hidden=!U;
  if(U){ const nt=UNI_NOTE[U.n]; $("#uni-hint").innerHTML=`<strong>${esc(L([UTYPE[U.ty].en,UTYPE[U.ty].bn]))}.</strong> ${t("uniHint")}${nt?`<br><span class="warnline">${esc(L(nt))}</span>`:""}`+(UPROG[U.n]?`<details class="pdet"><summary>${esc(fill(["See all {n} programmes offered here","এখানে যে {n}টি প্রোগ্রাম আছে, সব দেখুন"],{n:N(UPROG[U.n].ug.length+UPROG[U.n].pg.length)}))}</summary>${progBlock(U.n)}</details>`:""); }
  // level select
  let h=""; for(const c of ["sec","hs"]){ h+=`<optgroup label="${esc(L(LCAT[c]))}">`+LEVELS.filter(l=>l.cat===c).map(l=>`<option value="${l.id}"${l.id===st.level?" selected":""}>${esc(nm(l))}</option>`).join("")+"</optgroup>"; }
  for(const g of Object.keys(DGRPN)){ const items=LEVELS.filter(l=>l.cat==="deg"&&l.grp===g&&(!allow||g==="dip"||allow.has(l.id))); if(!items.length) continue;
    h+=`<optgroup label="${esc(L(DGRPN[g]))}">`+items.map(l=>`<option value="${l.id}"${l.id===st.level?" selected":""}>${esc(nm(l))}</option>`).join("")+"</optgroup>"; }
  $("#f-level").innerHTML=h;
  const pre=L0.cat!=="deg";
  $("#pre-wrap").hidden=!pre; $("#deg-wrap").hidden=pre;
  if(pre){
    const groups=Object.keys(L0.cur).filter(k=>k!=="_opt");
    if(!groups.includes(st.group)) { st.group=groups[0]; st.subjects=new Set(L0.cur[st.group]); }
    $("#f-group").innerHTML=groups.map(g=>`<option value="${g}"${g===st.group?" selected":""}>${esc(L(GROUPNAME[g]))}</option>`).join("");
    const main=L0.cur[st.group], opt=[...new Set([...groups.filter(g=>g!==st.group).flatMap(g=>L0.cur[g]), ...L0.cur._opt])].filter(k=>!main.includes(k));
    const chip=k=>`<button type="button" class="chip" data-subj="${k}" aria-pressed="${st.subjects.has(k)}">${esc(L(SUBJ[k]))}</button>`;
    $("#subj-main").innerHTML=main.map(chip).join("");
    $("#subj-opt").innerHTML=opt.map(chip).join("");
  } else {
    if(!L0.subj.includes(st.subject)) st.subject=L0.subj[0];
    const byG={}; L0.subj.forEach(d=>(byG[DISC[d].g]=byG[DISC[d].g]||[]).push(d));
    $("#f-subject").innerHTML=Object.keys(byG).map(g=>`<optgroup label="${esc(L(DGRP[g]))}">`+byG[g].map(d=>`<option value="${d}"${d===st.subject?" selected":""}>${esc(nm(DISC[d]))}</option>`).join("")+"</optgroup>").join("");
  }
  // results fields
  $("#w-hsc").hidden = L0.cat==="sec" || L0.mode==="diploma";
  $("#w-cg").hidden = L0.cat!=="deg";
  $("#w-mcg").hidden = L0.mode!=="masters";
  $("#ol-hint").hidden = !(["olevel","alevel","olevel_edx","alevel_edx"].includes(st.level));
  $("#mad-hint").hidden = !(["fazil_pass","fazil_hons","kamil","dakhil","alim"].includes(st.level));
  for(const k of ["ssc","hsc","cg","mcg"]){ const el=$("#f-"+k); if(el.value!==st[k]) el.value=st[k]; }
  const badge=(k,isC)=>{ const v=num(st[k]); if(v==null) return ""; const l=isC?clsOf(v):divOf(v); const key=isC?["clF","cl1","clNot","cl3"][l]:["clF","div1","div2","div3"][l]; return `<span class="grade g${l}">${t(key)}</span>`; };
  $("#b-ssc").innerHTML=badge("ssc"); $("#b-hsc").innerHTML=badge("hsc"); $("#b-cg").innerHTML=badge("cg",1); $("#b-mcg").innerHTML=badge("mcg",1);
}

function stop(label,cls="",sub=""){ return `<div class="stop ${cls}"><span class="dot"></span><span class="sl">${esc(label)}</span>${sub?`<span class="ss">${esc(sub)}</span>`:""}</div>`; }

function groupHead(s,n){ return `<h3 class="grp-h">${pill(s)}<span class="cnt">${N(n)}${st.lang==="bn"?"":" "}${t("routes")}</span></h3>`; }
const roleLabel = (id,x) => (lvl().mode==="diploma"&&x&&x.s==="cond") ? L(T.sae) : nm(ROLES[id]);

function renderMap(){
  const L0=lvl(), pre=L0.cat!=="deg";
  $("#map-h").textContent = pre ? t("preH") : t("mapH");
  $("#map-hint").textContent = (pre ? t("preHint") : t("mapHint")) + (st.view==="mind" ? " " + t("tapUnfold") : "");
  $("#deg-tools").hidden = pre;
  document.querySelectorAll("#sector-f button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.s===st.sector));
  document.querySelectorAll("#view-f button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.v===st.view));
  $("#f-bridge").checked = st.showBridge;
  $("#lines").innerHTML = st.view==="mind" ? (pre ? mindPre() : mindDeg()) : (pre ? linesPre() : linesDeg());
}

/* ---------- mind map (horizontal tree) ---------- */
const li = (inner, kids, cls="", style="") => `<li class="${cls}"${style?` style="${style}"`:""}>${inner}${kids?`<ul>${kids}</ul>`:""}</li>`;
function brNode(key,s,label,n){ const f=st.fold.has(key); return `<button type="button" class="node br b-${s}" data-fold="${key}" aria-expanded="${!f}">${esc(label)}<span class="nc">${N(n)}</span><span class="car" aria-hidden="true">${f?"+":"−"}</span></button>`; }
function ladderKids(id,x){ const r=ROLES[id]; let kids="", i=r.ladder.length;
  // nest from the top rung down so the road reads left to right
  for(let k=r.ladder.length-1;k>=0;k--){ kids = li(`<span class="node lad" style="--d:${(k+1)*90}ms">${esc(L(r.ladder[k]))}</span>`, kids, "lad"); }
  return kids; }
function roleNode(id,x){
  const r=ROLES[id], on=st.sel===id;
  const node=`<button type="button" class="node role${on?" on":""}" data-role="${id}" style="--lc:${sc(id)}"><span class="nt">${esc(roleLabel(id,x))}</span><span class="np">${esc(L([SECTORS[r.sec].en,SECTORS[r.sec].bn]))} · ${esc(N(payShort(id)))}</span></button>`;
  return li(node, on?ladderKids(id,x):"", on?"path":"", `--lc:${sc(id)}`);
}
function mindDeg(){
  const list=roleList(), L0=lvl();
  if(!list.length) return `<p class="muted">${t("r_blocked")}</p>`;
  let br="";
  for(const s of ORDER){ const g=list.filter(x=>x.s===s); if(!g.length) continue;
    const key="d-"+s;
    br+=li(brNode(key,s,t(s),g.length), st.fold.has(key)?"":g.map(x=>roleNode(x.id,x)).join(""));
  }
  return `<div class="tree"><div class="node root">${esc(t("you"))}<small>${esc(nm(DISC[st.subject]))}</small><small>${esc(nm(L0).split(" (")[0])}</small></div><ul>${br}</ul></div>`;
}
function degNode(x){
  const key=(x.dip?"dip:":"deg:")+x.d, on=st.sel===key, D=DISC[x.d];
  const tr=topRoles(x.d,1)[0], lc=`var(${SECTORS[tr?ROLES[tr].sec:"edu"].c})`;
  const node=`<button type="button" class="node role deg${on?" on":""}" data-pre="${key}" style="--lc:${lc}"><span class="nt">${esc(x.dip?L(T.dipLine)+": "+nm(D):nm(D))}</span>${x.s==="missing"?`<span class="np miss">${t("add")}: ${esc(x.miss.map(m=>L(TAGN[m])).join(", "))}</span>`:""}</button>`;
  let kids="";
  if(on){ const rs = x.dip ? [] : topRoles(x.d,4);
    kids = x.dip ? li(`<span class="node lad" style="--d:90ms">${esc(L(T.sae))}</span>`,"","lad")
                 : rs.map((id,i)=>li(`<button type="button" class="node lad" data-show="${id}" style="--d:${(i+1)*80}ms;--lc:${sc(id)}">${esc(nm(ROLES[id]))}</button>`,"","lad")).join(""); }
  return li(node,kids,on?"path":"",`--lc:${lc}`);
}
function mindPre(){
  const L0=lvl(), lines=preLines();
  let br="";
  const groups=[["ready",x=>!x.dip&&x.s==="ready"],["anyg",x=>!x.dip&&x.s==="anyg"],["missing",x=>!x.dip&&x.s==="missing"]];
  const dip=lines.filter(x=>x.dip);
  const voc=["ssc_voc","hsc_voc"].includes(L0.id);
  if(voc && dip.length){ const key="p-dip"; br+=li(brNode(key,"ready",t("dipRoutes"),dip.length), st.fold.has(key)?"":dip.map(degNode).join("")); }
  for(const [s,f] of groups){ const g=lines.filter(f); if(!g.length) continue; const key="p-"+s;
    br+=li(brNode(key,s,t(s),g.length), st.fold.has(key)?"":g.map(degNode).join("")); }
  if(!voc && dip.length){ const key="p-dip"; if(!st.fold.has(key)&&!st._dipInit){ st.fold.add(key); st._dipInit=1; }
    br+=li(brNode(key,"anyg",t("dipRoutes"),dip.length), st.fold.has(key)?"":dip.map(degNode).join("")); }
  if(L0.stage==="hsc"){ const a=afterHscLines(), key="p-after";
    br+=li(brNode(key,"open",t("afterHsc"),a.length), st.fold.has(key)?"":a.map(x=>{ const r=ROLES[x.id], on=st.sel===x.id;
      return li(`<button type="button" class="node role${on?" on":""}" data-role="${x.id}" style="--lc:${sc(x.id)}"><span class="nt">${esc(nm(r))}</span><span class="np${x.s==="missing"?" miss":""}">${x.s==="missing"?t("add")+": "+esc(x.miss.map(m=>L(TAGN[m])).join(", ")):esc(typeLbl(r.t))}</span></button>`, on?ladderKids(x.id):"", on?"path":"", `--lc:${sc(x.id)}`); }).join("")); }
  const subs=[...st.subjects].slice(0,4).map(k=>L(SUBJ[k])).join(", ");
  return `<div class="tree"><div class="node root">${esc(t("you"))}<small>${esc(nm(L0).split(" (")[0])} · ${esc(L(GROUPNAME[st.group]))}</small>${subs?`<small>${esc(subs)}${st.subjects.size>4?"…":""}</small>`:""}</div><ul>${br}</ul></div>`;
}

/* ---------- lines view ---------- */
function linesPre(){
  const L0=lvl(), lines=preLines(); let h="", last=null;
  const youSub = L(GROUPNAME[st.group]);
  lines.forEach(x=>{
    const key=x.dip?"dip":x.s; if(key!==last){ h+= x.dip? `<h3 class="grp-h"><span class="pill p-anyg">${t("dipRoutes")}</span></h3>` : groupHead(x.s,lines.filter(y=>!y.dip&&y.s===x.s).length); last=key; }
    const D=DISC[x.d], k=(x.dip?"dip:":"deg:")+x.d, tr=topRoles(x.d,1)[0];
    const mid = L0.stage==="ssc" ? (x.dip ? L(T.viaDip) : L(L0.next)) : null;
    h+=`<div class="line${st.sel===k?" on":""}" role="button" tabindex="0" data-pre="${k}" style="--lc:var(${SECTORS[tr?ROLES[tr].sec:"edu"].c})">
      <div class="lh"><span class="ln">${esc(x.dip? L(T.dipLine)+": "+nm(D) : nm(D))}</span>${x.s==="missing"?`<span class="miss">${t("add")}: ${esc(x.miss.map(m=>L(TAGN[m])).join(", "))}</span>`:""}</div>
      <div class="track">${stop(t("you"),"origin",youSub)}${mid?stop(mid,"",x.dip?"":youSub):""}${stop(x.dip?L(T.dipLine):nm(D))}${x.dip?stop(L(T.sae)):(tr?stop(nm(ROLES[tr])):"")}</div></div>`;
  });
  if(L0.stage==="hsc"){ const a=afterHscLines(); h+=`<h3 class="grp-h"><span class="pill p-open">${t("afterHsc")}</span></h3>`;
    a.forEach(x=>{ const r=ROLES[x.id]; h+=`<div class="line${st.sel===x.id?" on":""}" role="button" tabindex="0" data-role="${x.id}" style="--lc:${sc(x.id)}">
      <div class="lh"><span class="ln">${esc(nm(r))}</span>${x.s==="missing"?`<span class="miss">${t("add")}: ${esc(x.miss.map(m=>L(TAGN[m])).join(", "))}</span>`:""}</div>
      <div class="track">${stop(t("you"),"origin",youSub)}${stop(nm(r),"entry")}${r.ladder.map(l=>stop(L(l))).join("")}</div></div>`; }); }
  return h;
}
function payShort(id){ const m=PVT_MARKET[id]; if(m&&m[2]&&m[3]) return (m[1]<3?"≈":"")+"৳"+N(Math.round(m[2]/1000))+"–"+N(Math.round(m[3]/1000))+(st.lang==="bn"?" হাজার":"k")+(m[1]<3?(st.lang==="bn"?" (কম তথ্য)":" (few ads)"):""); return L(PAY[ROLES[id].pay].short); }
function linesDeg(){
  const list=roleList(); let h="", last=null;
  if(!list.length) return `<p class="muted">${t("r_blocked")}</p>`;
  list.forEach(x=>{
    const r=ROLES[x.id];
    if(x.s!==last){ h+=groupHead(x.s,list.filter(y=>y.s===x.s).length); last=x.s; }
    h+=`<div class="line${st.sel===x.id?" on":""}" role="button" tabindex="0" data-role="${x.id}" style="--lc:${sc(x.id)}">
      <div class="lh"><span class="sw"></span><span class="sec">${esc(L([SECTORS[r.sec].en,SECTORS[r.sec].bn]))} · ${typeLbl(r.t)}</span><span class="pay">${esc(N(payShort(x.id)))}</span></div>
      <div class="track">${stop(t("you"),"origin",nm(DISC[st.subject]))}${stop(roleLabel(x.id,x),"entry")}${r.ladder.map(l=>stop(L(l))).join("")}</div></div>`;
  });
  return h;
}

function linkList(arr){ return arr.map(([n,u])=>u?`<a href="${u}" target="_blank" rel="noopener">${esc(n)}</a>`:esc(n)).join(" · "); }
function srcLink(k){ if(!k) return ""; const s=SRC[k]; return `<a class="src" href="${s.u}" target="_blank" rel="noopener">${t("src")}: ${esc(s.t)}</a>`; }


/* ---------- year-by-year action plan ---------- */
const PB = {
  planH:["Your year-by-year plan","বছরভিত্তিক করণীয় পরিকল্পনা"],
  y1:["Year 1","১ম বর্ষ"],y2:["Year 2","২য় বর্ষ"],y3:["Year 3","৩য় বর্ষ"],y4:["Final year","শেষ বর্ষ"],after:["After graduation","স্নাতকের পর"],
  pre1:["Now (school / college)","এখন (স্কুল / কলেজ)"],pre2:["Admission year","ভর্তির বছর"],pre3:["At university","বিশ্ববিদ্যালয়ে"],
  m3:["Next 3 months","আগামী ৩ মাস"],m6:["Next 6 months","আগামী ৬ মাস"],m12:["Within 1 year","১ বছরের মধ্যে"],
  planB:["Plan B in parallel","পাশাপাশি বিকল্প পরিকল্পনা"],
  thisTerm:["Start this semester","এই সেমিস্টার থেকেই শুরু"]
};
const PL = {
  eng:["Build spoken and written English: read one English article a day and write short summaries.","ইংরেজিতে বলা ও লেখার দক্ষতা গড়ুন: প্রতিদিন একটি ইংরেজি লেখা পড়ে ছোট সারাংশ লিখুন।"],
  excel:["Learn computer basics and Excel well (formulas, tables, charts).","কম্পিউটারের মৌলিক বিষয় ও এক্সেল ভালোভাবে শিখুন (ফর্মুলা, টেবিল, চার্ট)।"],
  cgpa:["Protect your CGPA: aim for 3.00 or above, because many circulars use it as a cut-off.","সিজিপিএ ধরে রাখুন: ৩.০০ বা তার বেশি লক্ষ্য রাখুন, কারণ অনেক বিজ্ঞপ্তিতে এটি শর্ত হিসেবে থাকে।"],
  start:["Start learning: {s}.","শেখা শুরু করুন: {s}।"],
  deepen:["Go deeper in: {s}.","আরও গভীরে শিখুন: {s}।"],
  club:["Join a club or volunteer group related to {sec}; take one small responsibility.","{sec}-সংশ্লিষ্ট কোনো ক্লাব বা স্বেচ্ছাসেবী দলে যুক্ত হোন; ছোট একটি দায়িত্ব নিন।"],
  ga:["Read a national newspaper daily and keep notes on current affairs; this is the base of BCS and bank exams.","প্রতিদিন একটি জাতীয় দৈনিক পড়ুন ও সাম্প্রতিক বিষয়ের নোট রাখুন; এটিই বিসিএস ও ব্যাংক পরীক্ষার ভিত্তি।"],
  intern:["Do an internship, field attachment or part-time job in {sec}.","{sec} খাতে ইন্টার্নশিপ, ফিল্ড অ্যাটাচমেন্ট বা খণ্ডকালীন কাজ করুন।"],
  folio:["Build 2–3 real projects and put them in a portfolio; employers in this field hire on proof, not degree.","২–৩টি বাস্তব প্রজেক্ট করে পোর্টফোলিওতে রাখুন; এই খাতে ডিগ্রি নয়, প্রমাণ দেখে নিয়োগ হয়।"],
  people:["Talk to 3 people already working as {role}: ask what the work is really like and what they would do differently.","{role} হিসেবে কাজ করছেন এমন ৩ জনের সঙ্গে কথা বলুন: কাজটা আসলে কেমন, আর তাঁরা কী অন্যভাবে করতেন, জেনে নিন।"],
  cv:["Make a one-page CV and a LinkedIn profile; ask a working professional to review them.","এক পৃষ্ঠার সিভি ও লিংকডইন প্রোফাইল বানান; কর্মরত কাউকে দিয়ে দেখিয়ে নিন।"],
  apply:["Apply for entry roles as {role} through {where}.","{where}-এর মাধ্যমে {role} পদে আবেদন করুন।"],
  prep:["Start structured preparation for BCS / bank exams: Bangla, English, math, GK; take a weekly model test.","বিসিএস / ব্যাংক পরীক্ষার পরিকল্পিত প্রস্তুতি শুরু করুন: বাংলা, ইংরেজি, গণিত, সাধারণ জ্ঞান; সপ্তাহে একটি মডেল টেস্ট দিন।"],
  sit:["Sit for the circulars as soon as you are eligible; most candidates need several attempts.","যোগ্য হলেই বিজ্ঞপ্তিতে আবেদন করুন; বেশিরভাগ প্রার্থীর কয়েকবার চেষ্টা লাগে।"],
  license:["Plan for the licence or registration this career needs (see Eligibility above) and its exam dates.","এই ক্যারিয়ারে যে লাইসেন্স বা নিবন্ধন লাগে (ওপরে যোগ্যতা দেখুন) এবং তার পরীক্ষার সময় আগে থেকেই পরিকল্পনা করুন।"],
  grow:["Aim for the next step: {next}. Keep learning: {s}.","পরের ধাপের লক্ষ্য রাখুন: {next}। শেখা চালিয়ে যান: {s}।"],
  bridge:["Your degree is not the usual route, so take a recognised short course or certificate in {s} to prove the skill.","আপনার ডিগ্রি এই পথের প্রচলিত রুট নয়, তাই দক্ষতা প্রমাণে {s} বিষয়ে স্বীকৃত শর্ট কোর্স বা সার্টিফিকেট করুন।"],
  preGroup:["Choose the group and subjects this path needs; if you are unsure, keep Science with Higher Maths, since it keeps the most doors open.","এই পথে যে বিভাগ ও বিষয় লাগে তা বেছে নিন; নিশ্চিত না হলে উচ্চতর গণিতসহ বিজ্ঞান রাখুন, এতে সবচেয়ে বেশি পথ খোলা থাকে।"],
  preResult:["Keep SSC and HSC GPA at 4.00 or above; many circulars and admissions count school results.","এসএসসি ও এইচএসসিতে জিপিএ ৪.০০ বা তার বেশি রাখুন; অনেক বিজ্ঞপ্তি ও ভর্তিতে স্কুল-কলেজের ফল গোনা হয়।"],
  preAdmit:["Target degrees that lead here (see the degree lines on the map) and prepare for those admission tests.","যে ডিগ্রিগুলো এই পথে নিয়ে যায় (ম্যাপের ডিগ্রি লাইন দেখুন) সেগুলো লক্ষ্য করে ভর্তি পরীক্ষার প্রস্তুতি নিন।"],
  preSkill:["Start one skill early, at your own pace: {s}.","নিজের গতিতে আগেভাগেই একটি দক্ষতা শুরু করুন: {s}।"]
};
function fill(x,o){ return L(x).replace(/\{(\w+)\}/g,(m,k)=>o[k]); }
function planFor(id){
  const r=ROLES[id], L0=lvl(), S=status(id), sec=L([SECTORS[r.sec].en,SECTORS[r.sec].bn]);
  const sk=r.sk.map(k=>L(SK[k])), o={s:sk[0], sec, role:nm(r), next:L(r.ladder[0]), where:WHERE[r.where].map(w=>w[0]).join(" / ")};
  const gov=r.t==="pub", lic=r.rule==="licensed", proof=r.rule==="skills";
  const rest=sk.slice(1).join(", ")||sk[0];
  let steps;
  if(L0.cat!=="deg"){
    steps=[[PB.pre1,[PL.preGroup,PL.preResult,PL.eng]],[PB.pre2,[PL.preAdmit,PL.people]],[PB.pre3,[PL.cgpa,{f:PL.preSkill,o}]] ];
  } else if(L0.mode==="masters"){
    steps=[[PB.m3,[PL.cv,PL.people,{f:PL.start,o}]],[PB.m6,[proof?PL.folio:PL.intern,gov?PL.prep:{f:PL.apply,o}]],[PB.m12,[gov?PL.sit:{f:PL.grow,o:{...o,s:rest}}, lic?PL.license:null]]];
  } else {
    steps=[
      [PB.y1,[PL.eng,PL.excel,PL.cgpa,{f:PL.start,o}]],
      [PB.y2,[{f:PL.deepen,o:{...o,s:rest}},{f:PL.club,o},gov?PL.ga:null,S.s==="bridge"?{f:PL.bridge,o:{...o,s:rest}}:null]],
      [PB.y3,[proof?PL.folio:{f:PL.intern,o},{f:PL.people,o},lic?PL.license:null]],
      [PB.y4,[PL.cv,gov?PL.prep:{f:PL.apply,o}]],
      [PB.after,[gov?PL.sit:null,{f:PL.grow,o:{...o,s:rest}}]]
    ];
  }
  const txt=x=>!x?"":(x.f?fill(x.f,x.o):fill(x,o));
  let h=`<h4>${L(PB.planH)}</h4><ol class="plan">`+steps.map(([lab,arr])=>`<li><span class="pl">${esc(L(lab))}</span><ul>${arr.filter(Boolean).map(x=>`<li>${esc(txt(x))}</li>`).join("")}</ul></li>`).join("")+`</ol>`;
  if(gov){ const alt=Object.keys(ROLES).filter(k=>k!==id&&ROLES[k].sec===r.sec&&ROLES[k].t!=="pub"&&!["blocked"].includes(status(k).s)).slice(0,2);
    const alt2=alt.length?alt:Object.keys(ROLES).filter(k=>ROLES[k].t!=="pub"&&["direct","open"].includes(status(k).s)).slice(0,2);
    if(alt2.length) h+=`<p class="planb"><strong>${esc(L(PB.planB))}:</strong> ${alt2.map(k=>`<button type="button" class="lnk" data-show="${k}">${esc(nm(ROLES[k]))}</button>`).join(", ")}</p>`; }
  return h;
}

function marketBlock(id){
  const m=PVT_MARKET[id]; if(!m) return "";
  const [n,ns,lo,hi,ee,eb,sk]=m, bn=st.lang==="bn", f=x=>N((x/1000).toLocaleString("en-US"))+(bn?" হাজার":"k");
  let h=`<h4>${bn?"চাকরির বিজ্ঞপ্তি থেকে (বিডিজবস)":"From live job circulars (Bdjobs)"}</h4><div class="mkt">`;
  if(lo&&hi) h+=`<p class="mk-sal"><strong>৳${f(lo)} – ৳${f(hi)}</strong> ${bn?"/ মাস":"/ month"}</p><p class="muted mk-n">${bn?`এন্ট্রি লেভেলের ${N(n)}টি বিজ্ঞপ্তির মধ্যে ${N(ns)}টিতে বেতন উল্লেখ ছিল`:`${ns} of ${n} entry-level listings stated a salary`}${ns<3?(bn?" · নমুনা ছোট, আনুমানিক ধরুন":" · small sample, treat as rough"):""}</p>`;
  else h+=`<p class="muted mk-n">${bn?`এন্ট্রি লেভেলের ${N(n)}টি বিজ্ঞপ্তি পাওয়া গেছে, কিন্তু যথেষ্টগুলোতে বেতন উল্লেখ নেই।`:`${n} entry-level listings found, but too few stated a salary.`}</p>`;
  h+=`<p><strong>${bn?"শিক্ষাগত যোগ্যতা যা চাওয়া হয়:":"Education asked for:"}</strong> ${esc(bn?eb:ee)}</p>`;
  if(sk.length) h+=`<p><strong>${bn?"নিয়োগকর্তারা যে দক্ষতা চান:":"Skills employers list:"}</strong> ${esc(sk.join(", "))}</p>`;
  h+=`<p class="muted mk-n">${bn?"এন্ট্রি লেভেল = ২ বছর বা কম অভিজ্ঞতা। নমুনা":"Entry level = 2 years' experience or less. Sampled"} ${esc(L(PVT_DATE))}. ${bn?"প্রতি মাসে হালনাগাদ হয়।":"Updated monthly."}</p></div>${srcLink("S22")}`;
  return h;
}
function roleDetail(id, ctx){
  const r=ROLES[id], S=status(id), L0=lvl();
  let h=`<div class="d-sec" style="--lc:${sc(id)}"><span class="sw"></span>${esc(L([SECTORS[r.sec].en,SECTORS[r.sec].bn]))} · ${typeLbl(r.t)}</div>
    <h3 class="d-title">${esc(nm(r))}</h3>`;
  if(S.s!=="na"){ h+=`<div class="verdict v-${S.s}">${pill(S.s)}<p>${t(S.why)}</p></div>`; }
  h+=`<div class="d-route" style="--lc:${sc(id)}">${[t("you"),(L0.mode==="diploma"&&S.s==="cond")?L(T.sae):nm(r),...r.ladder.map(L)].map((s,i)=>`<span class="${i?"":"me"}">${esc(s)}</span>`).join('<i aria-hidden="true"></i>')}</div>`;
  if(r.note){ h+=`<h4>${t("rules")}</h4><p>${esc(L(r.note))}</p>${srcLink(r.ns)}`; }
  const rc=resCheck(r);
  h+=`<h4>${t("resRule")}</h4>`;
  if(rc.none) h+=`<p>${t("resNone")}</p>`;
  else { h+=`<p>${esc(N(L(rc.r.txt)))}</p>`;
    if(L0.cat==="deg"){ h+= rc.ok==null?`<p class="muted">${t("resNA")}</p>`:`<p class="res ${rc.ok?"ok":"no"}">${rc.ok?"✓ "+t("meets"):"✕ "+t("fails")}</p>`; }
    h+=srcLink(rc.r.s); }
  h+=marketBlock(id);
  const P=PAY[r.pay];
  h+=`<h4>${t("pay")}</h4><p>${esc(L([P.en,P.bn]))}</p>${srcLink(P.s)}`;
  h+=`<h4>${t("skills")}</h4><ul class="sk">${r.sk.map(k=>`<li>${esc(L(SK[k]))}</li>`).join("")}</ul>`;
  h+=planFor(id);
  h+=`<h4>${t("whereC")}</h4><p>${linkList(WHERE[r.where])}</p>`;
  return h;
}
function degDetail(key){
  const [kind,d]=key.split(":"), D=DISC[d], x=readiness(d), L0=lvl();
  let h=`<div class="d-sec">${esc(L(DGRP[D.g]))}</div><h3 class="d-title">${esc(kind==="dip"?L(T.dipLine)+": "+nm(D):nm(D))}</h3>`;
  if(kind==="dip"){ h+=`<div class="verdict v-anyg">${pill(tags().has("t_"+d)?"ready":"anyg")}<p>${t("dipNote")}</p></div>
     <div class="d-route"><span class="me">${t("you")}</span><i></i><span>${esc(L(T.dipLine))}</span><i></i><span>${esc(L(T.sae))}</span><i></i><span>${esc(st.lang==="bn"?"বিএসসি (ঐচ্ছিক, পরে)":"BSc (optional, later)")}</span></div>`; }
  else {
    h+=`<div class="verdict v-${x.s}">${pill(x.s)}<p>${D.req.length?`${t("needs")}: ${esc(D.req.map(m=>L(TAGN[m])).join(", "))}.`:t("noReq")}</p></div>`;
    if(x.miss.length) h+=`<p><strong>${t("add")}:</strong> ${esc(x.miss.map(m=>L(TAGN[m])).join(", "))}</p>`;
    if(D.good.length) h+=`<p><strong>${t("helps")}:</strong> ${esc(D.good.map(m=>L(TAGN[m])).join(", "))}</p>`;
    h+=`<p class="muted">${t("adNote")}</p>`;
  }
  const rs=topRoles(d,5);
  if(rs.length){ h+=`<h4>${t("careers")}</h4><ul class="sk">${rs.map(id=>`<li>${esc(nm(ROLES[id]))} <span class="muted">· ${esc(N(L(PAY[ROLES[id].pay].short)))}</span></li>`).join("")}</ul>`; }
  h+=`<button type="button" class="btn" data-go="${kind}:${d}">${t("openDeg")} →</button>`;
  return h;
}
function renderDetail(){
  const el=$("#detail");
  if(!st.sel){ el.innerHTML=`<p class="muted">${t("empty")}</p>`; return; }
  el.innerHTML = st.sel.includes(":") ? degDetail(st.sel) : roleDetail(st.sel);
}

function renderChecker(){
  const opts=Object.keys(SECTORS).map(s=>`<optgroup label="${esc(L([SECTORS[s].en,SECTORS[s].bn]))}">`+Object.keys(ROLES).filter(id=>ROLES[id].sec===s).map(id=>`<option value="${id}"${id===st.check?" selected":""}>${esc(nm(ROLES[id]))}</option>`).join("")+"</optgroup>").join("");
  $("#f-check").innerHTML=opts;
  const out=$("#check-out");
  if(lvl().cat!=="deg"){ out.innerHTML=`<p class="muted">${t("needDeg")}</p>`; return; }
  const S=status(st.check), r=ROLES[st.check], rc=S.rc;
  let h=`<div class="verdict big v-${S.s}">${pill(S.s)}<p>${t(S.why)}</p></div>`;
  if(r.note) h+=`<p>${esc(L(r.note))}</p>`;
  if(!rc.none){ h+=`<p><strong>${t("resRule")}:</strong> ${esc(N(L(rc.r.txt)))} ${rc.ok==null?`<span class="muted">${t("resNA")}</span>`:`<span class="res ${rc.ok?"ok":"no"}">${rc.ok?"✓ "+t("meets"):"✕ "+t("fails")}</span>`}</p>`; }
  if(S.s==="bridge"||S.s==="cond") h+=`<p><strong>${t("skills")}:</strong> ${esc(r.sk.map(k=>L(SK[k])).join(", "))}</p>`;
  h+=`<button type="button" class="btn ghost" data-show="${st.check}">${t("route")} →</button>`;
  out.innerHTML=h;
}

function quizScores(){
  const I={}, P={};
  st.ans.forEach((oi,qi)=>{ const o=QUIZ[qi].o[oi]; if(!o) return; for(const k in o[1]) I[k]=(I[k]||0)+o[1][k]; if(o[2]) for(const k in o[2]) P[k]=(P[k]||0)+o[2][k]; });
  return {I,P};
}
function renderQuiz(){
  const out=$("#quiz");
  if(st.qi<0){ out.innerHTML=`<p class="lead">${t("quizIntro")}</p><button type="button" class="btn" data-q="start">${t("start")} →</button>`; return; }
  if(st.qi<QUIZ.length){
    const Q=QUIZ[st.qi];
    out.innerHTML=`<div class="qbar"><span style="width:${(st.qi/QUIZ.length)*100}%"></span></div>
      <p class="qn">${esc(N(t("qOf").replace("{a}",st.qi+1).replace("{b}",QUIZ.length)))}</p>
      <h3 class="qq">${esc(L(Q.q))}</h3>
      <div class="qopts">${Q.o.map((o,i)=>`<button type="button" class="qopt" data-qa="${i}" aria-pressed="${st.ans[st.qi]===i}">${esc(L(o[0]))}</button>`).join("")}</div>
      ${st.qi>0?`<button type="button" class="btn ghost sm" data-q="back">← ${t("back")}</button>`:""}`;
    return;
  }
  const {I,P}=quizScores(), deg=lvl().cat==="deg";
  const top=Object.keys(I).filter(k=>I[k]>0).sort((a,b)=>I[b]-I[a]).slice(0,4);
  const rank={direct:0,open:1,cond:2,bridge:3,gpa:4,blocked:5,na:2};
  let list=Object.keys(ROLES).filter(id=>!(deg&&ROLES[id].grad===0)).map(id=>{
    const r=ROLES[id]; let sc0=r.int.reduce((a,k,i)=>a+(I[k]||0)*(i===0?1.2:1),0);
    if(P.pub && (r.t==="pub"||r.t==="both")) sc0+=P.pub*.6;
    if(P.priv && (r.t==="priv"||r.t==="both")) sc0+=P.priv*.6;
    if(P.nostudy && (r.rule==="licensed"||id==="lecturer"||id==="counselor")) sc0-=2.5;
    return {id,sc:sc0,S:status(id)}; }).filter(x=>x.sc>0);
  const max=Math.max(...list.map(x=>x.sc),1);
  list.sort((a,b)=>b.sc-a.sc || rank[a.S.s]-rank[b.S.s]); list=list.slice(0,8);
  out.innerHTML=`<div class="qres"><span class="lbl">${t("topInt")}</span><div class="chips">${top.map(k=>`<span class="chip static">${esc(L(INTERESTS[k]))}</span>`).join("")}</div></div>
    <span class="lbl">${t("yourMatches")}</span>
    <div class="cards">${list.map(x=>{const r=ROLES[x.id], p=Math.round(x.sc/max*100); return `<button type="button" class="card" data-show="${x.id}" style="--lc:${sc(x.id)}">
      <span class="d-sec"><span class="sw"></span>${esc(L([SECTORS[r.sec].en,SECTORS[r.sec].bn]))} · ${typeLbl(r.t)}</span>
      <strong>${esc(nm(r))}</strong>
      <span class="fit"><span style="width:${p}%"></span></span><span class="muted">${N(p)}% ${t("fitPct")}</span>
      ${deg?pill(x.S.s):""}</button>`;}).join("")}</div>
    <button type="button" class="btn ghost sm" data-q="restart">↻ ${t("retake")}</button>`;
}

function renderOpen(){
  const ids=Object.keys(ROLES).filter(id=>ROLES[id].rule==="any");
  $("#open-list").innerHTML=ids.map(id=>{const r=ROLES[id]; return `<button type="button" class="orow" data-show="${id}" style="--lc:${sc(id)}"><span class="sw"></span><span class="on">${esc(nm(r))}<small>${typeLbl(r.t)}</small></span><span class="pay">${esc(N(payShort(id)))}</span></button>`;}).join("");
}
function renderPvt(){
  const deg=lvl().cat==="deg"; let h="";
  for(const sk of Object.keys(SECTORS)){ const ids=Object.keys(ROLES).filter(id=>ROLES[id].sec===sk&&ROLES[id].t!=="pub"); if(!ids.length) continue;
    h+=`<div class="ind" style="--lc:var(${SECTORS[sk].c})"><h3><span class="sw"></span>${esc(L([SECTORS[sk].en,SECTORS[sk].bn]))} <span class="cnt">${N(ids.length)}</span></h3><div class="ichips">`+
      ids.map(id=>{const S=deg?status(id).s:"na"; return `<button type="button" class="ichip s-${S}" data-show="${id}">${esc(nm(ROLES[id]))}</button>`;}).join("")+`</div></div>`; }
  $("#pvt-list").innerHTML=h;
}
function filterJobs(){ const q=($("#f-find").value||"").trim().toLowerCase(); document.querySelectorAll("#pvt-list .ind").forEach(g=>{ let any=0; g.querySelectorAll(".ichip").forEach(c=>{ const id=c.dataset.show, r=ROLES[id]; const hit=!q||(r.en+" "+r.bn).toLowerCase().includes(q); c.hidden=!hit; any+=hit; }); g.hidden=!any; }); }
/* ---- beyond your degree ---- */
st.bt="higher"; st.bsel=null;
function bxNode(tab,path,n){ const [en,bn,kids,info]=n; const lab=st.lang==="bn"?bn:en;
  if(kids) return li(`<span class="node br" style="background:var(--accent)">${esc(lab)}</span>`, kids.map((k,i)=>bxNode(tab,path+"."+i,k)).join(""));
  return li(`<button type="button" class="node role${st.bsel===path?" on":""}" style="--lc:var(--green)" data-bx="${path}">${esc(lab)}</button>`); }
function bxFind(path){ const [tab,...ix]=path.split("."); let n=null, arr=BEYOND[tab].tree; for(const i of ix){ n=arr[+i]; arr=n[2]||[]; } return n; }
st.lt="skills";
const LOWT={
 skills:{n:["Skills to build","যে দক্ষতা শিখবেন"],items:[
  ["Copy the job ad","চাকরির বিজ্ঞাপন থেকে শিখুন",["Read 20 ads for your target job and learn the skills that repeat. Why: private employers hire for these, not CGPA.","লক্ষ্যের চাকরির ২০টি বিজ্ঞাপন পড়ুন, বারবার আসা দক্ষতা শিখুন। কারণ: বেসরকারি নিয়োগ এগুলো দেখে, সিজিপিএ নয়।"],"B12"],
  ["Excel + English + speaking","এক্সেল + ইংরেজি + কথা বলা",["Learn these first. Why: employers say graduates most often lack practical and communication skills, and these are cheap to learn.","আগে এগুলো শিখুন। কারণ: নিয়োগকারীরা বলেন স্নাতকদের সবচেয়ে বেশি ঘাটতি ব্যবহারিক ও যোগাযোগ দক্ষতায়, আর এগুলো শিখতে খরচ কম।"],"J1"],
  ["Make proof","প্রমাণ তৈরি করুন",["Build a portfolio, do an internship or get a known certificate. Why: it gives the recruiter something better to judge than grades.","পোর্টফোলিও বানান, ইন্টার্নশিপ করুন বা পরিচিত সার্টিফিকেট নিন। কারণ: নিয়োগকারী গ্রেডের বদলে এটা দেখে বিচার করেন।"],"B12"]]},
 abroad:{n:["Abroad (if you can pay)","বিদেশ (খরচ থাকলে)"],items:[
  ["Work 2 years, then apply for scholarships","২ বছর চাকরি, তারপর বৃত্তি",["Why: some big scholarships (Japan/World Bank, ADB-Japan) require work experience, which counts more than old grades.","কারণ: কিছু বড় বৃত্তিতে (জাপান/বিশ্বব্যাংক, এডিবি-জাপান) কাজের অভিজ্ঞতা লাগে, যা পুরোনো গ্রেডের চেয়ে বেশি গুরুত্ব পায়।"],"B5"],
  ["Learn a language for skilled work","দক্ষ কাজের জন্য ভাষা শিখুন",["Japanese N4, Korean or German A1. Why: Japan, Korea and Germany's work routes test language and skill, not CGPA.","জাপানি এন৪, কোরিয়ান বা জার্মান এ১। কারণ: জাপান, কোরিয়া ও জার্মানির কাজের পথে ভাষা ও দক্ষতা দেখা হয়, সিজিপিএ নয়।"],"B9"],
  ["Paying yourself? Check before you pay","নিজের খরচে? টাকা দেওয়ার আগে যাচাই",["Check the university's own CGPA rule and full cost; use only BMET-registered agents for work. Why: fake promises cost families a lot.","বিশ্ববিদ্যালয়ের নিজের সিজিপিএ শর্ত ও মোট খরচ দেখুন; কাজের জন্য শুধু বিএমইটি নিবন্ধিত এজেন্ট। কারণ: ভুয়া প্রতিশ্রুতিতে অনেক পরিবার টাকা হারায়।"],"B3"]]},
 govt:{n:["Govt job in Bangladesh","দেশে সরকারি চাকরি"],items:[
  ["Prepare for BCS","বিসিএসের প্রস্তুতি নিন",["Why: BCS has no CGPA cut-off; only the exam results decide.","কারণ: বিসিএসে সিজিপিএর সীমা নেই; শুধু পরীক্ষার ফলেই নির্বাচন।"],"B13"],
  ["Aim for grade 10 or above, not below","গ্রেড ১০ বা তার ওপরে লক্ষ্য রাখুন, নিচে নয়",["Grade 10 starts at about ৳32,000 basic. Why: posts below grade 10 pay less (grade 13 about ৳24,000) and promotions are slow and few, so they rarely lead anywhere. Take one only as a short stop while you keep sitting for BCS and grade 9–10 exams.","গ্রেড ১০-এ মূল বেতন প্রায় ৩২,০০০ টাকা থেকে শুরু। কারণ: গ্রেড ১০-এর নিচের পদে বেতন কম (গ্রেড ১৩ প্রায় ২৪,০০০ টাকা) আর পদোন্নতি ধীর ও কম, তাই এগুলো সাধারণত কোথাও নিয়ে যায় না। নিলে শুধু সাময়িকভাবে নিন, আর বিসিএস ও গ্রেড ৯–১০ পরীক্ষা দিতে থাকুন।"],"S19"],
  ["Read the result rule first","আগে ফলাফলের শর্ত পড়ুন",["Some bank circulars ask for first class. Why: skip those and save your preparation time.","কিছু ব্যাংকের বিজ্ঞপ্তিতে প্রথম শ্রেণি চায়। কারণ: সেগুলো বাদ দিলে প্রস্তুতির সময় বাঁচে।"],"S21"]]},
 pvt:{n:["Private job in Bangladesh","দেশে বেসরকারি চাকরি"],items:[
  ["Take any first job, switch after 1–2 years","যেকোনো প্রথম চাকরি, ১–২ বছর পর বদল",["Why: once you have experience, most private employers care much less about CGPA, and changing jobs is often a quicker way to a pay rise.","কারণ: অভিজ্ঞতা হলে বেশিরভাগ বেসরকারি নিয়োগকারী সিজিপিএ অনেক কম দেখেন, আর চাকরি বদল প্রায়ই বেতন বাড়ানোর দ্রুত উপায়।"],"B12"],
  ["Choose skill-based roles","দক্ষতাভিত্তিক পদ বাছুন",["Sales, digital marketing, software, supply chain. Why: they judge your work, not your transcript.","সেলস, ডিজিটাল মার্কেটিং, সফটওয়্যার, সাপ্লাই চেইন। কারণ: এখানে কাজ দেখা হয়, ট্রান্সক্রিপ্ট নয়।"],"B12"],
  ["Add MBA, PGD or CA/ACCA while working","কাজের পাশাপাশি এমবিএ, পিজিডি বা সিএ/এসিসিএ",["Why: a newer qualification gives employers something more recent to judge you on than your old CGPA.","কারণ: নতুন যোগ্যতা নিয়োগকারীকে পুরোনো সিজিপিএর চেয়ে সাম্প্রতিক কিছু দেখায়।"],"B2"]]}
};
function lowAdvice(){
  const c=num(st.cg); const low=c!=null&&c<3;
  const head = c==null ? L(["Enter your CGPA above. Then pick a tab.","ওপরে সিজিপিএ লিখুন, তারপর একটি ট্যাব বাছুন।"])
    : fill(low?["CGPA {c}: a few jobs ask for 3.00+, but most do not. Pick a tab:","সিজিপিএ {c}: কিছু চাকরিতে ৩.০০+ লাগে, বেশিরভাগে লাগে না। একটি ট্যাব বাছুন:"]:["CGPA {c} is first class. Not getting a job? Pick a tab:","সিজিপিএ {c} প্রথম শ্রেণি। চাকরি পাচ্ছেন না? একটি ট্যাব বাছুন:"],{c:N(c.toFixed(2))});
  const tabs=`<div class="seg subtabs" role="group">`+Object.keys(LOWT).map(k=>`<button type="button" data-lt="${k}" aria-pressed="${st.lt===k}">${esc(L(LOWT[k].n))}</button>`).join("")+`</div>`;
  const bcs=L(["Sit for BCS. No CGPA limit, age 21–32, unlimited tries. Only your exam marks count.","বিসিএস দিন। সিজিপিএর সীমা নেই, বয়স ২১–৩২, যতবার খুশি। শুধু পরীক্ষার নম্বর গোনা হয়।"]);
  return `<p class="lowhead ${low?"warn":""}">${esc(head)}</p><div class="bcsbox"><b>BCS</b><span>${esc(bcs)}</span>${bxSrc("B13")}</div>${tabs}<ol class="lowlist">`+LOWT[st.lt].items.map(([en,bn,d,s])=>`<li><b>${esc(st.lang==="bn"?bn:en)}</b><span>${esc(L(d))}</span>${bxSrc(s)}</li>`).join("")+`</ol>`;
}
function bxSrc(k){ const s=SRC2[k]||SRC[k]; return s?`<a class="src" href="${s.u}" target="_blank" rel="noopener">${t("src")}: ${esc(s.t)}</a>`:""; }
function renderBeyond(){
  document.querySelectorAll("#by-tabs button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.bt===st.bt));
  if(st.bt==="low"){ $("#by-body").innerHTML=`<div class="lowbox">${lowAdvice()}</div>`; return; }
  const B=BEYOND[st.bt];
  const tree=`<div class="tree"><span class="node root">${esc(L(B.root))}</span><ul>${B.tree.map((n,i)=>bxNode(st.bt,st.bt+"."+i,n)).join("")}</ul></div>`;
  let d=`<p class="muted">${t("tapBox")}</p>`;
  if(st.bsel&&st.bsel.startsWith(st.bt)){ const n=bxFind(st.bsel), I=n[3];
    d=`<h3>${esc(st.lang==="bn"?n[1]:n[0])}</h3><p><b>${t("req")}:</b> ${esc(L(I.req))}</p><p><b>${t("payL")}:</b> ${esc(L(I.pay))}</p>${bxSrc(I.s)}`; }
  $("#by-body").innerHTML=`<div class="mapgrid"><div>${tree}</div><aside><div class="ticket">${d}</div></aside></div>`;
}

/* ---- career tracks ---- */
st.tr="army"; st.tsel=null; st.topen=new Set();
function mkt(m){ const x=m&&PVT_MARKET[m]; if(!x||!x[2]) return ""; return fill(["Bdjobs entry-level ads: about ৳{a}k–{b}k a month ({n} ads stated pay{w}).","বিডিজবসের এন্ট্রি লেভেল বিজ্ঞপ্তি: মাসে প্রায় {a}–{b} হাজার টাকা ({n}টি বিজ্ঞপ্তিতে বেতন ছিল{w})।"],{a:N(Math.round(x[2]/1000)),b:N(Math.round(x[3]/1000)),n:N(x[1]),w:x[1]<3?L(["; too few to rely on","; নির্ভর করার জন্য খুবই কম"]):""}); }
function trNode(path,n){ const [en,bn,kids]=n; const lab=st.lang==="bn"?bn:en;
  if(kids){ const open=st.topen.has(path); return li(`<button type="button" class="node br tbr" style="background:var(--accent)" data-tf="${path}" aria-expanded="${open}">${esc(lab)}<span class="car" aria-hidden="true">${open?"−":"+"}</span></button>`, open?kids.map((k,i)=>trNode(path+"."+i,k)).join(""):""); }
  return li(`<button type="button" class="node role${st.tsel===path?" on":""}" style="--lc:var(--green)" data-ts="${path}">${esc(lab)}</button>`); }
function trFind(path){ const [tab,...ix]=path.split("."); let n=null, arr=TRACKS[tab].tree; for(const i of ix){ n=arr[+i]; arr=n[2]||[]; } return n; }
function renderTracks(){
  $("#tr-tabs").innerHTML=Object.keys(TRACKS).map(k=>`<button type="button" data-tt="${k}" aria-pressed="${st.tr===k}">${esc(L([TRACKS[k].en,TRACKS[k].bn]))}</button>`).join("");
  const T0=TRACKS[st.tr];
  const tree=`<div class="tree"><span class="node root">${esc(L([T0.en,T0.bn]))}</span><ul>${T0.tree.map((n,i)=>trNode(st.tr+"."+i,n)).join("")}</ul></div>`;
  let d=`<p class="muted">${t("tapBox")}</p>`;
  if(st.tsel&&st.tsel.split(".")[0]===st.tr){ const n=trFind(st.tsel), I0=n[3]; const pay=[L(I0.pay),mkt(I0.m)].filter(Boolean).join(" ");
    d=`<h3>${esc(st.lang==="bn"?n[1]:n[0])}</h3><p><b>${t("req")}:</b> ${esc(L(I0.req))}</p>${pay?`<p><b>${t("payL")}:</b> ${esc(pay)}</p>`:""}${bxSrc(I0.s)}${I0.m?bxSrc("B12"):""}`; }
  $("#tr-body").innerHTML=`<div class="mapgrid"><div>${tree}</div><aside><div class="ticket">${d}</div></aside></div>`;
}
function goTrack(k){ if(!TRACKS[k]){ const el=$("#"+k); if(el) el.scrollIntoView({behavior:smooth(),block:"start"}); return; } st.tr=k; st.topen=new Set(TRACKS[k].tree.map((_,i)=>k+"."+i)); st.tsel=null; renderTracks(); $("#tracks").scrollIntoView({behavior:smooth(),block:"start"}); }
/* ---- result-based guide ---- */
function renderGuide(){
  const s=num(st.ssc), h=num(st.hsc), c=num(st.cg); const out=[];
  const tot=(s!=null&&h!=null)?s+h:null;
  const G=(ok,en,bn)=>`<div class="gate"><b class="${ok?"ok":"no"}">${ok?"✓":"✗"}</b><span>${esc(L([en,bn]))}</span></div>`;
  let gates="";
  if(tot!=null){
    const army=(s>=5&&h>=4.5)||(h>=5&&s>=4.5);
    gates=G(army,"Army BMA Long Course: needs 5.00 in one and 4.50+ in the other","সেনাবাহিনী বিএমএ লং কোর্স: একটিতে ৫.০০, অন্যটিতে ৪.৫০+ লাগে")+
      G(tot>=8.5,`MBBS/BDS: SSC + HSC must be 8.5+ (yours ${tot.toFixed(2)})`,`এমবিবিএস/বিডিএস: এসএসসি + এইচএসসি ৮.৫+ লাগে (আপনার ${N(tot.toFixed(2))})`)+
      G(tot>=8,"CA right after HSC: SSC + HSC 8.0+ (or start after bachelor's)","এইচএসসির পরই সিএ: এসএসসি + এইচএসসি ৮.০+ (না হলে স্নাতকের পর)");
  }
  let band, recs;
  if(c==null){ band=L(["Put your CGPA in above, and I'll suggest where to focus. If you've given your SSC/HSC results, the checks below already use them.","ওপরে আপনার সিজিপিএ দিন, আমি বলে দিচ্ছি কোথায় মনোযোগ দেবেন। এসএসসি/এইচএসসির রেজাল্ট দিয়ে থাকলে নিচের যাচাইগুলো সেটা দিয়েই করা হয়েছে।"]); recs=[]; }
  else if(c>=3.5){ band=fill(["CGPA {c}: that's strong, well done! Use it where results matter most.","সিজিপিএ {c}: বেশ ভালো, অভিনন্দন! যেখানে রেজাল্ট সবচেয়ে বেশি গুরুত্ব পায়, সেখানে এটা কাজে লাগান।"],{c:N(c.toFixed(2))});
    recs=[["teach","University lecturer and teaching","বিশ্ববিদ্যালয় প্রভাষক ও শিক্ষকতা","Top results are the first filter here.","এখানে সেরা ফলই প্রথম ছাঁকনি।"],["govt","Bangladesh Bank, state banks, BCS","বাংলাদেশ ব্যাংক, রাষ্ট্রীয় ব্যাংক, বিসিএস","No result rule will stop you.","কোনো ফলাফলের শর্ত আপনাকে আটকাবে না।"],["mnc","Multinational trainee programmes","বহুজাতিক ট্রেইনি প্রোগ্রাম","Your result gets you to the test; skills win it.","ফল আপনাকে পরীক্ষা পর্যন্ত নেবে; দক্ষতা জেতাবে।"]]; }
  else if(c>=3){ band=fill(["CGPA {c}: first class. Almost every circular is open to you, so aim high!","সিজিপিএ {c}: প্রথম শ্রেণি। প্রায় সব বিজ্ঞপ্তিতেই আবেদন করতে পারবেন, তাই বড় লক্ষ্য রাখুন!"],{c:N(c.toFixed(2))});
    recs=[["govt","BCS and govt banks","বিসিএস ও সরকারি ব্যাংক","First class clears the result rules.","প্রথম শ্রেণিতে ফলাফলের শর্ত পূরণ হয়।"],["bank","Private banks and CA","বেসরকারি ব্যাংক ও সিএ","Steady growth, clear promotion path.","স্থির উন্নতি, পদোন্নতির পরিষ্কার পথ।"],["mnc","Multinationals","বহুজাতিক","Apply to trainee programmes in your final year.","শেষ বর্ষেই ট্রেইনি প্রোগ্রামে আবেদন করুন।"]]; }
  else if(c>=2.25){ band=fill(["CGPA {c}: second class. A few bank and university-teaching jobs want first class, but don't worry, most doors are still open to you.","সিজিপিএ {c}: দ্বিতীয় শ্রেণি। হাতে গোনা কিছু ব্যাংক আর বিশ্ববিদ্যালয়ের শিক্ষকতায় প্রথম শ্রেণি চায়, তবে চিন্তা করবেন না, বেশিরভাগ দরজাই আপনার জন্য খোলা।"],{c:N(c.toFixed(2))});
    recs=[["govt","BCS (no CGPA score)","বিসিএস (সিজিপিএর নম্বর নেই)","Only exam marks count.","শুধু পরীক্ষার নম্বর গোনা হয়।"],["skill","Skills-first work","দক্ষতাভিত্তিক কাজ","They hire on proof, not grades.","গ্রেড নয়, প্রমাণ দেখে নেয়।"],["ind","Sales, garments, supply chain","সেলস, পোশাক, সাপ্লাই চেইন","Performance raises pay fast.","পারফরম্যান্সে বেতন দ্রুত বাড়ে।"],["bank","CA / ACCA","সিএ / এসিসিএ","Papers passed matter, not CGPA.","সিজিপিএ নয়, পেপার পাস গুরুত্বপূর্ণ।"]]; }
  else { band=fill(["CGPA {c}: below second class. That's okay. It's not where you end, it's where you start. From here, skills and exams will carry you.","সিজিপিএ {c}: দ্বিতীয় শ্রেণির নিচে। ভেঙে পড়বেন না, এটা শেষ নয়, এখান থেকেই শুরু। এখন দক্ষতা আর পরীক্ষাই আপনাকে এগিয়ে নেবে।"],{c:N(c.toFixed(2))});
    recs=[["skill","Skills-first work and freelancing","দক্ষতাভিত্তিক কাজ ও ফ্রিল্যান্সিং","Your work is the CV.","আপনার কাজই আপনার সিভি।"],["ind","Sales and field jobs","সেলস ও মাঠের কাজ","Targets matter, not transcripts.","ট্রান্সক্রিপ্ট নয়, টার্গেট গুরুত্বপূর্ণ।"],["govt","BCS, if the circular accepts your class","বিসিএস, বিজ্ঞপ্তি আপনার শ্রেণি গ্রহণ করলে","Read the result rule first.","আগে ফলাফলের শর্ত পড়ুন।"]]; }
  const skills=L(["Employers that weigh skills and experience over CGPA: software companies (coding tests), startups, digital agencies, sales and FMCG distribution, garments merchandising, call centres, NGOs (field experience), and freelancing.","যারা সিজিপিএর চেয়ে দক্ষতা ও অভিজ্ঞতা বেশি দেখে: সফটওয়্যার কোম্পানি (কোডিং টেস্ট), স্টার্টআপ, ডিজিটাল এজেন্সি, সেলস ও এফএমসিজি ডিস্ট্রিবিউশন, পোশাকের মার্চেন্ডাইজিং, কল সেন্টার, এনজিও (মাঠের অভিজ্ঞতা) এবং ফ্রিল্যান্সিং।"]);
  $("#guide-body").innerHTML=`<p class="gband">${esc(band)}</p>${gates?`<div class="gates">${gates}</div>`:""}`+
    (recs.length?`<ul class="glist">${recs.map(([k,en,bn,we,wb])=>`<li><b>${esc(L([en,bn]))}</b><div class="muted">${esc(L([we,wb]))}</div><button type="button" class="golink" data-gt="${k}">${t("openTr")} →</button></li>`).join("")}</ul>`:"")+
    `<p class="lowhead">${esc(skills)} <button type="button" class="golink" data-gt="skill">${t("openTr")} →</button></p>`;
}
function renderAbroad(){
  $("#ab-sub").textContent=fill(["Official pages only, no agents needed. Checked {d}; updated every two months.","শুধু অফিসিয়াল পেজ, এজেন্ট লাগে না। যাচাই {d}; প্রতি দুই মাসে হালনাগাদ।"],{d:ABROAD_DATE});
  $("#ab-list").innerHTML=ABROAD.map(([en,bn,de,db,u])=>`<a href="${u}" target="_blank" rel="noopener"><b>${esc(L([en,bn]))}</b><span>${esc(L([de,db]))}</span></a>`).join("");
}

/* ---- Start here: 3-step guide (one question per screen, progress bar, Back) ---- */
st.w={stage:null,like:null,place:null};
const WSTAGE=[["school","🎒","In school (class 1–10)","স্কুলে পড়ি (১ম–১০ম শ্রেণি)"],["after10","📝","Finished SSC / O Level / Dakhil","এসএসসি / ও লেভেল / দাখিল শেষ"],["college","📘","In college (HSC / A Level / Alim)","কলেজে পড়ি (এইচএসসি / এ লেভেল / আলিম)"],["uni","🎓","At university or graduated","বিশ্ববিদ্যালয়ে পড়ি বা পাস করেছি"],["dip","🛠️","Diploma / polytechnic","ডিপ্লোমা / পলিটেকনিক"]];
const WLIKE={
 help:["❤️","Helping sick people","অসুস্থ মানুষকে সাহায্য","health",["Doctor","Nurse","Pharmacist"],["ডাক্তার","নার্স","ফার্মাসিস্ট"],["Take the Science group. Biology, Chemistry and Physics are a must.","বিজ্ঞান বিভাগ নিন। জীববিজ্ঞান, রসায়ন ও পদার্থবিজ্ঞান অবশ্যই।"]],
 uniform:["🎖️","Uniform and serving the country","ইউনিফর্ম পরে দেশের সেবা","army",["Army officer","Navy officer","Air Force pilot"],["সেনা কর্মকর্তা","নৌ কর্মকর্তা","বিমানবাহিনীর পাইলট"],["Get top GPA in SSC and HSC (army asks 5.00 in one, 4.50+ in the other). Stay fit and play sports.","এসএসসি ও এইচএসসিতে সেরা জিপিএ রাখুন (সেনাবাহিনীতে একটিতে ৫.০০, অন্যটিতে ৪.৫০+ লাগে)। শরীর ফিট রাখুন, খেলাধুলা করুন।"]],
 govt:["🏛️","Working for the government","সরকারের হয়ে কাজ","govt",["BCS cadre (admin, police, foreign service)","Bangladesh Bank officer","Government officer"],["বিসিএস ক্যাডার (প্রশাসন, পুলিশ, পররাষ্ট্র)","বাংলাদেশ ব্যাংক কর্মকর্তা","সরকারি কর্মকর্তা"],["Any group works. Read newspapers; learn Bangla, English, maths and general knowledge well.","যেকোনো বিভাগে চলবে। পত্রিকা পড়ুন; বাংলা, ইংরেজি, গণিত ও সাধারণ জ্ঞান ভালো করে শিখুন।"]],
 numbers:["🔢","Numbers and money","সংখ্যা ও টাকাপয়সা","bank",["Banker","Chartered Accountant (CA)","Finance officer"],["ব্যাংকার","চার্টার্ড অ্যাকাউন্ট্যান্ট (সিএ)","ফিন্যান্স অফিসার"],["Take Business Studies (or Science). Be strong in maths and accounting.","ব্যবসায় শিক্ষা (বা বিজ্ঞান) নিন। গণিত ও হিসাববিজ্ঞানে ভালো হোন।"]],
 machines:["💻","Computers and machines","কম্পিউটার ও যন্ত্র","tech",["Software engineer","Engineer","Network engineer"],["সফটওয়্যার ইঞ্জিনিয়ার","প্রকৌশলী","নেটওয়ার্ক ইঞ্জিনিয়ার"],["Take Science. Be strong in maths, physics and ICT. Start simple coding early.","বিজ্ঞান বিভাগ নিন। গণিত, পদার্থ ও আইসিটিতে ভালো হোন। আগে থেকেই সহজ কোডিং শুরু করুন।"]],
 rules:["⚖️","Rules and fairness","নিয়মকানুন ও ন্যায়বিচার","law",["Lawyer","Judge","Legal officer"],["আইনজীবী","বিচারক","লিগ্যাল অফিসার"],["Any group works. Read a lot; practise writing and speaking in Bangla and English.","যেকোনো বিভাগে চলবে। বেশি পড়ুন; বাংলা ও ইংরেজিতে লেখা ও বলার অভ্যাস করুন।"]],
 teach:["📚","Teaching others","অন্যকে পড়ানো","teach",["School teacher","College teacher","University teacher"],["স্কুল শিক্ষক","কলেজ শিক্ষক","বিশ্ববিদ্যালয় শিক্ষক"],["Pick the subject you love and get good results in it. Practise by teaching friends.","যে বিষয় ভালোবাসেন সেটি নিন, তাতে ভালো ফল করুন। বন্ধুদের পড়িয়ে অভ্যাস করুন।"]],
 talk:["🗣️","Talking, selling, leading","কথা বলা, বিক্রি, নেতৃত্ব","mnc",["Multinational manager","Sales manager","Brand manager"],["বহুজাতিক কোম্পানির ম্যানেজার","সেলস ম্যানেজার","ব্র্যান্ড ম্যানেজার"],["Any group works. Speak good English; join clubs and debate; lead school events.","যেকোনো বিভাগে চলবে। ভালো ইংরেজি বলুন; ক্লাব ও বিতর্কে যোগ দিন; স্কুলের অনুষ্ঠানে নেতৃত্ব দিন।"]],
 create:["🎨","Drawing, writing, videos","আঁকা, লেখা, ভিডিও","skill",["Designer","Content creator","Digital marketer"],["ডিজাইনার","কনটেন্ট ক্রিয়েটর","ডিজিটাল মার্কেটার"],["Any group works. Make something every week and keep it in a portfolio.","যেকোনো বিভাগে চলবে। প্রতি সপ্তাহে কিছু বানান, পোর্টফোলিওতে জমা রাখুন।"]],
 people:["🤝","Helping society","সমাজের সেবা","ngo",["NGO officer","Researcher","Development worker"],["এনজিও কর্মকর্তা","গবেষক","উন্নয়নকর্মী"],["Any group works. Volunteer; learn English and basic data skills.","যেকোনো বিভাগে চলবে। স্বেচ্ছাসেবা করুন; ইংরেজি ও সাধারণ ডেটা দক্ষতা শিখুন।"]]
};
const WREAL={"help": ["Honestly: MBBS takes 5 years plus a year of internship, and becoming a specialist takes years more. It suits people who truly care for patients, not only the title.", "সত্যি কথা বলি: এমবিবিএসে ৫ বছর, তারপর ১ বছর ইন্টার্নশিপ, বিশেষজ্ঞ হতে আরও কয়েক বছর। শুধু পদবির জন্য নয়, যারা সত্যিই রোগীর যত্ন নিতে চান তাদের জন্য।"], "uniform": ["Honestly: marks get you to the door, but fitness, confidence and the ISSB interview decide. Life is disciplined and you can be posted anywhere in the country.", "সত্যি কথা বলি: নম্বর দরজা পর্যন্ত নেয়, কিন্তু শারীরিক সক্ষমতা, আত্মবিশ্বাস আর আইএসএসবি ইন্টারভিউ সিদ্ধান্ত নেয়। জীবন শৃঙ্খলাবদ্ধ, দেশের যেকোনো জায়গায় পোস্টিং হতে পারে।"], "govt": ["Honestly: many BCS candidates prepare for years. Don't put life on hold; take a job while you prepare, so one bad year doesn't break you.", "সত্যি কথা বলি: অনেকে বছরের পর বছর বিসিএসের প্রস্তুতি নেন। জীবন থামিয়ে রাখবেন না; প্রস্তুতির পাশাপাশি চাকরি করুন, যাতে একটা খারাপ বছর আপনাকে ভেঙে না দেয়।"], "numbers": ["Honestly: CA is hard and many take longer than planned to pass every paper, but qualified accountants are always in demand.", "সত্যি কথা বলি: সিএ কঠিন, অনেকের সব পেপার পাস করতে পরিকল্পনার চেয়ে বেশি সময় লাগে, তবে যোগ্য হিসাববিদদের চাহিদা সবসময় থাকে।"], "machines": ["Honestly: in software, what you can build matters more than your university's name. Small projects done early beat certificates.", "সত্যি কথা বলি: সফটওয়্যারে বিশ্ববিদ্যালয়ের নামের চেয়ে আপনি কী বানাতে পারেন সেটাই বড়। আগেভাগে করা ছোট প্রজেক্ট সার্টিফিকেটের চেয়ে কাজের।"], "rules": ["Honestly: new lawyers earn little for the first few years. Income grows as clients start trusting you, so patience is part of the job.", "সত্যি কথা বলি: নতুন আইনজীবীদের প্রথম কয়েক বছর আয় কম। মক্কেলের আস্থা বাড়লে আয় বাড়ে, তাই ধৈর্য এই পেশার অংশ।"], "teach": ["Honestly: teaching pay starts modest, but it is stable and respected. Good results and a master's open college and university doors later.", "সত্যি কথা বলি: শিক্ষকতায় শুরুর বেতন সাধারণ, তবে স্থিতিশীল ও সম্মানের। ভালো ফল ও মাস্টার্স থাকলে পরে কলেজ ও বিশ্ববিদ্যালয়ের দরজা খোলে।"], "talk": ["Honestly: sales and trainee jobs are tough at first, with monthly targets, but people who do well can move up quickly because their results are easy to see.", "সত্যি কথা বলি: সেলস ও ট্রেইনি চাকরি শুরুতে কঠিন, প্রতি মাসে টার্গেট থাকে, কিন্তু যারা ভালো করেন তাদের ফলাফল সহজে চোখে পড়ে, তাই দ্রুত ওপরে উঠতে পারেন।"], "create": ["Honestly: clients judge your work, not your certificate. First jobs may pay little; good reviews and a strong portfolio raise your rate.", "সত্যি কথা বলি: ক্লায়েন্ট সার্টিফিকেট নয়, কাজ দেখে। প্রথম কাজগুলোতে আয় কম হতে পারে; ভালো রিভিউ ও পোর্টফোলিও আপনার রেট বাড়ায়।"], "people": ["Honestly: NGO jobs are often tied to projects with fixed end dates. Build skills that let you move from one project to the next.", "সত্যি কথা বলি: এনজিওর চাকরি প্রায়ই নির্দিষ্ট মেয়াদের প্রকল্পের সঙ্গে যুক্ত। এমন দক্ষতা গড়ুন যাতে এক প্রকল্প থেকে আরেকটিতে যেতে পারেন।"]};
function wPlan(){
  const {stage,like,place}=st.w, W=WLIKE[like], bn=st.lang==="bn"; const steps=[];
  if(stage==="school") steps.push(L(W[6]), L(["Focus on SSC and HSC results. In Bangladesh, good results open more doors later.","এসএসসি ও এইচএসসির ফলে মন দিন। বাংলাদেশে ভালো ফল পরে অনেক দরজা খুলে দেয়।"]));
  if(stage==="after10") steps.push(L(["Now choose your HSC / A Level / Alim group. ","এখন এইচএসসি / এ লেভেল / আলিমের বিভাগ বাছুন। "])+L(W[6]), L(["O Level / IGCSE students: get the Education Board equivalence certificate before applying to colleges and universities.","ও লেভেল / আইজিসিএসই শিক্ষার্থীরা: কলেজ ও বিশ্ববিদ্যালয়ে আবেদনের আগে শিক্ষা বোর্ডের সমতা সনদ নিন।"]), L(["Results still matter: aim high in HSC / A Level.","ফল এখনো গুরুত্বপূর্ণ: এইচএসসি / এ লেভেলে ভালো ফলের লক্ষ্য রাখুন।"]));
  if(stage==="college") steps.push(L(W[6]), L(["Prepare for the university admission test in the subject that leads to this job.","যে বিষয় এই পেশায় নিয়ে যায়, সেই বিষয়ে বিশ্ববিদ্যালয় ভর্তি পরীক্ষার প্রস্তুতি নিন।"]));
  if(stage==="uni") steps.push(L(["Open the career map and check the exact rules and pay.","ক্যারিয়ার ম্যাপ খুলে সঠিক শর্ত ও বেতন দেখুন।"]), L(["Do an internship and learn the skills job ads ask for.","ইন্টার্নশিপ করুন, আর চাকরির বিজ্ঞাপনে যে দক্ষতা চায় তা শিখুন।"]), L(["Low CGPA? It is not the end. See the Low CGPA plan.","সিজিপিএ কম? শেষ নয়। সিজিপিএ কম অংশটি দেখুন।"]));
  if(stage==="dip") steps.push(L(["Work as a diploma engineer or technician, or study further for a BSc (DUET or an evening BSc).","ডিপ্লোমা ইঞ্জিনিয়ার বা টেকনিশিয়ান হিসেবে কাজ করুন, বা বিএসসি পড়ুন (ডুয়েট বা সান্ধ্য বিএসসি)।"]));
  if(place==="abroad") steps.push(L(["Learn English well (IELTS) or another language (Japanese, Korean, German).","ভালো ইংরেজি শিখুন (আইইএলটিএস) বা অন্য ভাষা (জাপানি, কোরিয়ান, জার্মান)।"]), L(["Keep results high and apply for fully funded scholarships. Never pay fake agents.","ভালো ফল রাখুন আর সম্পূর্ণ অর্থায়িত বৃত্তিতে আবেদন করুন। ভুয়া এজেন্টকে টাকা দেবেন না।"]));
  else steps.push(L(["Staying in Bangladesh: try both government (BCS) and private jobs, so you have two chances.","দেশে থাকলে: সরকারি (বিসিএস) ও বেসরকারি দুটোই চেষ্টা করুন, তাহলে দুটি সুযোগ থাকবে।"]));
  const jobs=(bn?W[5]:W[4]).map(j=>`<span class="wjob">${esc(j)}</span>`).join("");
  const btns=[`<button type="button" class="wbtn" data-gt="${stage==="dip"?"tech":W[3]}">${esc(L(["Show me the full path","পুরো পথটা দেখান"]))} →</button>`];
  if(stage==="dip"||place==="abroad") btns.push(`<button type="button" class="wbtn alt" data-wgo="skill">${esc(L(["Skills training & work abroad","দক্ষতা প্রশিক্ষণ ও বিদেশে কাজ"]))} →</button>`);
  if(stage==="dip") btns.push(`<button type="button" class="wbtn alt" data-wgo="dip">${esc(L(["Diploma routes","ডিপ্লোমার পথ"]))} →</button>`);
  if(stage==="uni") btns.push(`<button type="button" class="wbtn alt" data-wgo="low">${esc(L(["Low CGPA plan","সিজিপিএ কম হলে"]))} →</button>`);
  if(place==="abroad") btns.push(`<button type="button" class="wbtn alt" data-wgo="abroad">${esc(L(["Scholarships abroad","বিদেশে স্কলারশিপ"]))} →</button>`);
  const S=WSTAGE.find(x=>x[0]===stage);
  const picked=[S[1]+" "+L([S[2],S[3]]), W[0]+" "+L([W[1],W[2]]), place==="abroad"?"🌍 "+L(["Abroad","বিদেশে"]):"🇧🇩 "+L(["Bangladesh","বাংলাদেশে"])].map(x=>`<span class="wpick">${esc(x)}</span>`).join("");
  return `<div class="wres"><div class="wpicks">${picked}</div><h3>${esc(L(["Here's who you could become:","আপনি হয়ে উঠতে পারেন:"]))}</h3><div class="wjobs">${jobs}</div>
   <h3>${esc(L(["Your plan, one step at a time:","আপনার পরিকল্পনা, এক পা এক পা করে:"]))}</h3><ol class="wsteps">${steps.map(s=>`<li>${esc(s)}</li>`).join("")}</ol>
   <p class="wreal">💬 ${esc(L(WREAL[like]))}</p>${stage==="uni"?`<p class="wreal">💬 ${esc(L(["Honestly: many graduates wait for the perfect job and lose years. Those who move ahead usually take a first job, keep learning and keep applying.","সত্যি কথা বলি: অনেক স্নাতক নিখুঁত চাকরির অপেক্ষায় বছর হারান। যারা এগিয়ে যান তারা সাধারণত প্রথম চাকরিটা নেন, শিখতে থাকেন আর আবেদন চালিয়ে যান।"]))}</p>`:""}
   <div class="wbtns">${btns.join("")}</div></div>`;
}
function renderWizard(){
  const w=st.w, step=!w.stage?1:!w.like?2:!w.place?3:4;
  const bar=`<div class="wprog" aria-hidden="true"><span style="width:${Math.min(step-1,3)/3*100}%"></span></div><p class="wstep">${esc(step<4?fill(["Step {n} of 3","৩টির মধ্যে {n} নম্বর ধাপ"],{n:N(step)}):L(["Well done! Here is your plan","দারুণ! এই যে আপনার পরিকল্পনা"]))}</p>`;
  const card=(attr,k,ic,lab,on)=>`<button type="button" class="wcard" ${attr}="${k}" aria-pressed="${on}"><span class="wic">${ic}</span>${esc(lab)}</button>`;
  let body="";
  if(step===1) body=`<h3 class="wq">${esc(L(["First, tell me: where are you in your studies right now?","প্রথমে বলুন তো, পড়াশোনার কোন পর্যায়ে আছেন এখন?"]))}</h3><div class="wgrid">`+WSTAGE.map(([k,ic,en,bn])=>card("data-ws",k,ic,L([en,bn]),w.stage===k)).join("")+`</div>`;
  else if(step===2) body=`<h3 class="wq">${esc(L(["What do you enjoy the most? Pick the one that feels most like you.","কোন কাজটা করতে আপনার সবচেয়ে ভালো লাগে? যেটা মনের সঙ্গে সবচেয়ে বেশি মেলে, সেটাই বাছুন।"]))}</h3><div class="wgrid">`+Object.keys(WLIKE).map(k=>card("data-wl",k,WLIKE[k][0],L([WLIKE[k][1],WLIKE[k][2]]),false)).join("")+`</div>`;
  else if(step===3) body=`<h3 class="wq">${esc(L(["And finally, where do you see your future?","আর শেষ প্রশ্ন, নিজের ভবিষ্যৎটা কোথায় দেখতে চান?"]))}</h3><div class="wgrid two">`+card("data-wp","bd","🇧🇩",L(["In Bangladesh","বাংলাদেশে"]),false)+card("data-wp","abroad","🌍",L(["Abroad","বিদেশে"]),false)+`</div>`;
  else body=wPlan();
  const nav=step>1?`<div class="wnav"><button type="button" class="wbtn ghost" data-wback="1">← ${esc(L(["Back","পেছনে"]))}</button>${step===4?`<button type="button" class="wbtn ghost" data-wreset="1">↺ ${esc(L(["Start over","আবার শুরু করি"]))}</button>`:""}</div>`:"";
  $("#wiz-body").innerHTML=bar+body+nav;
}

/* ---- skills you have -> best matched jobs ---- */
st.skills=new Set();
const SKG=[["Office & everyday","অফিস ও দৈনন্দিন",["eng","excel","present","bangla","math","ga"]],
 ["Business & finance","ব্যবসা ও ফিন্যান্স",["acc","bank","erp","sales","hr","stats"]],
 ["Computers & data","কম্পিউটার ও ডেটা",["prog","dsa","git","sql","viz","test","net"]],
 ["Engineering & factory","প্রকৌশল ও কারখানা",["cad","d3","estim","power","maint","garment","ie","labour","gmp","lab"]],
 ["Marketing & creative","মার্কেটিং ও সৃজনশীল",["ads","seo","copy","adobe","folio","report"]],
 ["People, law, health, teaching","মানুষ, আইন, স্বাস্থ্য, শিক্ষা",["teach","counsel","clinical","draft","lawkn","proposal","field","survey","research","agro"]]];
function renderSkills(){
  $("#sk-pick").innerHTML=SKG.map(([en,bn,ks])=>`<div class="skg"><span class="lbl">${esc(L([en,bn]))}</span><div class="chips">${ks.filter(k=>SK[k]).map(k=>`<button type="button" class="chip" data-sk="${k}" aria-pressed="${st.skills.has(k)}">${esc(L(SK[k]))}</button>`).join("")}</div></div>`).join("");
}
function renderMatch(){
  const deg=lvl().cat==="deg"; const have=st.skills;
  const rows=Object.keys(ROLES).map(id=>{ const r=ROLES[id]; let s="na"; if(deg){ try{ s=status(id).s; }catch(_){} if(s==="blocked") return null; }
    const sk=[...new Set(r.sk||[])]; if(!sk.length) return null; const hit=sk.filter(k=>have.has(k)); return {id,sk,hit,s,sc:hit.length/sk.length+(s==="direct"?.15:0)}; }).filter(Boolean);
  let h;
  if(!have.size){ h=`<p class="muted">${esc(L(["Tap the skills you already have. Your best-fit jobs will appear here.","আপনার যে দক্ষতাগুলো আছে সেগুলোতে চাপ দিন। এখানে আপনার জন্য সবচেয়ে মানানসই চাকরি দেখাবে।"]))}</p>`; }
  else { const top=rows.filter(x=>x.hit.length).sort((a,b)=>b.sc-a.sc||b.hit.length-a.hit.length).slice(0,8);
    h=top.length?`<ol class="mlist">${top.map(x=>{ const r=ROLES[x.id], miss=x.sk.filter(k=>!have.has(k)).slice(0,3), pc=Math.round(x.hit.length/x.sk.length*100);
      return `<li><button type="button" class="mrow" data-show="${x.id}"><span class="mbar" style="--p:${pc}%"></span><b>${esc(nm(r))}</b><span class="mmeta">${esc(L([SECTORS[r.sec].en,SECTORS[r.sec].bn]))} · ${esc(payShort(x.id))} · ${N(pc)}% ${esc(L(["match","মিল"]))}</span>${miss.length?`<span class="mmiss">${esc(L(["Learn next:","এরপর শিখুন:"]))} ${esc(miss.map(k=>L(SK[k])).join(", "))}</span>`:""}</button></li>`; }).join("")}</ol>`
      :`<p class="muted">${esc(L(["No match yet. Add a few more skills.","এখনো মিল নেই। আরও কিছু দক্ষতা যোগ করুন।"]))}</p>`; }
  const ctx=deg?L(["Only jobs your degree and results allow are counted.","শুধু আপনার ডিগ্রি ও ফলাফলে যেসব চাকরি সম্ভব সেগুলোই গোনা হয়েছে।"]):"";
  $("#match-out").innerHTML=(ctx?`<p class="hint">${esc(ctx)}</p>`:"")+h;
}
/* ---- light / dark mode ---- */
function curTheme(){ const f=document.documentElement.dataset.theme; if(f) return f; return matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"; }
function renderTheme(){ const b=$("#theme-btn"); if(b) b.textContent=curTheme()==="dark"?t("thLight"):t("thDark"); }
(function(){ try{ const s=localStorage.getItem("bcgo-theme"); if(s) document.documentElement.dataset.theme=s; }catch(_){} })();

/* ---- public vs private universities ---- */
st.ut="cost"; st.uc="East West University";
const tk=n=>"৳"+N(Number(n).toLocaleString("en-IN"));
function progBlock(name){ const P=UPROG[name]; if(!P) return `<p class="hint">${esc(L(["We haven't verified this university's own programme list yet, so the degree menu shows what this type of university usually offers. Please check its website.","এই বিশ্ববিদ্যালয়ের নিজস্ব প্রোগ্রাম তালিকা এখনো যাচাই করা হয়নি, তাই ডিগ্রির তালিকায় এ ধরনের বিশ্ববিদ্যালয় সাধারণত যা দেয় তা দেখানো হচ্ছে। তাদের ওয়েবসাইটে মিলিয়ে নিন।"]))}</p>`;
  const sec=(h,arr)=>arr.length?`<h4>${esc(L(h))} <span class="cnt">${N(arr.length)}</span></h4><ul class="plist">${arr.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`:"";
  return `<div class="pbox"><h3>${esc(fill(["Programmes at {u}","{u}-এ যেসব প্রোগ্রাম আছে"],{u:name}))}</h3>${P.dept?`<p class="hint">${esc(L(["These are the university's departments. Most offer a 4-year Bachelor's (Honours) and a Master's; the degree title (BA, BSS, BBA, B.Sc., LLB, B.Pharm., BFA) depends on the faculty.","এগুলো বিশ্ববিদ্যালয়ের বিভাগ। বেশিরভাগ বিভাগে ৪ বছরের স্নাতক (সম্মান) আর মাস্টার্স আছে; ডিগ্রির নাম (বিএ, বিএসএস, বিবিএ, বিএসসি, এলএলবি, বি.ফার্ম, বিএফএ) অনুষদ অনুযায়ী হয়।"]))}</p>`:""}${P.note?`<p class="hint">${esc(L(P.note))}</p>`:""}${P.sub?`<p class="hint">${esc(L(["This university lists subject areas; see its site for exact degree titles.","এই বিশ্ববিদ্যালয় বিষয়ের ক্ষেত্র প্রকাশ করে; সঠিক ডিগ্রির নাম তাদের সাইটে দেখুন।"]))}</p>`:""}${sec(P.dept?["Departments","বিভাগ"]:["Bachelor's (usually 4 years)","স্নাতক (সাধারণত ৪ বছর)"],P.ug)}${sec(["Master's (usually 1–2 years)","স্নাতকোত্তর (সাধারণত ১–২ বছর)"],P.pg)}${bxSrc(P.s)}</div>`; }
function renderUnis(){
  document.querySelectorAll("#u-tabs button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.ut===st.ut));
  let h="";
  if(st.ut==="cost"){
    const card=(cls,ic,title,rows,src)=>`<div class="ucard ${cls}"><h3>${ic} ${esc(L(title))}</h3><dl>${rows.map(([k,v])=>`<dt>${esc(L(k))}</dt><dd>${esc(L(v))}</dd>`).join("")}</dl>${src.map(bxSrc).join("")}</div>`;
    h=`<div class="ucmp">`+card("pub","🏛️",["Public university","সরকারি বিশ্ববিদ্যালয়"],[
      [["Whole bachelor's (4 years)","পুরো স্নাতক (৪ বছর)"],["About ৳30,000–50,000 in total at universities like Dhaka, Jahangirnagar, Rajshahi, Chittagong, Khulna, Jagannath and Barishal","ঢাকা, জাহাঙ্গীরনগর, রাজশাহী, চট্টগ্রাম, খুলনা, জগন্নাথ ও বরিশালের মতো বিশ্ববিদ্যালয়ে সব মিলিয়ে প্রায় ৩০,০০০–৫০,০০০ টাকা"]],
      [["Why so low?","এত কম কেন?"],["The government pays most of it: about ৳1.67 lakh per student every year on average","খরচের বড় অংশ সরকার দেয়: গড়ে প্রতি শিক্ষার্থীর পেছনে বছরে প্রায় ১.৬৭ লাখ টাকা"]],
      [["Getting in","ভর্তি"],["Very competitive admission tests; seats are limited","কঠিন প্রতিযোগিতার ভর্তি পরীক্ষা; আসন সীমিত"]],
      [["Master's (1–2 years)","মাস্টার্স (১–২ বছর)"],["Usually low fees too; check the department","সাধারণত ফি কম; বিভাগে খোঁজ নিন"]]],["U1","U2"])+
     card("pvt","🏢",["Private university","বেসরকারি বিশ্ববিদ্যালয়"],[
      [["Whole bachelor's (4 years)","পুরো স্নাতক (৪ বছর)"],["Usually ৳8–12 lakh in Dhaka, up to about ৳15 lakh for subjects like pharmacy or engineering","ঢাকায় সাধারণত ৮–১২ লাখ টাকা, ফার্মেসি বা প্রকৌশলের মতো বিষয়ে প্রায় ১৫ লাখ পর্যন্ত"]],
      [["How it's charged","কীভাবে খরচ হয়"],["Per credit (often ৳5,500–8,800 a credit) plus admission and semester fees","প্রতি ক্রেডিট হিসাবে (প্রায়ই ক্রেডিটপ্রতি ৫,৫০০–৮,৮০০ টাকা), সঙ্গে ভর্তি ও সেমিস্টার ফি"]],
      [["Getting in","ভর্তি"],["Easier entry; many offer waivers and scholarships for good results","ভর্তি তুলনামূলক সহজ; ভালো রেজাল্টে অনেকে ওয়েভার ও স্কলারশিপ দেয়"]],
      [["Master's (MBA etc.)","মাস্টার্স (এমবিএ ইত্যাদি)"],["About ৳6,000–7,200 per credit at large universities","বড় বিশ্ববিদ্যালয়ে ক্রেডিটপ্রতি প্রায় ৬,০০০–৭,২০০ টাকা"]]],["U1","U4","U5","U6"])+`</div>`+
     `<p class="wreal">💬 ${esc(L(["Honestly: a public seat saves your family lakhs, so the admission test is worth your best effort. If you go private, ask about waivers before you pay, and remember living costs (housing, food, transport) come on top of these figures.","সত্যি কথা বলি: সরকারি বিশ্ববিদ্যালয়ে একটা আসন পরিবারের কয়েক লাখ টাকা বাঁচায়, তাই ভর্তি পরীক্ষায় সর্বোচ্চ চেষ্টা করুন। বেসরকারিতে গেলে টাকা দেওয়ার আগে ওয়েভারের কথা জিজ্ঞেস করুন, আর মনে রাখবেন থাকা-খাওয়া-যাতায়াতের খরচ এই হিসাবের বাইরে।"]))}</p>`+
     `<h3 class="uh3">${esc(L(["Private university fees, programme by programme","বেসরকারি বিশ্ববিদ্যালয়ের ফি, প্রোগ্রাম অনুযায়ী"]))}</h3><div class="seg subtabs" role="group">`+Object.keys(UCOST).map(k=>`<button type="button" data-uc="${esc(k)}" aria-pressed="${st.uc===k}">${esc(k)}</button>`).join("")+`</div>`;
    const U=UCOST[st.uc];
    h+=`<div class="utable"><table><thead><tr><th>${esc(L(["Programme","প্রোগ্রাম"]))}</th><th>${esc(L(["Duration","সময়"]))}</th><th>${esc(U.full?L(["Estimated total","আনুমানিক মোট খরচ"]):L(["Tuition per credit","ক্রেডিটপ্রতি টিউশন"]))}</th></tr></thead><tbody>`+
      U.rows.map(([p,cr,tot,pc])=>`<tr><td>${esc(p)}${cr?` <span class="muted">(${N(cr)} ${esc(L(["credits","ক্রেডিট"]))})</span>`:""}</td><td>${esc(/MBA|Master/.test(p)?L(["1–2 years","১–২ বছর"]):L(["4 years","৪ বছর"]))}</td><td><b>${tot?tk(tot):tk(pc)}</b></td></tr>`).join("")+`</tbody></table></div>`+
      `<p class="hint">${esc(U.full?L(["Includes tuition, lab, activity and admission fees. Waivers can lower it.","টিউশন, ল্যাব, অ্যাক্টিভিটি ও ভর্তি ফি মিলিয়ে। ওয়েভার পেলে কমে।"]):L(["This university publishes a per-credit rate, not a full total. A 4-year bachelor's is usually 130–140 credits, so multiply, then add admission and semester fees.","এই বিশ্ববিদ্যালয় পুরো খরচ নয়, ক্রেডিটপ্রতি হার প্রকাশ করে। ৪ বছরের স্নাতকে সাধারণত ১৩০–১৪০ ক্রেডিট, তাই গুণ করে নিন, সঙ্গে ভর্তি ও সেমিস্টার ফি যোগ করুন।"]))}</p>${bxSrc(U.s)}`;
    h+=`<p class="hint">${esc(L(["About pass rates: the UGC does not publish official graduation or pass rates for each university, so we don't show any rather than guess.","পাসের হার নিয়ে: ইউজিসি প্রতিটি বিশ্ববিদ্যালয়ের আনুষ্ঠানিক পাস বা গ্র্যাজুয়েশনের হার প্রকাশ করে না, তাই আন্দাজে কোনো সংখ্যা দেখাচ্ছি না।"]))}</p>`;
  } else {
    const pub=st.ut==="pub"; const list=UNIS.filter(u=>pub?u.k==="pub":u.k==="pvt");
    const groups={}; list.forEach(u=>(groups[u.ty]=groups[u.ty]||[]).push(u));
    h=`<p class="muted">${esc(fill([pub?"{n} public universities approved by the UGC, grouped by type.":"{n} private universities approved by the UGC, grouped by type. ⚠ marks a UGC compliance note.",pub?"ইউজিসি অনুমোদিত {n}টি সরকারি বিশ্ববিদ্যালয়, ধরন অনুযায়ী সাজানো।":"ইউজিসি অনুমোদিত {n}টি বেসরকারি বিশ্ববিদ্যালয়, ধরন অনুযায়ী সাজানো। ⚠ চিহ্ন মানে ইউজিসির নোট আছে।"],{n:N(list.length)}))}</p>`+
      Object.keys(groups).map(ty=>`<details class="ugrp" ${Object.keys(groups).length<4?"open":""}><summary>${esc(L([UTYPE[ty].en,UTYPE[ty].bn]))} <span class="cnt">${N(groups[ty].length)}</span></summary><ul class="ulist">${groups[ty].map(u=>{const note=UNI_NOTE[u.n]; const c=UCOST[u.n]; return `<li>${esc(u.n)}${note?` <span class="unote" title="${esc(L(note))}">⚠ ${esc(L(note))}</span>`:""}${UPROG[u.n]?` <button type="button" class="golink" data-upgo="${esc(u.n)}">${esc(L(["Programmes","প্রোগ্রাম"]))}</button>`:""}${c?` <button type="button" class="golink" data-ucgo="${esc(u.n)}">${esc(L(["See fees","ফি দেখুন"]))}</button>`:""}</li>`;}).join("")}</ul></details>`).join("")+
      `<p class="hint">${esc(pub?L(["Typical cost: about ৳30,000–50,000 for the whole bachelor's at the major general universities. Specialised (medical, engineering) costs can differ.","সাধারণ খরচ: বড় সাধারণ বিশ্ববিদ্যালয়ে পুরো স্নাতকে প্রায় ৩০,০০০–৫০,০০০ টাকা। বিশেষায়িত (মেডিকেল, প্রকৌশল) বিশ্ববিদ্যালয়ে খরচ ভিন্ন হতে পারে।"]):L(["Typical cost: ৳8–12 lakh for a 4-year bachelor's in Dhaka, more for pharmacy and engineering.","সাধারণ খরচ: ঢাকায় ৪ বছরের স্নাতকে ৮–১২ লাখ টাকা, ফার্মেসি ও প্রকৌশলে বেশি।"]))}</p>${bxSrc(pub?"U7":"U8")}${bxSrc("U1")}`;
  }
  if(st.ut!=="cost"&&st.up) h+=progBlock(st.up);
  $("#u-body").innerHTML=h;
}

/* ---- skills training & work abroad ---- */
function renderSkillTrain(){
  const card=(ic,t1,body,src)=>`<div class="kcard"><h3>${ic} ${esc(L(t1))}</h3><p>${esc(L(body))}</p>${bxSrc(src)}</div>`;
  const trades=[["⚡","Electrical & house wiring","ইলেকট্রিক্যাল ও হাউস ওয়্যারিং"],["🔧","Welding & fabrication","ওয়েল্ডিং ও ফেব্রিকেশন"],["🚗","Driving & auto mechanics","ড্রাইভিং ও অটো মেকানিক্স"],["❄️","Refrigeration & air conditioning","রেফ্রিজারেশন ও এয়ারকন্ডিশনিং"],["🏗️","Civil construction","সিভিল কনস্ট্রাকশন"],["💻","IT support technician","আইটি সাপোর্ট টেকনিশিয়ান"],["📟","Electronics","ইলেকট্রনিক্স"],["⚙️","Machine tools operation","মেশিন টুলস অপারেশন"],["🧵","Garments","গার্মেন্টস"]];
  const dest=[["🇸🇦","Saudi Arabia","সৌদি আরব",750967],["🇶🇦","Qatar","কাতার",107397],["🇸🇬","Singapore","সিঙ্গাপুর",70004],["🇰🇼","Kuwait","কুয়েত",42657],["🇲🇻","Maldives","মালদ্বীপ",39970]];
  const mx=dest[0][3];
  const steps=[["Pick one trade that suits you and is in demand abroad.","এমন একটি ট্রেড বাছুন, যা আপনার ভালো লাগে আর বিদেশে চাহিদা আছে।"],
   ["Train at a government TTC, polytechnic or technical school and college, and get a BTEB-recognised certificate.","সরকারি টিটিসি, পলিটেকনিক বা টেকনিক্যাল স্কুল অ্যান্ড কলেজে প্রশিক্ষণ নিন, আর বিটিইবি-স্বীকৃত সনদ নিন।"],
   ["Going to Saudi Arabia? Pass the Saudi Skill Verification test, taken by computer at Bangladesh's TTCs.","সৌদি আরব যেতে চান? সৌদির স্কিল ভেরিফিকেশন পরীক্ষায় পাস করুন, যা বাংলাদেশের টিটিসিতে কম্পিউটারে নেওয়া হয়।"],
   ["Register with BMET and go only through a licensed recruiting agency. Attend the pre-departure orientation.","বিএমইটিতে নিবন্ধন করুন, আর শুধু লাইসেন্সধারী রিক্রুটিং এজেন্সির মাধ্যমে যান। বিদেশ যাওয়ার আগের ওরিয়েন্টেশনে অংশ নিন।"],
   ["Never pay a middleman (dalal) without papers, and never hand over your passport to an unknown person.","কাগজপত্র ছাড়া কোনো দালালকে টাকা দেবেন না, আর অপরিচিত কারও হাতে পাসপোর্ট দেবেন না।"]];
  $("#k-body").innerHTML=`<div class="ucmp">`+
   card("🏫",["Government Technical Training Centres (TTC)","সরকারি কারিগরি প্রশিক্ষণ কেন্দ্র (টিটিসি)"],["BMET runs 104 TTCs and 6 Institutes of Marine Technology, teaching 55 short and long job-focused trades. Over 1.2 million people train there every year.","বিএমইটির অধীনে ১০৪টি টিটিসি ও ৬টি ইনস্টিটিউট অব মেরিন টেকনোলজি আছে, যেখানে চাকরিমুখী ৫৫টি স্বল্প ও দীর্ঘমেয়াদি ট্রেড শেখানো হয়। প্রতি বছর ১২ লাখের বেশি মানুষ প্রশিক্ষণ নেন।"],"K1")+
   card("📜",["Short courses (3–6 months)","স্বল্পমেয়াদি কোর্স (৩–৬ মাস)"],["BTEB's 360-hour basic trade courses cover 101 occupations, offered by more than 3,000 government and private institutes.","বিটিইবির ৩৬০ ঘণ্টার বেসিক ট্রেড কোর্সে ১০১টি পেশা শেখানো হয়, ৩,০০০-এর বেশি সরকারি ও বেসরকারি প্রতিষ্ঠানে।"],"K2")+
   card("🛠️",["Polytechnics & technical colleges (longer)","পলিটেকনিক ও টেকনিক্যাল কলেজ (দীর্ঘমেয়াদি)"],["49 government polytechnics, 64 technical schools and colleges and over 500 private polytechnics offer the 4-year Diploma in Engineering and SSC/HSC Vocational.","৪৯টি সরকারি পলিটেকনিক, ৬৪টি টেকনিক্যাল স্কুল অ্যান্ড কলেজ এবং ৫০০-এর বেশি বেসরকারি পলিটেকনিকে ৪ বছরের ডিপ্লোমা ইন ইঞ্জিনিয়ারিং ও এসএসসি/এইচএসসি ভোকেশনাল পড়ানো হয়।"],"K2")+`</div>`+
   `<h3 class="uh3">${esc(L(["Trades taught at TTCs","টিটিসিতে যেসব ট্রেড শেখানো হয়"]))}</h3><div class="ktrades">${trades.map(([i,e,b])=>`<span class="ktr">${i} ${esc(L([e,b]))}</span>`).join("")}</div>${bxSrc("K5")}`+
   `<h3 class="uh3">${esc(L(["Where Bangladeshi workers went in 2025","২০২৫ সালে বাংলাদেশি কর্মীরা কোথায় গেছেন"]))}</h3><p class="muted">${esc(L(["Over 1.1 million workers went abroad in 2025. Only about 22% were skilled or professional, so a certificate makes you stand out.","২০২৫ সালে ১১ লাখের বেশি কর্মী বিদেশে গেছেন। এর মধ্যে মাত্র প্রায় ২২% দক্ষ বা পেশাজীবী, তাই সনদ থাকলে আপনি আলাদা হয়ে উঠবেন।"]))}</p>`+
   `<div class="kbars">${dest.map(([f,e,b,n])=>`<div class="kbar"><span>${f} ${esc(L([e,b]))}</span><span class="kb"><i style="width:${Math.max(4,n/mx*100)}%"></i></span><b>${N(n.toLocaleString("en-IN"))}</b></div>`).join("")}</div>${bxSrc("K3")}`+
   `<div class="ucmp">${card("💰",["Skill changes your pay","দক্ষতা বেতন বদলে দেয়"],["Less-skilled workers in Saudi Arabia often earn about ৳25,000–30,000 a month. Skilled workers in Malaysia earned about ৳70,000–1 lakh versus about ৳35,000 unskilled (2023 report).","সৌদি আরবে কম দক্ষ কর্মীরা প্রায়ই মাসে ২৫,০০০–৩০,০০০ টাকা পান। মালয়েশিয়ায় দক্ষ কর্মী প্রায় ৭০,০০০–১ লাখ, অদক্ষ প্রায় ৩৫,০০০ টাকা (২০২৩ সালের প্রতিবেদন)।"],"K3").replace("</div>",""+bxSrc("B8")+"</div>")}${card("✅",["Saudi Skill Verification Program","সৌদি স্কিল ভেরিফিকেশন প্রোগ্রাম"],["Saudi Arabia now tests and certifies skilled workers through Takamol. Bangladesh runs these computer-based tests at its TTCs; demand was about 30,000 certified workers a month (Oct 2025).","সৌদি আরব এখন তাকামলের মাধ্যমে দক্ষ কর্মীদের পরীক্ষা নিয়ে সনদ দেয়। বাংলাদেশের টিটিসিতে এই কম্পিউটারভিত্তিক পরীক্ষা হয়; চাহিদা ছিল মাসে প্রায় ৩০,০০০ সনদপ্রাপ্ত কর্মী (অক্টোবর ২০২৫)।"],"K4")}</div>`+
   `<h3 class="uh3">${esc(L(["Your path, step by step","আপনার পথ, ধাপে ধাপে"]))}</h3><ol class="wsteps">${steps.map(s=>`<li>${esc(L(s))}</li>`).join("")}</ol>`+
   `<p class="wreal">💬 ${esc(L(["Honestly: many families lose money to fake promises of jobs abroad. A real certificate, a licensed agency and a BMET registration are your protection. Take your time; going safely matters more than going fast.","সত্যি কথা বলি: বিদেশে চাকরির ভুয়া প্রতিশ্রুতিতে অনেক পরিবার টাকা হারায়। আসল সনদ, লাইসেন্সধারী এজেন্সি আর বিএমইটি নিবন্ধনই আপনার সুরক্ষা। তাড়াহুড়ো করবেন না; দ্রুত যাওয়ার চেয়ে নিরাপদে যাওয়া বেশি জরুরি।"]))}</p>`+
   `<div class="wbtns"><button type="button" class="wbtn alt" data-wgo="dip">${esc(L(["Japan, Korea, Germany routes","জাপান, কোরিয়া, জার্মানির পথ"]))} →</button></div>`;
}

/* ---- job center ---- */
function renderJobs(){
  $("#j-body").innerHTML=`<h3 class="uh3">${esc(L(["Official places to find and apply for jobs","চাকরি খোঁজা ও আবেদনের অফিসিয়াল জায়গা"]))}</h3><div class="abgrid">${JOBSITES.map(([i,e,b,u])=>`<a href="${u}" target="_blank" rel="noopener"><b>${i} ${esc(L([e,b]))}</b><span>${esc(u.replace(/^https?:\/\/(www\.)?/,""))}</span></a>`).join("")}</div>`+
   `<h3 class="uh3">${esc(L(["Questions people often ask","যে প্রশ্নগুলো সবাই প্রায়ই করে"]))}</h3>`+
   FAQ.map(([q,ans,s],i)=>`<details class="faq"${i===0?" open":""}><summary>${esc(L(q))}</summary><p>${esc(L(ans))}</p>${s?bxSrc(s):""}</details>`).join("")+
   `<div class="wbtns"><a class="join big" href="https://www.facebook.com/groups/bcgo.bd" target="_blank" rel="noopener">${esc(L(["Ask your own question in our Facebook group","নিজের প্রশ্ন করুন আমাদের ফেসবুক গ্রুপে"]))} →</a></div>`;
}

/* ---- career switch (employed) ---- */
st.sw={sec:null,edu:null,exp:null,age:null,goal:null};
function renderSwitch(){
  const w=st.sw; const qs=[
   ["sec",["Which sector do you work in now?","এখন কোন খাতে কাজ করছেন?"],Object.keys(SW_SECT).map(k=>[k,SW_SECT[k][0],[SW_SECT[k][1],SW_SECT[k][2]]])],
   ["edu",["Your highest education?","আপনার সর্বোচ্চ পড়াশোনা?"],[["below","📘",["Below bachelor's (SSC / HSC / diploma)","স্নাতকের নিচে (এসএসসি / এইচএসসি / ডিপ্লোমা)"]],["pass","🎓",["3-year Pass degree","৩ বছরের পাস ডিগ্রি"]],["hons","🎓",["4-year Honours or master's","৪ বছরের অনার্স বা মাস্টার্স"]]]],
   ["exp",["How long have you been working?","কত বছর ধরে কাজ করছেন?"],[["0","🌱",["Under 2 years","২ বছরের কম"]],["3","🌿",["2–5 years","২–৫ বছর"]],["6","🌳",["6–10 years","৬–১০ বছর"]],["10","🏔️",["More than 10 years","১০ বছরের বেশি"]]]],
   ["age",["Your age?","আপনার বয়স?"],[["u32","🙂",["Under 32","৩২-এর নিচে"]],["o32","🧑",["32 or older","৩২ বা তার বেশি"]]]],
   ["goal",["What do you want most from the change?","বদল থেকে সবচেয়ে বেশি কী চান?"],Object.keys(SW_GOAL).map(k=>[k,SW_GOAL[k][0],[SW_GOAL[k][1],SW_GOAL[k][2]]])]];
  const step=qs.findIndex(q=>!w[q[0]]); const n=step<0?5:step;
  let h=`<div class="wprog"><span style="width:${n/5*100}%"></span></div><p class="wstep">${esc(n<5?fill(["Question {n} of 5","৫টির মধ্যে {n} নম্বর প্রশ্ন"],{n:N(n+1)}):L(["Here is your map","এই যে আপনার ম্যাপ"]))}</p>`;
  if(n<5){ const [key,qt,opts]=qs[n]; h+=`<h3 class="wq">${esc(L(qt))}</h3><div class="wgrid">${opts.map(([k,ic,lab])=>`<button type="button" class="wcard" data-sw="${key}:${k}"><span class="wic">${ic}</span>${esc(L(lab))}</button>`).join("")}</div>`; }
  else h+=swPlan();
  if(n>0) h+=`<div class="wnav"><button type="button" class="wbtn ghost" data-swback="1">← ${esc(L(["Back","পেছনে"]))}</button>${n===5?`<button type="button" class="wbtn ghost" data-swreset="1">↺ ${esc(L(["Start over","আবার শুরু করি"]))}</button>`:""}</div>`;
  $("#sw-body").innerHTML=h;
}
function swPlan(){
  const w=st.sw, S=SW_SECT[w.sec], deg=w.edu==="hons", anyDeg=w.edu!=="below", young=w.age==="u32";
  let keys=SW_MAP[w.goal].slice(); const notes=[];
  keys=keys.filter(k=>{ const need=SW_ROUTE[k][5];
    if(need==="deg_age"&&!(deg&&young)){ notes.push(!young?L(["BCS and most government entry jobs need you to be 32 or under, so they are left out.","বিসিএস ও বেশিরভাগ সরকারি প্রবেশ পদে বয়স ৩২-এর মধ্যে হতে হয়, তাই এগুলো বাদ দিলাম।"]):L(["BCS usually needs a 4-year Honours or a master's. With a Pass degree, a master's comes first.","বিসিএসে সাধারণত ৪ বছরের অনার্স বা মাস্টার্স লাগে। পাস ডিগ্রি থাকলে আগে মাস্টার্স।"])); return false; }
    if(need==="deg"&&!anyDeg) return false; return true; });
  if(w.sec==="govt"&&w.goal==="stable") keys=keys.filter(k=>k!=="bcs");
  if(w.sec==="abroad"&&!keys.includes("biz")) keys.unshift("biz");
  if(!keys.length) keys=["tech","freelance"];
  keys=[...new Set(keys)].slice(0,3);
  const route=(k,i)=>{ const R=SW_ROUTE[k]; return `<div class="swr"><div class="swr-h"><span class="swn">${N(i+1)}</span><b>${esc(L([R[0],R[1]]))}</b></div><ol>${(st.lang==="bn"?R[3]:R[2]).map(s=>`<li>${esc(s)}</li>`).join("")}</ol><button type="button" class="golink" data-gt="${R[4]}">${esc(L(["See this career map","এই ক্যারিয়ার ম্যাপ দেখুন"]))} →</button></div>`; };
  const tree=`<div class="swfrom">${S[0]} ${esc(L(["You now: ","আপনি এখন: "]))}<b>${esc(L([S[1],S[2]]))}</b></div><div class="swroutes">${keys.map(route).join("")}</div>`;
  const carry=(st.lang==="bn"?S[4]:S[3]).map(x=>`<span class="ktr">✔ ${esc(x)}</span>`).join("");
  const exp=+w.exp; const expTip=exp>=6?L(["With 6+ years, aim for mid or senior roles, not entry level. Your experience is worth money; don't undersell it.","৬+ বছরের অভিজ্ঞতায় এন্ট্রি লেভেল নয়, মাঝারি বা সিনিয়র পদে লক্ষ্য রাখুন। আপনার অভিজ্ঞতার দাম আছে; কম দামে বিকোবেন না।"]):exp>=3?L(["With 2–5 years, this is the best time to switch: you have experience, and employers still see you as flexible.","২–৫ বছরে বদলের সবচেয়ে ভালো সময়: অভিজ্ঞতা আছে, আবার নিয়োগকারীরা আপনাকে নমনীয়ও ভাবেন।"]):L(["Under 2 years in, a switch is easier; focus on building one strong skill first.","২ বছরের কম হলে বদল সহজ; আগে একটা শক্ত দক্ষতা গড়ায় মন দিন।"]);
  return `<div class="wres"><h3>${esc(L(["What you already bring with you","আপনি যা সঙ্গে নিয়ে যাচ্ছেন"]))}</h3><div class="ktrades">${carry}</div>
   <h3>${esc(L(["Routes that fit you, step by step","আপনার জন্য মানানসই পথ, ধাপে ধাপে"]))}</h3>${tree}
   <p class="wreal">💬 ${esc(expTip)}</p>${notes.length?`<p class="hint">${esc(notes[0])}</p>`:""}
   <p class="wreal">💬 ${esc(L(["Honestly: don't quit first and plan later. Most people who switch well build the new skill while still earning, and leave only when the next step is in hand.","সত্যি কথা বলি: আগে ছেড়ে পরে পরিকল্পনা করবেন না। যারা ভালোভাবে বদলান, তারা আয় চালু রেখেই নতুন দক্ষতা গড়েন, আর পরের ধাপ হাতে আসার পরই ছাড়েন।"]))}</p>
   </div>`;
}


function freelanceBlock(){
  const sk=FSKILLS.map(([ic,e,b,le,lb,se,sb,re,rb])=>`<details class="faq"><summary>${ic} ${esc(L([e,b]))}</summary><p><b>${esc(L(["What to learn:","কী শিখতে হবে:"]))}</b> ${esc(L([le,lb]))}</p><p><b>${esc(L(["Setup and cost:","সেটআপ ও খরচ:"]))}</b> ${esc(L([se,sb]))}</p><p class="wreal">💬 ${esc(L([re,rb]))}</p></details>`).join("");
  const facts=[["📉",["The truth about earnings","আয়ের সত্যি কথা"],["In one study of trained freelancers in Bangladesh, only about a third were actively freelancing later, earning around US$90 a month on average. Many quit because the first income took so long.","বাংলাদেশে প্রশিক্ষণ নেওয়া ফ্রিল্যান্সারদের নিয়ে এক গবেষণায় পরে মাত্র প্রায় এক-তৃতীয়াংশ সক্রিয়ভাবে কাজ করছিলেন, গড় আয় মাসে প্রায় ৯০ ডলার। প্রথম আয় আসতে অনেক সময় লাগায় অনেকে ছেড়ে দেন।"],"F1"],
   ["💸",["Platforms take a cut","প্ল্যাটফর্ম কমিশন কাটে"],["Upwork charges freelancers a 0–15% fee on each contract and sells \"Connects\" to bid on jobs (US$0.15 each, 10 at no charge per month). Budget for this before you earn.","আপওয়ার্ক প্রতিটি কাজে ফ্রিল্যান্সারের কাছ থেকে ০–১৫% ফি কাটে, আর কাজে আবেদনের জন্য \"কানেক্টস\" কিনতে হয় (প্রতিটি ০.১৫ ডলার, মাসে ১০টি বিনা খরচে)। আয়ের আগেই এর জন্য বাজেট রাখুন।"],"F3"],
   ["🏦",["Get paid the safe way","নিরাপদে টাকা তুলুন"],["Withdraw through banks and official services. Unofficial middlemen who \"cash out\" for you sometimes disappear with the money.","ব্যাংক আর অফিসিয়াল সেবার মাধ্যমে টাকা তুলুন। যে অনানুষ্ঠানিক মধ্যস্থতাকারীরা টাকা তুলে দেয় বলে, তারা কখনো কখনো টাকা নিয়ে উধাও হয়ে যায়।"],"F4"],
   ["⚠️",["Beware of fake \"freelancing academies\"","ভুয়া \"ফ্রিল্যান্সিং একাডেমি\" থেকে সাবধান"],["Police caught a gang that ran 165 fake course batches on Facebook, taking ৳2,500 from each student and teaching nothing. Check reviews and real graduates before paying for any course.","পুলিশ এমন একটি চক্র ধরেছে যারা ফেসবুকে ১৬৫টি ভুয়া কোর্স ব্যাচ চালিয়েছে, প্রত্যেকের কাছ থেকে ২,৫০০ টাকা নিয়ে কিছুই শেখায়নি। কোনো কোর্সে টাকা দেওয়ার আগে রিভিউ আর আসল প্রশিক্ষণার্থীদের খোঁজ নিন।"],"F2"]];
  const need=[["A reliable computer (a phone is not enough for most work)","নির্ভরযোগ্য কম্পিউটার (বেশিরভাগ কাজে শুধু মোবাইলে হয় না)"],["Stable broadband plus a backup (mobile data) and backup power for load-shedding","স্থির ব্রডব্যান্ড, সঙ্গে ব্যাকআপ (মোবাইল ডেটা) আর লোডশেডিংয়ের জন্য ব্যাকআপ বিদ্যুৎ"],["Money for courses or paid software, if you choose them","কোর্স বা পেইড সফটওয়্যারের টাকা, যদি নেন"],["Enough savings or another income for the first months with little or no earning","প্রথম কয়েক মাস কম বা শূন্য আয়ের জন্য যথেষ্ট সঞ্চয় বা অন্য আয়"],["Good English for talking to foreign clients","বিদেশি ক্লায়েন্টের সঙ্গে কথা বলার মতো ভালো ইংরেজি"]];
  return `<h3 class="uh3">💻 ${esc(L(["Freelancing: skills, costs and the honest truth","ফ্রিল্যান্সিং: দক্ষতা, খরচ আর সত্যি কথা"]))}</h3>
   <p class="wreal">💬 ${esc(L(["Freelancing can give you freedom, but it is not quick or free money. Most people need months of learning and practice, some investment, and patience before the first steady income. Plan for that.","ফ্রিল্যান্সিং স্বাধীনতা দিতে পারে, কিন্তু এটা দ্রুত বা বিনা খরচের আয় নয়। প্রথম নিয়মিত আয়ের আগে বেশিরভাগ মানুষের কয়েক মাস শেখা ও অনুশীলন, কিছু বিনিয়োগ আর ধৈর্য লাগে। সেভাবেই পরিকল্পনা করুন।"]))}</p>
   <h4>${esc(L(["What you need before you start","শুরুর আগে যা লাগবে"]))}</h4><ul class="plist">${need.map(n=>`<li>${esc(L(n))}</li>`).join("")}</ul>
   <h4>${esc(L(["Skills, one by one","দক্ষতা, একে একে"]))}</h4>${sk}
   <div class="ucmp">${facts.map(([ic,h,b,s])=>`<div class="kcard"><h3>${ic} ${esc(L(h))}</h3><p>${esc(L(b))}</p>${bxSrc(s)}</div>`).join("")}</div>`;
}
/* ---- startup ideas ---- */
st.ib="low"; st.ii="all";
function renderIdeas(){
  const B=[["low","🌱",["Under ৳1 lakh","১ লাখ টাকার কম"]],["mid","🌿",["৳1–10 lakh","১–১০ লাখ টাকা"]],["high","🌳",["৳10 lakh or more","১০ লাখ টাকা বা বেশি"]]];
  const I=[["all","✨",["Anything","যেকোনো"]],["sell","🛒",["Selling","বিক্রি"]],["food","🍲",["Food","খাবার"]],["tech","💻",["Tech","প্রযুক্তি"]],["create","🎨",["Creative","সৃজনশীল"]],["hands","🔧",["Hands-on","হাতের কাজ"]],["agri","🌾",["Farming","কৃষি"]],["teach","📚",["Teaching","শিক্ষা"]]];
  const seg=(arr,key,attr)=>`<div class="seg tabs2" role="group">${arr.map(([k,ic,l])=>`<button type="button" data-${attr}="${k}" aria-pressed="${st[key]===k}">${ic} ${esc(L(l))}</button>`).join("")}</div>`;
  const list=IDEAS.filter(x=>x[3]===st.ib&&(st.ii==="all"||x[4].includes(st.ii)));
  const cards=list.length?`<div class="ucmp">${list.map(([ic,e,b,,,ne,nb,te,tb])=>`<div class="kcard"><h3>${ic} ${esc(L([e,b]))}</h3><p><b>${esc(L(["You need:","যা লাগবে:"]))}</b> ${esc(L([ne,nb]))}</p><p class="wreal">💬 ${esc(L([te,tb]))}</p></div>`).join("")}</div>`:`<p class="hint">${esc(L(["No idea in this exact mix. Try another budget or interest.","এই মিলে কোনো আইডিয়া নেই। অন্য পুঁজি বা আগ্রহ বেছে দেখুন।"]))}</p>`;
  const steps=[["Test before you invest: sell to 10 real customers first, even by hand.","বিনিয়োগের আগে যাচাই করুন: আগে হাতে হাতে হলেও ১০ জন আসল ক্রেতার কাছে বিক্রি করুন।"],
   ["Get a trade licence online at etradelicense.gov.bd (you'll need your NID; the office inspects, then you pay the fee).","etradelicense.gov.bd-তে অনলাইনে ট্রেড লাইসেন্স নিন (এনআইডি লাগবে; অফিস পরিদর্শনের পর ফি দিতে হয়)।"],
   ["Open a separate bank account for the business and keep simple accounts from day one.","ব্যবসার জন্য আলাদা ব্যাংক অ্যাকাউন্ট খুলুন, আর প্রথম দিন থেকেই সহজ হিসাব রাখুন।"],
   ["Grow with your profit first; borrow only when you know the business works.","প্রথমে লাভ দিয়ে বাড়ান; ব্যবসা চলবে জানার পরই ঋণ নিন।"]];
  const sup=[["🏦",["Collateral-free loans","জামানতবিহীন ঋণ"],["Bangladesh Bank's new-entrepreneur refinance scheme: up to ৳10 lakh without collateral at no more than 7%, and up to ৳35 lakh with collateral.","বাংলাদেশ ব্যাংকের নতুন উদ্যোক্তা পুনঃঅর্থায়ন স্কিম: জামানত ছাড়া ১০ লাখ টাকা পর্যন্ত, সর্বোচ্চ ৭% সুদে; জামানতসহ ৩৫ লাখ পর্যন্ত।"],"ST1"],
   ["🚀",["Start-up Fund","স্টার্টআপ ফান্ড"],["A ৳500 crore Start-up Fund lends at 4%. A new ৳1,000 crore plan for young entrepreneurs (loans plus performance grants) is being set up.","৫০০ কোটি টাকার স্টার্টআপ ফান্ড থেকে ৪% সুদে ঋণ। তরুণ উদ্যোক্তাদের জন্য ১,০০০ কোটি টাকার নতুন পরিকল্পনা (ঋণ ও পারফরম্যান্সভিত্তিক অনুদান) তৈরি হচ্ছে।"],"ST2"],
   ["🎓",["Training with a stipend","ভাতাসহ প্রশিক্ষণ"],["A 100-hour government entrepreneurship training (SICIP) comes with a ৳5,000 stipend, and its graduates get priority for these loans.","সরকারি ১০০ ঘণ্টার উদ্যোক্তা প্রশিক্ষণে (এসআইসিআইপি) ৫,০০০ টাকা ভাতা দেওয়া হয়, আর এর প্রশিক্ষণার্থীরা ঋণে অগ্রাধিকার পান।"],"ST1"],
   ["🤝",["Equity investment","ইকুইটি বিনিয়োগ"],["Bangladesh Start-up Investment Company, formed with 39 banks, invests in startups in exchange for a share, so you don't repay it like a loan.","৩৯টি ব্যাংক মিলে গঠিত বাংলাদেশ স্টার্টআপ ইনভেস্টমেন্ট কোম্পানি শেয়ারের বিনিময়ে স্টার্টআপে বিনিয়োগ করে, তাই ঋণের মতো ফেরত দিতে হয় না।"],"ST1"],
   ["🏆",["Idea grants","আইডিয়া অনুদান"],["The government's iDEA project has run startup grant competitions with grants of up to ৳10 lakh for innovative ideas.","সরকারের আইডিয়া প্রকল্প উদ্ভাবনী আইডিয়ার জন্য ১০ লাখ টাকা পর্যন্ত অনুদানের প্রতিযোগিতা চালিয়েছে।"],"ST4"]];
  $("#i-body").innerHTML=`<h3 class="uh3">${esc(L(["1. How much can you invest?","১. কতটা বিনিয়োগ করতে পারবেন?"]))}</h3>${seg(B,"ib","ib")}<p class="hint">${esc(L(["These are rough starting ranges to help you plan; real costs depend on your area, rent and how small you start. Up to ৳10 lakh can be borrowed without collateral under the government scheme below.","এগুলো পরিকল্পনার জন্য মোটামুটি শুরুর পুঁজির ধারণা; আসল খরচ নির্ভর করে এলাকা, ভাড়া আর কতটা ছোট করে শুরু করছেন তার ওপর। নিচের সরকারি স্কিমে ১০ লাখ টাকা পর্যন্ত জামানত ছাড়া ঋণ নেওয়া যায়।"]))}</p><h3 class="uh3">${esc(L(["2. What do you enjoy?","২. কী করতে ভালো লাগে?"]))}</h3>${seg(I,"ii","ii")}${cards}`+freelanceBlock()+
   `<h3 class="uh3">${esc(L(["How to start, the right way","সঠিকভাবে শুরু করার উপায়"]))}</h3><ol class="wsteps">${steps.map(s=>`<li>${esc(L(s))}</li>`).join("")}</ol>${bxSrc("ST3")}`+
   `<h3 class="uh3">${esc(L(["Government support you can use","যে সরকারি সহায়তা নিতে পারেন"]))}</h3><div class="ucmp">${sup.map(([ic,h,b,s])=>`<div class="kcard"><h3>${ic} ${esc(L(h))}</h3><p>${esc(L(b))}</p>${bxSrc(s)}</div>`).join("")}</div>`+
   `<p class="wreal">💬 ${esc(L(["Honestly: most small businesses struggle in the first year. Keep your costs low, keep a job or income while you test, and never put your family's savings in before real customers are paying you.","সত্যি কথা বলি: বেশিরভাগ ছোট ব্যবসা প্রথম বছরে হিমশিম খায়। খরচ কম রাখুন, যাচাইয়ের সময় চাকরি বা আয় চালু রাখুন, আর আসল ক্রেতা টাকা দেওয়ার আগে পরিবারের সঞ্চয় ঢালবেন না।"]))}</p>`;
}
function renderGrey(){
  const G=[["🟡",["\"Conditional\" and \"Possible with extra skills\"","\"শর্তসাপেক্ষ\" আর \"বাড়তি দক্ষতায় সম্ভব\""],["These are judgement calls, not rules. They mean employers sometimes hire people from your subject, usually when you can prove the skill. Some employers will still say no.","এগুলো নিয়ম নয়, বিচার-বিবেচনা। মানে আপনার বিষয় থেকে কখনো কখনো নিয়োগ হয়, সাধারণত দক্ষতা প্রমাণ করতে পারলে। কিছু প্রতিষ্ঠান তবুও না বলতে পারে।"]],
   ["📝",["\"Open to any subject\" is not \"easy\"","\"যেকোনো বিষয়ে আবেদনযোগ্য\" মানে \"সহজ\" নয়"],["Any subject may apply, but thousands compete, and many circulars add result, age or quota rules. Always read the actual circular.","যেকোনো বিষয় আবেদন করতে পারে, কিন্তু হাজারো মানুষ প্রতিযোগিতা করে, আর অনেক বিজ্ঞপ্তিতে রেজাল্ট, বয়স বা কোটার শর্ত থাকে। সবসময় আসল বিজ্ঞপ্তি পড়ুন।"]],
   ["💰",["Salary figures","বেতনের তথ্য"],["Government pay follows the official scale. Private pay comes from job ads: when only 1–2 ads stated a salary, it's marked \"few ads\" and is only a rough hint. Sector averages include senior staff, so they are higher than starting pay.","সরকারি বেতন আনুষ্ঠানিক স্কেল অনুযায়ী। বেসরকারি বেতন চাকরির বিজ্ঞাপন থেকে: মাত্র ১–২টি বিজ্ঞাপনে বেতন থাকলে \"কম তথ্য\" লেখা থাকে, এটা শুধু মোটামুটি ধারণা। খাতভিত্তিক গড়ে সিনিয়রদের বেতনও আছে, তাই শুরুর বেতনের চেয়ে বেশি।"]],
   ["📈",["Career ladders","পদোন্নতির ধাপ"],["The steps shown (e.g. officer → manager) are typical paths, not promises. Promotion speed depends on the employer, your performance and luck.","দেখানো ধাপগুলো (যেমন অফিসার → ম্যানেজার) সাধারণ পথ, প্রতিশ্রুতি নয়। পদোন্নতির গতি নির্ভর করে প্রতিষ্ঠান, আপনার কাজ আর ভাগ্যের ওপর।"]],
   ["🏛️",["Rules change with every circular","প্রতিটি বিজ্ঞপ্তিতে নিয়ম বদলায়"],["Age limits, result rules and grades can change from one circular to the next. This map is updated monthly, but the circular you apply to is always the final word.","বয়সসীমা, রেজাল্টের শর্ত আর গ্রেড এক বিজ্ঞপ্তি থেকে আরেকটিতে বদলাতে পারে। এই ম্যাপ প্রতি মাসে হালনাগাদ হয়, কিন্তু যে বিজ্ঞপ্তিতে আবেদন করছেন, শেষ কথা সেটাই।"]],
   ["🎓",["Your university's own degree list","আপনার বিশ্ববিদ্যালয়ের নিজস্ব ডিগ্রির তালিকা"],["We have verified programme lists for only some universities. For others, the degree menu shows what that type of university usually offers.","কিছু বিশ্ববিদ্যালয়ের প্রোগ্রাম তালিকাই শুধু যাচাই করা। অন্যগুলোর ক্ষেত্রে ডিগ্রির তালিকায় এ ধরনের বিশ্ববিদ্যালয় সাধারণত যা দেয় তা দেখানো হয়।"]]];
  $("#grey-body").innerHTML=G.map(([i,h,b])=>`<details class="faq"><summary>${i} ${esc(L(h))}</summary><p>${esc(L(b))}</p></details>`).join("");
}
function renderGrades(){
  const rows1=[["4.00 – 5.00","div1"],["3.00 – 3.99","div2"],["1.00 – 2.99","div3"]];
  const rows2=[[st.lang==="bn"?"৬০% বা বেশি":"60% or above","cl1"],[st.lang==="bn"?"৪৫% – ৬০%-এর কম":"45% to under 60%","cl2"],[st.lang==="bn"?"৩৩% – ৪৫%-এর কম":"33% to under 45%","cl3"]];
  const tb=(cap,rows,s,foot)=>`<div class="gt"><table><caption>${cap}</caption>${rows.map(([a,b])=>`<tr><td class="mono">${N(a)}</td><td>${t(b)}</td></tr>`).join("")}</table>${foot?`<p class="hint">${foot}</p>`:""}${srcLink(s)}</div>`;
  $("#grades").innerHTML = tb(st.lang==="bn"?"এসএসসি / এইচএসসি জিপিএ (২০০৪ থেকে)":"SSC / HSC GPA (2004 onward)",rows1,"S10")
   + tb(st.lang==="bn"?"বিশ্ববিদ্যালয়: নম্বরের শতাংশ থেকে শ্রেণি":"University: class from percentage of marks",rows2,"S11",
     st.lang==="bn"?"৪ স্কেলে সিজিপিএ ৩.০০ বা বেশি প্রথম শ্রেণি হিসেবে গণ্য। এর নিচের শ্রেণির সীমা বিশ্ববিদ্যালয়ভেদে আলাদা, তাই সনদ বা বিশ্ববিদ্যালয়ের নিয়ম দেখুন।":"On a 4-point scale, CGPA 3.00 or above counts as first class. Lower bands differ by university, so check your transcript or university rules.");
}
function renderSources(){ $("#src-list").innerHTML=Object.values(SRC).concat(Object.values(SRC2)).map(s=>`<li><a href="${s.u}" target="_blank" rel="noopener">${esc(s.t)}</a></li>`).join(""); }

function renderAll(){ renderStatic(); renderPicker(); renderMap(); renderDetail(); renderChecker(); renderQuiz(); renderOpen(); renderPvt(); renderGrades(); renderSources(); renderBeyond(); renderTracks(); renderGuide(); renderAbroad(); renderWizard(); renderSkills(); renderMatch(); renderTheme(); renderUnis(); renderSkillTrain(); renderJobs(); renderSwitch(); renderIdeas(); renderGrey(); }
function refresh(){ renderPicker(); renderMap(); renderDetail(); renderChecker(); renderQuiz(); renderPvt(); renderBeyond(); renderGuide(); renderMatch(); }

function select(key, scroll){
  st.sel=key; renderMap(); renderDetail();
  if(scroll && window.matchMedia("(max-width: 900px)").matches) $("#detail-wrap").scrollIntoView({behavior:smooth(), block:"start"});
}
function smooth(){ return matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"; }
function firstSel(){ const L0=lvl(); if(L0.cat==="deg"){ const l=roleList(); st.sel=l[0]?.id||null; } else { const l=preLines(); st.sel=l[0]?((l[0].dip?"dip:":"deg:")+l[0].d):null; } }

/* ---- events ---- */
document.addEventListener("click",e=>{
  const na=e.target.closest(".qnav a"); if(na){ if(na.dataset.nlow){ st.bt="low"; renderBeyond(); }  else if(na.getAttribute("href")==="#beyond"&&st.bt==="low"){ st.bt="higher"; renderBeyond(); } return; }
  const b=e.target.closest("button,[data-role],[data-pre]"); if(!b) return;
  if(b.dataset.l){ st.lang=b.dataset.l; try{localStorage.setItem("bcgo-lang",st.lang);}catch(_){} renderAll(); return; }
  if(b.dataset.subj){ const k=b.dataset.subj; st.subjects.has(k)?st.subjects.delete(k):st.subjects.add(k); firstSel(); refresh(); return; }
  if(b.dataset.bt){ st.bt=b.dataset.bt; renderBeyond(); return; }
  if(b.id==="theme-btn"){ const n=curTheme()==="dark"?"light":"dark"; document.documentElement.dataset.theme=n; try{localStorage.setItem("bcgo-theme",n);}catch(_){} renderTheme(); return; }
  if(b.dataset.ut){ st.ut=b.dataset.ut; renderUnis(); return; }
  if(b.dataset.uc){ st.uc=b.dataset.uc; renderUnis(); return; }
  if(b.dataset.upgo){ st.up=b.dataset.upgo; renderUnis(); $("#u-body .pbox").scrollIntoView({behavior:smooth(),block:"start"}); return; }
  if(b.dataset.ucgo){ st.ut="cost"; st.uc=b.dataset.ucgo; renderUnis(); $("#unisec").scrollIntoView({behavior:smooth(),block:"start"}); return; }
  if(b.dataset.sw){ const [k,v]=b.dataset.sw.split(":"); st.sw[k]=v; renderSwitch(); return; }
  if(b.dataset.swback){ const order=["goal","age","exp","edu","sec"]; for(const k of order){ if(st.sw[k]){ st.sw[k]=null; break; } } renderSwitch(); return; }
  if(b.dataset.swreset){ st.sw={sec:null,edu:null,exp:null,age:null,goal:null}; renderSwitch(); $("#switch").scrollIntoView({behavior:smooth(),block:"start"}); return; }
  if(b.dataset.ib){ st.ib=b.dataset.ib; renderIdeas(); return; }
  if(b.dataset.ii){ st.ii=b.dataset.ii; renderIdeas(); return; }
  if(b.dataset.sk){ const k=b.dataset.sk; st.skills.has(k)?st.skills.delete(k):st.skills.add(k); b.setAttribute("aria-pressed",st.skills.has(k)); renderMatch(); return; }
  if(b.dataset.ws){ st.w.stage=b.dataset.ws; renderWizard(); return; }
  if(b.dataset.wl){ st.w.like=b.dataset.wl; renderWizard(); return; }
  if(b.dataset.wp){ st.w.place=b.dataset.wp; renderWizard(); $("#wizard").scrollIntoView({behavior:smooth(),block:"start"}); return; }
  if(b.dataset.wback){ const w=st.w; if(w.place) w.place=null; else if(w.like) w.like=null; else w.stage=null; renderWizard(); return; }
  if(b.dataset.wreset){ st.w={stage:null,like:null,place:null}; renderWizard(); $("#wizard").scrollIntoView({behavior:smooth(),block:"start"}); return; }
  if(b.dataset.wgo){ const g=b.dataset.wgo; if(g==="skill"){ $("#skilltrain").scrollIntoView({behavior:smooth(),block:"start"}); } else if(g==="abroad"){ $("#abroad").scrollIntoView({behavior:smooth(),block:"start"}); } else { st.bt=g==="low"?"low":"diploma"; renderBeyond(); $("#beyond").scrollIntoView({behavior:smooth(),block:"start"}); } return; }
  if(b.dataset.tt){ st.tr=b.dataset.tt; st.tsel=null; st.topen=new Set(); renderTracks(); return; }
  if(b.dataset.tf){ const k=b.dataset.tf; st.topen.has(k)?st.topen.delete(k):st.topen.add(k); renderTracks(); return; }
  if(b.dataset.ts){ st.tsel=b.dataset.ts; renderTracks(); if(matchMedia("(max-width: 900px)").matches) $("#tr-body .ticket").scrollIntoView({behavior:smooth(),block:"center"}); return; }
  if(b.dataset.gt){ goTrack(b.dataset.gt); return; }
  if(b.dataset.lt){ st.lt=b.dataset.lt; renderBeyond(); return; }
  if(b.dataset.bx){ st.bsel=b.dataset.bx; renderBeyond(); return; }
  if(b.dataset.s){ st.sector=b.dataset.s; renderMap(); return; }
  if(b.dataset.v){ st.view=b.dataset.v; renderMap(); return; }
  if(b.dataset.fold){ const k=b.dataset.fold; st.fold.has(k)?st.fold.delete(k):st.fold.add(k); renderMap(); return; }
  if(b.dataset.q){ const q=b.dataset.q; if(q==="start"){st.qi=0;st.ans=[];} else if(q==="back"){st.qi=Math.max(0,st.qi-1);} else if(q==="restart"){st.qi=0;st.ans=[];} renderQuiz(); return; }
  if(b.dataset.qa){ st.ans[st.qi]=+b.dataset.qa; st.qi++; renderQuiz(); if(st.qi>=QUIZ.length) $("#quiz-panel").scrollIntoView({behavior:smooth(),block:"start"}); return; }
  if(b.dataset.role){ select(b.dataset.role,true); return; }
  if(b.dataset.pre){ select(b.dataset.pre,true); return; }
  if(b.dataset.show){ const inMap=!!b.closest("#lines"); st.sel=b.dataset.show; renderMap(); renderDetail(); if(!inMap) $("#map").scrollIntoView({behavior:smooth(),block:"start"}); else if(matchMedia("(max-width: 900px)").matches) $("#detail-wrap").scrollIntoView({behavior:smooth(),block:"start"}); return; }
  if(b.dataset.go){ const [k,d]=b.dataset.go.split(":"); st.uni=""; const cand=LEVELS.filter(l=>l.cat==="deg"&&l.subj.includes(d)&&(k==="dip"?l.grp==="dip":(l.grp==="prof"||l.grp==="hons"))); st.level=(cand.find(l=>l.grp==="prof")||cand[0]||LEVELS.find(l=>l.id==="bss")).id; st.subject=d; firstSel(); refresh(); $("#map").scrollIntoView({behavior:smooth(),block:"start"}); return; }
});
document.addEventListener("keydown",e=>{ if((e.key==="Enter"||e.key===" ") && e.target.matches("[data-role],[data-pre]")){ e.preventDefault(); e.target.click(); } });
document.addEventListener("change",e=>{
  const id=e.target.id;
  if(id==="f-level"){ st.level=e.target.value; const L0=lvl(); if(L0.cat!=="deg"){ const g=Object.keys(L0.cur).filter(k=>k!=="_opt"); if(!g.includes(st.group)) st.group=g[0]; st.subjects=new Set(L0.cur[st.group]); } firstSel(); refresh(); }
  else if(id==="f-uni"){ st.uni=e.target.value; const U=st.uni!==""?UNIS[+st.uni]:null, L0=lvl();
    if(U && L0.cat==="deg" && L0.grp!=="dip" && !UTYPE[U.ty].d.includes(L0.id)){ st.level=UTYPE[U.ty].d[0]; }
    firstSel(); refresh(); }
  else if(id==="f-group"){ st.group=e.target.value; st.subjects=new Set(lvl().cur[st.group]); firstSel(); refresh(); }
  else if(id==="f-subject"){ st.subject=e.target.value; firstSel(); refresh(); }
  else if(id==="f-bridge"){ st.showBridge=e.target.checked; renderMap(); }
  else if(id==="f-check"){ st.check=e.target.value; renderChecker(); }
});
document.addEventListener("input",e=>{
  const m=e.target.id.match(/^f-(ssc|hsc|cg|mcg)$/); if(!m) return;
  st[m[1]]=e.target.value; renderPicker(); renderMap(); renderDetail(); renderChecker(); renderQuiz(); renderBeyond(); renderGuide(); renderMatch();
});

if(matchMedia("(max-width: 600px)").matches) st.view="lines";
/* example starting state: an Economics Honours graduate with realistic results */
st.ssc="4.50"; st.hsc="4.17"; st.cg="3.12";
firstSel(); renderAll();
