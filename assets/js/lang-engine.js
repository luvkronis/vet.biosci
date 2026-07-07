/* =======================================================
* JavaScript Client-Side Translation Engine
* File Location: assets/js/lang-engine.js
* ======================================================= */

// 1. คลังข้อมูลชุดคำแปลภาษาไทยและภาษาอังกฤษ
const translations = {
    th: {
        navHome: "หน้าแรก",
        navPrograms: "หลักสูตร",
        navFaculty: "คณาจารย์",
        navContact: "ติดต่อสอบถาม",
        
        bannerSub: "หลักสูตรบัณฑิตศึกษา",
        bannerMain: "ชีวศาสตร์ทางสัตวแพทย์",
        bannerDesc: "แนวทางสำหรับผู้สนใจเข้าศึกษาต่อระดับปริญญาโทและปริญญาเอก",

        topBrand: "หลักสูตรบัณฑิตศึกษา คณะสัตวแพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย",
        mainTitle: "ชีวศาสตร์ทางสัตวแพทย์ (2022)",
        subTitle: "หลักสูตรบัณฑิตศึกษา สาขาวิชาชีวศาสตร์ทางสัตวแพทย์",
        lblDegOffered: "คุณวุฒิที่เปิดสอน:",
        valDegOffered: "วิทยาศาสตรดุษฎีบัณฑิต (วท.ด.) และ วิทยาศาสตรมหาบัณฑิต (วท.ม) สาขาวิชาชีวศาสตร์ทางสัตวแพทย์",
        lblResponsible: "รับผิดชอบโดย:",
        valResponsible: "ภาควิชากายวิภาคศาสตร์ และภาควิชาสรีรวิทยา: หน่วยชีวเคมี",
        headWhatis: "ชีวศาสตร์ทางสัตวแพทย์ คืออะไร?",
        descWhatis: "ชีวศาสตร์ทางสัตวแพทย์ คือหลักสูตรวิทยาศาสตร์ชีวภาพที่อุทิศให้กับการศึกษาในสาขาต่างๆ ที่เป็นรากฐานรองรับสัตวแพทยศาสตร์",
        headWhy: "ทำไมต้องศึกษา ชีวศาสตร์ทางสัตวแพทย์?",
        descWhy1: "หลักสูตรชีวศาสตร์ทางสัตวแพทย์ มอบโอกาสอันยอดเยี่ยมสำหรับการพัฒนาวิชาชีพทั้งในด้านสัตวแพทย์และด้านชีวการแพทย์",
        descWhy2: "หลักสูตรนี้ได้รับการออกแบบมาเพื่อเน้นแนวทางแบบสหวิทยาการในการวิจัยด้านสัตวแพทย์และชีววิทยาศาสตร์ นิสิตของเราจะได้เชี่ยวชาญในด้านกายวิภาคศาสตร์มหพยาธิวิทยา, กายวิภาคศาสตร์จุลทรรศน์, โครงสร้างระดับรังสีและกายวิภาคศาสตร์ประยุกต์, เซลล์วิทยา, ชีวเคมี, ชีววิทยาโมเลกุล และเทคโนโลยีชีวภาพ เพื่อปรับปรุงการจัดการ สุขภาพ และสุขภาวะของสัตว์ นิสิตจะได้รับประสบการณ์จากรายวิชาที่ปรับให้เหมาะสมกับผู้เรียน ซึ่งสอนโดยคณาจารย์ผู้ทรงคุณวุฒิและมีประสบการณ์ นอกจากนี้ยังจะได้พัฒนาทักษะการทำงานเป็นทีม ทักษะการนำเสนอทั้งแบบการเขียนและการพูด และได้รับประสบการณ์การวิจัยในสิ่งอำนวยความสะดวกที่โดดเด่นของเรา",
        descWhy3: "ผู้สำเร็จการศึกษาจากหลักสูตรนี้จะมีความพร้อมเป็นอย่างยิ่งในการเริ่มต้นงานวิจัยของตนเอง ทั้งในด้านสัตวแพทยศาสตร์ประยุกต์และสัตวแพทยศาสตร์คลินิก",
        headStruct: "โครงสร้างหลักสูตร",
        tblThProgram: "หลักสูตร",
        tblThTime: "ระยะเวลาการศึกษา",
        tblMName: "วิทยาศาสตรมหาบัณฑิต (วท.ม.)",
        tblMTime: "2 ปี",
        tblPName: "วิทยาศาสตรดุษฎีบัณฑิต (วท.ด.)",
        tblPSub: "(สำหรับผู้สมัครที่สำเร็จการศึกษา หรือไม่ได้สำเร็จการศึกษาระดับปริญญาโท)",
        tblPTime: "3 หรือ 5 ปี",
        tableNote: "* ทั้งสองหลักสูตรมี 2 แผนการศึกษาให้เลือก: ทำวิทยานิพนธ์เพียงอย่างเดียว หรือ ทำวิทยานิพนธ์ร่วมกับการศึกษารายวิชา",
        headCareer: "สายอาชีพหลังสำเร็จการศึกษา",
        careerList: ["อาจารย์มหาวิทยาลัย", "นักวิจัยด้านสัตวแพทย์และวิทยาศาสตร์สิ่งมีชีวิต", "นักวิทยาศาสตร์", "สัตวแพทย์"],
        headKeyRes: "หัวข้อวิจัยหลัก",
        keyResList: ["กายวิภาคศาสตร์มหพยาธิวิทยา, จุลทรรศน์ และโครงสร้างระดับรังสี", "กายวิภาคศาสตร์การพัฒนาการ", "กายวิภาคศาสตร์สัตวแพทย์ประยุกต์", "ชีวเคมี", "ชีววิทยาของเซลล์และพันธุศาสตร์โมเลกุล", "การวินิจฉัยระดับโมเลกุล", "วิศวกรรมชีวภาพ", "จีโนมิกส์และโปรตีโอมิกส์", "การสร้างภาพระดับเซลล์และภาพทางคลินิก", "การวิจัยเซลล์ต้นกำเนิด (สเต็มเซลล์)", "โรคมะเร็ง"],
        headCurrRes: "ไฮไลท์งานวิจัยในปัจจุบัน",
        currResList: ["การหาลำดับจีโนมอ้างอิงและความผันแปรทางพันธุกรรมของละมั่ง", "การแช่แข็งเนื้อเยื่อรังไข่และการเพาะเลี้ยงเซลล์รังไข่ขั้นปฐมภูมิในแมว", "การแสดงออกของยีนและโปรตีโอมิกส์ของสารสกัดจากน้ำคร่ำสุนัข", "เซลล์ต้นกำเนิดจากฟันและการสร้างกระดูก", "การแสดงออกของโปรตีนตัวรับในระบบสืบพันธุ์เพศเมียของแพะ", "แนวทางจีโนมิกส์เพื่อการอนุรักษ์พญาแร้งและนกอินทรีทุ่งหญ้าสเตปป์", "เซลล์ต้นกำเนิดกับการเสื่อมของกระจกตาในสุนัข", "โปรตีโอมิกส์ของลำไส้ใหญ่ส่วนต้นในสุกร"],
        headAdminInfo: "ข้อมูลการรับสมัคร",
        subEligibility: "คุณสมบัติของผู้สมัคร",
        eligibilityList: ["สำเร็จการศึกษาระดับปริญญาตรีในสาขาสัตวแพทยศาสตร์, วิทยาศาสตร์ชีวภาพ หรือสาขาวิชาที่เกี่ยวข้อง", "มีคะแนนความรู้ความสามารถภาษาอังกฤษขั้นต่ำตามเกณฑ์กำหนดของจุฬาลงกรณ์มหาวิทยาลัย", "ผ่านการพิจารณาจากคณะกรรมการบริหารหลักสูตรว่ามีคุณสมบัติเหมาะสมในการเข้าศึกษา", "คุณสมบัติอื่นๆ เป็นไปตามที่จุฬาลงกรณ์มหาวิทยาลัยกำหนด"],
        subDocuments: "เอกสารที่ต้องใช้ในการสมัคร",
        adminNote: "* กรอกแบบฟอร์มใบสมัครออนไลน์ได้ที่เว็บไซต์บัณฑิตวิทยาลัย จุฬาลงกรณ์มหาวิทยาลัย (Graduate Admission)",
        documentsList: ["ใบสมัครที่กรอกข้อมูลครบถ้วนสมบูรณ์พร้อมติดรูปถ่ายขนาด 1 นิ้ว", "ใบแสดงผลการศึกษาอย่างเป็นทางการ (Transcript)", "สำเนาบัตรประจำตัวประชาชน หรือสำเนาหนังสือเดินทาง (Passport)", "ผลคะแนนทดสอบความสามารถภาษาอังกฤษ: CU-TEP, TOEFL หรือ IELTS", "หนังสือแนะนำ (Letters of Recommendation) จำนวน 2 ฉบับ จากอาจารย์ผู้สอนหรือผู้บังคับบัญชา"],
        footHeadContact: "ติดต่อสอบถามข้อมูลเพิ่มเติม",
        footValContactName: "รศ.น.สพ. ก้องเกียรติ ศรีสุวัฒนาสกุล",
        footLblEmail: "อีเมล:",
        footHeadAddress: "ที่อยู่",
        footValAddress: "ภาควิชากายวิภาคศาสตร์ คณะสัตวแพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ถนนอังรีดูนังต์ แขวงปทุมวัน เขตปทุมวัน กรุงเทพฯ 10330 ประเทศไทย",
        footLblTel: "โทร:",
        contactTitle: "คณะสัตวแพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย",
        contactAddress: "ถนนอังรีดูนังต์ แขวงปทุมวัน เขตปทุมวัน กรุงเทพมหานคร 10330",
        lblUg: "(ศึกษาต่อและปริญญาตรี)",
        lblGrad: "(บัทธิปศึกษา)",
        lblFax: "โทรสาร",
        noticeMasterTitle: "วิทยาศาสตรมหาบัณฑิต (วท.ม.)",
        noticeMasterDesc: "หน้านี้กำลังอยู่ในช่วงของการปรับปรุงและจัดเตรียมข้อมูลหลักสูตรปริญญาโท 2 ปี ขออภัยในความไม่สะดวก",
        noticePhdTitle: "วิทยาศาสตรดุษฎีบัณฑิต (วท.ด.)",
        noticePhdDesc: "หน้านี้กำลังอยู่ในช่วงของการปรับปรุงและจัดเตรียมข้อมูลหลักสูตรปริญญาเอก 3 หรือ 5 ปี ขออภัยในความไม่สะดวก",
        noticeNewsTitle: "ข่าวสารและประชาสัมพันธ์",
        noticeNewsDesc: "หน้านี้กำลังอยู่ในช่วงของการปรับปรุงและจัดเตรียมข้อมูลข่าวสารและกิจกรรมของหลักสูตร ขออภัยในความไม่สะดวก",
        facultyBadge: "คณาจารย์ประจำหลักสูตร",
        lblRoleMain: "อาจารย์ประจำหลักสูตรชีวศาสตร์ทางสัตวแพทย์",
        lblRoleSub: "ผู้เชี่ยวชาญ คณะสัตวแพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย",
        lblTblEmail: "อีเมล",
        lblTblPhone: "โทรศัพท์",
        lblTblAffiliation: "สังกัดหลักสูตร",
        valTblAffiliation: "M.Sc. สาขาวิชาชีวศาสตร์ทางสัตวแพทย์<br>Ph.D. สาขาวิชาชีวศาสตร์ทางสัตวแพทย์",
        lblTblExpertise: "ความเชี่ยวชาญ",
        lblTblResearch: "งานวิจัยที่สนใจ",
        lblBtnCV: "Download CV",
        lblBtnResearcher: "Researcher Chula",
        lblBtnScholar: "Google Scholar",
    },
    en: {
        navHome: "Home",
        navPrograms: "Programs",
        navFaculty: "Faculty",
        navContact: "Contact",
        
        bannerSub: "Graduate Program",
        bannerMain: "Veterinary Biosciences",
        bannerDesc: "Guideline for Prospective M.Sc. and Ph.D. Students",
        topBrand: "Graduate Program, Faculty of Veterinary Science, Chulalongkorn University",
        mainTitle: "VETERINARY BIOSCIENCES (2022)",
        subTitle: "Graduate Program in Veterinary Biosciences",
        lblDegOffered: "Degree Offered:",
        valDegOffered: "Master of Science (MS) & Doctor of Philosophy (PhD) in Veterinary Biosciences",
        lblResponsible: "Responsible by:",
        valResponsible: "The Department of Anatomy and Department of Philosophy: Biochemistry Unit",
        headWhatis: "What is VETERINARY BIOSCIENCES?",
        descWhatis: "Veterinary Biosciences is a biological sciences program dedicated to those areas underpinning veterinary medicine.",
        headWhy: "Why study VETERINARY BIOSCIENCES?",
        descWhy1: "The Veterinary Biosciences program offers excellent opportunities for career development in both veterinary and biomedical fields.",
        descWhy2: "This program is designed to emphasize interdisciplinary approaches in veterinary and bioscience research. Our students will specialize in gross, microscopic, ultrastructural and applied anatomy, cytology, biochemistry, molecular biology and biotechnology to improve the management and health of animals. The students will be exposed to customized coursework, instructed by experienced staff. They will also develop teamwork skills, written and oral presentation skills, and gain research experience at our outstanding facilities.",
        descWhy3: "Graduates from this program will be well-prepared and ready to initiate their own research in both applied and clinical veterinary sciences.",
        headStruct: "PROGRAM STRUCTURE",
        tblThProgram: "Program",
        tblThTime: "Duration",
        tblMName: "Master of Science (MS)",
        tblMTime: "2 Years",
        tblPName: "Doctor of Philosophy (PhD)",
        tblPSub: "(For applicants with or without MS degree)",
        tblPTime: "3 or 5 Years",
        tableNote: "* Both programs offer 2 options: Thesis only OR Thesis and course work.",
        headCareer: "CAREER AFTER GRADUATION",
        careerList: ["Professor", "Researcher in Veterinary & Life Sciences", "Scientist", "Veterinarian"],
        headKeyRes: "KEY RESEARCH AREAS",
        keyResList: ["Gross, microscopic and ultrastructural anatomy", "Developmental Anatomy", "Applied Veterinary Anatomy", "Biochemistry", "Cell Biology and Molecular genetics", "Molecular diagnosis", "Bio-Engineering", "Genomics and Proteomics", "Cellular and Clinical Imaging", "Stem cell research", "Cancers"],
        headCurrRes: "THE CURRENT RESEARCH HIGHLIGHTS",
        currResList: ["Reference genome and genetic variations of Eld's deer", "Feline ovarian tissue cryopreservation and primary culture of feline ovarian cells", "Gene expression and proteomics of canine amniotic extracts", "Dental and osteogenic stem cells", "Expression of protein receptors in goat female reproductive tract", "Genomics Approach for conservation of Asian king vulture and steppe eagle", "Stem cells and canine corneal degeneration", "Cecal Proteomics in pigs"],
        headAdminInfo: "ADMISSION INFO",
        subEligibility: "Eligibility of Applicants",
        eligibilityList: ["Completed Bachelor's Degrees in Veterinary, Biological Science or related discipline.", "Minimum English proficiency score according to Chulalongkorn University's requirement.", "Consideration of the Program Committee as eligible for admission.", "Others as required from Chulalongkorn University."],
        subDocuments: "Required Documents",
        adminNote: "* Fill in the online application form at Chulalongkorn's Graduate Admission website",
        documentsList: ["A printed copy of the completed application form with a 1-inch photograph attached", "An official transcript of academic records", "A photocopy of identification card/passport", "English proficiency test score: CU-TEP, TOEFL, or IELTS", "Two letters of recommendation from instructors and supervisors"],
        footHeadContact: "Contact Person for Enquiries",
        footValContactName: "Assoc. Prof. Kongkiat Srisuwatanasagul",
        footLblEmail: "E-mail:",
        footHeadAddress: "Address",
        footValAddress: "Department of Anatomy, Faculty of Veterinary Science, Chulalongkorn University, Henri-Dunant Rd., Pathumwan, Bangkok 10330, Thailand.",
        footLblTel: "Tel:",
        contactTitle: "Faculty of Veterinary Science, Chulalongkorn University",
        contactAddress: "Henri-Dunant Rd., Pathumwan, Pathumwan, Bangkok 10330",
        lblUg: "(Admissions & Undergraduate)",
        lblGrad: "(Graduate Studies)",
        lblFax: "Fax",
        noticeMasterTitle: "Master of Science (M.Sc.)",
        noticeMasterDesc: "This page is currently under construction and preparing information for the 2-year Master's program. We apologize for any inconvenience.",
        noticePhdTitle: "Doctor of Philosophy (Ph.D.)",
        noticePhdDesc: "This page is currently under construction and preparing information for the 3 or 5-year Ph.D. program. We apologize for any inconvenience.",
        noticeNewsTitle: "News and Announcements",
        noticeNewsDesc: "This page is currently under construction and preparing news and events of the program. We apologize for any inconvenience.",
        facultyBadge: "Faculty Members",
        lblRoleMain: "Faculty Member, Veterinary Biosciences",
        lblRoleSub: "Expert, Faculty of Veterinary Science, Chulalongkorn University",
        lblTblEmail: "Email",
        lblTblPhone: "Phone & Fax",
        lblTblAffiliation: "Graduate Program Affiliation",
        valTblAffiliation: "M.Sc. in Veterinary Biosciences<br>Ph.D. in Veterinary Biosciences",
        lblTblExpertise: "Expertise",
        lblTblResearch: "Research Area",
        lblBtnCV: "Download CV",
        lblBtnResearcher: "Researcher Chula",
        lblBtnScholar: "Google Scholar"
    }
};

