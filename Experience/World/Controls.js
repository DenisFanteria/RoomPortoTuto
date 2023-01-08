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
    this.room.children.forEach(child => {
      if (child.type === "RectAreaLight") {
        this.rectLight = child
      }
    })
    GSAP.registerPlugin(ScrollTrigger)

    this.setScrollTrigger()
  }

  setScrollTrigger() {
    ScrollTrigger.matchMedia({
      // Desktop
      "(min-width: 969px)": () => {
        // Resets
        this.room.scale.set(0.11, 0.11, 0.11)
        this.rectLight.width = 0.5
        this.rectLight.height = 0.7

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
            trigger: ".second-move",
            top: "top top",
            bottom: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true
          }
        })
          .to(
            this.room.position,
            {
              x: () => {
                return 1
              },
              z: () => {
                return this.sizes.height * 0.0032
              }
            },
            "same"
          )
          .to(
            this.room.scale,
            {
              x: 0.4,
              y: 0.4,
              z: 0.4
            },
            "same"
          )
          .to(
            this.rectLight,
            {
              width: 0.5 * 4,
              height: 0.7 * 4
            },
            "same"
          )

        // Third Section ---------------------------
        this.thirdMoveTimeline = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".third-move",
            top: "top top",
            bottom: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true
          }
        }).to(this.camera.orthographicCamera.position, {
          y: -1.5,
          x: -4.1
        })
      },
      // Mobile
      "(max-width: 968px)": () => {
        // Resets

        this.room.scale.set(0.07, 0.07, 0.07)
        this.room.position.set(0, 0, 0)
        this.rectLight.width = 0.3
        this.rectLight.height = 0.4

        // First Section ---------------------------
        this.firstMoveTimeline = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".first-move",
            top: "top top",
            bottom: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true
          }
        }).to(this.room.scale, {
          x: 0.1,
          y: 0.1,
          z: 0.1
        })
        // Second Section ---------------------------
        this.secondMoveTimeline = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".second-move",
            top: "top top",
            bottom: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true
          }
        })
          .to(
            this.room.scale,
            {
              x: 0.25,
              y: 0.25,
              z: 0.25
            },
            "same"
          )
          .to(
            this.rectLight,
            {
              width: 0.3 * 3.4,
              height: 0.4 * 3.4
            },
            "same"
          )
          .to(
            this.room.position,
            {
              x: 1.5
            },
            "same"
          )

        // Third Section ---------------------------
        this.thirdMoveTimeline = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".third-move",
            top: "top top",
            bottom: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true
          }
        }).to(this.room.position, {
          z: -4.5
        })
      },

      // all
      all: () => {
        // Mini Platform animation
        this.secondPartTimeline = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".third-move",
            start: "center center"
          }
        })

        this.room.children.forEach(child => {
          if (child.name === "Mini_Floor") {
            this.first = GSAP.to(child.position, {
              x: -5.44055,
              z: 13.6135,
              duration: 0.3
            })
          }
          if (child.name === "Mailbox") {
            this.second = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              duration: 0.3
            })
          }
          if (child.name === "Lamp") {
            this.third = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(2)",
              duration: 0.3
            })
          }
          if (child.name === "FloorFirst") {
            this.fourth = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(2)",
              duration: 0.3
            })
          }
          if (child.name === "FloorSecond") {
            this.fifth = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(2)",
              duration: 0.3
            })
          }
          if (child.name === "FloorThird") {
            this.sixth = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(2)",
              duration: 0.3
            })
          }
          if (child.name === "Dirt") {
            this.seventh = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(2)",
              duration: 0.3
            })
          }
          if (child.name === "Flower1") {
            this.eighth = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(2)",
              duration: 0.3
            })
          }
          if (child.name === "Flower2") {
            this.ninth = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(2)",
              duration: 0.3
            })
          }
        })
      }
    })
    this.secondPartTimeline.add(this.first)
    this.secondPartTimeline.add(this.second)
    this.secondPartTimeline.add(this.third)
    this.secondPartTimeline.add(this.fourth, "-=0.2")
    this.secondPartTimeline.add(this.fifth, "-=0.2")
    this.secondPartTimeline.add(this.sixth, "-=0.2")
    this.secondPartTimeline.add(this.seventh, "-=0.2")
    this.secondPartTimeline.add(this.eighth)
    this.secondPartTimeline.add(this.ninth, "-=0.1")
  }

  resize() {}

  update() {}
}
