"use strict"

const replied = require("replied")

const ESC = "\u001B["

module.exports = async () => {
	const result = await replied(ESC + "14;0t")
	const [height, width] = result.match(/;(?<height>.+);(?<width>.+)t/).groups.map(value => Number(value))
	return {
		height,
		width
	}
}