// =======================================================
// ตัวแปรเก็บข้อมูลคณาจารย์จาก JSON
// =======================================================
let facultyDataArray = [];

// 2. ฟังก์ชันหลักในการเปลี่ยนเนื้อหาตาม DOM ID ที่ถูกผูกไว้ในหน้าเว็บ HTML
function changeLang(lang) {
    const data = translations[lang];
    if (!data) return;

    // ระบบสลับภาษาแบบใช้ Class ควบคุม HTML (สำหรับส่วนทั่วไป)
    document.body.classList.remove('lang-th', 'lang-en');
    document.body.classList.add('lang-' + lang);

    let imgPrefix = "";
    if (window.location.pathname.includes("/programs/")) { imgPrefix = "../"; }

    const bannerSubText = document.getElementById('banner-sub-text');
    const bannerMainText = document.getElementById('banner-main-text');
    const bannerDescText = document.getElementById('banner-desc-text');
    
    if (bannerSubText) bannerSubText.innerText = data.bannerSub;
    if (bannerMainText) bannerMainText.innerText = data.bannerMain;
    if (bannerDescText) bannerDescText.innerText = data.bannerDesc;

    const navItems = document.querySelectorAll('.nav-links .nav-item');
    if (navItems.length >= 4) {
        navItems[0].innerText = data.navHome;
        navItems[1].innerHTML = `${data.navPrograms} <span class="arrow-icon">▾</span>`;
        navItems[2].innerText = data.navFaculty;
        navItems[3].innerText = data.navContact;
    }

    const dropCards = document.querySelectorAll('.bento-drop-grid .drop-sub-card');
    if (dropCards.length >= 2) {
        const mTitle = dropCards[0].querySelector('h4');
        const mDesc = dropCards[0].querySelector('p');
        if (mTitle) mTitle.innerText = lang === 'th' ? "วิทยาศาสตรมหาบัณฑิต" : "Master of Science";
        if (mDesc) mDesc.innerText = lang === 'th' ? "สาขาวิชาชีวศาสตร์ทางสัตวแพทย์ (หลักสูตร 2 ปี)" : "Program in Veterinary Biosciences (2 Years)";
        
        const pTitle = dropCards[1].querySelector('h4');
        const pDesc = dropCards[1].querySelector('p');
        if (pTitle) pTitle.innerText = lang === 'th' ? "วิทยาศาสตรดุษฎีบัณฑิต" : "Doctor of Philosophy";
        if (pDesc) pDesc.innerText = lang === 'th' ? "สาขาวิชาชีวศาสตร์ทางสัตวแพทย์ (หลักสูตร 3 หรือ 5 ปี)" : "Program in Veterinary Biosciences (3 or 5 Years)";
    }

    const mobileNavHome = document.querySelector('.mobile-nav-links li:nth-child(1) a');
    const mobileNavFaculty = document.querySelector('.mobile-nav-links li:nth-child(6) a');
    const mobileNavContact = document.querySelector('.mobile-nav-links li:nth-child(7) a');

    if (mobileNavHome) mobileNavHome.innerText = data.navHome;
    if (mobileNavFaculty) mobileNavFaculty.innerText = data.navFaculty;
    if (mobileNavContact) mobileNavContact.innerText = data.navContact;

    const topBrand = document.getElementById('text-top-brand');
    const mainTitle = document.getElementById('text-main-title');
    const subTitle = document.getElementById('text-sub-title');
    if(topBrand) topBrand.innerText = data.topBrand;
    if(mainTitle) mainTitle.innerText = data.mainTitle;
    if(subTitle) subTitle.innerText = data.subTitle;
    
    const lblDegOffered = document.getElementById('lbl-deg-offered');
    const valDegOffered = document.getElementById('val-deg-offered');
    const lblResponsible = document.getElementById('lbl-responsible');
    const valResponsible = document.getElementById('val-responsible');
    if(lblDegOffered) lblDegOffered.innerText = data.lblDegOffered;
    if(valDegOffered) valDegOffered.innerText = data.valDegOffered;
    if(lblResponsible) lblResponsible.innerText = data.lblResponsible;
    if(valResponsible) valResponsible.innerText = data.valResponsible;
    
    const headWhatis = document.getElementById('head-whatis');
    const descWhatis = document.getElementById('desc-whatis');
    const headWhy = document.getElementById('head-why');
    const descWhy1 = document.getElementById('desc-why-1');
    const descWhy2 = document.getElementById('desc-why-2');
    const descWhy3 = document.getElementById('desc-why-3');
    if(headWhatis) headWhatis.innerText = data.headWhatis;
    if(descWhatis) descWhatis.innerText = data.descWhatis;
    if(headWhy) headWhy.innerText = data.headWhy;
    if(descWhy1) descWhy1.innerText = data.descWhy1;
    if(descWhy2) descWhy2.innerText = data.descWhy2;
    if(descWhy3) descWhy3.innerText = data.descWhy3;
    
    const headStruct = document.getElementById('head-struct');
    const tblMName = document.getElementById('tbl-m-name');
    const tblMTime = document.getElementById('tbl-m-time');
    const tblPName = document.getElementById('tbl-p-name');
    const tblPSub = document.getElementById('tbl-p-sub');
    const tblPTime = document.getElementById('tbl-p-time');
    const textTableNote = document.getElementById('text-table-note');
    const headCareer = document.getElementById('head-career');
    if(headStruct) headStruct.innerText = data.headStruct;
    if(tblMName) tblMName.innerText = data.tblMName;
    if(tblMTime) tblMTime.innerText = data.tblMTime;
    if(tblPName) tblPName.innerText = data.tblPName;
    if(tblPSub) tblPSub.innerText = data.tblPSub;
    if(tblPTime) tblPTime.innerText = data.tblPTime;
    if(textTableNote) textTableNote.innerText = data.tableNote;
    if(headCareer) headCareer.innerText = data.headCareer;

    const thNodes = document.querySelectorAll('#table-row-head th');
    if(thNodes.length >= 2) {
        thNodes[0].innerText = data.tblThProgram;
        thNodes[1].innerText = data.tblThTime;
    }

    renderListArray('list-career', data.careerList);
    renderListArray('list-key-res', data.keyResList);
    renderListArray('list-curr-res', data.currResList);

    const headKeyRes = document.getElementById('head-key-res');
    if(headKeyRes) headKeyRes.innerText = data.headKeyRes;
    const headCurrRes = document.getElementById('head-curr-res');
    if(headCurrRes) headCurrRes.innerText = data.headCurrRes;

    const headAdminInfo = document.getElementById('head-admin-info');
    const subEligibility = document.getElementById('sub-eligibility');
    const subDocuments = document.getElementById('sub-documents');
    const textAdminNote = document.getElementById('text-admin-note');
    if(headAdminInfo) headAdminInfo.innerText = data.headAdminInfo;
    if(subEligibility) subEligibility.innerText = data.subEligibility;
    if(subDocuments) subDocuments.innerText = data.subDocuments;
    if(textAdminNote) textAdminNote.innerText = data.adminNote;
    
    renderListArray('list-eligibility', data.eligibilityList);
    renderListArray('list-documents', data.documentsList);

    const cTitle = document.getElementById('c-title');
    const cAddress = document.getElementById('c-address');
    const cLblUg = document.getElementById('c-lbl-ug');
    const cLblGrad = document.getElementById('c-lbl-grad');
    const cLblFax = document.getElementById('c-lbl-fax');
    if (cTitle) cTitle.innerText = data.contactTitle;
    if (cAddress) cAddress.innerText = data.contactAddress;
    if (cLblUg) cLblUg.innerText = data.lblUg;
    if (cLblGrad) cLblGrad.innerText = data.lblGrad;
    if (cLblFax) cLblFax.innerText = data.lblFax;

    const footHeadContact = document.getElementById('foot-head-contact');
    const footValContactName = document.getElementById('foot-val-contact-name');
    const footLblEmail = document.getElementById('foot-lbl-email');
    const footHeadAddress = document.getElementById('foot-head-address');
    const footValAddress = document.getElementById('foot-val-address');
    const footLblTel = document.getElementById('foot-lbl-tel');
    if(footHeadContact) footHeadContact.innerText = data.footHeadContact;
    if(footValContactName) footValContactName.innerHTML = `<strong>${data.footValContactName}</strong>`;
    if(footLblEmail) footLblEmail.innerText = data.footLblEmail;
    if(footHeadAddress) footHeadAddress.innerText = data.footHeadAddress;
    if(footValAddress) footValAddress.innerHTML = data.footValAddress;
    if(footLblTel) footLblTel.innerText = data.footLblTel;

    const btnTh = document.getElementById('btn-th');
    const btnEn = document.getElementById('btn-en');
    if(btnTh && btnEn) {
        if(lang === 'th') {
            btnTh.classList.add('active');
            btnEn.classList.remove('active');
        } else {
            btnEn.classList.add('active');
            btnTh.classList.remove('active');
        }
    }
    
    // อัปเดตข้อมูลบนหน้าเว็บเมื่อมีการกดเปลี่ยนภาษา
    if (facultyDataArray.length > 0) {
        initFacultySlider(lang, imgPrefix);
        renderFacultyPage(lang, imgPrefix);
    }
    
    localStorage.setItem('preferredBentoLang', lang);
}

