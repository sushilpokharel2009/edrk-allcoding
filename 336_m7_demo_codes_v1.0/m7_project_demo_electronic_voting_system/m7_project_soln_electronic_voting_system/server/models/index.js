var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/projectevs");

var Schema = mongoose.Schema;

var userSchema = new Schema({
	username : String,
	password : String,
    usertype: String,
	approved : String
});

var User = mongoose.model('users',userSchema);

var candidatesSchema = new Schema({
	name : String,
	age : Number,
        qualification: String
});

var Candidates = mongoose.model('candidates',candidatesSchema);


var approvalSchema = new Schema({
	username : String,
        name : String,
	age : String,
        identification : String,
        approved: String
});

var Approval = mongoose.model('approvals',approvalSchema);


var votingSchema = new Schema({
	userid : String,
        username: String,
        candidatename: String,
        candidateid : String
});

var Voting = mongoose.model('voting',votingSchema);

exports.users = function(req, res) {
    User.find({},'username type approved',function(err,docs){
            res.json(docs);
    });
};
exports.login = function(req, res) {
    User.findOne({username: req.body.username, password: req.body.password},'username usertype approved',function(err,docs){
            if(err) { return err; }
            if((docs)){
                res.json(docs);
        };
    });
};
exports.getuser = function(req, res) {
    User.findOne(req.body,'username usertype approved',function(err,docs){
            res.json(docs);
    });
};
exports.register = function(req, res) {
    User.findOne({username: req.body.username},'username usertype approved',function(err,docs){
            if ((err) || (docs === null)){
                User.create({username:req.body.username,password: req.body.password,usertype:"user",approved:"not approved"}, function(err, docs){
                    res.json(docs);
                });
            }else {
                res.json([{error:"User present"}]);
            }
    });
};
exports.getapproval = function(req, res) {
    Approval.create(req.body, function(err, docs) {
        if(err) { return handleError(res, err); }
        return res.json(201, docs);
    });
};
exports.vote = function(req, res) {
    User.findOne({username: req.body.username},function(err, docsx){
        if (docsx.approved === "approved"){
            Voting.findOne({username: req.body.username},function(err,docs){
                if (docs === null){
                    //console.log(docs);
                    Voting.create(req.body,function(errr, docsx){
                        return res.json(201, docsx);
                    });
                }
                else{
                    return res.json(201,docs);
                }

                });
        }
            
    });    
};
exports.votedfor = function(req, res) {
    Voting.findOne({username: req.body.username},function(err,docs){
        console.log(docs);
        if (docs !== null){
            return res.status(201).json(docs);
        }else{
            return res.status(201).json("Not yet Voted");
        }
    });
};

exports.userresults = function(req, res) {
    Voting.find({}, function(err, docs) {
        if(err) { return handleError(res, err); }
        console.log(docs);
        return res.status(201).json(docs);
    });
};

exports.approvallist = function(req, res) {
    Approval.find({}, function(err, docs) {
        if(err) { return err; }
        return res.status(201).json(docs);
    });
};
exports.rejectvoter = function(req, res) {
    Approval.findOne({username: req.body.username}, function(err, docs) {
        if(err) { return err; }
        else {
            if (docs !== null){
                Approval.remove(req.body,function(err,docs){
                    User.findOne({username: req.body.username},function(err, docsx){
                        docsx.approved = "not approved";
                        User.update({username:req.body.username},docsx,function(err, User){
                            return res.status(201).json(User);
                        });
                    });
                });
            }else{
                return res.status(201).json("Approval not in list");
            }
        };
    });
};
exports.approvevoter = function(req, res) {
    Approval.findOne({username: req.body.username}, function(err, docs) {
        if(err) { return err; }
        else {
            if (docs !== null){
                Approval.remove(req.body,function(err,docs){
                    User.findOne({username: req.body.username},function(err, docsx){
                        docsx.approved = "approved";
                        User.update({username:req.body.username},docsx,function(err, User){
                            return res.status(201).json(User);
                        });
                    });
                });
            }else{
                return res.status(201).json("Approval not in list");
            }
        };
    });
};
exports.adminresults = function(req, res) {
    Voting.find({}, function(err, docs) {
        if(err) { return handleError(res, err); }
        return res.json(201, docs);
    });
};
exports.addcandidate = function(req, res) {
    Candidates.create(req.body, function(err, Candidates) {
        console.log(req.body);
        if(err) { return handleError(res, err); }
        return res.json(201, Candidates);
    });
};
exports.candidates = function(req, res) {
    Candidates.find({},function(err,docs){
            res.json(docs);
    });    
};
exports.deletecandidate = function(req, res) {
    Candidates.remove(req.body, function(err, docs) {
        if(err) { return handleError(res, err); }
        Candidates.find({},function(err, Candidates){
            if(err) { return handleError(res, err); }
            return res.status(201).json(Candidates);
        });
        
    });
};

