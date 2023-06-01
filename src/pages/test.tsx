import React from 'react';
import strapi from '~/utils/strapi';

export default function test() {
  const getData = async () => {
    const popularCategories = await strapi.find('popular-categories', { populate: '*' });
    console.log(popularCategories.data);
  };
  return (
    <div>
      <button onClick={getData}>Get real data</button>
      {JSON.stringify(getData)}
    </div>
  );
}
