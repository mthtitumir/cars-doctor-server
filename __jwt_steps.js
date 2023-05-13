/***
 * 1. JWT: secure your api
 * -------------------------
 *          create token
 * -------------------------
 * 1. Client: after user login send user basic info to create token
 * 
 * 2. in the server side: install npm i jsonwebtoken
 * 3. import jsonwebtoken
 * 4. jwt.sign(payload, secret, {expiresIN})
 * 5. return token to the client side
 * 
 * 6. after receiving the token store it either http only cookies or localstorage
 * 7. use a general space onAuthStateChange > authprovider
 * ---------------------------
 *            send token to the server
 * -------------------------------------------
 * 1. for sensitive api call()send a authorization headers {authorization: 'Bearer"}
 * 
 * 
 * ------------------------------
 *       verify token  
 * ------------------------------
 * 
 * 1. create a function call verifyJWT(middleware)
 * 2. this func will have three params: req, res, next
 * 3. first check whether the authorization  headers exists
 * 4. if not send 401
 * 5. get the token out of the authorization header
 * 6. call jwt.verify(token, secret, (err, decoded))
 * 7. if err => send 401
 * 8. set decoded to the req object so that we can retrieve it later
 * 9. call the next() to go to next funtion
 * 
 * -----------------------------
 * 
 * =============================
 * 
 * 
 */