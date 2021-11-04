import { Scene } from 'phaser'

import sky from '../assets/sky.png'
import bomb from '../assets/bomb.png'
import platform from '../assets/platform.png'
import dude from '../assets/dude.png'
import star from '../assets/star.png'

import thudMp3 from '../assets/thud.mp3'
import thudOgg from '../assets/thud.ogg'

export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    this.load.image('sky', sky)
    this.load.image('ground', platform)
    this.load.image('bomb', bomb)
    this.load.spritesheet('dude', dude, { frameWidth: 32, frameHeight: 42 })
    this.load.image('star', star)
    this.load.audio('thud', [thudMp3, thudOgg])
  }

  create () {
    this.scene.start('PlayScene')
  }
}