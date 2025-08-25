// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Form submission handler
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault()

  // Get form data
  const formData = new FormData(this)
  const data = Object.fromEntries(formData)

  // Simple validation
  if (!data.name || !data.email) {
    alert("Por favor completa todos los campos requeridos.")
    return
  }

  // Simulate form submission
  const button = this.querySelector('button[type="submit"]')
  const originalText = button.textContent

  button.textContent = "Enviando..."
  button.disabled = true

  setTimeout(() => {
    alert("¡Mensaje enviado correctamente! Te contactaré pronto.")
    this.reset()
    button.textContent = originalText
    button.disabled = false
  }, 2000)
})

// Add scroll effect to header
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(15, 23, 42, 0.95)"
  } else {
    header.style.background = "rgba(15, 23, 42, 0.8)"
  }
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe sections for scroll animations
document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0"
  section.style.transform = "translateY(30px)"
  section.style.transition = "opacity 0.8s ease, transform 0.8s ease"
  observer.observe(section)
})

// Enhanced floating animation with mouse interaction
document.addEventListener("mousemove", (e) => {
  const floatingElements = document.querySelectorAll(".float-element")
  const mouseX = e.clientX / window.innerWidth
  const mouseY = e.clientY / window.innerHeight

  floatingElements.forEach((element, index) => {
    const speed = (index + 1) * 0.5
    const x = (mouseX - 0.5) * speed * 20
    const y = (mouseY - 0.5) * speed * 20

    element.style.transform = `translate(${x}px, ${y}px)`
  })
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0"
  document.body.style.transition = "opacity 0.5s ease"

  setTimeout(() => {
    document.body.style.opacity = "1"
  }, 100)
})

console.log("Tobias Oviedo Portfolio - Loaded successfully")
