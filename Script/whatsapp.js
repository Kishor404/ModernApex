function openWhatsApp() {
    const phoneNumber = '7418081727';
    const message = 'Hello, I would like to know more about your services.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
  }
  