function renderListArray(elementId, itemsArray) {
    const container = document.getElementById(elementId);
    if (!container) return;
    container.innerHTML = '';
    itemsArray.forEach(text => {
        const li = document.createElement('li');
        li.innerHTML = text;
        container.appendChild(li);
    });
}

// ฟังก์ชันดึงข้อมูลจาก JSON
async function fetchFacultyData() {
    try {
        const response = await fetch('faculty-data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // ในไฟล์ JSON ข้อมูลถูกครอบด้วย {"faculty-data": [ ... ]}
        if(data && data["faculty-data"]) {
            facultyDataArray = data["faculty-data"];
        } else {
            facultyDataArray = data; // เผื่อกรณี JSON เป็น Array ตรงๆ
        }
        
        const savedLanguageSetting = localStorage.getItem('preferredBentoLang') || 'th';
        let imgPrefix = window.location.pathname.includes("/programs/") ? "../" : "";
        
        changeLang(savedLanguageSetting);
        initFacultySlider(savedLanguageSetting, imgPrefix);
        renderFacultyPage(savedLanguageSetting, imgPrefix);
        startSlideAutoPlay();
        
    } catch (error) {
        console.error("Could not fetch faculty data:", error);
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const mobileToggle = document.getElementById("mobile-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener("click", () => {
            mobileToggle.classList.toggle("open");
            mobileMenu.classList.toggle("open");
        });
    }
    
    // โหลดข้อมูลเมื่อหน้าเว็บพร้อม
    fetchFacultyData();
});

