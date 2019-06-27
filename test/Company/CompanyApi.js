describe("Array", function() {
  it.only("should return -1 unless present", function(done) {
  console.log()
  chai.request(adminUrl + "Company")
  .post("/search")
  .send()
  .end(function(err, res) {
  console.log("error",err)
  console.log("response",res.statusCode)
  const newLocal =res.statusCode;
  assert.equal(newLocal, 200)
  done()
  }) 
  })
  })
  describe("Array", function() {
    it.only("should return -1 unless present", function(done) {
    console.log()
    chai.request(adminUrl + "Company")
    .post("/save")
    .send()
    .end(function(err, res) {
    console.log("error",err)
    console.log("response",res.statusCode)
    const newLocal =res.statusCode;
    assert.equal(newLocal, 200)
    done()
    }) 
    })
    })
  