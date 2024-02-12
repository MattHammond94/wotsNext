// INTERFACES:
// Interfaces are a way to define a certain structure that other data structures can adhere to.

interface Author { 
  name: string,
  avatar: string
}

const authorOne: Author = {name: 'Matt', avatar: '/img/matt.jpg'}

interface Post {
  title: string,
  body: string,
  tags: string[],
  create_at: Date,
  author: Author
}

const newPost: Post = {
  title: 'my first post',
  body: 'Something',
  tags: ["gaming", 'tech'],
  create_at: new Date(),
  author: authorOne
}

const anotherPost = {
  title: 'Another post m8',
  body: 'Something else there',
  tags: ['tech', 'lunch'],
  create_at: new Date(),
  author: authorOne
}


// As function arg types:

function createPost(post: Post): void {
  console.log(`Created post: ${post.title} by ${post.author.name}`);
}

createPost(newPost)


// With Arrays:

let posts: Post[] = []

// The below will return an arror because the posts array only takes Post objects.
// posts.push({ name: 'salmonMan', body: 'Hello there' })

posts.push(newPost)

// anotherPost variable is not explicitly a Post object however it conforms to the post structure
// so can be accepted in the posts array
posts.push(anotherPost)

console.log(posts)