// =======================================================
// 🛠️ กลไกควบคุมระบบ Bento Slider (Dynamic Generation)
// =======================================================
let currentSlideIndex = 0;
let slideTimer = null;

function initFacultySlider(lang, prefix = "") {
    const sliderWrapper = document.getElementById('faculty-slider');
    if (!sliderWrapper || facultyDataArray.length === 0) return;
    
    const data = translations[lang];
    sliderWrapper.innerHTML = ''; 

    facultyDataArray.forEach((prof, idx) => {
        const slideDiv = document.createElement('div');
        slideDiv.className = `slide ${idx === currentSlideIndex ? 'active' : ''}`;
        
        // เลือกชื่อให้ตรงกับภาษา
        const profName = lang === 'th' ? prof.name_th : prof.name_en;
        
        slideDiv.innerHTML = `
            <img src="${prefix}${prof.img}" alt="${profName}" class="slider-img" onerror="this.src='https://placehold.co/400x500/f4f6f9/475569?text=Faculty+Image'">
            <div class="slider-overlay">
                <span class="slider-badge">${data.facultyBadge}</span>
                <h3 class="prof-name">${profName}</h3>
                <p class="prof-res">${prof.res}</p>
            </div>
        `;
        sliderWrapper.appendChild(slideDiv);
    });

    resetProgressBarAnimate();
}

