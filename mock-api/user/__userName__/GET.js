module.exports = (req, res) =>
    res.status(200).json({
        id: 0,
        userName: req.params.userName,
        age: 20
    });

//   $ curl -i http://localhost:9000/api/user/testtest
// HTTP/1.1 200 OK
// X-Powered-By: Express
// Content-Type: application/json; charset=utf-8
// Content-Length: 39
// ETag: W/"27-HEjSp+M55SG7EkrFWNsgMVUsqUA"
// Date: Tue, 21 Apr 2020 10:39:49 GMT
// Connection: keep-alive

// {"id":0,"userName":"testtest","age":20}