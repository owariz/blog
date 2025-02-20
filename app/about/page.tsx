import { Button } from "@heroui/button";
import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">เกี่ยวกับเรา</h1>

      {/* About Content */}
      <section className="mb-12">
        <p className="text-lg text-gray-700 mb-4">
          ยินดีต้อนรับสู่บล็อกของเรา! ที่นี่เราจะแบ่งปันข้อมูล, เคล็ดลับ, และเทคนิคต่าง ๆ เกี่ยวกับการพัฒนาเว็บไซต์และเทคโนโลยีใหม่ๆ ที่จะช่วยให้คุณพัฒนาทักษะด้านการเขียนโปรแกรมและการออกแบบ UI/UX ได้อย่างมืออาชีพ.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          เรามีทีมงานที่มีความเชี่ยวชาญในหลาย ๆ ด้านของการพัฒนาเว็บไซต์ รวมถึง JavaScript, React, Next.js, CSS, และอื่น ๆ ที่จะช่วยให้คุณตามทันเทคโนโลยีที่ทันสมัย.
        </p>
      </section>

      {/* Team or Author Info */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">ผู้เขียน</h2>
        <p className="text-lg text-gray-700 mb-4">
          บล็อกนี้มีการเขียนโดยผู้เชี่ยวชาญ 3 ท่านที่มีความเชี่ยวชาญในการพัฒนาเว็บและการออกแบบ UI/UX:
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-700 mb-4">
          <li><span className="font-semibold">Panitthapwon</span>: นักพัฒนาเว็บและผู้สร้างประสบการณ์ผู้ใช้งาน (UI/UX) ที่รับผิดชอบด้านการพัฒนาและออกแบบบล็อกนี้</li>
          <li><span className="font-semibold">เทวา อรุณศิริรักษ์</span>: ผู้เชี่ยวชาญด้าน React และ JavaScript ที่ช่วยเขียนเนื้อหาการพัฒนาเว็บ</li>
          <li><span className="font-semibold">วสุรัตน์ จันทะกล</span>: นักออกแบบ UI ที่มีประสบการณ์ในการสร้างส่วนติดต่อผู้ใช้ที่สวยงามและใช้งานได้ง่าย</li>
        </ul>
      </section>

      {/* Developer Info */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">เกี่ยวกับ Panitthapwon (นักพัฒนาเว็บ)</h2>
        <p className="text-lg text-gray-700 mb-4">
          <span className="font-semibold">Panitthapwon</span> เป็นนักพัฒนาซอฟต์แวร์ที่มีความหลงใหลในการพัฒนาเว็บแอปพลิเคชันและการออกแบบ UI/UX เขามีประสบการณ์การใช้เครื่องมืออย่าง React, Next.js, JavaScript, TypeScript, และ Tailwind CSS เพื่อสร้างโปรเจ็กต์ที่มีประสิทธิภาพสูง.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          เขาเชื่อในการเรียนรู้และพัฒนาอย่างต่อเนื่องเพื่อให้สามารถนำเสนอเทคโนโลยีที่ดีที่สุดให้กับผู้ใช้ และเขามักจะนำเสนอข้อมูลเกี่ยวกับเทคโนโลยีล่าสุดและเครื่องมือที่ใช้ในการพัฒนาเว็บ
        </p>
      </section>

      {/* Contact Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">ติดต่อเรา</h2>
        <p className="text-lg text-gray-700 mb-4">
          หากคุณมีคำถามหรือข้อเสนอแนะเกี่ยวกับเนื้อหาบล็อกของเรา คุณสามารถติดต่อเราได้ทางอีเมล <span className="font-semibold">panitthapwon@gmail.com</span>.
        </p>
      </section>

      {/* Call to Action */}
      <div className="flex justify-center mt-8">
        <Link href="/blog">
          <Button size="lg" variant="solid" color="primary">
            อ่านบล็อกของเรา
          </Button>
        </Link>
      </div>
    </div>
  );
}