function showSlide(index) {
    const slides = document.querySelectorAll('.bento-slider-card .slide');
    if (slides.length === 0) return;
    
    if (index >= slides.length) currentSlideIndex = 0;
    else if (index < 0) currentSlideIndex = slides.length - 1;
    else currentSlideIndex = index;
    
    slides.forEach(slide => slide.classList.remove('active'));
    if (slides[currentSlideIndex]) slides[currentSlideIndex].classList.add('active');

    resetProgressBarAnimate();
}

function moveSlide(step) {
    resetSlideAutoPlay();
    showSlide(currentSlideIndex + step);
}

function startSlideAutoPlay() {
    if (slideTimer) clearInterval(slideTimer);
    slideTimer = setInterval(() => {
        showSlide(currentSlideIndex + 1);
    }, 5000);
}

function resetSlideAutoPlay() {
    if (slideTimer) {
        clearInterval(slideTimer);
        startSlideAutoPlay();
    }
}

function resetProgressBarAnimate() {
    let existingBar = document.getElementById('slider-progress-line');
    if (existingBar) existingBar.remove();

    const sliderCard = document.querySelector('.bento-slider-card');
    if (!sliderCard) return;

    const progressBar = document.createElement('div');
    progressBar.id = 'slider-progress-line';
    progressBar.style.position = 'absolute';
    progressBar.style.bottom = '0';
    progressBar.style.left = '0';
    progressBar.style.height = '4px';
    progressBar.style.backgroundColor = 'var(--primary-pink)';
    progressBar.style.width = '0%';
    progressBar.style.zIndex = '5';
    progressBar.style.transition = 'width 5s linear';

    sliderCard.appendChild(progressBar);

    setTimeout(() => { progressBar.style.width = '100%'; }, 20);
}


