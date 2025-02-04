
import { ProductsImages } from "./Allimagedata";


export const AllproductsData = [
    {
    id: 1,
    name: "Trendy Running Shoes with Maximum Comfort",
    Category: "shoe",
    discount: 1.4,
    offer: "10%",
    sellcount: 435,
    author: "Michael Johnson",
    rating: 4.5,
    ratingcount: 94,
    star: 5,
    filePath: ProductsImages.Shoe4,
    price: 25.99,
    summaries: "Experience all-day comfort with these stylish running shoes, featuring breathable material and a cushioned sole for superior support.",
    description: "Step up your game with our trendy running shoes designed for athletes and casual wearers alike. These shoes feature a breathable upper for ventilation, a cushioned midsole for shock absorption, and a durable outsole for excellent traction. Whether you're hitting the gym, going for a run, or just walking around town, these sneakers ensure comfort and style in every step.",
    size: "Available in multiple sizes",
    colors: ["Red", "Blue", "Green", "Black"],
    imageSources: [
      {
        ExtImage: ProductsImages.Shoe4,
      },
      {
        ExtImage: ProductsImages.Shoe5,
      }
    ],
    benefits: [
        "Breathable mesh fabric for enhanced airflow.",
        "Shock-absorbing midsole for extra comfort.",
        "Durable rubber outsole for superior grip.",
        "Lightweight design to reduce foot fatigue.",
        "Stylish and versatile for casual or athletic use."
    ], 
   productReviews: [
      {
        Name: "John Doe",
        date: "8 July 2012",
        imageLink: "https://example.com/images/john.jpg",
        ReviewText: "These shoes are incredibly comfortable! Perfect for running and daily use.",
        rating: 5,
        Userid: "user123",
        comments: [
          {
            Userid: "admin001",
            RplyText: "Thank you, John! We're happy you're enjoying the comfort and quality."
          },
          {
            Userid: "user456",
            RplyText: "I got a pair too! They're super lightweight."
          }
        ]
      },
      {
        Name: "Jane Smith",
        date: "8 July 2012",
        imageLink: "https://example.com/images/jane.jpg",
        ReviewText: "Love these sneakers! They fit perfectly and feel great for long walks.",
        rating: 4,
        Userid: "user456",
        comments: [
          {
            Userid: "admin001",
            RplyText: "Thanks, Jane! We appreciate your feedback."
          }
        ]
      },
      {
        Name: "Alice Johnson",
        date: "9 July 2012",
        imageLink: "https://example.com/images/alice.jpg",
        ReviewText: "Very stylish and comfortable shoes. I wear them every day!",
        rating: 5,
        Userid: "user789",
        comments: [
          {
            Userid: "admin001",
            RplyText: "We're thrilled to hear that, Alice!"
          },
          {
            Userid: "user123",
            RplyText: "I need to get a pair soon!"
          }
        ]
      },
      {
        Name: "Bob Brown",
        date: "3 July 2012",
        imageLink: "https://example.com/images/bob.jpg",
        ReviewText: "Good grip and comfortable for jogging. Would recommend!",
        rating: 4.5,
        Userid: "user101",
        comments: [
          {
            Userid: "admin001",
            RplyText: "Thank you, Bob! We're glad you're satisfied."
          },
          {
            Userid: "user456",
            RplyText: "I use mine for jogging too, love them!"
          }
        ]
      }
    ],
    },
    {
      id: 2,
      name: "Lightweight Running Shoes for Comfort and Performance",
      Category: "shoe",
      discount: 4,
      offer: "13%",
      sellcount: 831,
      author: "Rakib Hossain",
      rating: 4.0,
      ratingcount: 79,
      star: 4,
      filePath: ProductsImages.Shoe3,
      price: 30.99,
      summaries: "Experience ultimate comfort and style with these lightweight running shoes, featuring breathable mesh fabric, shock-absorbing soles, and a flexible design for all-day wear.",
      description: "Designed for athletes and casual wearers alike, these lightweight running shoes offer superior comfort and support. The breathable mesh upper ensures ventilation, while the cushioned insole and shock-absorbing outsole reduce strain on your feet. Whether you're hitting the gym, jogging, or simply walking around, these shoes provide the perfect blend of style and performance.",
      size: "Available in multiple sizes",
      colors: ["Red", "Blue", "Green", "Black"],
      imageSources: [
        {
          ExtImage: ProductsImages.Shoe1,
        },
        {
          ExtImage: ProductsImages.Shoe2,
        },
        {
          ExtImage: ProductsImages.Shoe3,
        }
      ],
      benefits: [
          "Breathable mesh upper for all-day freshness.",
          "Shock-absorbing soles for reduced impact.",
          "Lightweight design for effortless movement.",
          "Slip-resistant outsole for better grip.",
          "Perfect for running, walking, and casual wear."
      ],
      productReviews: [
        {
          Name: "John Doe",
          date: "8 August 2012",
          imageLink: "https://example.com/images/john.jpg",
          ReviewText: "These running shoes are super comfortable! They fit perfectly, and the cushioning is great for long runs.",
          rating: 5,
          Userid: "user123",
          comments: [
            {
              Userid: "admin001",
              RplyText: "Thank you for your feedback, John! We're glad you love the comfort and support."
            },
            {
              Userid: "user456",
              RplyText: "I agree! The cushioning really makes a difference."
            }
          ]
        },
        {
          Name: "Jane Smith",
          date: "8 July 2012",
          imageLink: "https://example.com/images/jane.jpg",
          ReviewText: "Perfect shoes for my morning walks! They're lightweight and super breathable.",
          rating: 4,
          Userid: "user456",
          comments: [
            {
              Userid: "admin001",
              RplyText: "Thanks, Jane! Happy to hear they work well for your daily routine."
            }
          ]
        },
        {
          Name: "Alice Johnson",
          date: "18 July 2012",
          imageLink: "https://example.com/images/alice.jpg",
          ReviewText: "Very comfortable for long hours. I wear them to work, and my feet don't hurt anymore!",
          rating: 5,
          Userid: "user789",
          comments: [
            {
              Userid: "admin001",
              RplyText: "We're thrilled to hear that, Alice! Comfort is our priority."
            },
            {
              Userid: "user123",
              RplyText: "I need a pair for work too. Thanks for the review!"
            }
          ]
        },
        {
          Name: "Bob Brown",
          date: "8 July 2022",
          imageLink: "https://example.com/images/bob.jpg",
          ReviewText: "Great grip and support. I've used these for jogging, and they perform really well.",
          rating: 4.5,
          Userid: "user101",
          comments: [
            {
              Userid: "admin001",
              RplyText: "Thank you, Bob! We're glad they meet your expectations for jogging."
            },
            {
              Userid: "user456",
              RplyText: "Same here! The grip is fantastic."
            }
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Wireless Noise-Canceling Headphones with Deep Bass",
      Category: "headphone",
      discount: 1.4,
      offer: "10%",
      sellcount: 435,
      author: "Rahim Ahmed",
      rating: 3.8,
      ratingcount: 42,
      star: 3,
      filePath: ProductsImages.Headphone2,
      price: 19.99,
      summaries: "Experience immersive sound with these wireless noise-canceling headphones, featuring deep bass, a 20-hour battery life, and a comfortable over-ear design.",
      description: "These wireless headphones are designed for premium sound quality with powerful noise cancellation to block unwanted background noise. Equipped with deep bass technology, crystal-clear audio, and a comfortable fit, they are perfect for long listening sessions. The 20-hour battery life ensures uninterrupted music playback, making them ideal for travel, work, and gaming.",
      size: "Standard Fit",
      colors: ["Red", "Blue", "Green", "Black"],
      imageSources: [
        {
          ExtImage: ProductsImages.Headphone1,
        },
        {
          ExtImage: ProductsImages.Headphone2,
        },
        {
          ExtImage: ProductsImages.Headphone3,
        },
      ],
      benefits: [
          "Advanced noise-canceling technology for an immersive experience.",
          "Deep bass and clear treble for high-quality sound.",
          "Ergonomic design for all-day comfort.",
          "20-hour battery life with fast charging support.",
          "Wireless Bluetooth connectivity for seamless pairing."
      ],
      productReviews: [
        {
          Name: "John Doe",
          date: "8 July 2012",
          imageLink: "https://example.com/images/john.jpg",
          ReviewText: "This wireless headphone is amazing! The sound quality is top-notch, and the battery life lasts all day.",
          rating: 5,
          Userid: "user123",
          comments: [
            {
              Userid: "admin001",
              RplyText: "Thank you for your feedback, John! We're glad you're enjoying the headphones."
            },
            {
              Userid: "user456",
              RplyText: "I agree, the sound quality is incredible!"
            }
          ]
        },
      ]
    },

    {
      id: 4,
      name: "Durable Fitness Resistance Shoes for Home Workouts Training",
      category: "shoe",
      discount: 1.1,
      offer: "10%",
      sellcount: 75,
      author: "Mehzabin Chowdhury & Co.",
      rating: 4.7,
      ratingcount: 982,
      star: 5,
      filePath: ProductsImages.Shoe6,
      price: 40.99,
      summaries: "These durable fitness shoes provide ultimate support for your home workouts, offering comfort and flexibility for every movement.",
      description: "These fitness shoes are designed to enhance your performance with superior comfort, breathable material, and a non-slip sole, making them ideal for various workouts at home or the gym.",
      size: "8, 9, 10, 11",
      colors: ["Red", "Blue", "Green", "Black"],
      imageSources: [
        {
          ExtImage: ProductsImages.Shoe6
        }
      ],
      benefits: [
        "Breathable mesh design for optimal airflow.",
        "Durable, non-slip soles for better traction.",
        "Flexible and lightweight, perfect for workouts.",
        "Shock absorption for added comfort during high-impact exercises.",
        "Stylish and versatile, suitable for various activities."
      ],
      productReviews: [
        {
          Name: "John Doe",
          date: "8 July 2012",
          imageLink: "https://example.com/images/john.jpg",
          ReviewText: "These fitness shoes are fantastic! They provide great support and are comfortable for long workout sessions.",
          rating: 5,
          Userid: "user123",
          comments: [
            {
              Userid: "admin001",
              RplyText: "Thank you for your feedback, John! We're glad you're enjoying the shoes."
            },
            {
              Userid: "user456",
              RplyText: "I agree, they are super comfortable and supportive!"
            }
          ]
        },
        {
          Name: "Jane Smith",
          date: "8 July 2012",
          imageLink: "https://example.com/images/jane.jpg",
          ReviewText: "These shoes are perfect for my morning runs. They're light and durable, making them ideal for outdoor workouts.",
          rating: 4,
          Userid: "user456",
          comments: [
            {
              Userid: "admin001",
              RplyText: "Thanks, Jane! We're happy to hear they fit your running needs."
            }
          ]
        },
        {
          Name: "Alice Johnson",
          date: "8 July 2012",
          imageLink: "https://example.com/images/alice.jpg",
          ReviewText: "The shoes are great for indoor exercises. They provide the support I need for my daily routines.",
          rating: 5,
          Userid: "user789",
          comments: [
            {
              Userid: "admin001",
              RplyText: "We're thrilled to hear that, Alice! Comfort is our top priority."
            },
            {
              Userid: "user123",
              RplyText: "I've been thinking about getting a pair too. Thanks for the review!"
            }
          ]
        },
        {
          Name: "Bob Brown",
          date: "8 July 2012",
          imageLink: "https://example.com/images/bob.jpg",
          ReviewText: "The shoes are perfect for my fitness routine. They're durable and provide great grip during my exercises.",
          rating: 4.5,
          Userid: "user101",
          comments: [
            {
              Userid: "admin001",
              RplyText: "Thank you, Bob! We're glad they help with your fitness activities."
            },
            {
              Userid: "user456",
              RplyText: "I love mine too! They are so comfortable for every workout."
            }
          ]
        }
      ]
    },
    



    {
      id: 5,
      name: "Elegant Summer Maxi Dress with modern style and fashion",
      Category: "dress",
      discount: null,
      offer: "0%",
      sellcount: 7531,
      author: "Sophia Williams",
      rating: 4.3,
      ratingcount: 462,
      star: 4,
      filePath: ProductsImages.Dress1,
      price: 75.5,
      summaries: "This stylish maxi dress features a lightweight, breathable fabric, perfect for warm weather. The floral print adds a touch of elegance, making it suitable for casual outings and summer events.",
      description: "Designed for comfort and style, this summer maxi dress offers a flowy silhouette with an adjustable waistline for the perfect fit. The soft fabric ensures all-day comfort, while the vibrant floral pattern enhances its charm. Ideal for beach vacations, brunch dates, or evening strolls.",
      size: "M, L, XL",
      colors: ["Red", "Blue", "Green", "Black"],
      imageSources: [
        {
          ExtImage: ProductsImages.Dress1,
        },
        {
          ExtImage: ProductsImages.Dress2,
        },
        {
          ExtImage: ProductsImages.Dress3,
        },
        {
          ExtImage: ProductsImages.Dress4,
        },
      ],
      benefits: [
          "Made from lightweight and breathable fabric.",
          "Elegant floral print suitable for various occasions.",
          "Adjustable waist for a customized fit.",
          "Machine-washable and easy to maintain.",
          "Available in multiple vibrant colors."
      ],

     productReviews: [
      {
        Name: "John Doe",
        date: "8 July 2012",
        imageLink: "https://example.com/images/john.jpg",
        ReviewText: "This dress is so comfortable and stylish! The fabric is soft, and the fit is just perfect.",
        rating: 5,
        Userid: "user123",
        comments: [
          {
            Userid: "admin001",
            RplyText: "Thank you for your feedback, John! We're glad you love the dress."
          },
          {
            Userid: "user456",
            RplyText: "I agree, the fabric is amazing!"
          }
        ]
      },
      {
        Name: "Jane Smith",
        date: "8 July 2012",
        imageLink: "https://example.com/images/jane.jpg",
        ReviewText: "A perfect summer dress! The floral design is beautiful, and it's very comfortable.",
        rating: 4,
        Userid: "user456",
        comments: [
          {
            Userid: "admin001",
            RplyText: "Thanks, Jane! We're happy you love the design."
          }
        ]
      },
      {
        Name: "Alice Johnson",
        date: "8 July 2012",
        imageLink: "https://example.com/images/alice.jpg",
        ReviewText: "The dress is lightweight and stylish. I wore it to a garden party, and everyone complimented me!",
        rating: 5,
        Userid: "user789",
        comments: [
          {
            Userid: "admin001",
            RplyText: "We're thrilled to hear that, Alice! You must have looked stunning!"
          },
          {
            Userid: "user123",
            RplyText: "I’m thinking of getting one too. Thanks for the review!"
          }
        ]
      },
      {
        Name: "Bob Brown",
        date: "8 July 2012",
        imageLink: "https://example.com/images/bob.jpg",
        ReviewText: "Bought this for my wife, and she loves it! Great quality and beautiful design.",
        rating: 4.5,
        Userid: "user101",
        comments: [
          {
            Userid: "admin001",
            RplyText: "Thank you, Bob! We’re happy your wife loves it!"
          },
          {
            Userid: "user456",
            RplyText: "Such a thoughtful gift!"
          }
        ]
      }
      ],
    },
    {
      id: 6,
      name: "Hydrating Organic Face Serum for Glowing and Healthy Skin",
      Category: "faceproduct",
      discount: null,
      offer: "0%",
      sellcount: 5623,
      author: "Ayesha Rahman",
      rating: 4.7,
      ratingcount:432,
      star: 5,
      filePath: ProductsImages.Sunscreen3,
      price: 45.99,
      summaries: "A lightweight, hydrating face serum enriched with vitamins and antioxidants for a radiant glow and deep nourishment.",
      description: "Enhance your skincare routine with our organic face serum. Infused with natural ingredients like hyaluronic acid and vitamin C, it deeply moisturizes, reduces fine lines, and brightens your complexion. Ideal for all skin types and daily use.",
      size: "50ml",
      colors: ["Transparent"],
      imageSources: [
        {
          ExtImage: ProductsImages.Sunscreen3,
        },
        {
          ExtImage: ProductsImages.Sunscreen1,
        },
        {
          ExtImage: ProductsImages.Sunscreen2,
        },
        {
          ExtImage: ProductsImages.Sunscreen4,
        },
      ],
      benefits: [
          "Deeply hydrates and nourishes the skin.",
          "Reduces fine lines and wrinkles.",
          "Boosts collagen production for a youthful glow.",
          "Lightweight and non-greasy formula.",
          "Suitable for all skin types, including sensitive skin."
      ],

     productReviews: [
      {
        Name: "Sara Ali",
        date: "15 January 2023",
        imageLink: "https://example.com/images/sara.jpg",
        ReviewText: "This serum has changed my skin! My face feels softer, and my dark spots have started to fade.",
        rating: 5,
        Userid: "user456",
        comments: [
          {
            Userid: "user456",
            RplyText: "We're so happy to hear that, Sara! Thanks for sharing your experience."
          },
          {
            Userid: "user456",
            RplyText: "I've been thinking about trying it too! Sounds amazing."
          }
        ]
      },
      {
        Name: "Aisha Noor",
        date: "12 April 2023",
        imageLink: "https://example.com/images/aisha.jpg",
        ReviewText: "Great for sensitive skin! I have no irritation, and my face looks so fresh.",
        rating: 5,
        Userid: "user456",
        comments: [
          {
            Userid: "user456",
            RplyText: "Happy to hear it's working well for you, Aisha!"
          },
          {
            Userid: "user456",
            RplyText: "Same here! Love how gentle it is."
          }
        ]
      }
      ],
}



  ];
  
  