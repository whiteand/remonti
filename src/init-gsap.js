import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

if (typeof window === 'object') {
  gsap.registerPlugin(ScrollTrigger)
}
