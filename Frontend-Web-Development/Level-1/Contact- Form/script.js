const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

function setError(el, msg){
  const small = el.parentElement.querySelector('.error');
  small.textContent = msg || '';
}
function clearErrors(){
  document.querySelectorAll('.field .error').forEach(s => s.textContent = '');
}

form.addEventListener('submit', function(e){
  e.preventDefault();
  clearErrors();
  status.textContent = '';

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');

  let ok = true;
  if(!name.value.trim()){ setError(name, 'Full name is required'); ok=false; }
  if(!email.value.trim()){ setError(email, 'Email is required'); ok=false; }
  else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())){ setError(email, 'Enter a valid email'); ok=false; }
  if(!subject.value.trim()){ setError(subject, 'Subject required'); ok=false; }
  if(!message.value.trim()){ setError(message, 'Message cannot be empty'); ok=false; }

  if(!ok) return;

  // success UI (replace with real submit / fetch)
  status.textContent = 'Message sent — thank you! ✅';
  status.style.color = '#bfe8d4';

  // reset form after brief delay
  setTimeout(()=> {
    form.reset();
    clearErrors();
  }, 700);
});
