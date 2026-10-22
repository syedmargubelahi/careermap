/* ===== BCGO Career Map — data ===== */
const SRC = {
  S1:{t:"Prothom Alo: 9th pay scale, new recruits (Sep 2026)",u:"https://en.prothomalo.com/bangladesh/4gty9kvozo"},
  S2:{t:"The Daily Star: Bangladesh Bank minimum entry pay for private bankers (2022)",u:"https://www.thedailystar.net/business/economy/banks/news/tk-39000-salary-entry-level-private-bankers-2943901"},
  S3:{t:"Multiplier: Salaries in Bangladesh by role (2026)",u:"https://www.usemultiplier.com/?p=182950"},
  S4:{t:"Paylab: Average monthly salary by sector, Bangladesh",u:"https://www.paylab.com/bd/salaryinfo"},
  S5:{t:"UNB: Bangladesh Bank Assistant Director circular (2023)",u:"https://unb.com.bd/category/Business/bangladesh-bank-recruitment-circular-2023-bangladesh-bank-will-hire-100-assistant-directors/118185"},
  S6:{t:"Prothom Alo: State-owned banks officer (cash) circular",u:"https://en.prothomalo.com/youth/employment/5-banks-to-recruit-1439-officers"},
  S7:{t:"Prothom Alo: 47th BCS applicant Q&A, four-year degree required (Dec 2024)",u:"https://www.prothomalo.com/chakri/chakri-suggestion/0g9b3gwc07"},
  S8:{t:"Prothom Alo: Graduate unemployment, BBS Labour Force Survey",u:"https://en.prothomalo.com/youth/employment/so8x8pjh13"},
  S9:{t:"East West University notice: Mercantile Bank MTO circular (2024)",u:"https://www.ewubd.edu/notice-details/mercantile-bank-management-trainee-officer-mto-job-circular-2024"},
  S10:{t:"The Financial Express: GPA to division conversion (2009 rule)",u:"https://today.thefinancialexpress.com.bd/metro-news/new-scale-for-ssc-hsc-tests-results?amp=true"},
  S11:{t:"The Daily Star: Govt adjusts class/division with grading system",u:"https://www.thedailystar.net/node/490210"},
  S13:{t:"Ittefaq: Science, humanities and business groups restored",u:"https://en.ittefaq.com.bd/9268/science-humanities-and-business-studies"},
  S15:{t:"UGC: List of public universities (official)",u:"http://ugc-universities.gov.bd/"},
  S16:{t:"UGC: List of private universities (official)",u:"http://www.ugc-universities.gov.bd/private-universities"},
  S17:{t:"UGC: List of international universities (official)",u:"http://www.ugc-universities.gov.bd/international-universities"},
  S18:{t:"Dhaka Tribune: Gazette raises BCS maximum age to 32 (Dec 2024)",u:"https://www.dhakatribune.com/bangladesh/367871/gazette-published-increasing-the-maximum-age-for"},
  S19:{t:"Prothom Alo: Finance Division notification, Service (Salary and Allowances) Order 2026 (Sep 2026)",u:"https://en.prothomalo.com/bangladesh/xti7ukuxv0"},
  S20:{t:"Jugantor: Bangladesh Bank AD circular, age 21–32 (Jul 2026)",u:"https://www.jugantor.com/job-seek/1123685"},
  S21:{t:"Prothom Alo: Govt banks officer (general) circular, two first divisions required",u:"https://en.prothomalo.com/youth/jobs/jobs-circular-for-2046-vacant-posts-in-govt-banks-published"},
  S22:{t:"Bdjobs.com: live job circulars (entry-level sample)",u:"https://bdjobs.com/h/jobs"},
  S14:{t:"Dhaka Tribune: What madrasa students learn (Dakhil to Kamil)",u:"https://www.dhakatribune.com/bangladesh/bangladesh-others/135884/what-are-madrasa-students-actually-learning"}
};

/* Salary records: en / bn long text, short chip, source */
const PAY = {
  grade9:{s:"S1",short:["৳44,000 basic","মূল ৳৪৪,০০০"],
    en:"Basic Tk 44,000 under the 9th National Pay Scale (Grade 9), notified by the Finance Division in September 2026. It is phased in: Tk 30,800 from July 2026, Tk 37,400 from January 2027, full from July 2027. Once the new allowances start (January 2028) a new Grade 9 officer in Dhaka gets about Tk 70,000 in total.",
    bn:"৯ম জাতীয় বেতন স্কেলে গ্রেড ৯-এর মূল বেতন ৪৪,০০০ টাকা; অর্থ বিভাগ সেপ্টেম্বর ২০২৬-এ প্রজ্ঞাপন জারি করেছে। ধাপে ধাপে কার্যকর: জুলাই ২০২৬ থেকে ৩০,৮০০, জানুয়ারি ২০২৭ থেকে ৩৭,৪০০, জুলাই ২০২৭ থেকে পূর্ণ। নতুন ভাতা চালু হলে (জানুয়ারি ২০২৮) ঢাকায় নতুন কর্মকর্তা মোট প্রায় ৭০,০০০ টাকা পাবেন।"},
  grade10:{s:"S1",short:["৳32,000 basic","মূল ৳৩২,০০০"],
    en:"Grade 10 posts start at Tk 32,000 basic under the 9th Pay Scale (Tk 16,000 under the 2015 scale), phased in during 2026–27. Once new allowances start in 2028, total pay at entry is above Tk 50,000.",
    bn:"৯ম বেতন স্কেলে গ্রেড ১০-এর শুরুর মূল বেতন ৩২,০০০ টাকা (২০১৫ স্কেলে ছিল ১৬,০০০), ২০২৬–২৭ সালে ধাপে ধাপে কার্যকর। ২০২৮ সালে নতুন ভাতা চালু হলে শুরুতেই মোট বেতন ৫০,০০০ টাকার বেশি।"},
  grade13:{s:"S1",short:["৳24,000 basic","মূল ৳২৪,০০০"],
    en:"Grade 13 starts at Tk 24,000 basic under the 9th Pay Scale (was Tk 11,000). A newly recruited primary assistant teacher's total pay will be close to Tk 40,000 from 2028.",
    bn:"৯ম বেতন স্কেলে গ্রেড ১৩-এর শুরুর মূল বেতন ২৪,০০০ টাকা (আগে ছিল ১১,০০০)। ২০২৮ থেকে নতুন নিয়োগপ্রাপ্ত প্রাথমিক সহকারী শিক্ষকের মোট বেতন প্রায় ৪০,০০০ টাকা হবে।"},
  pvtbank:{s:"S2",short:["min ৳39,000","ন্যূনতম ৳৩৯,০০০"],
    en:"Bangladesh Bank minimum: at least Tk 28,000 a month during probation and at least Tk 39,000 in total after confirmation (2022 circular).",
    bn:"বাংলাদেশ ব্যাংকের নির্ধারিত ন্যূনতম: শিক্ষানবিশকালে মাসে অন্তত ২৮,০০০ টাকা, স্থায়ী হওয়ার পর মোট অন্তত ৩৯,০০০ টাকা (২০২২ সালের সার্কুলার)।"},
  software:{s:"S3",short:["৳25k–47k","৳২৫–৪৭ হাজার"],
    en:"Entry-level software engineers: about Tk 25,000–47,000 a month (2026 estimate).",
    bn:"এন্ট্রি লেভেল সফটওয়্যার ইঞ্জিনিয়ার: মাসে আনুমানিক ২৫,০০০–৪৭,০০০ টাকা (২০২৬ সালের হিসাব)।"},
  none:{s:null,short:["Varies","ভিন্ন ভিন্ন"],
    en:"No reliable public figure for this role. Check the salary stated in each circular.",
    bn:"এই পদের নির্ভরযোগ্য প্রকাশ্য তথ্য নেই। প্রতিটি বিজ্ঞপ্তিতে উল্লেখিত বেতন দেখে নিন।"}
};
/* Paylab sector averages (all experience levels) */
const PAYLAB = {p_it:[37057,"IT"],p_bank:[30923,"Banking"],p_pharma:[26686,"Pharmaceutical"],p_textile:[14657,"Textile, leather & apparel"],p_constr:[32330,"Construction & real estate"],p_elec:[25152,"Electrical & power engineering"],p_mech:[24025,"Mechanical engineering"],p_mkt:[23750,"Marketing, advertising & PR"],p_hr:[24580,"Human resources"],p_fin:[24807,"Economy, finance & accountancy"],p_edu:[20053,"Education, science & research"],p_journ:[20720,"Journalism & media"],p_law:[28927,"Law & legislation"],p_agri:[19377,"Agriculture & food"],p_med:[23485,"Medicine & social care"]};
const PAYLAB_BN = {p_it:"আইটি",p_bank:"ব্যাংকিং",p_pharma:"ওষুধশিল্প",p_textile:"টেক্সটাইল ও পোশাক",p_constr:"নির্মাণ ও আবাসন",p_elec:"বৈদ্যুতিক ও বিদ্যুৎ প্রকৌশল",p_mech:"যন্ত্র প্রকৌশল",p_mkt:"মার্কেটিং, বিজ্ঞাপন ও পিআর",p_hr:"মানবসম্পদ",p_fin:"অর্থনীতি, অর্থায়ন ও হিসাব",p_edu:"শিক্ষা ও গবেষণা",p_journ:"সাংবাদিকতা ও গণমাধ্যম",p_law:"আইন",p_agri:"কৃষি ও খাদ্য",p_med:"চিকিৎসা ও সমাজসেবা"};
for (const k in PAYLAB){ const [v,name]=PAYLAB[k]; const f=v.toLocaleString("en-US");
  PAY[k]={s:"S4",short:["avg ৳"+f+" (sector)","খাতের গড় ৳"+f],
    en:`Sector average across all experience levels: about Tk ${f} a month (${name}, Paylab survey). Entry pay is usually lower than this.`,
    bn:`সব অভিজ্ঞতার স্তর মিলিয়ে খাতের গড়: মাসে প্রায় ${f} টাকা (${PAYLAB_BN[k]}, পেল্যাব জরিপ)। শুরুর বেতন সাধারণত এর চেয়ে কম।`};
}

const SECTORS = {
  gov:{en:"Government",bn:"সরকারি চাকরি",c:"--l-gov"},
  bank:{en:"Banking & Finance",bn:"ব্যাংক ও আর্থিক খাত",c:"--l-bank"},
  it:{en:"IT & Software",bn:"আইটি ও সফটওয়্যার",c:"--l-it"},
  eng:{en:"Engineering & Power",bn:"প্রকৌশল ও বিদ্যুৎ",c:"--l-eng"},
  health:{en:"Pharma & Health",bn:"ওষুধ ও স্বাস্থ্য",c:"--l-health"},
  rmg:{en:"RMG & Textile",bn:"তৈরি পোশাক ও টেক্সটাইল",c:"--l-rmg"},
  ngo:{en:"Development & NGO",bn:"উন্নয়ন ও এনজিও",c:"--l-ngo"},
  mkt:{en:"Marketing & Sales",bn:"মার্কেটিং ও বিক্রয়",c:"--l-mkt"},
  edu:{en:"Education",bn:"শিক্ষা",c:"--l-edu"},
  media:{en:"Media & Creative",bn:"গণমাধ্যম ও সৃজনশীল কাজ",c:"--l-media"},
  law:{en:"Law & Justice",bn:"আইন ও বিচার",c:"--l-law"},
  agri:{en:"Agriculture",bn:"কৃষি",c:"--l-agri"},
  def:{en:"Defence & Aviation",bn:"প্রতিরক্ষা ও এভিয়েশন",c:"--l-def"},
  fmcg:{en:"FMCG, Retail & E-commerce",bn:"এফএমসিজি, রিটেইল ও ই-কমার্স",c:"--l-fmcg"},
  scm:{en:"Supply Chain & Logistics",bn:"সাপ্লাই চেইন ও লজিস্টিকস",c:"--l-scm"},
  tel:{en:"Telecom & Tech Services",bn:"টেলিকম ও প্রযুক্তি সেবা",c:"--l-tel"}
};

const DGRP = {eng:["Engineering & Architecture","প্রকৌশল ও স্থাপত্য"],life:["Health & Life Sciences","স্বাস্থ্য ও জীববিজ্ঞান"],sci:["Natural Sciences","বিজ্ঞান"],bus:["Business","ব্যবসায়"],arts:["Arts, Humanities & Social Sciences","কলা, মানবিক ও সমাজবিজ্ঞান"],law:["Law","আইন"],agri:["Agriculture","কৃষি"],isl:["Islamic Studies","ইসলামি শিক্ষা"]};

/* Disciplines. req: subject tags university admission usually needs; good: helpful tags */
const DISC = {
  cse:{g:"eng",en:"Computer Science & Engineering (CSE)",bn:"কম্পিউটার সায়েন্স ও ইঞ্জিনিয়ারিং (CSE)",req:["phy","math"],good:["chem","cs"]},
  eee:{g:"eng",en:"Electrical & Electronic Engineering (EEE)",bn:"ইলেকট্রিক্যাল ও ইলেকট্রনিক ইঞ্জিনিয়ারিং (EEE)",req:["phy","math","chem"],good:[]},
  civil:{g:"eng",en:"Civil Engineering",bn:"সিভিল ইঞ্জিনিয়ারিং",req:["phy","math","chem"],good:[]},
  me:{g:"eng",en:"Mechanical Engineering",bn:"মেকানিক্যাল ইঞ্জিনিয়ারিং",req:["phy","math","chem"],good:[]},
  textile:{g:"eng",en:"Textile Engineering",bn:"টেক্সটাইল ইঞ্জিনিয়ারিং",req:["phy","math","chem"],good:[]},
  arch:{g:"eng",en:"Architecture",bn:"স্থাপত্য (আর্কিটেকচার)",req:["phy","math"],good:["art"]},
  mbbs:{g:"life",en:"Medicine (MBBS)",bn:"মেডিসিন (এমবিবিএস)",req:["bio","chem","phy"],good:[]},
  pharmacy:{g:"life",en:"Pharmacy",bn:"ফার্মেসি",req:["chem","bio"],good:["phy","math"]},
  microbio:{g:"life",en:"Microbiology / Biochemistry",bn:"মাইক্রোবায়োলজি / বায়োকেমিস্ট্রি",req:["bio","chem"],good:[]},
  nursing:{g:"life",en:"Nursing",bn:"নার্সিং",req:["bio","chem"],good:[]},
  psych:{g:"life",en:"Psychology",bn:"মনোবিজ্ঞান",req:[],good:["psych","bio"]},
  physics_math:{g:"sci",en:"Physics / Mathematics / Statistics",bn:"পদার্থবিজ্ঞান / গণিত / পরিসংখ্যান",req:["math"],good:["phy"]},
  chem:{g:"sci",en:"Chemistry",bn:"রসায়ন",req:["chem"],good:["math"]},
  acc_fin:{g:"bus",en:"Accounting / Finance",bn:"হিসাববিজ্ঞান / ফিন্যান্স",req:[],good:["acc","bus","math"]},
  mkt_mgmt:{g:"bus",en:"Marketing / Management / HRM",bn:"মার্কেটিং / ম্যানেজমেন্ট / এইচআরএম",req:[],good:["bus"]},
  econ:{g:"bus",en:"Economics",bn:"অর্থনীতি",req:[],good:["econ","math"]},
  english:{g:"arts",en:"English",bn:"ইংরেজি",req:[],good:["eng","lit"]},
  socsci:{g:"arts",en:"Sociology / Political Science / Public Administration",bn:"সমাজবিজ্ঞান / রাষ্ট্রবিজ্ঞান / লোকপ্রশাসন",req:[],good:["soc"]},
  mass_comm:{g:"arts",en:"Mass Communication & Journalism",bn:"গণযোগাযোগ ও সাংবাদিকতা",req:[],good:["eng"]},
  design:{g:"arts",en:"Fine Arts / Graphic Design",bn:"চারুকলা / গ্রাফিক ডিজাইন",req:[],good:["art"]},
  law:{g:"law",en:"Law (LLB)",bn:"আইন (এলএলবি)",req:[],good:["law","eng"]},
  agri:{g:"agri",en:"Agriculture",bn:"কৃষি",req:["bio","chem"],good:["agri"]},
  vet:{g:"agri",en:"Veterinary Science (DVM)",bn:"ভেটেরিনারি সায়েন্স (ডিভিএম)",req:["bio","chem"],good:[]},
  fisheries:{g:"agri",en:"Fisheries",bn:"মৎস্যবিজ্ঞান",req:["bio","chem"],good:[]},
  dental:{g:"life",en:"Dentistry (BDS)",bn:"দন্তচিকিৎসা (বিডিএস)",req:["bio","chem","phy"],good:[]},
  medtech:{g:"life",en:"Physiotherapy / Medical Technology",bn:"ফিজিওথেরাপি / মেডিকেল টেকনোলজি",req:["bio","chem"],good:[]},
  pubhealth:{g:"life",en:"Public Health",bn:"জনস্বাস্থ্য",req:[],good:["bio"]},
  nutrition:{g:"life",en:"Food & Nutrition",bn:"খাদ্য ও পুষ্টি",req:["chem"],good:["bio"]},
  planning:{g:"eng",en:"Urban & Regional Planning",bn:"নগর ও অঞ্চল পরিকল্পনা",req:["phy","math"],good:["soc"]},
  maritime:{g:"eng",en:"Marine / Naval Architecture / Nautical Science",bn:"মেরিন / নেভাল আর্কিটেকচার / নটিক্যাল সায়েন্স",req:["phy","math"],good:["chem"]},
  aero:{g:"eng",en:"Aeronautical / Aerospace Engineering",bn:"অ্যারোনটিক্যাল / অ্যারোস্পেস ইঞ্জিনিয়ারিং",req:["phy","math","chem"],good:[]},
  fashion:{g:"arts",en:"Fashion Design & Apparel",bn:"ফ্যাশন ডিজাইন ও অ্যাপারেল",req:[],good:["art"]},
  music:{g:"arts",en:"Music / Theatre / Dance",bn:"সংগীত / নাট্যকলা / নৃত্য",req:[],good:["art"]},
  tourism:{g:"bus",en:"Tourism & Hospitality",bn:"ট্যুরিজম ও হসপিটালিটি",req:[],good:["bus","eng"]},
  educ:{g:"arts",en:"Education (BEd / MEd)",bn:"শিক্ষা (বিএড / এমএড)",req:[],good:[]},
  physed:{g:"arts",en:"Physical Education & Sports Science",bn:"শারীরিক শিক্ষা ও ক্রীড়াবিজ্ঞান",req:[],good:["bio"]},
  islamic:{g:"isl",en:"Islamic Studies / Arabic",bn:"ইসলামিক স্টাডিজ / আরবি",req:[],good:["isl"]}
};
const ALLD = Object.keys(DISC);
const ENGD = ["cse","eee","civil","me","textile","arch"];

/* Skill dictionary */
const SK = {
  ga:["General knowledge & current affairs","সাধারণ জ্ঞান ও সাম্প্রতিক বিষয়"],
  math:["Math & mental ability","গণিত ও মানসিক দক্ষতা"],
  eng:["English writing & speaking","ইংরেজিতে লেখা ও বলা"],
  bangla:["Bangla language & literature","বাংলা ভাষা ও সাহিত্য"],
  bank:["Banking basics (credit, deposits, KYC)","ব্যাংকিংয়ের মৌলিক বিষয় (ঋণ, আমানত, কেওয়াইসি)"],
  excel:["Excel & spreadsheets","এক্সেল ও স্প্রেডশিট"],
  acc:["Accounting & IFRS basics","হিসাববিজ্ঞান ও আইএফআরএস"],
  erp:["ERP software (e.g. SAP, Tally)","ইআরপি সফটওয়্যার (যেমন SAP, Tally)"],
  prog:["Programming in one language, done well","একটি প্রোগ্রামিং ভাষায় ভালো দক্ষতা"],
  dsa:["Data structures & algorithms","ডেটা স্ট্রাকচার ও অ্যালগরিদম"],
  git:["Git & a GitHub portfolio","গিট ও গিটহাব পোর্টফোলিও"],
  test:["Manual & automated testing","ম্যানুয়াল ও অটোমেটেড টেস্টিং"],
  sql:["SQL","এসকিউএল"],
  viz:["Power BI or Tableau dashboards","পাওয়ার বিআই বা ট্যাবলো ড্যাশবোর্ড"],
  stats:["Statistics","পরিসংখ্যান"],
  net:["Networking (CCNA level)","নেটওয়ার্কিং (CCNA পর্যায়)"],
  cad:["AutoCAD","অটোক্যাড"],
  d3:["Revit / SketchUp","রেভিট / স্কেচআপ"],
  estim:["Estimation & site supervision","এস্টিমেশন ও সাইট তত্ত্বাবধান"],
  power:["Power systems & electrical safety","পাওয়ার সিস্টেম ও বৈদ্যুতিক নিরাপত্তা"],
  maint:["Maintenance & lean production","রক্ষণাবেক্ষণ ও লিন প্রোডাকশন"],
  garment:["Fabric, costing & buyer handling","ফ্যাব্রিক, কস্টিং ও বায়ার সামলানো"],
  ie:["Time study & line balancing","টাইম স্টাডি ও লাইন ব্যালান্সিং"],
  labour:["Bangladesh Labour Act & buyer codes","বাংলাদেশ শ্রম আইন ও বায়ার কোড"],
  gmp:["GMP & quality documentation","জিএমপি ও কোয়ালিটি ডকুমেন্টেশন"],
  lab:["Lab instruments (HPLC etc.)","ল্যাব যন্ত্রপাতি (HPLC ইত্যাদি)"],
  present:["Presentation & persuasion","উপস্থাপন ও বোঝানোর দক্ষতা"],
  clinical:["Clinical skills","ক্লিনিক্যাল দক্ষতা"],
  counsel:["Counselling & active listening","কাউন্সেলিং ও মনোযোগী শোনা"],
  proposal:["Proposal & report writing","প্রস্তাবনা ও রিপোর্ট লেখা"],
  field:["Field coordination","মাঠপর্যায়ের সমন্বয়"],
  survey:["Survey tools (KoBo, ODK)","সার্ভে টুল (KoBo, ODK)"],
  ads:["Facebook & Google Ads","ফেসবুক ও গুগল অ্যাডস"],
  seo:["SEO & analytics","এসইও ও অ্যানালিটিক্স"],
  copy:["Copywriting","কপিরাইটিং"],
  sales:["Negotiation & CRM","দরকষাকষি ও সিআরএম"],
  hr:["Recruitment & payroll","নিয়োগ ও পে-রোল"],
  teach:["Lesson planning & classroom skills","পাঠ পরিকল্পনা ও শ্রেণি পরিচালনা"],
  research:["Research & publications","গবেষণা ও প্রকাশনা"],
  report:["News writing & fact-checking","সংবাদ লেখা ও তথ্য যাচাই"],
  draft:["Legal drafting","আইনি খসড়া প্রণয়ন"],
  lawkn:["Bangladesh laws & procedure","বাংলাদেশের আইন ও কার্যপ্রণালী"],
  agro:["Crop, soil & extension work","ফসল, মাটি ও সম্প্রসারণ কাজ"],
  adobe:["Photoshop, Illustrator, Figma","ফটোশপ, ইলাস্ট্রেটর, ফিগমা"],
  folio:["A portfolio (e.g. Behance)","পোর্টফোলিও (যেমন বিহান্স)"]
};

const WHERE = {
  gov:[["BPSC (BCS circulars)","https://bpsc.gov.bd"],["Teletalk all jobs","https://alljobs.teletalk.com.bd"]],
  bb:[["Bangladesh Bank e-Recruitment","https://erecruitment.bb.org.bd"]],
  pvt:[["Bdjobs","https://www.bdjobs.com"],["LinkedIn Jobs","https://www.linkedin.com/jobs/"]],
  ngo:[["Bdjobs","https://www.bdjobs.com"],["ReliefWeb Jobs","https://reliefweb.int/jobs"]],
  bjsc:[["Bangladesh Judicial Service Commission","https://bjsc.gov.bd"]],
  def:[["ISSB (Inter Services Selection Board)",""],["Teletalk all jobs","https://alljobs.teletalk.com.bd"]]
};

/* Roles.
  rule: any | relevant | skills | licensed
  req4: needs 4-yr Honours or Master's  engr: engineer post (diploma -> SAE)
  res: result rule key   t: pub | priv | both   int: interests */
