import React from 'react';
import './KorekMountainInfo.css';

const KorekMountainInfo = () => {
  const sections = [
    {
      title: 'About Korek Mountain',
      content: `Korek Mountain, located in the northeastern region of Iraq, is a popular year-round destination for tourists and adventurers alike. Standing at approximately 2,127 meters (6,978 feet), Korek offers breathtaking panoramic views, diverse seasonal activities, and a serene escape into nature.`
    },
    {
      title: 'Key Attractions',
      content: (
        <ul>
          <li><strong>Spectacular Views:</strong> From the summit, visitors can enjoy sweeping views of the surrounding valleys, villages, and the stunning Zagros Mountains...</li>
          <li><strong>Cable Car Ride:</strong> One of the mountain’s main attractions is the cable car (gondola) ride...</li>
          <li><strong>Winter Wonderland:</strong> Korek Mountain is one of the top skiing and snowboarding destinations...</li>
          <li><strong>Summer Adventures:</strong> During the summer, Korek Mountain becomes a paradise for hikers...</li>
        </ul>
      )
    },
    {
      title: 'Activities on Korek Mountain',
      content: (
        <ul>
          <li><strong>Skiing & Snowboarding:</strong> Korek has well-maintained ski runs...</li>
          <li><strong>Hiking & Biking:</strong> The mountain offers scenic trails...</li>
          <li><strong>Paragliding:</strong> For the adventurous, paragliding is available...</li>
        </ul>
      )
    },
    {
      title: 'Accommodation',
      content: `Korek Mountain Resort offers comfortable and luxurious accommodations at the summit...`
    },
    {
      title: 'Plan Your Visit',
      content: (
        <ul>
          <li><strong>Best Time to Visit:</strong> For skiing, the best time to visit is between December and March...</li>
          <li><strong>Location:</strong> Korek Mountain is located about 120 kilometers from Erbil...</li>
          <li><strong>Tickets:</strong> Visitors can purchase tickets for the cable car ride...</li>
        </ul>
      )
    },
  ];

  return (
    <div className="korek-mountain-info">
      {sections.map((section, index) => (
        <div className="info-card" key={index}>
          <h2>{section.title}</h2>
          {typeof section.content === 'string' ? (
            <p>{section.content}</p>
          ) : (
            section.content
          )}
        </div>
      ))}
    </div>
  );
}

export default KorekMountainInfo;
