const UserModel = require("../models/user.model");
const bcrypt = require("bcryptjs");

exports.register = async (req, res, next) => {
  console.log(req.body.nickname)

  // const newUser = {
  //   firstName: req.body.firstName,
  //   lastName: req.body.lastName,
  //   email: req.body.email,
  //   password: bcrypt.hashSync(req.body.password, 8),
  //   phone: req.body.phone
  // };

  // Utilisation de destructuring pour récupérer les champs du user
  const newUser = { nickname, nameSalt, uid, avatar } = req.body;
  newUser.password = bcrypt.hashSync(req.body.password, 8);

  UserModel.create(newUser)
    .then(data => {
      res
        .status(201)
        .send({message: `New User Registered.`});
    })
    .catch(err => {
      res
        .status(500)
        .send({
          message:
            err.message || "Some error occured while creating the User."
      });    
    });
};

// Renvoyer nickname et avatar
exports.signin = async (req, res, next) => {

  try {
    const user = await UserModel.findOne({ uid: req.body.uid });

    if (!user) {
      return res
              .status(404)
              .send({ message: "Pair name and hashtag not found" });
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res
              .status(401)
              .send({ message: "Invalid Password !" });
    }

    // On fait sans le JWT pour le moment
    // const token = jwt.sign({ id: user.id }, config.secret, {
    //   expiresIn: 360000, // 100 hour for debug purpose
    // });

    // const todayAsDay = new Date.now();
    // const todayAsNumber = todayAsDay.getTime() / 3600;

    // console.log(todayAsDay);
    // console.log(Math.round((todayAsDay.getTime())));

    // For a weird reason I have to put 3hours as maxAge to get the cookie to expire in 1 hour
    return res
            .status(200)
            // .cookie("access_token", token, { 
            //   // maxAge: (2 * 60 * 60 * 1000) + 3600000,
            //   maxAge: 3 * 3600000,
            //   httpOnly: true,
            //   secure: process.env.NODE_ENV === "production"
            // })
            .json({ nickname: user.nickname, uid: user.uid, avatar: user.avatar, conversations: user.conversations });
  } catch (error) {
    return res
            .status(500)
            .send({ message: error.message });
  }
};