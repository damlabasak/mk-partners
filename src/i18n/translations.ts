export type Language = 'tr' | 'en' | 'it';

export interface Translations {
  nav: {
    home: string;
    about: string;
    practices: string;
    team: string;
    contact: string;
    career: string;
    getAdvice: string;
  };
  hero: {
    subtitle: string;
    titleLine1: string;
    titleGold: string;
    description: string;
    practicesBtn: string;
    contactBtn: string;
    discover: string;
  };
  about: {
    subtitle: string;
    title: string;
    heading: string;
    p1: string;
    p2: string;
    stats: {
      expValue: string;
      expLabel: string;
      servicesValue: string;
      servicesLabel: string;
    };
    values: {
      title1: string;
      desc1: string;
      title2: string;
      desc2: string;
      title3: string;
      desc3: string;
      title4: string;
      desc4: string;
    };
  };
  practices: {
    subtitle: string;
    title: string;
    readMore: string;
    ourServices: string;
    getAdviceModal: string;
    items: {
      id: string;
      title: string;
      shortDesc: string;
      detailedDesc: string;
      subServices: string[];
    }[];
  };
  team: {
    subtitle: string;
    title: string;
    viewBio: string;
    sendEmail: string;
    specialtiesTitle: string;
    aboutTitle: string;
    educationTitle: string;
    languagesTitle: string;
    members: {
      name: string;
      title: string;
      specialty: string;
      bio: string;
      education: string[];
      languages: string[];
    }[];
  };
  career: {
    subtitle: string;
    title: string;
    infoTitle: string;
    infoDesc: string;
    positions: {
      internTitle: string;
      internBadge: string;
      internDesc: string;
      internFeature1: string;
      internFeature2: string;
      lawyerTitle: string;
      lawyerBadge: string;
      lawyerDesc: string;
      lawyerFeature1: string;
      lawyerFeature2: string;
      summerTitle: string;
      summerBadge: string;
      summerDesc: string;
    };
    cultureTitle: string;
    cultureText: string;
    formTitle: string;
    formSubtitle: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    positionLabel: string;
    positionOptions: {
      intern: string;
      lawyer: string;
      summer: string;
      other: string;
    };
    eduLabel: string;
    eduPlaceholder: string;
    langLabel: string;
    langPlaceholder: string;
    cvLabel: string;
    cvDragText: string;
    cvBrowseText: string;
    cvHint: string;
    coverLetterLabel: string;
    coverLetterPlaceholder: string;
    kvkkPrefix: string;
    kvkkBtnText: string;
    kvkkSuffix: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successDesc: string;
    newAppBtn: string;
    kvkkModalTitle: string;
  };
  contact: {
    subtitle: string;
    title: string;
    infoTitle: string;
    infoDesc: string;
    phoneTitle: string;
    emailTitle: string;
    whatsappBtn: string;
    formTitle: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    subjectLabel: string;
    subjectOptions: {
      general: string;
      corporate: string;
      ma: string;
      litigation: string;
      employment: string;
      kvkk: string;
    };
    messageLabel: string;
    messagePlaceholder: string;
    kvkkPrefix: string;
    kvkkBtnText: string;
    kvkkSuffix: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successDesc: string;
    newMessageBtn: string;
    kvkkModalTitle: string;
  };
  footer: {
    brandText: string;
    menuTitle: string;
    contactTitle: string;
    legalTitle: string;
    disclaimerText: string;
    copyright: string;
    scrollTop: string;
  };
}

