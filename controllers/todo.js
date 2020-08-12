const connection = require("../db/mysql_connection");

// @desc     모든 할일 목록을 불러오는 API
// @route    GET/api/v1/todo/
// @parameters  *
// @response  success : true , Todos : rows, cnt : rows.length

exports.getTodos = async (req, res, next) => {
  let offset = req.query.offset;
  let limit = req.query.limit;

  let query = `select * from todo limit ${offset},${limit}`;

  try {
    [rows] = await connection.query(query);
    res.status(200).json({ success: true, todo: rows, cnt: rows.length });
    return;
  } catch (e) {
    res.status(500).json({ success: false, message: e });
    return;
  }
};

// @desc      완료여부 체크 및 해제하는 API
// @route     PUT/api/v1/Todos/:id
// @params    /:id
// @response  success: true, completed : result[0]

exports.Todos_complete = async (req, res, next) => {
  let id = req.params.id;
  let completed = req.body.completed;
  let query = `update todo set completed = ${completed} where id = ${id}`;

  try {
    [result] = await connection.query(query);
    res.status(200).json({ success: true, completed: result });
  } catch (e) {
    res.status(500).json({ success: false });
  }
};
