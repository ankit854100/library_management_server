const bookList = [
    {
        title: "Harry potter and the socerer's stone",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
        image: "https://www.mandatory.com/images/stories/2011/Film/The%20Series%20Project/Harry%20Potter/Harry_Potter_1_poster.jpg"
      },
      {
        title: 'Harry potter and the chambers of secrets',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
        image: "https://images-na.ssl-images-amazon.com/images/I/81v0sgbcSWL.jpg"
      
      },
      {
        title: 'Alice in the wonder land',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
        image: "http://www.jimhillmedia.com/mb/images/upload/Alice-Wonderland-Landscape-.jpg"
      },
      {
        title: 'Snow white and the huntsman',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDMj7yzvVAv3gVc8DDXhEunnc7FfyW3bThNg&usqp=CAU"
      },
      {
        title: 'The jungle book',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
        image: "https://i.ytimg.com/vi/Tq9tK4yFAPI/maxresdefault.jpg"
      }
]

const userList = [
  {
    name: 'Ankit',
    email: 'ankit854100@gmail'
  }
]

export const getAllBooks = (req, res) => {
    try {
        res.status(200).json(bookList);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const addBook = (req, res) => {
    const book = req.body;

    bookList.push({title: book.title, description: book.description, image: book.image});
    try {
        res.status(200).json(bookList);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const registerUser = (req, res) => {
  const user = req.body;
  userList.push({name: user.name, email: user.email});
  try {
    res.status(200).json(userList);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}