export default {
  inserted (el, binding) {
    el.innerHTML = binding.value.text
    el.style.color = binding.value.color
    el.style.background = binding.value.background
  }
}
