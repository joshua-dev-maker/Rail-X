const Transporter = require('../Models/transportation.model')

//registration of Transporters
exports.addTransporter = async(req, res,next) => {
    try {
        const {firstName, lastName,destination,age,nextOfKin,phoneNumber}= req.body;

        const newTransporter = new Transporter({
              firstName,
              lastName,
              destination,
              age,
              nextOfKin,
              phoneNumber
        });
        await newTransporter.save();
        return res.status(201).json({
            success: true,
            newTransporter,
        })
    }
     catch (error) {
        return res.status(500).json({
            success: false,
            message: "Input correct details",
        });
        
    }
}

// taking into account total number of Transporters

exports.countTransporter = async (req,res,next)=>{
    try {
        // const query = admin.find();
        // await query.count(function (err, count) {
        //     if (err) console.log(err)
        //     else {console.log("Count is " + count) }
        //         return count
                
        // }, next());
        const countTransporter = await Transporter.countDocuments()

        // await count
        return res.status(201).json({
            success: true,
            countTransporter
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: false,
          message:"numbers not accurate"
        })

    }
}
// editing Transporters information

exports.updateTransporter = async (req, res, next) => {
    try {
        const {_id} = req.params;
        const updateTransporter = await Transporter.findOneAndUpdate({ _id: _id }, req.body, {
            new: true,
        })
        return res.status(200).json({
            success: true,
            updateTransporter,
          });
        } catch (error) {
          console.log(error);
          return res.status(500).json({
            success: false,
            message: "Server Error",
          });
        }
      };


      // deleting transporters information
      exports.removeTransporter = async (req, res, next) => {
        try {
            const {_id} = req.params;
            const removeTransporter = await Transporter.findOneAndDelete({ _id: _id })
            return res.status(200).json({
                success: true,
                message: `The user with id ${_id} has been removed`,
                removeTransporter,
              });
            } catch (error) {
              console.log(error);
              return res.status(500).json({
                success: false,
                message: "Unable to delete the user",
              });
            }
          };

  