const GENNOTE=["Master's, or a 4-year Bachelor's after HSC, in any subject. Age 21–32 for all candidates, with no limit on attempts (BCS rules amended December 2024). Three stages: preliminary, written, viva. Each circular sets its own result rules (for example, limits on third division), so read it before applying.","এইচএসসির পর ৪ বছরের স্নাতক বা মাস্টার্স, যেকোনো বিষয়। সব প্রার্থীর বয়স ২১–৩২, অংশগ্রহণের সংখ্যায় কোনো সীমা নেই (ডিসেম্বর ২০২৪-এ বিসিএস বিধি সংশোধিত)। তিন ধাপ: প্রিলিমিনারি, লিখিত, মৌখিক। ফলাফলের শর্ত (যেমন তৃতীয় বিভাগ সংক্রান্ত) প্রতিটি বিজ্ঞপ্তিতে আলাদা, আবেদনের আগে পড়ে নিন।"];
const TECHNOTE=["This technical cadre accepts only the matching degree. Age 21–32. Check the circular for result rules.","এই কারিগরি ক্যাডারে শুধু সংশ্লিষ্ট ডিগ্রি গ্রহণযোগ্য। বয়স ২১–৩২। ফলাফলের শর্ত বিজ্ঞপ্তিতে দেখে নিন।"];
const ROLES = {
  bcs_admin:{sec:"gov",en:"BCS Administration (Assistant Commissioner)",bn:"বিসিএস প্রশাসন (সহকারী কমিশনার)",rule:"any",direct:[],bridge:[],req4:1,t:"pub",pay:"grade9",where:"gov",
    ladder:[["Upazila Nirbahi Officer (UNO)","উপজেলা নির্বাহী অফিসার (ইউএনও)"],["Deputy Secretary","উপসচিব"]],sk:["ga","math","eng","bangla"],int:["rules","lead","people"],note:GENNOTE,ns:"S18"},
  bcs_police:{sec:"gov",en:"BCS Police (Assistant Superintendent)",bn:"বিসিএস পুলিশ (সহকারী পুলিশ সুপার)",rule:"any",direct:["law","socsci"],bridge:[],req4:1,t:"pub",pay:"grade9",where:"gov",
    ladder:[["Additional SP","অতিরিক্ত পুলিশ সুপার"],["Superintendent of Police","পুলিশ সুপার"]],sk:["ga","eng","lawkn"],int:["rules","lead"],
    note:["Any subject, age 21–32. Police cadre candidates must also meet physical fitness standards.","যেকোনো বিষয়, বয়স ২১–৩২। পুলিশ ক্যাডারে শারীরিক যোগ্যতার মানও পূরণ করতে হয়।"],ns:"S7"},
  bcs_foreign:{sec:"gov",en:"BCS Foreign Affairs (Assistant Secretary)",bn:"বিসিএস পররাষ্ট্র (সহকারী সচিব)",rule:"any",direct:["english","socsci","econ","law"],bridge:[],req4:1,t:"pub",pay:"grade9",where:"gov",
    ladder:[["Counsellor at a mission","দূতাবাসে কাউন্সেলর"],["Ambassador","রাষ্ট্রদূত"]],sk:["eng","ga","present"],int:["people","rules","writing"],note:GENNOTE,ns:"S18"},
  bcs_tax:{sec:"gov",en:"BCS Taxation (Assistant Commissioner of Taxes)",bn:"বিসিএস কর (সহকারী কর কমিশনার)",rule:"any",direct:["acc_fin","econ"],bridge:[],req4:1,t:"pub",pay:"grade9",where:"gov",
    ladder:[["Deputy Commissioner of Taxes","উপ কর কমিশনার"],["Commissioner of Taxes","কর কমিশনার"]],sk:["acc","ga","math"],int:["numbers","rules"],note:GENNOTE,ns:"S18"},
  bcs_customs:{sec:"gov",en:"BCS Customs & Excise (Assistant Commissioner)",bn:"বিসিএস শুল্ক ও আবগারি (সহকারী কমিশনার)",rule:"any",direct:["acc_fin","econ"],bridge:[],req4:1,t:"pub",pay:"grade9",where:"gov",
    ladder:[["Deputy Commissioner","উপ কমিশনার"],["Commissioner","কমিশনার"]],sk:["ga","math","eng"],int:["numbers","rules"],note:GENNOTE,ns:"S18"},
  bcs_audit:{sec:"gov",en:"BCS Audit & Accounts",bn:"বিসিএস নিরীক্ষা ও হিসাব",rule:"any",direct:["acc_fin"],bridge:[],req4:1,t:"pub",pay:"grade9",where:"gov",
    ladder:[["Senior officer","জ্যেষ্ঠ কর্মকর্তা"],["Director","পরিচালক"]],sk:["acc","excel","ga"],int:["numbers","rules"],note:GENNOTE,ns:"S18"},
  bcs_info:{sec:"gov",en:"BCS Information",bn:"বিসিএস তথ্য",rule:"any",direct:["mass_comm","english"],bridge:[],req4:1,t:"pub",pay:"grade9",where:"gov",
    ladder:[["Senior officer","জ্যেষ্ঠ কর্মকর্তা"],["Director","পরিচালক"]],sk:["report","bangla","eng"],int:["writing","people"],note:GENNOTE,ns:"S18"},
  bcs_health:{sec:"gov",en:"BCS Health (Assistant Surgeon)",bn:"বিসিএস স্বাস্থ্য (সহকারী সার্জন)",rule:"licensed",direct:["mbbs"],bridge:[],req4:1,t:"pub",pay:"grade9",where:"gov",
    ladder:[["Specialist / Consultant","বিশেষজ্ঞ / কনসালট্যান্ট"],["Civil Surgeon","সিভিল সার্জন"]],sk:["clinical","ga"],int:["science","helping"],note:TECHNOTE},
  bcs_rnh:{sec:"gov",en:"BCS Roads & Highways (Assistant Engineer)",bn:"বিসিএস সড়ক ও জনপথ (সহকারী প্রকৌশলী)",rule:"relevant",direct:["civil"],bridge:[],req4:1,engr:1,t:"pub",pay:"grade9",where:"gov",
    ladder:[["Executive Engineer","নির্বাহী প্রকৌশলী"],["Superintending Engineer","তত্ত্বাবধায়ক প্রকৌশলী"]],sk:["cad","estim","ga"],int:["build","rules"],note:TECHNOTE},
  bcs_pwd:{sec:"gov",en:"BCS Public Works (Assistant Engineer / Architect)",bn:"বিসিএস গণপূর্ত (সহকারী প্রকৌশলী / স্থপতি)",rule:"relevant",direct:["civil","eee","arch"],bridge:[],req4:1,engr:1,t:"pub",pay:"grade9",where:"gov",
    ladder:[["Executive Engineer","নির্বাহী প্রকৌশলী"],["Chief Engineer","প্রধান প্রকৌশলী"]],sk:["cad","estim","ga"],int:["build","creative"],note:TECHNOTE},
  bcs_agri:{sec:"gov",en:"BCS Agriculture (Agriculture Extension Officer)",bn:"বিসিএস কৃষি (কৃষি সম্প্রসারণ কর্মকর্তা)",rule:"relevant",direct:["agri"],bridge:[],req4:1,t:"pub",pay:"grade9",where:"gov",
    ladder:[["Upazila Agriculture Officer","উপজেলা কৃষি কর্মকর্তা"],["Deputy Director","উপপরিচালক"]],sk:["agro","ga"],int:["nature","science"],note:TECHNOTE},
  bcs_livestock:{sec:"gov",en:"BCS Livestock (Veterinary Surgeon)",bn:"বিসিএস প্রাণিসম্পদ (ভেটেরিনারি সার্জন)",rule:"relevant",direct:["vet"],bridge:[],req4:1,t:"pub",pay:"grade9",where:"gov",
    ladder:[["Upazila Livestock Officer","উপজেলা প্রাণিসম্পদ কর্মকর্তা"],["District Livestock Officer","জেলা প্রাণিসম্পদ কর্মকর্তা"]],sk:["clinical","ga"],int:["nature","science","helping"],note:TECHNOTE},
  bcs_fisheries:{sec:"gov",en:"BCS Fisheries (Fisheries Officer)",bn:"বিসিএস মৎস্য (মৎস্য কর্মকর্তা)",rule:"relevant",direct:["fisheries"],bridge:[],req4:1,t:"pub",pay:"grade9",where:"gov",
    ladder:[["Upazila Fisheries Officer","উপজেলা মৎস্য কর্মকর্তা"],["District Fisheries Officer","জেলা মৎস্য কর্মকর্তা"]],sk:["agro","ga"],int:["nature","science"],note:TECHNOTE},
  bcs_education:{sec:"gov",en:"BCS General Education: Lecturer, Govt College",bn:"বিসিএস সাধারণ শিক্ষা: প্রভাষক, সরকারি কলেজ",rule:"relevant",direct:["physics_math","chem","acc_fin","mkt_mgmt","econ","english","socsci","microbio","psych","islamic","design"],bridge:[],req4:1,t:"pub",pay:"grade9",where:"gov",
    ladder:[["Assistant Professor","সহকারী অধ্যাপক"],["Professor","অধ্যাপক"]],sk:["teach","ga","eng"],int:["teaching"],
    note:["Govt college lecturer posts are subject-specific: you teach the subject you studied.","সরকারি কলেজের প্রভাষক পদ বিষয়ভিত্তিক: যে বিষয়ে পড়েছেন, সেটিই পড়াবেন।"]},
  bb_ad:{sec:"bank",en:"Bangladesh Bank Assistant Director",bn:"বাংলাদেশ ব্যাংক সহকারী পরিচালক",rule:"any",direct:[],bridge:[],req4:1,res:"bbad",t:"pub",pay:"grade9",where:"bb",
    ladder:[["Deputy Director","উপপরিচালক"],["Director","পরিচালক"]],sk:["math","eng","ga","bank"],int:["numbers","rules"],
    note:["4-year Honours or Master's in any subject (the ICT track needs a computing or EEE degree). The 2023 circular asked for first division or class in at least two exams from SSC upward and no third division anywhere. Age 21–32 in the 2026 circular.","যেকোনো বিষয়ে ৪ বছরের অনার্স বা মাস্টার্স (আইসিটি পদে কম্পিউটার বা ইইই ডিগ্রি লাগে)। ২০২৩ সালের বিজ্ঞপ্তিতে এসএসসি থেকে অন্তত দুটি পরীক্ষায় প্রথম বিভাগ/শ্রেণি চাওয়া হয়েছিল, কোথাও তৃতীয় বিভাগ চলবে না। ২০২৬ সালের বিজ্ঞপ্তিতে বয়স ২১–৩২।"],ns:"S20"},
  state_bank:{sec:"bank",en:"Officer, State-owned Banks",bn:"অফিসার, রাষ্ট্রায়ত্ত ব্যাংক",rule:"any",direct:[],bridge:[],req4:1,res:"statebank",t:"pub",pay:"grade10",where:"bb",
    ladder:[["Principal Officer","প্রিন্সিপাল অফিসার"],["Branch Manager","শাখা ব্যবস্থাপক"]],sk:["math","eng","ga","bank"],int:["numbers","people"],
    note:["Combined recruitment for Sonali, Janata, Agrani, Rupali and other state-owned banks. 4-year Honours or Master's in any discipline, no third division or class. Circulars ask for first division or class in at least one exam (cash) or two exams (general officer).","সোনালী, জনতা, অগ্রণী, রূপালীসহ রাষ্ট্রায়ত্ত ব্যাংকের সমন্বিত নিয়োগ। যেকোনো বিষয়ে ৪ বছরের অনার্স বা মাস্টার্স, তৃতীয় বিভাগ/শ্রেণি চলবে না। বিজ্ঞপ্তিভেদে অন্তত একটি (ক্যাশ) বা দুটি (সাধারণ অফিসার) পরীক্ষায় প্রথম বিভাগ/শ্রেণি চাওয়া হয়।"],ns:"S6"},
  pvt_bank:{sec:"bank",en:"Management Trainee Officer, Private Bank",bn:"ম্যানেজমেন্ট ট্রেইনি অফিসার, বেসরকারি ব্যাংক",rule:"any",direct:["acc_fin","econ","mkt_mgmt"],bridge:[],req4:1,res:"pvtbank",t:"priv",pay:"pvtbank",where:"pvt",
    ladder:[["Relationship / Credit Officer","রিলেশনশিপ / ক্রেডিট অফিসার"],["Branch Manager","শাখা ব্যবস্থাপক"]],sk:["bank","excel","eng","present"],int:["numbers","people"],
    note:["Most private banks accept any discipline for MTO and Trainee Officer posts. Result cut-offs are set by each bank and are often high.","অধিকাংশ বেসরকারি ব্যাংক এমটিও ও ট্রেইনি অফিসার পদে যেকোনো বিষয় গ্রহণ করে। ফলাফলের শর্ত প্রতিটি ব্যাংক নিজে ঠিক করে, এবং তা প্রায়ই বেশ উঁচু।"],ns:"S9"},
  accountant:{sec:"bank",en:"Accounts Executive",bn:"অ্যাকাউন্টস এক্সিকিউটিভ",rule:"relevant",direct:["acc_fin"],bridge:["econ","mkt_mgmt"],t:"priv",pay:"p_fin",where:"pvt",
    ladder:[["Senior Accountant","সিনিয়র অ্যাকাউন্ট্যান্ট"],["Finance Manager","ফিন্যান্স ম্যানেজার"]],sk:["acc","excel","erp"],int:["numbers","rules"]},
  audit:{sec:"bank",en:"Audit Associate / CA Article Student",bn:"অডিট অ্যাসোসিয়েট / সিএ আর্টিকেল স্টুডেন্ট",rule:"relevant",direct:["acc_fin"],bridge:["econ","mkt_mgmt","physics_math","cse"],t:"priv",pay:"p_fin",where:"pvt",
    ladder:[["Chartered Accountant (ICAB)","চার্টার্ড অ্যাকাউন্ট্যান্ট (আইসিএবি)"],["CFO","সিএফও"]],sk:["acc","excel","eng"],int:["numbers","rules"],
    note:["Becoming a Chartered Accountant goes through ICAB articleship and exams.","চার্টার্ড অ্যাকাউন্ট্যান্ট হতে আইসিএবি-র আর্টিকেলশিপ ও পরীক্ষা পার হতে হয়।"]},
  software:{sec:"it",en:"Junior Software Engineer",bn:"জুনিয়র সফটওয়্যার ইঞ্জিনিয়ার",rule:"skills",direct:["cse"],bridge:[],t:"priv",pay:"software",where:"pvt",
    ladder:[["Software Engineer","সফটওয়্যার ইঞ্জিনিয়ার"],["Senior / Tech Lead","সিনিয়র / টেক লিড"]],sk:["prog","dsa","git","sql"],int:["tech","creative"]},
  qa:{sec:"it",en:"SQA Engineer",bn:"এসকিউএ ইঞ্জিনিয়ার",rule:"skills",direct:["cse"],bridge:[],t:"priv",pay:"p_it",where:"pvt",
    ladder:[["Senior SQA Engineer","সিনিয়র এসকিউএ ইঞ্জিনিয়ার"],["QA Lead","কিউএ লিড"]],sk:["test","sql","prog"],int:["tech","rules"]},
  data:{sec:"it",en:"Junior Data Analyst / MIS Executive",bn:"জুনিয়র ডেটা অ্যানালিস্ট / এমআইএস এক্সিকিউটিভ",rule:"skills",direct:["physics_math","cse","econ"],bridge:[],t:"priv",pay:"p_it",where:"pvt",
    ladder:[["Data Analyst","ডেটা অ্যানালিস্ট"],["Analytics Manager","অ্যানালিটিক্স ম্যানেজার"]],sk:["excel","sql","viz","stats"],int:["numbers","tech"]},
  network:{sec:"it",en:"Network / System Engineer",bn:"নেটওয়ার্ক / সিস্টেম ইঞ্জিনিয়ার",rule:"relevant",direct:["cse","eee"],bridge:["physics_math"],t:"both",pay:"p_it",where:"pvt",
    ladder:[["System Administrator","সিস্টেম অ্যাডমিনিস্ট্রেটর"],["IT Manager","আইটি ম্যানেজার"]],sk:["net","prog"],int:["tech","build"]},
  civil_site:{sec:"eng",en:"Site Engineer (Civil)",bn:"সাইট ইঞ্জিনিয়ার (সিভিল)",rule:"relevant",direct:["civil"],bridge:[],engr:1,t:"both",pay:"p_constr",where:"pvt",
    ladder:[["Project Engineer","প্রজেক্ট ইঞ্জিনিয়ার"],["Project Manager","প্রজেক্ট ম্যানেজার"]],sk:["cad","estim"],int:["build","lead"]},
  electrical:{sec:"eng",en:"Electrical / Power Plant Engineer",bn:"ইলেকট্রিক্যাল / পাওয়ার প্ল্যান্ট ইঞ্জিনিয়ার",rule:"relevant",direct:["eee"],bridge:[],engr:1,t:"both",pay:"p_elec",where:"pvt",
    ladder:[["Shift Engineer","শিফট ইঞ্জিনিয়ার"],["Plant Manager","প্ল্যান্ট ম্যানেজার"]],sk:["power","cad"],int:["build","tech"]},
  mech:{sec:"eng",en:"Maintenance / Production Engineer",bn:"মেইনটেন্যান্স / প্রোডাকশন ইঞ্জিনিয়ার",rule:"relevant",direct:["me"],bridge:["eee","textile"],engr:1,t:"priv",pay:"p_mech",where:"pvt",
    ladder:[["Senior Engineer","সিনিয়র ইঞ্জিনিয়ার"],["Factory Manager","ফ্যাক্টরি ম্যানেজার"]],sk:["maint","cad"],int:["build"]},
  architect:{sec:"eng",en:"Junior Architect",bn:"জুনিয়র আর্কিটেক্ট",rule:"relevant",direct:["arch"],bridge:[],t:"priv",pay:"p_constr",where:"pvt",
    ladder:[["Architect","আর্কিটেক্ট"],["Principal Architect","প্রিন্সিপাল আর্কিটেক্ট"]],sk:["cad","d3","folio"],int:["build","creative"]},
  merch:{sec:"rmg",en:"Assistant Merchandiser",bn:"সহকারী মার্চেন্ডাইজার",rule:"skills",direct:["textile"],bridge:[],t:"priv",pay:"p_textile",where:"pvt",
    ladder:[["Merchandiser","মার্চেন্ডাইজার"],["Merchandising Manager","মার্চেন্ডাইজিং ম্যানেজার"]],sk:["garment","eng","excel"],int:["people","creative","numbers"]},
  ie:{sec:"rmg",en:"IE / Production Planning Executive",bn:"আইই / প্রোডাকশন প্ল্যানিং এক্সিকিউটিভ",rule:"relevant",direct:["textile","me"],bridge:["physics_math","eee"],t:"priv",pay:"p_textile",where:"pvt",
    ladder:[["IE Manager","আইই ম্যানেজার"],["Production Manager","প্রোডাকশন ম্যানেজার"]],sk:["ie","excel"],int:["numbers","build"]},
  compliance:{sec:"rmg",en:"Compliance Officer",bn:"কমপ্লায়েন্স অফিসার",rule:"relevant",direct:["law","socsci","textile"],bridge:["english","mkt_mgmt","psych"],t:"priv",pay:"p_textile",where:"pvt",
    ladder:[["Compliance Manager","কমপ্লায়েন্স ম্যানেজার"],["Head of Sustainability","সাসটেইনেবিলিটি প্রধান"]],sk:["labour","eng","proposal"],int:["rules","helping"]},
  pharmacist:{sec:"health",en:"Production / QA Pharmacist",bn:"প্রোডাকশন / কিউএ ফার্মাসিস্ট",rule:"licensed",direct:["pharmacy"],bridge:[],t:"priv",pay:"p_pharma",where:"pvt",
    ladder:[["Senior Executive","সিনিয়র এক্সিকিউটিভ"],["Plant / QA Manager","প্ল্যান্ট / কিউএ ম্যানেজার"]],sk:["gmp","lab"],int:["science"],
    note:["B.Pharm plus registration with the Pharmacy Council of Bangladesh.","বি.ফার্ম এবং বাংলাদেশ ফার্মেসি কাউন্সিলে নিবন্ধন।"]},
  qc:{sec:"health",en:"QC Officer (Pharma / Food)",bn:"কিউসি অফিসার (ওষুধ / খাদ্য)",rule:"relevant",direct:["chem","microbio","pharmacy"],bridge:["agri"],t:"priv",pay:"p_pharma",where:"pvt",
    ladder:[["Senior QC Officer","সিনিয়র কিউসি অফিসার"],["QC Manager","কিউসি ম্যানেজার"]],sk:["lab","gmp"],int:["science","rules"]},
  mpo:{sec:"health",en:"Medical Promotion Officer",bn:"মেডিকেল প্রমোশন অফিসার",rule:"any",direct:["pharmacy","microbio","chem"],bridge:[],t:"priv",pay:"p_pharma",where:"pvt",
    ladder:[["Area Manager","এরিয়া ম্যানেজার"],["Product Manager","প্রোডাক্ট ম্যানেজার"]],sk:["present","sales"],int:["people","science"],
    note:["Usually open to any graduate; a science background is preferred. Expect a lot of field travel.","সাধারণত যেকোনো স্নাতক আবেদন করতে পারেন; বিজ্ঞানের ব্যাকগ্রাউন্ড অগ্রাধিকার পায়। মাঠপর্যায়ে প্রচুর ভ্রমণ করতে হয়।"]},
  doctor:{sec:"health",en:"Medical Officer",bn:"মেডিকেল অফিসার",rule:"licensed",direct:["mbbs"],bridge:[],t:"both",pay:"p_med",where:"pvt",
    ladder:[["Specialist (FCPS / MD / MS)","বিশেষজ্ঞ (এফসিপিএস / এমডি / এমএস)"],["Consultant / Professor","কনসালট্যান্ট / অধ্যাপক"]],sk:["clinical"],int:["science","helping"],
    note:["MBBS plus BMDC registration after internship.","এমবিবিএস এবং ইন্টার্নশিপ শেষে বিএমডিসি নিবন্ধন।"]},
  counselor:{sec:"health",en:"Counselling Psychologist (trainee)",bn:"কাউন্সেলিং সাইকোলজিস্ট (প্রশিক্ষণার্থী)",rule:"relevant",direct:["psych"],bridge:["socsci"],t:"both",pay:"none",where:"ngo",
    ladder:[["Psychologist","সাইকোলজিস্ট"],["Clinical Lead","ক্লিনিক্যাল লিড"]],sk:["counsel","research"],int:["helping","people","science"],
    note:["Clinical or counselling practice usually needs a specialised Master's (MS or MPhil) and supervised hours.","ক্লিনিক্যাল বা কাউন্সেলিং প্র্যাকটিসে সাধারণত বিশেষায়িত মাস্টার্স (এমএস বা এমফিল) এবং তত্ত্বাবধানে কাজের অভিজ্ঞতা লাগে।"]},
  program:{sec:"ngo",en:"Program / Project Officer",bn:"প্রোগ্রাম / প্রজেক্ট অফিসার",rule:"relevant",direct:["socsci","econ"],bridge:["english","agri","mass_comm","law","mkt_mgmt","acc_fin","physics_math","psych","islamic"],t:"priv",pay:"none",where:"ngo",
    ladder:[["Project Manager","প্রজেক্ট ম্যানেজার"],["Country Program Lead","কান্ট্রি প্রোগ্রাম লিড"]],sk:["proposal","field","eng"],int:["helping","people","lead"]},
  meo:{sec:"ngo",en:"M&E Officer",bn:"এমঅ্যান্ডই অফিসার",rule:"relevant",direct:["socsci","econ","physics_math"],bridge:["agri","mkt_mgmt","cse","english","mass_comm","psych"],t:"priv",pay:"none",where:"ngo",
    ladder:[["M&E Specialist","এমঅ্যান্ডই বিশেষজ্ঞ"],["MEAL Manager","এমইএএল ম্যানেজার"]],sk:["survey","stats","excel"],int:["numbers","helping"]},
  dm:{sec:"mkt",en:"Digital Marketing Executive",bn:"ডিজিটাল মার্কেটিং এক্সিকিউটিভ",rule:"skills",direct:["mkt_mgmt","mass_comm"],bridge:[],t:"priv",pay:"p_mkt",where:"pvt",
    ladder:[["Digital Marketing Manager","ডিজিটাল মার্কেটিং ম্যানেজার"],["Head of Marketing","মার্কেটিং প্রধান"]],sk:["ads","seo","copy"],int:["creative","tech","writing"]},
  sales:{sec:"mkt",en:"Sales / Business Development Executive",bn:"সেলস / বিজনেস ডেভেলপমেন্ট এক্সিকিউটিভ",rule:"any",direct:["mkt_mgmt"],bridge:[],t:"priv",pay:"p_mkt",where:"pvt",
    ladder:[["Territory / Key Account Manager","টেরিটরি / কি-অ্যাকাউন্ট ম্যানেজার"],["Head of Sales","বিক্রয় প্রধান"]],sk:["sales","present","excel"],int:["people","lead"]},
  hr:{sec:"mkt",en:"HR Executive",bn:"এইচআর এক্সিকিউটিভ",rule:"relevant",direct:["mkt_mgmt"],bridge:["socsci","english","law","econ","mass_comm","psych"],t:"priv",pay:"p_hr",where:"pvt",
    ladder:[["HR Manager","এইচআর ম্যানেজার"],["Head of HR","এইচআর প্রধান"]],sk:["hr","labour","excel"],int:["people","rules"]},
  teacher:{sec:"edu",en:"School Teacher (subject teacher)",bn:"স্কুল শিক্ষক (বিষয়ভিত্তিক)",rule:"relevant",direct:["english","physics_math","chem","acc_fin","econ","microbio","socsci","cse","islamic","design","psych","educ"],bridge:["mkt_mgmt","physed","music","nutrition","mass_comm","eee","civil","me","agri","law","pharmacy","textile","arch"],t:"both",pay:"p_edu",where:"pvt",
    ladder:[["Senior Teacher","সিনিয়র শিক্ষক"],["Head Teacher / Principal","প্রধান শিক্ষক / অধ্যক্ষ"]],sk:["teach","eng"],int:["teaching","helping"],
    note:["Teaching posts in non-government (MPO) schools and colleges need the NTRCA teacher registration certificate. English-medium and private schools hire directly.","বেসরকারি (এমপিওভুক্ত) স্কুল-কলেজে শিক্ষক হতে এনটিআরসিএ শিক্ষক নিবন্ধন সনদ লাগে। ইংলিশ মিডিয়াম ও বেসরকারি স্কুল সরাসরি নিয়োগ দেয়।"]},
  lecturer:{sec:"edu",en:"Lecturer, Private University",bn:"প্রভাষক, বেসরকারি বিশ্ববিদ্যালয়",rule:"relevant",direct:ALLD,bridge:[],req4:1,res:"lecturer",t:"priv",pay:"none",where:"pvt",
    ladder:[["Assistant Professor (after PhD / publications)","সহকারী অধ্যাপক (পিএইচডি / প্রকাশনার পর)"],["Professor","অধ্যাপক"]],sk:["research","teach"],int:["teaching","science"],
    note:["You teach your own subject. A strong CGPA and often a Master's are expected.","নিজের বিষয়েই পড়াবেন। ভালো সিজিপিএ এবং প্রায়ই মাস্টার্স প্রত্যাশিত।"]},
  journalist:{sec:"media",en:"Staff Reporter / Sub-editor",bn:"স্টাফ রিপোর্টার / সহ-সম্পাদক",rule:"skills",direct:["mass_comm"],bridge:[],t:"priv",pay:"p_journ",where:"pvt",
    ladder:[["Senior Reporter","সিনিয়র রিপোর্টার"],["Editor","সম্পাদক"]],sk:["report","eng","bangla"],int:["writing","people"]},
  content:{sec:"media",en:"Content Writer / Copywriter",bn:"কনটেন্ট রাইটার / কপিরাইটার",rule:"skills",direct:["english","mass_comm"],bridge:[],t:"priv",pay:"p_mkt",where:"pvt",
    ladder:[["Content Lead","কনটেন্ট লিড"],["Creative Director","ক্রিয়েটিভ ডিরেক্টর"]],sk:["copy","seo","eng"],int:["writing","creative"]},
  designer:{sec:"media",en:"Graphic Designer",bn:"গ্রাফিক ডিজাইনার",rule:"skills",direct:["design","arch"],bridge:[],t:"priv",pay:"none",where:"pvt",
    ladder:[["Senior Designer","সিনিয়র ডিজাইনার"],["Art Director","আর্ট ডিরেক্টর"]],sk:["adobe","folio"],int:["creative","tech"]},
  advocate:{sec:"law",en:"Junior Advocate (District Court)",bn:"জুনিয়র আইনজীবী (জেলা আদালত)",rule:"licensed",direct:["law"],bridge:[],t:"priv",pay:"p_law",where:"pvt",
    ladder:[["High Court Advocate","হাইকোর্টের আইনজীবী"],["Senior Advocate","জ্যেষ্ঠ আইনজীবী"]],sk:["draft","lawkn"],int:["rules","people"],
    note:["LLB, then enrolment with the Bangladesh Bar Council (written exam and viva) before you can practise.","এলএলবির পর প্র্যাকটিস করতে বাংলাদেশ বার কাউন্সিলে তালিকাভুক্তি (লিখিত ও মৌখিক পরীক্ষা) লাগে।"]},
  legal:{sec:"law",en:"Legal Officer (bank / corporate)",bn:"লিগ্যাল অফিসার (ব্যাংক / কর্পোরেট)",rule:"licensed",direct:["law"],bridge:[],t:"priv",pay:"p_law",where:"pvt",
    ladder:[["Legal Manager","লিগ্যাল ম্যানেজার"],["Head of Legal","আইন বিভাগ প্রধান"]],sk:["draft","lawkn","eng"],int:["rules","writing"]},
  judicial:{sec:"law",en:"Assistant Judge",bn:"সহকারী জজ",rule:"licensed",direct:["law"],bridge:[],req4:1,t:"pub",pay:"none",where:"bjsc",
    ladder:[["Senior Assistant Judge","সিনিয়র সহকারী জজ"],["District Judge","জেলা জজ"]],sk:["lawkn","draft"],int:["rules"],
    note:["Recruited by the Bangladesh Judicial Service Commission. An LLB is required.","নিয়োগ দেয় বাংলাদেশ জুডিশিয়াল সার্ভিস কমিশন। এলএলবি আবশ্যক।"]},
  police_si:{sec:"gov",en:"Sub-Inspector, Bangladesh Police",bn:"উপপরিদর্শক (এসআই), বাংলাদেশ পুলিশ",rule:"any",direct:["law","socsci"],bridge:[],t:"pub",pay:"grade10",where:"gov",
    ladder:[["Inspector","পরিদর্শক"],["ASP (by promotion)","সহকারী পুলিশ সুপার (পদোন্নতিতে)"]],sk:["ga","lawkn","eng"],int:["rules","people"],
    note:["A bachelor's degree in any subject plus physical standards. Check each police circular for age, height and result rules.","যেকোনো বিষয়ে স্নাতক ডিগ্রি এবং শারীরিক মান। বয়স, উচ্চতা ও ফলাফলের শর্ত প্রতিটি পুলিশ বিজ্ঞপ্তিতে দেখে নিন।"]},
  primary_teacher:{sec:"edu",en:"Assistant Teacher, Govt Primary School",bn:"সহকারী শিক্ষক, সরকারি প্রাথমিক বিদ্যালয়",rule:"any",direct:[],bridge:[],t:"pub",pay:"grade13",where:"gov",
    ladder:[["Head Teacher (Grade 10)","প্রধান শিক্ষক (গ্রেড ১০)"]],sk:["teach","bangla","math"],int:["teaching","helping"],
    note:["Grade 13 post. 80% of head teacher posts are filled by promotion from assistant teachers. Check the Directorate of Primary Education circular for degree and class rules.","গ্রেড ১৩-এর পদ। প্রধান শিক্ষকের ৮০% পদ সহকারী শিক্ষকদের পদোন্নতি দিয়ে পূরণ হয়। ডিগ্রি ও শ্রেণির শর্ত প্রাথমিক শিক্ষা অধিদপ্তরের বিজ্ঞপ্তিতে দেখে নিন।"],ns:"S1"},
  nurse:{sec:"health",en:"Senior Staff Nurse",bn:"সিনিয়র স্টাফ নার্স",rule:"licensed",direct:["nursing"],bridge:[],dip:1,t:"both",pay:"grade10",where:"gov",
    ladder:[["Nursing Supervisor","নার্সিং সুপারভাইজার"],["Nursing Superintendent","নার্সিং সুপারিনটেনডেন্ট"]],sk:["clinical","eng"],int:["helping","science"],
    note:["BSc in Nursing or a Diploma in Nursing Science & Midwifery, plus registration with the Bangladesh Nursing and Midwifery Council.","বিএসসি ইন নার্সিং বা ডিপ্লোমা ইন নার্সিং সায়েন্স অ্যান্ড মিডওয়াইফারি, এবং বাংলাদেশ নার্সিং ও মিডওয়াইফারি কাউন্সিলে নিবন্ধন।"]},
  vet_off:{sec:"agri",en:"Veterinary Surgeon / Livestock Officer",bn:"ভেটেরিনারি সার্জন / প্রাণিসম্পদ কর্মকর্তা",rule:"licensed",direct:["vet"],bridge:[],t:"both",pay:"none",where:"pvt",
    ladder:[["Senior Veterinary Officer","সিনিয়র ভেটেরিনারি অফিসার"],["Farm / Technical Manager","ফার্ম / টেকনিক্যাল ম্যানেজার"]],sk:["clinical","agro"],int:["nature","science","helping"],
    note:["DVM plus registration with the Bangladesh Veterinary Council.","ডিভিএম এবং বাংলাদেশ ভেটেরিনারি কাউন্সিলে নিবন্ধন।"]},
  fish_off:{sec:"agri",en:"Aquaculture / Fisheries Executive",bn:"অ্যাকুয়াকালচার / মৎস্য এক্সিকিউটিভ",rule:"relevant",direct:["fisheries"],bridge:["agri","microbio","vet"],t:"priv",pay:"p_agri",where:"pvt",
    ladder:[["Senior Executive","সিনিয়র এক্সিকিউটিভ"],["Farm / Hatchery Manager","ফার্ম / হ্যাচারি ম্যানেজার"]],sk:["agro","lab"],int:["nature","science"]},
  freelancer:{sec:"media",en:"Freelancer (design, development, writing, marketing)",bn:"ফ্রিল্যান্সার (ডিজাইন, ডেভেলপমেন্ট, লেখা, মার্কেটিং)",rule:"skills",direct:["cse","design"],bridge:[],t:"priv",pay:"none",where:"pvt",
    ladder:[["Top-rated freelancer","টপ-রেটেড ফ্রিল্যান্সার"],["Own agency","নিজস্ব এজেন্সি"]],sk:["folio","eng","adobe"],int:["creative","tech","writing"],
    note:["Clients hire on portfolio and reviews, not on degree. Payments from abroad need a bank or mobile account that can receive foreign remittance.","ক্লায়েন্ট ডিগ্রি নয়, পোর্টফোলিও ও রিভিউ দেখে কাজ দেয়। বিদেশ থেকে টাকা আনতে বৈদেশিক রেমিট্যান্স গ্রহণযোগ্য ব্যাংক বা মোবাইল অ্যাকাউন্ট লাগে।"]},
  cabin:{sec:"def",en:"Cabin Crew",bn:"কেবিন ক্রু",rule:"any",direct:[],bridge:[],after:"hsc",req:[],t:"both",pay:"none",where:"pvt",
    ladder:[["Senior Cabin Crew","সিনিয়র কেবিন ক্রু"],["Cabin Supervisor / Purser","কেবিন সুপারভাইজার / পার্সার"]],sk:["eng","present"],int:["people","helping"],
    note:["Airlines usually accept HSC or a degree in any subject, with age, height and fitness rules in each circular.","এয়ারলাইনগুলো সাধারণত যেকোনো বিষয়ে এইচএসসি বা স্নাতক গ্রহণ করে; বয়স, উচ্চতা ও শারীরিক সক্ষমতার শর্ত প্রতিটি বিজ্ঞপ্তিতে থাকে।"]},
  cpl:{sec:"def",en:"Commercial Pilot (CPL training)",bn:"বাণিজ্যিক পাইলট (সিপিএল প্রশিক্ষণ)",rule:"skills",direct:[],bridge:[],after:"hsc",req:["phy","math"],t:"priv",pay:"none",where:"pvt",
    ladder:[["First Officer","ফার্স্ট অফিসার"],["Captain","ক্যাপ্টেন"]],sk:["math","eng"],int:["tech","build"],
    note:["Training happens at a CAAB-approved flying school after HSC with Physics and Maths. It is expensive and needs a Class 1 medical.","এইচএসসিতে পদার্থবিজ্ঞান ও গণিত থাকলে বেবিচক-অনুমোদিত ফ্লাইং স্কুলে প্রশিক্ষণ নেওয়া যায়। খরচ অনেক বেশি এবং ক্লাস ১ মেডিকেল লাগে।"]},
  army:{sec:"def",en:"Army Officer Cadet (BMA Long Course)",bn:"সেনা অফিসার ক্যাডেট (বিএমএ লং কোর্স)",rule:"any",direct:[],bridge:[],after:"hsc",req:[],grad:0,t:"pub",pay:"none",where:"def",
    ladder:[["Second Lieutenant","সেকেন্ড লেফটেন্যান্ট"],["Major","মেজর"]],sk:["ga","eng"],int:["lead","rules"],
    note:["Apply after HSC through the ISSB selection process. Age, height, marital status and GPA limits are set in each circular.","এইচএসসির পর আইএসএসবি বাছাইয়ের মাধ্যমে আবেদন। বয়স, উচ্চতা, বৈবাহিক অবস্থা ও জিপিএর শর্ত প্রতিটি বিজ্ঞপ্তিতে থাকে।"]},
  navy:{sec:"def",en:"Navy Officer Cadet",bn:"নৌবাহিনী অফিসার ক্যাডেট",rule:"any",direct:[],bridge:[],after:"hsc",req:[],grad:0,t:"pub",pay:"none",where:"def",
    ladder:[["Sub-Lieutenant","সাব-লেফটেন্যান্ট"],["Commander","কমান্ডার"]],sk:["ga","eng","math"],int:["lead","build"],
    note:["Apply after HSC through ISSB. Some branches ask for Physics and Maths; read the circular.","এইচএসসির পর আইএসএসবির মাধ্যমে আবেদন। কিছু শাখায় পদার্থবিজ্ঞান ও গণিত লাগে; বিজ্ঞপ্তি দেখে নিন।"]},
  af_pilot:{sec:"def",en:"Air Force Officer Cadet (GD Pilot)",bn:"বিমানবাহিনী অফিসার ক্যাডেট (জিডি পাইলট)",rule:"any",direct:[],bridge:[],after:"hsc",req:["phy","math"],grad:0,t:"pub",pay:"none",where:"def",
    ladder:[["Flying Officer","ফ্লাইং অফিসার"],["Squadron Leader","স্কোয়াড্রন লিডার"]],sk:["math","eng"],int:["tech","lead"],
    note:["Apply after HSC with Physics and Maths through ISSB, with strict medical and eyesight standards.","এইচএসসিতে পদার্থবিজ্ঞান ও গণিত থাকলে আইএসএসবির মাধ্যমে আবেদন; চিকিৎসা ও দৃষ্টিশক্তির কঠোর মান আছে।"]},
  dentist:{sec:"health",en:"Dental Surgeon",bn:"ডেন্টাল সার্জন",rule:"licensed",direct:["dental"],bridge:[],t:"both",pay:"p_med",where:"pvt",
    ladder:[["Specialist (MDS / FCPS)","বিশেষজ্ঞ (এমডিএস / এফসিপিএস)"],["Consultant / Own practice","কনসালট্যান্ট / নিজস্ব চেম্বার"]],sk:["clinical"],int:["science","helping"],
    note:["BDS plus BMDC registration after internship.","বিডিএস এবং ইন্টার্নশিপ শেষে বিএমডিসি নিবন্ধন।"]},
  physio:{sec:"health",en:"Physiotherapist / Medical Technologist",bn:"ফিজিওথেরাপিস্ট / মেডিকেল টেকনোলজিস্ট",rule:"relevant",direct:["medtech"],bridge:[],dip:1,t:"both",pay:"p_med",where:"pvt",
    ladder:[["Senior Therapist / Technologist","সিনিয়র থেরাপিস্ট / টেকনোলজিস্ট"],["Department In-charge","বিভাগীয় ইনচার্জ"]],sk:["clinical"],int:["helping","science"]},
  nutritionist:{sec:"health",en:"Nutritionist / Dietitian",bn:"পুষ্টিবিদ / ডায়েটিশিয়ান",rule:"relevant",direct:["nutrition"],bridge:["microbio","pubhealth"],t:"both",pay:"p_med",where:"pvt",
    ladder:[["Senior Nutritionist","সিনিয়র পুষ্টিবিদ"],["Nutrition Program Manager","পুষ্টি কর্মসূচি ব্যবস্থাপক"]],sk:["counsel","research"],int:["helping","science"]},
  ph_officer:{sec:"ngo",en:"Public Health Officer",bn:"জনস্বাস্থ্য কর্মকর্তা",rule:"relevant",direct:["pubhealth","mbbs","nursing"],bridge:["microbio","nutrition","socsci","pharmacy"],t:"both",pay:"none",where:"ngo",
    ladder:[["Public Health Specialist","জনস্বাস্থ্য বিশেষজ্ঞ"],["Health Program Manager","স্বাস্থ্য কর্মসূচি ব্যবস্থাপক"]],sk:["survey","stats","proposal"],int:["helping","science","numbers"]},
  planner:{sec:"eng",en:"Urban Planner",bn:"নগর পরিকল্পনাবিদ",rule:"relevant",direct:["planning"],bridge:["civil","arch"],t:"both",pay:"p_constr",where:"pvt",
    ladder:[["Senior Planner","সিনিয়র পরিকল্পনাবিদ"],["Chief Town Planner","প্রধান নগর পরিকল্পনাবিদ"]],sk:["cad","survey"],int:["build","rules"]},
  marine:{sec:"def",en:"Marine Engineer / Deck Officer (Merchant Navy)",bn:"মেরিন ইঞ্জিনিয়ার / ডেক অফিসার (মার্চেন্ট নেভি)",rule:"licensed",direct:["maritime"],bridge:["me"],t:"priv",pay:"none",where:"pvt",
    ladder:[["Second Engineer / Chief Officer","সেকেন্ড ইঞ্জিনিয়ার / চিফ অফিসার"],["Chief Engineer / Master (Captain)","চিফ ইঞ্জিনিয়ার / মাস্টার (ক্যাপ্টেন)"]],sk:["maint","eng"],int:["build","tech"],
    note:["Sea-going posts need a Certificate of Competency from the Department of Shipping after sea service.","সমুদ্রগামী পদে সমুদ্রসেবার পর নৌপরিবহন অধিদপ্তরের সার্টিফিকেট অব কম্পিটেন্সি লাগে।"]},
  aircraft:{sec:"def",en:"Aircraft Maintenance Engineer",bn:"এয়ারক্রাফট মেইনটেন্যান্স ইঞ্জিনিয়ার",rule:"relevant",direct:["aero"],bridge:["eee","me"],t:"both",pay:"none",where:"pvt",
    ladder:[["Licensed Engineer (CAAB)","লাইসেন্সপ্রাপ্ত ইঞ্জিনিয়ার (বেবিচক)"],["Chief Engineer","চিফ ইঞ্জিনিয়ার"]],sk:["maint","eng"],int:["build","tech"]},
  fashion_d:{sec:"rmg",en:"Fashion Designer",bn:"ফ্যাশন ডিজাইনার",rule:"skills",direct:["fashion"],bridge:[],t:"priv",pay:"p_textile",where:"pvt",
    ladder:[["Senior Designer","সিনিয়র ডিজাইনার"],["Design Head / Own label","ডিজাইন প্রধান / নিজস্ব ব্র্যান্ড"]],sk:["adobe","garment","folio"],int:["creative"]},
  hotel:{sec:"mkt",en:"Hotel / Tourism Executive",bn:"হোটেল / ট্যুরিজম এক্সিকিউটিভ",rule:"relevant",direct:["tourism"],bridge:["mkt_mgmt","english"],t:"priv",pay:"none",where:"pvt",
    ladder:[["Front Office / Sales Manager","ফ্রন্ট অফিস / সেলস ম্যানেজার"],["General Manager","জেনারেল ম্যানেজার"]],sk:["eng","present","sales"],int:["people","helping"]},
  artist:{sec:"media",en:"Performing Artist / Arts Instructor",bn:"পারফর্মিং আর্টিস্ট / শিল্পকলা প্রশিক্ষক",rule:"skills",direct:["music"],bridge:[],t:"both",pay:"none",where:"pvt",
    ladder:[["Senior Artist","সিনিয়র শিল্পী"],["Director / Choreographer","পরিচালক / কোরিওগ্রাফার"]],sk:["folio","teach"],int:["creative","people"]},
  coach:{sec:"edu",en:"Sports Coach / Physical Education Teacher",bn:"ক্রীড়া প্রশিক্ষক / শারীরিক শিক্ষা শিক্ষক",rule:"relevant",direct:["physed"],bridge:[],t:"both",pay:"p_edu",where:"pvt",
    ladder:[["Head Coach","প্রধান প্রশিক্ষক"],["Sports Director","ক্রীড়া পরিচালক"]],sk:["teach"],int:["teaching","people"]},
  frontend:{sec:"it",en:"Frontend / Web Developer",bn:"ফ্রন্টএন্ড / ওয়েব ডেভেলপার",rule:"skills",direct:["cse"],bridge:[],t:"priv",pay:"p_it",where:"pvt",
    ladder:[["Senior Frontend Engineer", "সিনিয়র ফ্রন্টএন্ড ইঞ্জিনিয়ার"], ["Engineering Manager", "ইঞ্জিনিয়ারিং ম্যানেজার"]],sk:["prog", "git", "adobe"],int:["tech", "creative"]},
  mobile:{sec:"it",en:"Mobile App Developer (Android / iOS / Flutter)",bn:"মোবাইল অ্যাপ ডেভেলপার (অ্যান্ড্রয়েড / আইওএস / ফ্লাটার)",rule:"skills",direct:["cse"],bridge:[],t:"priv",pay:"p_it",where:"pvt",
    ladder:[["Senior Mobile Engineer", "সিনিয়র মোবাইল ইঞ্জিনিয়ার"], ["Tech Lead", "টেক লিড"]],sk:["prog", "git", "dsa"],int:["tech"]},
  uiux:{sec:"it",en:"UI/UX Designer",bn:"ইউআই/ইউএক্স ডিজাইনার",rule:"skills",direct:["design", "cse"],bridge:[],t:"priv",pay:"p_it",where:"pvt",
    ladder:[["Senior Product Designer", "সিনিয়র প্রোডাক্ট ডিজাইনার"], ["Design Lead", "ডিজাইন লিড"]],sk:["adobe", "folio", "research"],int:["creative", "tech", "people"]},
  devops:{sec:"it",en:"DevOps / Cloud Engineer",bn:"ডেভঅপস / ক্লাউড ইঞ্জিনিয়ার",rule:"skills",direct:["cse", "eee"],bridge:[],t:"priv",pay:"p_it",where:"pvt",
    ladder:[["Senior DevOps Engineer", "সিনিয়র ডেভঅপস ইঞ্জিনিয়ার"], ["Infrastructure Lead", "ইনফ্রাস্ট্রাকচার লিড"]],sk:["net", "prog", "git"],int:["tech", "build"]},
  security:{sec:"it",en:"Cybersecurity Analyst",bn:"সাইবার সিকিউরিটি অ্যানালিস্ট",rule:"skills",direct:["cse", "eee"],bridge:[],t:"priv",pay:"p_it",where:"pvt",
    ladder:[["Security Engineer", "সিকিউরিটি ইঞ্জিনিয়ার"], ["Head of Information Security", "তথ্য নিরাপত্তা প্রধান"]],sk:["net", "prog"],int:["tech", "rules"]},
  datasci:{sec:"it",en:"Data Scientist / ML Engineer",bn:"ডেটা সায়েন্টিস্ট / এমএল ইঞ্জিনিয়ার",rule:"skills",direct:["cse", "physics_math"],bridge:["econ"],t:"priv",pay:"p_it",where:"pvt",
    ladder:[["Senior Data Scientist", "সিনিয়র ডেটা সায়েন্টিস্ট"], ["Head of Data", "ডেটা প্রধান"]],sk:["prog", "stats", "sql"],int:["numbers", "tech", "science"]},
  pm:{sec:"it",en:"Product / Project Manager (Tech)",bn:"প্রোডাক্ট / প্রজেক্ট ম্যানেজার (টেক)",rule:"skills",direct:["cse", "mkt_mgmt"],bridge:[],t:"priv",pay:"p_it",where:"pvt",
    ladder:[["Senior Product Manager", "সিনিয়র প্রোডাক্ট ম্যানেজার"], ["Head of Product", "প্রোডাক্ট প্রধান"]],sk:["present", "excel", "research"],int:["lead", "tech", "people"]},
  rf:{sec:"tel",en:"RF / Network Operations Engineer (Telecom)",bn:"আরএফ / নেটওয়ার্ক অপারেশনস ইঞ্জিনিয়ার (টেলিকম)",rule:"relevant",direct:["eee", "cse"],bridge:["physics_math"],t:"priv",pay:"p_it",where:"pvt",
    ladder:[["Senior Engineer", "সিনিয়র ইঞ্জিনিয়ার"], ["Network Manager", "নেটওয়ার্ক ম্যানেজার"]],sk:["net", "power"],int:["tech", "build"]},
  cs:{sec:"tel",en:"Customer Service / Contact Centre Executive",bn:"কাস্টমার সার্ভিস / কন্টাক্ট সেন্টার এক্সিকিউটিভ",rule:"any",direct:[],bridge:[],t:"priv",pay:"none",where:"pvt",
    ladder:[["Team Leader", "টিম লিডার"], ["Customer Experience Manager", "কাস্টমার এক্সপেরিয়েন্স ম্যানেজার"]],sk:["eng", "present"],int:["people", "helping"]},
  key:{sec:"tel",en:"Corporate / Key Account Manager",bn:"কর্পোরেট / কি-অ্যাকাউন্ট ম্যানেজার",rule:"any",direct:["mkt_mgmt"],bridge:[],t:"priv",pay:"p_mkt",where:"pvt",
    ladder:[["Senior Key Account Manager", "সিনিয়র কি-অ্যাকাউন্ট ম্যানেজার"], ["Head of Enterprise Sales", "এন্টারপ্রাইজ সেলস প্রধান"]],sk:["sales", "present", "excel"],int:["people", "lead", "numbers"]},
  brand:{sec:"fmcg",en:"Brand Executive / Management Trainee (FMCG)",bn:"ব্র্যান্ড এক্সিকিউটিভ / ম্যানেজমেন্ট ট্রেইনি (এফএমসিজি)",rule:"any",direct:["mkt_mgmt", "econ"],bridge:[],t:"priv",pay:"p_mkt",where:"pvt",
    ladder:[["Brand Manager", "ব্র্যান্ড ম্যানেজার"], ["Marketing Director", "মার্কেটিং ডিরেক্টর"]],sk:["present", "excel", "research"],int:["creative", "people", "lead"]},
  tso:{sec:"fmcg",en:"Territory Sales Officer (FMCG)",bn:"টেরিটরি সেলস অফিসার (এফএমসিজি)",rule:"any",direct:[],bridge:[],t:"priv",pay:"p_mkt",where:"pvt",
    ladder:[["Area Sales Manager", "এরিয়া সেলস ম্যানেজার"], ["Regional Sales Manager", "রিজিওনাল সেলস ম্যানেজার"]],sk:["sales", "excel"],int:["people", "lead"]},
  research:{sec:"fmcg",en:"Market Research Executive",bn:"মার্কেট রিসার্চ এক্সিকিউটিভ",rule:"relevant",direct:["mkt_mgmt", "econ", "socsci", "physics_math"],bridge:["psych", "mass_comm"],t:"priv",pay:"p_mkt",where:"pvt",
    ladder:[["Research Manager", "রিসার্চ ম্যানেজার"], ["Insights Director", "ইনসাইটস ডিরেক্টর"]],sk:["survey", "stats", "excel"],int:["numbers", "people"]},
  ecom:{sec:"fmcg",en:"E-commerce / Category Executive",bn:"ই-কমার্স / ক্যাটাগরি এক্সিকিউটিভ",rule:"any",direct:["mkt_mgmt"],bridge:[],t:"priv",pay:"p_mkt",where:"pvt",
    ladder:[["Category Manager", "ক্যাটাগরি ম্যানেজার"], ["Head of E-commerce", "ই-কমার্স প্রধান"]],sk:["excel", "ads", "sql"],int:["numbers", "tech", "people"]},
  retail:{sec:"fmcg",en:"Retail Store / Outlet Manager",bn:"রিটেইল স্টোর / আউটলেট ম্যানেজার",rule:"any",direct:[],bridge:[],t:"priv",pay:"none",where:"pvt",
    ladder:[["Area Manager", "এরিয়া ম্যানেজার"], ["Retail Operations Head", "রিটেইল অপারেশনস প্রধান"]],sk:["sales", "excel"],int:["people", "lead"]},
  scm_ex:{sec:"scm",en:"Supply Chain / Procurement Executive",bn:"সাপ্লাই চেইন / প্রকিউরমেন্ট এক্সিকিউটিভ",rule:"relevant",direct:["mkt_mgmt", "me", "textile"],bridge:["acc_fin", "econ", "eee", "civil"],t:"priv",pay:"none",where:"pvt",
    ladder:[["Supply Chain Manager", "সাপ্লাই চেইন ম্যানেজার"], ["Head of Supply Chain", "সাপ্লাই চেইন প্রধান"]],sk:["excel", "erp", "sales"],int:["numbers", "build", "lead"]},
  logistics:{sec:"scm",en:"Logistics / Shipping & Freight Executive",bn:"লজিস্টিকস / শিপিং ও ফ্রেইট এক্সিকিউটিভ",rule:"any",direct:["maritime", "mkt_mgmt"],bridge:[],t:"priv",pay:"none",where:"pvt",
    ladder:[["Logistics Manager", "লজিস্টিকস ম্যানেজার"], ["Head of Logistics", "লজিস্টিকস প্রধান"]],sk:["excel", "eng", "erp"],int:["numbers", "people"]},
  commercial:{sec:"scm",en:"Commercial / Import-Export (L/C) Executive",bn:"কমার্শিয়াল / আমদানি-রপ্তানি (এলসি) এক্সিকিউটিভ",rule:"relevant",direct:["acc_fin", "mkt_mgmt"],bridge:["econ", "textile", "law"],t:"priv",pay:"none",where:"pvt",
    ladder:[["Commercial Manager", "কমার্শিয়াল ম্যানেজার"], ["Head of Commercial", "কমার্শিয়াল প্রধান"]],sk:["bank", "excel", "eng"],int:["numbers", "rules"]},
  fin_analyst:{sec:"bank",en:"Financial Analyst / Investment Analyst",bn:"ফিন্যান্সিয়াল অ্যানালিস্ট / ইনভেস্টমেন্ট অ্যানালিস্ট",rule:"relevant",direct:["acc_fin", "econ"],bridge:["physics_math", "mkt_mgmt"],t:"priv",pay:"p_fin",where:"pvt",
    ladder:[["Senior Analyst", "সিনিয়র অ্যানালিস্ট"], ["Finance Manager / CFO", "ফিন্যান্স ম্যানেজার / সিএফও"]],sk:["excel", "acc", "stats"],int:["numbers"]},
  tax:{sec:"bank",en:"Tax & VAT Consultant / Executive",bn:"কর ও ভ্যাট কনসালট্যান্ট / এক্সিকিউটিভ",rule:"relevant",direct:["acc_fin", "law"],bridge:["econ"],t:"priv",pay:"p_fin",where:"pvt",
    ladder:[["Tax Manager", "ট্যাক্স ম্যানেজার"], ["Tax Partner / Own practice", "ট্যাক্স পার্টনার / নিজস্ব প্র্যাকটিস"]],sk:["acc", "lawkn", "excel"],int:["numbers", "rules"]},
  insurance:{sec:"bank",en:"Insurance Executive / Underwriter",bn:"বিমা এক্সিকিউটিভ / আন্ডাররাইটার",rule:"any",direct:["acc_fin", "physics_math"],bridge:[],t:"priv",pay:"none",where:"pvt",
    ladder:[["Senior Underwriter", "সিনিয়র আন্ডাররাইটার"], ["Branch / Department Head", "শাখা / বিভাগীয় প্রধান"]],sk:["excel", "sales"],int:["numbers", "people"]},
  mfs:{sec:"bank",en:"Digital Finance / MFS Executive",bn:"ডিজিটাল ফিন্যান্স / এমএফএস এক্সিকিউটিভ",rule:"any",direct:["acc_fin", "cse", "mkt_mgmt"],bridge:[],t:"priv",pay:"none",where:"pvt",
    ladder:[["Product / Operations Manager", "প্রোডাক্ট / অপারেশনস ম্যানেজার"], ["Head of Digital Finance", "ডিজিটাল ফিন্যান্স প্রধান"]],sk:["excel", "sql", "present"],int:["numbers", "tech"]},
  qs:{sec:"eng",en:"Quantity Surveyor / Estimation Engineer",bn:"কোয়ান্টিটি সার্ভেয়ার / এস্টিমেশন ইঞ্জিনিয়ার",rule:"relevant",direct:["civil"],bridge:["arch"],t:"priv",pay:"p_constr",where:"pvt",
    ladder:[["Senior QS", "সিনিয়র কিউএস"], ["Contracts Manager", "কন্ট্রাক্টস ম্যানেজার"]],sk:["estim", "cad", "excel"],int:["numbers", "build"]},
  interior:{sec:"eng",en:"Interior Designer",bn:"ইন্টেরিয়র ডিজাইনার",rule:"skills",direct:["arch", "design"],bridge:[],t:"priv",pay:"p_constr",where:"pvt",
    ladder:[["Senior Interior Designer", "সিনিয়র ইন্টেরিয়র ডিজাইনার"], ["Design Studio Owner", "ডিজাইন স্টুডিওর মালিক"]],sk:["cad", "d3", "folio"],int:["creative", "build"]},
  hse:{sec:"eng",en:"Health, Safety & Environment (HSE) Officer",bn:"স্বাস্থ্য, নিরাপত্তা ও পরিবেশ (এইচএসই) অফিসার",rule:"relevant",direct:["civil", "me", "chem", "eee"],bridge:["textile", "pubhealth"],t:"priv",pay:"none",where:"pvt",
    ladder:[["HSE Manager", "এইচএসই ম্যানেজার"], ["Head of HSE", "এইচএসই প্রধান"]],sk:["labour", "proposal"],int:["rules", "helping", "build"]},
  qa_rmg:{sec:"rmg",en:"Quality Assurance / Quality Controller (Garments)",bn:"কোয়ালিটি অ্যাসিউরেন্স / কোয়ালিটি কন্ট্রোলার (গার্মেন্টস)",rule:"relevant",direct:["textile", "fashion"],bridge:["chem", "me"],t:"priv",pay:"p_textile",where:"pvt",
    ladder:[["QA Manager", "কিউএ ম্যানেজার"], ["Head of Quality", "কোয়ালিটি প্রধান"]],sk:["garment", "excel"],int:["rules", "build"]},
  sustain:{sec:"rmg",en:"Sustainability / ESG Executive",bn:"সাসটেইনেবিলিটি / ইএসজি এক্সিকিউটিভ",rule:"relevant",direct:["socsci", "chem", "textile", "civil"],bridge:["econ", "mkt_mgmt", "law"],t:"priv",pay:"none",where:"pvt",
    ladder:[["Sustainability Manager", "সাসটেইনেবিলিটি ম্যানেজার"], ["Head of ESG", "ইএসজি প্রধান"]],sk:["proposal", "labour", "eng"],int:["helping", "rules", "nature"]},
  regulatory:{sec:"health",en:"Regulatory Affairs Executive (Pharma)",bn:"রেগুলেটরি অ্যাফেয়ার্স এক্সিকিউটিভ (ওষুধ)",rule:"relevant",direct:["pharmacy"],bridge:["chem", "microbio"],t:"priv",pay:"p_pharma",where:"pvt",
    ladder:[["Regulatory Manager", "রেগুলেটরি ম্যানেজার"], ["Head of Regulatory Affairs", "রেগুলেটরি অ্যাফেয়ার্স প্রধান"]],sk:["gmp", "proposal", "eng"],int:["rules", "science"]},
  video:{sec:"media",en:"Video Editor / Content Creator",bn:"ভিডিও এডিটর / কনটেন্ট ক্রিয়েটর",rule:"skills",direct:["mass_comm", "design"],bridge:[],t:"priv",pay:"none",where:"pvt",
    ladder:[["Senior Editor / Producer", "সিনিয়র এডিটর / প্রডিউসার"], ["Creative Head / Own channel", "ক্রিয়েটিভ প্রধান / নিজস্ব চ্যানেল"]],sk:["adobe", "folio", "copy"],int:["creative", "tech"]},
  pr:{sec:"media",en:"PR & Communications Executive",bn:"পিআর ও কমিউনিকেশনস এক্সিকিউটিভ",rule:"relevant",direct:["mass_comm", "english"],bridge:["mkt_mgmt", "socsci"],t:"priv",pay:"p_mkt",where:"pvt",
    ladder:[["Communications Manager", "কমিউনিকেশনস ম্যানেজার"], ["Head of Corporate Affairs", "কর্পোরেট অ্যাফেয়ার্স প্রধান"]],sk:["copy", "eng", "present"],int:["writing", "people"]},
  consult:{sec:"ngo",en:"Research / Development Consultant (junior)",bn:"রিসার্চ / ডেভেলপমেন্ট কনসালট্যান্ট (জুনিয়র)",rule:"relevant",direct:["econ", "socsci"],bridge:["physics_math", "pubhealth", "agri"],t:"priv",pay:"none",where:"pvt",
    ladder:[["Consultant", "কনসালট্যান্ট"], ["Principal Consultant / Own firm", "প্রিন্সিপাল কনসালট্যান্ট / নিজস্ব ফার্ম"]],sk:["research", "stats", "proposal"],int:["numbers", "writing", "helping"]},
  admin:{sec:"mkt",en:"Admin & Operations Executive",bn:"অ্যাডমিন ও অপারেশনস এক্সিকিউটিভ",rule:"any",direct:[],bridge:[],t:"priv",pay:"none",where:"pvt",
    ladder:[["Admin Manager", "অ্যাডমিন ম্যানেজার"], ["Head of Operations", "অপারেশনস প্রধান"]],sk:["excel", "eng"],int:["rules", "lead"]},
  entrepreneur:{sec:"fmcg",en:"Entrepreneur / Startup Founder",bn:"উদ্যোক্তা / স্টার্টআপ প্রতিষ্ঠাতা",rule:"any",direct:[],bridge:[],t:"priv",pay:"none",where:"pvt",
    ladder:[["Growing business", "ব্যবসা বড় করা"], ["Established company", "প্রতিষ্ঠিত কোম্পানি"]],sk:["sales", "excel", "present"],int:["lead", "creative", "people"]},
  ground:{sec:"def",en:"Airline Ground Operations / Ticketing Executive",bn:"এয়ারলাইন গ্রাউন্ড অপারেশনস / টিকেটিং এক্সিকিউটিভ",rule:"any",direct:["tourism"],bridge:[],t:"priv",pay:"none",where:"pvt",
    ladder:[["Duty Manager", "ডিউটি ম্যানেজার"], ["Station Manager", "স্টেশন ম্যানেজার"]],sk:["eng", "present"],int:["people", "helping"]},
  agri_off:{sec:"agri",en:"Agriculture Officer / Agronomist",bn:"কৃষি কর্মকর্তা / অ্যাগ্রোনমিস্ট",rule:"relevant",direct:["agri"],bridge:["microbio","chem"],t:"both",pay:"p_agri",where:"pvt",
    ladder:[["Senior Agronomist","সিনিয়র অ্যাগ্রোনমিস্ট"],["Regional Manager","আঞ্চলিক ব্যবস্থাপক"]],sk:["agro","present"],int:["nature","science"]}
};

