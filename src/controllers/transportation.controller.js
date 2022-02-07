const admin = require('../Models/transportation.model')

exports.createAdmins = async(req, res,next) => {
    try {
        const {firstName, lastName,destination,age,nextOfKin,phoneNumber}= req.body;

        const newAdmin = new admin({
              firstName,
              lastName,
              destination,
              age,
              nextOfKin,
              phoneNumber
        });
        await newAdmin.save();
        return res.status(201).json({
            success: true,
            newAdmin,
        })
    }
     catch (error) {
        return res.status(500).json({
            success: false,
            message: "error",
        });
        
    }
}


exports.countAdmin = async (req,res,next)=>{
    try {
        // const query = admin.find();
        // await query.count(function (err, count) {
        //     if (err) console.log(err)
        //     else {console.log("Count is " + count) }
        //         return count
                
        // }, next());
        const adminCount = await admin.countDocuments()

        // await count
        return res.status(201).json({
            success: true,
            adminCount
        })
    } catch (error) {
        console.log(error.message);
    }
}

exports.updateAdmins = async (req, res, next) => {
    try {
        const {_id} = req.params;
        const updateAdmin = await admin.findOneAndUpdate({ _id: _id }, req.body, {
            new: true,
        })
        return res.status(200).json({
            success: true,
            updateAdmin,
          });
        } catch (error) {
          console.log(error);
          return res.status(500).json({
            success: false,
            message: "Server Error",
          });
        }
      };



      exports.removeAdmins = async (req, res, next) => {
        try {
            const {_id} = req.params;
            const removeAdmins = await admin.findOneAndDelete({ _id: _id })
            return res.status(200).json({
                success: true,
                message: `The user with id ${_id} has been removed`
              });
            } catch (error) {
              console.log(error);
              return res.status(500).json({
                success: false,
                message: "Server Error",
              });
            }
          };

  