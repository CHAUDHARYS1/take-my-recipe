const { Comment } = require('../models');

const commentdata = [
    {
      comment_text: "WOW! looks amazing can't wait to try.",
      user_id: 1,
      recipe_id: 1
    },
    {
      comment_text: 'Tried it and loved it!',
      user_id: 2,
      recipe_id: 1
    },
    {
      comment_text: 'Excellent dish',
      user_id: 3,
      recipe_id: 2
    },
    {
      comment_text: 'You can also add some thyme to really make it pop!',
      user_id: 4,
      recipe_id: 2
    },
    {
      comment_text: 'My family loved it.',
      user_id: 5,
      recipe_id: 3
    },
    {
      comment_text: 'Great Taste!',
      user_id: 6,
      recipe_id: 3
    },
    {
      comment_text: 'Yummy!.',
      user_id: 7,
      recipe_id: 4
    },
    {
      comment_text: 'My mom used to make this dish with chicken instead of beef!',
      user_id: 8,
      recipe_id: 4
    },
    {
      comment_text: 'Smelled amazing tasted better',
      user_id: 9,
      recipe_id: 5
    },
    {
      comment_text: 'Mouth-watering',
      user_id: 10,
      recipe_id: 5
    },
    {
      comment_text: 'Sooooo flavorful.',
      user_id: 1,
      recipe_id: 6
    },
    {
      comment_text: 'To die for!',
      user_id: 2,
      recipe_id: 6
    },
    {
      comment_text: 'Made this at a dinner party. Everyone loved it!',
      user_id: 3,
      recipe_id: 7
    },
    {
      comment_text: '10/10 on of the best dishes Ive had in awhile',
      user_id: 4,
      recipe_id: 7
    },
    {
      comment_text: 'My daughter said it was "busin"',
      user_id: 5,
      recipe_id: 8
    },
    {
      comment_text: 'I make this once a week now!',
      user_id: 6,
      recipe_id: 8
    },
    {
      comment_text: 'Made this for date! She loved it!',
      user_id: 7,
      recipe_id: 9
    },
    {
      comment_text: 'WOW never seen this version of the recipe',
      user_id: 8,
      recipe_id: 9
    },
    {
      comment_text: 'My new favorite dish',
      user_id: 9,
      recipe_id: 10
    },
    {
      comment_text: 'Finally getting my kids to eat something new!',
      user_id: 10,
      recipe_id: 10
    }
  ];

  const seedComments = () => Comment.bulkCreate(commentdata);

  module.exports = seedComments;