// =======================================================
// 🛠️ กลไกเรนเดอร์หน้า Faculty.html (Dynamic Generation)
// =======================================================

// ฟังก์ชันแปลงข้อความที่มี comma เป็นรายการ ol
function createListHTML(textStr) {
    if (!textStr || textStr === "-") return "-";
    const items = textStr.split(',').map(item => item.trim()).filter(item => item.length > 0);
    if (items.length === 0) return "-";
    let listHTML = "<ol>";
    items.forEach(item => {
        listHTML += `<li>${item}</li>`;
    });
    listHTML += "</ol>";
    return listHTML;
}

function renderFacultyPage(lang, prefix = "") {
    const tocContainer = document.getElementById('dynamic-toc-grid');
    const facultyListContainer = document.getElementById('dynamic-faculty-list');
    
    if (!tocContainer || !facultyListContainer || facultyDataArray.length === 0) return;
    
    const dataLang = translations[lang];
    
    // เคลียร์เนื้อหาเดิมก่อน
    tocContainer.innerHTML = '';
    facultyListContainer.innerHTML = '';
    
    facultyDataArray.forEach((prof, idx) => {
        // --- 1. สร้างสารบัญ (TOC) ---
        const listNum = (idx + 1).toString().padStart(2, '0') + '.';
        const tocItem = document.createElement('li');
        tocItem.className = 'toc-list-item';
        
        const profName = lang === 'th' ? prof.name_th : prof.name_en;
        
        tocItem.innerHTML = `
            <span class="toc-num">${listNum}</span>
            <a href="#${prof.id}" class="toc-link">${profName}</a>
        `;
        tocContainer.appendChild(tocItem);
        
        // --- 2. สร้างการ์ดอาจารย์ ---
        const facultyCard = document.createElement('div');
        facultyCard.id = prof.id;
        facultyCard.className = 'bento-card scroll-mt';
        
        const profNameSub = lang === 'th' ? prof.name_en : prof.name_th;
        
        // แปลง comma-separated เป็น HTML List
        const expertiseHTML = createListHTML(prof.expertise);
        const researchHTML = createListHTML(prof.research);

        facultyCard.innerHTML = `
            <div class="faculty-profile-grid">
                <div class="faculty-left">
                    <div>
                        <h2 class="faculty-name-${lang === 'th' ? 'th' : 'en'}">${profName}</h2>
                        <p class="faculty-name-sub">${profNameSub}</p>
                    </div>
                    <img src="${prefix}${prof.img}" alt="Profile" class="faculty-img" onerror="this.src='https://placehold.co/300x400/f4f6f9/475569?text=Profile'">
                </div>
                <div class="faculty-right">
                    <div>
                        <div class="faculty-role">${dataLang.lblRoleMain}</div>
                        <div class="faculty-role-sub">${dataLang.lblRoleSub}</div>
                    </div>
                    <table class="faculty-table">
                        <tr>
                            <td>${dataLang.lblTblEmail}</td>
                            <td>${prof.email}</td>
                        </tr>
                        <tr>
                            <td>${dataLang.lblTblPhone}</td>
                            <td>${prof.phone}</td>
                        </tr>
                        <tr>
                            <td>${dataLang.lblTblAffiliation}</td>
                            <td>${dataLang.valTblAffiliation}</td>
                        </tr>
                        <tr>
                            <td>${dataLang.lblTblExpertise}</td>
                            <td>${expertiseHTML}</td>
                        </tr>
                        <tr>
                            <td>${dataLang.lblTblResearch}</td>
                            <td>${researchHTML}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="faculty-actions">
                <a href="#" class="btn-action"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg> ${dataLang.lblBtnCV}</a>
                <a href="#" class="btn-action"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> ${dataLang.lblBtnResearcher}</a>
                <a href="#" class="btn-action"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4z"/><path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M17 19c0-2.8-2.2-5-5-5s-5 2.2-5 5"/></svg> ${dataLang.lblBtnScholar}</a>
            </div>
        `;
        
        facultyListContainer.appendChild(facultyCard);
    });
}