/* Interests for the compass */
const INTERESTS = {
  numbers:["Numbers & money","সংখ্যা ও টাকাপয়সা"],people:["Talking to people","মানুষের সঙ্গে কথা বলা"],tech:["Computers & tech","কম্পিউটার ও প্রযুক্তি"],
  build:["Building & machines","নির্মাণ ও যন্ত্রপাতি"],writing:["Writing & language","লেখালেখি ও ভাষা"],science:["Lab & science","ল্যাব ও বিজ্ঞান"],
  helping:["Helping & social impact","মানুষকে সাহায্য ও সামাজিক কাজ"],rules:["Rules, law & order","নিয়মকানুন, আইন ও শৃঙ্খলা"],creative:["Design & creativity","ডিজাইন ও সৃজনশীলতা"],
  teaching:["Teaching & explaining","শেখানো ও বোঝানো"],nature:["Nature & farming","প্রকৃতি ও কৃষি"],lead:["Leading & managing","নেতৃত্ব ও ব্যবস্থাপনা"]
};

/* ---- Pre-university curricula: subjects with tags ---- */
const SUBJ = {
  phy:["Physics","পদার্থবিজ্ঞান",["phy"]],chem:["Chemistry","রসায়ন",["chem"]],bio:["Biology","জীববিজ্ঞান",["bio"]],hbio:["Human Biology","হিউম্যান বায়োলজি",["bio"]],
  hmath:["Higher Mathematics","উচ্চতর গণিত",["math"]],gmath:["Mathematics","গণিত",[]],amath:["Additional Mathematics","অ্যাডিশনাল ম্যাথমেটিক্স",["math"]],
  math:["Mathematics","ম্যাথমেটিক্স",["math"]],pmath:["Pure Mathematics","পিওর ম্যাথমেটিক্স",["math"]],fmath:["Further Mathematics","ফারদার ম্যাথমেটিক্স",["math"]],stat:["Statistics","পরিসংখ্যান",["math"]],
  acc:["Accounting","হিসাববিজ্ঞান",["acc"]],fin:["Finance & Banking","ফিন্যান্স ও ব্যাংকিং",["bus"]],ent:["Business Entrepreneurship","ব্যবসায় উদ্যোগ",["bus"]],
  bom:["Business Organisation & Management","ব্যবসায় সংগঠন ও ব্যবস্থাপনা",["bus"]],fbi:["Finance, Banking & Insurance","ফিন্যান্স, ব্যাংকিং ও বিমা",["bus"]],pmm:["Production Management & Marketing","উৎপাদন ব্যবস্থাপনা ও বিপণন",["bus"]],
  bus:["Business Studies","বিজনেস স্টাডিজ",["bus"]],com:["Commerce","কমার্স",["bus"]],econ:["Economics","অর্থনীতি",["econ"]],
  hist:["History","ইতিহাস",["soc"]],geo:["Geography","ভূগোল",["soc"]],civ:["Civics","পৌরনীতি",["soc"]],logic:["Logic","যুক্তিবিদ্যা",["soc"]],soc:["Sociology","সমাজবিজ্ঞান",["soc"]],sw:["Social Work","সমাজকর্ম",["soc"]],
  psych:["Psychology","মনোবিজ্ঞান",["psych"]],ihc:["Islamic History & Culture","ইসলামের ইতিহাস ও সংস্কৃতি",["isl","soc"]],isl:["Islamic Studies","ইসলাম শিক্ষা",["isl"]],
  agri:["Agriculture Studies","কৃষিশিক্ষা",["agri"]],home:["Home Science","গার্হস্থ্য বিজ্ঞান",[]],art:["Art & Design","আর্ট অ্যান্ড ডিজাইন",["art"]],artc:["Arts & Crafts","চারু ও কারুকলা",["art"]],
  englang:["English Language","ইংলিশ ল্যাঙ্গুয়েজ",["eng"]],englit:["English Literature","ইংলিশ লিটারেচার",["eng","lit"]],bdst:["Bangladesh Studies","বাংলাদেশ স্টাডিজ",["soc"]],
  cs:["Computer Science","কম্পিউটার সায়েন্স",["cs"]],ict:["ICT","তথ্য ও যোগাযোগ প্রযুক্তি",["cs"]],law:["Law","ল",["law"]],
  quran:["Qur'an & Tajwid","কুরআন মাজিদ ও তাজবিদ",["isl"]],hadith:["Hadith","হাদিস শরিফ",["isl"]],fiqh:["Fiqh","ফিকহ",["isl"]],arabic:["Arabic","আরবি",["isl"]],
  v_comp:["Computer & IT trade","কম্পিউটার ও আইটি ট্রেড",["cs","t_cse"]],v_elec:["Electrical trade","ইলেকট্রিক্যাল ট্রেড",["t_eee"]],v_civil:["Civil construction trade","সিভিল কনস্ট্রাকশন ট্রেড",["t_civil"]],
  v_mech:["Machine tools / Automotive trade","মেশিন টুলস / অটোমোটিভ ট্রেড",["t_me"]],v_text:["Dyeing, knitting & garments trade","ডাইং, নিটিং ও গার্মেন্টস ট্রেড",["t_textile"]],v_agri:["Agro-based trade","কৃষিভিত্তিক ট্রেড",["agri"]]
};
/* groups per curriculum; first list preselected */
const NAT_SSC = {science:["phy","chem","bio","hmath"],business:["acc","fin","ent"],humanities:["hist","geo","civ","econ"],_opt:["agri","home","ict","artc"]};
const NAT_HSC = {science:["phy","chem","bio","hmath"],business:["acc","bom","fbi","pmm"],humanities:["econ","civ","hist","logic"],_opt:["stat","psych","soc","sw","geo","ihc","isl","agri","home","artc","econ","ict"]};
const MAD = {science:["phy","chem","bio","hmath"],madrasa_gen:["quran","hadith","fiqh","arabic"],_opt:["hist","civ","econ","geo","ict","agri","home"]};
const VOC = {vocational:["v_comp"],_opt:["v_elec","v_civil","v_mech","v_text","v_agri","ict"]};
const VOCH = {vocational:["v_comp"],bm:["acc","bom","econ"],_opt:["v_elec","v_civil","v_mech","v_text","v_agri","fbi","ict"]};
const OLEV = {science:["phy","chem","bio","amath"],business:["acc","bus","com","econ"],humanities:["englit","soc","bdst","art"],_opt:["gmath","englang","cs","psych","hist","geo"]};
const ALEV = {science:["phy","chem","math","bio"],business:["acc","bus","econ","math"],humanities:["englit","psych","soc","law"],_opt:["hbio","pmath","fmath","englang","art","cs","hist"]};
const GROUPNAME = {science:["Science","বিজ্ঞান"],business:["Business Studies","ব্যবসায় শিক্ষা"],humanities:["Humanities / Arts","মানবিক / কলা"],madrasa_gen:["General (Islamic studies)","সাধারণ (ইসলামি শিক্ষা)"],vocational:["Vocational (trade)","ভোকেশনাল (ট্রেড)"],bm:["Business Management (BM)","বিজনেস ম্যানেজমেন্ট (বিএম)"]};

