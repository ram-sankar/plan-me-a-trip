const profileDetails = {
  id: 1,
  name: "Ram Sankar",
  citiesCount: 200,
  postsCount: 50,
  location: "Chennai, India",
  posts: [
    {id: 1, image: require("../assets/images/jaipur.jpg"), name: "Exploring Rajasthan", place: "Rajasthan"},
    {id: 2, image: require("../assets/images/taj.jpg"), name: "The Taj Mahal", place: "Agra, Uttar Pradesh"},
    {id: 3, image: require("../assets/images/kedarkantha.jpg"), name: "Into the Himalayas", place: "Kedarkantha, Uttarakhand"}
  ],
  cities: [
    {id: 1, name: "Jaipur", state: "Rajasthan", date: "22/10/2017"},
    {id: 2, name: "Mumbai", state: "Maharastra", date: "2/1/2018"},
    {id: 3, name: "Agra", state: "Uttar Pradesh", date: "13/11/2018"}
  ]
}

const exploreHome = [
  {id: 4, title: 'Divine trip to Rishikesh and Haridwar', cost: 5000, day: 3, night: 2, image: require("../assets/images/rishikesh.jpg"), views: 150, likes: 19, ownerImage: require("../assets/images/travelMonkey.jpg"), ownerName: 'Travel Monkey'},
  {id: 1, title: 'Kudremuka', cost: 3500, day: 3, night: 2, image: require("../assets/images/kodachadri.jpg"), views: 340, likes: 27, ownerImage: require("../assets/images/travelMonkey.jpg"), ownerName: 'Travel Monkey'},
  {id: 2, title: 'Himalayan Trail', cost: 8000, day: 3, night: 2, image: require("../assets/images/himalayas.jpg"), views: 340, likes: 27, ownerImage: require("../assets/images/travelMonkey.jpg"), ownerName: 'Travel Monkey'},
  {id: 3, title: 'Delhi Trip', cost: 1500, day: 2, night: 1, image: require("../assets/images/akshardham.jpg"), views: 70, likes: 12, ownerImage: require("../assets/images/travelMonkey.jpg"), ownerName: 'Travel Monkey'},
]

const userPostHome = [
  {id: 1, title: 'Himalayan Trail', image: require("../assets/images/himalayas.jpg"), views: 340, likes: 27, ownerImage: require("../assets/images/avatar.jpg"), ownerName: 'Ram Sankar'},
  {id: 2, title: 'Delhi Trip', image: require("../assets/images/akshardham.jpg"), views: 70, likes: 12, ownerImage: require("../assets/images/avatar.jpg"), ownerName: 'Ram Sankar'},
  {id: 3, title: 'Divine trip to Rishikesh and Haridwar with Rafting and Yoga', image: require("../assets/images/rishikesh.jpg"), views: 150, likes: 19, ownerImage: require("../assets/images/avatar.jpg"), ownerName: 'Ram Sankar'},
  {id: 4, title: 'Kudremuka', image: require("../assets/images/kodachadri.jpg"), views: 340, likes: 27, ownerImage: require("../assets/images/travelMonkey.jpg"), ownerName: 'Travel Monkey'},
]

const planDetails = {
  id: 1, title: 'Kudremuka', cost: 450200, day: 3, night: 2, image: require("../assets/images/hillWithFalls.jpg"), views: 340, likes: 27, ownerImage: require("../assets/images/travelMonkey.jpg"), ownerName: 'Travel Monkey',
    about: `Kudremukha is a mountain range and name of a peak located in Chikkamagaluru district, in Karnataka, India. It is also the name of a small hill station cum mining town situated near the mountain, about 20 kilometres from Kalasa.`,
    inclusion: [
      {name: 'travel', iconType: 'Ionicons', iconName: 'bus'}, 
      {name: 'food', iconType: 'Ionicons', iconName: 'fast-food-outline'}, 
      {name: 'hotel', iconType: 'MaterialIcons', iconName: 'hotel'}, 
      {name: 'Entry Fee', iconType: 'FontAwesome', iconName: 'money'},
      {name: 'Equipments', iconType: 'MaterialCommunityIcons', iconName: 'hiking'},
    ],
    itinerary: [
      {day: 1, heading: 'Depart from Bangalore', places: [
        {title: 'Depart from Bangalore by 5:00 AM'},
        {title: 'Refresh yourselves at Elniru falls on the way'},
        {title: 'Check in at the homestay, have dinner and hit the bed early'},
      ]},
      {day: 2, heading: 'Kudremukh Trek', places: [
        {title: 'Jeep Ride to the Kudremukh Trek Base'},
        {title: 'Start the trek to Kudremukh by 6:00 am'},
        {title: 'Reach the peak and Descend by 5:00 pm'},
      ]},
      {day: 3, heading: 'Depart from Bangalore', places: [
        {title: 'Refresh yourselves at Hebba falls on the way'},
        {title: 'Reach Bangalore by 5:00 am'},
      ]}
    ]
}

const postDetails = {
  id: 1,
  title: 'Himalayan Trail',
  image: require("../assets/images/himalayas.jpg"), 
  views: 340, 
  likes: 27, 
  ownerImage: require("../assets/images/avatar.jpg"), 
  ownerName: 'Ram Sankar',
  overview: `Kudremukha is a mountain range and name of a peak located in Chikkamagaluru district, in Karnataka, India. It is also the name of a small hill station cum mining town situated near the mountain, about 20 kilometres from Kalasa.`,
  postDate: '21/2/2020',
}

export {
  profileDetails,
  exploreHome,
  planDetails,
  userPostHome,
  postDetails
}