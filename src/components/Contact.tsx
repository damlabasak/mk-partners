'use client';

import React, { useState } from 'react';
import { Phone, Mail, Send, MessageCircle, CheckCircle2, X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'genel',
    message: '',
    kvkkConsent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showKvkkModal, setShowKvkkModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const nameTrimmed = formData.name.trim();
    if (!nameTrimmed || nameTrimmed.split(/\s+/).length < 2) {
      return setErrorMsg('Lütfen geçerli ad ve soyad girin.');
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

    const messageTrimmed = formData.message.trim();
    if (!messageTrimmed || messageTrimmed.length < 10) {
      return setErrorMsg('Lütfen daha detaylı bir mesaj yazın (en az 10 karakter).');
    }

    if (!formData.kvkkConsent) {
      return setErrorMsg('Lütfen onay kutusunu işaretleyin.');
    }

    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn('EmailJS keys missing. Simulating success.');
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'genel',
          message: '',
          kvkkConsent: false
        });
      }, 1200);
      return;
    }

    const getSubjectLabel = (subjectKey: string) => {
      switch (subjectKey) {
        case 'genel':
          return t.contact.subjectOptions.general;
        case 'sirketler':
          return t.contact.subjectOptions.corporate;
        case 'ma':
          return t.contact.subjectOptions.ma;
        case 'dava':
          return t.contact.subjectOptions.litigation;
        case 'is':
          return t.contact.subjectOptions.employment;
        case 'kvkk':
          return t.contact.subjectOptions.kvkk;
        default:
          return subjectKey;
      }
    };

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Belirtilmedi',
      subject: getSubjectLabel(formData.subject),
      message: formData.message
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'genel',
          message: '',
          kvkkConsent: false
        });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setIsSubmitting(false);
        setErrorMsg('Mesajınız gönderilirken bir sorun oluştu.');
      });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">

        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-subtitle">{t.contact.subtitle}</span>
          <h2 className="section-title">{t.contact.title}</h2>
        </div>

        <div className="contact-grid">

          {/* Left Column: Info */}
          <div className="contact-info reveal">
            <h3 className="contact-info-title">{t.contact.infoTitle}</h3>
            <p className="contact-info-desc">
              {t.contact.infoDesc}
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>{t.contact.phoneTitle}</h4>
                  <a href="tel:+905054296196">+90 (505) 429 61 96</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>{t.contact.emailTitle}</h4>
                  <a href="mailto:info@meteoglukaya.com">info@meteoglukaya.com</a>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action Button */}
            <a
              href="https://wa.me/905054296196"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn btn-gold"
            >
              <MessageCircle size={18} />
              <span>{t.contact.whatsappBtn}</span>
            </a>
          </div>

          {/* Right Column: Form */}
          <div className="contact-form-wrapper reveal">
            {isSuccess ? (
              <div className="success-card">
                <CheckCircle2 size={54} className="success-icon" />
                <h3 className="success-title">{t.contact.successTitle}</h3>
                <p className="success-desc">
                  {t.contact.successDesc}
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="btn-gold-solid"
                >
                  {t.contact.newMessageBtn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="form-title">{t.contact.formTitle}</h3>

                {errorMsg && <div className="form-error">{errorMsg}</div>}

                <div className="form-group">
                  <label htmlFor="name" className="form-label">{t.contact.fullNameLabel}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder={t.contact.fullNamePlaceholder}
                    required
                  />
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">{t.contact.emailLabel}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder={t.contact.emailPlaceholder}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">{t.contact.phoneLabel}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className="form-control"
                      placeholder={t.contact.phonePlaceholder}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">{t.contact.subjectLabel}</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control select-control"
                  >
                    <option value="genel">{t.contact.subjectOptions.general}</option>
                    <option value="sirketler">{t.contact.subjectOptions.corporate}</option>
                    <option value="ma">{t.contact.subjectOptions.ma}</option>
                    <option value="dava">{t.contact.subjectOptions.litigation}</option>
                    <option value="is">{t.contact.subjectOptions.employment}</option>
                    <option value="kvkk">{t.contact.subjectOptions.kvkk}</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">{t.contact.messageLabel}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    placeholder={t.contact.messagePlaceholder}
                    required
                  ></textarea>
                </div>

                {/* KVKK Checkbox */}
                <div className="kvkk-checkbox-group">
                  <input
                    type="checkbox"
                    id="kvkkConsent"
                    name="kvkkConsent"
                    checked={formData.kvkkConsent}
                    onChange={handleCheckboxChange}
                    className="kvkk-checkbox"
                    required
                  />
                  <label htmlFor="kvkkConsent" className="kvkk-label">
                    <span>{t.contact.kvkkPrefix}</span>
                    <button
                      type="button"
                      onClick={() => setShowKvkkModal(true)}
                      className="kvkk-link-btn"
                    >
                      {t.contact.kvkkBtnText}
                    </button>
                    <span>{t.contact.kvkkSuffix}</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold-solid form-submit-btn"
                >
                  {isSubmitting ? (
                    <span>{t.contact.submittingBtn}</span>
                  ) : (
                    <>
                      <Send size={16} className="btn-icon" />
                      <span>{t.contact.submitBtn}</span>
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
              <h3 className="kvkk-modal-title">{t.contact.kvkkModalTitle}</h3>

              <div className="kvkk-text-body">
                <p><strong>Veri Sorumlusu / Data Controller:</strong> MK Partners Hukuki Danışmanlık</p>

                <p>
                  MK Partners Hukuki Danışmanlık (“Firmamız”) olarak, müvekkillerimizin ve sitemizi ziyaret eden kullanıcılarımızın kişisel verilerinin korunmasına büyük önem veriyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) ve GDPR uyarınca veri sorumlusu sıfatıyla, sitemizde yer alan İletişim Formu aracılığıyla topladığımız verileriniz hakkında sizleri bilgilendirmek isteriz.
                </p>

                <h4>1. İşlenen Kişisel Verileriniz</h4>
                <p>İletişim formunu doldurarak bizimle paylaştığınız; Adınız-Soyadınız, E-posta Adresiniz, Telefon Numaranız ve mesaj içeriğinde paylaştığınız diğer kişisel verileriniz işlenmektedir.</p>

                <h4>2. Verilerin İşlenme Amacı</h4>
                <p>
                  Kişisel verileriniz; randevu taleplerinizin yönetilmesi, bizimle iletişime geçme nedeninize bağlı olarak gerekli hukuki ön değerlendirmelerin yapılması, tarafınıza geri dönüş sağlanması ve danışmanlık hizmetlerinin planlanması amaçlarıyla sınırlı olarak işlenmektedir.
                </p>

                <h4>3. Haklarınız</h4>
                <p>
                  Verilerinizin silinmesini, güncellenmesini veya işlenme durumunu öğrenmeyi <strong>info@meteoglukaya.com</strong> adresinden talep edebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
