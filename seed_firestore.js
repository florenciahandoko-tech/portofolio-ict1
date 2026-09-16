const projectId = "portofoliofloren-8baff";
const apiKey = "AIzaSyCGQBkN02HEi9yTv30l7ZSSt66C7H4Ca-U";

const initialProjects = [
  {
    id: "proj_1",
    title: "Bloom Craft - Habit Tracker Lucu 🌸",
    category: "webapp",
    categoryLabel: "Web Application",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    desc: "Bloom Craft adalah aplikasi pelacak kebiasaan harian buatan Floren yang dirancang dengan animasi bunga berkembang. Setiap kebiasaan yang diselesaikan memberikan poin untuk merawat kebun digital kamu.",
    features: ["Visualisasi Bunga Tumbuh Real-time", "Pengingat Harian & Streak Tracker", "Tema Pastel Biru, Kuning & Merah Muda", "Dashboard Statistik Mingguan Ringkas"],
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Firestore"],
    stars: 156,
    link: "https://example.com/bloom-craft"
  },
  {
    id: "proj_2",
    title: "Mochi UI - Figma Component Kit 🍡",
    category: "uiux",
    categoryLabel: "UI/UX Design Kit",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
    desc: "Mochi UI Kit adalah koleksi komponen desain Figma siap pakai yang dikreasikan oleh Floren. Dilengkapi token warna pastel hangat, tombol rounded lucu, serta layout responsif.",
    features: ["250+ Komponent Auto-Layout Figma", "Palet Warna Pastel Biru, Yellow & Oat Milk", "Variabel Typography & Spacing Rapi", "Template Wireframe Mobile & Web"],
    tech: ["Figma", "Auto Layout 5.0", "Design Tokens", "UI System"],
    stars: 280,
    link: "https://figma.com/@floren-mochi-ui"
  },
  {
    id: "proj_3",
    title: "Paws & Claws - Pet Planner 🐾",
    category: "mobile",
    categoryLabel: "Mobile Application",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
    desc: "Aplikasi mobile imut penolong para pemilik anabul untuk mencatat jadwal grooming, vaksinasi, nutrisi harian, serta album kenangan foto hewan peliharaan.",
    features: ["Notifikasi Jadwal Grooming & Vaksin", "Jurnal Kesehatan Anabul", "Album Foto Digital Peliharaan", "Rekomendasi Menu Nutrisi"],
    tech: ["Flutter", "Dart", "Firebase", "Local Notifications"],
    stars: 189,
    link: "https://example.com/paws-claws"
  },
  {
    id: "proj_4",
    title: "Pastel Notes - Smart Journal 📝",
    category: "webapp",
    categoryLabel: "Web Application",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
    desc: "Aplikasi jurnal web estetik dengan fitur Mood Tracker harian, pilihan stiker imut, dan tampilan clean ala Figma board untuk mencatat ide kapan saja.",
    features: ["Mood Tracker Harian Warna Pastel", "Pilihan Stiker Digital Estetik", "Kategori Catatan Rapi & Pinning", "Mode Tampilan Terang Warm Beige"],
    tech: ["Vue.js 3", "Pinia", "Tailwind CSS", "IndexedDB"],
    stars: 112,
    link: "https://example.com/pastel-notes"
  },
  {
    id: "proj_5",
    title: "Sweet AI - Creative Writing Assistant 🤖",
    category: "creative",
    categoryLabel: "Creative Tool",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    desc: "Perkakas bantu berbasis AI buatan Floren untuk menghasilkan ide tulisan kreatif, caption medsos ramah, dan draf cerita pendek dengan cepat.",
    features: ["Generator Caption Medsos Estetik", "Curat Ide Cerita & Ide Judul", "Pengatur Nada Bahasa (Friendly/Formal)", "Ekspor Hasil ke PDF & Text"],
    tech: ["Python", "FastAPI", "OpenAI API", "Tailwind CSS"],
    stars: 204,
    link: "https://example.com/sweet-ai"
  },
  {
    id: "proj_6",
    title: "Choco Planner - Financial Tracker 🍫",
    category: "mobile",
    categoryLabel: "Mobile Application",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    desc: "Aplikasi keuangan hangat berdesain coklat muda & pastel untuk mencatat pengeluaran harian, mengatur anggaran bulanan, dan melacak tabungan impian.",
    features: ["Pencatatan Pengeluaran 3-Klik Instan", "Grafik Alokasi Budget Pastel", "Target Tabungan Impian Visual", "Laporan Bulanan Rapi"],
    tech: ["React Native", "TypeScript", "Chart.js", "Redux"],
    stars: 145,
    link: "https://example.com/choco-planner"
  }
];

