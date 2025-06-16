

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Depoimentos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Otávio",
              text: "A feira é sensacional! Aprendo muito e adoro a dinâmica entre as equipes.",
            },
            {
              name: "Francisco Kauan",
              text: "É uma experiência única e espero aproveitar bastante.",
            },
            {
              name: "Vitória Suani",
              text: "Vou adorar prestigiar meus colegas.",
            },
          ].map((depoimento, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
              <p className="text-gray-700 dark:text-gray-300 mb-4">&ldquo;{depoimento.text}&rdquo;</p>
              <p className="font-semibold text-gray-900 dark:text-white">{depoimento.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
