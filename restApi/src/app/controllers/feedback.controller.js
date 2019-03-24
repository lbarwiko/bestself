import {SMS} from '../services/';
import {Feedback as FeedbackSql} from '../sql';

export default (db, config) => {
    
    function createFeedbackLink(user_id){
        return 'Check out this link! http://selfwoke.co/u/' + user_id;
    }

    function list(){
        function helper(user_id){
            console.log(user_id);
            return db.any(FeedbackSql.list,{
                user_id: user_id
            }) 
            .then(data=>{
                console.log(data);
                return Promise.resolve(data.map(item=>item.comment));
            })
        }

        function rest(req, res, next){
            if(!req.user){
                return res.status(403).json({
                    err: 'Unauthorized',
                    code: 403
                })
            }
            console.log(req.user);
            helper(req.user.user_id)
                .then(data=>{
                    res.json(data);
                })
                .catch(err=>res.json(err))
        }

        return {
            rest: rest,
            helper: helper
        }
    }

    function create(){
        function helper(user_id, comment){
            return db.any(FeedbackSql.create, {
                user_id: user_id,
                comment: comment
            })
        }

        function rest(req, res, next){
            var user_id = req.body.user_id;
            var comment = req.body.comment;
            if(!user_id || !comment){
                return res.json({
                    err: 'Missing data',
                    code: 400
                })
            }

            helper(user_id, comment)
                .then(data=>{
                    res.json(data);
                })
                .catch(err=>{
                    res.json({
                        err: err,
                        code: 404
                    })
                })
        }

        return{
            helper: helper,
            rest: rest
        }
    }

    function requestFeedback(){
        function helper(numbers, user_id){
            var link = createFeedbackLink(user_id);
            var promises = [];
            for(var num in numbers){
                promises.push(SMS.send(numbers[num], link));
            }

            return Promise.all(promises);
        }

        function rest(req, res, next){
            var numbers = req.body.numbers;
            
            helper(numbers, req.user.user_id)
            .then(data=>{
                res.json({
                    code: 200,
                    message: 'Success!'
                })
            })
            .catch(err=>{
                res.json({
                    err: "Couldn't send all messages"
                })
            })
        }

        return {
            helper: helper,
            rest: rest
        }
    }

    return {
        rest:{
            requestFeedback: requestFeedback().rest,
            create: create().rest,
            list: list().rest
        }
    }
}