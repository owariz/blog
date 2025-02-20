import Link from "next/link";
import { Button } from "@heroui/button";

const posts = [
  {
    id: 1,
    title: "เรียนรู้ Next.js 15: ฟีเจอร์ใหม่ และวิวัฒนาการ",
    excerpt: "Next.js 15 มาพร้อมฟีเจอร์ใหม่ที่ช่วยให้การพัฒนาเว็บเร็วขึ้น...",
    date: "20 กุมภาพันธ์ 2025",
    category: "Next.js",
    image: "https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs",
  },
  {
    id: 2,
    title: "Hero UI: ไลบรารีที่ช่วยให้ UI ของคุณดูดีขึ้น",
    excerpt: "Hero UI เป็นไลบรารีที่ออกแบบมาสำหรับการสร้าง UI ได้ง่ายและสวยงาม...",
    date: "19 กุมภาพันธ์ 2025",
    category: "UI/UX",
    image: "https://www.heroui.com/blog/nextuiv2.jpg",
  },
  {
    id: 3,
    title: "JavaScript ES2025: ฟีเจอร์ใหม่ที่คุณควรรู้",
    excerpt: "JavaScript เวอร์ชันใหม่ในปี 2025 มีอะไรที่น่าสนใจบ้าง?",
    date: "18 กุมภาพันธ์ 2025",
    category: "JavaScript",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    id: 4,
    title: "Tailwind CSS v4: ปรับปรุงความเร็ว และ Utility Classes ใหม่",
    excerpt: "Tailwind CSS v4 มาพร้อมฟีเจอร์ใหม่ และทำให้เว็บโหลดเร็วขึ้น...",
    date: "17 กุมภาพันธ์ 2025",
    category: "CSS",
    image: "https://picperf.io/https://laravelnews.s3.amazonaws.com/images/tailwindcss-1633184775.jpg",
  },
  {
    id: 5,
    title: "React Server Components: ควรรู้ก่อนใช้งาน!",
    excerpt: "React Server Components ช่วยเพิ่มประสิทธิภาพ และลดการโหลดข้อมูล...",
    date: "16 กุมภาพันธ์ 2025",
    category: "React",
    image: "https://reactjs.org/logo-og.png",
  },
  {
    id: 6,
    title: "TypeScript 5.5: อัปเดตล่าสุดสำหรับนักพัฒนา",
    excerpt: "TypeScript 5.5 ปรับปรุง Type Safety และประสิทธิภาพที่ดียิ่งขึ้น...",
    date: "15 กุมภาพันธ์ 2025",
    category: "TypeScript",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
];

export default function Home() {
  return (
    <div>
      {/* 🌟 Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center bg-gray-900 rounded-md text-white text-center px-6">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">🚀 ยินดีต้อนรับสู่ Blog Dev</h1>
          <p className="text-lg text-gray-300">
            อัปเดตข่าวสารล่าสุดเกี่ยวกับการพัฒนาเว็บ, เทคโนโลยี, และไลบรารีใหม่ ๆ
          </p>
          <Link href="/blog">
            <Button size="lg" variant="flat" color="primary" className="mt-6">
              อ่านบทความทั้งหมด 📖
            </Button>
          </Link>
        </div>
      </section>

      {/* 📌 บล็อกล่าสุด */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">📝 บทความล่าสุด</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-52 object-cover" />
              <div className="p-6">
                <span className="text-sm text-gray-500">{post.date} • {post.category}</span>
                <h3 className="text-2xl font-semibold mt-2">{post.title}</h3>
                <p className="text-gray-600 mt-2">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`}>
                  <Button size="sm" variant="bordered" color="primary" className="mt-4">
                    อ่านเพิ่มเติม →
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 หมวดหมู่ */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">📂 หมวดหมู่ยอดนิยม</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/blog?category=Next.js">
            <Button variant="flat" color="secondary">🔥 Next.js</Button>
          </Link>
          <Link href="/blog?category=UI/UX">
            <Button variant="flat" color="secondary">🎨 UI/UX</Button>
          </Link>
          <Link href="/blog?category=JavaScript">
            <Button variant="flat" color="secondary">📜 JavaScript</Button>
          </Link>
          <Link href="/blog?category=CSS">
            <Button variant="flat" color="secondary">💅 CSS</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