/* Levels */
const HONS_SUBJ = ["acc_fin","mkt_mgmt","econ","english","socsci","mass_comm","design","psych","physics_math","chem","microbio","cse","islamic","agri"];
const ENG_SUBJ = ["cse","eee","civil","me","textile","maritime","aero"];
/* Degree catalogue. grp: dip | pass | hons | prof | mast | res */
const DEG = [
  ["dip_eng","dip","diploma","Diploma in Engineering","ডিপ্লোমা ইন ইঞ্জিনিয়ারিং",["cse","eee","civil","me","textile","arch","maritime"]],
  ["dip_agri","dip","diploma","Diploma in Agriculture / Fisheries / Livestock","ডিপ্লোমা ইন এগ্রিকালচার / ফিশারিজ / লাইভস্টক",["agri","fisheries","vet"]],
  ["dip_nurse","dip","diploma","Diploma in Nursing Science & Midwifery","ডিপ্লোমা ইন নার্সিং সায়েন্স অ্যান্ড মিডওয়াইফারি",["nursing"]],
  ["dip_med","dip","diploma","Diploma in Medical Technology / Physiotherapy (DMT)","ডিপ্লোমা ইন মেডিকেল টেকনোলজি / ফিজিওথেরাপি (ডিএমটি)",["medtech"]],
  ["ba_pass","pass","pass","Bachelor of Arts \u2013 Pass (BA Pass)","ব্যাচেলর অব আর্টস – পাস (বিএ পাস)",["english","socsci","islamic","econ","music"]],
  ["bss_pass","pass","pass","Bachelor of Social Science \u2013 Pass (BSS Pass)","ব্যাচেলর অব সোশ্যাল সায়েন্স – পাস (বিএসএস পাস)",["socsci","econ"]],
  ["bbs_pass","pass","pass","Bachelor of Business Studies \u2013 Pass (BBS Pass)","ব্যাচেলর অব বিজনেস স্টাডিজ – পাস (বিবিএস পাস)",["acc_fin","mkt_mgmt"]],
  ["bsc_pass","pass","pass","Bachelor of Science \u2013 Pass (BSc Pass)","ব্যাচেলর অব সায়েন্স – পাস (বিএসসি পাস)",["physics_math","chem","microbio"]],
  ["fazil_pass","pass","pass","Fazil \u2013 Pass (madrasa degree)","ফাজিল – পাস (মাদ্রাসা স্নাতক)",["islamic"]],
  ["ba","hons","hons","Bachelor of Arts \u2013 Honours (BA Hons)","ব্যাচেলর অব আর্টস – অনার্স (বিএ অনার্স)",["english","islamic","socsci","mass_comm","music","design","physed"]],
  ["bss","hons","hons","Bachelor of Social Science \u2013 Honours (BSS Hons)","ব্যাচেলর অব সোশ্যাল সায়েন্স – অনার্স (বিএসএস অনার্স)",["socsci","econ","mass_comm","psych"]],
  ["bba","hons","hons","Bachelor of Business Administration (BBA)","ব্যাচেলর অব বিজনেস অ্যাডমিনিস্ট্রেশন (বিবিএ)",["acc_fin","mkt_mgmt","tourism"]],
  ["bbs","hons","hons","Bachelor of Business Studies \u2013 Honours (BBS Hons)","ব্যাচেলর অব বিজনেস স্টাডিজ – অনার্স (বিবিএস অনার্স)",["acc_fin","mkt_mgmt"]],
  ["bsc","hons","hons","Bachelor of Science \u2013 Honours (BSc Hons / BS)","ব্যাচেলর অব সায়েন্স – অনার্স (বিএসসি অনার্স / বিএস)",["physics_math","chem","microbio","psych","econ","cse","nutrition","pubhealth"]],
  ["bfa","hons","hons","Bachelor of Fine Arts (BFA)","ব্যাচেলর অব ফাইন আর্টস (বিএফএ)",["design","music"]],
  ["llb","hons","hons","Bachelor of Laws \u2013 Honours (LLB Hons)","ব্যাচেলর অব লজ – অনার্স (এলএলবি অনার্স)",["law"]],
  ["bed","hons","hons","Bachelor of Education (BEd)","ব্যাচেলর অব এডুকেশন (বিএড)",["educ"]],
  ["bped","hons","hons","Bachelor of Physical Education (BPEd)","ব্যাচেলর অব ফিজিক্যাল এডুকেশন (বিপিএড)",["physed"]],
  ["fazil_hons","hons","hons","Fazil \u2013 Honours (madrasa degree)","ফাজিল – অনার্স (মাদ্রাসা স্নাতক)",["islamic"]],
  ["bsce","prof","hons","Bachelor of Science in Engineering (BSc Engg: CSE, EEE, Civil, ME\u2026)","ব্যাচেলর অব সায়েন্স ইন ইঞ্জিনিয়ারিং (বিএসসি ইঞ্জি: সিএসই, ইইই, সিভিল, এমই…)",ENG_SUBJ],
  ["barch","prof","hons","Bachelor of Architecture (B.Arch)","ব্যাচেলর অব আর্কিটেকচার (বি.আর্ক)",["arch"]],
  ["burp","prof","hons","Bachelor of Urban & Regional Planning (BURP)","ব্যাচেলর অব আরবান অ্যান্ড রিজিওনাল প্ল্যানিং (বিইউআরপি)",["planning"]],
  ["mbbs","prof","hons","Bachelor of Medicine & Bachelor of Surgery (MBBS)","ব্যাচেলর অব মেডিসিন অ্যান্ড ব্যাচেলর অব সার্জারি (এমবিবিএস)",["mbbs"]],
  ["bds","prof","hons","Bachelor of Dental Surgery (BDS)","ব্যাচেলর অব ডেন্টাল সার্জারি (বিডিএস)",["dental"]],
  ["bpharm","prof","hons","Bachelor of Pharmacy \u2013 Honours (B.Pharm)","ব্যাচেলর অব ফার্মেসি – অনার্স (বি.ফার্ম)",["pharmacy"]],
  ["bscn","prof","hons","Bachelor of Science in Nursing (BSc Nursing)","ব্যাচেলর অব সায়েন্স ইন নার্সিং (বিএসসি নার্সিং)",["nursing"]],
  ["bpt","prof","hons","Bachelor of Science in Physiotherapy / Medical Technology (BPT / BSc MT)","ব্যাচেলর অব সায়েন্স ইন ফিজিওথেরাপি / মেডিকেল টেকনোলজি (বিপিটি / বিএসসি এমটি)",["medtech"]],
  ["bph","prof","hons","Bachelor of Science in Public Health (BSc PH)","ব্যাচেলর অব সায়েন্স ইন পাবলিক হেলথ (বিএসসি পিএইচ)",["pubhealth"]],
  ["bscag","prof","hons","Bachelor of Science in Agriculture \u2013 Honours (BSc Ag)","ব্যাচেলর অব সায়েন্স ইন এগ্রিকালচার – অনার্স (বিএসসি এজি)",["agri"]],
  ["dvm","prof","hons","Doctor of Veterinary Medicine (DVM)","ডক্টর অব ভেটেরিনারি মেডিসিন (ডিভিএম)",["vet"]],
  ["bscfish","prof","hons","Bachelor of Science in Fisheries \u2013 Honours (BSc Fisheries)","ব্যাচেলর অব সায়েন্স ইন ফিশারিজ – অনার্স (বিএসসি ফিশারিজ)",["fisheries"]],
  ["bsctex","prof","hons","Bachelor of Science in Textile Engineering (BSc TE)","ব্যাচেলর অব সায়েন্স ইন টেক্সটাইল ইঞ্জিনিয়ারিং (বিএসসি টিই)",["textile"]],
  ["bscfd","prof","hons","Bachelor of Science in Fashion Design & Technology (BSc FDT)","ব্যাচেলর অব সায়েন্স ইন ফ্যাশন ডিজাইন অ্যান্ড টেকনোলজি (বিএসসি এফডিটি)",["fashion"]],
  ["bmar","prof","hons","Bachelor of Science in Naval Architecture / Marine / Nautical Science (BSc)","ব্যাচেলর অব সায়েন্স ইন নেভাল আর্কিটেকচার / মেরিন / নটিক্যাল সায়েন্স (বিএসসি)",["maritime"]],
  ["baero","prof","hons","Bachelor of Science in Aeronautical / Aerospace Engineering (BSc AE)","ব্যাচেলর অব সায়েন্স ইন অ্যারোনটিক্যাল / অ্যারোস্পেস ইঞ্জিনিয়ারিং (বিএসসি এই)",["aero"]],
  ["ma","mast","masters","Master of Arts (MA)","মাস্টার অব আর্টস (এমএ)",["english","islamic","socsci","mass_comm","music","design"]],
  ["mss","mast","masters","Master of Social Science (MSS)","মাস্টার অব সোশ্যাল সায়েন্স (এমএসএস)",["socsci","econ","mass_comm","psych"]],
  ["mba","mast","masters","Master of Business Administration (MBA)","মাস্টার অব বিজনেস অ্যাডমিনিস্ট্রেশন (এমবিএ)",["acc_fin","mkt_mgmt","tourism"]],
  ["emba","mast","masters","Executive / Evening Master of Business Administration (EMBA)","এক্সিকিউটিভ / ইভিনিং মাস্টার অব বিজনেস অ্যাডমিনিস্ট্রেশন (ইএমবিএ)",["acc_fin","mkt_mgmt"]],
  ["mbs","mast","masters","Master of Business Studies (MBS)","মাস্টার অব বিজনেস স্টাডিজ (এমবিএস)",["acc_fin","mkt_mgmt"]],
  ["msc","mast","masters","Master of Science (MSc / MS)","মাস্টার অব সায়েন্স (এমএসসি / এমএস)",["physics_math","chem","microbio","psych","cse","agri","fisheries","vet","nutrition","pubhealth"]],
  ["msce","mast","masters","Master of Science in Engineering / Master of Engineering (MSc Engg / MEngg)","মাস্টার অব সায়েন্স ইন ইঞ্জিনিয়ারিং / মাস্টার অব ইঞ্জিনিয়ারিং (এমএসসি ইঞ্জি / এমইঞ্জি)",ENG_SUBJ],
  ["march","mast","masters","Master of Architecture / Master of Urban & Regional Planning (M.Arch / MURP)","মাস্টার অব আর্কিটেকচার / মাস্টার অব আরবান অ্যান্ড রিজিওনাল প্ল্যানিং (এম.আর্ক / এমইউআরপি)",["arch","planning"]],
  ["mph","mast","masters","Master of Public Health (MPH)","মাস্টার অব পাবলিক হেলথ (এমপিএইচ)",["pubhealth","mbbs","nursing"]],
  ["medpg","mast","masters","Doctor of Medicine / Master of Surgery / Master of Dental Surgery / Fellowship (MD / MS / MDS / FCPS)","ডক্টর অব মেডিসিন / মাস্টার অব সার্জারি / মাস্টার অব ডেন্টাল সার্জারি / ফেলোশিপ (এমডি / এমএস / এমডিএস / এফসিপিএস)",["mbbs","dental"]],
  ["mpharm","mast","masters","Master of Pharmacy (M.Pharm)","মাস্টার অব ফার্মেসি (এম.ফার্ম)",["pharmacy"]],
  ["llm","mast","masters","Master of Laws (LLM)","মাস্টার অব লজ (এলএলএম)",["law"]],
  ["mfa","mast","masters","Master of Fine Arts (MFA)","মাস্টার অব ফাইন আর্টস (এমএফএ)",["design","music"]],
  ["med","mast","masters","Master of Education (MEd)","মাস্টার অব এডুকেশন (এমএড)",["educ"]],
  ["kamil","mast","masters","Kamil (madrasa master's degree)","কামিল (মাদ্রাসা স্নাতকোত্তর)",["islamic"]],
  ["mphil","res","masters","Master of Philosophy (MPhil)","মাস্টার অব ফিলোসফি (এমফিল)",null],
  ["phd","res","masters","Doctor of Philosophy (PhD)","ডক্টর অব ফিলোসফি (পিএইচডি)",null]
];
const LEVELS = [
  {id:"ssc",cat:"sec",stage:"ssc",cur:NAT_SSC,en:"SSC (General, national curriculum)",bn:"এসএসসি (সাধারণ, জাতীয় শিক্ষাক্রম)",next:["HSC","এইচএসসি"]},
  {id:"dakhil",cat:"sec",stage:"ssc",cur:MAD,en:"Dakhil (Alia madrasa)",bn:"দাখিল (আলিয়া মাদ্রাসা)",next:["Alim","আলিম"]},
  {id:"ssc_voc",cat:"sec",stage:"ssc",cur:VOC,en:"SSC (Vocational)",bn:"এসএসসি (ভোকেশনাল)",next:["HSC (Vocational)","এইচএসসি (ভোকেশনাল)"]},
  {id:"olevel",cat:"sec",stage:"ssc",cur:OLEV,en:"Cambridge O Level / Cambridge IGCSE (English medium)",bn:"ক্যামব্রিজ ও লেভেল / ক্যামব্রিজ আইজিসিএসই (ইংলিশ মিডিয়াম)",next:["Cambridge International AS & A Level","ক্যামব্রিজ ইন্টারন্যাশনাল এএস ও এ লেভেল"]},
  {id:"olevel_edx",cat:"sec",stage:"ssc",cur:OLEV,en:"Pearson Edexcel International GCSE (English medium)",bn:"পিয়ারসন এডেক্সেল ইন্টারন্যাশনাল জিসিএসই (ইংলিশ মিডিয়াম)",next:["Pearson Edexcel International A Level (IAL)","পিয়ারসন এডেক্সেল ইন্টারন্যাশনাল এ লেভেল (আইএএল)"]},
  {id:"hsc",cat:"hs",stage:"hsc",cur:NAT_HSC,en:"HSC (General, national curriculum)",bn:"এইচএসসি (সাধারণ, জাতীয় শিক্ষাক্রম)"},
  {id:"alim",cat:"hs",stage:"hsc",cur:MAD,en:"Alim (Alia madrasa)",bn:"আলিম (আলিয়া মাদ্রাসা)"},
  {id:"hsc_voc",cat:"hs",stage:"hsc",cur:VOCH,en:"HSC (Vocational / Business Management)",bn:"এইচএসসি (ভোকেশনাল / বিজনেস ম্যানেজমেন্ট)"},
  {id:"alevel",cat:"hs",stage:"hsc",cur:ALEV,en:"Cambridge International AS & A Level (English medium)",bn:"ক্যামব্রিজ ইন্টারন্যাশনাল এএস ও এ লেভেল (ইংলিশ মিডিয়াম)"},
  {id:"alevel_edx",cat:"hs",stage:"hsc",cur:ALEV,en:"Pearson Edexcel International A Level (IAL) (English medium)",bn:"পিয়ারসন এডেক্সেল ইন্টারন্যাশনাল এ লেভেল (আইএএল) (ইংলিশ মিডিয়াম)"},
];
DEG.forEach(([id,grp,mode,en,bn,subj])=>LEVELS.push({id,cat:"deg",grp,mode,en,bn,subj:subj||ALLD}));
const DGRPN = {dip:["Diploma (polytechnic / institute)","ডিপ্লোমা (পলিটেকনিক / ইনস্টিটিউট)"],pass:["Bachelor's Pass (3-year)","স্নাতক পাস (৩ বছর)"],hons:["Bachelor's Honours (4-year)","স্নাতক অনার্স (৪ বছর)"],prof:["Professional bachelor's","পেশাগত স্নাতক"],mast:["Master's & postgraduate","স্নাতকোত্তর"],res:["Research degrees","গবেষণা ডিগ্রি"]};
const LCAT = {sec:["Secondary (Class 10)","মাধ্যমিক (দশম শ্রেণি)"],hs:["Higher secondary (Class 12)","উচ্চমাধ্যমিক (দ্বাদশ শ্রেণি)"],deg:["Diploma, university & professional","ডিপ্লোমা, বিশ্ববিদ্যালয় ও পেশাগত"]};

/* ---- Career quiz: each option adds interest points (i) and/or preferences (p) ---- */
const QUIZ = [
  {q:["A free afternoon. What do you end up doing?","হঠাৎ একটা ফাঁকা বিকেল। শেষমেশ কী করেন?"],o:[
    [["Fixing a gadget or building something","কোনো যন্ত্র সারাই বা কিছু বানানো"],{build:2,tech:1}],
    [["Reading, writing or making content","পড়া, লেখা বা কনটেন্ট বানানো"],{writing:2,creative:1}],
    [["Organising something with friends","বন্ধুদের নিয়ে কিছু আয়োজন করা"],{people:2,lead:1}],
    [["Volunteering or helping someone","স্বেচ্ছাসেবা বা কাউকে সাহায্য করা"],{helping:2}]]},
  {q:["Which class did you actually enjoy?","কোন ক্লাসটা আসলে ভালো লাগত?"],o:[
    [["Maths or Accounting","গণিত বা হিসাববিজ্ঞান"],{numbers:2}],
    [["Science: Biology, Chemistry, Physics","বিজ্ঞান: জীববিজ্ঞান, রসায়ন, পদার্থবিজ্ঞান"],{science:2}],
    [["Language, History or Social Science","ভাষা, ইতিহাস বা সমাজবিজ্ঞান"],{writing:1,rules:1,people:1}],
    [["Art, Design or ICT","আর্ট, ডিজাইন বা আইসিটি"],{creative:2,tech:1}]]},
  {q:["Friends usually come to you for…","বন্ধুরা সাধারণত আপনার কাছে আসে…"],o:[
    [["Help understanding a topic","কোনো বিষয় বুঝে নিতে"],{teaching:2}],
    [["Settling an argument fairly","ঝগড়া ন্যায্যভাবে মেটাতে"],{rules:2,lead:1}],
    [["Phone, laptop or app trouble","ফোন, ল্যাপটপ বা অ্যাপের সমস্যায়"],{tech:2}],
    [["Advice when life gets hard","জীবনের কঠিন সময়ে পরামর্শ নিতে"],{helping:2,people:1}]]},
  {q:["Where would you rather work every day?","প্রতিদিন কোথায় কাজ করতে চান?"],o:[
    [["A government office with fixed hours","নির্দিষ্ট সময়ের সরকারি অফিস"],{},{pub:2}],
    [["A fast-growing private company","দ্রুত বাড়তে থাকা বেসরকারি প্রতিষ্ঠান"],{lead:1},{priv:2}],
    [["Outdoors, in the field or with communities","মাঠপর্যায়ে, বাইরে বা মানুষের মাঝে"],{nature:1,helping:1}],
    [["My own desk, studio or remote","নিজের ডেস্ক, স্টুডিও বা ঘরে বসে"],{creative:1,tech:1},{priv:1}]]},
  {q:["What matters most in your first job?","প্রথম চাকরিতে আপনার কাছে সবচেয়ে জরুরি কী?"],o:[
    [["Security and respect","নিরাপত্তা ও সম্মান"],{rules:1},{pub:2}],
    [["Fast income growth","দ্রুত আয় বাড়া"],{numbers:1,lead:1},{priv:1}],
    [["Doing good for society","সমাজের জন্য ভালো কিছু করা"],{helping:2}],
    [["Freedom to create","নিজের মতো সৃষ্টি করার স্বাধীনতা"],{creative:2}]]},
  {q:["Faced with a hard problem, you…","কঠিন সমস্যায় পড়লে আপনি…"],o:[
    [["Open a spreadsheet and look at the data","স্প্রেডশিট খুলে ডেটা দেখেন"],{numbers:2,tech:1}],
    [["Test things hands-on until it works","হাতে-কলমে চেষ্টা করেন, যতক্ষণ না হয়"],{build:1,science:2}],
    [["Talk it through with people","মানুষের সঙ্গে আলোচনা করেন"],{people:2}],
    [["Write a plan and follow it","পরিকল্পনা লিখে সেই মতো এগোন"],{writing:1,lead:1,rules:1}]]},
  {q:["Animals, crops, rivers and the outdoors?","প্রাণী, ফসল, নদী, প্রকৃতি?"],o:[
    [["I love it","খুব ভালো লাগে"],{nature:3}],
    [["It's fine","মন্দ না"],{nature:1}],
    [["Not for me","আমার জন্য না"],{}]]},
  {q:["More study or licensing exams after your degree?","ডিগ্রির পর আরও পড়াশোনা বা লাইসেন্স পরীক্ষা?"],o:[
    [["Yes, if the career is worth it","হ্যাঁ, ক্যারিয়ার ভালো হলে"],{science:1},{study:1}],
    [["Maybe a short course","হয়তো ছোট কোনো কোর্স"],{}],
    [["No, I want to start working soon","না, তাড়াতাড়ি কাজ শুরু করতে চাই"],{},{nostudy:1}]]}
];


