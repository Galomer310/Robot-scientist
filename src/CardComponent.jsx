import robots from './robots.js';

const CardComponent = ({
  id,
  name,
  username,
  scientificContribution,
  shortBio,
  wikipediaLink,
}) => {
  return (
    <>
      <div className='bg-light-green tc dib br3 pa3 ma2 bw2 shadow-5'>
        <img
          src={`https://robohash.org/${id}?size=200x200`}
          // Set the `src` of the image dynamically using the `id` prop to fetch a unique robot image from RoboHash. 
          // The `size=200x200` query ensures the image is 200x200 pixels.
          alt={`Robot for ${name}`}
          // Use the `name` prop to create a dynamic alt text for the image.
        />

        <div className='CardComponent_details'>
        <h2>{name}</h2>
        <h4>{username}</h4>
        <p>{scientificContribution}</p>
        <p>{shortBio}</p>
        <a href={wikipediaLink} target="_blank" rel="noreferrer">
          Learn more
        </a>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
