export default function scrollWindow(isEmpty) {
  if (isEmpty) window.scrollTo({ top: 0 });

  window.scrollTo({
    top: document.querySelector('body').scrollHeight,
    behavior: 'smooth',
  });
}
