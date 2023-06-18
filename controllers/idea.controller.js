const ideas = require('../models/idea.model')


// search all ideas


exports.fetchAllIdeas = (req,res) => {
    res.status(200).send(ideas)
}

let idCount = 2


// create new idea
exports.createIdea = (req, res) => {
    const idea = req.body

    idea.id = ++idCount

    ideas[idCount] = idea
    
    res.status(201).send(ideas[idCount])

}


exports.updateIdea = (req, res) => {
    const ideaId = req.params.id

    if (ideas[ideaId]){
        ideas[ideaId]= req.body
        res.status(200).send(ideas[ideaId])
    }
    else {
        res.status(400).send({message:"idea Id passed was not correct"})
    }


}



exports.deleteIdea = (req,res) => {

  if (ideas[req.params.id]){
    delete ideas[req.params.id]
    res.status(200).send({
        message:"succesfully deleted"
    })
  }
  else {
    res.status(400).send({
        message: "Wrong idea id"
    })
  }


}

