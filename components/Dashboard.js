import React, {useState} from 'react'

const Dashboard = (e) => {
  const [tours, setTours] = useState([
    {
      id: 1,  
      tourName: 'Loktak lake',
      description: 'The only floating National Park in the world,The Keibul Lamjao Nationalon the Loktak Lake',
      description2:'is the last natural habitat of the “Sangai” (Rucervus eldii eldii), the dancing deer of Manipur.',
      description3: 'A glimpse of the deer in this unique wetland ecosystem is a must for any wildlife enthusiast..',
      price: 100,
    },
    {
      id: 2,
      tourName: 'Dzuko valley',
      description: 'Explore the wilderness and marvel at the natural wonders in this unforgettable tour',
      description2: ' like Hiking,Camping and many more Activities.',
      price: 150,
    },
    {
      id:3,
      tourName:'Kangla Fort',
      description: 'Kangla Fort, also known as Kangla Palace is a symbol of Manipur greatness located near the banks',
      description2:'of the Imphal river.In Manipuri or Meetei, the word Kangla denotes dry ground Kangla was Manipurs',
      description3:'historic capital and it was from this fort that a succession of Meetei rulers controlled the state.',
      price:50,
    },
  ]);
  const removeTour = (tourId) => {
    const updatedTours = tours.filter(tour => tour.id !== tourId);
    setTours(updatedTours);
  };

  return (
    <div>
      {tours.map(tour => (
        <div key={tour.id}>
          <h2>{tour.tourName}</h2>
          <p>{tour.tourName}</p>        
          <p>{tour.description}</p>
          <p>{tour.description2}</p>
          <p>{tour.description3}</p>
          <p>Price: ${tour.price}</p>
          <button onClick={() => removeTour(tour.id)}>Remove Tour</button>
        </div>
      ))}
    </div>
  );
};
export default Dashboard;