const initialSettings = {
  brandTitle: "Floren Studio ✨",
  brandAvatar: "🌸",
  badgeText: "Tersedia untuk Project Kreatif & Collaboration",
  headline: "Menciptakan Karya Digital Lucu, Estetik & Rapi.",
  tagline: "Halo! Aku Floren 🎀 — seorang Project Creator & UI Designer. Aku merancang aplikasi web, prototype interaktif, dan produk digital dengan estetika pastel yang hangat & mudah digunakan.",
  email: "floren.creator@example.com",
  location: "Indonesia 🌸",
  socials: [
    { icon: "fa-brands fa-github", url: "https://github.com", class: "bg-pastel-blue hover:bg-sky-400 hover:text-white text-pastel-blueText" },
    { icon: "fa-brands fa-linkedin-in", url: "https://linkedin.com", class: "bg-pastel-blue hover:bg-sky-400 hover:text-white text-pastel-blueText" },
    { icon: "fa-brands fa-figma", url: "https://figma.com", class: "bg-pastel-pink hover:bg-rose-400 hover:text-white text-rose-600" },
    { icon: "fa-brands fa-dribbble", url: "https://dribbble.com", class: "bg-pastel-yellow hover:bg-amber-400 hover:text-white text-pastel-yellowText" }
  ]
};

const initialSkills = [
  {
    title: "UI/UX & Design",
    icon: "fa-solid fa-palette",
    colorClass: "bg-pastel-pink text-rose-600 border-rose-200",
    items: [
      { name: "Figma Components", level: "Ahli" },
      { name: "Wireframing & Prototype", level: "Mahir" },
      { name: "Design Tokens & Palette", level: "Mahir" },
      { name: "User Centric Research", level: "Menengah" }
    ]
  },
  {
    title: "Frontend Dev",
    icon: "fa-solid fa-code",
    colorClass: "bg-pastel-blue text-sky-600 border-sky-200",
    items: [
      { name: "React.js / Next.js", level: "Mahir" },
      { name: "Tailwind CSS", level: "Ahli" },
      { name: "TypeScript", level: "Mahir" },
      { name: "Vue.js 3", level: "Menengah" }
    ]
  },
  {
    title: "Mobile & App",
    icon: "fa-solid fa-mobile-screen-button",
    colorClass: "bg-pastel-yellow text-amber-700 border-amber-200",
    items: [
      { name: "Flutter / Dart", level: "Mahir" },
      { name: "React Native", level: "Mahir" },
      { name: "REST API Integration", level: "Mahir" }
    ]
  },
  {
    title: "Tools Kreatif",
    icon: "fa-solid fa-shapes",
    colorClass: "bg-pastel-green text-emerald-700 border-emerald-200",
    items: [
      { name: "Git & GitHub Workflow", level: "Mahir" },
      { name: "Vercel / Netlify", level: "Mahir" },
      { name: "Procreate / Illustration", level: "Mahir" },
      { name: "Notion & Crafting", level: "Ahli" }
    ]
  }
];

function toFirestoreValue(val) {
  if (typeof val === 'string') return { stringValue: val };
  if (typeof val === 'number') return { integerValue: val.toString() };
  if (typeof val === 'boolean') return { booleanValue: val };
  if (Array.isArray(val)) {
    return { arrayValue: { values: val.map(toFirestoreValue) } };
  }
  if (typeof val === 'object' && val !== null) {
    const fields = {};
    for (const [k, v] of Object.entries(val)) {
      fields[k] = toFirestoreValue(v);
    }
    return { mapValue: { fields } };
  }
  return { nullValue: null };
}

function toFirestoreFields(obj) {
  const fields = {};
  for (const [k, v] of Object.entries(obj)) {
    fields[k] = toFirestoreValue(v);
  }
  return { fields };
}

async function writeDoc(collection, docId, data) {
  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/${collection}/${docId}?key=${apiKey}`;
  const res = await fetch(url, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(toFirestoreFields(data))
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(`${res.status} ${err.error?.message || res.statusText}`);
  }
  return res.json();
}

async function seed() {
  console.log("Mencoba push data ke Firestore...");
  try {
    for (let i = 0; i < initialProjects.length; i++) {
      const p = initialProjects[i];
      await writeDoc('projects', p.id, { ...p, order: i });
      console.log(`[OK] Project: ${p.title}`);
    }
    await writeDoc('settings', 'profile', initialSettings);
    console.log("[OK] Settings Profile");
    await writeDoc('settings', 'skills', { list: initialSkills });
    console.log("[OK] Settings Skills");
    await writeDoc('settings', 'admin', { username: "admin", password: "admin123" });
    console.log("[OK] Settings Admin");
    console.log("\n>>> SEMUA DATA BERHASIL TERSIMPAN DI FIRESTORE! <<<");
  } catch (err) {
    console.error("\n>>> GAGAL MENYIMPAN KE FIRESTORE <<<");
    console.error("Error:", err.message);
  }
}

seed();