export const translations: Record<Language, Translations> = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımızda',
      practices: 'Faaliyet Alanları',
      team: 'Ekibimiz',
      contact: 'İletişim',
      career: 'Kariyer',
      getAdvice: 'Danışmanlık Al',
    },
    hero: {
      subtitle: 'MK Partners Legal Consultancy',
      titleLine1: 'Stratejik Hukuk',
      titleGold: 'Kalıcı Güven',
      description:
        'MK Partners olarak Türkiye ve Avrupa’da kişi ve şirketlere dava takibi, uyuşmazlık çözümü ve hukuki danışmanlık alanlarında yüksek standartlarda hizmet sunuyoruz.',
      practicesBtn: 'Faaliyet Alanlarımız',
      contactBtn: 'Bize Ulaşın',
      discover: 'Keşfet',
    },
    about: {
      subtitle: 'Hakkımızda & Değerlerimiz',
      title: 'Hakkımızda',
      heading: 'Hukukta Güvenilir Ortağınız',
      p1: 'MK Partners Legal Consultancy, kurulduğu günden bu yana hukukun üstünlüğü ve adalet prensiplerine bağlı kalarak, müvekkillerine yüksek kalitede avukatlık ve hukuki danışmanlık hizmetleri sunmaktadır.',
      p2: 'Dinamik, deneyimli ve kendi alanlarında uzmanlaşmış ekibimizle; şirketler hukuku, iş hukuku, icra süreçleri, fikri mülkiyet hukuku, ceza hukuku başta olmak üzere hukukun her alanında güvenilir çözümler üretiyoruz. Müvekkillerimizin hedeflerini kendi hedeflerimiz olarak görüyor ve hukuki süreçleri en şeffaf şekilde yönetiyoruz.',
      stats: {
        expValue: '10+',
        expLabel: 'Yıllık Deneyim',
        servicesValue: '20+',
        servicesLabel: 'Hizmet Alanı',
      },
      values: {
        title1: 'Önleyici Avukatlık',
        desc1:
          'Uyuşmazlıklar henüz ortaya çıkmadan olası hukuki riskleri tespit ediyor; proaktif danışmanlık ve güçlü sözleşme yapılarıyla müvekkillerimizi zaman ve maliyet kayıplarından koruyoruz.',
        title2: 'Tam Uyum',
        desc2:
          'Sürekli değişen mevzuata tam uyum sağlıyor; müvekkillerimizin yasal gereklilikleri eksiksiz yerine getirerek faaliyetlerini güvenle sürdürmelerini destekliyoruz.',
        title3: 'Çözüm Odaklılık',
        desc3:
          'Sadece riskleri belirlemekle kalmıyor, müvekkillerimizin ticari ve kişisel hedeflerine ulaşmalarını sağlayacak pratik çözümler sunuyoruz.',
        title4: 'Müvekkil Odaklı Yaklaşım',
        desc4:
          'Her müvekkilimizin ihtiyaçlarını benzersiz kabul ediyor, kişiselleştirilmiş bir hukuki danışmanlık hizmeti sağlıyoruz.',
      },
    },
    practices: {
      subtitle: 'Uzmanlık Alanlarımız',
      title: 'Faaliyet Alanları',
      readMore: 'Detayları İncele →',
      ourServices: 'Hizmetlerimiz',
      getAdviceModal: 'Bu Alanda Danışmanlık Al',
      items: [
        {
          id: 'corporate',
          title: 'Şirketler & Ticaret Hukuku',
          shortDesc:
            'Şirket kuruluşları, kurumsal yönetim, ticari sözleşmeler ve günlük ticari operasyonların hukuki yönetimi.',
          detailedDesc:
            'MK Partners, yerli ve yabancı şirketlerin ticari yaşamlarındaki tüm süreçlerde hukuki danışmanlık yapmaktadır. Ticari sözleşmelerin hazırlanması, genel kurul ve yönetim kurulu süreçleri, haksız rekabet uyuşmazlıkları ve şirket kurumsal yönetimi konularında profesyonel çözümler sunuyoruz.',
          subServices: [
            'Şirket Kuruluşu ve Ana Sözleşme Hazırlığı',
            'Uluslararası Ticari Sözleşmelerin Müzakeresi',
            'Kurumsal Yönetim ve Uyumluluk (Compliance) Danışmanlığı',
            'Yönetim Kurulu ve Genel Kurul İşlemleri',
            'Haksız Rekabet ve Rekabet Hukuku Uyuşmazlıkları',
          ],
        },
        {
          id: 'criminal',
          title: 'Ceza Hukuku',
          shortDesc:
            'Şüpheli, sanık ve mağdur haklarının soruşturma ve kovuşturma süreçlerinde korunması, ceza davalarında etkin savunma.',
          detailedDesc:
            'Suç teşkil eden eylemlerin soruşturma, kovuşturma ve infaz aşamalarında müvekkillerimize kapsamlı ceza hukuku danışmanlığı sunuyoruz. Şirket ve şahısların karşı karşıya kaldığı her türlü ceza davasında, hukukun üstünlüğü ilkesinden ayrılmadan, müvekkillerimizin haklarını en güçlü şekilde savunuyoruz.',
          subServices: [
            'Ceza Soruşturmalarında Müdafiilik',
            'Şüpheli ve Sanık Haklarının Korunması',
            'Adli Süreçlerde Mağdur ve Katılan Temsili',
            'Ceza Davalarında Savunma ve Temyiz Süreçleri',
            'İnfaz Hukuku Danışmanlığı',
          ],
        },
        {
          id: 'litigation',
          title: 'Uyuşmazlık Çözümü & Dava',
          shortDesc:
            'Ticari davalar, tahkim, idari uyuşmazlıklar ve uyuşmazlık öncesi risk yönetimi.',
          detailedDesc:
            'Ticari ve idari uyuşmazlıkların çözümünde, müvekkillerimizin menfaatlerini korumak adına etkin dava takibi ve tahkim hizmetleri sunuyoruz. Dava öncesi müzakerelerden, icra takibi ve yüksek yargı süreçlerine kadar olan her aşamada titizlikle çalışıyoruz.',
          subServices: [
            'Ticari ve Alacak Davaları',
            'Uluslararası ve Ulusal Tahkim (Arbitration)',
            'İdari İşlemler ve Vergi Davaları',
            'İcra İflas Hukuku ve Borç Yapılandırma',
            'Uyuşmazlık Öncesi Risk Analizi ve Sulh Müzakereleri',
          ],
        },
        {
          id: 'employment',
          title: 'İş ve Sosyal Güvenlik Hukuku',
          shortDesc:
            'İş sözleşmeleri, işçi-işveren ilişkileri, sendikal süreçler ve iş hukuku uyumluluk denetimleri.',
          detailedDesc:
            'Şirketlerin insan kaynakları departmanlarına günlük iş hukuku danışmanlığı veriyor, olası uyuşmazlıkları minimize edecek yapılar kuruyoruz. İş sözleşmelerinin düzenlenmesi, işe iade ve tazminat davalarının takibi, iş sağlığı ve güvenliği mevzuatına uyum süreçlerinde hizmet veriyoruz.',
          subServices: [
            'İş Sözleşmeleri ve Yönetmeliklerinin Hazırlanması',
            'İşe İade, Kıdem ve İhbar Tazminatı Davaları',
            'İş Sağlığı ve Güvenliği (İSG) Hukuki Uyum Denetimi',
            'Toplu İş Sözleşmesi ve Sendikal İlişkiler',
            'Çalışan Devirleri ve İş Akdi Fesih Süreçleri',
          ],
        },
        {
          id: 'realestate',
          title: 'Gayrimenkul & İnşaat Hukuku',
          shortDesc:
            'Gayrimenkul alım-satım projeleri, kentsel dönüşüm, imar ve büyük ölçekli inşaat sözleşmeleri.',
          detailedDesc:
            'Gayrimenkul geliştirme projeleri, kentsel dönüşüm süreçleri, kat karşılığı inşaat sözleşmeleri ve kira ilişkilerinde hukuki destek sağlıyoruz. Tapu tescil, imar planı uyuşmazlıkları ve yabancıların mülk edinme süreçlerini profesyonelce yönetiyoruz.',
          subServices: [
            'Kat Karşılığı İnşaat ve Gelir Paylaşımı Sözleşmeleri',
            'Kira Sözleşmelerinin Hazırlanması ve Tahliye Davaları',
            'Tapu Tescil, İptal ve Ortaklığın Giderilmesi (İzale-i Şüyu) Davaları',
            'Kentsel Dönüşüm Hukuku Danışmanlığı',
            'Gayrimenkul Yatırımları Hukuki Durum Tespiti',
          ],
        },
        {
          id: 'ma',
          title: 'İcra Hukuku',
          shortDesc:
            'Alacak tahsili, icra takibi, borç yapılandırma ve iflas süreçlerinde hukuki danışmanlık.',
          detailedDesc:
            'Alacakların tahsili sürecinde, ticari ve bireysel icra takibi hizmetleri sunuyoruz. İflas ve konkordato davalarında müvekkillerimize destek oluyor, borç yapılandırma müzakereleri yürütüyoruz. İcra hukuku alanında, vekaletname ile her türlü icra işlemini titizlikle yerine getiriyoruz.',
          subServices: [
            'Alacakların Tahsili',
            'İflas ve Konkordato Davaları',
            'Borç Yapılandırma ve Müzakereleri',
          ],
        },
      ],
    },
    team: {
      subtitle: 'Uzman Kadromuz',
      title: 'Ekibimiz',
      viewBio: 'Özgeçmişi İncele →',
      sendEmail: 'E-posta Gönder',
      specialtiesTitle: 'Uzmanlık Alanları',
      aboutTitle: 'Hakkında',
      educationTitle: 'Eğitim',
      languagesTitle: 'Yabancı Diller',
      members: [
        {
          name: 'Av. Özgün Gizem Meteoğlu (LL.M.)',
          title: 'Kurucu Ortak',
          specialty:
            'İş Hukuku, Kurumsal Danışmanlık, İşçi-İşveren Uyuşmazlıkları',
          bio: 'Av. Özgün Gizem Meteoğlu (LL.M.), iş hukuku, kurumsal danışmanlık ve işçi-işveren uyuşmazlıkları alanlarında çalışmalarını sürdürmektedir. Kariyeri boyunca Türkiye’nin önde gelen şirketlerine iş hukuku danışmanlığı sağlamış; dava yönetimi, arabuluculuk, insan kaynakları süreçleri ve hukuki risk yönetimi konularında kapsamlı tecrübe edinmiştir. Bunun yanı sıra fikri mülkiyet hukuku, teknoloji hukuku ve kişisel verilerin korunması (KVKK/GDPR) alanlarında danışmanlık hizmeti vermektedir.',
          education: [
            'Doğuş Üniversitesi Hukuk Fakültesi (Lisans)',
            'Doğuş Üniversitesi Özel Hukuk Yüksek Lisans Programı (Tezli) | Tam Burslu (LL.M.)',
            'Tez: "İş Hukukunda Eşitlik İlkesi ve Ayrımcılık Yasaklarına Aykırılık ve Sonuçları"',
          ],
          languages: ['Türkçe', 'İngilizce'],
        },
        {
          name: 'Av. Osman Mete Meteoğlu',
          title: 'Kurucu Ortak',
          specialty:
            'Şirketler Hukuku, Ticaret Hukuku, Kurumsal Danışmanlık',
          bio: 'Av. Osman Mete Meteoğlu, ticaret hukuku, şirketler hukuku ve kurumsal danışmanlık alanlarında uzmanlaşmıştır. Türkiye’nin önde gelen holdingleri, sanayi kuruluşları ve kurumsal şirketlerine verdiği danışmanlık hizmetleri kapsamında ticari uyuşmazlıklar, kurumsal yönetişim, mevzuata uyum, sermaye piyasası uygulamaları ve sözleşme yönetimi alanlarında önemli deneyim edinmiştir. Uluslararası projelerde aktif görev alarak özellikle Almanya ve İtalya merkezli profesyonel iş ağları oluşturmuştur.',
          education: ['Doğuş Üniversitesi Hukuk Fakültesi (Lisans)'],
          languages: ['Türkçe', 'İngilizce'],
        },
        {
          name: 'Av. Selman Kaya',
          title: 'Kurucu Ortak',
          specialty:
            'İcra ve Ceza Hukuku, Ticari Alacakların Tahsili, Ceza ve İnfaz Hukuku, Aile Hukuku, Gayrimenkul Hukuku',
          bio: 'Av. Selman Kaya, icra ve iflas hukuku, ticari alacakların tahsili, ceza ve infaz hukuku, aile hukuku ile gayrimenkul hukuku alanlarında uzmanlaşmıştır. Kariyeri boyunca Türkiye’nin önde gelen şirketleri, finans kuruluşları ve bankalara icra takipleri, alacak yönetimi ve hukuki risk süreçlerinde danışmanlık vermiş; yüksek hacimli takip dosyalarının planlanması ve yürütülmesinde önemli deneyim kazanmıştır.',
          education: ['Doğuş Üniversitesi Hukuk Fakültesi (Lisans)'],
          languages: ['Türkçe', 'İngilizce'],
        },
        {
          name: 'Av. Leman Melike Gülmez (LL.M.)',
          title: 'Avukat',
          specialty:
            'AB Uyum Süreçleri ve Sözleşmeler, Uluslararası Ticaret Hukuku, Yatırım Danışmanlığı',
          bio: 'Av. Leman Melike Gülmez (LL.M.), Avrupa Birliği hukuku, uluslararası ticaret hukuku ve yatırım danışmanlığı alanlarında çalışmalarını sürdürmektedir. Roma Sapienza Üniversitesi bünyesinde yüksek lisansını tamamladıktan sonra mesleki faaliyetlerini İtalya’da sürdürmüş ve MK Partners’ın Avrupa yapılanmasının geliştirilmesinde aktif rol üstlenmiştir.',
          education: [
            'Gaziantep Üniversitesi Hukuk Fakültesi (Lisans)',
            'Roma Sapienza Üniversitesi - European Studies, Law and Economics (LL.M.)',
          ],
          languages: ['Türkçe', 'İngilizce', 'İtalyanca'],
        },
      ],
    },
    career: {
      subtitle: 'Kariyer Fırsatları',
      title: 'Büyüyen Ekibimize Katılın',
      infoTitle: 'Geleceğin Hukukunu Birlikte Şekillendirelim',
      infoDesc:
        'MK Partners olarak, dinamik, analitik düşünen ve sürekli gelişime inanan meslektaşlarımıza kapılarımızı açıyoruz. İstanbul ve Roma ekseninde yerli ve uluslararası müvekkillerimize sunduğumuz yüksek standartlı hukuki danışmanlık süreçlerinde aktif rol alacak Stajyer Avukat ve Avukat arkadaşları ekibimizde görmekten mutluluk duyuyoruz.',
      positions: {
        internTitle: 'Stajyer Avukat',
        internBadge: 'Yasal Staj',
        internDesc:
          'Yoğun hukuki araştırma, dava dilekçeleri hazırlığı, duruşma süreçlerinin takibi ve müvekkil toplantılarına doğrudan katılım fırsatı sunan nitelikli bir mentörlük programı.',
        internFeature1: 'Stratejik Dava ve İcra Süreçleri',
        internFeature2: 'Yabancı Dil ve Makale Çalışmaları',
        lawyerTitle: 'Avukat / Kıdemli Avukat',
        lawyerBadge: 'Ruhsatlı',
        lawyerDesc:
          'Ticaret, İş, Şirketler Hukuku, M&A ve Uyuşmazlık Çözümü alanlarında bağımsız sorumluluk üstlenecek, müvekkil ilişkilerini yönetecek deneyimli ekip arkadaşları.',
        lawyerFeature1: 'Sözleşme ve Proje Yönetimi',
        lawyerFeature2: 'Uluslararası Müvekkil Portföyü',
        summerTitle: 'Yaz Stajyeri (Öğrenci)',
        summerBadge: 'Yaz Dönemi',
        summerDesc:
          'Hukuk fakültesi 3. veya 4. sınıf öğrencilerine yönelik, büro pratiklerini ve kurumsal hukuk danışmanlığını yakından tanıma imkanı.',
      },
      cultureTitle: 'Ne Arıyoruz?',
      cultureText:
        'Yüksek sorumluluk bilinci, güçlü araştırma yeteneği, akıcı İngilizce (veya ek yabancı dil) bilgisi ve dinamik ekip çalışmasına uyum sağlama arzusu temel kriterlerimizdir.',
      formTitle: 'CV Başvuru Formu',
      formSubtitle:
        'Aşağıdaki formu doldurarak güncel özgeçmişinizi (CV) tarafımıza iletebilirsiniz.',
      fullNameLabel: 'Ad Soyad *',
      fullNamePlaceholder: 'Adınız ve soyadınız',
      emailLabel: 'E-posta *',
      emailPlaceholder: 'adiniz@email.com',
      phoneLabel: 'Telefon Numarası',
      phonePlaceholder: '0555 555 55 55',
      positionLabel: 'Başvurulan Pozisyon *',
      positionOptions: {
        intern: 'Stajyer Avukat',
        lawyer: 'Ruhsatlı Avukat / Kıdemli Avukat',
        summer: 'Yaz Stajyeri (Öğrenci)',
        other: 'Diğer / Destek Ekibi',
      },
      eduLabel: 'Üniversite & Mezuniyet Yılı',
      eduPlaceholder: 'ör. İstanbul Üni. (2024)',
      langLabel: 'Yabancı Diller & Seviye',
      langPlaceholder: 'ör. İngilizce (İleri / C1), İtalyanca (Orta)',
      cvLabel: 'Özgeçmiş (CV) Yükle *',
      cvDragText: 'CV Dosyanızı Buraya Sürükleyin',
      cvBrowseText: 'Gözatın',
      cvHint: 'Desteklenen formatlar: PDF, DOC, DOCX (Maksimum 10 MB)',
      coverLetterLabel: 'Ön Yazı / Not (Opsiyonel)',
      coverLetterPlaceholder:
        'Kendinizi ve kariyer hedeflerinizi özetleyen kısa bir not ekleyebilirsiniz...',
      kvkkPrefix: 'MK Partners ile paylaştığım kişisel verilerimin ve özgeçmişimin, ',
      kvkkBtnText: 'KVKK Aydınlatma Metni',
      kvkkSuffix: ' kapsamında işe alım süreçlerinde değerlendirilmesini onaylıyorum. *',
      submitBtn: 'CV Gönder',
      submittingBtn: 'İletiliyor...',
      successTitle: 'Başvurunuz Alındı',
      successDesc:
        'Özgeçmişiniz insan kaynakları ekibimize iletilmiştir. Pozisyon gereksinimlerine uygunluk durumunda sizinle en kısa sürede iletişime geçilecektir.',
      newAppBtn: 'Yeni Başvuru Gönder',
      kvkkModalTitle: 'Kariyer Başvuruları KVKK Aydınlatma Metni',
    },
    contact: {
      subtitle: 'Bize Ulaşın',
      title: 'İletişim',
      infoTitle: 'İrtibat Bilgilerimiz',
      infoDesc:
        'Hukuki sorunlarınız veya danışmanlık ihtiyaçlarınız için bizimle doğrudan iletişime geçebilir ya da formu doldurarak randevu talep edebilirsiniz.',
      phoneTitle: 'Telefon',
      emailTitle: 'E-posta',
      whatsappBtn: 'WhatsApp ile Hızlı Mesaj',
      formTitle: 'Randevu & Bilgi Formu',
      fullNameLabel: 'Ad Soyad *',
      fullNamePlaceholder: 'Lütfen adınızı ve soyadınızı girin',
      emailLabel: 'E-posta *',
      emailPlaceholder: 'e.g. adiniz@mail.com',
      phoneLabel: 'Telefon Numarası',
      phonePlaceholder: 'e.g. 0555 555 55 55',
      subjectLabel: 'Konu Alanı',
      subjectOptions: {
        general: 'Genel Sorular & Randevu',
        corporate: 'Şirketler & Ticaret Hukuku',
        ma: 'Birleşme & Devralmalar (M&A)',
        litigation: 'Uyuşmazlık Çözümü & Dava',
        employment: 'İş Hukuku Danışmanlığı',
        kvkk: 'KVKK & Bilişim Hukuku',
      },
      messageLabel: 'Mesajınız *',
      messagePlaceholder: 'Hukuki konuya ilişkin özet mesajınızı buraya yazın...',
      kvkkPrefix: 'MK Partners ile paylaştığım kişisel verilerimin, ',
      kvkkBtnText: 'KVKK Aydınlatma Metni',
      kvkkSuffix: ' kapsamında işlenmesini ve benimle iletişime geçilmesini kabul ediyorum. *',
      submitBtn: 'Talep Gönder',
      submittingBtn: 'Gönderiliyor...',
      successTitle: 'Mesajınız Alındı',
      successDesc:
        'Bizimle iletişime geçtiğiniz için teşekkür ederiz. Talebiniz avukatlarımıza iletilmiş olup, en kısa sürede tarafınıza dönüş sağlanacaktır.',
      newMessageBtn: 'Yeni Mesaj Gönder',
      kvkkModalTitle: 'Kişisel Verilerin Korunması Kanunu (KVKK) Aydınlatma Metni',
    },
    footer: {
      brandText:
        'MK Partners olarak, müvekkillerimizin ihtiyaçlarına özel, stratejik ve etik değerlere bağlı hukuki çözümler üretmek için çalışıyoruz.',
      menuTitle: 'Menü',
      contactTitle: 'İletişim',
      legalTitle: 'Yasal Uyarı',
      disclaimerText:
        'Bu web sitesinde yer alan her türlü bilgi, materyal ve yayınlar Türkiye Barolar Birliği\'nin Meslek Kuralları ve ilgili mevzuatına uygun olarak, reklam amacı güdülmeksizin yalnızca bilgilendirme amacıyla hazırlanmıştır.',
      copyright: 'MK Partners Legal Consultancy. Tüm Hakları Saklıdır.',
      scrollTop: 'Yukarı',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      practices: 'Practice Areas',
      team: 'Our Team',
      contact: 'Contact',
      career: 'Careers',
      getAdvice: 'Get Advice',
    },
    hero: {
      subtitle: 'MK Partners Legal Consultancy',
      titleLine1: 'Strategic Law',
      titleGold: 'Enduring Trust',
      description:
        'MK Partners provides high-standard litigation, dispute resolution, and legal consultancy services to individuals and corporate clients in Turkey and Europe.',
      practicesBtn: 'Practice Areas',
      contactBtn: 'Contact Us',
      discover: 'Discover',
    },
    about: {
      subtitle: 'About Us & Values',
      title: 'About Us',
      heading: 'Your Trusted Partner in Law',
      p1: 'MK Partners Legal Consultancy has been delivering high-quality advocacy and legal advisory services to clients since its inception, abiding strictly by the rule of law and justice.',
      p2: 'With our dynamic, experienced, and specialized team, we deliver reliable solutions across all practice areas, notably corporate law, labor law, enforcement proceedings, intellectual property, and criminal law. We treat our clients\' goals as our own and handle all legal processes with complete transparency.',
      stats: {
        expValue: '10+',
        expLabel: 'Years of Experience',
        servicesValue: '20+',
        servicesLabel: 'Practice Areas',
      },
      values: {
        title1: 'Preventive Law',
        desc1:
          'We identify potential legal risks before disputes arise, helping our clients avoid unnecessary loss of time and resources through proactive legal advice and strong contractual frameworks.',
        title2: 'Full Compliance',
        desc2:
          'We ensure full compliance with evolving legislation, helping our clients conduct their business with confidence and regulatory certainty.',
        title3: 'Solution-Oriented',
        desc3:
          'We do not merely identify risks; we provide practical, tailored solutions that help our clients achieve their commercial and personal objectives.',
        title4: 'Client-Centric Approach',
        desc4:
          'We understand that every client has unique needs and provide tailored legal solutions with a personal approach.',
      },
    },
    practices: {
      subtitle: 'Our Fields of Expertise',
      title: 'Practice Areas',
      readMore: 'View Details →',
      ourServices: 'Our Services',
      getAdviceModal: 'Request Legal Advice',
      items: [
        {
          id: 'corporate',
          title: 'Corporate & Commercial Law',
          shortDesc:
            'Company incorporations, corporate governance, commercial contracts, and legal management of day-to-day business operations.',
          detailedDesc:
            'We advise domestic and international businesses at every stage of their operations, from company formation and commercial contracts to corporate governance and regulatory compliance.',
          subServices: [
            'Company Formation & Articles of Association',
            'Commercial Contracts',
            'Corporate Governance & Regulatory Compliance',
            'Board & Shareholder Meetings',
            'Competition & Antitrust Law',
          ],
        },
        {
          id: 'criminal',
          title: 'Criminal Law',
          shortDesc:
            'Protection of suspect, accused, and victim rights during investigation and prosecution; effective defense in criminal litigation.',
          detailedDesc:
            'We provide strategic legal representation throughout criminal investigations, trials, appeals, and enforcement proceedings, protecting our clients’ rights at every stage.',
          subServices: [
            'Criminal Defense',
            'Suspect & Defendant Representation',
            'Victim Representation',
            'Appeals',
            'Enforcement & Prison Law',
          ],
        },
        {
          id: 'litigation',
          title: 'Dispute Resolution & Litigation',
          shortDesc:
            'Commercial lawsuits, arbitration, administrative disputes, and pre-litigation risk management.',
          detailedDesc:
            'We represent clients in commercial, civil, and administrative disputes, offering effective litigation and arbitration services from pre-dispute negotiations to final enforcement.',
          subServices: [
            'Commercial Litigation',
            'Debt Recovery',
            'Domestic & International Arbitration',
            'Administrative & Tax Litigation',
            'Pre-Litigation Strategy & Settlement',
          ],
        },
        {
          id: 'employment',
          title: 'Employment & Labor Law',
          shortDesc:
            'Employment agreements, employer-employee relations, union processes, and labor law compliance audits.',
          detailedDesc:
            'We advise employers on all aspects of employment law, from contracts and workplace policies to dispute resolution and regulatory compliance.',
          subServices: [
            'Employment Contracts & HR Policies',
            'Dismissal & Severance Disputes',
            'Workplace Health & Safety Compliance',
            'Collective Labor Relations',
            'Employee Transfers & Terminations',
          ],
        },
        {
          id: 'realestate',
          title: 'Real Estate & Construction Law',
          shortDesc:
            'Real estate acquisition projects, urban transformation, zoning, and large-scale construction contracts.',
          detailedDesc:
            'We provide legal support for real estate transactions, construction projects, urban redevelopment, and property investments, ensuring every stage is legally secure.',
          subServices: [
            'Construction Agreements',
            'Lease Agreements & Eviction Proceedings',
            'Title Deed & Property Disputes',
            'Urban Redevelopment',
            'Real Estate Due Diligence',
          ],
        },
        {
          id: 'ma',
          title: 'Enforcement & Bankruptcy Law',
          shortDesc:
            'Legal assistance in debt collection, execution proceedings, debt restructuring, and bankruptcy cases.',
          detailedDesc:
            'We assist individuals and businesses in debt recovery, enforcement proceedings, bankruptcy, restructuring, and insolvency matters.',
          subServices: [
            'Debt Recovery & Enforcement',
            'Bankruptcy & Insolvency',
            'Debt Restructuring',
            'Creditor Representation',
            'Enforcement Proceedings',
          ],
        },
      ],
    },
    team: {
      subtitle: 'Our Experts',
      title: 'Our Team',
      viewBio: 'Read Biography →',
      sendEmail: 'Send Email',
      specialtiesTitle: 'Areas of Expertise',
      aboutTitle: 'About',
      educationTitle: 'Education',
      languagesTitle: 'Languages',
      members: [
        {
          name: 'Att. Özgün Gizem Meteoğlu (LL.M.)',
          title: 'Managing Partner',
          specialty:
            'Employment Law, Corporate Advisory, Labor & Employment Disputes',
          bio: 'Özgün Gizem Meteoğlu (LL.M.) is a Managing Partner specializing in employment law, corporate advisory, and employment disputes. She advises domestic and international companies on employment law, corporate governance, HR compliance, dispute resolution, and risk management. Her practice also covers intellectual property, technology law, and data protection (KVKK/GDPR).',
          education: [
            'Doğuş University Faculty of Law (LL.B.)',
            'Doğuş University – LL.M. in Private Law (Full Scholarship)',
            'LL.M. Thesis: “The Principle of Equality and Non-Discrimination in Employment Law”',
          ],
          languages: ['Turkish', 'English'],
        },
        {
          name: 'Att. Osman Mete Meteoğlu',
          title: 'Managing Partner',
          specialty: 'Corporate Law, Commercial Law, Corporate Advisory',
          bio: 'Osman Mete Meteoğlu specializes in corporate and commercial law, advising domestic and international businesses on corporate governance, commercial contracts, mergers and acquisitions, regulatory compliance, and dispute resolution. His practice focuses on delivering practical legal solutions that support sustainable business growth.',
          education: ['Doğuş University Faculty of Law (LL.B.)'],
          languages: ['Turkish', 'English'],
        },
        {
          name: 'Att. Selman Kaya',
          title: 'Managing Partner',
          specialty:
            'Enforcement & Bankruptcy Law, Criminal Law, Debt Recovery, Family Law, Real Estate Litigation',
          bio: 'Selman Kaya specializes in enforcement and bankruptcy law, debt recovery, criminal law, family law, and real estate litigation. He advises financial institutions and corporate clients on debt recovery strategies, enforcement proceedings, and complex litigation matters.',
          education: ['Doğuş University Faculty of Law (LL.B.)'],
          languages: ['Turkish', 'English'],
        },
        {
          name: 'ATT. Leman Melike Gülmez (LL.M.)',
          title: 'Associate',
          specialty:
            'EU Law & Regulatory Compliance, International Trade Law, Commercial Contracts',
          bio: 'Leman Melike Gülmez (LL.M.) focuses on EU law, international trade law, and cross-border commercial advisory. After completing her LL.M. at Sapienza University of Rome, she advises clients on regulatory compliance, commercial contracts, and international business transactions across Turkey and the European Union.',
          education: [
            'Gaziantep University Faculty of Law (LL.B.)',
            'Sapienza University of Rome – LL.M. in European Studies (Law & Economics)',
          ],
          languages: ['Turkish', 'English', 'Italian'],
        },
      ],
    },
    career: {
      subtitle: 'Career Opportunities',
      title: 'Join Our Growing Team',
      infoTitle: 'Shaping the Future of Law Together',
      infoDesc:
        'At MK Partners, we open our doors to dynamic, analytical, and growth-oriented legal professionals. We are eager to welcome Trainee Lawyers and Associate Attorneys to participate in high-level legal practice across Istanbul and Rome.',
      positions: {
        internTitle: 'Trainee Lawyer',
        internBadge: 'Legal Internship',
        internDesc:
          'A high-quality mentorship program offering legal research, drafting pleadings, attending court hearings, and participating in client meetings.',
        internFeature1: 'Strategic Litigation & Enforcement',
        internFeature2: 'Foreign Languages & Legal Writing',
        lawyerTitle: 'Associate / Senior Associate',
        lawyerBadge: 'Admitted Attorney',
        lawyerDesc:
          'For experienced attorneys ready to take on independent responsibility in Commercial, Corporate, Employment, M&A, and Dispute Resolution matters.',
        lawyerFeature1: 'Contract & Project Management',
        lawyerFeature2: 'International Client Portfolio',
        summerTitle: 'Summer Intern (Student)',
        summerBadge: 'Summer Internship',
        summerDesc:
          'For third- and fourth-year law students seeking hands-on experience in legal practice and corporate advisory.',
      },
      cultureTitle: 'What We Look For',
      cultureText:
        'A strong sense of responsibility, excellent research skills, fluency in English (additional languages are an asset), and the ambition to thrive in a dynamic, collaborative environment.',
      formTitle: 'CV Application Form',
      formSubtitle:
        'Fill out the form below to submit your updated Curriculum Vitae (CV).',
      fullNameLabel: 'Full Name *',
      fullNamePlaceholder: 'Enter your full name',
      emailLabel: 'Email Address *',
      emailPlaceholder: 'e.g. name@email.com',
      phoneLabel: 'Phone Number',
      phonePlaceholder: 'e.g. +90 555 555 55 55',
      positionLabel: 'Target Position *',
      positionOptions: {
        intern: 'Trainee Lawyer (Yasal Stajyer)',
        lawyer: 'Associate / Senior Attorney',
        summer: 'Summer Legal Intern',
        other: 'Other / Operations Team',
      },
      eduLabel: 'University & Graduation Year',
      eduPlaceholder: 'e.g. Istanbul Univ. (2024)',
      langLabel: 'Foreign Languages & Fluency',
      langPlaceholder: 'e.g. English (C1/Fluent), Italian (Intermediate)',
      cvLabel: 'Upload Curriculum Vitae (CV) *',
      cvDragText: 'Drag & Drop your CV file here',
      cvBrowseText: 'Browse File',
      cvHint: 'Supported formats: PDF, DOC, DOCX (Max 10 MB)',
      coverLetterLabel: 'Cover Letter / Note (Optional)',
      coverLetterPlaceholder:
        'Include a brief note highlighting your background and career aspirations...',
      kvkkPrefix: 'I consent to MK Partners processing my personal data and CV in accordance with the ',
      kvkkBtnText: 'Data Protection Notice',
      kvkkSuffix: ' for recruitment evaluation. *',
      submitBtn: 'Submit CV',
      submittingBtn: 'Submitting...',
      successTitle: 'Application Received',
      successDesc:
        'Your resume has been forwarded to our recruitment team. We will contact you if your qualifications match our open positions.',
      newAppBtn: 'Submit Another Application',
      kvkkModalTitle: 'Recruitment Data Protection (KVKK/GDPR) Notice',
    },
    contact: {
      subtitle: 'Get In Touch',
      title: 'Contact Us',
      infoTitle: 'Our Contact Information',
      infoDesc:
        'Reach out to us directly for legal inquiries or schedule a consultation by filling out the form below.',
      phoneTitle: 'Phone',
      emailTitle: 'Email',
      whatsappBtn: 'Quick Message via WhatsApp',
      formTitle: 'Consultation & Inquiry Form',
      fullNameLabel: 'Full Name *',
      fullNamePlaceholder: 'Please enter your full name',
      emailLabel: 'Email Address *',
      emailPlaceholder: 'e.g. name@mail.com',
      phoneLabel: 'Phone Number',
      phonePlaceholder: 'e.g. +90 555 555 55 55',
      subjectLabel: 'Subject Area',
      subjectOptions: {
        general: 'General Inquiries & Consultation',
        corporate: 'Corporate & Commercial Law',
        ma: 'Mergers & Acquisitions (M&A)',
        litigation: 'Dispute Resolution & Litigation',
        employment: 'Labor & Employment Consultancy',
        kvkk: 'GDPR / KVKK & IT Law',
      },
      messageLabel: 'Your Message *',
      messagePlaceholder: 'Please enter a brief summary of your legal matter...',
      kvkkPrefix: 'I accept the processing of my personal data under the ',
      kvkkBtnText: 'Data Protection Notice',
      kvkkSuffix: ' for MK Partners to contact me regarding my request. *',
      submitBtn: 'Send Request',
      submittingBtn: 'Sending...',
      successTitle: 'Message Received',
      successDesc:
        'Thank you for contacting us. Your request has been assigned to our attorneys and we will get back to you shortly.',
      newMessageBtn: 'Send New Message',
      kvkkModalTitle: 'Personal Data Protection (KVKK / GDPR) Information',
    },
    footer: {
      brandText:
        'At MK Partners, we work to deliver strategic, ethically-grounded legal solutions tailored to our clients\' needs.',
      menuTitle: 'Navigation',
      contactTitle: 'Contact',
      legalTitle: 'Legal Disclaimer',
      disclaimerText:
        'All information and materials published on this website are provided strictly for informational purposes, without commercial or advertising intent, in accordance with applicable professional rules.',
      copyright: 'MK Partners Legal Consultancy. All Rights Reserved.',
      scrollTop: 'Top',
    },
  },
  it: {
    nav: {
      home: 'Home',
      about: 'Chi Siamo',
      practices: 'Aree di Attività',
      team: 'Il Nostro Team',
      contact: 'Contatti',
      career: 'Carriera',
      getAdvice: 'Consulenza',
    },
    hero: {
      subtitle: 'MK Partners Legal Consultancy',
      titleLine1: 'Diritto Strategico',
      titleGold: 'Fiducia Duratura',
      description:
        'MK Partners offre assistenza legale qualificata in materia di contenzioso, risoluzione delle controversie e consulenza legale per privati e imprese, operando tra Turchia ed Europa.',
      practicesBtn: 'Aree di Attività',
      contactBtn: 'Contattaci',
      discover: 'Scopri',
    },
    about: {
      subtitle: 'Chi Siamo & Valori',
      title: 'Chi Siamo',
      heading: 'Il Vostro Partner Legale di Fiducia',
      p1: 'MK Partners Legal Consultancy offre servizi di assistenza e consulenza legale di alto livello, fondati sui principi dello Stato di diritto, dell’etica professionale e della giustizia.',
      p2: 'Grazie a un team dinamico e altamente qualificato, assistiamo privati e imprese in molteplici aree del diritto, con particolare esperienza in diritto societario e commerciale, diritto del lavoro, procedure esecutive, proprietà intellettuale e diritto penale.',
      stats: {
        expValue: '10+',
        expLabel: 'Anni di Esperienza',
        servicesValue: '20+',
        servicesLabel: 'Aree di Competenza',
      },
      values: {
        title1: 'Consulenza Preventiva',
        desc1:
          'Individuiamo i potenziali rischi legali prima che insorgano controversie, aiutando i nostri clienti a tutelare il proprio tempo e le proprie risorse attraverso una consulenza proattiva e solidi strumenti contrattuali.',
        title2: 'Piena Conformità',
        desc2:
          'Garantiamo la piena conformità alla normativa in continua evoluzione, consentendo ai nostri clienti di operare con sicurezza e certezza giuridica.',
        title3: 'Approccio Orientato alle Soluzioni',
        desc3:
          'Non ci limitiamo a individuare i rischi: proponiamo soluzioni pratiche ed efficaci, studiate per aiutare i nostri clienti a raggiungere i propri obiettivi personali e imprenditoriali.',
        title4: 'Approccio Centrato sul Cliente',
        desc4:
          'Comprendiamo che ogni cliente ha esigenze specifiche e offriamo soluzioni legali personalizzate, costruite su misura.',
      },
    },
    practices: {
      subtitle: 'Competenze Legali',
      title: 'Aree di Attività',
      readMore: 'Scopri di Più →',
      ourServices: 'I Nostri Servizi',
      getAdviceModal: 'Richiedi Consulenza in Questa Materia',
      items: [
        {
          id: 'corporate',
          title: 'Diritto Societario e Commerciale',
          shortDesc:
            'Costituzione di società, governance aziendale, contrattualistica commerciale e gestione legale delle operazioni quotidiane.',
          detailedDesc:
            'MK Partners assiste imprese italiane e internazionali in ogni fase della loro attività, dalla costituzione della società alla contrattualistica commerciale, fino alla corporate governance e alla conformità normativa.',
          subServices: [
            'Costituzione di Società e Redazione dello Statuto',
            'Contratti Commerciali Nazionali e Internazionali',
            'Corporate Governance e Compliance Normativa',
            'Consigli di Amministrazione e Assemblee dei Soci',
            'Diritto della Concorrenza e Antitrust',
          ],
        },
        {
          id: 'criminal',
          title: 'Diritto Penale',
          shortDesc:
            'Tutela dei diritti di indagati, imputati e persone offese nei procedimenti penali; difesa tecnica efficace.',
          detailedDesc:
            'Forniamo assistenza e difesa legale in tutte le fasi del procedimento penale, dalle indagini preliminari all’esecuzione della pena, garantendo la piena tutela dei diritti dei nostri assistiti.',
          subServices: [
            'Difesa Penale',
            'Assistenza a Indagati e Imputati',
            'Assistenza alla Persona Offesa',
            'Impugnazioni e Appelli',
            'Diritto Penitenziario ed Esecuzione Penale',
          ],
        },
        {
          id: 'litigation',
          title: 'Risoluzione delle Controversie e Contenzioso',
          shortDesc:
            'Cause commerciali, arbitrato, controversie amministrative e gestione del rischio pre-contenzioso.',
          detailedDesc:
            'Assistiamo i nostri clienti nella gestione di controversie civili, commerciali e amministrative, offrendo servizi di contenzioso e arbitrato, dalla fase stragiudiziale fino all’esecuzione delle decisioni.',
          subServices: [
            'Contenzioso Commerciale',
            'Recupero Crediti',
            'Arbitrato Nazionale e Internazionale',
            'Contenzioso Amministrativo e Tributario',
            'Analisi del Rischio e Accordi Transattivi',
          ],
        },
        {
          id: 'employment',
          title: 'Diritto del Lavoro e della Sicurezza Sociale',
          shortDesc:
            'Contratti di lavoro, relazioni industriali, procedimenti sindacali e audit di conformità lavorativa.',
          detailedDesc:
            'Assistiamo imprese e datori di lavoro in tutti gli aspetti del diritto del lavoro, dalla contrattualistica alla gestione del personale, fino alla risoluzione delle controversie e alla conformità normativa.',
          subServices: [
            'Contratti di Lavoro e Regolamenti Aziendali',
            'Contenzioso in Materia di Licenziamento e TFR',
            'Audit in Materia di Salute e Sicurezza sul Lavoro',
            'Relazioni Sindacali e Contrattazione Collettiva',
            'Trasferimenti di Dipendenti e Procedure di Licenziamento',
          ],
        },
        {
          id: 'realestate',
          title: 'Diritto Immobiliare e delle Costruzioni',
          shortDesc:
            'Acquisizioni immobiliari, rigenerazione urbana, urbanistica e contratti di appalto su grande scala.',
          detailedDesc:
            'Assistiamo privati e imprese in operazioni immobiliari, progetti edilizi, riqualificazione urbana e investimenti immobiliari, garantendo sicurezza giuridica in ogni fase dell’operazione.',
          subServices: [
            'Contratti di Appalto',
            'Contratti di Locazione e Sfratti',
            'Contenzioso Immobiliare e Catastale',
            'Consulenza in Materia di Rigenerazione Urbana',
            'Due Diligence Immobiliare',
          ],
        },
        {
          id: 'ma',
          title: 'Diritto dell’Esecuzione e della Crisi d’Impresa',
          shortDesc:
            'Recupero crediti, procedure esecutive, ristrutturazione del debito e procedure concorsuali.',
          detailedDesc:
            'Assistiamo privati e imprese nel recupero dei crediti, nelle procedure esecutive, nelle procedure concorsuali e nelle operazioni di ristrutturazione del debito.',
          subServices: [
            'Recupero Crediti e Procedure Esecutive',
            'Procedure Concorsuali e Concordato Preventivo',
            'Ristrutturazione del Debito',
          ],
        },
      ],
    },
    team: {
      subtitle: 'Il Nostro Staff',
      title: 'Il Nostro Team',
      viewBio: 'Leggi Biografia →',
      sendEmail: 'Invia Email',
      specialtiesTitle: 'Aree di Competenza',
      aboutTitle: 'Informazioni',
      educationTitle: 'Formazione',
      languagesTitle: 'Lingue Parlate',
      members: [
        {
          name: 'Avv. Özgün Gizem Meteoğlu (LL.M.)',
          title: 'Soci Fondatore',
          specialty:
            'Diritto del Lavoro, Consulenza Societaria, Contenzioso del Lavoro',
          bio: 'L\'Avv. Özgün Gizem Meteoğlu (LL.M.) è specializzata in diritto del lavoro, consulenza societaria e contenzioso del lavoro. Assiste società nazionali e internazionali in materia di diritto del lavoro, corporate governance, conformità normativa, gestione delle risorse umane e gestione del rischio. La sua attività comprende inoltre il diritto della proprietà intellettuale, il diritto delle tecnologie e la protezione dei dati personali (KVKK/GDPR).',
          education: [
            'Università Doğuş - Facoltà di Giurisprudenza (Laurea)',
            'Università Doğuş - Master in Diritto Privato (LL.M.) | Borsa di Studio',
            'Tesi: "Il principio di eguaglianza e divieto di discriminazione nel diritto del lavoro"',
          ],
          languages: ['Turco', 'Inglese'],
        },
        {
          name: 'Avv. Osman Mete Meteoğlu',
          title: 'Soci Fondatore',
          specialty: 'Diritto Societario, Diritto Commerciale, Consulenza Societaria',
          bio: 'L\'Avv. Osman Mete Meteoğlu è specializzato in diritto societario e commerciale. Assiste società nazionali e internazionali in materia di corporate governance, contrattualistica commerciale, operazioni di M&A, conformità normativa e risoluzione delle controversie, offrendo soluzioni legali orientate allo sviluppo delle imprese.',
          education: ['Università Doğuş - Facoltà di Giurisprudenza (Laurea)'],
          languages: ['Turco', 'Inglese'],
        },
        {
          name: 'Avv. Selman Kaya',
          title: 'Soci Fondatore',
          specialty:
            'Diritto Penale, Diritto dell’Esecuzione e della Crisi d’Impresa, Recupero Crediti, Diritto di Famiglia e Diritto Immobiliare',
          bio: 'L\'Avv. Selman Kaya è specializzato in diritto dell’esecuzione e della crisi d’impresa, recupero crediti, diritto penale, diritto di famiglia e diritto immobiliare. Assiste istituti bancari, enti finanziari e imprese nella gestione dei crediti deteriorati, delle procedure esecutive e delle controversie giudiziarie.',
          education: ['Università Doğuş - Facoltà di Giurisprudenza (Laurea)'],
          languages: ['Turco', 'Inglese'],
        },
        {
          name: 'Avv. Leman Melike Gülmez (LL.M.)',
          title: 'Avvocato',
          specialty:
            'Diritto dell\'Unione Europea, Commercio Internazionale, Consulenza agli Investimenti',
          bio: 'L\'Avv. Leman Melike Gülmez (LL.M.) opera nell’ambito del diritto dell’Unione Europea, del commercio internazionale e della consulenza agli investimenti. Dopo aver conseguito il Master presso la Sapienza Università di Roma, coordina da Roma le attività europee di MK Partners, assistendo clienti nei rapporti commerciali e negli investimenti tra la Turchia e l’Unione Europea.',
          education: [
            'Università di Gaziantep - Facoltà di Giurisprudenza (Laurea)',
            'Sapienza Università di Roma - European Studies, Law and Economics (LL.M.)',
          ],
          languages: ['Turco', 'Inglese', 'Italiano'],
        },
      ],
    },
    career: {
      subtitle: 'Opportunità di Carriera',
      title: 'Unisciti al Nostro Team',
      infoTitle: 'Plasmiamo Insieme il Futuro del Diritto',
      infoDesc:
        'In MK Partners accogliamo professionisti del diritto dinamici, analitici e orientati alla crescita. Offriamo opportunità a praticanti avvocati e avvocati abilitati interessati a lavorare in un contesto internazionale tra Istanbul e Roma.',
      positions: {
        internTitle: 'Praticante Avvocato',
        internBadge: 'Tirocinio Obbligatorio',
        internDesc:
          'Un percorso formativo di alto livello che offre esperienza pratica nella ricerca giuridica, nella redazione di atti, nella partecipazione alle udienze e negli incontri con i clienti.',
        internFeature1: 'Contenzioso Strategico e Procedure Esecutive',
        internFeature2: 'Lingue Straniere e Attività Editoriale',
        lawyerTitle: 'Avvocato / Avvocato Senior',
        lawyerBadge: 'Avvocato Abilitato',
        lawyerDesc:
          'Ricerchiamo professionisti con esperienza, in grado di gestire autonomamente incarichi in diritto commerciale, societario, del lavoro, operazioni di M&A e risoluzione delle controversie.',
        lawyerFeature1: 'Gestione di Contratti e Progetti',
        lawyerFeature2: 'Portafoglio Clienti Internazionale',
        summerTitle: 'Tirocinante Estivo (Studente)',
        summerBadge: 'Periodo Estivo',
        summerDesc:
          'Rivolto agli studenti del 3° e 4° anno di Giurisprudenza interessati ad acquisire esperienza pratica all’interno di uno studio legale.',
      },
      cultureTitle: 'Cosa Cerchiamo',
      cultureText:
        'Elevato senso di responsabilità, solide capacità di ricerca e analisi, ottima conoscenza della lingua inglese (o di un’altra lingua straniera), attitudine al lavoro di squadra.',
      formTitle: 'Modulo di Candidatura (CV)',
      formSubtitle:
        'Compila il modulo sottostante per inviare il tuo Curriculum Vitae (CV) aggiornato.',
      fullNameLabel: 'Nome e Cognome *',
      fullNamePlaceholder: 'Inserisci nome e cognome',
      emailLabel: 'Indirizzo Email *',
      emailPlaceholder: 'es. nome@email.com',
      phoneLabel: 'Numero di Telefono',
      phonePlaceholder: 'es. +39 333 123 4567',
      positionLabel: 'Posizione Richiesta *',
      positionOptions: {
        intern: 'Praticante Avvocato (Stajyer Avukat)',
        lawyer: 'Avvocato Abilitato / Senior',
        summer: 'Tirocinante Estivo',
        other: 'Altro / Staff di Supporto',
      },
      eduLabel: 'Università e Anno di Laurea',
      eduPlaceholder: 'es. Sapienza Roma (2024)',
      langLabel: 'Lingue Straniere e Livello',
      langPlaceholder: 'es. Inglese (C1/Avanzato), Italiano (Madrelingua)',
      cvLabel: 'Carica Curriculum Vitae (CV) *',
      cvDragText: 'Trascina il file del tuo CV qui',
      cvBrowseText: 'Sfoglia',
      cvHint: 'Formati supportati: PDF, DOC, DOCX (Max 10 MB)',
      coverLetterLabel: 'Lettera di Presentazione (Opzionale)',
      coverLetterPlaceholder:
        'Puoi inserire una breve nota sintetica sui tuoi obiettivi professionali...',
      kvkkPrefix: 'Autorizzo MK Partners al trattamento dei miei dati personali e del CV ai sensi della ',
      kvkkBtnText: 'Informativa sulla Privacy',
      kvkkSuffix: ' a fini di selezione del personale. *',
      submitBtn: 'Invia CV',
      submittingBtn: 'Invio in corso...',
      successTitle: 'Candidatura Ricevuta',
      successDesc:
        'Il tuo curriculum è stato inoltrato al nostro team RU. Ti contatteremo qualora il tuo profilo sia in linea con le nostre posizioni aperte.',
      newAppBtn: 'Invia un\'Altra Candidatura',
      kvkkModalTitle: 'Informativa Privacy Selezione Personale (GDPR)',
    },
    contact: {
      subtitle: 'Mettiti in Contatto',
      title: 'Contatti',
      infoTitle: 'I Nostri Recapiti',
      infoDesc:
        'Contattaci direttamente per qualsiasi questione legale o richiedi un appuntamento compilando il modulo.',
      phoneTitle: 'Telefono',
      emailTitle: 'Email',
      whatsappBtn: 'Messaggio Rapido via WhatsApp',
      formTitle: 'Modulo di Contatto & Richiesta',
      fullNameLabel: 'Nome e Cognome *',
      fullNamePlaceholder: 'Inserisci nome e cognome',
      emailLabel: 'Indirizzo Email *',
      emailPlaceholder: 'es. nome@mail.com',
      phoneLabel: 'Numero di Telefono',
      phonePlaceholder: 'es. +39 333 123 4567',
      subjectLabel: 'Materia di Interesse',
      subjectOptions: {
        general: 'Informazioni Generali & Appuntamento',
        corporate: 'Diritto Societario e Commerciale',
        ma: 'Fusioni e Acquisizioni (M&A)',
        litigation: 'Risoluzione Controversie e Contenzioso',
        employment: 'Consulenza Diritto del Lavoro',
        kvkk: 'Privacy, GDPR e Diritto Informatico',
      },
      messageLabel: 'Il Tuo Messaggio *',
      messagePlaceholder: 'Descrivi brevemente la tua questione legale...',
      kvkkPrefix: 'Acconsento al trattamento dei dati personali secondo l\'',
      kvkkBtnText: 'Informativa sulla Privacy',
      kvkkSuffix: ' per essere ricontattato da MK Partners. *',
      submitBtn: 'Invia Richiesta',
      submittingBtn: 'Invio in corso...',
      successTitle: 'Messaggio Ricevuto',
      successDesc:
        'Grazie per averci contattato. La tua richiesta è stata presa in carico dai nostri avvocati e ti risponderemo al più presto.',
      newMessageBtn: 'Invia Nuovo Messaggio',
      kvkkModalTitle: 'Informativa sul Trattamento dei Dati Personali (GDPR)',
    },
    footer: {
      brandText:
        'In MK Partners lavoriamo per offrire soluzioni legali strategiche ed etiche, modellate sulle reali esigenze dei nostri clienti.',
      menuTitle: 'Menu',
      contactTitle: 'Contatti',
      legalTitle: 'Note Legali',
      disclaimerText:
        'Tutti i contenuti e le informazioni presenti su questo sito sono forniti a scopo puramente informativo, senza finalità pubblicitarie, nel rispetto delle norme deontologiche.',
      copyright: 'MK Partners Legal Consultancy. Tutti i diritti riservati.',
      scrollTop: 'In Alto',
    },
  },
};
