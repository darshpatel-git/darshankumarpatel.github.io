document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.getElementById("publicationSearch").addEventListener("input", (event) => {
  const q = event.target.value.toLowerCase().trim();
  document.querySelectorAll(".publication").forEach((item) => {
    item.hidden = !item.textContent.toLowerCase().includes(q);
  });
});

document.getElementById("volumeForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const l = Number(document.getElementById("length").value);
  const b = Number(document.getElementById("breadth").value);
  const d = Number(document.getElementById("depth").value);
  const result = l * b * d;
  document.getElementById("volumeResult").textContent =
    Number.isFinite(result) ? `Volume: ${result.toFixed(3)} m³` : "Please enter valid dimensions.";
});

const translations = {
  en: {},
  mr: {
    "About":"परिचय","Research":"संशोधन","Publications":"प्रकाशने","Teaching":"अध्यापन","Recognition":"सन्मान","Contact":"संपर्क",
    "FACULTY PROFILE · CIVIL ENGINEERING":"प्राध्यापक परिचय · स्थापत्य अभियांत्रिकी",
    "Teaching, research and applied innovation across urban planning, transportation planning, GIS mapping, accessibility and sustainable infrastructure.":"नगर नियोजन, वाहतूक नियोजन, GIS मॅपिंग, सुलभता आणि शाश्वत पायाभूत सुविधांमध्ये अध्यापन, संशोधन आणि उपयोजित नवकल्पना."
  },
  hi: {
    "About":"परिचय","Research":"अनुसंधान","Publications":"प्रकाशन","Teaching":"शिक्षण","Recognition":"सम्मान","Contact":"संपर्क",
    "FACULTY PROFILE · CIVIL ENGINEERING":"संकाय प्रोफ़ाइल · सिविल इंजीनियरिंग",
    "Teaching, research and applied innovation across urban planning, transportation planning, GIS mapping, accessibility and sustainable infrastructure.":"शहरी नियोजन, परिवहन नियोजन, GIS मैपिंग, सुगम्यता और सतत अवसंरचना में शिक्षण, अनुसंधान और अनुप्रयुक्त नवाचार।"
  }
};
document.getElementById("languageSelect").addEventListener("change", (event) => {
  const lang = event.target.value;
  document.querySelectorAll("[data-en]").forEach((el) => {
    const value = el.dataset[lang];
    if (value) el.textContent = value;
  });
  document.documentElement.lang = lang;
});
