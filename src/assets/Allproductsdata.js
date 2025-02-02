
import { ProductsImages } from "./Allimagedata";


export const AllproductsData = [
    {
      id: 1,
      name: "Stylish Wireless Keyboard with Long Battery Life and Silent Keys",
      Category:"shoe",
      discount:1.4,
      offer:"10%",
      sellcount:435,
      author: "Sohail Ahmed",
      rating: 4.5,
      star:5,
      filePath: ProductsImages.Shows1,
      price: 25.99,
      summaries:"This sleek wireless headphones offer 20-hour battery life, noise cancellation, and crystal-clear sound quality for an immersive listening experience.",
      description: "Discover the ultimate ergonomic office chair, designed for maximum comfort during long hours. Featuring adjustable lumbar support, breathable mesh fabric, and a sleek modern design, this chair ensures productivity while maintaining posture. Perfect for home or office use, it combines style and functionality seamlessly.",
      size: "250MB",
      colors: ["Red", "Blue", "Green", "Black"],
      imageSources: [
          "/images/product1_1.jpg",
          "/images/product1_2.jpg",
          "/images/product1_3.jpg",
          "/images/product1_4.jpg",
      ],
      benefits: [
          "20-hour battery life for all-day use.",
          "Active noise cancellation for immersive sound.",
          "Lightweight and comfortable design.",
          "Bluetooth 5.0 for seamless connectivity.",
          "Built-in microphone for hands-free calls."
      ], 
     productReviews: [
        {
          Name: "John Doe",
          date:"8 July 2012",
          imageLink: "https://example.com/images/john.jpg",
          ReviewText: "The sound quality is top-notch, and the battery. This wireless headphone is amazing! The sound quality is top-notch, and the battery life lasts all day.",
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
        {
          Name: "Jane Smith",
          date:"8 July 2012",
          imageLink: "https://example.com/images/jane.jpg",
          ReviewText: "The compact blender works great for my morning smoothies. It's powerful and easy to clean!",
          rating: 4,
          Userid: "user456",
          comments: [
            {
              Userid: "admin001",
              RplyText: "Thanks, Jane! We're happy to hear it's making your mornings easier."
            }
          ]
        },
        {
          Name: "Alice Johnson",
          date:"9 July 2012",
          imageLink: "https://example.com/images/alice.jpg",
          ReviewText: "The ergonomic office chair is very comfortable. It has helped reduce my back pain during long work hours.",
          rating: 5,
          Userid: "user789",
          comments: [
            {
              Userid: "admin001",
              RplyText: "We're thrilled to hear that, Alice! Comfort is our top priority."
            },
            {
              Userid: "user123",
              RplyText: "I've been thinking about getting one too. Thanks for the review!"
            }
          ]
        },
        {
          Name: "Bob Brown",
          date:"3 July 2012",
          imageLink: "https://example.com/images/bob.jpg",
          ReviewText: "The lightweight laptop is perfect for travel. It's fast, reliable, and the battery lasts a long time.",
          rating: 4.5,
          Userid: "user101",
          comments: [
            {
              Userid: "admin001",
              RplyText: "Thank you, Bob! We're glad it's meeting your needs for travel and work."
            },
            {
              Userid: "user456",
              RplyText: "I love mine too! It's so convenient for working on the go."
            }
          ]
        }
      ],


    },
    {
      id: 2,
      name: "Compact Travel Backpack with Multiple for Daily Essentials",
      Category:"shoe",
      discount:4,
      offer:"13%",
      sellcount:831,
      author: "Jahidul Islam",
      rating: 4.0,
      star:4,
      filePath: ProductsImages.Shoe3,
      price: 30.99,
      summaries:"This sleek wireless headphones offer 20-hour battery life, noise cancellation, and crystal-clear sound quality for an immersive listening experience.",
      description: "Elevate your music experience with wireless Bluetooth earbuds, equipped with advanced noise cancellation and crystal-clear sound. Boasting a 48-hour battery life, ergonomic fit, and water-resistant design, these earbuds are perfect for workouts, commutes, and calls, offering a truly immersive audio experience.",
      size: "300MB",
      
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
          "Lumbar support for back pain relief.",
          "Adjustable height and armrests.",
          "Breathable mesh fabric for comfort.",
          "360-degree swivel for mobility.",
          "Sturdy base with smooth-rolling casters."
        ],

        

     productReviews: [
      {
        Name: "John Doe",
        date:"8 agust 2012",
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
      {
        Name: "Jane Smith",
        date:"8 July 2012",
        imageLink: "https://example.com/images/jane.jpg",
        ReviewText: "The compact blender works great for my morning smoothies. It's powerful and easy to clean!",
        rating: 4,
        Userid: "user456",
        comments: [
          {
            Userid: "admin001",
            RplyText: "Thanks, Jane! We're happy to hear it's making your mornings easier."
          }
        ]
      },
      {
        Name: "Alice Johnson",
        date:"18 July 2012",
        imageLink: "https://example.com/images/alice.jpg",
        ReviewText: "The ergonomic office chair is very comfortable. It has helped reduce my back pain during long work hours.",
        rating: 5,
        Userid: "user789",
        comments: [
          {
            Userid: "admin001",
            RplyText: "We're thrilled to hear that, Alice! Comfort is our top priority."
          },
          {
            Userid: "user123",
            RplyText: "I've been thinking about getting one too. Thanks for the review!"
          }
        ]
      },
      {
        Name: "Bob Brown",
        date:"8 July 2022",
        imageLink: "https://example.com/images/bob.jpg",
        ReviewText: "The lightweight laptop is perfect for travel. It's fast, reliable, and the battery lasts a long time.",
        rating: 4.5,
        Userid: "user101",
        comments: [
          {
            Userid: "admin001",
            RplyText: "Thank you, Bob! We're glad it's meeting your needs for travel and work."
          },
          {
            Userid: "user456",
            RplyText: "I love mine too! It's so convenient for working on the go."
          }
        ]
      }
    ],
      
    },
    {
      id: 3,
      name: "Stainless Steel Water Bottle with Control Design",
      Category:"shoe",
      discount:1.4,
      offer:"10%",
      sellcount:435,
      author: "Shamima Sultana",
      rating: 3.8,
      star:3,
      filePath: ProductsImages.Headphone,
      price: 19.99,
      summaries:"This sleek wireless headphones offer 20-hour battery life, noise cancellation, and crystal-clear sound quality for an immersive listening experience.",
      description: "Transform your workspace with an adjustable height standing desk, featuring a smooth electric lift system for seamless transitions. Designed for ergonomic support and productivity, this desk is ideal for home offices or professional setups. Its sturdy build and spacious surface ensure a clutter-free experience.",
      size: "220MB",
      colors: ["Red", "Blue", "Green", "Black"],
      imageSources: [
          "/images/product3_1.jpg",
          "/images/product3_2.jpg",
          "/images/product3_3.jpg",
          "/images/product3_4.jpg",
      ],
        benefits: [
          "15.6-inch Full HD display for clear visuals.",
          "8GB RAM and 256GB SSD for fast performance.",
          "Long-lasting battery for all-day use.",
          "Sleek and portable design for on-the-go use.",
          "Pre-installed with Windows 11 for productivity."
      ],
      
    },
    {
      id: 4,
      name: "Durable Fitness Resistance Bands for Home Workouts Training",
      Category:"shoe",
      discount:1.1,
      offer:"10%",
      sellcount:75,
      author: "Mehzabin Chowdhury",
      rating: 4.7,
      star:5,
      filePath: ProductsImages.Shows5,
      price: 40.99,
      summaries:"This sleek wireless headphones offer 20-hour battery life, noise cancellation, and crystal-clear sound quality for an immersive listening experience.",
      description: "Stay hydrated with a stainless steel water bottle that keeps your beverages hot or cold for hours. With a leak-proof lid and sleek, durable design, it’s perfect for on-the-go use, whether you're at work, the gym, or traveling outdoors.",
      size: "350MB",
      colors: ["Red", "Blue", "Green", "Black"],
      imageSources: [
          "/images/product4_1.jpg",
          "/images/product4_2.jpg",
          "/images/product4_3.jpg",
          "/images/product4_4.jpg",
      ],
      benefits: [
          "Tracks heart rate, steps, and sleep patterns.",
          "Waterproof design for swimming and workouts.",
          "7-day battery life for extended use.",
          "Syncs with smartphones for notifications.",
          "Customizable watch faces for personal style."
      ],

      

     productReviews: [
      {
        Name: "John Doe",
        date:"8 July 2012",
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
      {
        Name: "Jane Smith",
        date:"8 July 2012",
        imageLink: "https://example.com/images/jane.jpg",
        ReviewText: "The compact blender works great for my morning smoothies. It's powerful and easy to clean!",
        rating: 4,
        Userid: "user456",
        comments: [
          {
            Userid: "admin001",
            RplyText: "Thanks, Jane! We're happy to hear it's making your mornings easier."
          }
        ]
      },
      {
        Name: "Alice Johnson",
        date:"8 July 2012",
        imageLink: "https://example.com/images/alice.jpg",
        ReviewText: "The ergonomic office chair is very comfortable. It has helped reduce my back pain during long work hours.",
        rating: 5,
        Userid: "user789",
        comments: [
          {
            Userid: "admin001",
            RplyText: "We're thrilled to hear that, Alice! Comfort is our top priority."
          },
          {
            Userid: "user123",
            RplyText: "I've been thinking about getting one too. Thanks for the review!"
          }
        ]
      },
      {
        Name: "Bob Brown",
        date:"8 July 2012",
        imageLink: "https://example.com/images/bob.jpg",
        ReviewText: "The lightweight laptop is perfect for travel. It's fast, reliable, and the battery lasts a long time.",
        rating: 4.5,
        Userid: "user101",
        comments: [
          {
            Userid: "admin001",
            RplyText: "Thank you, Bob! We're glad it's meeting your needs for travel and work."
          },
          {
            Userid: "user456",
            RplyText: "I love mine too! It's so convenient for working on the go."
          }
        ]
      }
    ],

    },
    {
      id: 5,
      name: "Organic Herbal Tea Blend for Relaxation and Better Sleep Quality",
      Category:"shoe",
      discount:null,
      offer:"0%",
      sellcount:7531,
      author: "Farhan Rahman",
      rating: 4.3,
      star:4,
      filePath: ProductsImages.Shows6,
      price: 75.5,
      summaries:"This sleek wireless headphones offer 20-hour battery life, noise cancellation, and crystal-clear sound quality for an immersive listening experience.",
      description: "Achieve flawless lighting with an adjustable LED ring light, perfect for photography, video recording, or live streaming. Featuring customizable brightness settings, a sturdy tripod, and USB power, this ring light ensures professional-quality illumination for all your creative needs.",
      size: "200MB",
      colors: ["Red", "Blue", "Green", "Black"],
      imageSources: [
          "/images/product5_1.jpg",
          "/images/product5_2.jpg",
          "/images/product5_3.jpg",
          "/images/product5_4.jpg",
      ],
      benefits: [
          "5-liter capacity for family-sized meals.",
          "Rapid air technology for crispy, healthy food.",
          "Digital controls for easy operation.",
          "Non-stick basket for easy cleaning.",
          "Saves up to 70% energy compared to frying."
      ],
      

     productReviews: [
      {
        Name: "John Doe",
        date:"8 July 2012",
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
      {
        Name: "Jane Smith",
        date:"8 July 2012",
        imageLink: "https://example.com/images/jane.jpg",
        ReviewText: "The compact blender works great for my morning smoothies. It's powerful and easy to clean!",
        rating: 4,
        Userid: "user456",
        comments: [
          {
            Userid: "admin001",
            RplyText: "Thanks, Jane! We're happy to hear it's making your mornings easier."
          }
        ]
      },
      {
        Name: "Alice Johnson",
        date:"8 July 2012",
        imageLink: "https://example.com/images/alice.jpg",
        ReviewText: "The ergonomic office chair is very comfortable. It has helped reduce my back pain during long work hours.",
        rating: 5,
        Userid: "user789",
        comments: [
          {
            Userid: "admin001",
            RplyText: "We're thrilled to hear that, Alice! Comfort is our top priority."
          },
          {
            Userid: "user123",
            RplyText: "I've been thinking about getting one too. Thanks for the review!"
          }
        ]
      },
      {
        Name: "Bob Brown",
        date:"8 July 2012",
        imageLink: "https://example.com/images/bob.jpg",
        ReviewText: "The lightweight laptop is perfect for travel. It's fast, reliable, and the battery lasts a long time.",
        rating: 4.5,
        Userid: "user101",
        comments: [
          {
            Userid: "admin001",
            RplyText: "Thank you, Bob! We're glad it's meeting your needs for travel and work."
          },
          {
            Userid: "user456",
            RplyText: "I love mine too! It's so convenient for working on the go."
          }
        ]
      }
      ],
    },
  ];
  
  