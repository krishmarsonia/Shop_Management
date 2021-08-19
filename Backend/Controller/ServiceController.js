const Service = require("../model/service_model");

const app = require("../model/appointment_model");

const barbers = require("../model/barber_model");

exports.home = (req, res, next) => {
  res.render("index", { PageTitle: "Home Page" });
};

exports.haircut = (req, res, next) => {
  // console.log(req.session.userid);
  Service.find()
    .then((data) => res.render("haircut", { PageTitle: "Hair", hair: data }))
    .catch((err) => console.log(err));
};

exports.barberselect = (req, res, next) => {
  const servId = req.params.servId;
  console.log(servId);
  barbers
    .find()
    .then((barber) => {
      res.render("barber", {
        PageTitle: "Barber Selection",
        barb: barber,
        servI: servId,
      });
      // console.log(barber);
    })
    .catch((err) => console.log(err));
};

exports.dandt = (req, res, next) => {
  let a = false;
  // let b = false;
  let c = false;
  let d = false;
  let e = false;
  let f = false;
  let g = false;
  let h = false;
  let i = false;
  let j = false;
  let k = false;
  let l = false;
  let m = false;
  const servId = req.query.servId;
  const barbId = req.params.barbId;
  app
    .find({ barberID: barbId })
    .then((barb) => {
      barb.map((b) => {
        console.log(b.time);

        if (b.time == 11) {
          a = "disabled";
          // console.log(a);
        }
        if (b.time == 11.5) {
          c = "disabled";
        }
        if (b.time == 12) {
          d = "disabled";
        }
        if (b.time == 12.5) {
          e = "disabled";
        }
        if (b.time == 13) {
          f = "disabled";
        }
        if (b.time == 13.5) {
          g = "disabled";
        }
        if (b.time == 14) {
          h = "disabled";
        }
        if (b.time == 14.5) {
          i = "disabled";
        }
        if (b.time == 10) {
          j = "disabled";
        }
        if (b.time == 10.5) {
          k = "disabled";
        }
      });
      // console.log(c);
      res.render("dandt", {
        PageTitle: "date and time Selection",
        servId: servId,
        barbId: barbId,
        a: a,
        c: c,
        d: d,
        e: e,
        f: f,
        g: g,
        h: h,
        i: i,
        j: j,
        k: k,
      });
    })
    .catch((err) => console.log(err));
  // console.log(servId);
};

exports.addApp = (req, res, next) => {
  let xtime;
  // console.log(req.body);
  // res.redirect('/');
  barb = req.body.barbId;
  ids = req.body.servId;
  date = req.body.dateinput;
  time = req.body.btn;
  console.log(date);
  console.log(ids);
  console.log(time);
  if (time === "10:00 AM") {
    xtime = 10.0;
  } else if (time === "10:30 AM") {
    xtime = 10.5;
  } else if (time === "11:00 AM") {
    xtime = 11.0;
  } else if (time === "11:30 AM") {
    xtime = 11.5;
  } else if (time === "12:00 AM") {
    xtime = 12.0;
  } else if (time === "12:30 AM") {
    xtime = 12.5;
  } else if (time === "01:00 AM") {
    xtime = 13.0;
  } else if (time === "01:30 AM") {
    xtime = 13.5;
  } else if (time === "02:00 AM") {
    xtime = 14.0;
  } else if (time === "02:30 AM") {
    xtime = 14.5;
  }
  console.log(req.session.userid);
  // res.redirect("/");
  const serc = new app({
    service: "Haircut",
    clientID: req.session.userid,
    serviceID: ids,
    barberID: barb,
    time: xtime,
  });

  serc
    .save()
    .then((savedApp) => {
      console.log("sucess");
      return res.redirect("/");
    })
    .catch((err) => console.log(err));
};

// exports.getAppointment = (req, res, next) => {
//   let apps = [];
//   app
//     .find()
//     .then((appointments) => {
//       return appointments.map((a) => {
//         Service.findOne({ _id: a.serviceID })
//           .then((serv) => {
//             // console.log(serv);
//             apps.push(serv.serviceType);

//           })
//           .catch((err) => console.log(err));
//       });

//       // console.log(appointments.serviceID);
//     })

//     .catch((err) => console.log(err));
//     console.log(apps);

// };

exports.getAppointment = async (req, res, next) => {
  let apps = [];
  const krish = function (type) {
    console.log(type);
  };
  // const myPromise = new Promise(function(resolve, reject){
  //   const krish = (type) => {
  //     apps.push(type);
  //     resolve();
  //   }

  // })

  app.find({ clientID: req.session.userid }).then((appointments) => {
    appointments.map((a) => {
      Service.findOne({ _id: a.serviceID })
        .then((ser) => {
          // krish(ser.serviceTypes);
          // console.log(ser.serviceType);
          const myPromise = new Promise(function (resolve, reject) {
            apps.push({
              type: ser.serviceType,
              name: ser.serviceName,
              price: ser.servicePrice,
              imageUrl: ser.serviceImageUrl,
              time: a.time,
              id: a.id,
            });
            resolve(apps);
            reject("unsuccessfull");
            // if(apps.length > 0){
            // }
            // else{
            //   reject();
            // }
          });
          // var hdd = myPromise.then(function (apps){console.log(apps)});
          // console.log(ser.serviceType)
          // apps.push(ser.serviceType);
          // if(apps.length > 0){
          //   resolve(apps);
          // }
          // else{
          //   reject("Not done!!!")
          // }
        })
        .catch((err) => console.log(err));
    });
    setTimeout(function () {
      Promise.all(apps).then(
        function (result) {
          res.render("appointmentlist", {
            PageTitle: "Appointment List",
            app: result,
          });
        },
        function (err) {
          console.log(err);
        }
      );
    }, 1500);

    // console.log(hdd);
  });
};

exports.postDeleteAppointment = (req, res, next) => {
  const appId = req.body.appid;
  const times = req.body.time;
  console.log(appId);
  console.log(times);
  app.findByIdAndDelete({_id: appId}).then((result) => res.redirect('/appointments')).catch(err => console.log(err))
}