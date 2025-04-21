import { useState } from "react";

export default function App() {
  const [pesan, setPesan] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pesan.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans p-6">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold text-yellow-400 mb-2">TRIOL</h1>
        <p className="text-lg italic text-gray-300">Sora Nu Teu Bisa Lenyepan</p>
      </header>

      <main className="max-w-3xl mx-auto space-y-10">
        <section className="text-center">
          <h2 className="text-2xl mb-4">🎵 Lagu Anyar</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-64 rounded-lg"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="TRIOL Lagu Anyar"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section>
          <h2 className="text-xl mb-2">🖋️ Cerita di Balik Lagu</h2>
          <p className="text-gray-300">
            Lagu ieu lahir tina rasa nu ngagedur, waktu-waktu nu leungit, jeung angin nu nyelap di jero ati. Sagalana teu bisa diucapkeun ku kecap, ngan bisa dieusian ku sora TRIOL.
          </p>
        </section>

        <section>
          <h2 className="text-xl mb-2">📣 Surak Ti Fans</h2>
          {submitted ? (
            <p className="text-green-400">Hatur nuhun kana pesenna! 💌</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
                placeholder="Tulis kesan anjeun pikeun TRIOL..."
                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded"
              >
                Kirim
              </button>
            </form>
          )}
        </section>
      </main>

      <footer className="text-center text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} TRIOL Official. Sadaya Hak Ciptagang dijaga.
      </footer>
    </div>
  );
}
