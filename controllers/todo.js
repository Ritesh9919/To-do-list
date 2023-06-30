const ToDoList =  require('../models/todolist');

// Controllers

module.exports.home =  function (req, res) {
    ToDoList.find({}, function (err, todolist) {
      if (err) {
        console.log('error in finding todolist');
        return;
      }
  
      return res.render('home', {
        title: 'To-Do-List',
        to_do_list: todolist
      })
    })
  }
  
  
  module.exports.create =  function (req, res) {
    ToDoList.create({
      work: req.body.work,
      category: req.body.category,
      date: req.body.date
    }, function (err, newToDoList) {
      if (err) {
        console.log("error in creating todolist", err);
        return;
      }
  
      console.log('*******', newToDoList);
      return res.redirect('/');
    })
  }


  module.exports.delete = function(req, res) {
    const id = req.query.id;
    const taskId = ToDoList.findByIdAndDelete(id, function(err) {
      if(err) {
        console.log('cannot find id');
        return;
      }

      res.redirect('/');
    })
  }