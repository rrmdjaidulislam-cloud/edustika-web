import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-green-700">
            Edustika
          </h1>

          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#">মূল পাতা</a>
            <a href="#">প্যারাগ্রাফ</a>
            <a href="#">চিঠি</a>
            <a href="#">দরখাস্ত</a>
            <a href="#">রচনা</a>
          </div>

          <div className="flex gap-3">
            <Link
              href="/login"
              className="px-4 py-2 rounded-lg border border-green-700 text-green-700 hover:bg-green-50"
            >
              লগ ইন
            </Link>

            <Link
              href="/register"
              className="px-4 py-2 rounded-lg bg-green-700 text-white hover:bg-green-800"
            >
              রেজিস্টার
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-green-700 font-semibold mb-3">
            Smart Learning Management System
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
            Edustika LMS
            <br />
            শিক্ষার্থীদের জন্য স্মার্ট শিক্ষা প্ল্যাটফর্ম
          </h2>

          <p className="text-gray-700 text-lg mb-8">
            এখানে শিক্ষার্থী, শিক্ষক এবং প্রশাসক আলাদা ড্যাশবোর্ডের মাধ্যমে
            কোর্স, লেসন, কুইজ, ফলাফল এবং শিক্ষামূলক কনটেন্ট পরিচালনা করতে
            পারবেন।
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link
              href="/register"
              className="bg-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-800"
            >
              শুরু করুন
            </Link>

            <Link
              href="/courses"
              className="border border-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100"
            >
              কোর্স দেখুন
            </Link>
          </div>
        </div>
      </section>

      {/* Website Sections */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold mb-8">
          ওয়েবসাইট সেকশন
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "প্যারাগ্রাফ",
            "চিঠি / দরখাস্ত",
            "রচনা",
            "রেজাল্ট",
            "লাইভ ক্লাস",
            "কুইজ",
          ].map((title) => (
            <div
              key={title}
              className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
            >
              <div className="h-32 bg-gray-100 rounded-xl mb-4"></div>

              <h3 className="text-xl font-bold mb-2">
                {title}
              </h3>

              <p className="text-gray-600">
                এই সেকশনের কনটেন্ট এডমিন প্যানেল থেকে প্রকাশ করা হবে।
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}