
export class CountryController{
    static getData = async (req,res,next) =>{
        try {
            const data = 0 // await Country.find();
            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }
}