export const CONTACT_CONFIG = {
  phone: '+91 9201627744',
  phoneRaw: '+919201627744',
  whatsappNumber: '919201627744',
  email: 'k67842177@gmail.com',
  location: 'Gola ka mandir chauraha, Gwalior, 474005',
};

export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
};
