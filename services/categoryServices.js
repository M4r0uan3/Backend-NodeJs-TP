const Category=require("../Models/Category");

const addCategory = async (c) => {
    return await Category.create(c); 
};

const getAllCategories = async () => {
    return await Category.find(); 
};

module.exports={
    addCategory,
    getAllCategories,
}