console.log('server is starting.....');
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
} = require('graphql')

var app = express();

const quiz = [
  { id: 1, name: 'J. K. Rowling' }
]

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    quiz: {
      description: 'topic for the quiz',
      args: {
        id: { type: GraphQLInt }
      },
      resolve: () => quiz
    },
  })
})

const schema = new GraphQLSchema({
  query: RootQueryType,
})

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))
app.listen(5000, () => console.log('Server Running'))
