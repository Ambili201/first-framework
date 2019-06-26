const router = Router()
router.get("/", (req, res) => {
    console.log("in controller")
    CompanyModel.search(req.query, res.callback)
})
router.get(
    "/:id",
    ValidateRequest({
        params: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    format: "objectId"
                }
            }
        }
    }),
    (req, res) => {
        CompanyModel.getOne(req.params, res.callback)
    }
)
router.post("/save", (req, res) => {
   CompanyModel.saveData(req.body,res.callback)
}) 
router.put("/:id", (req, res) => {
    CompanyModel.updateData(req.params,req.body, res.callback)
  
    
})
router.patch("/:id", (req, res) => {
    res.send(`Path For Id ${req.params.id}`)
})
router.delete("/:id", (req, res) => {
    CompanyModel.deleteData(req.params,res.callback)
  

})
router.get("/count", (req, res) => {
    CompanyModel.countData(req.body,res.callback)
  

})



export default router
