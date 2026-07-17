import React, { useState } from 'react';
import { Phone, Mail, Send, MessageCircle, CheckCircle2, X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import '../styles/components/Contact.css';

export const Contact: React.FC = () => {
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
    // Allow only digits (0-9), spaces, and the plus (+) symbol. Filter out letters/characters.
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

    // Robust validations
    const nameTrimmed = formData.name.trim();
    if (!nameTrimmed) {
      return setErrorMsg('Lütfen adınızı ve soyadınızı girin.');
    }
    const nameParts = nameTrimmed.split(/\s+/);
    if (nameParts.length < 2) {
      return setErrorMsg('Lütfen hem adınızı hem de soyadınızı girin.');
    }
    const nameRegex = /^[a-zA-ZçÇğĞıİöÖşŞüÜ\s]{3,}$/;
    if (!nameRegex.test(nameTrimmed)) {
      return setErrorMsg('Ad ve soyad sadece harflerden oluşmalı ve en az 3 karakter olmalıdır.');
    }

    const emailTrimmed = formData.email.trim();
    if (!emailTrimmed) {
      return setErrorMsg('Lütfen e-posta adresinizi girin.');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailTrimmed)) {
      return setErrorMsg('Lütfen geçerli bir e-posta adresi girin (örn: isim@mail.com).');
    }

    const phoneTrimmed = formData.phone.trim();
    if (phoneTrimmed) {
      const cleanPhone = phoneTrimmed.replace(/\s+/g, '').replace(/[\(\)\-\+]/g, '');
      const phoneRegex = /^(90)?5\d{9}$|^05\d{9}$|^5\d{9}$/;
      if (!phoneRegex.test(cleanPhone)) {
        return setErrorMsg('Lütfen geçerli bir telefon numarası girin (örn: 0555 555 55 55).');
      }
    }

    const messageTrimmed = formData.message.trim();
    if (!messageTrimmed) {
      return setErrorMsg('Lütfen mesajınızı yazın.');
    }
    if (messageTrimmed.length < 10) {
      return setErrorMsg('Lütfen sorununuzu açıklayan daha detaylı bir mesaj yazın (en az 10 karakter).');
    }

    if (!formData.kvkkConsent) {
      return setErrorMsg('Devam etmek için KVKK Aydınlatma Metni onay kutusunu işaretlemeniz gerekmektedir.');
    }

    setIsSubmitting(true);

    // Retrieve EmailJS configuration from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // If variables are missing, fallback to simulated success for smooth local testing
    if (!serviceId || !templateId || !publicKey) {
      console.warn('EmailJS keys are missing from environment. Falling back to local simulation.');
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

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Belirtilmedi',
      subject: formData.subject,
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
        setErrorMsg('Mesajınız gönderilirken teknik bir sorun oluştu. Lütfen daha sonra tekrar deneyin.');
      });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">

        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-subtitle">Bize Ulaşın</span>
          <h2 className="section-title">İletişim</h2>
        </div>

        <div className="contact-grid">

          {/* Left Column: Info */}
          <div className="contact-info reveal">
            <h3 className="contact-info-title">İrtibat Bilgilerimiz</h3>
            <p className="contact-info-desc">
              Hukuki sorunlarınız veya danışmanlık ihtiyaçlarınız için bizimle doğrudan iletişime geçebilir ya da formu doldurarak randevu talep edebilirsiniz.
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Telefon</h4>
                  <a href="tel:+902125555555">+90 (212) 555 55 55</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>E-posta</h4>
                  <a href="mailto:info@mkpartners.com">info@mkpartners.com</a>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action Button */}
            <a
              href="https://wa.me/905555555555"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn btn-gold"
            >
              <MessageCircle size={18} />
              <span>WhatsApp ile Hızlı Mesaj</span>
            </a>
          </div>

          {/* Right Column: Form */}
          <div className="contact-form-wrapper reveal">
            {isSuccess ? (
              <div className="success-card">
                <CheckCircle2 size={54} className="success-icon" />
                <h3 className="success-title">Mesajınız Alındı</h3>
                <p className="success-desc">
                  Bizimle iletişime geçtiğiniz için teşekkür ederiz. Talebiniz avukatlarımıza iletilmiş olup, en kısa sürede tarafınıza dönüş sağlanacaktır.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="btn-gold-solid"
                >
                  Yeni Mesaj Gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="form-title">Randevu & Bilgi Formu</h3>

                {errorMsg && <div className="form-error">{errorMsg}</div>}

                <div className="form-group">
                  <label htmlFor="name" className="form-label">Ad Soyad *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Lütfen adınızı ve soyadınızı girin"
                    required
                  />
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">E-posta *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="e.g. adiniz@mail.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Telefon Numarası</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className="form-control"
                      placeholder="e.g. 0555 555 55 55"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Konu Alanı</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control select-control"
                  >
                    <option value="genel">Genel Sorular & Randevu</option>
                    <option value="sirketler">Şirketler & Ticaret Hukuku</option>
                    <option value="ma">Birleşme & Devralmalar (M&A)</option>
                    <option value="dava">Uyuşmazlık Çözümü & Dava</option>
                    <option value="is">İş Hukuku Danışmanlığı</option>
                    <option value="kvkk">KVKK & Bilişim Hukuku</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Mesajınız *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Hukuki konuya ilişkin özet mesajınızı buraya yazın..."
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
                    <span>MK Partners ile paylaştığım kişisel verilerimin, </span>
                    <button
                      type="button"
                      onClick={() => setShowKvkkModal(true)}
                      className="kvkk-link-btn"
                    >
                      KVKK Aydınlatma Metni
                    </button>
                    <span> kapsamında işlenmesini ve benimle iletişime geçilmesini kabul ediyorum. *</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold-solid form-submit-btn"
                >
                  {isSubmitting ? (
                    <span>Gönderiliyor...</span>
                  ) : (
                    <>
                      <Send size={16} className="btn-icon" />
                      <span>Talep Gönder</span>
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
              <h3 className="kvkk-modal-title">Kişisel Verilerin Korunması Kanunu (KVKK) Aydınlatma Metni</h3>

              <div className="kvkk-text-body">
                <p><strong>Veri Sorumlusu:</strong> MK Partners Hukuki Danışmanlık</p>

                <p>
                  MK Partners Hukuki Danışmanlık (“Firmamız”) olarak, müvekkillerimizin ve sitemizi ziyaret eden kullanıcılarımızın kişisel verilerinin korunmasına büyük önem veriyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca veri sorumlusu sıfatıyla, sitemizde yer alan İletişim Formu aracılığıyla topladığımız verileriniz hakkında sizleri bilgilendirmek isteriz.
                </p>

                <h4>1. İşlenen Kişisel Verileriniz</h4>
                <p>İletişim formunu doldurarak bizimle paylaştığınız; Adınız-Soyadınız, E-posta Adresiniz, Telefon Numaranız ve mesaj içeriğinde paylaştığınız diğer kişisel verileriniz işlenmektedir.</p>

                <h4>2. Verilerin İşlenme Amacı</h4>
                <p>
                  Kişisel verileriniz; randevu taleplerinizin yönetilmesi, bizimle iletişime geçme nedeninize bağlı olarak gerekli hukuki ön değerlendirmelerin yapılması, tarafınıza geri dönüş sağlanması ve danışmanlık hizmetlerinin planlanması amaçlarıyla sınırlı olarak işlenmektedir.
                </p>

                <h4>3. Kişisel Verilerin Aktarılması</h4>
                <p>
                  Toplanan kişisel verileriniz, yasal yükümlülüklerimizi yerine getirmek amacıyla resmi kurumlardan gelecek yasal talepler hariç olmak üzere, üçüncü kişilerle veya yurtdışıyla kesinlikle paylaşılmamaktadır.
                </p>

                <h4>4. Toplama Yöntemi ve Hukuki Sebebi</h4>
                <p>
                  Kişisel verileriniz, sitemizdeki formu elektronik ortamda doldurmanız suretiyle toplanmaktadır. Bu veriler, KVKK Madde 5/1 uyarınca İletişim Formu altındaki onay kutusunu işaretleyerek vereceğiniz “Açık Rıza” hukuki sebebine dayalı olarak işlenmektedir.
                </p>

                <h4>5. Kanun Kapsamındaki Haklarınız</h4>
                <p>
                  KVKK’nın 11. maddesi kapsamında; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, eksik veya yanlış işlenmişse düzeltilmesini isteme ve verilerinizin silinmesini talep etme haklarına sahipsiniz. Haklarınızı kullanmak için <strong>info@mkpartners.com</strong> adresine yazılı talepte bulunabilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
