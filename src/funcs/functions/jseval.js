module.exports = async (d) => {
let __inside__ = d.data.splits;
let __out__ = __inside__.shift();
let __evaled__;
let __index__;
try {
 __evaled__ = eval(__inside__.join(";"))
}
catch (e) {
return d.sendError(d, e)
}
return __out__ === "yes" ? __evaled__.delB() : ""
}
