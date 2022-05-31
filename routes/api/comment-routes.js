const router = require('express').Router()
const { addComment,
        addReply, 
        removeComment,
        removeReply 
      } = require('../../controllers/comment-controller')

// '/api/comments/<pizzaId>'
router
  .route('/:pizzaId')
  .post(addComment);

// '/api/comments/<pizzaId>/<commentId>'
router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment)

router
  .route('/:pizzaId/:commentId')
  .delete(removeReply)
  
module.exports = router