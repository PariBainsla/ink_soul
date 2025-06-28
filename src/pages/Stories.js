import React from 'react';

const Stories = () => {
  return (
    <div className="stories-page">
      <h1>Stories of Courage</h1>
      <p>Explore real-life journeys of people who’ve touched hearts, broken barriers, and led with love.</p>

      {/* We'll map over stories here later */}
      <div className="story-card">
        <h2>Malala Yousafzai</h2>
        <p>
          Survived an attack for speaking up for girls' education. Her strength turned pain into a global mission for education and peace.
        </p>
      </div>

      <div className="story-card">
        <h2>Rosa Parks</h2>
        <p>
          With quiet defiance, she ignited the civil rights movement and taught the world the power of saying “no” to injustice.
        </p>
      </div>

    </div>
  );
};

export default Stories;

