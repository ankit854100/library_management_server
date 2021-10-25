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

export const allBooks = [
  {
    category: "Fantasy",
    subCategory: [
      {
        category: "Harry Potter",
        books: [
          {
            title: "Harry potter and the socerer's stone",
            price: "$299",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
            image: "https://www.mandatory.com/images/stories/2011/Film/The%20Series%20Project/Harry%20Potter/Harry_Potter_1_poster.jpg"
          },
          {
            title: 'Harry potter and the chambers of secrets',
            price: "$399",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
            image: "https://images-na.ssl-images-amazon.com/images/I/81v0sgbcSWL.jpg"
          
          }
        ]
      },
      {
        category: "Lord of the rings",
        subCategory: [
          {
            category: "Lords of the rings series",
            books: [
              {
                title: "Lord of the rings: Fellowship of the ring",
                price: "$292",
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
                image: "https://www.mandatory.com/images/stories/2011/Film/The%20Series%20Project/Harry%20Potter/Harry_Potter_1_poster.jpg"
              },
              {
                title: "Lord of the rings: The two towers",
                price: "$499",
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
                image: "https://www.mandatory.com/images/stories/2011/Film/The%20Series%20Project/Harry%20Potter/Harry_Potter_1_poster.jpg"
              },
              {
                title: "Lord of the rings: Return of the king",
                price: "$199",
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
                image: "https://www.mandatory.com/images/stories/2011/Film/The%20Series%20Project/Harry%20Potter/Harry_Potter_1_poster.jpg"
              }
            ]
          },
          {
            category: "Hobbit series",
            books: [
              {
                title: "The Hobbit: An unexpected journey",
                price: "$359",
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
                image: "https://www.mandatory.com/images/stories/2011/Film/The%20Series%20Project/Harry%20Potter/Harry_Potter_1_poster.jpg"
              },
              {
                title: "The Hobbit: The battle of five armies",
                price: "$299",
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
                image: "https://www.mandatory.com/images/stories/2011/Film/The%20Series%20Project/Harry%20Potter/Harry_Potter_1_poster.jpg"
              },
              {
                title: "The Hobbit: The desolation of smaug",
                price: "$199",
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
                image: "https://www.mandatory.com/images/stories/2011/Film/The%20Series%20Project/Harry%20Potter/Harry_Potter_1_poster.jpg"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    category: "Fiction",
    subCategory: [
      {
        category: "Sherlock Holmes",
        books: [
          {
            title: "The adventures of Sherlock Holmes Part 1",
            price: "$499",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
            image: "https://www.mandatory.com/images/stories/2011/Film/The%20Series%20Project/Harry%20Potter/Harry_Potter_1_poster.jpg"
          },
          {
            title: 'The adventures of Sherlock Holmes Part 2',
            price: "$299",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
            image: "https://images-na.ssl-images-amazon.com/images/I/81v0sgbcSWL.jpg"
          
          }
        ]
      }
    ]
  },
  {
    category: "Comics",
    subCategory: [
      {
        category: "Marvel",
        books: [
          {
            title: "Star wars",
            price: "$499",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
            image: "https://www.mandatory.com/images/stories/2011/Film/The%20Series%20Project/Harry%20Potter/Harry_Potter_1_poster.jpg"
          },
          {
            title: 'Avengers',
            price: "$199",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
            image: "https://images-na.ssl-images-amazon.com/images/I/81v0sgbcSWL.jpg"
          
          },
          {
            title: 'The Hulk',
            price: "$399",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
            image: "https://images-na.ssl-images-amazon.com/images/I/81v0sgbcSWL.jpg"
          
          },
          {
            title: 'The amazing spiderman',
            price: "$99",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
            image: "https://images-na.ssl-images-amazon.com/images/I/81v0sgbcSWL.jpg"          
          }
        ]
      },
      {
        category: "DC",
        books: [
          {
            title: "Superman",
            price: "$299",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
            image: "https://www.mandatory.com/images/stories/2011/Film/The%20Series%20Project/Harry%20Potter/Harry_Potter_1_poster.jpg"
          },
          {
            title: 'Batman',
            price: "$299",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
            image: "https://images-na.ssl-images-amazon.com/images/I/81v0sgbcSWL.jpg"
          
          },
          {
            title: 'Green lantern',
            price: "$299",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
            image: "https://images-na.ssl-images-amazon.com/images/I/81v0sgbcSWL.jpg"
          
          },
          {
            title: 'The flash',
            price: "$299",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
            image: "https://images-na.ssl-images-amazon.com/images/I/81v0sgbcSWL.jpg"          
          }
        ]
      }
    ]
  }
];

export const getAllBooks = (req, res) => {
    try {
        res.status(200).json(allBooks);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const addBook = (req, res) => {
    const book = req.body;

    // bookList.push({title: book.title, description: book.description, image: book.image});
    allBooks.push({category: book.category, books: [{title: book.title, price: book.price, description: book.description}]});
    try {
        res.status(200).json(allBooks);
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