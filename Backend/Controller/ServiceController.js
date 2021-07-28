const Service = require("../model/service.model");

exports.home = (req, res, next) => {
  res.render("index", { PageTitle: "Home Page" });
};

exports.haircut = (req, res, next) => {
  Service.find()
    .then((data) =>
      res.render("haircut", { PageTitle: "Hair Cut", hair: data })
    )
    .catch((err) => console.log(err));
};

exports.dandt = (req, res, next) => {
    const servId = req.params.servId;
  res.render("dandt", { PageTitle: "date and time Selection", servId: servId });
};

exports.addApp = (req, res, next) => {
    ids = req.body.servId;
  date = req.body.dateinput;
  time = req.body.timeinput;
  console.log(date);
  console.log(ids);
  console.log(time);
  const serc = new Service({
    serType: "Haircut",
    serPrice: 58,
    serApp: date,
  });

  serc
    .save()
    .then((savedApp) => console.log("sucess"))
    .catch((err) => console.log(err));
  res.redirect("/");
};
