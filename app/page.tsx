import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Sword, Trophy, MapPin, Clock, Calendar, Star, Phone, Mail, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TomskFencingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-blue-100 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sword className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-blue-900">Томское фехтование</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                О клубе
              </Link>
              <Link href="#trainers" className="text-gray-700 hover:text-blue-600 transition-colors">
                Тренеры
              </Link>
              <Link href="#schedule" className="text-gray-700 hover:text-blue-600 transition-colors">
                Расписание
              </Link>
              <Link href="#news" className="text-gray-700 hover:text-blue-600 transition-colors">
                Новости
              </Link>
              <Link href="#reviews" className="text-gray-700 hover:text-blue-600 transition-colors">
                Отзывы
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Контакты
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Sword className="h-24 w-24 text-blue-600" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <Star className="h-3 w-3 text-white fill-current" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">Томское фехтование</h1>
            <p className="text-2xl md:text-3xl text-blue-700 mb-8 font-medium">Искусство клинка в сердце Сибири</p>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Откройте для себя благородное искусство фехтования в Томской области. Профессиональные тренировки для всех
              возрастов в современных залах.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Записаться на пробную тренировку
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 bg-transparent"
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">О нашем клубе</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Развиваем фехтование в Томской области с 2010 года
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">История фехтования в регионе</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Фехтование в Томской области начало активно развиваться в начале 2000-х годов. Наш клуб был основан
                  группой энтузиастов, влюбленных в это благородное искусство.
                </p>
                <p>
                  За годы работы мы подготовили более 200 спортсменов, многие из которых стали призерами региональных и
                  всероссийских соревнований. Наши воспитанники успешно выступают на турнирах различного уровня.
                </p>
                <p>
                  Сегодня клуб объединяет фехтовальщиков всех возрастов — от детей 6 лет до взрослых спортсменов. Мы
                  развиваем все три вида оружия: рапира, шпага и сабля.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">13+</div>
                  <div className="text-sm text-gray-600">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">200+</div>
                  <div className="text-sm text-gray-600">учеников</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">наград</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Тренировка по фехтованию"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <Image
                src="/placeholder.svg?height=250&width=500"
                alt="Соревнования по фехтованию"
                width={500}
                height={250}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Наши тренеры</h2>
            <p className="text-lg text-gray-600">Опытные наставники с высокими спортивными достижениями</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Александр Петров"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle className="text-blue-900">Александр Петров</CardTitle>
                <CardDescription>Главный тренер по рапире</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    <Trophy className="h-3 w-3 mr-1" />
                    Мастер спорта России
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Стаж: 15 лет
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Призер чемпионата России, подготовил более 50 спортсменов-разрядников. Специализируется на работе с
                  начинающими и юными фехтовальщиками.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Елена Смирнова"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle className="text-blue-900">Елена Смирнова</CardTitle>
                <CardDescription>Тренер по шпаге и сабле</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    <Trophy className="h-3 w-3 mr-1" />
                    КМС по фехтованию
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Стаж: 12 лет
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Многократная чемпионка Сибирского федерального округа. Ведет группы взрослых спортсменов и подростков.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Дмитрий Козлов"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle className="text-blue-900">Дмитрий Козлов</CardTitle>
                <CardDescription>Тренер детских групп</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    <Trophy className="h-3 w-3 mr-1" />
                    1-й разряд
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Стаж: 8 лет
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Специалист по работе с детьми от 6 лет. Использует игровые методики для обучения основам фехтования.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Расписание и адреса</h2>
            <p className="text-lg text-gray-600">Тренировки проходят в современных залах Томска и Северска</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-900">
                  <MapPin className="h-5 w-5 mr-2" />
                  Зал в Томске
                </CardTitle>
                <CardDescription>ул. Ленина, 36, спорткомплекс "Динамо"</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <div className="font-medium text-blue-900">Детские группы (6-12 лет)</div>
                      <div className="text-sm text-gray-600">Понедельник, Среда, Пятница</div>
                    </div>
                    <div className="text-blue-600 font-medium">16:00-17:30</div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <div className="font-medium text-blue-900">Подростки (13-17 лет)</div>
                      <div className="text-sm text-gray-600">Вторник, Четверг, Суббота</div>
                    </div>
                    <div className="text-blue-600 font-medium">17:30-19:00</div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <div className="font-medium text-blue-900">Взрослые (18+)</div>
                      <div className="text-sm text-gray-600">Понедельник, Среда, Пятница</div>
                    </div>
                    <div className="text-blue-600 font-medium">19:00-20:30</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-900">
                  <MapPin className="h-5 w-5 mr-2" />
                  Зал в Северске
                </CardTitle>
                <CardDescription>ул. Калинина, 15, ДС "Олимп"</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <div className="font-medium text-blue-900">Детские группы (6-12 лет)</div>
                      <div className="text-sm text-gray-600">Вторник, Четверг</div>
                    </div>
                    <div className="text-blue-600 font-medium">16:30-18:00</div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <div className="font-medium text-blue-900">Подростки и взрослые</div>
                      <div className="text-sm text-gray-600">Суббота, Воскресенье</div>
                    </div>
                    <div className="text-blue-600 font-medium">10:00-12:00</div>
                  </div>

                  <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="text-sm text-yellow-800">
                      <Clock className="h-4 w-4 inline mr-1" />
                      Индивидуальные тренировки по договоренности
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Новости и мероприятия</h2>
            <p className="text-lg text-gray-600">Следите за нашими достижениями и предстоящими событиями</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Турнир по фехтованию"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <Badge className="w-fit bg-blue-600">
                  <Calendar className="h-3 w-3 mr-1" />
                  15 марта 2024
                </Badge>
                <CardTitle className="text-blue-900">Открытый турнир "Сибирский клинок"</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Приглашаем всех желающих принять участие в ежегодном турнире. Соревнования пройдут по всем видам
                  оружия в различных возрастных категориях.
                </p>
                <Button variant="outline" className="mt-4 border-blue-600 text-blue-600 bg-transparent">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Мастер-класс"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <Badge className="w-fit bg-green-600">
                  <Calendar className="h-3 w-3 mr-1" />
                  22 февраля 2024
                </Badge>
                <CardTitle className="text-blue-900">Мастер-класс от чемпиона России</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Состоялся уникальный мастер-класс с участием чемпиона России по фехтованию. Более 40 спортсменов
                  получили ценные советы от профессионала.
                </p>
                <Button variant="outline" className="mt-4 border-blue-600 text-blue-600 bg-transparent">
                  Фотоотчет
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Новое оборудование"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <Badge className="w-fit bg-purple-600">
                  <Calendar className="h-3 w-3 mr-1" />
                  10 февраля 2024
                </Badge>
                <CardTitle className="text-blue-900">Обновление оборудования</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Клуб получил новое современное оборудование: электронные дорожки, маски с улучшенной вентиляцией и
                  профессиональное оружие.
                </p>
                <Button variant="outline" className="mt-4 border-blue-600 text-blue-600 bg-transparent">
                  Узнать больше
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Отзывы учеников и родителей</h2>
            <p className="text-lg text-gray-600">Что говорят о нас наши спортсмены и их семьи</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-blue-50 border-blue-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Анна Иванова"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-blue-900">Анна Иванова</CardTitle>
                    <CardDescription>Мама ученика, 8 лет</CardDescription>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  "Сын занимается уже два года. Очень довольны подходом тренеров - они находят индивидуальный подход к
                  каждому ребенку. Заметили, как улучшилась координация и дисциплина."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Михаил Петров"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-blue-900">Михаил Петров</CardTitle>
                    <CardDescription>Ученик, 16 лет</CardDescription>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  "Фехтование изменило мою жизнь! Стал более уверенным в себе, научился быстро принимать решения. Уже
                  выиграл несколько турниров благодаря отличной подготовке тренеров."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Елена Сидорова"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-blue-900">Елена Сидорова</CardTitle>
                    <CardDescription>Взрослая ученица</CardDescription>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  "Начала заниматься в 35 лет и ни разу не пожалела! Отличная физическая нагрузка, интересные
                  тренировки, дружелюбная атмосфера. Тренеры терпеливо объясняют все нюансы."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Контакты и запись</h2>
            <p className="text-lg text-gray-600">Свяжитесь с нами для записи на пробную тренировку</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Контактная информация</h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-blue-900">Телефон</div>
                    <div className="text-gray-600">+7 (3822) 123-456</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-blue-900">Email</div>
                    <div className="text-gray-600">info@tomsk-fencing.ru</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-blue-900">Основной зал</div>
                    <div className="text-gray-600">г. Томск, ул. Ленина, 36</div>
                  </div>
                </div>
              </div>

              <h4 className="text-lg font-bold text-blue-900 mb-4">Мы в социальных сетях</h4>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  VKontakte
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Telegram
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Instagram
                </Button>
              </div>
            </div>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900">Записаться на пробную тренировку</CardTitle>
                <CardDescription>Заполните форму, и мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">Имя</label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">Возраст</label>
                      <Input placeholder="Возраст" type="number" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Телефон</label>
                    <Input placeholder="+7 (___) ___-__-__" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
                    <Input placeholder="your@email.com" type="email" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Предпочтительный зал</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option>Томск (ул. Ленина, 36)</option>
                      <option>Северск (ул. Калинина, 15)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Комментарий</label>
                    <Textarea placeholder="Дополнительная информация или вопросы" />
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Отправить заявку</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sword className="h-6 w-6" />
                <span className="text-xl font-bold">Томское фехтование</span>
              </div>
              <p className="text-blue-200">
                Искусство клинка в сердце Сибири. Развиваем фехтование в Томской области с 2010 года.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="space-y-2 text-blue-200">
                <Link href="#about" className="block hover:text-white transition-colors">
                  О клубе
                </Link>
                <Link href="#trainers" className="block hover:text-white transition-colors">
                  Тренеры
                </Link>
                <Link href="#schedule" className="block hover:text-white transition-colors">
                  Расписание
                </Link>
                <Link href="#news" className="block hover:text-white transition-colors">
                  Новости
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-blue-200">
                <div>+7 (3822) 123-456</div>
                <div>info@tomsk-fencing.ru</div>
                <div>г. Томск, ул. Ленина, 36</div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Режим работы</h4>
              <div className="space-y-2 text-blue-200">
                <div>Пн-Пт: 16:00-20:30</div>
                <div>Сб-Вс: 10:00-18:00</div>
                <div className="text-sm">Индивидуальные тренировки по договоренности</div>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2024 Томское фехтование. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
