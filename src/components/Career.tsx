'use client';

import React, { useState } from 'react';
import { Briefcase, CheckCircle2, X, Award, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../context/LanguageContext';

export const Career: React.FC = () => {
  const { t } = useLanguage();

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showKvkkModal, setShowKvkkModal] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const nameTrimmed = formData.fullName.trim();
    if (!nameTrimmed || nameTrimmed.split(/\s+/).length < 2) {
      return setErrorMsg('Lütfen adınızı ve soyadınızı tam girin.');
    }

    const emailTrimmed = formData.email.trim();
    if (!emailTrimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed)) {
      return setErrorMsg('Lütfen geçerli bir e-posta adresi girin.');
    }

    if (!formData.coverLetter.trim() || formData.coverLetter.length < 20) {
      return setErrorMsg('Lütfen kendinizi tanıtan kısa bir metin yazın (en az 20 karakter).');
    }

    if (formData.coverLetter.length > 15000) {
      return setErrorMsg('Girdiğiniz metin çok uzun (Maksimum 15.000 karakter).');
    }

    if (!formData.kvkkConsent) {
      return setErrorMsg('Lütfen onay kutusunu işaretleyin.');
    }

    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_CAREER_TEMPLATE_ID || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn('EmailJS keys missing. Simulating CV submission.');
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
      message: formData.coverLetter
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
      })
      .catch((err) => {
        console.error('CV Submission Error:', err);
        setIsSubmitting(false);
        setErrorMsg('Başvurunuz iletilirken teknik bir sorun oluştu.');
      });
  };

  return (
    <section id="career" className="section career-section">
      <div className="container">

        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-subtitle">{t.career.subtitle}</span>
          <h2 className="section-title">{t.career.title}</h2>
        </div>

        <div className="career-grid">

          {/* Left Column: Intro & Open Positions */}
          <div className="career-info reveal">
            <h3 className="career-info-title">{t.career.infoTitle}</h3>
            <p className="career-info-desc">
              {t.career.infoDesc}
            </p>

            {/* Position Cards */}
            <div className="career-positions">

              {/* Stajyer Avukat Card */}
              <div className="career-card">
                <div className="career-card-header">
                  <h4 className="career-card-title">{t.career.positions.internTitle}</h4>
                  <span className="career-badge">{t.career.positions.internBadge}</span>
                </div>
                <p className="career-card-desc">
                  {t.career.positions.internDesc}
                </p>
                <div className="career-card-features">
                  <span className="career-feature-item">
                    <Check size={16} className="career-feature-icon" /> {t.career.positions.internFeature1}
                  </span>
                  <span className="career-feature-item">
                    <Check size={16} className="career-feature-icon" /> {t.career.positions.internFeature2}
                  </span>
                </div>
              </div>

              {/* Avukat Card */}
              <div className="career-card">
                <div className="career-card-header">
                  <h4 className="career-card-title">{t.career.positions.lawyerTitle}</h4>
                  <span className="career-badge">{t.career.positions.lawyerBadge}</span>
                </div>
                <p className="career-card-desc">
                  {t.career.positions.lawyerDesc}
                </p>
                <div className="career-card-features">
                  <span className="career-feature-item">
                    <Check size={16} className="career-feature-icon" /> {t.career.positions.lawyerFeature1}
                  </span>
                  <span className="career-feature-item">
                    <Check size={16} className="career-feature-icon" /> {t.career.positions.lawyerFeature2}
                  </span>
                </div>
              </div>

              {/* Yaz Stajyeri Card */}
              <div className="career-card">
                <div className="career-card-header">
                  <h4 className="career-card-title">{t.career.positions.summerTitle}</h4>
                  <span className="career-badge">{t.career.positions.summerBadge}</span>
                </div>
                <p className="career-card-desc">
                  {t.career.positions.summerDesc}
                </p>
              </div>

            </div>

            {/* Values / Culture Box */}
            <div className="career-culture-box">
              <h4 className="career-culture-title">
                <Award size={18} /> {t.career.cultureTitle}
              </h4>
              <p className="career-culture-text">
                {t.career.cultureText}
              </p>
            </div>

          </div>

          {/* Right Column: CV Application Form */}
          <div className="career-form-wrapper reveal">
            {isSuccess ? (
              <div className="success-card">
                <CheckCircle2 size={54} className="success-icon" />
                <h3 className="success-title">{t.career.successTitle}</h3>
                <p className="success-desc">
                  {t.career.successDesc}
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="btn-gold-solid"
                >
                  {t.career.newAppBtn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="career-form">
                <h3 className="career-form-title">{t.career.formTitle}</h3>
                <p className="career-form-subtitle">
                  {t.career.formSubtitle}
                </p>

                {errorMsg && <div className="form-error">{errorMsg}</div>}

                {/* Name */}
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">{t.career.fullNameLabel}</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder={t.career.fullNamePlaceholder}
                    required
                  />
                </div>

                {/* Email & Phone Grid */}
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="careerEmail" className="form-label">{t.career.emailLabel}</label>
                    <input
                      type="email"
                      id="careerEmail"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder={t.career.emailPlaceholder}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="careerPhone" className="form-label">{t.career.phoneLabel}</label>
                    <input
                      type="tel"
                      id="careerPhone"
                      name="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className="form-control"
                      placeholder={t.career.phonePlaceholder}
                    />
                  </div>
                </div>

                {/* Position & Education Grid */}
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="position" className="form-label">{t.career.positionLabel}</label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="form-control select-control"
                    >
                      <option value="stajyer-avukat">{t.career.positionOptions.intern}</option>
                      <option value="avukat">{t.career.positionOptions.lawyer}</option>
                      <option value="yaz-stajyeri">{t.career.positionOptions.summer}</option>
                      <option value="diger">{t.career.positionOptions.other}</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="education" className="form-label">{t.career.eduLabel}</label>
                    <input
                      type="text"
                      id="education"
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      className="form-control"
                      placeholder={t.career.eduPlaceholder}
                    />
                  </div>
                </div>

                {/* Foreign Languages */}
                <div className="form-group">
                  <label htmlFor="languages" className="form-label">{t.career.langLabel}</label>
                  <input
                    type="text"
                    id="languages"
                    name="languages"
                    value={formData.languages}
                    onChange={handleChange}
                    className="form-control"
                    placeholder={t.career.langPlaceholder}
                  />
                </div>



                {/* Cover Letter / Note */}
                <div className="form-group">
                  <label htmlFor="coverLetter" className="form-label">{t.career.coverLetterLabel}</label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    className="form-control"
                    style={{ minHeight: '90px' }}
                    placeholder={t.career.coverLetterPlaceholder}
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
                    <span>{t.career.kvkkPrefix}</span>
                    <button
                      type="button"
                      onClick={() => setShowKvkkModal(true)}
                      className="kvkk-link-btn"
                    >
                      {t.career.kvkkBtnText}
                    </button>
                    <span>{t.career.kvkkSuffix}</span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold-solid form-submit-btn"
                >
                  {isSubmitting ? (
                    <span>{t.career.submittingBtn}</span>
                  ) : (
                    <>
                      <Briefcase size={16} className="btn-icon" />
                      <span>{t.career.submitBtn}</span>
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
              <h3 className="kvkk-modal-title">{t.career.kvkkModalTitle}</h3>

              <div className="kvkk-text-body">
                <p><strong>Veri Sorumlusu / Data Controller:</strong> MK Partners Hukuki Danışmanlık</p>
                <p>
                  MK Partners Hukuki Danışmanlık olarak, iş başvurunuz kapsamında sunduğunuz özgeçmiş (CV), iletişim bilgileri ve diğer kişisel verilerinizin 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) ve GDPR uyarınca korunması ve işlenmesi konusunda azami hassasiyeti gösteriyoruz.
                </p>

                <h4>1. İşlenen Kişisel Veriler</h4>
                <p>
                  Kariyer formu vasıtasıyla ilettiğiniz; Ad Soyad, İletişim Bilgileri (Telefon, E-posta), Eğitim Durumu, Yabancı Dil Bilgisi, Özgeçmiş Dosyası ve Ön Yazı içeriğinde yer alan kişisel verileriniz işlenmektedir.
                </p>

                <h4>2. Verilerin İşlenme Amacı</h4>
                <p>
                  Kişisel verileriniz; iş başvurunuzun değerlendirilmesi, yetkinliklerinizin açık olan pozisyonlarla eşleştirilmesi ve işe alım süreçlerinin yürütülmesi amacıyla işlenmektedir.
                </p>

                <h4>3. Haklarınız</h4>
                <p>
                  Verilerinizin silinmesini veya işlenme durumunu öğrenmeyi <strong>info@meteoglukaya.com</strong> adresinden talep edebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
