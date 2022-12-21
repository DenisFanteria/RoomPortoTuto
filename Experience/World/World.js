import * as THREE from "three"
import Experience from "../Experience"
import Room from "./Room"
import Controls from "./Controls"
import Environment from "./Environment"
import Floor from "./Floor"

export default class World {
  constructor() {
    this.experience = new Experience()
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.canvas = this.experience.canvas
    this.camera = this.experience.camera
    this.resources = this.experience.resources
    this.environment = new Environment()

    this.resources.on("ready", () => {
      this.room = new Room()
      this.controls = new Controls()
      this.floor = new Floor()
    })
  }

  resize() {}

  update() {
    if (this.room) {
      this.room.update()
    }
    if (this.controls) {
      this.controls.update()
    }
  }
}
