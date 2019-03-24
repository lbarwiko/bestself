import {SMS} from '../services/';

export default (db, config) => {
    
    function createFeedbackLink(user_id){
        return 'Check out this link! http://138.68.44.59/u/' + user_id;
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
            requestFeedback: requestFeedback().rest
        }
    }
}