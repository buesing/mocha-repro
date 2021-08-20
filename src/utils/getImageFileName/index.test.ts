import { expect } from "chai"
import { getImageFileName } from "./"

Date.now = () => 513461343

describe("The getImageFileName function", () => {
  it("correctly slugifies names", () => {
    const input = "Some filename with Spaces and speciäl characters.jpg"
    const expected = `tmp/some-filename-with-spaces-and-speciael-characters-${Date.now()}.jpg`

    expect(getImageFileName(input)).to.equal(expected)
  })

  it("uses custom file names if passed", () => {
    const expected = `tmp/mapo-tofu-${Date.now()}.jpg`

    expect(getImageFileName("512351", "mapo tofu")).to.equal(expected)
  })

  it("abbreviates too long names", () => {
    const input =
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg"
    const expected = `tmp/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa-${Date.now()}.jpg`

    expect(getImageFileName(input)).to.equal(expected)
  })

  it("Changes extension to jpg", () => {
    const input = "SOME NAME.PNG"
    const expected = `tmp/some-name-${Date.now()}.jpg`

    expect(getImageFileName(input)).to.equal(expected)
  })

  it("correctly handles dots in the filename", () => {
    const input = "a.file.with.dots.jpg"
    const expected = `tmp/a-file-with-dots-${Date.now()}.jpg`

    expect(getImageFileName(input)).to.equal(expected)
  })
})