/* ---- UGC universities ---- */
/* typical degrees by university type (not a verified per-university programme list) */
const UTYPE = {
  gen:{en:"General university",bn:"সাধারণ বিশ্ববিদ্যালয়",d:["ba", "bss", "bba", "bsc", "bfa", "llb", "bpharm", "bsce", "ma", "mss", "mba", "emba", "msc", "llm", "mfa", "mphil", "phd"]},
  stem:{en:"Science & technology university",bn:"বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",d:["bsc", "bsce", "bba", "bss", "ba", "bpharm", "ma", "mss", "mba", "msc", "msce", "mphil", "phd"]},
  eng:{en:"Engineering university",bn:"প্রকৌশল বিশ্ববিদ্যালয়",d:["bsce", "barch", "burp", "msce", "march", "mphil", "phd"]},
  agri:{en:"Agricultural university",bn:"কৃষি বিশ্ববিদ্যালয়",d:["bscag", "dvm", "bscfish", "bsc", "msc", "mba", "mphil", "phd"]},
  med:{en:"Medical university (with affiliated colleges)",bn:"মেডিকেল বিশ্ববিদ্যালয় (অধিভুক্ত কলেজসহ)",d:["mbbs", "bds", "bscn", "bpt", "bph", "mph", "medpg", "mphil", "phd"]},
  vet:{en:"Veterinary & animal sciences university",bn:"ভেটেরিনারি ও প্রাণিবিজ্ঞান বিশ্ববিদ্যালয়",d:["dvm", "bscfish", "bsc", "msc", "mphil", "phd"]},
  tex:{en:"Textile university",bn:"টেক্সটাইল বিশ্ববিদ্যালয়",d:["bsctex", "msce", "mba"]},
  mar:{en:"Maritime university",bn:"মেরিটাইম বিশ্ববিদ্যালয়",d:["bmar", "bsce", "bba", "msce", "msc", "mba"]},
  ict:{en:"Frontier technology (ICT) university",bn:"ফ্রন্টিয়ার টেকনোলজি (আইসিটি) বিশ্ববিদ্যালয়",d:["bsce", "msce"]},
  aero:{en:"Aviation & aerospace university",bn:"এভিয়েশন ও অ্যারোস্পেস বিশ্ববিদ্যালয়",d:["baero", "bsce", "bba", "msce", "mba"]},
  nu:{en:"Affiliating university (colleges nationwide)",bn:"অধিভুক্তকারী বিশ্ববিদ্যালয় (সারা দেশের কলেজ)",d:["ba_pass", "bss_pass", "bbs_pass", "bsc_pass", "ba", "bss", "bbs", "bsc", "bba", "bed", "bped", "llb", "ma", "mss", "mbs", "msc", "med", "mphil", "phd"]},
  open:{en:"Open (distance) university",bn:"উন্মুক্ত (দূরশিক্ষণ) বিশ্ববিদ্যালয়",d:["ba", "bss", "bba", "bsc", "bed", "ma", "mss", "mba", "med", "mphil", "phd"]},
  isl:{en:"Islamic Arabic university (madrasa degrees)",bn:"ইসলামি আরবি বিশ্ববিদ্যালয় (মাদ্রাসা ডিগ্রি)",d:["fazil_pass", "fazil_hons", "kamil", "mphil", "phd"]},
  pvt:{en:"Private university",bn:"বেসরকারি বিশ্ববিদ্যালয়",d:["bba", "ba", "bss", "bsc", "bsce", "llb", "bpharm", "mba", "emba", "ma", "llm", "msc", "mph"]},
  pvt_tech:{en:"Private science & technology university",bn:"বেসরকারি বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",d:["bsce", "barch", "bsc", "bba", "ba", "llb", "bpharm", "msce", "msc", "mba", "ma"]},
  pvt_health:{en:"Private health sciences university",bn:"বেসরকারি স্বাস্থ্যবিজ্ঞান বিশ্ববিদ্যালয়",d:["bpharm", "bscn", "bph", "bpt", "bsc", "mph", "mpharm"]},
  pvt_creative:{en:"Private creative arts university",bn:"বেসরকারি সৃজনশীল শিল্পকলা বিশ্ববিদ্যালয়",d:["bfa", "ba", "bscfd", "bba", "bsce", "mfa", "mba", "ma"]},
  pvt_fashion:{en:"Private fashion & apparel university",bn:"বেসরকারি ফ্যাশন ও অ্যাপারেল বিশ্ববিদ্যালয়",d:["bscfd", "bsctex", "bba", "mba"]},
  pvt_agri:{en:"Private agricultural university",bn:"বেসরকারি কৃষি বিশ্ববিদ্যালয়",d:["bscag", "bscfish", "dvm", "bba", "msc"]},
  intl_eng:{en:"International university (engineering)",bn:"আন্তর্জাতিক বিশ্ববিদ্যালয় (প্রকৌশল)",d:["bsce", "bba", "msce", "mba", "phd"]},
  intl_lib:{en:"International university (liberal arts)",bn:"আন্তর্জাতিক বিশ্ববিদ্যালয় (লিবারেল আর্টস)",d:["ba", "bsc", "ma"]}
};
/* Public: official UGC list (ugc-universities.gov.bd), 61 universities */
const UNI_PUB = [
 ["University of Dhaka","gen"],["University of Rajshahi","gen"],["Bangladesh Agricultural University","agri"],["Bangladesh University of Engineering & Technology (BUET)","eng"],
 ["University of Chittagong","gen"],["Jahangirnagar University","gen"],["Islamic University, Bangladesh","gen"],["Shahjalal University of Science & Technology","stem"],
 ["Khulna University","gen"],["National University","nu"],["Bangladesh Open University","open"],["Bangladesh Medical University","med"],
 ["Gazipur Agricultural University","agri"],["Hajee Mohammad Danesh Science & Technology University","stem"],["Mawlana Bhashani Science & Technology University","stem"],["Patuakhali Science and Technology University","stem"],
 ["Sher-e-Bangla Agricultural University","agri"],["Chittagong University of Engineering & Technology (CUET)","eng"],["Rajshahi University of Engineering & Technology (RUET)","eng"],["Khulna University of Engineering & Technology (KUET)","eng"],
 ["Dhaka University of Engineering & Technology (DUET)","eng"],["Noakhali Science & Technology University","stem"],["Jagannath University","gen"],["Comilla University","gen"],
 ["Jatiya Kabi Kazi Nazrul Islam University","gen"],["Chittagong Veterinary and Animal Sciences University","vet"],["Sylhet Agricultural University","agri"],["Jessore University of Science & Technology","stem"],
 ["Pabna University of Science and Technology","stem"],["Begum Rokeya University, Rangpur","gen"],["Bangladesh University of Professionals","gen"],["Gopalganj Science & Technology University","stem"],
 ["Bangladesh University of Textiles (BUTEX)","tex"],["University of Barishal","gen"],["Rangamati Science and Technology University","stem"],["Bangladesh Maritime University","mar"],
 ["Islamic Arabic University","isl"],["Chittagong Medical University","med"],["Rajshahi Medical University","med"],["Rabindra University, Bangladesh","gen"],
 ["University of Frontier Technology, Bangladesh","ict"],["Netrokona University","gen"],["Khulna Agricultural University","agri"],["Jamalpur Science and Technology University","stem"],
 ["Sylhet Medical University","med"],["Aviation and Aerospace University, Bangladesh","aero"],["Chandpur Science and Technology University","stem"],["Kishoreganj University","gen"],
 ["Habiganj Agricultural University","agri"],["Khulna Medical University","med"],["Kurigram Agricultural University","agri"],["Sunamganj Science and Technology University","stem"],
 ["Pirojpur Science & Technology University","stem"],["Naogaon University","gen"],["Meherpur University","gen"],["University of Bogura","gen"],
 ["Dhaka Central University","gen"],["Thakurgaon University","gen"],["Lakshmipur Science & Technology University","stem"],["Narayanganj Science and Technology University","stem"],
 ["Shariatpur Agricultural University","agri"]
];
/* Private: official UGC list (ugc-universities.gov.bd/private-universities), 117 universities */
const UNI_PVT_NAMES = ["North South University", "University of Science & Technology Chittagong", "Independent University, Bangladesh", "Central Women's University", "International University of Business Agriculture & Technology", "International Islamic University Chittagong", "Ahsanullah University of Science and Technology", "American International University-Bangladesh", "East West University", "University of Asia Pacific", "Gono Bishwabidyalay", "The People's University of Bangladesh", "Asian University of Bangladesh", "Dhaka International University", "Manarat International University", "BRAC University", "Bangladesh University", "Leading University", "BGC Trust University Bangladesh", "Sylhet International University", "University of Development Alternative", "Premier University", "Southeast University", "Daffodil International University", "Stamford University Bangladesh", "State University of Bangladesh (SUB)", "City University", "Prime University", "Northern University Bangladesh", "Southern University Bangladesh", "Green University of Bangladesh", "Pundra University of Science & Technology", "World University of Bangladesh", "Shanto-Mariam University of Creative Technology", "The Millennium University", "Eastern University", "Metropolitan University", "Uttara University", "United International University", "University of South Asia", "Victoria University of Bangladesh", "Bangladesh University of Business & Technology (BUBT)", "Presidency University", "University of Information Technology & Sciences", "Primeasia University", "Royal University of Dhaka", "University of Liberal Arts Bangladesh", "Atish Dipankar University of Science & Technology", "Bangladesh Islami University", "ASA University Bangladesh", "East Delta University", "European University of Bangladesh", "Varendra University", "Hamdard University Bangladesh", "BGMEA University of Fashion & Technology (BUFT)", "North East University Bangladesh", "First Capital University of Bangladesh", "Ishakha International University, Bangladesh", "Z.H Sikder University of Science & Technology", "Exim Bank Agricultural University, Bangladesh", "North Western University", "Khwaja Yunus Ali University", "Sonargaon University", "Feni University", "Britannia University", "Port City International University", "Bangladesh University of Health Sciences", "Chittagong Independent University", "Notre Dame University Bangladesh", "Times University, Bangladesh", "North Bengal International University", "Fareast International University", "Rajshahi Science & Technology University (RSTU), Natore", "Brahmaputra International University", "Cox's Bazar International University", "R. P. Shaha University", "German University Bangladesh", "Global University Bangladesh", "CCN University of Science & Technology", "Bangladesh Army University of Science and Technology (BAUST), Saidpur", "Bangladesh Army University of Engineering and Technology (BAUET), Qadirabad", "Bangladesh Army International University of Science & Technology (BAIUST), Comilla", "University of Scholars", "Canadian University of Bangladesh", "N.P.I University of Bangladesh", "Northern University of Business & Technology, Khulna", "Rabindra Maitree University, Kushtia", "University of Creative Technology, Chittagong", "Central University of Science and Technology", "Tagore University of Creative Arts", "University of Global Village", "Rupayan A.K.M Shamsuzzoha University", "Anwer Khan Modern University", "ZNRF University of Management Sciences", "Ahsania Mission University of Science and Technology", "Khulna Khan Bahadur Ahsanullah University", "Bandarban University", "Shah Makhdum Management University, Rajshahi", "Trust University, Barishal", "International Standard University", "University of Brahmanbaria", "University of Skill Enrichment and Technology", "Microland University of Science and Technology", "R.T.M Al-Kabir Technical University", "Dr. Momtaz Begum University of Science and Technology (MUST)", "Chattogram BGMEA University of Fashion and Technology", "Bangladesh Army University of Science and Technology, Khulna", "Teesta University, Rangpur", "International Islami University of Science and Technology Bangladesh (IIUSTB)", "Lalon University of Science and Arts", "Justice Abu Zafar Siddiquie Science and Technology University, Kushtia", "Grameen University", "IBAIS University", "The University of Comilla", "Queens University", "America Bangladesh University", "Eco University of Science and Technology (EUST)"];
/* UGC compliance notes (from UGC's private university page) */
const UNI_NOTE = {"Victoria University of Bangladesh": ["UGC note: unapproved building or campus.", "ইউজিসির নোট: অননুমোদিত ভবন বা ক্যাম্পাস।"], "The People's University of Bangladesh": ["UGC note: no treasurer or pro-VC appointed.", "ইউজিসির নোট: ট্রেজারার ও প্রো-ভিসি নিয়োগ নেই।"], "Southern University Bangladesh": ["UGC note: admission suspension withdrawn under a court stay; cases pending.", "ইউজিসির নোট: আদালতের স্থগিতাদেশে ভর্তি স্থগিতের আদেশ প্রত্যাহার; মামলা চলমান।"], "European University of Bangladesh": ["UGC note: trustee ownership dispute, admitting above approved seats, and a campus on less land than the law requires.", "ইউজিসির নোট: ট্রাস্টি বোর্ডের মালিকানা বিরোধ, অনুমোদিত আসনের বেশি ভর্তি, এবং আইনে নির্ধারিত পরিমাণের কম জমিতে ক্যাম্পাস।"], "BGMEA University of Fashion & Technology (BUFT)": ["UGC note: Bachelor of Apparel Merchandising & Management and BA in Fashion Studies approved from 10 March 2020.", "ইউজিসির নোট: ব্যাচেলর অব অ্যাপারেল মার্চেন্ডাইজিং অ্যান্ড ম্যানেজমেন্ট এবং বিএ ইন ফ্যাশন স্টাডিজ ১০ মার্চ ২০২০ থেকে অনুমোদিত।"], "Global University Bangladesh": ["UGC: new admissions to all programmes stopped from January 2026 until further notice. Current students continue.", "ইউজিসি: পরবর্তী নির্দেশনা না দেওয়া পর্যন্ত জানুয়ারি ২০২৬ থেকে সব প্রোগ্রামে নতুন ভর্তি বন্ধ। চলমান শিক্ষার্থীদের কার্যক্রম চলবে।"], "Rupayan A.K.M Shamsuzzoha University": ["UGC: academic programmes have not started yet.", "ইউজিসি: একাডেমিক কার্যক্রম এখনো শুরু হয়নি।"], "Shah Makhdum Management University, Rajshahi": ["UGC: academic programmes have not started yet.", "ইউজিসি: একাডেমিক কার্যক্রম এখনো শুরু হয়নি।"], "Microland University of Science and Technology": ["UGC: academic programmes have not started yet.", "ইউজিসি: একাডেমিক কার্যক্রম এখনো শুরু হয়নি।"], "Justice Abu Zafar Siddiquie Science and Technology University, Kushtia": ["UGC: academic programmes have not started yet.", "ইউজিসি: একাডেমিক কার্যক্রম এখনো শুরু হয়নি।"], "University of Skill Enrichment and Technology": ["UGC: all academic and administrative activities closed from 29 September 2026.", "ইউজিসি: ২৯/০৯/২০২৬ থেকে সব একাডেমিক ও প্রশাসনিক কার্যক্রম বন্ধ।"], "IBAIS University": ["UGC note: the university currently has no approved address.", "ইউজিসির নোট: বিশ্ববিদ্যালয়টির বর্তমানে কোনো অনুমোদিত ঠিকানা নেই।"], "The University of Comilla": ["UGC: shut down in 2006 and not permitted to restart academic activities.", "ইউজিসি: ২০০৬ সালে বন্ধ, পুনরায় শিক্ষা কার্যক্রম শুরুর অনুমতি দেওয়া হয়নি।"], "Queens University": ["UGC note: conditional approval (2015); compliance deadline expired.", "ইউজিসির নোট: শর্তসাপেক্ষ অনুমোদন (২০১৫); শর্ত পূরণের সময়সীমা পেরিয়ে গেছে।"], "America Bangladesh University": ["UGC: no approved campus, no legal authority; operations have no legal basis.", "ইউজিসি: অনুমোদিত ক্যাম্পাস ও বৈধ কর্তৃপক্ষ নেই; কার্যক্রমের আইনগত ভিত্তি নেই।"], "South Asian University": ["Listed by UGC as an international university; its campus is in New Delhi, India.", "ইউজিসির তালিকায় আন্তর্জাতিক বিশ্ববিদ্যালয়; এর ক্যাম্পাস ভারতের নয়াদিল্লিতে।"]};
function pvtType(n){ if(/Al-Kabir Technical/i.test(n)) return "pvt_tech"; if(/Health Sciences/i.test(n)) return "pvt_health"; if(/Fashion/i.test(n)) return "pvt_fashion"; if(/Creative|Tagore/i.test(n)) return "pvt_creative";
  if(/Agricultur/i.test(n)) return "pvt_agri"; if(/Science\s*(&|and)\s*Technology|Engineering|Technical|Technology/i.test(n)) return "pvt_tech"; return "pvt"; }
const UNIS = [];
UNI_PUB.forEach(([n,ty])=>UNIS.push({n,ty,k:"pub"}));
UNI_PVT_NAMES.forEach(n=>UNIS.push({n,ty:pvtType(n),k:"pvt"}));
UNIS.push({n:"Islamic University of Technology (IUT)",ty:"intl_eng",k:"intl"},{n:"Asian University for Women",ty:"intl_lib",k:"intl"},{n:"South Asian University",ty:"intl_lib",k:"intl"});

/* Private job market: entry-level (≤2 yrs) listings on Bdjobs.com, sampled 21 Oct 2026.
   [entry listings sampled, listings showing salary, salary low (25th pct of min), salary high (75th pct of max), education en, bn, skills] */
const PVT_DATE=["21 Oct 2026","২১ অক্টোবর ২০২৬"];
const PVT_MARKET={"pvt_bank": [30, 4, 17000, 27000, "Bachelor's or Master's in any discipline (MBA often preferred)", "যেকোনো বিষয়ে স্নাতক বা স্নাতকোত্তর (প্রায়ই এমবিএ অগ্রাধিকার)", ["Business Development", "Market Research", "Sales Performance Analysis"]], "accountant": [61, 6, 16000, 29000, "BBA / MBA in Accounting, Finance or Banking", "হিসাববিজ্ঞান, ফিন্যান্স বা ব্যাংকিংয়ে বিবিএ / এমবিএ", ["Financial Reporting", "Financial Analysis", "Accounting Software"]], "audit": [15, 4, 19000, 51000, "BBA / MBA / MCom in Accounting; CA (CC) preferred", "হিসাববিজ্ঞানে বিবিএ / এমবিএ / এমকম; সিএ (সিসি) অগ্রাধিকার", ["Audit reporting", "Internal Control", "Inventory Audit"]], "network": [10, 3, 18000, 43000, "BSc in CSE / EEE / IT, or Diploma in Engineering (Computer)", "সিএসই / ইইই / আইটিতে বিএসসি, অথবা ডিপ্লোমা ইঞ্জিনিয়ারিং (কম্পিউটার)", ["Network Troubleshooting", "Network Monitoring", "Mikrotik"]], "civil_site": [15, 4, 17000, 32000, "Diploma in Civil Engineering most often; BSc Civil also accepted", "বেশিরভাগ ক্ষেত্রে সিভিলে ডিপ্লোমা; সিভিলে বিএসসি-ও গ্রহণযোগ্য", ["Site Supervision", "AutoCAD 2D/3D", "Project Management"]], "electrical": [18, 1, null, null, "BSc in EEE, or Diploma in Electrical Engineering", "ইইইতে বিএসসি, অথবা ইলেকট্রিক্যালে ডিপ্লোমা", ["Preventive Maintenance", "Electrical Installation", "BOQ"]], "mech": [17, 1, null, null, "BSc (Mechanical / EEE) or Diploma in Engineering", "বিএসসি (মেকানিক্যাল / ইইই) অথবা ডিপ্লোমা ইঞ্জিনিয়ারিং", ["Preventive Maintenance", "Spare parts", "Electrical Maintenance"]], "architect": [33, 6, 16000, 30000, "Bachelor of Architecture (B.Arch)", "ব্যাচেলর অব আর্কিটেকচার (বি.আর্ক)", ["AutoCAD 2D/3D", "SketchUp", "Lumion"]], "merch": [26, 4, 15000, 28000, "BSc in Textile Engineering / Apparel Manufacturing, or any Bachelor's", "টেক্সটাইল ইঞ্জিনিয়ারিং / অ্যাপারেল ম্যানুফ্যাকচারিংয়ে বিএসসি, বা যেকোনো স্নাতক", ["Merchandising", "Buyer Communication", "Order Management"]], "ie": [7, 3, 23000, 45000, "BSc in Industrial & Production / Textile / EEE Engineering", "ইন্ডাস্ট্রিয়াল ও প্রোডাকশন / টেক্সটাইল / ইইই ইঞ্জিনিয়ারিংয়ে বিএসসি", ["Line balancing", "Process Improvement"]], "compliance": [19, 2, 25000, 34000, "BBA / MBA (HRM preferred) or Master's in any discipline", "বিবিএ / এমবিএ (এইচআরএম অগ্রাধিকার) বা যেকোনো বিষয়ে স্নাতকোত্তর", ["Compliance Audit", "Human Resource Management"]], "pharmacist": [12, 3, 15000, 23000, "Diploma in Pharmacy or B.Pharm, with Pharmacy Council of Bangladesh registration", "ডিপ্লোমা ইন ফার্মেসি বা বি.ফার্ম, বাংলাদেশ ফার্মেসি কাউন্সিলের নিবন্ধনসহ", ["Pharmaceutical Product Management", "Stock Management"]], "qc": [16, 3, 20000, 30000, "B.Pharm, or MSc in Chemistry / Microbiology / Biochemistry", "বি.ফার্ম, অথবা রসায়ন / মাইক্রোবায়োলজি / বায়োকেমিস্ট্রিতে এমএসসি", ["Quality Control", "Quality Assurance", "SOP Compliance"]], "mpo": [82, 3, 15000, 28000, "Graduate in any discipline; science graduates preferred", "যেকোনো বিষয়ে স্নাতক; বিজ্ঞানে স্নাতক অগ্রাধিকার", ["Sales Target Achievement", "Product Promotion"]], "doctor": [86, 3, 36000, 56000, "MBBS with BMDC registration", "বিএমডিসি নিবন্ধনসহ এমবিবিএস", ["Patient Care", "Patient Assessment", "Medical Treatment"]], "program": [9, 3, 15000, 32000, "Bachelor's in any discipline; Master's often preferred", "যেকোনো বিষয়ে স্নাতক; প্রায়ই স্নাতকোত্তর অগ্রাধিকার", ["Project Planning", "Program Organizing", "Analytical Skill"]], "dm": [55, 8, 20000, 31000, "Bachelor's (any subject); proven results matter more than the degree", "স্নাতক (যেকোনো বিষয়); ডিগ্রির চেয়ে প্রমাণিত কাজের ফল বেশি গুরুত্বপূর্ণ", ["Social Media Marketing", "Google Ads", "Content Creation"]], "sales": [76, 4, 14000, 26000, "Bachelor's, often BBA in Marketing", "স্নাতক, প্রায়ই মার্কেটিংয়ে বিবিএ", ["Business Development", "Sales Target Achievement", "Market Research"]], "hr": [50, 6, 19000, 30000, "BBA / MBA in HRM or Management", "এইচআরএম বা ম্যানেজমেন্টে বিবিএ / এমবিএ", ["Recruitment & Selection", "Payroll Management", "HRIS"]], "teacher": [57, 5, 14000, 27000, "Bachelor's or Master's in the subject taught (private / English-medium schools)", "যে বিষয় পড়াবেন তাতে স্নাতক বা স্নাতকোত্তর (বেসরকারি / ইংলিশ মিডিয়াম স্কুল)", ["Lesson Planning", "Classroom Management", "Curriculum Development"]], "lecturer": [33, 2, 19000, 22000, "4-year Honours plus Master's in the subject (listings are mostly private colleges)", "বিষয়ে ৪ বছরের অনার্সসহ স্নাতকোত্তর (তালিকার বেশিরভাগ বেসরকারি কলেজ)", ["Teaching", "Lesson Planning"]], "content": [35, 5, 15000, 30000, "Bachelor's in any subject; strong writing samples", "যেকোনো বিষয়ে স্নাতক; ভালো লেখার নমুনা", ["Content Writing", "SEO", "Content Creation"]], "designer": [38, 7, 15000, 35000, "HSC, Diploma or Bachelor's; a portfolio decides", "এইচএসসি, ডিপ্লোমা বা স্নাতক; পোর্টফোলিওই আসল", ["Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro"]], "legal": [12, 3, 23000, 33000, "LLB (LLM preferred); Bar Council membership preferred", "এলএলবি (এলএলএম অগ্রাধিকার); বার কাউন্সিল সদস্যপদ অগ্রাধিকার", ["Legal Drafting", "Legal Documentation", "Case Management"]], "nurse": [18, 3, 12000, 16000, "BSc or Diploma in Nursing Science & Midwifery, registered with the Nursing Council", "নার্সিং কাউন্সিলে নিবন্ধিত বিএসসি বা ডিপ্লোমা ইন নার্সিং সায়েন্স অ্যান্ড মিডওয়াইফারি", ["Patient Care", "ICU/NICU Nursing"]], "fashion_d": [10, 2, 21000, 34000, "BSc / BA in Fashion Design", "ফ্যাশন ডিজাইনে বিএসসি / বিএ", ["Fashion Design", "Product Development", "Adobe Illustrator"]], "hotel": [32, 5, 12000, 20000, "HSC or Bachelor's; good English", "এইচএসসি বা স্নাতক; ভালো ইংরেজি", ["Front Desk", "Reception", "Administration"]], "cs": [63, 5, 15000, 20000, "Bachelor's in any discipline (some accept HSC)", "যেকোনো বিষয়ে স্নাতক (কিছু ক্ষেত্রে এইচএসসি)", ["Customer Service", "Call Center Operation", "Complaint Resolution"]], "brand": [13, 4, 17000, 28000, "Graduate in any discipline; BBA in Marketing preferred", "যেকোনো বিষয়ে স্নাতক; মার্কেটিংয়ে বিবিএ অগ্রাধিকার", ["Brand Promotion", "Market Research", "Customer Relationship"]], "tso": [28, 2, 20000, 29000, "BBA / BBS or any Bachelor's", "বিবিএ / বিবিএস বা যেকোনো স্নাতক", ["Territory Sales", "Sales Target Achievement", "Competitor Analysis"]], "research": [27, 6, 19000, 39000, "BSc in Statistics / Economics, or BBA in Marketing", "পরিসংখ্যান / অর্থনীতিতে বিএসসি, বা মার্কেটিংয়ে বিবিএ", ["Market Research", "Competitor Analysis", "Market Audit"]], "retail": [23, 2, 18000, 27000, "Bachelor's; retail or store experience helps", "স্নাতক; রিটেইল বা স্টোরের অভিজ্ঞতা সহায়ক", ["Stock Management", "Inventory Control"]], "scm_ex": [16, 3, 13000, 26000, "BBA / MBA in Supply Chain or Business; some ask BSc / Diploma Engineering", "সাপ্লাই চেইন বা ব্যবসায় বিবিএ / এমবিএ; কিছু ক্ষেত্রে বিএসসি / ডিপ্লোমা ইঞ্জিনিয়ারিং", ["Procurement", "Vendor Management", "Inventory Management"]], "commercial": [14, 2, 24000, 42000, "BBA / BBS or any Bachelor's", "বিবিএ / বিবিএস বা যেকোনো স্নাতক", ["Export/Import through L/C", "Customs Clearance"]], "fin_analyst": [13, 2, 23000, 44000, "BBA / MBA in Finance or Accounting", "ফিন্যান্স বা হিসাববিজ্ঞানে বিবিএ / এমবিএ", ["Financial Reporting", "Financial Analysis"]], "uiux": [4, 4, 24000, 60000, "Bachelor's (often CSE) plus UI/UX training and a portfolio", "স্নাতক (প্রায়ই সিএসই), সঙ্গে ইউআই/ইউএক্স প্রশিক্ষণ ও পোর্টফোলিও", ["UI/UX Design", "Web Design", "HTML & CSS"]], "planner": [3, 1, null, null, "BSc in Urban & Regional Planning", "নগর ও অঞ্চল পরিকল্পনায় বিএসসি", ["GIS", "Urban Planning", "AutoCAD"]], "vet_off": [3, 0, null, null, "Doctor of Veterinary Medicine (DVM)", "ডক্টর অব ভেটেরিনারি মেডিসিন (ডিভিএম)", ["Clinical skill", "Medical Record Keeping"]], "physio": [10, 0, null, null, "Diploma in Medical Technology (Physiotherapy) or Bachelor of Physiotherapy (BPT)", "ডিপ্লোমা ইন মেডিকেল টেকনোলজি (ফিজিওথেরাপি) বা ব্যাচেলর অব ফিজিওথেরাপি (বিপিটি)", ["Physiotherapy", "Patient Assessment"]]};

