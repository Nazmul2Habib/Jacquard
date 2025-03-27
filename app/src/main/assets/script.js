const translations = {
    bn: {
        title: "সয়টার ক্যালকুলেটর",
        back_part: "ব্যাকপার্ট সময়",
        front_part: "ফ্রম্পার্ট সময়",
        sleeve: "স্লিপ সময়",
        office: "অফিস সময়",
        break: "বিরতি সময়",
        machine: "মেশিন সংখ্যা",
        calculate: "ক্যালকুলেট করুন",
        result: "রেজাল্ট",
        total_time: "মোট সময়",
        minutes: "মিনিট",
        total: "মোট সয়টার",
        back: "আরও ক্যালকুলেশন"
    },
    en: {
        title: "Sweater Calculator",
        back_part: "Back Part Time",
        front_part: "Front Part Time",
        sleeve: "Sleeve Time",
        office: "Office Hours",
        break: "Break Time",
        machine: "Machines",
        calculate: "Calculate",
        result: "Result",
        total_time: "Total Time",
        minutes: "Minutes",
        total: "Total Sweaters",
        back: "Calculate Again"
    }
};

function changeLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[lang][key];
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`button[onclick="changeLanguage('${lang}')"]`).classList.add('active');
}

function calculate() {
    const getValue = id => parseFloat(document.getElementById(id).value) || 0;
    
    const back = getValue('backPartTime');
    const front = getValue('frontPartTime');
    const sleeve = getValue('sleeveTime');
    const office = getValue('officeHours');
    const breakTime = getValue('breakTime');
    const machines = getValue('machines');

    const totalTime = (office * 60 - breakTime);
    const sweaterTime = back + front + (sleeve * 2);
    const totalSweaters = Math.floor((totalTime * machines) / sweaterTime);

    // Update Results
    document.getElementById('totalTime').textContent = sweaterTime;
    document.getElementById('backPartResult').textContent = Math.floor(totalTime / back) || 0;
    document.getElementById('frontPartResult').textContent = Math.floor(totalTime / front) || 0;
    document.getElementById('sleeveResult').textContent = Math.floor(totalTime / sleeve) * 1 || 0;
    document.getElementById('totalSweaters').textContent = totalSweaters || 0;

    // Show Result Page
    document.getElementById('inputPage').style.display = "none";
    document.getElementById('resultPage').style.display = "block";
}

function goBack() {
    document.getElementById('resultPage').style.display = "none";
    document.getElementById('inputPage').style.display = "block";
}

// Initialize
changeLanguage('bn');
