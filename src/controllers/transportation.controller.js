const Transporter = require('../Models/transportation.model')

//registration of Transporters
exports.addTransporter = async(req, res,next) => {
    try {
        const {firstName, lastName,destination,age,nextOfKin,phoneNumber}= req.body;

        // const newTransporter = new Transporter({
        //       firstName,
        //       lastName,
        //       destination,
        //       age,
        //       nextOfKin,
        //       phoneNumber
        // });
        // await newTransporter.save();
        await Transporter.create(firstName, lastName,destination,age,nextOfKin,phoneNumber)
        return res.status(201).json({
            success: true,
            newTransporter,
        })
    }
     catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
        
    }
}

// taking into account total number of Transporters

exports.countTransporter = async (req,res,next)=>{
    try {
        const countTransporter = await Transporter.countDocuments()
        if(!countTransporter) 
        throw error

        // await count
        return res.status(200).json({
            success: true,
            countTransporter
        })
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({
          success: false,
          message:error.message
        })

    }
}
// editing Transporters information

exports.updateTransporter = async (req, res, next) => {
    try {
        const {_id} = req.query;
        const updateTransporter = await Transporter.findOneAndUpdate({ _id}, req.body, {
            new: true
        })
        return res.status(200).json({
            success: true,
            updateTransporter,
          });
        } catch (error) {
          console.log(error);
          return res.status(500).json({
            success: false,
            message: error.message,
          });
        }
      };


      // deleting transporters information
      exports.removeTransporter = async (req, res, next) => {
        try {
            const {_id} = req.params;
            const removeTransporter = await Transporter.findOneAndDelete({ _id})
            return res.status(200).json({
                success: true,
                message: `The transporter has been removed`,
                // removeTransporter,
              });
            } catch (error) {
              console.log(error);
              return res.status(500).json({
                success: false,
                message: error.message,
              });
            }
          };

  