/* ===== Beyond your degree: higher study, diploma/technical, low CGPA ===== */
const SRC2 = {
  B1:{t:"Prothom Alo: 47th BCS applicant Q&A (Dec 2024)",u:"https://www.prothomalo.com/chakri/chakri-suggestion/0g9b3gwc07"},
  B2:{t:"BUET IICT: M.Sc./M.Engg. (ICT) admission rules",u:"https://iict.buet.ac.bd/?page_id=76"},
  B3:{t:"Dhaka Tribune: BD students spent $667.77m abroad in FY25 (Sep 2025)",u:"https://www.dhakatribune.com/business/390989/bd-students-spend-667.77m-in-fy25-to-study"},
  B4:{t:"Open Doors: Bangladesh fact sheet 2025",u:"https://opendoorsdata.org/wp-content/uploads/2026/01/OD_Bangladesh_Fact-Sheet-2025.pdf"},
  B5:{t:"The Financial Express: Fully funded international programmes (Nov 2025)",u:"https://thefinancialexpress.com.bd/education/fully-funded-intl-programmes-open-doors-to-bangladeshi-students"},
  B6:{t:"DUET admission (diploma engineers only)",u:"https://admission.duetbd.org"},
  B7:{t:"Jagonews24: BSc vs diploma engineers, sub-assistant engineer posts (Aug 2025)",u:"https://www.jagonews24.com/en/education/news/85157"},
  B8:{t:"The Financial Express: Skilled labour migration, Japan / Korea / Malaysia (Aug 2023)",u:"https://thefinancialexpress.com.bd/economy/bangladesh/bd-still-slow-to-exploit-prospects-of-skilled-labour-migration"},
  B9:{t:"The Business Standard: Bangladesh prepares workers for Japan SSW (Apr 2026)",u:"https://www.tbsnews.net/bangladesh/bangladesh-prepares-send-manpower-japan-under-ssw-category-1423636"},
  B10:{t:"The Daily Star: Korea opens EPS sectors to Bangladeshi workers",u:"https://www.thedailystar.net/business/economy/news/korea-opens-fisheries-construction-sectors-bangladeshi-workers-3549561"},
  B11:{t:"UNB: German Opportunity Card for Bangladeshis",u:"https://unb.com.bd/news/tag/129336"},
  B12:{t:"Bdjobs.com entry-level listings, sampled 21 Oct 2026",u:"https://bdjobs.com/h/jobs"},
  B14:{t:"Prothom Alo: MBBS/BDS 2025-26 admission rules (Nov 2025)",u:"https://en.prothomalo.com/youth/education/lpcpzm0agn"},
  B15:{t:"The Daily Star: The Chartered Accountancy journey in Bangladesh (Sep 2025)",u:"https://www.thedailystar.net/campus/news/rewarding-yet-relentless-chartered-accountancy-journey-bangladesh-3988266"},
  B16:{t:"Banglapedia: Advocate (enrolment steps)",u:"https://en.banglapedia.org/index.php/Advocate"},
  B17:{t:"Bangladesh Judicial Service Commission",u:"https://bjsc.gov.bd"},
  B18:{t:"Prothom Alo: Primary assistant teacher recruitment, 10,219 posts (Nov 2025)",u:"https://en.prothomalo.com/youth/employment/6atdinyate"},
  B19:{t:"NTRCA: Non-Government Teachers' Registration & Certification Authority",u:"https://www.ntrca.gov.bd"},
  B13:{t:"Prothom Alo: 47th BCS final results, 2,167 cadre posts vacant (Jun 2026)",u:"https://en.prothomalo.com/youth/employment/wct409dbvh"}
};
/* Tree nodes: [en, bn, children|null, info] ; info = {req:[en,bn], pay:[en,bn], s:"B#"} */
const BEYOND = {
 higher:{en:"After bachelor's",bn:"স্নাতকের পর",root:["Bachelor's done","স্নাতক সম্পন্ন"],tree:[
  ["In Bangladesh","বাংলাদেশে",[
    ["Master's (MA / MSS / MSc / MBS)","স্নাতকোত্তর (এমএ / এমএসএস / এমএসসি / এমবিএস)",null,{req:["Usually 1 year after a 4-year Honours, 2 years after a 3-year Pass degree. With a 3-year Pass degree you need a Master's to sit for BCS.","৪ বছরের অনার্সের পর সাধারণত ১ বছর, ৩ বছরের পাসের পর ২ বছর। ৩ বছরের পাস ডিগ্রি থাকলে বিসিএসে বসতে স্নাতকোত্তর লাগে।"],pay:["No fixed pay rise. It helps for teaching, research, some circulars and a better final result.","বেতনে নির্দিষ্ট বৃদ্ধি নেই। শিক্ষকতা, গবেষণা, কিছু বিজ্ঞপ্তি ও ভালো ফলাফলের জন্য সহায়ক।"],s:"B1"}],
    ["MBA / Executive MBA","এমবিএ / এক্সিকিউটিভ এমবিএ",null,{req:["Open to any bachelor's at most universities. Executive and evening MBAs are for people already working; check UGC approval of the programme.","বেশিরভাগ বিশ্ববিদ্যালয়ে যেকোনো স্নাতক আবেদন করতে পারেন। এক্সিকিউটিভ ও ইভিনিং এমবিএ কর্মজীবীদের জন্য; প্রোগ্রামটি ইউজিসি অনুমোদিত কিনা দেখে নিন।"],pay:["Helps move from technical to management roles; pay depends on the employer.","টেকনিক্যাল থেকে ম্যানেজমেন্ট পদে যেতে সহায়ক; বেতন প্রতিষ্ঠানভেদে আলাদা।"],s:"S16"}],
    ["PGD (Postgraduate Diploma)","পিজিডি (স্নাতকোত্তর ডিপ্লোমা)",null,{req:["Usually 1 year, often evening classes for working people (e.g. ICT, HRM, management). At BUET IICT a PGD in ICT/IT with GPA 2.65 can lead into the M.Sc. (ICT).","সাধারণত ১ বছর, প্রায়ই কর্মজীবীদের জন্য সন্ধ্যাকালীন ক্লাস (যেমন আইসিটি, এইচআরএম, ম্যানেজমেন্ট)। বুয়েট আইআইসিটিতে জিপিএ ২.৬৫ সহ আইসিটি/আইটিতে পিজিডি থাকলে এমএসসি (আইসিটি)-তে ভর্তি হওয়া যায়।"],pay:["A fast way to switch field or add a skill without a second degree.","দ্বিতীয় ডিগ্রি ছাড়াই ক্ষেত্র বদলানো বা দক্ষতা যোগ করার দ্রুত উপায়।"],s:"B2"}],
    ["Professional qualifications (CA, ACCA, CMA)","পেশাগত যোগ্যতা (সিএ, এসিসিএ, সিএমএ)",null,{req:["Exam-based; CA in Bangladesh goes through ICAB articleship. Your CGPA matters less than passing the papers.","পরীক্ষাভিত্তিক; বাংলাদেশে সিএ হয় আইসিএবি-র আর্টিকেলশিপের মাধ্যমে। এখানে সিজিপিএর চেয়ে পেপার পাস করাই আসল।"],pay:["Qualified accountants move into audit, finance manager and CFO tracks.","যোগ্যতা অর্জনের পর অডিট, ফিন্যান্স ম্যানেজার ও সিএফও পথে যাওয়া যায়।"],s:"S22"}]
  ]],
  ["Abroad","বিদেশে",[
    ["Master's abroad","বিদেশে স্নাতকোত্তর",null,{req:["52,799 Bangladeshis went abroad for tertiary study in 2023. Top countries: USA, UK, Canada, Malaysia, Germany. Each university sets its own English test score and CGPA; check the programme page.","২০২৩ সালে ৫২,৭৯৯ জন বাংলাদেশি উচ্চশিক্ষায় বিদেশে গেছেন। শীর্ষ দেশ: যুক্তরাষ্ট্র, যুক্তরাজ্য, কানাডা, মালয়েশিয়া, জার্মানি। ইংরেজি পরীক্ষার স্কোর ও সিজিপিএর শর্ত প্রতিটি বিশ্ববিদ্যালয় নিজে ঠিক করে; প্রোগ্রামের পেজ দেখুন।"],pay:["Bangladeshi students spent a record $667.77 million abroad in FY25. Plan funding before applying.","২০২৪-২৫ অর্থবছরে বাংলাদেশি শিক্ষার্থীরা বিদেশে রেকর্ড ৬৬৭.৭৭ মিলিয়ন ডলার খরচ করেছেন। আবেদনের আগে খরচের পরিকল্পনা করুন।"],s:"B3"}],
    ["USA (graduate study)","যুক্তরাষ্ট্র (স্নাতকোত্তর)",null,{req:["20,156 Bangladeshi students in the US in 2024/25; 64.6% are graduate students. Many fund it with assistantships.","২০২৪-২৫ সালে যুক্তরাষ্ট্রে ২০,১৫৬ জন বাংলাদেশি শিক্ষার্থী; ৬৪.৬% স্নাতকোত্তর পর্যায়ে। অনেকে অ্যাসিস্ট্যান্টশিপ দিয়ে খরচ চালান।"],pay:["Funding: teaching or research assistantships; varies by university.","খরচ: টিচিং বা রিসার্চ অ্যাসিস্ট্যান্টশিপ; বিশ্ববিদ্যালয়ভেদে ভিন্ন।"],s:"B4"}],
    ["Fully funded scholarships","সম্পূর্ণ বৃত্তি",null,{req:["Examples: Erasmus Mundus (EU), Fulbright (USA), Global Korea Scholarship, MEXT (Japan), Australia Awards, Türkiye (master's under 30), Chinese Government (CSC), Finland. Joint Japan/World Bank and ADB-Japan need 2+ years of work experience.","উদাহরণ: ইরাসমাস মুন্ডুস (ইইউ), ফুলব্রাইট (যুক্তরাষ্ট্র), গ্লোবাল কোরিয়া স্কলারশিপ, মেক্সট (জাপান), অস্ট্রেলিয়া অ্যাওয়ার্ডস, তুরস্ক (স্নাতকোত্তরে ৩০-এর নিচে), চীনা সরকারি বৃত্তি (সিএসসি), ফিনল্যান্ড। জয়েন্ট জাপান/বিশ্বব্যাংক ও এডিবি-জাপানে ২ বছরের বেশি কাজের অভিজ্ঞতা লাগে।"],pay:["Usually cover tuition and living costs. Deadlines are mostly December to April.","সাধারণত টিউশন ও থাকা-খাওয়ার খরচ বহন করে। আবেদনের সময় মূলত ডিসেম্বর থেকে এপ্রিল।"],s:"B5"}]
  ]]
 ]},
 diploma:{en:"Diploma & technical",bn:"ডিপ্লোমা ও কারিগরি",root:["Diploma / technical","ডিপ্লোমা / কারিগরি"],tree:[
  ["Jobs in Bangladesh","বাংলাদেশে চাকরি",[
    ["Sub-Assistant Engineer (govt)","উপসহকারী প্রকৌশলী (সরকারি)",null,{req:["These posts are filled by diploma engineers. Check each circular for grade, age and subject.","এই পদগুলো ডিপ্লোমা প্রকৌশলীদের দিয়ে পূরণ হয়। গ্রেড, বয়স ও বিষয়ের শর্ত প্রতিটি বিজ্ঞপ্তিতে দেখুন।"],pay:["Government pay scale grade as per circular.","বিজ্ঞপ্তি অনুযায়ী সরকারি বেতন স্কেলের গ্রেড।"],s:"B7"}],
    ["Site / maintenance engineer (private)","সাইট / মেইনটেন্যান্স ইঞ্জিনিয়ার (বেসরকারি)",null,{req:["Most entry-level civil site jobs on Bdjobs ask for a Diploma in Civil; electrical and maintenance jobs accept a diploma or BSc.","বিডিজবসে এন্ট্রি লেভেলের বেশিরভাগ সিভিল সাইট চাকরিতে সিভিলে ডিপ্লোমা চাওয়া হয়; ইলেকট্রিক্যাল ও মেইনটেন্যান্সে ডিপ্লোমা বা বিএসসি চলে।"],pay:["Site engineer: about ৳17k–32k a month at entry (Bdjobs listings).","সাইট ইঞ্জিনিয়ার: শুরুতে মাসে প্রায় ১৭–৩২ হাজার টাকা (বিডিজবস বিজ্ঞপ্তি)।"],s:"B12"}],
    ["Nursing / medical technology","নার্সিং / মেডিকেল টেকনোলজি",null,{req:["Diploma in Nursing Science & Midwifery with Nursing Council registration; DMT for lab, radiology and physiotherapy.","নার্সিং কাউন্সিলে নিবন্ধনসহ ডিপ্লোমা ইন নার্সিং সায়েন্স অ্যান্ড মিডওয়াইফারি; ল্যাব, রেডিওলজি ও ফিজিওথেরাপির জন্য ডিএমটি।"],pay:["Staff nurse, private hospitals: about ৳12k–16k a month at entry (Bdjobs listings).","বেসরকারি হাসপাতালে স্টাফ নার্স: শুরুতে মাসে প্রায় ১২–১৬ হাজার টাকা (বিডিজবস বিজ্ঞপ্তি)।"],s:"B12"}]
  ]],
  ["Study further","আরও পড়াশোনা",[
    ["BSc at DUET (public)","ডুয়েটে বিএসসি (সরকারি)",null,{req:["DUET's undergraduate engineering and architecture seats are only for diploma engineers, through its own admission test.","ডুয়েটের স্নাতক প্রকৌশল ও স্থাপত্য আসন শুধু ডিপ্লোমা প্রকৌশলীদের জন্য, নিজস্ব ভর্তি পরীক্ষার মাধ্যমে।"],pay:["A BSc opens Assistant Engineer and BCS technical cadre posts.","বিএসসি থাকলে সহকারী প্রকৌশলী ও বিসিএস কারিগরি ক্যাডারে আবেদন করা যায়।"],s:"B6"}],
    ["Evening BSc at private universities","বেসরকারি বিশ্ববিদ্যালয়ে সান্ধ্য বিএসসি",null,{req:["Several UGC-approved private universities run BSc programmes for working diploma holders. Check the programme's UGC approval first.","ইউজিসি অনুমোদিত কয়েকটি বেসরকারি বিশ্ববিদ্যালয় কর্মজীবী ডিপ্লোমাধারীদের জন্য বিএসসি চালায়। আগে প্রোগ্রামের ইউজিসি অনুমোদন দেখে নিন।"],pay:["Work and study together; fees vary.","কাজের পাশাপাশি পড়া যায়; খরচ প্রতিষ্ঠানভেদে আলাদা।"],s:"S16"}]
  ]],
  ["Work abroad (skilled)","বিদেশে দক্ষ কর্মী",[
    ["Japan (SSW)","জাপান (এসএসডব্লিউ)",null,{req:["Specified Skilled Worker: Japanese N4 plus a skills test, no fixed education requirement. Japan aims to hire 820,000 SSW workers by March 2029. 53 government Technical Training Centres teach Japanese.","স্পেসিফায়েড স্কিলড ওয়ার্কার: জাপানি এন৪ ও দক্ষতা পরীক্ষা, নির্দিষ্ট শিক্ষাগত শর্ত নেই। জাপান ২০২৯ সালের মার্চের মধ্যে ৮,২০,০০০ এসএসডব্লিউ কর্মী নিতে চায়। ৫৩টি সরকারি কারিগরি প্রশিক্ষণ কেন্দ্রে জাপানি ভাষা শেখানো হয়।"],pay:["About ৳1–2 lakh a month (2023 report).","মাসে প্রায় ১–২ লাখ টাকা (২০২৩ সালের প্রতিবেদন)।"],s:"B9"}],
    ["South Korea (EPS / E-7)","দক্ষিণ কোরিয়া (ইপিএস / ই-৭)",null,{req:["EPS: pass the EPS Korean language test; sectors open to Bangladesh include manufacturing, shipbuilding, fisheries and construction. E-7 (skilled): 2–5 years' experience as welder, pipe fitter, etc.","ইপিএস: ইপিএস কোরিয়ান ভাষা পরীক্ষায় পাস; বাংলাদেশের জন্য খোলা খাত উৎপাদন, জাহাজ নির্মাণ, মৎস্য ও নির্মাণ। ই-৭ (দক্ষ): ওয়েল্ডার, পাইপ ফিটার ইত্যাদি পেশায় ২–৫ বছরের অভিজ্ঞতা।"],pay:["E-7: about ৳2.5 lakh a month, migration cost about ৳5.5 lakh (2023 report).","ই-৭: মাসে প্রায় ২.৫ লাখ টাকা, যাওয়ার খরচ প্রায় ৫.৫ লাখ টাকা (২০২৩ সালের প্রতিবেদন)।"],s:"B10"}],
    ["Germany (Opportunity Card)","জার্মানি (অপরচুনিটি কার্ড)",null,{req:["A recognised degree or at least 2 years of vocational training, German A1 or English B2 (IELTS 5.5–6.5), and 6 points (qualification, experience, language, age).","স্বীকৃত ডিগ্রি বা কমপক্ষে ২ বছরের বৃত্তিমূলক প্রশিক্ষণ, জার্মান এ১ বা ইংরেজি বি২ (আইইএলটিএস ৫.৫–৬.৫), এবং ৬ পয়েন্ট (যোগ্যতা, অভিজ্ঞতা, ভাষা, বয়স)।"],pay:["Lets you look for skilled work in Germany; pay follows German rates.","জার্মানিতে দক্ষ কাজ খোঁজার সুযোগ; বেতন জার্মান হারে।"],s:"B11"}],
    ["Malaysia & Middle East","মালয়েশিয়া ও মধ্যপ্রাচ্য",null,{req:["Go only through BMET-registered channels. Skilled workers earn far more and often pay less to migrate than unskilled workers.","শুধু বিএমইটি নিবন্ধিত মাধ্যমে যান। দক্ষ কর্মীরা অদক্ষদের চেয়ে অনেক বেশি আয় করেন এবং প্রায়ই কম খরচে যান।"],pay:["Malaysia skilled: about ৳70k–1 lakh a month vs about ৳35k unskilled (2023 report).","মালয়েশিয়ায় দক্ষ কর্মী মাসে প্রায় ৭০ হাজার–১ লাখ টাকা, অদক্ষ প্রায় ৩৫ হাজার (২০২৩ সালের প্রতিবেদন)।"],s:"B8"}]
  ]]
 ]}
};

/* ===== Career tracks (tabs), result guide, scholarships abroad ===== */
Object.assign(SRC2,{
  A1:{t:"Join Bangladesh Army (official recruitment site)",u:"https://joinbangladesharmy.army.mil.bd"},
  A2:{t:"UNB: Bangladesh Army BMA Long Course circular (2023)",u:"https://www.unb.com.bd/category/Business/recruitment-circular-in-bangladesh-army-2023/110728"},
  A3:{t:"Join Bangladesh Navy (official recruitment site)",u:"https://www.joinnavy.mil.bd"},
  A4:{t:"Join Bangladesh Air Force (official recruitment site)",u:"https://joinairforce.baf.mil.bd"},
  A5:{t:"Bangladesh Bank careers",u:"https://erecruitment.bb.org.bd"},
  A6:{t:"Bangladesh Public Service Commission",u:"https://bpsc.gov.bd"}
});
/* leaf info: req, pay, s (source), m (Bdjobs PVT_MARKET key, adds live pay range) */
const I=(re,rb,pe,pb,s,m)=>({req:[re,rb],pay:[pe,pb],s,m});
const TRACKS={
 army:{en:"Army, Navy, Air Force",bn:"সেনা, নৌ, বিমানবাহিনী",tree:[
  ["Army officer (after HSC)","সেনা কর্মকর্তা (এইচএসসির পর)",[
   ["BMA Long Course","বিএমএ লং কোর্স",null,I("SSC and HSC: GPA 5.00 in one and at least 4.50 in the other. Age about 16.5–21, unmarried. Steps: written test, medical, viva, then ISSB. Then 2+ years of training at Bangladesh Military Academy.","এসএসসি ও এইচএসসি: একটিতে জিপিএ ৫.০০, অন্যটিতে কমপক্ষে ৪.৫০। বয়স প্রায় ১৬.৫–২১, অবিবাহিত। ধাপ: লিখিত, মেডিকেল, ভাইভা, তারপর আইএসএসবি। এরপর বাংলাদেশ মিলিটারি একাডেমিতে প্রশিক্ষণ।","Commissioned officer on the government defence pay scale, with housing, medical and ration support.","কমিশনপ্রাপ্ত কর্মকর্তা, সরকারি প্রতিরক্ষা বেতন স্কেল, সঙ্গে আবাসন, চিকিৎসা ও রেশন সুবিধা।","A2")]]],
  ["Army officer (after graduation)","সেনা কর্মকর্তা (স্নাতকের পর)",[
   ["Doctor (Army Medical Corps)","ডাক্তার (আর্মি মেডিকেল কোর)",null,I("MBBS/BDS with BMDC registration, through the Army's special/medical course circular.","বিএমডিসি নিবন্ধনসহ এমবিবিএস/বিডিএস, সেনাবাহিনীর বিশেষ/মেডিকেল কোর্সের বিজ্ঞপ্তির মাধ্যমে।","Defence pay scale; check the circular.","প্রতিরক্ষা বেতন স্কেল; বিজ্ঞপ্তি দেখুন।","A1")],
   ["Engineer, signals, EME","ইঞ্জিনিয়ার, সিগন্যালস, ইএমই",null,I("BSc in civil, electrical, mechanical, CSE and similar, through the BMA special course for Engineers, Signals and EME.","সিভিল, ইলেকট্রিক্যাল, মেকানিক্যাল, সিএসই ইত্যাদিতে বিএসসি, ইঞ্জিনিয়ার্স, সিগন্যালস ও ইএমই-র বিএমএ বিশেষ কোর্সের মাধ্যমে।","Defence pay scale; check the circular.","প্রতিরক্ষা বেতন স্কেল; বিজ্ঞপ্তি দেখুন।","A1")],
   ["Education Corps, law (JAG) and others","এডুকেশন কোর, আইন (জ্যাগ) ও অন্যান্য",null,I("Honours/Master's graduates join through special or short course circulars. Each circular sets subject, result and age.","অনার্স/মাস্টার্স স্নাতকেরা বিশেষ বা শর্ট কোর্সের বিজ্ঞপ্তিতে যোগ দেন। বিষয়, ফলাফল ও বয়স প্রতিটি বিজ্ঞপ্তিতে আলাদা।","Defence pay scale; check the circular.","প্রতিরক্ষা বেতন স্কেল; বিজ্ঞপ্তি দেখুন।","A1")]]],
  ["Navy","নৌবাহিনী",[
   ["Navy officer cadet","নৌ কর্মকর্তা ক্যাডেট",null,I("High SSC and HSC GPA (recent circulars ask about 4.50 in each), unmarried, age limit near 21. Graduate entries exist for engineering, education and other branches.","এসএসসি ও এইচএসসিতে ভালো জিপিএ (সাম্প্রতিক বিজ্ঞপ্তিতে প্রতিটিতে প্রায় ৪.৫০), অবিবাহিত, বয়সসীমা প্রায় ২১। প্রকৌশল, শিক্ষা ও অন্যান্য শাখায় স্নাতকদের জন্যও প্রবেশপথ আছে।","Defence pay scale; check the circular.","প্রতিরক্ষা বেতন স্কেল; বিজ্ঞপ্তি দেখুন।","A3")]]],
  ["Air Force","বিমানবাহিনী",[
   ["Air Force officer cadet","বিমানবাহিনী কর্মকর্তা ক্যাডেট",null,I("Pilot (GD) branch needs science in HSC with good GPA plus strict medical and eyesight tests. Graduate entries exist for engineering, education, admin and others.","পাইলট (জিডি) শাখায় এইচএসসিতে বিজ্ঞানসহ ভালো জিপিএ এবং কড়া মেডিকেল ও দৃষ্টিশক্তি পরীক্ষা লাগে। প্রকৌশল, শিক্ষা, প্রশাসনসহ স্নাতকদের প্রবেশপথ আছে।","Defence pay scale; check the circular.","প্রতিরক্ষা বেতন স্কেল; বিজ্ঞপ্তি দেখুন।","A4")]]]
 ]},
 govt:{en:"Govt jobs & BCS",bn:"সরকারি চাকরি ও বিসিএস",tree:[
  ["BCS cadre","বিসিএস ক্যাডার",[
   ["General cadres (admin, police, foreign affairs, tax...)","সাধারণ ক্যাডার (প্রশাসন, পুলিশ, পররাষ্ট্র, কর...)",null,I("Any bachelor's. Age 21–32, no limit on attempts. Preliminary, written, viva. CGPA is not scored.","যেকোনো স্নাতক। বয়স ২১–৩২, যতবার খুশি। প্রিলিমিনারি, লিখিত, ভাইভা। সিজিপিএর নম্বর নেই।","Grade 9: starting basic ৳44,000.","গ্রেড ৯: শুরুর মূল বেতন ৪৪,০০০ টাকা।","A6")],
   ["Technical & professional cadres","কারিগরি ও পেশাগত ক্যাডার",null,I("Need the matching degree (engineering, medicine, agriculture, etc.). Many of these posts stayed empty in the 47th BCS, so the odds are better.","মিলে যাওয়া ডিগ্রি লাগে (প্রকৌশল, চিকিৎসা, কৃষি ইত্যাদি)। ৪৭তম বিসিএসে এর অনেক পদ খালি ছিল, তাই সুযোগ বেশি।","Grade 9: starting basic ৳44,000.","গ্রেড ৯: শুরুর মূল বেতন ৪৪,০০০ টাকা।","B13")]]],
  ["Non-cadre & ministry jobs","নন-ক্যাডার ও মন্ত্রণালয়ের চাকরি",[
   ["Grade 9–10 posts","গ্রেড ৯–১০ পদ",null,I("BPSC non-cadre and ministry circulars. Read each one's subject and result rule.","পিএসসি নন-ক্যাডার ও মন্ত্রণালয়ের বিজ্ঞপ্তি। প্রতিটির বিষয় ও ফলাফলের শর্ত পড়ুন।","Grade 10 starts at ৳32,000 basic. Aim for grade 10 or above.","গ্রেড ১০ শুরু ৩২,০০০ টাকা মূল বেতনে। গ্রেড ১০ বা তার ওপরে লক্ষ্য রাখুন।","A6")]]],
  ["Bangladesh Bank & govt banks","বাংলাদেশ ব্যাংক ও সরকারি ব্যাংক",[
   ["Assistant Director (Bangladesh Bank)","সহকারী পরিচালক (বাংলাদেশ ব্যাংক)",null,I("Any bachelor's, age 21–32. Result rules in the circular; strong results help.","যেকোনো স্নাতক, বয়স ২১–৩২। ফলাফলের শর্ত বিজ্ঞপ্তিতে; ভালো ফল সাহায্য করে।","Grade 9.","গ্রেড ৯।","S20")],
   ["Senior Officer / Officer (state banks)","সিনিয়র অফিসার / অফিসার (রাষ্ট্রীয় ব্যাংক)",null,I("Bankers' Selection Committee exams. Some posts limit how many second-class results you may have.","ব্যাংকার্স সিলেকশন কমিটির পরীক্ষা। কিছু পদে দ্বিতীয় শ্রেণির ফলাফলের সংখ্যা সীমিত।","Government bank pay scale.","সরকারি ব্যাংকের বেতন স্কেল।","S21")]]]
 ]},
 bank:{en:"Private banks & finance",bn:"বেসরকারি ব্যাংক ও ফিন্যান্স",tree:[
  ["Private banks","বেসরকারি ব্যাংক",[
   ["Management Trainee / Probationary Officer","ম্যানেজমেন্ট ট্রেইনি / প্রবেশনারি অফিসার",null,I("Any bachelor's or master's; MBA often preferred. Written test and interview.","যেকোনো স্নাতক বা স্নাতকোত্তর; প্রায়ই এমবিএ অগ্রাধিকার। লিখিত পরীক্ষা ও ইন্টারভিউ।","Bangladesh Bank minimum after confirmation: ৳39,000 total (2022 circular; banks may pay more).","কনফার্মেশনের পর বাংলাদেশ ব্যাংকের ন্যূনতম: মোট ৩৯,০০০ টাকা (২০২২ সালের সার্কুলার; ব্যাংক বেশিও দিতে পারে)।","S2","pvt_bank")]]],
  ["Accounting & finance","হিসাব ও ফিন্যান্স",[
   ["Chartered Accountant (CA)","চার্টার্ড অ্যাকাউন্ট্যান্ট (সিএ)",null,I("Any background. SSC + HSC GPA 8.0+ after HSC, or start after a bachelor's. 4 years of articleship plus 3 ICAB levels.","যেকোনো বিভাগ। এইচএসসির পর এসএসসি + এইচএসসি জিপিএ ৮.০+, বা স্নাতকের পর শুরু। ৪ বছরের আর্টিকেলশিপ ও আইসিএবির ৩টি লেভেল।","First-year allowance at least ৳7,000; qualified CAs move to finance manager and CFO.","প্রথম বর্ষে ভাতা কমপক্ষে ৭,০০০ টাকা; সিএ হলে ফিন্যান্স ম্যানেজার ও সিএফও।","B15","audit")],
   ["Accountant / finance analyst","অ্যাকাউন্ট্যান্ট / ফিন্যান্স অ্যানালিস্ট",null,I("BBA/MBA in accounting or finance; Excel is a must.","হিসাববিজ্ঞান বা ফিন্যান্সে বিবিএ/এমবিএ; এক্সেল জানা আবশ্যক।","","","S22","fin_analyst")]]]
 ]},
 health:{en:"Doctor & health",bn:"ডাক্তার ও স্বাস্থ্য",tree:[
  ["Doctor","ডাক্তার",[
   ["MBBS / BDS admission","এমবিবিএস / বিডিএস ভর্তি",null,I("Science group. SSC + HSC GPA 8.5+, and 3.5+ in HSC Biology, Physics and Chemistry. 100-mark MCQ test, 40+ to qualify (2025-26).","বিজ্ঞান বিভাগ। এসএসসি + এইচএসসি জিপিএ ৮.৫+, আর এইচএসসিতে জীববিজ্ঞান, পদার্থ ও রসায়নে ৩.৫+। ১০০ নম্বরের এমসিকিউ, যোগ্য হতে ৪০+ (২০২৫-২৬)।","Rules change yearly; check the DGHS guideline.","নিয়ম প্রতি বছর বদলায়; ডিজিএইচএস নির্দেশিকা দেখুন।","B14")],
   ["After MBBS","এমবিবিএসের পর",null,I("Internship, then BMDC registration. Then BCS Health, Army Medical Corps or private hospitals. FCPS/MD/MS raise pay most.","ইন্টার্নশিপ, তারপর বিএমডিসি নিবন্ধন। এরপর বিসিএস স্বাস্থ্য, আর্মি মেডিকেল কোর বা বেসরকারি হাসপাতাল। এফসিপিএস/এমডি/এমএস বেতন সবচেয়ে বেশি বাড়ায়।","","","B14","doctor")]]],
  ["Other health jobs","অন্যান্য স্বাস্থ্য পেশা",[
   ["Nurse","নার্স",null,I("BSc or Diploma in Nursing & Midwifery, with Nursing Council registration.","নার্সিং ও মিডওয়াইফারিতে বিএসসি বা ডিপ্লোমা, নার্সিং কাউন্সিলে নিবন্ধন।","","","B12","nurse")],
   ["Pharmacist / quality control","ফার্মাসিস্ট / কোয়ালিটি কন্ট্রোল",null,I("B.Pharm (or diploma for some posts) with Pharmacy Council registration; QC also takes chemistry and microbiology.","ফার্মেসি কাউন্সিলে নিবন্ধনসহ বি.ফার্ম (কিছু পদে ডিপ্লোমা); কিউসিতে রসায়ন ও মাইক্রোবায়োলজিও নেয়।","","","B12","qc")],
   ["Medical Promotion Officer","মেডিকেল প্রমোশন অফিসার",null,I("Any graduate (science preferred). Pharma companies care about talking skill and travel more than CGPA.","যেকোনো স্নাতক (বিজ্ঞান অগ্রাধিকার)। ওষুধ কোম্পানি সিজিপিএর চেয়ে কথা বলার দক্ষতা ও ঘোরাঘুরি বেশি দেখে।","","","B12","mpo")]]]
 ]},
 law:{en:"Law",bn:"আইন",tree:[
  ["Lawyer","আইনজীবী",[
   ["Advocate","অ্যাডভোকেট",null,I("LLB, 6 months as a pupil under a senior advocate, then Bar Council exams (MCQ, written, viva). High Court after 2 years of practice.","এলএলবি, সিনিয়র আইনজীবীর অধীনে ৬ মাস শিক্ষানবিশ, তারপর বার কাউন্সিল পরীক্ষা (এমসিকিউ, লিখিত, ভাইভা)। ২ বছর প্র্যাকটিসের পর হাইকোর্ট।","Low at first; grows with clients.","শুরুতে কম; মক্কেল বাড়লে বাড়ে।","B16")],
   ["Legal officer (companies, banks)","লিগ্যাল অফিসার (কোম্পানি, ব্যাংক)",null,I("LLB (LLM preferred); Bar membership helps.","এলএলবি (এলএলএম অগ্রাধিকার); বার সদস্যপদ সাহায্য করে।","","","B12","legal")]]],
  ["Judge","বিচারক",[
   ["Assistant Judge","সহকারী জজ",null,I("LLB, age up to 32. Judicial Service Commission exam: preliminary, written, viva.","এলএলবি, বয়স ৩২ পর্যন্ত। জুডিশিয়াল সার্ভিস কমিশনের পরীক্ষা: প্রিলিমিনারি, লিখিত, ভাইভা।","Judicial pay scale; check the circular.","বিচার বিভাগীয় বেতন স্কেল; বিজ্ঞপ্তি দেখুন।","B17")]]]
 ]},
 teach:{en:"Teaching",bn:"শিক্ষকতা",tree:[
  ["School","স্কুল",[
   ["Govt primary teacher","সরকারি প্রাথমিক শিক্ষক",null,I("Any bachelor's, at least second class (CGPA 2.25/4), no third class anywhere, age 21–32.","যেকোনো স্নাতক, কমপক্ষে দ্বিতীয় শ্রেণি (সিজিপিএ ২.২৫/৪), কোথাও তৃতীয় শ্রেণি নয়, বয়স ২১–৩২।","Grade 13 (below grade 10).","গ্রেড ১৩ (গ্রেড ১০-এর নিচে)।","B18")],
   ["Non-govt school / college (NTRCA)","বেসরকারি স্কুল / কলেজ (এনটিআরসিএ)",null,I("Pass the NTRCA registration exam, then apply in its mass recruitment.","এনটিআরসিএ নিবন্ধন পরীক্ষা পাস করে গণবিজ্ঞপ্তিতে আবেদন।","MPO scale.","এমপিও স্কেল।","B19")],
   ["Private / English-medium school","বেসরকারি / ইংলিশ মিডিয়াম স্কুল",null,I("Degree in the subject; demo class and English skill matter more than CGPA.","বিষয়ে ডিগ্রি; সিজিপিএর চেয়ে ডেমো ক্লাস ও ইংরেজি বেশি গুরুত্বপূর্ণ।","","","B12","teacher")]]],
  ["College & university","কলেজ ও বিশ্ববিদ্যালয়",[
   ["Govt college (BCS Education)","সরকারি কলেজ (বিসিএস শিক্ষা)",null,I("Honours/Master's in the subject, then BCS.","বিষয়ে অনার্স/মাস্টার্স, তারপর বিসিএস।","Grade 9: ৳44,000 basic.","গ্রেড ৯: মূল ৪৪,০০০ টাকা।","S19")],
   ["University lecturer","বিশ্ববিদ্যালয় প্রভাষক",null,I("Top results plus research; each university sets its own rule. A master's/PhD abroad helps a lot.","সেরা ফল ও গবেষণা; প্রতিটি বিশ্ববিদ্যালয়ের নিজস্ব নিয়ম। বিদেশে মাস্টার্স/পিএইচডি অনেক সাহায্য করে।","","","B12","lecturer")]]]
 ]},
 tech:{en:"Engineering & IT",bn:"প্রকৌশল ও আইটি",tree:[
  ["Software & IT","সফটওয়্যার ও আইটি",[
   ["Software engineer","সফটওয়্যার ইঞ্জিনিয়ার",null,I("CSE or any degree plus real projects. Companies hire through coding tests; a GitHub portfolio beats CGPA.","সিএসই বা যেকোনো ডিগ্রি সঙ্গে বাস্তব প্রজেক্ট। কোডিং টেস্টে নিয়োগ; গিটহাব পোর্টফোলিও সিজিপিএর চেয়ে কার্যকর।","Entry about ৳25k–47k a month (2026 estimate).","শুরুতে মাসে প্রায় ২৫–৪৭ হাজার টাকা (২০২৬ অনুমান)।","S3")],
   ["Network / support engineer","নেটওয়ার্ক / সাপোর্ট ইঞ্জিনিয়ার",null,I("BSc in CSE/EEE/IT or Diploma; certificates (e.g. CCNA) help.","সিএসই/ইইই/আইটিতে বিএসসি বা ডিপ্লোমা; সার্টিফিকেট (যেমন সিসিএনএ) সাহায্য করে।","","","B12","network")],
   ["UI/UX designer","ইউআই/ইউএক্স ডিজাইনার",null,I("Any degree; portfolio decides.","যেকোনো ডিগ্রি; পোর্টফোলিওই আসল।","","","B12","uiux")]]],
  ["Factory & construction","কারখানা ও নির্মাণ",[
   ["Site engineer","সাইট ইঞ্জিনিয়ার",null,I("Diploma or BSc in Civil.","সিভিলে ডিপ্লোমা বা বিএসসি।","","","B12","civil_site")],
   ["Industrial / production engineer","ইন্ডাস্ট্রিয়াল / প্রোডাকশন ইঞ্জিনিয়ার",null,I("BSc in IPE, textile or EEE.","আইপিই, টেক্সটাইল বা ইইইতে বিএসসি।","","","B12","ie")]]]
 ]},
 mnc:{en:"Multinationals",bn:"বহুজাতিক কোম্পানি",tree:[
  ["Long-running MNCs in Bangladesh","বাংলাদেশে দীর্ঘদিনের বহুজাতিক",[
   ["Consumer goods: Unilever, BAT, Nestlé, Reckitt, Marico","ভোগ্যপণ্য: ইউনিলিভার, বিএটি, নেসলে, রেকিট, ম্যারিকো",null,I("Hire fresh graduates through yearly Management Trainee programmes (online test, case study, interviews). They judge leadership, problem solving and communication heavily.","প্রতি বছর ম্যানেজমেন্ট ট্রেইনি প্রোগ্রামে নতুন স্নাতক নেয় (অনলাইন টেস্ট, কেস স্টাডি, ইন্টারভিউ)। নেতৃত্ব, সমস্যা সমাধান ও যোগাযোগ দক্ষতা খুব গুরুত্ব পায়।","Pay is not published; check each programme's announcement.","বেতন প্রকাশ করা হয় না; প্রতিটি প্রোগ্রামের ঘোষণা দেখুন।","B12","brand")],
   ["Telecom: Grameenphone, Robi, Banglalink","টেলিকম: গ্রামীণফোন, রবি, বাংলালিংক",null,I("Graduate and internship programmes; engineering, business and tech roles.","স্নাতক ও ইন্টার্নশিপ প্রোগ্রাম; প্রকৌশল, ব্যবসা ও প্রযুক্তি পদ।","Check each programme.","প্রতিটি প্রোগ্রাম দেখুন।","B12")],
   ["Banks: Standard Chartered, HSBC, Citi","ব্যাংক: স্ট্যান্ডার্ড চার্টার্ড, এইচএসবিসি, সিটি",null,I("International graduate programmes; very competitive, strong English needed.","আন্তর্জাতিক গ্র্যাজুয়েট প্রোগ্রাম; প্রতিযোগিতা অনেক, ভালো ইংরেজি লাগে।","Check each programme.","প্রতিটি প্রোগ্রাম দেখুন।","B12")],
   ["Others: Berger, Bata, Singer, Haleon (GSK)","অন্যান্য: বার্জার, বাটা, সিঙ্গার, হেলিয়ন (জিএসকে)",null,I("Sales, supply chain, finance and marketing trainee roles.","সেলস, সাপ্লাই চেইন, ফিন্যান্স ও মার্কেটিং ট্রেইনি পদ।","","","B12","tso")]]],
  ["How to get in","কীভাবে ঢুকবেন",[
   ["Internship first","আগে ইন্টার্নশিপ",null,I("Many MNC hires come from their own interns and campus competitions. Apply in your 3rd–4th year.","বহুজাতিকের অনেক নিয়োগ আসে নিজেদের ইন্টার্ন ও ক্যাম্পাস প্রতিযোগিতা থেকে। ৩য়–৪র্থ বর্ষেই আবেদন করুন।","Why: you are tested on work, not just grades.","কারণ: শুধু গ্রেড নয়, কাজ দিয়ে যাচাই হয়।","B12")]]]
 ]},
 ind:{en:"Industry: garments, pharma, local groups",bn:"শিল্প: পোশাক, ওষুধ, দেশি গ্রুপ",tree:[
  ["Garments & textile","পোশাক ও টেক্সটাইল",[
   ["Merchandiser","মার্চেন্ডাইজার",null,I("Textile/apparel degree, or any degree with buyer-communication skills.","টেক্সটাইল/অ্যাপারেল ডিগ্রি, বা যেকোনো ডিগ্রি সঙ্গে বায়ারের সঙ্গে যোগাযোগ দক্ষতা।","","","B12","merch")],
   ["Compliance / HR","কমপ্লায়েন্স / এইচআর",null,I("BBA/MBA (HRM preferred) or any master's.","বিবিএ/এমবিএ (এইচআরএম অগ্রাধিকার) বা যেকোনো মাস্টার্স।","","","B12","compliance")]]],
  ["Local conglomerates (FMCG, retail, supply chain)","দেশি বড় গ্রুপ (এফএমসিজি, রিটেইল, সাপ্লাই চেইন)",[
   ["Sales / territory officer","সেলস / টেরিটরি অফিসার",null,I("Any bachelor's. Targets and field work matter, not CGPA. Fastest way to grow pay by performance.","যেকোনো স্নাতক। সিজিপিএ নয়, টার্গেট ও মাঠের কাজ গুরুত্বপূর্ণ। পারফরম্যান্সে বেতন বাড়ানোর দ্রুত উপায়।","","","B12","tso")],
   ["Supply chain executive","সাপ্লাই চেইন এক্সিকিউটিভ",null,I("BBA/MBA or any degree; Excel and planning skills.","বিবিএ/এমবিএ বা যেকোনো ডিগ্রি; এক্সেল ও পরিকল্পনার দক্ষতা।","","","B12","scm_ex")]]]
 ]},
 ngo:{en:"NGO & development",bn:"এনজিও ও উন্নয়ন",tree:[
  ["NGOs & UN agencies","এনজিও ও জাতিসংঘ সংস্থা",[
   ["Programme officer","প্রোগ্রাম অফিসার",null,I("Any bachelor's; master's often preferred. Field experience and reports count more than CGPA.","যেকোনো স্নাতক; প্রায়ই মাস্টার্স অগ্রাধিকার। সিজিপিএর চেয়ে মাঠের অভিজ্ঞতা ও রিপোর্ট লেখা বেশি গুরুত্বপূর্ণ।","","","B12","program")],
   ["Research / M&E","গবেষণা / এমঅ্যান্ডই",null,I("Statistics, economics or social science; data skills (Excel, SPSS/Stata).","পরিসংখ্যান, অর্থনীতি বা সমাজবিজ্ঞান; ডেটা দক্ষতা (এক্সেল, এসপিএসএস/স্টাটা)।","","","B12","research")]]]
 ]},
 skill:{en:"Skills-first work",bn:"দক্ষতাভিত্তিক কাজ",tree:[
  ["CGPA rarely asked","সিজিপিএ খুব কম দেখা হয়",[
   ["Digital marketing","ডিজিটাল মার্কেটিং",null,I("Any degree; proven results (ads you ran, pages you grew) decide.","যেকোনো ডিগ্রি; আপনার চালানো বিজ্ঞাপন ও বাড়ানো পেজের ফলাফলই আসল।","","","B12","dm")],
   ["Content writer / designer","কনটেন্ট রাইটার / ডিজাইনার",null,I("Writing samples or a design portfolio.","লেখার নমুনা বা ডিজাইন পোর্টফোলিও।","","","B12","designer")],
   ["Customer service / call centre","কাস্টমার সার্ভিস / কল সেন্টার",null,I("Any bachelor's (some take HSC); clear speaking matters most. A common first job.","যেকোনো স্নাতক (কিছুতে এইচএসসি); পরিষ্কার কথা বলাই আসল। সাধারণ প্রথম চাকরি।","","","B12","cs")],
   ["Freelancing","ফ্রিল্যান্সিং",null,I("One sellable skill (design, web, writing, video) plus a profile on global marketplaces. Start small, build reviews.","একটি বিক্রয়যোগ্য দক্ষতা (ডিজাইন, ওয়েব, লেখা, ভিডিও) আর আন্তর্জাতিক মার্কেটপ্লেসে প্রোফাইল। ছোট কাজে শুরু, রিভিউ বাড়ান।","Income depends on skill and clients; no fixed pay.","আয় দক্ষতা ও ক্লায়েন্টের ওপর নির্ভর করে; নির্দিষ্ট বেতন নেই।","B12")]]]
 ]}
};
/* Scholarships abroad: official pages. Re-checked every two months. */
const ABROAD_DATE="21 Oct 2026";
const ABROAD=[
 ["Chevening (UK)","শেভেনিং (যুক্তরাজ্য)","1-year master's, fully funded. Needs 2 years of work experience.","১ বছরের মাস্টার্স, সম্পূর্ণ খরচ। ২ বছরের কাজের অভিজ্ঞতা লাগে।","https://www.chevening.org/scholarships/"],
 ["Commonwealth Scholarships (UK)","কমনওয়েলথ স্কলারশিপ (যুক্তরাজ্য)","Master's and PhD for Commonwealth citizens, fully funded.","কমনওয়েলথ নাগরিকদের জন্য মাস্টার্স ও পিএইচডি, সম্পূর্ণ খরচ।","https://cscuk.fcdo.gov.uk/scholarships/"],
 ["Fulbright (USA)","ফুলব্রাইট (যুক্তরাষ্ট্র)","Master's and PhD, through the US Embassy Dhaka.","মাস্টার্স ও পিএইচডি, ঢাকার মার্কিন দূতাবাসের মাধ্যমে।","https://bd.usembassy.gov/education-culture/"],
 ["Erasmus Mundus (Europe)","ইরাসমাস মুন্ডুস (ইউরোপ)","Joint master's in 2+ European countries, full scholarship.","ইউরোপের ২+ দেশে যৌথ মাস্টার্স, পূর্ণ বৃত্তি।","https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus-catalogue_en"],
 ["DAAD (Germany)","ডাড (জার্মানি)","Master's and PhD scholarships; many German public universities charge little or no tuition.","মাস্টার্স ও পিএইচডি বৃত্তি; জার্মানির অনেক সরকারি বিশ্ববিদ্যালয়ে টিউশন কম বা নেই।","https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/"],
 ["Australia Awards","অস্ট্রেলিয়া অ্যাওয়ার্ডস","Master's, fully funded, for Bangladeshi applicants.","বাংলাদেশিদের জন্য মাস্টার্স, সম্পূর্ণ খরচ।","https://www.dfat.gov.au/people-to-people/australia-awards"],
 ["MEXT (Japan)","মেক্সট (জাপান)","Japanese government scholarship; apply via the Embassy of Japan.","জাপান সরকারের বৃত্তি; জাপান দূতাবাসের মাধ্যমে আবেদন।","https://www.bd.emb-japan.go.jp/itpr_en/education.html"],
 ["Global Korea Scholarship","গ্লোবাল কোরিয়া স্কলারশিপ","Bachelor's, master's and PhD in Korea, fully funded.","কোরিয়ায় স্নাতক, মাস্টার্স ও পিএইচডি, সম্পূর্ণ খরচ।","https://www.studyinkorea.go.kr"],
 ["Türkiye Scholarships","তুরস্ক বৃত্তি","All levels; master's applicants under 30.","সব স্তর; মাস্টার্সে বয়স ৩০-এর নিচে।","https://www.turkiyeburslari.gov.tr"],
 ["Chinese Government Scholarship","চীনা সরকারি বৃত্তি","All levels at Chinese universities.","চীনের বিশ্ববিদ্যালয়ে সব স্তর।","https://www.campuschina.org"],
 ["Stipendium Hungaricum (Hungary)","স্টিপেন্ডিয়াম হাঙ্গারিকাম (হাঙ্গেরি)","Bachelor's, master's and PhD; Bangladesh is a partner country.","স্নাতক, মাস্টার্স ও পিএইচডি; বাংলাদেশ অংশীদার দেশ।","https://stipendiumhungaricum.hu"],
 ["Joint Japan/World Bank (JJ/WBGSP)","জয়েন্ট জাপান/বিশ্বব্যাংক","Development master's; needs 2+ years of work.","উন্নয়ন বিষয়ে মাস্টার্স; ২+ বছরের অভিজ্ঞতা লাগে।","https://www.worldbank.org/en/programs/scholarships"]
];

