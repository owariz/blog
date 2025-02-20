import Link from "next/link";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
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

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">บล็อกล่าสุด</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {posts.map((post) => (
          <Card key={post.id} className="w-full shadow-lg hover:shadow-xl transition">
            <CardHeader className="p-0">
              <img src={post.image} alt={post.title} className="w-full h-96 object-cover" />
            </CardHeader>
            <CardBody className="p-8">
              <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
              <p className="text-gray-600">{post.excerpt}</p>
            </CardBody>
            <CardFooter className="flex justify-between items-center p-8">
              <span className="text-gray-500 text-sm">{post.date}</span>
              <Link href={`/blog/${post.id}`}>
                <Button size="lg" variant="flat" color="primary">อ่านเพิ่มเติม</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
