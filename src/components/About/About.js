import React, { useState } from 'react';
import { Building2, Hotel, ShoppingBag, MessageCircle } from 'lucide-react';
import './About.scss';

const About = () => {
  const initialComments = [
    {
      id: 1,
      name: "Sarah Wilson",
      text: "Such a wonderful initiative to preserve Iraqi cultural heritage. Looking forward to the marketplace!",
      date: "March 10, 2024, 2:30 PM",
      avatar: "S"
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      text: "The hotel booking feature will make it so much easier for tourists to explore Iraqi culture.",
      date: "March 12, 2024, 4:15 PM",
      avatar: "A"
    },
  ];

  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() && name.trim()) {
      const comment = {
        id: Date.now(),
        name: name,
        text: newComment,
        date: new Date().toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        avatar: name[0].toUpperCase()
      };
      // إضافة التعليق الجديد وإزالة الأقدم إذا كانت المصفوفة تحتوي على أكثر من تعليقين
      setComments(prevComments => {
        const updatedComments = [comment, ...prevComments];
        if (updatedComments.length > 2) {
          updatedComments.pop(); // حذف أقدم تعليق إذا كانت المصفوفة تحتوي على أكثر من تعليقين
        }
        return updatedComments;
      });
      setNewComment('');
      setName('');
    }
  };

  return (
    <div id="About" className="about-section">
      {/* Features Grid */}
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-card__icon">
            <ShoppingBag />
          </div>
          <h3 className="feature-card__title">Artifacts Marketplace</h3>
          <p className="feature-card__description">
            Coming Soon! Browse and purchase authentic Iraqi artifacts from verified sellers.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-card__icon">
            <Hotel />
          </div>
          <h3 className="feature-card__title">Hotel Bookings</h3>
          <p className="feature-card__description">
            Launching soon! Book your stay at carefully selected hotels across Iraq.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-card__icon">
            <Building2 />
          </div>
          <h3 className="feature-card__title">Cultural Tours</h3>
          <p className="feature-card__description">
            Experience guided tours of historical sites and cultural landmarks.
          </p>
        </div>
      </div>

      {/* Comments Section */}
      <div className="comments-section">
        <div className="comments-section__header">
          <MessageCircle />
          <h2>Community Feedback</h2>

          {/* Comment Form */}
          <form onSubmit={handleSubmit} className="comment-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="comment">Comment</label>
              <textarea
                id="comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Share your thoughts..."
                rows="4"
                required
              />
            </div>
            <button type="submit">Post Comment</button>
          </form>
        </div>

        <div className="comments-section__content">
          {/* Comments Display */}
          <div className="comments-list">
            {comments.map(comment => (
              <div key={comment.id} className="comment">
                <div className="comment__header">
                  <div className="avatar">{comment.avatar}</div>
                  <div className="user-info">
                    <h4>{comment.name}</h4>
                    <span className="date">{comment.date}</span>
                  </div>
                </div>
                <p className="comment__text">{comment.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="mission-card">
        <div className="mission-card__header">
          <h2>About Rahaala</h2>
        </div>
        <div className="mission-card__content">
          <p>
            Our website offers a comprehensive guide to exploring Iraq's most beautiful sights, from historic cities and traditional souks to stunning landscapes and archaeological treasures. Our goal is to be your companion on your trips to discover Iraq by providing detailed and updated information about the most important tourist sites, and providing the best booking services from reliable local companies that help you plan your trip easily and safely.
          </p>
          <p>
            Whether you're interested in visiting historic Baghdad, taking a trip to Babylon, or exploring the beauty of Kurdistan, our location is here to provide you with everything you need for a fun travel experience rich in culture and adventure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
