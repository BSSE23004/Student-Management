const features = [
  {
    icon: "📊",
    title: "Analytics Dashboard",
    desc: "Visualize student performance in real-time.",
  },
  {
    icon: "📝",
    title: "Attendance Tracking",
    desc: "Automate and monitor attendance seamlessly.",
  },
  {
    icon: "🔔",
    title: "Notifications",
    desc: "Instant alerts for grades, events, and more.",
  },
];

const Features = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        Key Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f) => (
          <div
            key={f.title}
            className="p-6 border rounded-lg hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
