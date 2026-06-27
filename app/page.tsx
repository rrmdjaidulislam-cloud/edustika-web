export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-green-700">Edustika</h1>

          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a>মূল পাতা</a>
            <a>প্যারাগ্রাফ</a>
            <a>চিঠি</a>
            <a>দরখাস্ত</a>
            <a>রচনা</a>
          </div>

          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-lg border border-green-700 text-green-700">
              লগ ইন
            </button>
            <button className="px-4 py-2 rounded-lg bg-green-700 text-white">
              রেজিস্টার
            </button>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-green-700 font-semibold mb-3">
            Smart Learning Management System
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            Edustika LMS <br />
            শিক্ষার্থীদের জন্য স্মার্ট শিক্ষা প্ল্যাটফর্ম
          </h2>

          <p className="text-gray-700 text-lg mb-7">
            এখানে শিক্ষার্থী, শিক্ষক এবং এডমিন আলাদা ড্যাশবোর্ডের মাধ্যমে
            কোর্স, লেসন, কুইজ, রেজাল্ট এবং পোস্ট ম্যানেজ করতে পারবে।
          </p>

          <div className="flex gap-4">
            <button className="bg-green-700 text-white px-6 py-3 rounded-xl font-semibold">
              শুরু করুন
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-xl font-semibold">
              কোর্স দেখুন
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6">
          <div className="bg-green-700 text-white rounded-2xl p-5 mb-4">
            <h3 className="text-2xl font-bold">Admin Panel</h3>
            <p className="text-green-100">
              সম্পূর্ণ ওয়েবসাইট এখান থেকে পরিচালনা করা যাবে
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              "MS Word Style Post",
              "Course Manage",
              "Student Manage",
              "Teacher Manage",
              "Quiz System",
              "Result Publish",
            ].map((item) => (
              <div
                key={item}
                className="bg-gray-100 rounded-xl p-4 font-semibold text-gray-800"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-14">
        <h2 className="text-3xl font-bold mb-6">ওয়েবসাইট সেকশন</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "প্যারাগ্রাফ",
            "চিঠি / দরখাস্ত",
            "রচনা",
            "রেজাল্ট",
            "লাইভ ক্লাস",
            "কুইজ",
          ].map((title) => (
            <div key={title} className="bg-white rounded-2xl shadow p-6">
              <div className="h-32 bg-gray-100 rounded-xl mb-4"></div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-600">
                এই সেকশনের কন্টেন্ট এডমিন প্যানেল থেকে পোস্ট করা যাবে।
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}