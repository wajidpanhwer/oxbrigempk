
  // Tab switching
  const options = document.querySelectorAll('.program-option');
  const sections = {
    tech: document.getElementById('tech-form'),
    lang: document.getElementById('lang-form'),
    prep: document.getElementById('prep-form')
  };

  options.forEach(option => {
    option.addEventListener('click', () => {
      options.forEach(o => o.classList.remove('active'));
      option.classList.add('active');

      const selected = option.getAttribute('data-type');
      Object.keys(sections).forEach(key => {
        sections[key].classList.remove('active');
      });
      sections[selected].classList.add('active');
    });
  });

  // Photo preview
  const photoInput = document.getElementById('photoUpload');
  const imgPreview = document.getElementById('imgPreview');
  const icon = document.getElementById('photo-icon');

  photoInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        imgPreview.src = e.target.result;
        imgPreview.style.display = 'block';
        icon.style.display = 'none';
      };
      reader.readAsDataURL(file);
    }
  });

  // Submit
  const submitBtn = document.getElementById('submitBtn');
 
  const successMsg = document.getElementById('successMsg');

  submitBtn.addEventListener('click', function (e) {
    e.preventDefault();

    // Simple validation (optional - you can improve it later)
    const name = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (!name || !email || !phone) {
      alert("Please fill all the required fields!");
      return;
    }

    // Show success message
    successMsg.style.display = 'block';

    // Optional: Scroll to success message
    successMsg.scrollIntoView({ behavior: 'smooth' });

    // Reset the form after 3 seconds
    setTimeout(() => {
      document.querySelector('form')?.reset();
      document.getElementById('imgPreview').style.display = 'none';
      document.getElementById('photo-icon').style.display = 'block';
      successMsg.style.display = 'none';

      // Reset active tab to "Technology"
      options.forEach(o => o.classList.remove('active'));
      options[0].classList.add('active');
      Object.keys(sections).forEach(key => {
        sections[key].classList.remove('active');
      });
      sections["tech"].classList.add('active');
    }, 3000);
  });