/* ===== Public vs private university: cost (official fee pages / national press) ===== */
Object.assign(SRC2,{
  U1:{t:"UNB: Hidden struggles behind private university education (Aug 2025)",u:"https://unb.com.bd/category/special/hidden-struggles-behind-private-university-education-in-bangladesh/165587"},
  U2:{t:"UNB: Public universities spend 4 times as much per student as TVET (DU BER study, Feb 2025)",u:"https://unb.com.bd/category/Bangladesh/public-univs-spend-4-times-as-much-annually-per-student-than-tvet-institutions/154171"},
  U3:{t:"East West University: undergraduate tuition fees (Spring 2026)",u:"https://ewubd.edu/undergraduate-tuition-fees"},
  U4:{t:"North South University: tuition fees (Spring 2026)",u:"https://northsouth.edu/tuition-fees/"},
  U5:{t:"BRAC University: tuition and fees",u:"https://www.bracu.ac.bd/node/1226"},
  U6:{t:"AIUB: tuition and fee structure (2026-27)",u:"https://www.aiub.edu/tuition-fee"},
  U7:{t:"UGC: list of public universities",u:"https://ugc-universities.gov.bd/public-universities"},
  U8:{t:"UGC: list of private universities",u:"https://ugc-universities.gov.bd/private-universities"}
});
/* [programme, credits, total Tk or null, perCredit Tk or null] */
const UCOST={
 "East West University":{s:"U3",full:true,rows:[["Bachelor of Business Administration (BBA)",130,917400],["Bachelor of Laws (LL.B Hons.)",130,927000],["Bachelor of Social Science in Economics (BSS)",130,820400],["Bachelor of Arts in English (BA)",130,820400],["Bachelor of Science in Computer Science & Engineering (B.Sc. CSE)",140,1003400],["Bachelor of Science in Electrical & Electronic Engineering (B.Sc. EEE)",140,1003400],["Bachelor of Science in Civil Engineering (B.Sc. CE)",145,1035900],["Bachelor of Pharmacy (B.Pharm.)",158,1192000],["Bachelor of Science in Mathematics (B.Sc.)",130,665900],["Bachelor of Science in Data Science & Analytics (B.Sc.)",130,847400]]},
 "North South University":{s:"U4",rows:[["All undergraduate programmes (e.g. Bachelor of Business Administration, Computer Science & Engineering)",null,null,8000],["Master of Business Administration / Executive MBA (MBA / EMBA)",null,null,7000]]},
 "BRAC University":{s:"U5",rows:[["Most undergraduate programmes (e.g. Business Administration, Computer Science & Engineering, Pharmacy)",null,null,8250],["Bachelor of Laws (LLB)",null,null,8800],["Master of Business Administration / Executive MBA (MBA / EMBA)",null,null,7200]]},
 "American International University-Bangladesh":{s:"U6",rows:[["Bachelor of Business Administration (BBA)",null,null,8000],["Bachelor of Science in Computer Science & Engineering (B.Sc. CSE)",null,null,8500],["Bachelor of Science in Electrical & Electronic Engineering (B.Sc. EEE)",null,null,7500],["Bachelor of Laws (LLB)",null,null,8500],["Bachelor of Pharmacy (B.Pharm.)",null,null,8500],["Bachelor of Arts in English (BA)",null,null,6500],["Bachelor of Social Science in Economics (BSS)",null,null,5500],["Master of Business Administration / Executive MBA (MBA / EMBA)",null,null,6000]]}
};

/* ===== Programmes offered, from each university's own website (verified Oct 2026) ===== */
Object.assign(SRC2,{
  P1:{t:"North South University: programme list (23rd convocation)",u:"https://www.northsouth.edu/nsu-announcements/23rdconvocation.html"},
  P2:{t:"East West University: undergraduate programs",u:"https://www.ewubd.edu/undergraduate-programs"},
  P3:{t:"KUET: undergraduate degrees and seats",u:"https://admission.kuet.ac.bd/adm/Department.aspx"},
  P4:{t:"United International University: admission",u:"https://www.uiu.ac.bd/admission/"},
  P5:{t:"BRAC University: programs",u:"https://www.bracu.ac.bd/academics/programs"}
});
const UPROG={
 "North South University":{s:"P1",ug:["Bachelor of Architecture (B.Arch)","Bachelor of Arts in English (BA)","Bachelor of Business Administration (BBA)","Bachelor of Laws (LLB)","Bachelor of Pharmacy (B.Pharm)","Bachelor of Science in Biochemistry and Biotechnology (BS)","Bachelor of Science in Computer Science (BS)","Bachelor of Science in Economics (BS)","Bachelor of Science in Environmental Management (BS)","Bachelor of Science in Environmental Science (BS)","Bachelor of Science in Microbiology (BS)","Bachelor of Science in Civil and Environmental Engineering (BS CEE)","Bachelor of Science in Computer Science and Engineering (BS CSE)","Bachelor of Science in Electrical and Electronic Engineering (BS EEE)","Bachelor of Science in Electronics and Telecommunication Engineering (BS ETE)"],
  pg:["Master of Business Administration (MBA)","Executive Master of Business Administration (EMBA)","Master of Public Health (MPH)","Executive Master of Public Health (EMPH)","Master in Development Studies (MDS)","Master in Public Policy and Governance (MPPG)","Master in Resource and Environmental Management","Master of Arts in English (MA)","Master of Laws (LLM)","Master of Pharmacy in Pharmacology and Clinical Pharmacy (M.Pharm)","Master of Pharmacy in Pharmaceutical Technology and Biopharmaceutics (M.Pharm)","Master of Science in Biotechnology (MS)","Master of Science in Computer Science and Engineering (MS CSE)","Master of Science in Economics (MS)","Master of Science in Electrical and Electronic Engineering (MS EEE)","Master of Science in Environmental Science and Management (MS)","Master of Science in Electrical and Telecommunication Engineering (MS)"]},
 "East West University":{s:"P2",ug:["Bachelor of Business Administration (BBA)","Bachelor of Social Science in Economics (BSS)","Bachelor of Arts in English (BA)","Bachelor of Laws (LL.B Hons.)","Bachelor of Social Science in Sociology (BSS)","Bachelor of Social Science in Information Studies (BSS)","Bachelor of Social Science in Population & Public Health Sciences (BSS)","Bachelor of Science in Computer Science & Engineering (B.Sc. CSE)","Bachelor of Science in Information & Communication Engineering (B.Sc. ICE)","Bachelor of Science in Electrical & Electronic Engineering (B.Sc. EEE)","Bachelor of Science in Civil Engineering (B.Sc. CE)","Bachelor of Science in Genetic Engineering & Biotechnology (B.Sc. GEB)","Bachelor of Science in Mathematics (B.Sc.)","Bachelor of Science in Data Science & Analytics (B.Sc.)","Bachelor of Pharmacy (B.Pharm.)"],pg:["Master of Business Administration (MBA)","Executive Master of Business Administration (EMBA)"]},
 "American International University-Bangladesh":{s:"U6",ug:["Bachelor of Arts in English (BA)","Bachelor of Arts in Journalism & Mass Communication (BA)","Bachelor of Social Science in Economics (BSS)","Bachelor of Laws (LLB)","Bachelor of Business Administration (BBA)","Bachelor of Architecture (B.Arch.)","Bachelor of Science in Electrical & Electronic Engineering (B.Sc. EEE)","Bachelor of Science in Industrial & Production Engineering (B.Sc. IPE)","Bachelor of Science in Mechanical Engineering (B.Sc. ME)","Bachelor of Science in Computer Engineering (B.Sc. COE)","Bachelor of Pharmacy (B.Pharm.)","Bachelor of Science in Biochemistry & Molecular Biology (B.Sc. BMB)","Bachelor of Science in Microbiology (B.Sc. MB)","Bachelor of Science in Computer Science & Engineering (B.Sc. CSE)","Bachelor of Science in Data Science (B.Sc. DS)","Bachelor of Science in Computer Networks & Cyber Security (B.Sc. CNCS)"],pg:["Master of Business Administration (MBA)","Executive Master of Business Administration (EMBA)"]},
 "United International University":{s:"P4",ug:["Bachelor of Business Administration (BBA)","Bachelor of Business Administration in Accounting and Information Systems (BBA in AIS)","Bachelor of Social Science in Economics","Bachelor of Science in Civil Engineering (B.Sc. CE)","Bachelor of Science in Computer Science and Engineering (B.Sc. CSE)","Bachelor of Science in Electrical and Electronic Engineering (B.Sc. EEE)","Bachelor of Science in Data Science","Bachelor of Social Science in Environment and Development Studies (EDS)","Bachelor of Social Science in Media Studies and Journalism (MSJ)","Bachelor of Arts in English","Bachelor of Pharmacy (B.Pharm)","Bachelor of Science in Biotechnology and Genetic Engineering (BGE)"],pg:["Master of Business Administration (MBA)","Executive Master of Business Administration (EMBA)","Master of Science in Computer Science and Engineering (M.Sc. CSE)","Master of Science in Economics (MS Econ)","Master of Science in Development Studies (MDS)"]},
 "Khulna University of Engineering & Technology (KUET)":{s:"P3",ug:["Bachelor of Science in Civil Engineering (B.Sc. Engg. CE)","Bachelor of Science in Building Engineering and Construction Management (B.Sc. Engg. BECM)","Bachelor of Urban and Regional Planning (BURP)","Bachelor of Architecture (B.Arch.)","Bachelor of Science in Electrical and Electronic Engineering (B.Sc. Engg. EEE)","Bachelor of Science in Computer Science and Engineering (B.Sc. Engg. CSE)","Bachelor of Science in Electronics and Communication Engineering (B.Sc. Engg. ECE)","Bachelor of Science in Biomedical Engineering (B.Sc. Engg. BME)","Bachelor of Science in Materials Science and Engineering (B.Sc. Engg. MSE)","Bachelor of Science in Mechanical Engineering (B.Sc. Engg. ME)","Bachelor of Science in Industrial and Production Engineering (B.Sc. Engg. IPE)","Bachelor of Science in Leather Engineering (B.Sc. Engg. LE)","Bachelor of Science in Textile Engineering (B.Sc. Engg. TE)","Bachelor of Science in Energy Science and Engineering (B.Sc. Engg. ESE)","Bachelor of Science in Chemical Engineering (B.Sc. Engg. ChE)","Bachelor of Science in Mechatronics Engineering (B.Sc. Engg. MTE)"],pg:[]},
 "BRAC University":{s:"P5",sub:true,ug:["Anthropology","Architecture","Biotechnology","Business Administration","Economics","Electrical & Electronic Engineering","English","Information Technology / Computer Science","Law","Mathematics","Microbiology","Pharmacy","Physics"],pg:["Biotechnology","Business Administration","Childhood Development","Economics","Education","Electrical & Electronic Engineering","English","Governance and Development","Information Technology","Management","Procurement","Public Health"]}
};

/* ===== Skills training & work abroad (TVET) ===== */
Object.assign(SRC2,{
  K1:{t:"Daily Observer: BMET runs 104 TTCs and 6 IMTs, 55 trades (Jun 2026)",u:"https://observerbd.com/news/578769"},
  K2:{t:"Banglapedia: Technical and Vocational Education and Training",u:"https://en.banglapedia.org/index.php/Technical_and_Vocational_Education_and_Training"},
  K3:{t:"The Business Standard: Overseas employment 2025 by country and skill (Jan 2026)",u:"https://www.tbsnews.net/bangladesh/migration/overseas-employment-1127-2025-boosting-remittances-reserves-1323731"},
  K4:{t:"Arab News: Saudi–Bangladesh skilled worker deal and Skill Verification Program (Oct 2025)",u:"https://www.arabnews.com/node/2618057/amp"},
  K5:{t:"Prothom Alo: trades taught at new upazila TTCs",u:"https://en.prothomalo.com/bangladesh/lt9izxsb4e"}
});

/* ===== Job center ===== */
Object.assign(SRC2,{
  J1:{t:"The Financial Express: What really happens when graduates enter the workforce (Jun 2026)",u:"https://thefinancialexpress.com.bd/article/what-really-happens-when-graduates-enter-the-workforce"},
  J2:{t:"The Financial Express: How to build your CV with no experience (Nov 2024)",u:"https://thefinancialexpress.com.bd/article/how-to-build-your-cv-with-no-experience"},
  J3:{t:"The Financial Express: Petrobangla warns against fake recruitment letters (Jul 2025)",u:"https://thefinancialexpress.com.bd/trade/petrobangla-issues-warning-against-fake-recruitment-letters"},
  J4:{t:"Prothom Alo: 49th BCS circular, apply via BPSC / Teletalk (Oct 2025)",u:"https://en.prothomalo.com/youth/education/rbr9o2gltl"}
});
const JOBSITES=[
 ["🏛️","BPSC: BCS and non-cadre circulars","পিএসসি: বিসিএস ও নন-ক্যাডার বিজ্ঞপ্তি","https://bpsc.gov.bd"],
 ["📱","Teletalk: online applications for government jobs","টেলিটক: সরকারি চাকরির অনলাইন আবেদন","https://alljobs.teletalk.com.bd"],
 ["🏦","Bangladesh Bank recruitment","বাংলাদেশ ব্যাংক নিয়োগ","https://erecruitment.bb.org.bd"],
 ["🧑‍🏫","NTRCA: non-government teacher registration","এনটিআরসিএ: বেসরকারি শিক্ষক নিবন্ধন","https://www.ntrca.gov.bd"],
 ["💼","Bdjobs: private sector jobs","বিডিজবস: বেসরকারি খাতের চাকরি","https://bdjobs.com"],
 ["✈️","BMET: overseas employment and TTC training","বিএমইটি: বিদেশে কর্মসংস্থান ও টিটিসি প্রশিক্ষণ","http://www.bmet.gov.bd"]
];
const FAQ=[
 [["Every job asks for experience. How do I get my first one?","সব চাকরিতেই অভিজ্ঞতা চায়। প্রথম চাকরিটা পাব কীভাবে?"],["Start where competition is lower: field roles, sales, and jobs outside Dhaka. Many fresh graduates avoid them, so you get chances faster and learn more. Do an internship properly (do real work, not just watch), and count university projects and club work as experience.","প্রতিযোগিতা যেখানে কম, সেখান থেকে শুরু করুন: মাঠের কাজ, সেলস, আর ঢাকার বাইরের চাকরি। অনেক নতুন স্নাতক এগুলো এড়িয়ে যান, তাই এখানে আপনি দ্রুত সুযোগ পাবেন আর বেশি শিখবেন। ইন্টার্নশিপে শুধু দেখে নয়, আসল কাজ করে শিখুন। বিশ্ববিদ্যালয়ের প্রজেক্ট আর ক্লাবের কাজও অভিজ্ঞতা হিসেবে দেখান।"],"J1"],
 [["How do I write a CV with no experience?","অভিজ্ঞতা ছাড়া সিভি লিখব কীভাবে?"],["Keep it to one clean page. Write a short objective using words from the job ad. Turn your projects, presentations and club roles into proof of skills. List computer skills (Word, Excel, PowerPoint) honestly, and make a LinkedIn profile.","এক পৃষ্ঠায়, পরিষ্কার করে লিখুন। চাকরির বিজ্ঞাপনের শব্দ ব্যবহার করে ছোট একটি লক্ষ্য লিখুন। প্রজেক্ট, প্রেজেন্টেশন আর ক্লাবের দায়িত্বকে দক্ষতার প্রমাণ হিসেবে দেখান। কম্পিউটার দক্ষতা (ওয়ার্ড, এক্সেল, পাওয়ারপয়েন্ট) সৎভাবে লিখুন, আর একটি লিংকডইন প্রোফাইল বানান।"],"J2"],
 [["Someone says they can get me a government job for money. Is it real?","কেউ বলছে টাকা দিলে সরকারি চাকরি করে দেবে। এটা কি সত্যি?"],["No. Government recruitment happens through official websites and exams; fees are paid only through the official Teletalk system. Fake appointment letters with real-looking seals are common. Never pay a middleman.","না। সরকারি নিয়োগ হয় অফিসিয়াল ওয়েবসাইট আর পরীক্ষার মাধ্যমে; ফি দিতে হয় শুধু অফিসিয়াল টেলিটক ব্যবস্থায়। আসলের মতো দেখতে সিলসহ ভুয়া নিয়োগপত্র প্রায়ই ঘোরে। কোনো দালালকে টাকা দেবেন না।"],"J3"],
 [["Should I only prepare for BCS?","শুধু বিসিএসের প্রস্তুতিই কি নেব?"],["Prepare, but don't put everything on one exam. BCS takes a long time and seats are limited. Keep a job or a skill growing at the same time, so you are moving forward whatever the result.","প্রস্তুতি নিন, কিন্তু সবকিছু একটা পরীক্ষার ওপর ছেড়ে দেবেন না। বিসিএসে সময় লাগে, আসনও সীমিত। পাশাপাশি একটা চাকরি বা দক্ষতা গড়ে তুলুন, যাতে ফল যা-ই হোক, আপনি সামনে এগোতে থাকেন।"],"J4"],
 [["My family wants one career, I want another. What do I do?","পরিবার একটা ক্যারিয়ার চায়, আমি অন্যটা চাই। কী করব?"],["Talk to them with a plan, not just a feeling: show the path, the cost, the pay and the time it takes, using this site. Families usually worry about security. If you show them a safe, step-by-step plan, they listen more. A middle path (study one, build skills in the other) often works.","শুধু ইচ্ছা নয়, একটা পরিকল্পনা নিয়ে কথা বলুন: এই সাইট থেকে পথ, খরচ, বেতন আর কত সময় লাগবে তা দেখান। পরিবার সাধারণত নিরাপত্তা নিয়ে চিন্তা করে। নিরাপদ, ধাপে ধাপে পরিকল্পনা দেখালে তারা বেশি শোনে। মাঝামাঝি পথও (একটা পড়া, অন্যটায় দক্ষতা গড়া) প্রায়ই কাজ করে।"],""],
 [["Is a master's degree worth it?","মাস্টার্স করা কি লাভজনক?"],["For teaching, research and some government posts, yes. For most private jobs, one or two years of real experience often counts more. If you're unsure, work first and do an evening master's later.","শিক্ষকতা, গবেষণা আর কিছু সরকারি পদে হ্যাঁ। বেশিরভাগ বেসরকারি চাকরিতে এক-দুই বছরের আসল অভিজ্ঞতা প্রায়ই বেশি গুরুত্ব পায়। নিশ্চিত না হলে আগে চাকরি করুন, পরে সান্ধ্য মাস্টার্স করুন।"],"B1"],
 [["I've been unemployed for a long time and I'm losing hope.","অনেক দিন ধরে বেকার, আশা হারিয়ে ফেলছি।"],["You are not alone: about 8.85 lakh university graduates were unemployed in 2024. It says more about the job market than about you. Set one small goal each week (one skill, one application, one person to talk to). And please talk to someone you trust; if it feels too heavy, an emotional support service like Kaan Pete Roi can listen.","আপনি একা নন: ২০২৪ সালে প্রায় ৮ লাখ ৮৫ হাজার বিশ্ববিদ্যালয় পাস মানুষ বেকার ছিলেন। এটা আপনার চেয়ে চাকরির বাজার সম্পর্কে বেশি বলে। প্রতি সপ্তাহে একটা ছোট লক্ষ্য রাখুন (একটা দক্ষতা, একটা আবেদন, একজনের সঙ্গে কথা)। আর বিশ্বাসের কারও সঙ্গে কথা বলুন; খুব ভারী লাগলে কান পেতে রই-এর মতো মানসিক সহায়তা সেবা আপনার কথা শুনবে।"],"J1"]
];

