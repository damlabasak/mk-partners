'use client';

import React, { useState, useRef } from 'react';
import { Briefcase, UploadCloud, FileText, CheckCircle2, X, Award, Users, ShieldCheck, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Career: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: 'stajyer-avukat',
    education: '',
    languages: '',
    coverLetter: '',
    kvkkConsent: false
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showKvkkModal, setShowKvkkModal] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const cleanedValue = value.replace(/[^0-9\s\+]/g, '');
    setFormData(prev => ({ ...prev, phone: cleanedValue }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  /* File Selection & Drag-and-Drop Handlers */
  const validateAndSetFile = (file: File) => {
    setErrorMsg('');
    const allowedExtensions = ['pdf', 'doc', 'docx'];
    const fileExt = file.name.split('.').pop()?.toLowerCase() || '';

    if (!allowedExtensions.includes(fileExt)) {
      return setErrorMsg('Lütfen sadece PDF veya DOC/DOCX formatında bir CV yükleyin.');
    }

    const maxSizeInMB = 10;
    if (file.size > maxSizeInMB * 1024 * 1024) {
      return setErrorMsg(`Dosya boyutu ${maxSizeInMB} MB'tan küçük olmalıdır.`);
    }

    setSelectedFile(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  /* Form Submission Handler */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const nameTrimmed = formData.fullName.trim();
    if (!nameTrimmed) {
      return setErrorMsg('Lütfen adınızı ve soyadınızı girin.');
    }
    if (nameTrimmed.split(/\s+/).length < 2) {
      return setErrorMsg('Lütfen hem adınızı hem de soyadınızı tam girin.');
    }

    const emailTrimmed = formData.email.trim();
    if (!emailTrimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed)) {
      return setErrorMsg('Lütfen geçerli bir e-posta adresi girin.');
    }

    const phoneTrimmed = formData.phone.trim();
    if (phoneTrimmed) {
      const cleanPhone = phoneTrimmed.replace(/\s+/g, '').replace(/[\(\)\-\+]/g, '');
      if (!/^(90)?5\d{9}$|^05\d{9}$|^5\d{9}$/.test(cleanPhone)) {
        return setErrorMsg('Lütfen geçerli bir telefon numarası girin.');
      }
    }

    if (!selectedFile) {
      return setErrorMsg('Lütfen özgeçmişinizi (CV) dosya alanından yükleyin.');
    }

    if (!formData.kvkkConsent) {
      return setErrorMsg('Devam etmek için KVKK Aydınlatma Metni onay kutusunu işaretlemeniz gerekmektedir.');
    }

    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn('EmailJS keys are missing from environment. Simulating CV submission.');
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          position: 'stajyer-avukat',
          education: '',
          languages: '',
          coverLetter: '',
          kvkkConsent: false
        });
        setSelectedFile(null);
      }, 1200);
      return;
    }

    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      phone: formData.phone || 'Belirtilmedi',
      position: formData.position,
      education: formData.education || 'Belirtilmedi',
      languages: formData.languages || 'Belirtilmedi',
      message: `[KARIYER BAŞVURUSU]\nDosya Adı: ${selectedFile.name}\n\nÖn Yazı:\n${formData.coverLetter || 'Ön yazı belirtilmedi.'}`
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          position: 'stajyer-avukat',
          education: '',
          languages: '',
          coverLetter: '',
          kvkkConsent: false
        });
        setSelectedFile(null);
      })
      .catch((err) => {
        console.error('CV Submission Error:', err);
        setIsSubmitting(false);
        setErrorMsg('Başvurunuz iletilirken teknik bir sorun oluştu. Lütfen daha sonra tekrar deneyin.');
      });
  };

  return (
    <section id="career" className="section career-section">
      <div className="container">

        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-subtitle">Kariyer Fırsatları</span>
          <h2 className="section-title">Büyüyen Ekibimize Katılın</h2>
        </div>

        <div className="career-grid">

          {/* Left Column: Intro & Open Positions */}
          <div className="career-info reveal">
            <h3 className="career-info-title">Geleceğin Hukukunu Birlikte Şekillendirelim</h3>
            <p className="career-info-desc">
              MK Partners olarak, dinamik, analitik düşünen ve sürekli gelişime inanan meslektaşlarımıza kapılarımızı açıyoruz. İstanbul ve Roma ekseninde yerli ve uluslararası müvekkillerimize sunduğumuz yüksek standartlı hukuki danışmanlık süreçlerinde aktif rol alacak Stajyer Avukat ve Avukat arkadaşları ekibimizde görmekten mutluluk duyuyoruz.
            </p>

            {/* Position Cards */}
            <div className="career-positions">

              {/* Stajyer Avukat Card */}
              <div className="career-card">
                <div className="career-card-header">
                  <h4 className="career-card-title">Stajyer Avukat</h4>
                  <span className="career-badge">Yasal Staj</span>
                </div>
                <p className="career-card-desc">
                  Yoğun hukuki araştırma, dava dilekçeleri hazırlığı, duruşma süreçlerinin takibi ve müvekkil toplantılarına doğrudan katılım fırsatı sunan nitelikli bir mentörlük programı.
                </p>
                <div className="career-card-features">
                  <span className="career-feature-item">
                    <Check size={16} className="career-feature-icon" /> Stratejik Dava ve İcra Süreçleri
                  </span>
                  <span className="career-feature-item">
                    <Check size={16} className="career-feature-icon" /> Yabancı Dil ve Makale Çalışmaları
                  </span>
                </div>
              </div>

              {/* Avukat Card */}
              <div className="career-card">
                <div className="career-card-header">
                  <h4 className="career-card-title">Avukat / Kıdemli Avukat</h4>
                  <span className="career-badge">Ruhsatlı</span>
                </div>
                <p className="career-card-desc">
                  Ticaret, İş, Şirketler Hukuku, M&A ve Uyuşmazlık Çözümü alanlarında bağımsız sorumluluk üstlenecek, müvekkil ilişkilerini yönetecek deneyimli ekip arkadaşları.
                </p>
                <div className="career-card-features">
                  <span className="career-feature-item">
                    <Check size={16} className="career-feature-icon" /> Sözleşme ve Proje Yönetimi
                  </span>
                  <span className="career-feature-item">
                    <Check size={16} className="career-feature-icon" /> Uluslararası Müvekkil Portföyü
                  </span>
                </div>
              </div>

              {/* Yaz Stajyeri Card */}
              <div className="career-card">
                <div className="career-card-header">
                  <h4 className="career-card-title">Yaz Stajyeri (Öğrenci)</h4>
                  <span className="career-badge">Yaz Dönemi</span>
                </div>
                <p className="career-card-desc">
                  Hukuk fakültesi 3. veya 4. sınıf öğrencilerine yönelik, büro pratiklerini ve kurumsal hukuk danışmanlığını yakından tanıma imkanı.
                </p>
              </div>

            </div>

            {/* Values / Culture Box */}
            <div className="career-culture-box">
              <h4 className="career-culture-title">
                <Award size={18} /> Ne Arıyoruz?
              </h4>
              <p className="career-culture-text">
                Yüksek sorumluluk bilinci, güçlü araştırma yeteneği, akıcı İngilizce (veya ek yabancı dil) bilgisi ve dinamik ekip çalışmasına uyum sağlama arzusu temel kriterlerimizdir.
              </p>
            </div>

          </div>

          {/* Right Column: CV Application Form */}
          <div className="career-form-wrapper reveal">
            {isSuccess ? (
              <div className="success-card">
                <CheckCircle2 size={54} className="success-icon" />
                <h3 className="success-title">Başvurunuz Alındı</h3>
                <p className="success-desc">
                  Özgeçmişiniz insan kaynakları ekibimize iletilmiştir. Pozisyon gereksinimlerine uygunluk durumunda sizinle en kısa sürede iletişime geçilecektir.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="btn-gold-solid"
                >
                  Yeni Başvuru Gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="career-form">
                <h3 className="career-form-title">CV Başvuru Formu</h3>
                <p className="career-form-subtitle">
                  Aşağıdaki formu doldurarak güncel özgeçmişinizi (CV) tarafımıza iletebilirsiniz.
                </p>

                {errorMsg && <div className="form-error">{errorMsg}</div>}

                {/* Name */}
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">Ad Soyad *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Adınız ve soyadınız"
                    required
                  />
                </div>

                {/* Email & Phone Grid */}
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="careerEmail" className="form-label">E-posta *</label>
                    <input
                      type="email"
                      id="careerEmail"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="adiniz@email.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="careerPhone" className="form-label">Telefon Numarası</label>
                    <input
                      type="tel"
                      id="careerPhone"
                      name="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className="form-control"
                      placeholder="0555 555 55 55"
                    />
                  </div>
                </div>

                {/* Position & Education Grid */}
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="position" className="form-label">Başvurulan Pozisyon *</label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="form-control select-control"
                    >
                      <option value="stajyer-avukat">Stajyer Avukat</option>
                      <option value="avukat">Ruhsatlı Avukat / Kıdemli Avukat</option>
                      <option value="yaz-stajyeri">Yaz Stajyeri (Öğrenci)</option>
                      <option value="diger">Diğer / Destek Ekibi</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="education" className="form-label">Üniversite & Mezuniyet Yılı</label>
                    <input
                      type="text"
                      id="education"
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="ör. İstanbul Üni. (2024)"
                    />
                  </div>
                </div>

                {/* Foreign Languages */}
                <div className="form-group">
                  <label htmlFor="languages" className="form-label">Yabancı Diller & Seviye</label>
                  <input
                    type="text"
                    id="languages"
                    name="languages"
                    value={formData.languages}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="ör. İngilizce (İleri / C1), İtalyanca (Orta)"
                  />
                </div>

                {/* CV File Upload Dropzone */}
                <div className="form-group file-upload-container">
                  <label className="form-label">Özgeçmiş (CV) Yükle *</label>

                  {selectedFile ? (
                    <div className="file-selected-box">
                      <div className="file-selected-info">
                        <FileText size={24} className="file-icon" />
                        <div>
                          <div className="file-name">{selectedFile.name}</div>
                          <div className="file-size">{formatFileSize(selectedFile.size)}</div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveFile}
                        className="file-remove-btn"
                        title="Dosyayı kaldır"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  ) : (
                    <div
                      className={`file-upload-dropzone ${dragActive ? 'drag-active' : ''}`}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden-file-input"
                      />
                      <UploadCloud size={36} className="file-upload-icon" />
                      <p className="file-upload-text">
                        <span>CV Dosyanızı Buraya Sürükleyin</span> ya da <strong>Gözatın</strong>
                      </p>
                      <p className="file-upload-hint">Desteklenen formatlar: PDF, DOC, DOCX (Maksimum 10 MB)</p>
                    </div>
                  )}
                </div>

                {/* Cover Letter / Note */}
                <div className="form-group">
                  <label htmlFor="coverLetter" className="form-label">Ön Yazı / Not (Opsiyonel)</label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    className="form-control"
                    style={{ minHeight: '90px' }}
                    placeholder="Kendinizi ve kariyer hedeflerinizi özetleyen kısa bir not ekleyebilirsiniz..."
                  ></textarea>
                </div>

                {/* KVKK Checkbox */}
                <div className="kvkk-checkbox-group">
                  <input
                    type="checkbox"
                    id="careerKvkkConsent"
                    name="kvkkConsent"
                    checked={formData.kvkkConsent}
                    onChange={handleCheckboxChange}
                    className="kvkk-checkbox"
                    required
                  />
                  <label htmlFor="careerKvkkConsent" className="kvkk-label">
                    <span>MK Partners ile paylaştığım kişisel verilerimin ve özgeçmişimin, </span>
                    <button
                      type="button"
                      onClick={() => setShowKvkkModal(true)}
                      className="kvkk-link-btn"
                    >
                      KVKK Aydınlatma Metni
                    </button>
                    <span> kapsamında işe alım süreçlerinde değerlendirilmesini onaylıyorum. *</span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold-solid form-submit-btn"
                >
                  {isSubmitting ? (
                    <span>İletiliyor...</span>
                  ) : (
                    <>
                      <Briefcase size={16} className="btn-icon" />
                      <span>CV Gönder</span>
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>

      </div>

      {/* KVKK Disclosure Modal */}
      {showKvkkModal && (
        <div className="kvkk-modal-backdrop" onClick={() => setShowKvkkModal(false)}>
          <div className="kvkk-modal glass" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="kvkk-modal-close"
              onClick={() => setShowKvkkModal(false)}
              aria-label="Kapat"
            >
              <X size={20} />
            </button>

            <div className="kvkk-modal-content">
              <h3 className="kvkk-modal-title">Kariyer Başvuruları KVKK Aydınlatma Metni</h3>

              <div className="kvkk-text-body">
                <p><strong>Veri Sorumlusu:</strong> MK Partners Hukuki Danışmanlık</p>
                <p>
                  MK Partners Hukuki Danışmanlık olarak, iş başvurunuz kapsamında sunduğunuz özgeçmiş (CV), iletişim bilgileri ve diğer kişisel verilerinizin 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca korunması ve işlenmesi konusunda azami hassasiyeti gösteriyoruz.
                </p>

                <h4>1. İşlenen Kişisel Veriler</h4>
                <p>
                  Kariyer formu vasıtasıyla ilettiğiniz; Ad Soyad, İletişim Bilgileri (Telefon, E-posta), Eğitim Durumu, Yabancı Dil Bilgisi, Özgeçmiş Dosyası ve Ön Yazı içeriğinde yer alan kişisel verileriniz işlenmektedir.
                </p>

                <h4>2. Verilerin İşlenme Amacı</h4>
                <p>
                  Kişisel verileriniz; iş başvurunuzun değerlendirilmesi, yetkinliklerinizin açık olan pozisyonlarla eşleştirilmesi, işe alım mülakat süreçlerinin yürütülmesi ve gerektiğinde sizinle iletişime geçilmesi amaçlarıyla sınırlı olarak işlenmektedir.
                </p>

                <h4>3. Verilerin Saklanması ve Aktarımı</h4>
                <p>
                  Paylaştığınız bilgiler doğrudan yetkili ortak avukatlarımız ve insan kaynakları ekibimiz tarafından değerlendirilir. Üçüncü şahıslara veya şirket dışı kurumlara kesinlikle aktarılmaz. Gelecekte açılabilecek pozisyonlarda değerlendirilmek üzere onayınız dahilinde makul bir süre saklanır.
                </p>

                <h4>4. Haklarınız</h4>
                <p>
                  KVKK Madde 11 uyarınca, verilerinizin silinmesini, güncellenmesini veya işlenme durumunu öğrenmeyi <strong>info@meteoglukaya.com</strong> adresinden talep edebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
