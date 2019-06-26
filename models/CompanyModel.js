import { __param } from "tslib";

export default {
    /**
     * 
     * @param {object} _query 
     * @param {object} callback 
     */
     
     
     
    search: async function(_query, callback) {
        const companys = await Company.find().exec()
        callback(null, companys)
    },
    /**
     * 
     * @param {object} data input given id to a function as an argument
     * @param {object} callback return data for the provided object id.
     */
    getOne(data, callback) {
        Company.findOne({
            _id: data.id
        }).exec(callback)
    },
    /**
     * 

     */
    saveData: (data, callback) => {
        const company = new Company(data)
        company.save(callback)
    },
    /**
     * @param {object} data input given id to a function as an argument
     * @param {object} callback return data for the provided object id.
     * @param {object} bodydata where we make changes to data
     */
    updateData: (data,bodydata,callback) => {
        Company.findOneAndUpdate(
            { _id: data.id },
            { $set: bodydata },
            {
                new: true
            }
        ).exec(callback)
    },
    /**
     *  @param {object} data input given id to a function as an argument
     * 
     */
    deleteData: (data,callback) => {
        Company.deleteOne(
            { _id: data.id })
            .exec(callback)
    },
    countData: (data,callback) => {
        Company.find({}).count()
            .exec(callback)
    },
    
}
