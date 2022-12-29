import * as THREE from "three"
import GSAP from "gsap"
import { ScrollTrigger } from "gsap/all"
import Experience from "../Experience"

export default class Controls {
  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.sizes = this.experience.sizes
    this.resources = this.experience.resources
    this.time = this.experience.time
    this.camera = this.experience.camera
    this.room = this.experience.world.room.actualRoom
    GSAP.registerPlugin(ScrollTrigger)

    this.setScrollTrigger()
  }

  setScrollTrigger() {
    ScrollTrigger.matchMedia({
      // Desktop
      "(min-width: 969px)": () => {
        // First Section ---------------------------
        this.firstMoveTimeline = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".first-move",
            top: "top top",
            bottom: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true
          }
        })
        this.firstMoveTimeline.to(this.room.position, {
          x: () => {
            return this.sizes.width * 0.0014
          }
        })

        // Second Section ---------------------------
        this.secondMoveTimeline = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".first-move",
            top: "top top",
            bottom: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true
          }
        })
        this.secondMoveTimeline.to(this.room.position, {
          x: () => {
            return 1
          },
          z: () => {
            return this.sizes.height * 0.0032
          }
        })
      },
      // Mobile
      "(max-width: 968px)": () => {},

      // all
      all: function () {}
    })
  }

  resize() {}

  update() {}
}
