import { notFound } from "next/navigation";
import { Button } from "@heroui/button";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const posts = [
  {
    id: 1,
    title: "เรียนรู้ Next.js 15: ฟีเจอร์ใหม่ และวิวัฒนาการ",
    excerpt: "Next.js 15 มาพร้อมฟีเจอร์ใหม่ที่ช่วยให้การพัฒนาเว็บเร็วขึ้น...",
    content: `
## 📜 จุดเริ่มต้นของ Next.js  
Next.js ถูกพัฒนาโดย **Vercel** และเปิดตัวครั้งแรกในปี 2016  
เป้าหมายหลักคือทำให้ React สามารถ **เรนเดอร์ฝั่งเซิร์ฟเวอร์** ได้ง่ายขึ้น  

## 🚀 ฟีเจอร์ใหม่ใน Next.js 15  
- ✅ **App Router**: ใช้ระบบใหม่ที่จัดการเส้นทางแบบไดนามิก  
- ✅ **Server Actions**: ส่งคำสั่งไปที่เซิร์ฟเวอร์ได้ง่ายขึ้น  
- ✅ **Edge Middleware**: โหลดข้อมูลแบบ dynamic ได้เร็วขึ้น  

### 📌 ตัวอย่างการใช้ Server Actions  
\`\`\`tsx
"use server";

async function submitForm(data: FormData) {
  "use server";
  const name = data.get("name");
  console.log("Received:", name);
}

export default function Page() {
  return (
    <form action={submitForm}>
      <input type="text" name="name" placeholder="Your name" />
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\`
Next.js 15 ช่วยให้การพัฒนาเว็บแอปพลิเคชันง่ายขึ้น!
`,
    date: "20 กุมภาพันธ์ 2025",
    image: "https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs",
    category: "Next.js",
    tags: ["React", "Server Components", "Next.js 15"],
    author: "สมชาย เทพโค้ด",
  },
  {
    id: 2,
    title: "Hero UI: ไลบรารีที่ช่วยให้ UI ของคุณดูดีขึ้น",
    excerpt: "Hero UI เป็นไลบรารีที่ออกแบบมาสำหรับการสร้าง UI ได้ง่ายและสวยงาม...",
    content: `
## 🎨 จุดกำเนิดของ Hero UI  
Hero UI เปิดตัวครั้งแรกในปี 2020 ได้รับแรงบันดาลใจจาก **Material Design** และ **Tailwind CSS**  

## 🌟 จุดเด่นของ Hero UI  
- 🚀 **ปรับแต่งได้ง่าย**  
- 🎭 **รองรับ Dark Mode**  
- ⚡ **Performance ดีเยี่ยม**  

### 📌 ตัวอย่างการใช้งาน Hero UI  
\`\`\`tsx
import { Button } from "@heroui/button";

export default function MyComponent() {
  return <Button color="primary">คลิกเลย!</Button>;
}
\`\`\`
Hero UI ช่วยให้คุณสร้าง UI ได้ง่ายขึ้น!
`,
    date: "19 กุมภาพันธ์ 2025",
    image: "https://www.heroui.com/blog/nextuiv2.jpg",
    category: "UI/UX",
    tags: ["UI Design", "Hero UI", "Tailwind CSS"],
    author: "เจนจิรา ดีไซน์เทพ",
  },
  {
    id: 3,
    title: "JavaScript ES2025: ฟีเจอร์ใหม่ที่คุณควรรู้",
    excerpt: "JavaScript เวอร์ชันใหม่ในปี 2025 มีอะไรที่น่าสนใจบ้าง?",
    content: `
## 🚀 JavaScript ES2025 มีอะไรใหม่?
JavaScript ในปี 2025 มาพร้อมกับฟีเจอร์ใหม่ที่น่าตื่นเต้นและช่วยให้การเขียนโค้ดง่ายขึ้น

## ✨ ฟีเจอร์เด่นใน ES2025
- 🎯 **Pattern Matching**: สร้าง pattern เพื่อตรวจสอบโครงสร้างข้อมูล
- 🔄 **Pipe Operator**: ส่งค่าผ่าน function chain ด้วยรูปแบบใหม่
- 🧩 **Record และ Tuple**: โครงสร้างข้อมูลแบบ immutable

### 📌 ตัวอย่างการใช้ Pattern Matching
\`\`\`javascript
const response = await fetch('/api/user');
const data = await response.json();

match (data) {
  case { status: 'success', user: { name, email } } -> {
    console.log("ยินดีต้อนรับ name");
    sendConfirmation(email);
  }
  case { status: 'error', code: 404 } -> {
    console.error('ไม่พบผู้ใช้');
  }
  case { status: 'error', message } -> {
    console.error("เกิดข้อผิดพลาด: message");
  }
}
\`\`\`

ES2025 ทำให้การเขียน JavaScript มีประสิทธิภาพและอ่านง่ายมากขึ้น!
`,
    date: "18 กุมภาพันธ์ 2025",
    category: "JavaScript",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    tags: ["JavaScript", "ES2025", "Web Development"],
    author: "วิชัย เจเอสมาสเตอร์",
  },
  {
    id: 4,
    title: "Tailwind CSS v4: ปรับปรุงความเร็ว และ Utility Classes ใหม่",
    excerpt: "Tailwind CSS v4 มาพร้อมฟีเจอร์ใหม่ และทำให้เว็บโหลดเร็วขึ้น...",
    content: `
## 🌪️ Tailwind CSS v4: การปฏิวัติ CSS ครั้งใหม่
Tailwind CSS เวอร์ชัน 4 มาพร้อมการปรับปรุงครั้งใหญ่ด้านประสิทธิภาพและความยืดหยุ่น

## 🚀 จุดเด่นของ Tailwind CSS v4
- ⚡ **Engine ใหม่**: เร็วกว่าเดิม 65% สำหรับการคอมไพล์
- 🧰 **Utility Classes ใหม่**: รองรับ CSS Properties ล่าสุด
- 🔍 **Intelligent Pruning**: ลดขนาดไฟล์ CSS โดยไม่ต้องกำหนด safelist

### 📌 ตัวอย่างการใช้ Utility Classes ใหม่
\`\`\`html
<!-- ตัวอย่างการใช้ Animation กับ Scroll Timeline -->
<div class="animate-fade scroll-timeline:[--my-timeline]">
  เนื้อหาจะเฟดอินเมื่อผู้ใช้เลื่อนถึง
</div>

<!-- ตัวอย่างการใช้ Container Queries -->
<div class="container">
  <div class="lg:grid-cols-3 @md:grid-cols-2 grid-cols-1 grid gap-4">
    <!-- เนื้อหาที่ปรับตามขนาดของ container -->
  </div>
</div>
\`\`\`

Tailwind CSS v4 ทำให้การพัฒนา UI ด้วย utility-first รวดเร็วและมีประสิทธิภาพยิ่งขึ้น!
`,
    date: "17 กุมภาพันธ์ 2025",
    category: "CSS",
    image: "https://picperf.io/https://laravelnews.s3.amazonaws.com/images/tailwindcss-1633184775.jpg",
    tags: ["CSS", "Tailwind", "Frontend"],
    author: "นภา สไตล์ลิสต์",
  },
  {
    id: 5,
    title: "React Server Components: ควรรู้ก่อนใช้งาน!",
    excerpt: "React Server Components ช่วยเพิ่มประสิทธิภาพ และลดการโหลดข้อมูล...",
    content: `
## 🔄 React Server Components คืออะไร?
React Server Components (RSC) เป็นแนวคิดใหม่ที่ช่วยให้ React สามารถเรนเดอร์คอมโพเนนต์บนเซิร์ฟเวอร์ได้

## 🌟 ประโยชน์ของ Server Components
- 📊 **ลดขนาด Bundle**: ไม่ส่ง JavaScript ที่ไม่จำเป็นไปยังไคลเอนต์
- ⚡ **เข้าถึงข้อมูลโดยตรง**: ติดต่อฐานข้อมูลโดยไม่ต้องผ่าน API
- 🔒 **ความปลอดภัย**: เก็บโค้ดที่สำคัญไว้ที่เซิร์ฟเวอร์

### 📌 ตัวอย่างการใช้งาน Server Component
\`\`\`tsx
// UserProfile.server.tsx - Server Component
import { db } from '../database';

async function UserProfile({ userId }) {
  const user = await db.users.findById(userId);
  const posts = await db.posts.findMany({ authorId: userId });

  return (
    <div>
      <h1>{user.name}</h1>
      <div className="stats">
        <p>Posts: {posts.length}</p>
        <p>Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
      </div>
      <PostList posts={posts} />
    </div>
  );
}

// PostList.client.tsx - Client Component
'use client';

function PostList({ posts }) {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <LikeButton postId={post.id} />
        </li>
      ))}
    </ul>
  );
}
\`\`\`

React Server Components เป็นการเปลี่ยนแปลงที่สำคัญสำหรับการพัฒนา React ในอนาคต!
`,
    date: "16 กุมภาพันธ์ 2025",
    category: "React",
    image: "https://reactjs.org/logo-og.png",
    tags: ["React", "Server Components", "Frontend"],
    author: "พัชรี รีแอคท์เทพ",
  },
  {
    id: 6,
    title: "TypeScript 5.5: อัปเดตล่าสุดสำหรับนักพัฒนา",
    excerpt: "TypeScript 5.5 ปรับปรุง Type Safety และประสิทธิภาพที่ดียิ่งขึ้น...",
    content: `
## 📘 TypeScript 5.5: ก้าวต่อไปของ Type Safety
TypeScript 5.5 เป็นเวอร์ชันล่าสุดที่นำเสนอฟีเจอร์ใหม่ที่ช่วยปรับปรุงการพัฒนาโค้ด

## 🔍 ฟีเจอร์เด่นใน TypeScript 5.5
- 🔄 **Recursive Type Aliases**: รองรับ type recursion ได้ลึกกว่าเดิม
- 🧠 **Smarter Type Inference**: อนุมานประเภทได้แม่นยำกว่าเดิม
- ⚡ **Faster Compiler**: ความเร็วในการคอมไพล์เพิ่มขึ้น 25%

### 📌 ตัวอย่างการใช้ Recursive Type Aliases
\`\`\`typescript
// สร้าง type ที่อธิบายโครงสร้างต้นไม้ได้ไม่จำกัดความลึก
type TreeNode<T> = {
  value: T;
  children: TreeNode<T>[];
};

// ตัวอย่างการใช้งาน
const fileSystem: TreeNode<string> = {
  value: "root",
  children: [
    {
      value: "home",
      children: [
        {
          value: "user",
          children: []
        }
      ]
    },
    {
      value: "var",
      children: []
    }
  ]
};

// Discriminated Unions ที่ดีขึ้น
type Result<T> =
  | { status: "success"; data: T }
  | { status: "error"; error: Error }
  | { status: "loading" };

function handleResult<T>(result: Result<T>) {
  if (result.status === "success") {
    // TypeScript รู้ว่า result.data มีประเภท T
    return result.data;
  } else if (result.status === "error") {
    // TypeScript รู้ว่า result.error มีประเภท Error
    throw result.error;
  }
  // TypeScript รู้ว่า result มีประเภท { status: "loading" }
  return null;
}
\`\`\`

TypeScript 5.5 ทำให้การพัฒนาแอปพลิเคชันที่มีความซับซ้อนสูงปลอดภัยและมีประสิทธิภาพมากขึ้น!
`,
    date: "15 กุมภาพันธ์ 2025",
    category: "TypeScript",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    tags: ["TypeScript", "JavaScript", "Development"],
    author: "ธนกร ไทป์สคริปต์เทพ",
  }
];

