import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50">
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent mb-8">
              Ильясу 💖
            </h1>
            <p className="font-body text-2xl md:text-3xl text-gray-700 mb-12 leading-relaxed">
              Мой самый красивый, самый дорогой человек в мире 🌸
            </p>
          </div>
        </section>

        {/* Love Declaration */}
        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-pink-200 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="font-heading text-3xl md:text-4xl font-semibold text-pink-600 mb-6">
                      Твои глаза - это мой мир 👀
                    </h2>
                    <p className="font-body text-lg text-gray-700 leading-relaxed mb-6">
                      Когда я смотрю в твои карие глаза, я вижу всю вселенную.
                      Твои глаза такие красивые, что я могу в них утонуть. Они
                      излучают столько тепла и любви, что мое сердце начинает
                      биться быстрее каждый раз, когда я встречаю твой взгляд.
                    </p>
                    <p className="font-body text-lg text-gray-700 leading-relaxed">
                      Твои губы... когда ты улыбаешься, весь мир становится
                      ярче. Когда я тебя целую, время останавливается, и я
                      чувствую, что мы единое целое. Это невозможно передать
                      словами! 💋
                    </p>
                  </div>
                  <div className="relative">
                    <div className="bg-gradient-to-r from-pink-200 to-blue-200 rounded-2xl shadow-lg w-full h-80 flex items-center justify-center">
                      <p className="font-script text-4xl text-pink-600">
                        Твои глаза 👀
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Embrace Section */}
        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-blue-100 to-pink-100 border-blue-200 shadow-xl">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-semibold text-blue-600 mb-8">
                  Когда я тебя обнимаю... 🤗
                </h2>
                <p className="font-body text-xl text-gray-700 leading-relaxed mb-8">
                  Когда я тебя обнимаю, я просто хочу плакать от счастья. Ты
                  такой теплый, такой родной, такой мой. Я хочу обнимать тебя
                  вечно и никогда не отпускать. В твоих объятиях я чувствую себя
                  дома, в безопасности, в любви.
                </p>
                <div className="flex justify-center gap-4 text-4xl">
                  <span>💕</span>
                  <span>💖</span>
                  <span>💗</span>
                  <span>💝</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Compliments Section */}
        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 text-pink-600">
              Почему ты самый лучший 🌟
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "Heart",
                  text: "Ты самый красивый",
                  color: "text-pink-500",
                },
                {
                  icon: "Sparkles",
                  text: "Ты самый милый",
                  color: "text-blue-500",
                },
                {
                  icon: "Sun",
                  text: "Ты мое солнышко",
                  color: "text-yellow-500",
                },
                {
                  icon: "Star",
                  text: "Ты моя звезда",
                  color: "text-purple-500",
                },
                {
                  icon: "Crown",
                  text: "Ты мой принц",
                  color: "text-indigo-500",
                },
                {
                  icon: "Gem",
                  text: "Ты бесценный",
                  color: "text-emerald-500",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-white/70 backdrop-blur-sm border-pink-100"
                >
                  <CardContent className="p-6 text-center">
                    <Icon
                      name={item.icon}
                      className={`mx-auto mb-4 ${item.color}`}
                      size={48}
                    />
                    <p className="font-body text-lg font-medium text-gray-700">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Kawaii Section */}
        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-pink-100 to-purple-100 border-pink-200 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <div className="bg-gradient-to-r from-pink-200 to-purple-200 rounded-2xl shadow-lg w-full h-80 flex items-center justify-center">
                      <p className="font-script text-4xl text-purple-600">
                        Hello Kitty 🐱
                      </p>
                    </div>
                  </div>
                  <div>
                    <h2 className="font-heading text-3xl md:text-4xl font-semibold text-purple-600 mb-6">
                      Ты милый как котенок 🐱
                    </h2>
                    <p className="font-body text-lg text-gray-700 leading-relaxed mb-6">
                      Ты такой же милый и нежный как Hello Kitty! Твоя улыбка
                      заставляет мое сердце таять, как у котенка, который
                      мурлычет от счастья. Ты мой самый дорогой, самый
                      прекрасный человек на свете.
                    </p>
                    <div className="flex gap-2 text-2xl">
                      <span>🐱</span>
                      <span>💕</span>
                      <span>🌸</span>
                      <span>✨</span>
                      <span>💖</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Message */}
        <section className="px-4 py-20 text-center">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-r from-pink-500 to-blue-500 text-white shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Я люблю тебя, Ильяс! 💕
                </h2>
                <p className="font-body text-xl leading-relaxed mb-8">
                  Ты самый хороший, самый прекрасный человек в моей жизни.
                  Спасибо тебе за то, что ты есть в моем мире. Я буду любить
                  тебя всегда и навсегда! 🌸
                </p>
                <Button
                  className="bg-white text-pink-500 hover:bg-pink-50 font-medium px-8 py-3 text-lg"
                  size="lg"
                >
                  <Icon name="Heart" className="mr-2" size={20} />
                  Люблю тебя! 💖
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