/* ===== Career switch for employed people (rule-based guidance) ===== */
const SW_SECT={
 bank:["🏦","Banking & finance","ব্যাংক ও আর্থিক খাত",["Credit and risk judgement","Customer handling","Compliance and documentation","Targets and sales"],["ঋণ ও ঝুঁকি বিচার","গ্রাহক সামলানো","কমপ্লায়েন্স ও ডকুমেন্টেশন","টার্গেট ও সেলস"]],
 rmg:["🧵","Garments & textile","পোশাক ও টেক্সটাইল",["Buyer communication","Production planning","Costing","Working under deadlines"],["বায়ারের সঙ্গে যোগাযোগ","প্রোডাকশন পরিকল্পনা","কস্টিং","ডেডলাইনের চাপে কাজ"]],
 sales:["📦","Sales, FMCG, distribution","সেলস, এফএমসিজি, ডিস্ট্রিবিউশন",["Negotiation","Market knowledge","Field team handling","Meeting targets"],["দরকষাকষি","বাজার চেনা","মাঠের টিম সামলানো","টার্গেট পূরণ"]],
 teach:["📚","Teaching & coaching","শিক্ষকতা ও কোচিং",["Explaining clearly","Planning lessons","Public speaking","Patience with people"],["সহজ করে বোঝানো","পাঠ পরিকল্পনা","সবার সামনে কথা বলা","মানুষের প্রতি ধৈর্য"]],
 govt:["🏛️","Government job","সরকারি চাকরি",["Office procedure","File and record work","Public dealing","Rules and regulations"],["অফিসের কার্যপ্রণালী","ফাইল ও রেকর্ডের কাজ","জনসাধারণের সঙ্গে কাজ","নিয়মকানুন"]],
 it:["💻","IT & software","আইটি ও সফটওয়্যার",["Problem solving","Technical tools","Working with data","Learning fast"],["সমস্যা সমাধান","টেকনিক্যাল টুল","ডেটা নিয়ে কাজ","দ্রুত শেখা"]],
 ngo:["🤝","NGO & development","এনজিও ও উন্নয়ন",["Field coordination","Report and proposal writing","Community work","Donor rules"],["মাঠপর্যায়ের সমন্বয়","রিপোর্ট ও প্রস্তাবনা লেখা","কমিউনিটির সঙ্গে কাজ","দাতা সংস্থার নিয়ম"]],
 health:["🩺","Health & pharma","স্বাস্থ্য ও ওষুধ",["Medical knowledge","Care and empathy","Quality and safety rules","Shift work"],["চিকিৎসা জ্ঞান","যত্ন ও সহমর্মিতা","মান ও নিরাপত্তার নিয়ম","শিফটে কাজ"]],
 eng:["🏗️","Engineering & construction","প্রকৌশল ও নির্মাণ",["Technical drawing","Site supervision","Estimation","Managing workers"],["টেকনিক্যাল ড্রইং","সাইট তত্ত্বাবধান","এস্টিমেশন","শ্রমিক পরিচালনা"]],
 bpo:["🎧","Call centre & customer service","কল সেন্টার ও কাস্টমার সার্ভিস",["Clear speaking","Calm under pressure","CRM software","English"],["পরিষ্কার কথা বলা","চাপের মধ্যে শান্ত থাকা","সিআরএম সফটওয়্যার","ইংরেজি"]],
 media:["📣","Media, marketing, creative","মিডিয়া, মার্কেটিং, সৃজনশীল",["Writing and content","Design tools","Social media","Understanding audiences"],["লেখা ও কনটেন্ট","ডিজাইন টুল","সোশ্যাল মিডিয়া","দর্শক বোঝা"]],
 abroad:["✈️","Worked abroad, now back","বিদেশে কাজ করে ফিরেছি",["Trade skills","Discipline","Foreign language basics","Savings to invest"],["ট্রেডের দক্ষতা","শৃঙ্খলা","বিদেশি ভাষার প্রাথমিক জ্ঞান","বিনিয়োগের মতো সঞ্চয়"]]
};
const SW_GOAL={
 pay:["💰","Earn more","বেশি আয়"],
 stable:["🛡️","A stable, secure job","স্থিতিশীল, নিরাপদ চাকরি"],
 balance:["⏰","Better hours, less stress","ভালো সময়সূচি, কম চাপ"],
 abroad:["🌍","Move abroad","বিদেশে যাওয়া"],
 biz:["🚀","Start my own business","নিজের ব্যবসা শুরু"],
 grow:["📈","Grow faster, bigger role","দ্রুত উন্নতি, বড় পদ"]
};
/* route templates: [titleEn,titleBn,stepsEn[],stepsBn[],trackKey, needs] needs: deg=bachelor's, age=under 32 */
const SW_ROUTE={
 bcs:["BCS / government officer","বিসিএস / সরকারি কর্মকর্তা",["Check you are under 32 and have a bachelor's (4-year) or master's.","Prepare 1–2 hours daily without quitting your job.","Sit for BCS and grade 9–10 circulars together."],["বয়স ৩২-এর নিচে আর ৪ বছরের স্নাতক বা মাস্টার্স আছে কিনা দেখুন।","চাকরি না ছেড়ে প্রতিদিন ১–২ ঘণ্টা প্রস্তুতি নিন।","বিসিএস আর গ্রেড ৯–১০-এর বিজ্ঞপ্তিতে একসাথে আবেদন করুন।"],"govt","deg_age"],
 bankjob:["Banking (private or state)","ব্যাংকিং (বেসরকারি বা রাষ্ট্রীয়)",["Brush up maths, English and banking basics.","Apply to probationary officer / MTO and state bank exams.","An evening MBA in finance helps you move up later."],["গণিত, ইংরেজি আর ব্যাংকিংয়ের মৌলিক বিষয় ঝালিয়ে নিন।","প্রবেশনারি অফিসার / এমটিও আর রাষ্ট্রীয় ব্যাংকের পরীক্ষায় আবেদন করুন।","পরে উন্নতির জন্য ফিন্যান্সে সান্ধ্য এমবিএ সাহায্য করে।"],"bank","deg"],
 mnc:["Multinational or big local company","বহুজাতিক বা বড় দেশি কোম্পানি",["Turn your work results into numbers on your CV.","Target roles that match your current skills (sales, supply chain, HR, finance).","Use LinkedIn and referrals; most mid-level hiring happens there."],["আপনার কাজের ফলাফল সিভিতে সংখ্যা দিয়ে লিখুন।","বর্তমান দক্ষতার সঙ্গে মেলে এমন পদ বাছুন (সেলস, সাপ্লাই চেইন, এইচআর, ফিন্যান্স)।","লিংকডইন আর রেফারেন্স কাজে লাগান; মাঝারি পর্যায়ের বেশিরভাগ নিয়োগ এভাবেই হয়।"],"mnc",""],
 tech:["Move into tech (data, software, digital)","প্রযুক্তিতে আসা (ডেটা, সফটওয়্যার, ডিজিটাল)",["Pick one skill: Excel + Power BI, SQL, coding or digital marketing.","Learn 1 hour a day for 6 months and build 3 small real projects.","Apply first for tech roles inside your own industry; your domain knowledge is your advantage."],["একটি দক্ষতা বাছুন: এক্সেল + পাওয়ার বিআই, এসকিউএল, কোডিং বা ডিজিটাল মার্কেটিং।","৬ মাস প্রতিদিন ১ ঘণ্টা শিখুন, ৩টি ছোট বাস্তব প্রজেক্ট বানান।","প্রথমে নিজের শিল্পখাতের ভেতরের টেক পদে আবেদন করুন; খাতের অভিজ্ঞতাই আপনার শক্তি।"],"tech",""],
 qual:["Add a professional qualification","পেশাগত যোগ্যতা যোগ করা",["Choose by goal: CA/ACCA/CMA for finance, PGD for a quick switch, evening MBA for management.","Study while you keep your job and income.","Use the new qualification to move up or across."],["লক্ষ্য অনুযায়ী বাছুন: ফিন্যান্সে সিএ/এসিসিএ/সিএমএ, দ্রুত বদলের জন্য পিজিডি, ম্যানেজমেন্টে সান্ধ্য এমবিএ।","চাকরি আর আয় রেখেই পড়ুন।","নতুন যোগ্যতা দিয়ে ওপরে বা অন্য খাতে যান।"],"bank",""],
 teachjob:["Teaching or training","শিক্ষকতা বা প্রশিক্ষণ",["Your work experience is valuable to students; try part-time teaching or corporate training first.","For government schools check the circular; for non-government, pass NTRCA.","Build a reputation, then expand to full-time or your own coaching."],["আপনার কাজের অভিজ্ঞতা শিক্ষার্থীদের কাছে মূল্যবান; আগে খণ্ডকালীন শিক্ষকতা বা কর্পোরেট ট্রেনিং চেষ্টা করুন।","সরকারি স্কুলের জন্য বিজ্ঞপ্তি দেখুন; বেসরকারির জন্য এনটিআরসিএ পাস করুন।","সুনাম গড়ে তারপর পূর্ণকালীন বা নিজের কোচিংয়ে যান।"],"teach",""],
 ngojob:["NGO or development sector","এনজিও বা উন্নয়ন খাত",["Highlight field, reporting and people skills.","Volunteer or take a short project contract to get in.","Learn basic data tools (Excel, KoBo) to stand out."],["মাঠের কাজ, রিপোর্ট লেখা আর মানুষের সঙ্গে কাজের দক্ষতা তুলে ধরুন।","ঢোকার জন্য স্বেচ্ছাসেবা বা ছোট প্রকল্পের চুক্তিতে কাজ নিন।","আলাদা হতে সাধারণ ডেটা টুল (এক্সেল, কোবো) শিখুন।"],"ngo",""],
 abroadjob:["Skilled work abroad","বিদেশে দক্ষ কাজ",["Get a recognised skill certificate (TTC / BTEB) or language test (Japanese N4, Korean EPS, German A1).","Go only through BMET registration and licensed agencies.","Keep your current job until the visa and contract are in hand."],["স্বীকৃত দক্ষতার সনদ (টিটিসি / বিটিইবি) বা ভাষা পরীক্ষা (জাপানি এন৪, কোরিয়ান ইপিএস, জার্মান এ১) নিন।","শুধু বিএমইটি নিবন্ধন আর লাইসেন্সধারী এজেন্সির মাধ্যমে যান।","ভিসা আর চুক্তি হাতে না আসা পর্যন্ত বর্তমান চাকরি ছাড়বেন না।"],"skill",""],
 abroadstudy:["Master's abroad, then work there","বিদেশে মাস্টার্স, তারপর সেখানে কাজ",["Your work experience helps: Chevening and Japan/World Bank scholarships ask for 2+ years.","Take IELTS and prepare your applications a year ahead.","Choose a field where your experience counts."],["আপনার অভিজ্ঞতা কাজে লাগবে: শেভেনিং ও জাপান/বিশ্বব্যাংক বৃত্তিতে ২+ বছরের অভিজ্ঞতা চায়।","আইইএলটিএস দিন, আর এক বছর আগে থেকে আবেদনের প্রস্তুতি নিন।","এমন বিষয় বাছুন যেখানে আপনার অভিজ্ঞতা গোনা হয়।"],"abroad","deg"],
 biz:["Start a business from what you know","যা জানেন তা দিয়ে ব্যবসা শুরু",["Start small on the side, in the field you know (your industry's suppliers, customers and problems).","Test with real customers for 3–6 months before quitting your job.","Get a trade licence and keep proper accounts from day one."],["যে খাত চেনেন, সেখানেই পাশাপাশি ছোট করে শুরু করুন (নিজের শিল্পখাতের সাপ্লায়ার, গ্রাহক আর সমস্যা)।","চাকরি ছাড়ার আগে ৩–৬ মাস আসল গ্রাহক দিয়ে পরীক্ষা করুন।","ট্রেড লাইসেন্স নিন, আর প্রথম দিন থেকেই ঠিকমতো হিসাব রাখুন।"],"ideas",""],
 freelance:["Freelancing or remote work","ফ্রিল্যান্সিং বা রিমোট কাজ",["Package one skill you already use at work (writing, design, data, support).","Build a profile and finish small jobs to earn reviews.","Grow it on the side until it matches your salary."],["কাজে যে দক্ষতা ব্যবহার করেন, সেটাকে একটা সেবা হিসেবে সাজান (লেখা, ডিজাইন, ডেটা, সাপোর্ট)।","প্রোফাইল বানিয়ে ছোট কাজ শেষ করে রিভিউ জমান।","বেতনের সমান না হওয়া পর্যন্ত পাশাপাশি বাড়ান।"],"skill",""]
};
const SW_MAP={pay:["mnc","tech","abroadjob","qual"],stable:["bcs","bankjob","teachjob","qual"],balance:["teachjob","freelance","ngojob","tech"],abroad:["abroadjob","abroadstudy","tech"],biz:["biz","freelance","qual"],grow:["mnc","qual","tech","bcs"]};

/* ===== Startup ideas (Bangladesh) ===== */
Object.assign(SRC2,{
  ST1:{t:"UNB: Govt expands low-interest financing for youth entrepreneurs (Jun 2026)",u:"https://unb.com.bd/category/Bangladesh/govt-expands-low-interest-financing-to-boost-youth-entrepreneurship-finance-minister/187766"},
  ST2:{t:"Dhaka Tribune: Bangladesh Bank forms Tk 1,000 crore fund for young entrepreneurs (Aug 2026)",u:"https://www.dhakatribune.com/business/banks/417264/bb-forms-tk1-000cr-fund-to-foster-young"},
  ST3:{t:"UNB: How to get a trade licence in Bangladesh",u:"https://unb.com.bd/category/Bangladesh/how-to-get-a-trade-license-in-bangladesh/86563"},
  ST4:{t:"The Financial Express: iDEA Startup Grant Programme",u:"https://thefinancialexpress.com.bd/trade/Startup-Grant-Programme-launched-to-inspire-innovators"}
});
/* [icon, nameEn, nameBn, budget(low|mid|high), interest tags, needEn, needBn, tipEn, tipBn] */
const IDEAS=[
 ["🎓","Home tutoring / small coaching","হোম টিউশন / ছোট কোচিং","low",["teach"],"Good results in a subject, patience, a few students to start","কোনো বিষয়ে ভালো রেজাল্ট, ধৈর্য, শুরুতে কয়েকজন শিক্ষার্থী","Start with 3–5 students; word of mouth from parents grows it.","৩–৫ জন শিক্ষার্থী দিয়ে শুরু করুন; অভিভাবকদের মুখে মুখে প্রচারেই বাড়ে।"],
 ["🎨","Freelance design, video or writing","ফ্রিল্যান্স ডিজাইন, ভিডিও বা লেখা","low",["create","tech"],"A laptop, one strong skill, a portfolio","একটি ল্যাপটপ, একটা শক্ত দক্ষতা, একটা পোর্টফোলিও","Work for local shops first to build samples, then go global.","আগে স্থানীয় দোকানের কাজ করে নমুনা জমান, তারপর আন্তর্জাতিক বাজারে যান।"],
 ["🛍️","Facebook / online shop (f-commerce)","ফেসবুক / অনলাইন শপ (এফ-কমার্স)","low",["sell"],"A product you understand, a reliable supplier, good photos","ভালো চেনা পণ্য, নির্ভরযোগ্য সাপ্লায়ার, ভালো ছবি","Start with pre-orders to avoid unsold stock; honest delivery builds repeat buyers.","অবিক্রীত মাল এড়াতে প্রি-অর্ডারে শুরু করুন; সৎ ডেলিভারিই ক্রেতা ফেরায়।"],
 ["🍱","Home-made food, tiffin or catering","ঘরে তৈরি খাবার, টিফিন বা ক্যাটারিং","low",["food"],"Cooking skill, clean kitchen, offices or students nearby","রান্নার হাত, পরিষ্কার রান্নাঘর, আশেপাশে অফিস বা শিক্ষার্থী","Fix a daily menu and a delivery time; consistency matters more than variety.","দৈনিক মেনু আর ডেলিভারির সময় ঠিক রাখুন; বৈচিত্র্যের চেয়ে নিয়মিত মানই বেশি জরুরি।"],
 ["📱","Mobile and electronics repair","মোবাইল ও ইলেকট্রনিক্স মেরামত","low",["hands"],"A short repair course, basic tools, a small shop space","ছোট মেরামত কোর্স, প্রাথমিক যন্ত্রপাতি, ছোট দোকানের জায়গা","Learn at a TTC or short course first; trust is your best advertisement.","আগে টিটিসি বা ছোট কোর্সে শিখুন; বিশ্বাসই আপনার সবচেয়ে বড় বিজ্ঞাপন।"],
 ["📣","Digital marketing for local businesses","স্থানীয় ব্যবসার জন্য ডিজিটাল মার্কেটিং","low",["tech","sell"],"Facebook and Google ads skills, results you can show","ফেসবুক ও গুগল অ্যাডসের দক্ষতা, দেখানোর মতো ফলাফল","Offer a one-month trial to 2–3 shops and use their results to win more clients.","২–৩টি দোকানকে এক মাসের ট্রায়াল দিন, তাদের ফলাফল দেখিয়ে আরও ক্লায়েন্ট নিন।"],
 ["🍄","Mushroom, rooftop or vegetable farming","মাশরুম, ছাদ বা সবজি চাষ","mid",["agri"],"Training from the agriculture extension office, space, a buyer before you grow","কৃষি সম্প্রসারণ অফিসের প্রশিক্ষণ, জায়গা, চাষের আগেই ক্রেতা","Find buyers (restaurants, shops) before your first harvest.","প্রথম ফসলের আগেই ক্রেতা (রেস্টুরেন্ট, দোকান) ঠিক করুন।"],
 ["🐔","Poultry, fish or dairy","পোল্ট্রি, মাছ বা দুগ্ধ খামার","mid",["agri"],"Training, land or pond, knowledge of disease and feed","প্রশিক্ষণ, জমি বা পুকুর, রোগ ও খাবার সম্পর্কে জ্ঞান","Start small; one disease outbreak can wipe out a large first batch.","ছোট করে শুরু করুন; একটা রোগেই বড় প্রথম ব্যাচ শেষ হয়ে যেতে পারে।"],
 ["🍳","Cloud kitchen (delivery-only food)","ক্লাউড কিচেন (শুধু ডেলিভারির খাবার)","mid",["food"],"A tested menu, food-delivery app listing, hygiene","পরীক্ষিত মেনু, ফুড ডেলিভারি অ্যাপে তালিকাভুক্তি, পরিচ্ছন্নতা","Keep the menu small; app commissions eat margins, so price carefully.","মেনু ছোট রাখুন; অ্যাপের কমিশন লাভ কমায়, তাই দাম সাবধানে ঠিক করুন।"],
 ["🖨️","Printing, design and photocopy shop","প্রিন্টিং, ডিজাইন ও ফটোকপির দোকান","mid",["create","sell"],"A spot near schools or offices, printers, design skill","স্কুল বা অফিসের কাছে জায়গা, প্রিন্টার, ডিজাইনের দক্ষতা","Location decides most of the business; add design services for better margins.","ব্যবসার বেশিরভাগ ঠিক করে জায়গা; বেশি লাভের জন্য ডিজাইন সেবা যোগ করুন।"],
 ["⚡","Electrical, AC and solar installation service","ইলেকট্রিক্যাল, এসি ও সোলার ইনস্টলেশন সেবা","mid",["hands"],"Trade certificate (TTC / BTEB), tools, a small team","ট্রেডের সনদ (টিটিসি / বিটিইবি), যন্ত্রপাতি, ছোট টিম","Certified, on-time technicians are rare; that reputation is your edge.","সনদপ্রাপ্ত, সময়মতো আসা টেকনিশিয়ান কম; এই সুনামই আপনার শক্তি।"],
 ["💻","IT services or software for small businesses","ছোট ব্যবসার জন্য আইটি সেবা বা সফটওয়্যার","mid",["tech"],"Programming skill, understanding of one industry's problems","প্রোগ্রামিং দক্ষতা, কোনো এক শিল্পখাতের সমস্যা বোঝা","Solve one painful problem (billing, stock, payroll) for one industry first.","আগে একটা খাতের একটা বড় সমস্যা (বিলিং, স্টক, পে-রোল) সমাধান করুন।"],
 ["🏭","Small agro-processing or packaged food","ছোট কৃষিপণ্য প্রক্রিয়াজাতকরণ বা প্যাকেটজাত খাবার","high",["agri","food"],"Food safety and BSTI requirements, machines, distribution","খাদ্য নিরাপত্তা ও বিএসটিআইয়ের শর্ত, মেশিন, বিপণন ব্যবস্থা","Check BSTI and food safety rules before buying machines.","মেশিন কেনার আগে বিএসটিআই ও খাদ্য নিরাপত্তার নিয়ম জেনে নিন।"],
 ["🚚","Local delivery or logistics","স্থানীয় ডেলিভারি বা লজিস্টিকস","high",["sell"],"Riders or vehicles, tracking, business clients","রাইডার বা গাড়ি, ট্র্যাকিং, ব্যবসায়িক ক্লায়েন্ট","Sign a few online shops as steady clients before scaling.","বড় হওয়ার আগে কয়েকটা অনলাইন শপকে নিয়মিত ক্লায়েন্ট বানান।"],
 ["📲","Tech startup (app or platform)","টেক স্টার্টআপ (অ্যাপ বা প্ল্যাটফর্ম)","high",["tech"],"A team, a real problem, users who will pay","একটা টিম, একটা আসল সমস্যা, টাকা দিতে রাজি ব্যবহারকারী","Build the smallest version, get paying users, then seek grants or investors.","সবচেয়ে ছোট সংস্করণ বানান, টাকা দেওয়া ব্যবহারকারী আনুন, তারপর অনুদান বা বিনিয়োগ খুঁজুন।"]
];

/* ===== Freelancing: skills, setup and reality ===== */
Object.assign(SRC2,{
  F1:{t:"Dhaka Tribune: Online freelancing in Bangladesh, constraints (study, 2021)",u:"https://www.dhakatribune.com/business/245078/online-freelancing-in-bangladesh-constraints"},
  F2:{t:"The Financial Express: Six fake freelancing academy fraudsters held (Jan 2024)",u:"https://thefinancialexpress.com.bd/national/six-freelancing-academy-fraudsters-held-in-city"},
  F3:{t:"goLance: Upwork fees explained (2026)",u:"https://golance.com/blogs/upwork-fees-explained-2026"},
  F4:{t:"Dhaka Tribune: The cost of getting paid (freelancer payments)",u:"https://www.dhakatribune.com/business/139470/the-cost-of-getting-paid"}
});
/* [icon,en,bn, learnEn,learnBn, setupEn,setupBn, realityEn,realityBn] */
const FSKILLS=[
 ["🎨","Graphic design","গ্রাফিক ডিজাইন","Design basics, Photoshop/Illustrator or Figma, a portfolio of 10+ real pieces","ডিজাইনের মৌলিক নিয়ম, ফটোশপ/ইলাস্ট্রেটর বা ফিগমা, ১০টির বেশি আসল কাজের পোর্টফোলিও","A computer that can run design software; professional software is usually a paid subscription","ডিজাইন সফটওয়্যার চলার মতো কম্পিউটার; পেশাদার সফটওয়্যার সাধারণত টাকা দিয়ে সাবস্ক্রিপশন নিতে হয়","Very crowded market. Clients choose on portfolio and reviews, so the first orders are the hardest.","খুব ভিড়ের বাজার। ক্লায়েন্ট পোর্টফোলিও আর রিভিউ দেখে বাছে, তাই প্রথম অর্ডারগুলো সবচেয়ে কঠিন।"],
 ["🎬","Video editing","ভিডিও এডিটিং","Editing software, storytelling, sound and colour basics","এডিটিং সফটওয়্যার, গল্প বলার কৌশল, সাউন্ড ও কালারের মৌলিক জ্ঞান","A powerful computer (video needs more RAM and storage than most work), fast internet to upload files","শক্তিশালী কম্পিউটার (ভিডিওতে বেশি র‍্যাম আর স্টোরেজ লাগে), ফাইল আপলোডের জন্য দ্রুত ইন্টারনেট","There is demand from YouTube and short-video creators, but you need stronger equipment than for most skills here.","ইউটিউব আর শর্ট ভিডিও নির্মাতাদের কাছ থেকে চাহিদা আছে, তবে এখানকার বেশিরভাগ দক্ষতার চেয়ে শক্তিশালী যন্ত্রপাতি লাগে।"],
 ["🌐","Web development","ওয়েব ডেভেলপমেন্ট","HTML, CSS, JavaScript, then a framework or WordPress; real projects","এইচটিএমএল, সিএসএস, জাভাস্ক্রিপ্ট, তারপর একটা ফ্রেমওয়ার্ক বা ওয়ার্ডপ্রেস; আসল প্রজেক্ট","A laptop and steady internet; hosting and domains for practice projects cost a little","একটি ল্যাপটপ আর স্থির ইন্টারনেট; প্র্যাকটিস প্রজেক্টের হোস্টিং আর ডোমেইনে কিছু খরচ","Takes longer to learn than most skills here; clients who need ongoing website work can become long-term.","এখানকার বেশিরভাগ দক্ষতার চেয়ে শিখতে বেশি সময় লাগে; যাদের নিয়মিত ওয়েবসাইটের কাজ লাগে, তারা দীর্ঘমেয়াদি ক্লায়েন্ট হতে পারে।"],
 ["📣","Digital marketing & SEO","ডিজিটাল মার্কেটিং ও এসইও","Facebook/Google ads, SEO, analytics, reporting results","ফেসবুক/গুগল অ্যাডস, এসইও, অ্যানালিটিক্স, ফলাফলের রিপোর্ট","Some ad budget to practise on real campaigns; paid tools help but are not a must at first","আসল ক্যাম্পেইনে শেখার জন্য কিছু বিজ্ঞাপন বাজেট; পেইড টুল সাহায্য করে, তবে শুরুতে জরুরি নয়","Clients pay for results. Without proof of results, it is hard to get hired.","ক্লায়েন্ট ফলাফলের জন্য টাকা দেয়। ফলাফলের প্রমাণ ছাড়া কাজ পাওয়া কঠিন।"],
 ["✍️","Content writing","কনটেন্ট রাইটিং","Strong English, research, SEO writing, meeting deadlines","ভালো ইংরেজি, গবেষণা, এসইও রাইটিং, সময়মতো কাজ জমা","Low setup: a computer and internet","খরচ কম: একটি কম্পিউটার আর ইন্টারনেট","AI tools now do basic writing, so plain writing jobs pay less; expertise in a subject is what sells.","এআই টুল এখন সাধারণ লেখা করে ফেলে, তাই সাধারণ লেখার কাজে আয় কমেছে; কোনো বিষয়ে বিশেষজ্ঞতাই বিক্রি হয়।"],
 ["🧮","Data analysis","ডেটা অ্যানালাইসিস","Excel, SQL, Power BI or Python, statistics","এক্সেল, এসকিউএল, পাওয়ার বিআই বা পাইথন, পরিসংখ্যান","A laptop; many learning tools are available at no cost","একটি ল্যাপটপ; অনেক শেখার টুল বিনা খরচে পাওয়া যায়","Clients expect accuracy, clear reports and good English; you need to show sample analyses before anyone hires you.","ক্লায়েন্ট নির্ভুলতা, পরিষ্কার রিপোর্ট আর ভালো ইংরেজি আশা করে; কাজ পাওয়ার আগে নমুনা বিশ্লেষণ দেখাতে হবে।"],
 ["🗂️","Virtual assistant / data entry","ভার্চুয়াল অ্যাসিস্ট্যান্ট / ডেটা এন্ট্রি","Email, spreadsheets, scheduling, clear English","ইমেইল, স্প্রেডশিট, শিডিউলিং, পরিষ্কার ইংরেজি","Low setup","খরচ কম","Easiest to start but lowest paid, and the most common area for scams that ask you to pay first.","শুরু করা সবচেয়ে সহজ, কিন্তু আয় সবচেয়ে কম, আর আগে টাকা চাওয়া প্রতারণা এখানেই সবচেয়ে বেশি।"]
];

Object.assign(SRC2,{P6:{t:"University of Dhaka: all departments (official)",u:"https://www.du.ac.bd/index.php/departments"},P7:{t:"Banglapedia: Bangladesh University of Engineering and Technology",u:"https://en.banglapedia.org/index.php/Bangladesh_University_of_Engineering_and_Technology"}});
UPROG["University of Dhaka"]={s:"P6",dept:true,ug:["Accounting", "Anthropology", "Applied Chemistry & Chemical Engineering", "Applied Mathematics", "Arabic", "Art History", "Bangla", "Banking and Insurance", "Biochemistry and Molecular Biology", "Biomedical Physics & Technology", "Botany", "Ceramic", "Chemistry", "Clinical Pharmacy and Pharmacology", "Clinical Psychology", "Communication Disorders", "Computer Science and Engineering", "Craft", "Criminology", "Dance", "Development Studies", "Disaster Science and Climate Resilience", "Drawing and Painting", "Economics", "Educational and Counselling Psychology", "Electrical and Electronic Engineering", "English", "Finance", "Fisheries", "Genetic Engineering and Biotechnology", "Geography & Environment", "Geology", "Graphic Design", "History", "Information Science and Library Management", "International Business", "International Relations", "Islamic History & Culture", "Islamic Studies", "Japanese Studies", "Law", "Linguistics", "Management", "Management Information Systems (MIS)", "Marketing", "Mass Communication & Journalism", "Mathematics", "Meteorology", "Microbiology", "Music", "Nuclear Engineering", "Oceanography", "Organization Strategy and Leadership", "Oriental Art", "Pali and Buddhist Studies", "Peace and Conflict Studies", "Persian Language and Literature", "Pharmaceutical Chemistry", "Pharmaceutical Technology", "Pharmacy", "Philosophy", "Physics", "Political Science", "Population Sciences", "Printing and Publication Studies", "Printmaking", "Psychology", "Public Administration", "Public Health", "Robotics and Mechatronics Engineering", "Sanskrit", "Sculpture", "Sociology", "Soil, Water & Environment", "Statistics", "Television, Film and Photography", "Theatre and Performance Studies", "Theoretical and Computational Chemistry", "Theoretical Physics", "Tourism and Hospitality Management", "Urdu", "Women and Gender Studies", "World Religions and Culture", "Zoology"],pg:[]};
UPROG["Bangladesh University of Engineering & Technology (BUET)"]={s:"P7",note:["From Banglapedia; newer departments may be missing. Check BUET's official admission notice for this year's list and seats.","বাংলাপিডিয়া থেকে; নতুন বিভাগ বাদ পড়তে পারে। এ বছরের তালিকা ও আসন জানতে বুয়েটের অফিসিয়াল ভর্তি বিজ্ঞপ্তি দেখুন।"],ug:["Bachelor of Science in Civil Engineering (B.Sc. Engg. CE)", "Bachelor of Science in Electrical and Electronic Engineering (B.Sc. Engg. EEE)", "Bachelor of Science in Mechanical Engineering (B.Sc. Engg. ME)", "Bachelor of Science in Chemical Engineering (B.Sc. Engg. ChE)", "Bachelor of Science in Materials and Metallurgical Engineering (B.Sc. Engg. MME)", "Bachelor of Science in Computer Science and Engineering (B.Sc. Engg. CSE)", "Bachelor of Science in Industrial and Production Engineering (B.Sc. Engg. IPE)", "Bachelor of Science in Naval Architecture and Marine Engineering (B.Sc. Engg. NAME)", "Bachelor of Urban and Regional Planning (BURP)", "Bachelor of Architecture (B.Arch., 5 years)"],pg:[]};
