const Post = require('../models').Post;
const User = require('../models').User;

module.exports = {

    async getAllPostsOfUser(req,res) {
        try {
            const userCollection = await User.find({
                id : req.params.userId
            });

            if(userCollection){
                const postCollection = await Post.find({
                    userId : req.params.userId
                })

                res.status(201).send(postCollection);
            }
            else{
                re.status(404).send("User Not Found")
            }
        }
        catch(e){
            console.log(e);
            res.status(500).send(e);
        }

    },

    async createPost(req,res) {

        try {
            const post = await Post.create({
                title : req.body.title,
                userId : req.body.userId
            });
            res.status(201).send(post)
        }
        catch(e){
            console.log(e);
            res.status(400).send(e);
        }
    },

    async update(req,res) {
        try{
            const postCollection = await Post.find({
                id : req.params.postId
            });

            if(postCollection){
                const updatedPost = await postCollection.update({
                    title : req.body.title
                })

                res.status(201).send(updatedPost);
            }
            else{
                res.status(404).send("Post Not Found");
            }

        }
        catch(e){
            console.log(e);
            res.status(400).send(e);
        }

    }
}