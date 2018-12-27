describe("reverseString", () => {
  describe("reverseString(word)", () => {
    it("takes a string as an argument and returns the string", () => {
      let carReversed = reverseString ("car")
      expect(carReversed).toBeDefined()
      expect(typeof carReversed).toEqual('string')
    })
    it("takes a string as an argument and returns it reversed", () => {
      let carReversed = reverseString ("car")
        expect(carReversed).toMatch('rac');
    })
    it("if the empty string is provided it returns an empty string", () => {
      let carReversed = reverseString ("")
        expect(carReversed).toEqual('');
    })
    it("if a one letter string is provided it returns the same string", () => {
      let carReversed = reverseString ('a')
        expect(carReversed).toEqual('a');
    })
  })
})