export async function generateStaticParams() {
  // สร้าง params สำหรับทุก ๆ post
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function BlogDetail({ params }: { params: { id: string } }) {
  const postIndex = posts.findIndex((p) => p.id.toString() === params.id);
  const post = posts[postIndex];

  if (!post) return notFound();

  const previousPost = posts[postIndex - 1] || null;
  const nextPost = posts[postIndex + 1] || null;

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-4 text-gray-800">{post.title}</h1>
      <p className="text-gray-600 mb-4 italic">{post.excerpt}</p>
      <div className="text-gray-500 mb-6">
        <span>📅 {post.date} | </span>
        <span>📂 {post.category} | </span>
        <span>✍️ {post.author}</span>
      </div>

      {/* Image */}
      <img src={post.image} alt={post.title} className="w-full rounded-lg shadow-md mb-8" />

      {/* Tags */}
      <div className="mb-6">
        <strong>🏷️ แท็ก:</strong>
        {post.tags.map((tag, index) => (
          <span key={index} className="ml-2 text-blue-500">#{tag}</span>
        ))}
      </div>

      {/* Content */}
      <article className="prose prose-lg max-w-none text-gray-700">
        <ReactMarkdown
          children={post.content}
          remarkPlugins={[remarkGfm]}
          components={{
            code({ inline, className, children, ...props }: { inline?: boolean; className?: string; children?: React.ReactNode }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter style={dracula} language={match[1]} PreTag="div" {...props}>
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">{children}</code>
              );
            },
          }}
        />
      </article>

      {/* Navigation */}
      <div className="flex justify-between mt-10">
        <Link href="/blog">
          <Button size="lg" variant="bordered" color="danger">⬅️ กลับไปที่บล็อก</Button>
        </Link>
        <div className="flex gap-4">
          {previousPost && (
            <Link href={`/blog/${previousPost.id}`}>
              <Button variant="flat" color="secondary">⬅️ {previousPost.title}</Button>
            </Link>
          )}
          {nextPost && (
            <Link href={`/blog/${nextPost.id}`}>
              <Button variant="flat" color="secondary">{nextPost.title} ➡️</Button>
            </Link>
          )}
        </div>
      </div>

      {/* Related Articles */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">📖 บทความที่เกี่ยวข้อง</h3>
        <ul className="list-disc list-inside text-gray-600">
          {posts
            .filter((p) => p.id !== post.id)
            .slice(0, 3)
            .map((related) => (
              <li key={related.id}>
                <Link href={`/blog/${related.id}`} className="text-blue-500 hover:underline">
                  {related.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}